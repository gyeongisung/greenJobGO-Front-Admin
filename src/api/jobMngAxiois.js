import { client } from "./client";

//  취업담당자 리스트 불러오기
export const getJobManagerInfo = async setmngProflieData => {
  try {
    const res = await client.get(`/admin/profile`);
    const result = await res.data;

    console.log("job mng 정보 들어옴", result);
    setmngProflieData(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// post
export const postManagerInfo = async formData => {
  try {
    const res = await client.post(`/admin/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("formData", formData);
    const result = res.data;

    console.log("취업 담당자 등록", result);
  } catch (error) {
    console.log(error);
  }
};

// patch
export const patchManagerEdit = async ({ formData, editManager, query }) => {
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

    console.log("formData", formData);
    const result = res.data;

    console.log("취업 담당자 수정", result);
  } catch (error) {
    console.log(error);
  }
};

// DELETE
export const deleteJobManagerInfo = async iemply => {
  try {
    const res = await client.delete(`/admin/profile/${iemply}`);
    const result = res.data;
    console.log("삭제성공", result);
    return result;
  } catch (err) {
    console.log("이미지 DELETE 실패", err);
  }
};
