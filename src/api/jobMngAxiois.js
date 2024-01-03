import { client } from "./client";

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
