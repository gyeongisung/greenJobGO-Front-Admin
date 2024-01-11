import React, { useEffect, useState } from "react";
import CompanyPostAuth from "./CompanyPostAuth";
import CompanyGetAuthData from "./CompanyGetAuthData";
import { MainRightSty } from "../../styles/HomeStyle";
import { getCompanyAuthData } from "../../api/homeAxios";

const CompanyAuth = () => {
  const [authInfo, setAuthInfo] = useState([]);

  useEffect(() => {
    getCompanyAuthData(setAuthInfo);
  }, []);
  return (
    <MainRightSty>
      <div className="main-title-div">
        <h2>기업 계정 열람 기간 설정</h2>
      </div>
      <div>
        <CompanyPostAuth setAuthInfo={setAuthInfo} />
        <CompanyGetAuthData authInfo={authInfo} />
      </div>
    </MainRightSty>
  );
};

export default CompanyAuth;
