import { client } from "./client";

//  대분류 카테고리 불러오기
export const getBigcate = async setCategory => {
  console.log("카테정보 불러옵니다");

  try {
    const res = await client.get(`/admin/category`);
    const result = await res.data;
    setCategory(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 포트폴리오 리스트 불러오기
export const getPortFolioList = async ({
  setStudentPFList,
  page,
  setCount,
  query,
  setNothing,
}) => {
  console.log("query들어오냐 ㅋ ", query);

  try {
    const res = await client.get(
      `/admin/student/portfolio?page=${page}&size=10&${query}`,
    );

    const result = await res.data;
    console.log("포트폴리오리스트", result);
    setStudentPFList(result);
    setCount(result.page.idx);
    setNothing(false);
    if (result.res.length === 0) {
      setNothing(true);
      // console.log("결과 없어요");
    }
    return result;
  } catch (error) {
    console.log(error);
    // setNothing(true);
  }
};

// 보관함으로 보내거나 취소하기
export const patchSendSaved = async ({ savedItemNum, isSaved }) => {
  console.log("savedItemNum 들어오니?", savedItemNum);
  console.log("isSaved 들어오니?", isSaved);

  try {
    const res = await client.patch(
      `/admin/student/storage?istudent=${savedItemNum}&storageYn=${isSaved}`,
    );
    const result = await res.data;
    console.log("보관함 patchㅋ", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 보관함 리스트를 불러오자
export const getSavedPFList = async ({
  setSavedPFList,
  page,
  setCount,
  query,
  setNothing,
  setClickItems,
}) => {
  console.log("query들어오냐 ㅋ ", query);

  try {
    const res = await client.get(
      `/admin/student/storage?page=${page}&size=10&${query}`,
    );

    const result = await res.data;
    console.log("보관함 리스트", result);
    setSavedPFList(result);
    setCount(result.page.idx);
    setNothing(false);
    setClickItems(result.res.companyMainYn);
    if (result.res.length === 0) {
      setNothing(true);
      // console.log("결과 없어요");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};


// 메인 보내기
export const patchSendMain = async ({ query, mainYn }) => {
  console.log("query 들어오니?", query);
  console.log("mainYn 들어오니?", mainYn);
  try {
    const res = await client.patch(
      `/admin/student/main?${query}&companyMainYn=${mainYn}`,
    );
    const result = await res.data;
    console.log("메인 patchㅋ", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
