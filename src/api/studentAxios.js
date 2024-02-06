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
  console.log("api", category);
  try {
    let res;
    if (category) {
      res = await client.get(
        `/admin/student?page=${page}&size=10&sort=istudent%2CASC&icategory=${category}&subjectName=${search}`,
      );
    } else {
      res = await client.get(
        `/admin/student?page=${page}&size=10&sort=istudent%2CASC&subjectName=${search}`,
      );
    }
    console.log("res.data.res", res.data.res);
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

export const getStudentDetail = async (
  istudent,
  setUserInfo,
  setUserFile,
  setHashSave,
) => {
  try {
    const res = await client.get(`/admin/student/detail?istudent=${istudent}`);

    const { certificates, birthday, subject, ...userInfoDetail } = res.data.res;

    const birthYear = birthday.split("-", 1);

    setUserFile({
      thumbNail: res.data.file.img?.img,
      resume: res.data.file?.resume,
      portFolio: res.data.file?.portfolio,
      fileLinks: res.data.file?.fileLinks,
    });

    console.log(res.data.file.img);
    setHashSave(certificates);
    setUserInfo({
      userDetail: userInfoDetail,
      certificateValue: certificates,
      birth: birthYear,
      subject: subject,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStudenListDownload = async setErrorApiInfo => {
  try {
    const { data, headers } = await client.get(`/admin/sign/student-download`, {
      responseType: "blob",
    });
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
    const res = await client.post(`/admin/sign/excel`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("res", res);
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
      `/admin/student/file?istudent=${istudent}&iFileCategory=1&introducedLine=${resumeOneWord}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    console.log("이력서 전송 성공", res.data);
    console.log("이력서 전송 성공", res.status);
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
        case 437:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 438:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 445:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 457:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 453:
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
    const baseUrl = `/admin/student/file?istudent=${studentId}&iFileCategory=${iFile}&oneWord=${description}`;
    let apiUrl;
    switch (iFile) {
      case 2:
        apiUrl = `${baseUrl}`;
        break;
      case 3:
        apiUrl = `${baseUrl}&fileLink=${linkUrl}`;
        break;
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
    const { status } = error.response;
    if (error.response) {
      switch (status) {
        case 457:
          setErrorApiInfo(`${error.response.data.message}`);
          break;
        case 453:
          setErrorApiInfo(`${error.response.data.message}`);
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
    const res = await client.delete(`/admin/student?istudent=${istudent}`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteFile = async (fileId, setErrorApiInfo) => {
  try {
    const res = await client.delete(`/admin/student/file?ifile=${fileId}`);
    const result = res;
    console.log(result.status);
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
      `/admin/student/certificate?istudent=${istudent}&icertificate=${icertificate}`,
    );
    const result = res;
    if (result.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};

export const putStudentInfo = async (istudent, userInfo, setErrorApiInfo) => {
  try {
    const res = await client.put(
      `/admin/student?istudent=${istudent}&studentName=${userInfo.name}&address=${userInfo.address}&email=${userInfo.email}&education=${userInfo.education}&mobileNumber=${userInfo.mobileNumber}&huntJobYn=${userInfo.huntJobYn}&age=${userInfo.age}&gender=${userInfo.gender}`,
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
      `/admin/student/certificate?istudent=${studentId}&certificates=${newHashTag}`,
    );

    const result = res;
    if (result.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};

export const patchMainPofolSelected = async (
  istudent,
  mainCheck,
  mainYn,
  setErrorApiInfo,
) => {
  try {
    const res = await client.patch(
      `/admin/student/portfolio-main?istudent=${istudent}&ifile=${mainCheck}&mainYn=${mainYn}`,
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
        default:
          setErrorApiInfo("네트워크 오류 또는 서버 응답이 없습니다.");
      }
    } else {
      throw new Error("Network Error");
    }
  }
};
