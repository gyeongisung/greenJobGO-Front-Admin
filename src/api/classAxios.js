import { client } from "./client";

export const getClassSubject = async () => {
  try {
    const res = await client.get();
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

