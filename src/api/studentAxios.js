import { client } from "./client";

export const getStudentList = async (
  setListData,
  setPageState,
  page,
  search,
  category,
  setNothing,
  setErrorApiInfo,
) => {
  try {
    let res;
    if (category) {
      res = await client.get(
        `${process.env.REACT_APP_SL_URL}page=${page}&size=10&sort=istudent%2CASC&icategory=${category}&subjectName=${search}`,
      );
    } else {
      res = await client.get(
        `${process.env.REACT_APP_SL_URL}page=${page}&size=10&sort=istudent%2CASC&subjectName=${search}`,
      );
    }
    setListData(res.data.res);
    setPageState(prev => ({ ...prev, count: res.data.page.idx }));
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
        case 437:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 438:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 445:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};
export const getStudentPofolEdit = async (
  istudent,
  setUserFile,
  setErrorApiInfo,
) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_SD_URL}=${istudent}`);

    setUserFile({
      portFolio: res.data.file?.portfolio,
      fileLinks: res.data.file?.fileLinks,
    });
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
export const getStudentDetail = async (
  istudent,
  setUserInfo,
  setUserFile,
  setHashSave,
  setErrorApiInfo,
) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_SD_URL}=${istudent}`);

    const { certificates, birthday, subject, ...userInfoDetail } = res.data.res;

    const birthYear = birthday.split("-", 1);
    setUserFile({
      thumbNail: res.data.file?.img,
      resume: res.data.file?.resume,
      portFolio: res.data.file?.portfolio,
      fileLinks: res.data.file?.fileLinks,
    });
    setHashSave(certificates);
    setUserInfo({
      userDetail: userInfoDetail,
      certificateValue: certificates,
      birth: birthday,
      subject: subject,
    });
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

export const getStudenListDownload = async setErrorApiInfo => {
  try {
    const { data, headers } = await client.get(
      `${process.env.REACT_APP_SED_URL}`,
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
    setErrorApiInfo("다운로드 됩니다.");
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
        case 437:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 438:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 445:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

export const postExcelSign = async (formData, setErrorApiInfo) => {
  try {
    const res = await client.post(
      `${process.env.REACT_APP_SEU_URL}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    if (res.data === 1) {
      setErrorApiInfo("업로드 성공했습니다.");
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
        case 437:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 438:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 445:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};
export const postStudentResumeUpload = async (
  istudent,
  resumeOneWord,
  formData,
  setErrorApiInfo,
) => {
  try {
    const res = await client.post(
      `${process.env.REACT_APP_SF_URL}=${istudent}&iFileCategory=1&introducedLine=${resumeOneWord}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    const result = res.status;

    if (result === 200) {
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
        case 453:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 454:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 455:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 456:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 457:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 458:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};
export const postStudentPofolUpload = async (
  studentId,
  iFile,
  formData,
  description,
  linkUrl,
  setErrorApiInfo,
) => {
  try {
    const baseUrl = `${process.env.REACT_APP_SF_URL}=${studentId}&iFileCategory=${iFile}`;
    let apiUrl;
    switch (iFile) {
      case 2:
        apiUrl = `${baseUrl}&oneWord=${description}`;
        break;
      case 3:
        apiUrl = `${baseUrl}&oneWord=${description}&fileLink=${linkUrl}`;
        break;
      case 4:
        apiUrl = `${baseUrl}`;
    }
    const res = await client.post(apiUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (res.data.res.ifile) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    const { response } = error;
    const { status } = response;
    if (response) {
      switch (status) {
        case 453:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 454:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 455:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 456:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 457:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 458:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 401:
          setErrorApiInfo(
            `[${status}Error] 로그인 시간이 만료되었습니다. 로그아웃 후 재접속 해주세요.`,
          );
          break;
        default:
          setErrorApiInfo("업로드에 실패했습니다.");
      }
    } else {
      setErrorApiInfo(`Portfolio Upload: ${error.message}`);
    }
  }
};

export const deleteStudent = async istudent => {
  try {
    const res = await client.delete(
      `${process.env.REACT_APP_SI_URL}=${istudent}`,
    );
  } catch (error) {
    console.log("관리자에게 문의 바랍니다.");
  }
};

export const deleteFile = async (fileId, setErrorApiInfo) => {
  try {
    const res = await client.delete(
      `${process.env.REACT_APP_SFD_URL}=${fileId}`,
    );
    const result = res;
    if (result.status === 200) {
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
        case 437:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 438:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 445:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 454:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

export const deleteCertificate = async (istudent, icertificate) => {
  try {
    const res = await client.delete(
      `${process.env.REACT_APP_SCD_URL}=${istudent}&icertificate=${icertificate}`,
    );
    const result = res;
    if (result.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("관리자에게 문의 바랍니다.");
  }
};

export const putStudentInfo = async (
  istudent,
  userInfo,
  birth,
  setErrorApiInfo,
) => {
  try {
    const res = await client.put(
      `${process.env.REACT_APP_SI_URL}=${istudent}&studentName=${userInfo.name}&address=${userInfo.address}&email=${userInfo.email}&education=${userInfo.education}&mobileNumber=${userInfo.mobileNumber}&huntJobYn=${userInfo.huntJobYn}&birthday=${birth}&gender=${userInfo.gender}`,
    );

    const result = res;
    if (result.status === 200) {
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
        case 437:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 438:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 445:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

export const postStudentCertificate = async (studentId, newHashTag) => {
  try {
    const res = await client.post(
      `${process.env.REACT_APP_SCD_URL}=${studentId}&certificates=${newHashTag}`,
    );

    const result = res;
    if (result.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("관리자에게 문의 바랍니다.");
  }
};

export const patchMainPofolSelected = async (
  studentId,
  mainCheck,
  setErrorApiInfo,
) => {
  try {
    const res = await client.patch(
      `${process.env.REACT_APP_SPM_URL}=${studentId}&ifile=${mainCheck}`,
    );
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
        case 456:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};
