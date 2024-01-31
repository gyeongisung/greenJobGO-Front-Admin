import { client } from "./client";

export const getCategory = async (setCategoryData, setErrorApiInfo) => {
  try {
    const res = await client.get(`/admin/category`);
    setCategoryData(res.data);
  } catch (error) {
    setErrorApiInfo(`Category Data: ${error.message}`);
  }
};

export const getClassSubject = async (
  setListData,
  setCount,
  page,
  search,
  category,
  setErrorApiInfo,
) => {
  try {
    let res;
    if (category) {
      res = await client.get(
        `/admin/subject?page=${page}&size=10&sort=icourseSubject%2CASC&subjectName=${search}&iclassification=${category}&condition=0&delYn=0`,
      );
    } else {
      res = await client.get(
        `/admin/subject?page=${page}&size=10&sort=icourseSubject%2CASC&subjectName=${search}&condition=0&delYn=0`,
      );
    }

    setListData(res.data.res);
    setCount(res.data.page.idx);
  } catch (error) {
    setErrorApiInfo(`Subject List: ${error.message}`);
  }
};

export const postCategory = async (postData, setErrorApiInfo) => {
  try {
    const res = await client.post(`/admin/category`, postData);
    if (res.data.iclassification) {
      setErrorApiInfo(`카테고리 추가가 완료 되었습니다.`);
    }
  } catch (error) {
    setErrorApiInfo(`Category add: ${error.message}`);
  }
};

export const postClassSubject = async (payload, setErrorApiInfo) => {
  try {
    const res = await client.post("/admin/subject", payload);

    if (res.data.icourseSubject) {
      setErrorApiInfo(`과목추가가 완료 되었습니다.`);
    }
  } catch (error) {
    setErrorApiInfo(`New subject add : ${error.message}`);
  }
};

export const deleteCategory = async (data, setErrorApiInfo) => {
  try {
    const res = await client.delete(`/admin/category?iclassification=${data}`);
    setErrorApiInfo(`삭제가 완료 되었습니다.`);
  } catch (error) {
    setErrorApiInfo(`Category Delete: ${error.message}`);
  }
};

export const deleteClassSubject = async (icourseSubject, setErrorApiInfo) => {
  try {
    const res = await client.delete(
      `/admin/subject?icourseSubject=${icourseSubject}`,
    );
    setErrorApiInfo(`삭제가 완료 되었습니다.`);
  } catch (error) {
    setErrorApiInfo(`Subject Delete: ${error.message}`);
  }
};

export const putClassSubject = async (payload, setErrorApiInfo) => {
  try {
    const res = await client.put(
      `/admin/subject?icourseSubject=${payload.icourseSubject}&iclassification=${payload.iclassification}&courseSubjectName=${payload.courseSubjectName}&startedAt=${payload.startedAt}&endedAt=${payload.endedAt}&instructor=${payload.instructor}&lectureRoom=${payload.lectureRoom}&round=${payload.round}&classTime=${payload.classTime}`,
    );
    if (res.data.icourseSubject) {
      setErrorApiInfo(`수정이 완료 되었습니다.`);
    }
  } catch (error) {
    setErrorApiInfo(`Subject Edit: ${error.message}`);
  }
};
