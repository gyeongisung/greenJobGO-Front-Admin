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
  console.log("clickCate", clickCate);
  console.log("clickSubj", clickSubj);
  try {
    let apiUrl = `/admin/student/sub-category-list?page=${page}&size=10&sort=icourseSubject%2CDESC`;

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
    const res = await client.get(
      `/admin/student/dropbox-category?iclassification=${category}`,
    );
    console.log(res.data.res);
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
    const res = await client.get(`/admin/category`);
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
      `/admin/student/student-list?iclassification=${iclassification}&icourseSubject=${icourseSubject}`,
    );
    const result = res.data;
    console.log("삭제성공", res);
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
