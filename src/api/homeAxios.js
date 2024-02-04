import { client } from "./client";

// 수강과목 불러오기
export const getStudentSubject = async ({
  selectCate,
  setSubjectList,
  setErrorApiInfo,
}) => {
  try {
    const res = await client.get(
      // `/admin/subject?page=1&size=100&sort=icourseSubject%2CASC&iclassification=${selectCate}&condition=0&delYn=0`,
      `/admin/student/dropbox-category?iclassification=${selectCate}`,
    );
    const result = await res.data;
    setSubjectList(result.res);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 학생 권한 리스트 get
export const getStudentAuthData = async (setAuthInfo, setErrorApiInfo) => {
  console.log("학생권한정보 불러옵니다");

  try {
    const res = await client.get(`/admin/student/role-list`);
    const result = await res.data;
    setAuthInfo(result.res);
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

// 학생권한 수정
export const patchStudentAuthData = async ({
  subjectPk,
  startDate,
  endDate,
  setErrorApiInfo,
}) => {
  try {
    const res = await client.patch(
      `/admin/student/editable-yn?icourseSubject=${subjectPk}&startedAt=${startDate}&endedAt=${endDate}`,
    );
    const result = res.data;
    console.log("학생권한정보 수정 성공", result);
    setErrorApiInfo("수강생 권한이 정상적으로 변경 되었습니다");
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

// 기업권한 리스트 get
export const getCompanyAuthData = async (setAuthInfo, setErrorApiInfo) => {
  console.log("기업권한정보 불러옵니다");

  try {
    const res = await client.get(`/admin/company`);
    const result = await res.data;
    setAuthInfo(result);
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

// 기업권한 수정 (기업아이디1개이므로 pk값 고정 : 1)
export const patchCompanyAuthData = async ({
  icompany,
  startDate,
  endDate,
  setErrorApiInfo,
}) => {
  try {
    const res = await client.patch(
      `/admin/company?icompany=${icompany}&startedAt=${startDate}&endedAt=${endDate}`,
    );
    const result = res.data;
    console.log("기업권한수정 성공", result);
    setErrorApiInfo("기업 권한이 정상적으로 변경 되었습니다.");
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
