import { client } from "./client";

//  대분류 카테고리 불러오기
export const getBigcate = async (setCategory, setErrorApiInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_CT_URL}`);
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
  try {
    const res = await client.get(
      `${process.env.REACT_APP_PFL_URL}=${page}&size=10&${resultUrl}`,
    );

    const result = await res.data;
    setStudentPFList(result);
    setCount(result.page.idx);
    setNothing(false);
    console.log(result);
    if (result.res.length === 0) {
      setNothing(true);
    }
    return result;
  } catch (error) {
    if (error.response) {
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
      `${process.env.REACT_APP_PSS_URL}=${savedItemNum}&storageYn=${isSaved}`,
    );
    const result = res.data;
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
      `${process.env.REACT_APP_SPFL_URL}=${page}&size=10&sort=istudent%2CASC${resultUrl}`,
    );

    const result = await res.data;
    if (result.res.length !== 0) {
      setSavedPFList(result);
      setCount(result.page.idx);
      setNothing(false);
    }
    if (result.res.length === 0) {
      setNothing(true);
    }
    return result;
  } catch (error) {
    if (error) {
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
  }
};

// 메인 보내기
export const patchSendMain = async ({ clickItems, mainYn, setErrorInfo }) => {
  try {
    const queryString = clickItems.map(item => `istudent=${item}`).join("&");
    const res = await client.patch(
      `${process.env.REACT_APP_PSM_URL}${queryString}&companyMainYn=${mainYn}`,
    );
    const result = await res.data;
    setErrorInfo("메인 포트폴리오 설정이 완료되었습니다.");
    return result;
  } catch (error) {
    if (error.response) {
      const { response } = error;
      const { status } = response;
      switch (status) {
        case 500:
          setErrorInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 461:
          setErrorInfo(
            `취업한 학생의 포트폴리오는 적용 할 수 없습니다. 다시 선택해 주세요.`,
          );
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
      `${process.env.REACT_APP_PSM_URL}${query}&companyMainYn=${mainYn}`,
    );
    const result = await res.data;
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
