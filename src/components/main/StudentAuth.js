import React, { useEffect, useState } from "react";
import StudentPostAuth from "./StudentPostAuth";
import StudentGetAuthData from "./StudentGetAuthData";
import { MainLeftSty } from "../../styles/HomeStyle";
import { getStudentAuthData } from "../../api/homeAxios";

const StudentAuth = () => {
  const [authInfo, setAuthInfo] = useState([]);

  useEffect(() => {
    getStudentAuthData(setAuthInfo);
  }, []);
  return (
    <MainLeftSty>
      <div className="main-title-div">
        <h2>수강생 이력서 등록/열람 기간 설정</h2>
      </div>
      <div>
        <StudentPostAuth setAuthInfo={setAuthInfo}/>
        <StudentGetAuthData authInfo={authInfo} />
      </div>
    </MainLeftSty>
  );
};

export default StudentAuth;
