import React, { useEffect, useState } from "react";
import { CompanyAuthgetListSty } from "../../styles/HomeStyle";
import { getCompanyAuthData } from "../../api/homeAxios";
import { v4 } from "uuid";

const CompanyGetAuthData = ({authInfo}) => {

  return (
    <CompanyAuthgetListSty>
      <div className="auth-list-div">
        <h2>기업 계정 열람 기간</h2>
        {authInfo && authInfo?.map(item =>(<span key={v4()}>{item.startedAt} ~ {item.endedAt}</span>))}
      </div>
    </CompanyAuthgetListSty>
  );
};

export default CompanyGetAuthData;
