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
      res = await client.get(
        `/admin/student?page=${page}&size=10&sort=istudent%2CASC&subjectName=${search}`,
      );
    }
    setListData(res.data.res);
    console.log(res.data.res);
    setCount(res.data.page.idx);
  } catch (error) {
    console.log(error);
  }
};

export const getStudentDetail = async istudent => {
  try {
    const res = await client.get(`/admin/student/detail?istudent=${istudent}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getStudenListDownload = async () => {
  try {
    const { data, headers } = await client.get(`/admin/sign/student-download`, {
      responseType: "blob",
    });
    const blob = new Blob([data], {
      type: headers["content-type"],
    });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;

    const filename = headers["content-disposition"]
      .split("filename=")[1]
      .split(".")[0];
    link.download = filename;
    link.click();
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.log(error);
  }
};

export const postExcelSign = async formData => {
  try {
    const res = await client.post(`/admin/sign/excel`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data === 1) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async istudent => {
  try {
    const res = await client.delete(`/admin/student?istudent=${istudent}`);
  } catch (error) {
    console.log(error);
  }
};

// export const putStudentInfo = async () => {
//   try {
//     const res = await client.put(``);
//   } catch (error) {
//     console.log(error);
//   }
// };
