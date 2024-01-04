import { client } from "./client";

export const getStudentList = async (
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
        `/admin/student?page=${page}&size=10&sort=istudent%2CASC&icategory=${category}&subjectName=${search}`,
      );
    } else {
      res = await client.get(`
        /admin/student?page=${page}&size=10&sort=istudent%2CASC`);
    }
    // &subjectName=${search}
    setListData(res.data.res);
    setCount(res.data.page.idx);
  } catch (error) {
    console.log(error);
  }
};
