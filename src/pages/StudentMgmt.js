import React, { useEffect, useState } from "react";
import StudentMain, { StudentPageAtom } from "../components/studentmgmt/StudentMain";
import { useRecoilState } from "recoil";
import { changeComponent } from "../recoil/atoms/ChangeState";
import StudentInfo from "../components/studentmgmt/StudentInfo";
import { useNavigate } from "react-router";

const StudentMgmt = () => {
  // const [studentInfo, setStudentInfo] = useState(null);
  // const [isTrue, setIsTrue] = useRecoilState(changeComponent);

  // const handleInfoClick = data => {
  //   setStudentInfo(data);
  //   setIsTrue(false);
  // };

  return (
    <>
      <StudentMain />
      {/* {isTrue ? (
        <StudentMain handleInfoClick={handleInfoClick} />
      ) : (
        <StudentInfo studentInfo={studentInfo} />
      )} */}
    </>
  );
};

export default StudentMgmt;
