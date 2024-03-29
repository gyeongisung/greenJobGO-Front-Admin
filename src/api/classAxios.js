import client from "./client";

export const getCategory = async (setCategoryData, setErrorApiInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_CT_URL}`);
    setCategoryData(res.data);
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

export const getClassSubject = async (
  setListData,
  setCount,
  page,
  search,
  category,
  setErrorApiInfo,
  setNothing,
) => {
  try {
    let res;
    if (category) {
      res = await client.get(
        `${process.env.REACT_APP_SSUB_URL}=${page}&size=10&sort=icourseSubject%2CASC&subjectName=${search}&iclassification=${category}&condition=0&delYn=0`,
      );
    } else {
      res = await client.get(
        `${process.env.REACT_APP_SSUB_URL}=${page}&size=10&sort=icourseSubject%2CASC&subjectName=${search}&condition=0&delYn=0`,
      );
    }
    setListData(res.data.res);
    setCount(res.data.page.idx);
    setNothing(false);

    if (res.data.res.length === 0) {
      setNothing(true);
    }
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

export const postCategory = async (postData, setErrorApiInfo) => {
  try {
    const res = await client.post(`${process.env.REACT_APP_CT_URL}`, postData);
    if (res.data.iclassification) {
      setErrorApiInfo(`카테고리 추가가 완료 되었습니다.`);
    }
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

export const postClassSubject = async (payload, setErrorApiInfo) => {
  try {
    const res = await client.post(`${process.env.REACT_APP_CSUB_URL}`, payload);

    if (res.data.icourseSubject) {
      setErrorApiInfo(`과정 추가가 완료 되었습니다.`);
    }
    return res;
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

export const deleteCategory = async (data, setErrorApiInfo) => {
  try {
    const res = await client.delete(`${process.env.REACT_APP_CCC_URL}=${data}`);
    setErrorApiInfo(`삭제가 완료 되었습니다.`);
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

export const deleteClassSubject = async (icourseSubject, setErrorApiInfo) => {
  try {
    const res = await client.delete(
      `${process.env.REACT_APP_DCSUB_URL}=${icourseSubject}`,
    );
    setErrorApiInfo(`삭제가 완료 되었습니다.`);
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

export const putClassSubject = async (payload, setErrorApiInfo) => {
  try {
    const res = await client.put(
      `${process.env.REACT_APP_DCSUB_URL}=${payload.icourseSubject}&iclassification=${payload.iclassification}&courseSubjectName=${payload.courseSubjectName}&startedAt=${payload.startedAt}&endedAt=${payload.endedAt}&instructor=${payload.instructor}&lectureRoom=${payload.lectureRoom}&round=${payload.round}&classTime=${payload.classTime}`,
    );
    if (res.data.icourseSubject) {
      setErrorApiInfo(`수정이 완료 되었습니다.`);
    }
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
