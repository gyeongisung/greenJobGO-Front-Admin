import { client } from "./client";

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

export const putClassSubject = async () => {
  try {
    const res = await client.put()
  } catch (error) {
    console.log(error);
  }
};
