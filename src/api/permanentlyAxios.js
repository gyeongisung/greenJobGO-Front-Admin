import { client } from "../api/client";

export const getStudentList = async ({
  setListData,
  setCount,
  page,
  selectCate,
  searchsubj,
  searchname,
  setNothing,
}) => {
  try {
    let apiUrl = `/admin/student/student/oneyearago?page=${page}&size=10&sort=istudent%2CASC`;
    if (selectCate) {
      apiUrl += `&iclassification=${selectCate}`;
    }

    if (searchsubj) {
      apiUrl += `&subjectName=${searchsubj}`;
    }

    if (searchname) {
      apiUrl += `&studentName=${searchname}`;
    }

    const res = await client.get(apiUrl);
    setCount(res.data.page.idx);
    setListData(res.data.vo);

    console.log("완전삭제 결과나와라", res);
    console.log("완전삭제 결과나와라", res.config.url);
    setNothing(false);
    if (res.data.vo.length == 0) {
      setNothing(true);
      // console.log("결과 없어요");
    }
  } catch (error) {
    console.log(error);
  }
};
