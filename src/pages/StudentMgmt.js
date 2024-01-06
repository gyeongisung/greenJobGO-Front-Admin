import React from "react";
import StudentMain from "../components/studentmgmt/StudentMain";
import { useRecoilState } from "recoil";
import { changeComponent } from "../recoil/atoms/ChangeState";
import StudentInfo from "../components/studentmgmt/StudentInfo";

const StudentMgmt = () => {
  const [isTrue, setIsTrue] = useRecoilState(changeComponent);

  return <>{isTrue ? <StudentMain /> : <StudentInfo />}</>;
};

export default StudentMgmt;
