import { client } from "./client";

//  취업담당자 리스트 불러오기
export const getJobManagerInfo = async (setmngProflieData, setErrorApiInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_PF_URL}`);
    const result = await res.data;
    setmngProflieData(result);
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

// post
export const postManagerInfo = async (formData, setErrorApiInfo) => {
  try {
    const res = await client.post(`${process.env.REACT_APP_PF_URL}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = res.data;
    setErrorApiInfo(`성공적으로 처리되었습니다`);

    return result;
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 446:
          setErrorApiInfo(`[${status}Error] 이미 등록되어있는 담당자 입니다.`);
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

// patch
export const patchManagerEdit = async ({
  formData,
  editManager,
  query,
  setErrorApiInfo,
}) => {
  try {
    const res = await client.patch(
      `${process.env.REACT_APP_MGE_URL}=${editManager.iemply}&${query}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    const result = res.data;
    setErrorApiInfo(`성공적으로 처리되었습니다`);

    return result;
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 446:
          setErrorApiInfo(`[${status}Error] 이미 등록되어있는 담당자 입니다.`);
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

// DELETE
export const deleteJobManagerInfo = async (iemply, setErrorApiInfo) => {
  try {
    const res = await client.delete(
      `${process.env.REACT_APP_PF_URL}/${iemply}`,
    );
    const result = res.data;
    setErrorApiInfo(`성공적으로 처리되었습니다`);

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
