import { client } from "./client";

export const getCategory = async setCategoryData => {
  try {
    const res = await client.get(`/admin/category`);
    setCategoryData(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getClassSubject = async (
  setListData,
  setCount,
  page,
  search,
  category,
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
    console.log(error);
  }
};

export const postClassSubject = async payload => {
  try {
    const res = await client.post("/admin/subject", payload);
    
    if (res.data.icourseSubject) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteClassSubject = async icourseSubject => {
  try {
    const res = await client.delete(
      `/admin/subject?icourseSubject=${icourseSubject}`,
    );
  } catch (error) {
    console.log(error);
  }
};

export const putClassSubject = async payload => {
  try {
    const res = await client.put(
      `/admin/subject?icourseSubject=${payload.icourseSubject}&iclassification=${payload.iclassification}&courseSubjectName=${payload.courseSubjectName}&startedAt=${payload.startedAt}&endedAt=${payload.endedAt}&instructor=${payload.instructor}&lectureRoom=${payload.lectureRoom}&round=${payload.round}&classTime=${payload.classTime}`,
    );
    if (res.data.icourseSubject) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};
