import { client } from "./client";

//  대분류 카테고리 불러오기
export const getBigcate = async setCategory => {
  try {
    const res = await client.get(`/admin/category`);
    const result = await res.data;

    console.log("카테정보", result);
    setCategory(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 포트폴리오 리스트 불러오기
export const getPortFolioList = async ({ setStudentPFList, page }) => {
  try {
    const res = await client.get(
      `/admin/student/portfolio?page=${page}&size=10`,
    );
    const result = await res.data;

    console.log("포트폴리오리스트", result);
    setStudentPFList(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 포트폴리오 보관함으로 보내기
export const patchSendSaved = async (savedItemNum) => {
  console.log("값 들어오니?", savedItemNum);

  try {
    const res = await client.patch(
      `/admin/student/storage?istudent=${savedItemNum}`,
    );
    const result = await res.data;
    console.log("보관함 감ㅋ", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
