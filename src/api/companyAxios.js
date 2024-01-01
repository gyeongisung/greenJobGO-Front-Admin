import { client } from "./client";

export const getCompanyList = async (setListData, setCount, page, search) => {
  try {
    const res = await client.get(
      `/admin/companylist?page=${page}&size=10&companyName=${search}`,
    );
    setListData(res.data.list);
    setCount(res.data.totalcount);
    console.log(res.data.list);
  } catch (error) {
    console.log(error);
  }
};

export const postCompanyExcel = async companyfile => {
  try {
    const res = await client.post("/admin/companylist/excel", companyfile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

export const postCompanyAccept = async payload => {
  try {
    const res = await client.post("/admin/companylist", payload);
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

// export const pathchCompany = async() => {
//   try {
//     const res = await client.patch(`/admin/companylist?companyCode=${}&area=${}&companyName=${}&secotr=${}&manager=${}&leaderName=${}&jobField=${}&phoneNumber=${}&dateConslusion=${}`)
//   } catch (error) {

//   }
// }