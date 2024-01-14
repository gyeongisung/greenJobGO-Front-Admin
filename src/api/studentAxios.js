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
    console.log(category);
    setListData(res.data.res);
    setCount(res.data.page.idx);
  } catch (error) {
    console.log(error);
  }
};

export const getStudentDetail = async (istudent, setUserInfo, setUserFile) => {
  try {
    const res = await client.get(`/admin/student/detail?istudent=${istudent}`);

    const { certificates, birthday, subject, ...userInfoDetail } = res.data.res;

    const birthYear = birthday.split("-", 1);

    setUserFile({
      thumbNail: res.data.file.img.img,
      resume: res.data.file.resume,
      portFolio: res.data.file.portfolio,
      fileLinks: res.data.file.fileLinks,
    });

    console.log(res.data.file.img);
    const certificateResult = certificates
      .map(item => item.certificate)
      .join(", ");

    setUserInfo({
      userDetail: userInfoDetail,
      certificateValue: certificateResult,
      birth: birthYear,
      subject: subject,
    });
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

export const postStudentFileUpload = async (
  studentId,
  iFile,
  formData,
  description,
  linkUrl,
) => {
  try {
    let res;
    if (iFile === 2) {
      res = await client.post(
        `/admin/student/file?istudent=${studentId}&iFileCategory=${iFile}&oneWord=${description}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
    } else if (iFile === 3) {
      res = await client.post(
        `/admin/student/file?istudent=${studentId}&iFileCategory=${iFile}&oneWord=${description}&fileLink=${linkUrl}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
    }
    if (res.data.res.ifile) {
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

export const deleteFile = async fileId => {
  try {
    const res = await client.delete(`/admin/student/file?ifile=${fileId}`);
  } catch (error) {
    console.log(error);
  }
};

export const putStudentInfo = async (studentId, userInfo) => {
  try {
    const res = await client.put(
      `/admin/student?istudent=${studentId}&studentName=${userInfo.name}&address=${userInfo.address}&email=${userInfo.email}&education=${userInfo.education}&mobileNumber=${userInfo.mobileNumber}&huntJobYn=${userInfo.huntJobYn}`,
    );
    console.log(res.data.istudent);
    if (res.data.istudent) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};

export const putStudentCertificate = async (studentId, certificateValue) => {
  try {
    const res = await client.put(
      `/admin/student/certificate-list?certificate=${certificateValue}&istudent=${studentId}`,
    );
    console.log(res.data.istudent);
    if (res.data.istudent) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};
