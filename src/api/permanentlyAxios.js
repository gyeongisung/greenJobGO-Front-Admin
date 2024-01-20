import { client } from "../api/client";

// 수강과목 불러오기
export const getSubjectInfo = async ({ selectCate, setSubjectList }) => {
  try {
    // const res = await client.get(
    //   `/admin/student/dropbox-category?${
    //     selectCate ? `iclassification=${selectCate}` : ""
    //   }`,
    // );
    const res = await client.get(
      `/admin/student/dropbox-category?iclassification=${selectCate}`,
    );
    const result = await res.data;
    setSubjectList(result.res);
    console.log("수강과목 불러옵니다 subject list", result);
    return result;
  } catch (error) {
    console.log("수강과목 에러", error);
  }
};

// 영구삭제 가능한 리스트 불러오기
export const getCompleteDeleteList = async ({
  setListData,
  setCount,
  page,
  resultUrl,
  setNothing,
}) => {
  try {
    const res = await client.get(
      `/admin/student/oneyearago?page=${page}&size=10&sort=istudent%2CASC&${resultUrl}`,
    );

    const result = await res.data;
    setListData(result.vo);
    setCount(result.page.idx);
    setNothing(false);
    if (result.vo.length === 0) {
      setNothing(true);
      // console.log("결과 없어요");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

// DELETE
export const deleteCompleteStudent = async ({
  clickItems,
  setErrorInfo,
  setClickItems,
}) => {
  try {
    const queryString = clickItems.map(item => `istudent=${item}`).join("&");
    const res = await client.delete(`/admin/student/oneyearago?${queryString}`);
    const result = res.data;
    console.log("완전 삭제성공", result);
    setErrorInfo("영구 삭제가 완료되었습니다.");
    return result;
  } catch (error) {
    console.log("완전DELETE 실패", error);
    setErrorInfo("영구 삭제가 처리되지 않았습니다.", error);
    return;
  }
};
