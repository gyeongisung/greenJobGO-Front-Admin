import React, { useState } from "react";
import ManagerBox from "../components/jobMng/ManagerBox";
import { JobManagerWrap } from "../styles/JobmanagerStyle";

// 더미데이터
const managers = [
  {
    img: "https://via.placeholder.com/170x230",
    shortword: "여러분의 도전을 응원합니다111",
    name: "김아트",
    call: "053-422-2091",
    mobile: "010-000-0000",
    email: "green123@gmail.com",
  },
  {
    img: "https://via.placeholder.com/170x230",
    shortword: "여러분의 도전을 응원합니다222",
    name: "김그린",
    call: "053-422-2091",
    mobile: "010-000-0000",
    email: "green123@gmail.com",
  },
  {
    img: "https://via.placeholder.com/170x230",
    shortword: "여러분의 도전을 응원합니다333",
    name: "김학원",
    call: "053-422-2091",
    mobile: "010-000-0000",
    email: "green123@gmail.com",
  },
];
const JobManager = () => {
  const [mngProflieData, setmngProflieData] = useState(managers);
  return (
    <JobManagerWrap>
      <h2>취업 담당자 관리</h2>
      <div>
        <ManagerBox mngProflieData={mngProflieData} />
      </div>
    </JobManagerWrap>
  );
};

export default JobManager;
