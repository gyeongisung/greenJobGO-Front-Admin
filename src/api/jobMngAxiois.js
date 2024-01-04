import { client } from "./client";

//  취업담당자 리스트 불러오기
export const getJobManagerList = async setmngProflieData => {
  try {
    const res = await client.get(`/admin/profile`);
    const result = await res.data;

    console.log("job mng 정보 들어옴", result);
    setmngProflieData(result);
  } catch (error) {
    console.log(error);
  }
};

// 취업담당자 수정하기
// export const patchEditStore = async ({ editManager, query }) => {
//   try {
//     const res = await client.patch(
//       `/admin/profile?iemply=${editManager.iemply}&${query}`,
//     );
//     const result = res.data;
//     console.log("result", result);
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const patchEditStore = async ({formData, editManager, query }) => {
  try {
    const res = await client.patch(
      `/admin/profile?iemply=${editManager.iemply}&${query}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    console.log("res", res);

    const result = res.data;
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("수정에러", error);
  }
};
