import { client } from "../api/client";

export const getBulkStudentList = async (
  setListData,
  page,
  setCount,
  category,
  searchsubj,
) => {
  try {
    let apiUrl = `/admin/student/sub-category-list?page=${page}&size=10&sort=icourseSubject%2CDESC`;

    if (category) {
      apiUrl += `&iclassification=${category}`;
    }

    if (searchsubj) {
      apiUrl += `&icourseSubject=${searchsubj}`;
    }
    const res = await client.get(apiUrl);

    setListData(res.data.subject);
    setCount(res.data.page.idx);
  } catch (error) {
    console.log(error);
  }
};

export const getClassificationList = async (category, setSubjData) => {
  try {
    const res = await client.get(
      `/admin/student/dropbox-category?iclassification=${category}`,
    );
    console.log(res.data.res);
    setSubjData(res.data.res);
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async setCategoryData => {
  try {
    const res = await client.get(`/admin/category`);
    setCategoryData(res.data);
  } catch (error) {
    console.log(error);
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
    console.log("삭제실패", error);
    setErrorInfo("삭제가 정상적으로 처리되지 않았습니다.");
  }
};
