import { client } from "./client";

//  대분류 카테고리 불러오기
export const getBigcate = async (setCategory, setErrorApiInfo) => {
  console.log("카테정보 불러옵니다");

  try {
    const res = await client.get(`/admin/category`);
    const result = await res.data;
    setCategory(result);
    return result;
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

// 포트폴리오 리스트 불러오기
export const getPortFolioList = async ({
  setStudentPFList,
  page,
  setCount,
  resultUrl,
  setNothing,
  setErrorApiInfo,
}) => {
  console.log("query들어오냐 ㅋ ", resultUrl);

  try {
    const res = await client.get(
      `/admin/student/portfolio?page=${page}&size=10&${resultUrl}`,
    );

    const result = await res.data;
    setStudentPFList(result);
    setCount(result.page.idx);
    setNothing(false);
    if (result.res.length === 0) {
      setNothing(true);
    }
    return result;
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

// 보관함으로 보내거나 취소하기
export const patchSendSaved = async ({
  savedItemNum,
  isSaved,
  setErrorInfo,
  setErrorApiInfo,
}) => {
  try {
    const res = await client.patch(
      `/admin/student/storage?istudent=${savedItemNum}&storageYn=${isSaved}`,
    );
    const result = res.data;
    console.log("보관함 patchㅋ", result);

    isSaved === 1
      ? setErrorInfo("보관함 이동이 완료되었습니다.")
      : isSaved === 0
        ? setErrorInfo("보관함 취소가 완료되었습니다.")
        : null;
    return result;
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

// 보관함 리스트를 불러오자
export const getSavedPFList = async ({
  setSavedPFList,
  page,
  setCount,
  resultUrl,
  setNothing,
  setErrorApiInfo,
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
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

// 메인 보내기
export const patchSendMain = async ({ clickItems, mainYn, setErrorInfo }) => {
  try {
    const queryString = clickItems.map(item => `istudent=${item}`).join("&");
    const res = await client.patch(
      `/admin/student/main?${queryString}&companyMainYn=${mainYn}`,
    );
    const result = await res.data;
    setErrorInfo("메인 포트폴리오 설정이 완료되었습니다.");
    return result;
  } catch (error) {
    console.log(error);
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 455:
          setErrorInfo(`${error.response.data.message}`);
          break;
        case 401:
          setErrorInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};
// 메인 취소
export const patchCancelMain = async ({
  query,
  mainYn,
  setErrorCancelInfo,
}) => {
  try {
    const res = await client.patch(
      `/admin/student/main?${query}&companyMainYn=${mainYn}`,
    );
    const result = await res.data;
    console.log("메인취소patch성공", result.url);
    setErrorCancelInfo("메인 포트폴리오 설정이 취소되었습니다.");
    return result;
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorCancelInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 455:
          setErrorCancelInfo(`${error.response.data.message}`);
          break;
        case 401:
          setErrorCancelInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorCancelInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};
