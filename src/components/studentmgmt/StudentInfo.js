import React, { useEffect, useState } from "react";
import { StudentInfoWrap } from "../../styles/StudentInfoStyle";
import { getStudentDetail } from "../../api/studentAxios";

const StudentInfo = ({ studentInfo }) => {
  const [studentId, setIstudentId] = useState(studentInfo.istudent);
  const [userInfo, setUserInfo] = useState({
    userDetail: "",
    birth: "",
    certificateValue: "",
    subject: "",
  });
  const [userFile, setUserFile] = useState("");

  useEffect(() => {
    getStudentDetail(studentId, setUserInfo, setUserFile);
  }, []);
  console.log(userInfo.subject);
  console.log(studentId);
  console.log(userFile);
  return (
    <StudentInfoWrap>
      <div className="info-contain">
        <div>
          <h2>수강생 상세 정보</h2>
        </div>
        <ul className="info-content">
          <li>
            <img
              src={`http://112.222.157.156/img/student/${studentId}/${userFile.file}`}
              alt="썸네일"
            />
          </li>
          <li className="info-content-left">
            <div>
              <span>{userInfo.userDetail.name}</span>
              <span>여 {userInfo.birth}(만 25세)</span>
            </div>
            <div>
              <span>과정명</span>
              {userInfo.subject &&
                userInfo.subject.map((item, index) => (
                  <span key={index}>{item.subjectName}</span>
                ))}
            </div>
            <div>
              <span>주소</span>
              <span>{userInfo.userDetail.address}</span>
            </div>
            <div>
              <span>Email</span>
              <span>{userInfo.userDetail.email}</span>
            </div>
            <div>
              <span>자격증</span>
              <span>{userInfo.certificateValue}</span>
            </div>
          </li>
          <li className="info-content-right">
            <div>
              <span>취업여부</span>
              <span>X</span>
            </div>
            <div>
              <span>수료기간</span>
              <span>
                {userInfo.userDetail.startedAt} ~ {userInfo.userDetail.endedAt}
              </span>
            </div>
            <div>
              <span>연락처</span>
              <span>{userInfo.userDetail.mobileNumber}</span>
            </div>
            <div>
              <span>학력</span>
              <span>{userInfo.userDetail.education}</span>
            </div>
          </li>
        </ul>
        <div>
          <span>https://www.figma.com/file/DNPBzZmznUfUHpoZN</span>
        </div>
      </div>
      <div className="buttons">
        <div>
          <button>돌아가기</button>
        </div>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </StudentInfoWrap>
  );
};

export default StudentInfo;
