import { client } from "./client";

export const getCompanyList = async (setListData, setCount, page, search) => {
  try {
    const res = await client.get(
      `/admin/companylist?page=${page}&size=10&companyName=${search}`,
    );
    setListData(res.data.list);
    setCount(res.data.totalcount);
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyListDownload = async () => {
  try {
    const { data, headers } = await client.get(`/admin/companylist/download`, {
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

export const postCompanyExcel = async companyfile => {
  try {
    const res = await client.post("/admin/companylist/excel", companyfile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data === 1) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (err) {
    console.error(err);
  }
};

export const postCompanyAccept = async payload => {
  try {
    const res = await client.post("/admin/companylist", payload);
    if (res.data.companyCode) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCompany = async checkedCompanyCode => {
  try {
    const res = await client.delete(`/admin/companylist/${checkedCompanyCode}`);
    console.log("삭제가 됬노?", res.data);
  } catch (error) {
    console.log(error);
  }
};

export const patchCompany = async companyData => {
  try {
    const res = await client.patch(
      `/admin/companylist?companyCode=${companyData.companyCode}&area=${companyData.area}&companyName=${companyData.companyName}&manager=${companyData.manager}&leaderName=${companyData.leaderName}&homepage=${companyData.homepage}&phoneNumber=${companyData.phoneNumber}&dateConslusion=${companyData.dateConslusion}`,
    );
    if (res.data.companyCode) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error);
  }
};
