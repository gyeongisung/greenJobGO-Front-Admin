import { client } from "./client";

//  취업담당자 리스트 불러오기
export const getJobManagerInfo = async (setmngProflieData, setErrorApiInfo) => {
  try {
    const res = await client.get(`/admin/profile`);
    const result = await res.data;
    setmngProflieData(result);
    return result;
  } catch (error) {
    setErrorApiInfo(`Job Manager: ${error.message}`);
    // return error
  }
};

// post
export const postManagerInfo = async (formData, setErrorApiInfo) => {
  try {
    const res = await client.post(`/admin/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = res.data;
    setErrorApiInfo(`성공적으로 처리되었습니다`);

    return result;
  } catch (error) {
    setErrorApiInfo(`Job manager upload: ${error.message}`);
    // return error
  }
};

// patch
export const patchManagerEdit = async ({
  formData,
  editManager,
  query,
  setErrorApiInfo,
}) => {
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
    const result = res.data;
    setErrorApiInfo(`성공적으로 처리되었습니다`);

    return result;
  } catch (error) {
    setErrorApiInfo(`Job manager edit: ${error.message}`);
  }
};

// DELETE
export const deleteJobManagerInfo = async (iemply, setErrorApiInfo) => {
  try {
    const res = await client.delete(`/admin/profile/${iemply}`);
    const result = res.data;
    console.log("삭제성공", result);
    setErrorApiInfo(`성공적으로 처리되었습니다`);

    return result;
  } catch (err) {
    setErrorApiInfo(`Job manager delete: ${err.message}`);
  }
};
