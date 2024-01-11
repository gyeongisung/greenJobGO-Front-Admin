import { client } from "./client";

// 수강과목 불러오기
export const getStudentSubject = async ({ selectCate, setSubjectList }) => {
  console.log("기업권한정보 불러옵니다");

  try {
    const res = await client.get(
      // `/admin/subject?page=1&size=100&sort=icourseSubject%2CASC&iclassification=${selectCate}&condition=0&delYn=0`,
      `/admin/subject?page=1&iclassification=${selectCate}`,
    );
    const result = await res.data;
    setSubjectList(result.res);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 학생권한 수정
export const patchStudentAuthData = async ({
  subjectPk,
  startDate,
  endDate,
  isAuthEdit,
}) => {
  console.log("subjectPk", subjectPk);
  console.log("startDate", startDate);
  console.log("endDate", endDate);
  console.log("isAuthEdit", isAuthEdit);

  try {
    const res = await client.patch(
      `/admin/student/editable-yn?icourseSubject=${subjectPk}&startedAt=${startDate}&endedAt=${endDate}&editableYn=${isAuthEdit}`,
    );
    const result = res.data;
    console.log("기업권한수정 성공", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 기업권한 리스트 get
export const getCompanyAuthData = async setAuthInfo => {
  console.log("기업권한정보 불러옵니다");

  try {
    const res = await client.get(`/admin/company`);
    const result = await res.data;
    setAuthInfo(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 기업권한 수정 (기업아이디1개이므로 pk값 고정 : 1)
export const patchCompanyAuthData = async ({
  icompany,
  startDate,
  endDate,
}) => {
  console.log("icompany", icompany);

  console.log("startDate", startDate);

  console.log("endDate", endDate);

  try {
    const res = await client.patch(
      `/admin/company?icompany=${icompany}&startedAt=${startDate}&endedAt=${endDate}`,
    );
    const result = res.data;
    console.log("기업권한수정 성공", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
