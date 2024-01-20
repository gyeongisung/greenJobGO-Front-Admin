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
  resultUrl,
  setNothing,
}) => {
  // console.log("query들어오냐 ㅋ ", resultUrl);

  try {
    const res = await client.get(
      `/admin/student/portfolio?page=${page}&size=10&${resultUrl}`,
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
export const patchSendSaved = async ({
  savedItemNum,
  isSaved,
  setErrorInfo,
}) => {
  console.log("savedItemNum 들어오니?", savedItemNum);
  console.log("isSaved 들어오니?", isSaved);

  try {
    const res = await client.patch(
      `/admin/student/storage?istudent=${savedItemNum}&storageYn=${isSaved}`,
    );
    const result = await res.data;
    console.log("보관함 patchㅋ", result);
    {
      isSaved === 1
        ? setErrorInfo("보관함 이동이 완료되었습니다.")
        : isSaved === 0
          ? setErrorInfo("보관함 취소가 완료되었습니다.")
          : null;
    }
    return result;
  } catch (error) {
    console.log(error);
    setErrorInfo(error);
  }
};

// 보관함 리스트를 불러오자
export const getSavedPFList = async ({
  setSavedPFList,
  page,
  setCount,
  resultUrl,
  setNothing,
}) => {
  try {
    const res = await client.get(
      `/admin/student/storage?page=${page}&size=10&sort=istudent%2CASC${resultUrl}`,
    );

    const result = await res.data;
    console.log("보관함 리스트", res.config.url);
    setSavedPFList(result);
    setCount(result.page.idx);
    setNothing(false);
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
export const patchSendMain = async ({
  clickItems,
  mainYn,
  setErrorInfo,
  setClickItems,
}) => {
  console.log("메인보내는 mainList 들어오니?", clickItems);
  console.log("mainYn 들어오니?", mainYn);

  try {
    const queryString = clickItems.map(item => `istudent=${item}`).join("&");
    const res = await client.patch(
      `/admin/student/main?${queryString}&companyMainYn=${mainYn}`,
    );
    const result = await res.data;
    console.log("메인보내기patch성공", result);
    setErrorInfo("메인 포트폴리오 설정이 완료되었습니다.");
    return result;
  } catch (error) {
    console.log(error.response.data);
    setErrorInfo(error.response.data.message);
    return setClickItems([]);
  }
};
// 메인 취소
export const patchCancelMain = async ({
  query,
  mainYn,
  setErrorCancelInfo,
  setClickItems,
}) => {
  console.log("메인 취소 들어오니?", query);
  console.log("mainYn 들어오니?", mainYn);

  try {
    const res = await client.patch(
      `/admin/student/main?${query}&companyMainYn=${mainYn}`,
    );
    const result = await res.data;
    console.log("메인취소patch성공", result.url);
    setErrorCancelInfo("메인 포트폴리오 설정이 취소되었습니다.");
    return result;
  } catch (error) {
    console.log(error.response.data.message);
    setErrorCancelInfo(error.response.data.message);
    // setClickItems([]);
    return;
  }
};
