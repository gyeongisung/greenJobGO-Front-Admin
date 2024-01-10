import React, { useState } from "react";
import { StudentAuthPostSty } from "../../styles/HomeStyle";
import { DatePicker, Space } from "antd";
import { BtnGlobal } from "../../styles/GlobalStyle";

const StudentPostAuth = () => {
  const [clickStudentDate, setClickStudentDate] = useState([]);
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";

  const onRangeChange = (dates, dateStrings) => {
    setClickStudentDate(dateStrings);
  };
  console.log("클릭한 날짜 나와라", clickStudentDate);
  return (
    <StudentAuthPostSty>
      <ul className="click-content">
        <li className="select-wrap">
          <select id="cate-select-student">
            <option>전체</option>
          </select>
        </li>
        <li className="select-wrap">
          <select id="subject-select-student">
            <option>전체</option>
          </select>
        </li>
        <li>
          <Space direction="vertical" size={12}>
            <RangePicker format={dateFormat} onChange={onRangeChange} />
          </Space>
        </li>
      </ul>
      <BtnGlobal className="auth-post">적용</BtnGlobal>
    </StudentAuthPostSty>
  );
};

export default StudentPostAuth;
