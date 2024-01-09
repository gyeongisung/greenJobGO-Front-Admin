import React from "react";
import CompanyPostAuth from "./CompanyPostAuth";
import CompanyGetAuthData from "./CompanyGetAuthData";
import { MainRightSty } from "../../styles/HomeStyle";

const CompanyAuth = () => {
  return (
    <MainRightSty>
      <h2>기업 계정 열람 기간 설정</h2>
      <div>
        <CompanyPostAuth />
        <CompanyGetAuthData />
      </div>
    </MainRightSty>
  );
};

export default CompanyAuth;
