import { client } from "./client";

export const getCompanyList = async (
  setListData,
  setCount,
  page,
  search,
  setErrorApiInfo,
  setNothing,
) => {
  try {
    const res = await client.get(
      `${process.env.REACT_APP_CL_URL}=${page}&size=10&companyName=${search}`,
    );
    setListData(res.data.list);
    setCount(res.data.totalcount);

    setNothing(false);
    if (res.data.list.length === 0) {
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

export const getCompanyListDownload = async () => {
  try {
    const { data, headers } = await client.get(
      `${process.env.REACT_APP_CED_URL}`,
      {
        responseType: "blob",
      },
    );
    const blob = new Blob([data], {
      type: headers["content-type"],
    });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;

    const filename = headers["content-disposition"]
      .split("filename=")[1]
      .split(".")[0];
    link.download = filename;
    link.click();
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.log("엑셀다운로드 실패. 관리자에게 문의하세요.");
  }
};

export const postCompanyExcel = async (companyfile, setErrorApiInfo) => {
  try {
    const res = await client.post(
      `${process.env.REACT_APP_CEU_URL}`,
      companyfile,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    if (res.data === 1) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 500:
          setErrorApiInfo(`[${status}Error] 서버 내부 오류`);
          break;
        case 453:
          setErrorApiInfo(`[${status}Error] 파일을 업로드 할 수 없습니다.`);
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

export const postCompanyAccept = async (payload, setErrorApiInfo) => {
  try {
    const res = await client.post(`${process.env.REACT_APP_CLP_URL}`, payload);
    if (res.data.companyCode) {
      return { success: true };
    } else {
      return { success: false };
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
        case 440:
          setErrorApiInfo(`[${status}Error] 기업이름 중복입니다.`);
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

export const deleteCompany = async (checkedCompanyCode, setErrorApiInfo) => {
  try {
    const res = await client.delete(
      `${process.env.REACT_APP_CLP_URL}/${checkedCompanyCode}`,
    );
    setErrorApiInfo("삭제가 정상적으로 처리되었습니다.");
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

export const patchCompany = async (companyData, setErrorApiInfo) => {
  try {
    const res = await client.patch(
      `${process.env.REACT_APP_CP_URL}=${companyData.companyCode}&area=${companyData.area}&companyName=${companyData.companyName}&manager=${companyData.manager}&leaderName=${companyData.leaderName}&homepage=${companyData.homepage}&phoneNumber=${companyData.phoneNumber}&dateConslusion=${companyData.dateConslusion}`,
    );
    if (res.data.companyCode) {
      return { success: true };
    } else {
      return { success: false };
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
