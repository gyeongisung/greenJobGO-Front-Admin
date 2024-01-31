import { client } from "./client";

export const getCompanyList = async (
  setListData,
  setCount,
  page,
  search,
  setErrorApiInfo,
  setNothing,
) => {
  try {
    const res = await client.get(
      `/admin/companylist?page=${page}&size=10&companyName=${search}`,
    );
    setListData(res.data.list);
    setCount(res.data.totalcount);

    setNothing(false);
    if (res.data.list.length === 0) {
      setNothing(true);
    }
  } catch (error) {
    setErrorApiInfo(`Company List : ${error.message}`);
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

export const postCompanyExcel = async (companyfile, setErrorApiInfo) => {
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
    const { status } = err.response;
    if (status === 453) {
      setErrorApiInfo("파일을 업로드 할 수 없습니다.");
    } else {
      setErrorApiInfo(`Excel upload : ${err.message}`);
    }
  }
};

export const postCompanyAccept = async (payload, setErrorApiInfo) => {
  try {
    const res = await client.post("/admin/companylist", payload);
    if (res.data.companyCode) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    setErrorApiInfo(`Company add : ${error.message}`);
  }
};

export const deleteCompany = async (checkedCompanyCode, setErrorApiInfo) => {
  try {
    const res = await client.delete(`/admin/companylist/${checkedCompanyCode}`);
    setErrorApiInfo("삭제가 정상적으로 처리되었습니다.");
  } catch (error) {
    setErrorApiInfo(`Company Delete: ${error.message}`);
  }
};

export const patchCompany = async (companyData, setErrorApiInfo) => {
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
    setErrorApiInfo(`Company Edit: ${error.message}`);
  }
};
