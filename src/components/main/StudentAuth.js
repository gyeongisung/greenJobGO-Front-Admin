import React from "react";
import StudentPostAuth from "./StudentPostAuth";
import StudentGetAuthData from "./StudentGetAuthData";
import { MainLeftSty } from "../../styles/HomeStyle";

const StudentAuth = () => {
  return (
    <MainLeftSty>
      <div className="main-title-div"><h2>수강생 이력서 등록/열람 기간 설정</h2></div>
      <div>
        <StudentPostAuth />
        <StudentGetAuthData />
      </div>
    </MainLeftSty>
  );
};

export default StudentAuth;
