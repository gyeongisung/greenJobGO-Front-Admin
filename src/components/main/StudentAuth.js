import React from "react";
import StudentPostAuth from "./StudentPostAuth";
import StudentGetAuthData from "./StudentGetAuthData";
import { MainLeftSty } from "../../styles/HomeStyle";

const StudentAuth = () => {
  return (
    <MainLeftSty>
      <h2>과정별 이력서 등록/열람 기간 설정</h2>
      <div>
        <StudentPostAuth />
        <StudentGetAuthData />
      </div>
    </MainLeftSty>
  );
};

export default StudentAuth;
