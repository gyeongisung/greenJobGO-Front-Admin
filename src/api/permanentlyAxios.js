import { client } from "../api/client";

export const getStudentList = async ({
  setListData,
  setCount,
  page,
  category,
  searchsubj,
  searchname,
}) => {
  try {
    let apiUrl = `/admin/student/student/oneyearago?page=${page}&size=10&sort=istudent%2CASC`;
    if (category) {
      apiUrl += `&iclassification=${category}`;
    }

    if (searchsubj) {
      apiUrl += `&subjectName=${searchsubj}`;
    }

    if (searchname) {
      apiUrl += `&studentName=${searchname}`;
    }

    const res = await client.get(apiUrl);

    setListData(res.data.vo);

    console.log(res.data.vo);
  } catch (error) {
    console.log(error);
  }
};
