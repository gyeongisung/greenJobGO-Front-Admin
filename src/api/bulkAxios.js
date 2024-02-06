import { client } from "../api/client";

export const getBulkStudentList = async (
  setListData,
  page,
  setCount,
  clickCate,
  clickSubj,
  setErrorInfo,
  setNothing,
) => {
  try {
    let apiUrl = `${process.env.REACT_APP_BS_URL}=${page}&size=10&sort=icourseSubject%2CDESC`;

    if (clickCate) {
      apiUrl += `&iclassification=${clickCate}`;
    }

    if (clickSubj) {
      apiUrl += `&icourseSubject=${clickSubj}`;
    }
    const res = await client.get(apiUrl);
    setListData(res.data.subject);
    setCount(res.data.page.idx);
    setNothing(false);
    if (res.data.subject.length === 0) {
      setNothing(true);
    }
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorInfo(`[${status}Error] 서버 내부 오류`);
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

export const getClassificationList = async (
  category,
  setSubjData,
  setErrorInfo,
) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_DBC_URL}=${category}`);
    setSubjData(res.data.res);
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorInfo(`[${status}Error] 서버 내부 오류`);
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

export const getCategory = async (setCategoryData, setErrorInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_CT_URL}`);
    setCategoryData(res.data);
  } catch (error) {
    setErrorInfo(`Category: ${error.message}`);
  }
};

export const deleteStudent = async (
  icourseSubject,
  iclassification,
  setErrorInfo,
) => {
  try {
    const res = await client.delete(
      `${process.env.REACT_APP_DSC_URL}=${iclassification}&icourseSubject=${icourseSubject}`,
    );
    const result = res.data;
    if (res.status === 200) {
      setErrorInfo("삭제가 완료되었습니다.");
    }
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorInfo(`[${status}Error] 서버 내부 오류`);
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
