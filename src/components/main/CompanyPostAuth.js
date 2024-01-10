import React, { useState } from "react";
import { CompanyAuthPostSty, StudentAuthPostSty } from "../../styles/HomeStyle";
import { DatePicker, Space } from "antd";
import { BtnGlobal } from "../../styles/GlobalStyle";

const CompanyPostAuth = () => {
  const [clickStudentDate, setClickStudentDate] = useState([]);
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";

  const onRangeChange = (dates, dateStrings) => {
    setClickStudentDate(dateStrings);
  };
  console.log("클릭한 날짜 나와라", clickStudentDate);
  return (
    <CompanyAuthPostSty>
      <ul className="click-content">
        <li>
          <Space direction="vertical" size={12}>
            <RangePicker format={dateFormat} onChange={onRangeChange} />
          </Space>
        </li>
      </ul>
      <BtnGlobal className="auth-post">적용</BtnGlobal>
    </CompanyAuthPostSty>
  );
};

export default CompanyPostAuth;
