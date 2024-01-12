import React, { useEffect, useState } from "react";
import { StudentInfoWrap } from "../../styles/StudentInfoStyle";
import { deleteStudent, getStudentDetail } from "../../api/studentAxios";
import { useRecoilState } from "recoil";
import { changeComponent } from "../../recoil/atoms/ChangeState";
import { v4 } from "uuid";

const StudentInfo = ({ studentInfo }) => {
  const [studentId, setIstudentId] = useState(studentInfo.istudent);
  const [userInfo, setUserInfo] = useState({
    userDetail: "",
    birth: "",
    certificateValue: "",
    subject: "",
  });
  const [userFile, setUserFile] = useState([]);
  const [thumbNail, setThumbNail] = useState("");
  const [isTrue, setIsTrue] = useRecoilState(changeComponent);

  useEffect(() => {
    getStudentDetail(studentId, setUserInfo, setUserFile, setThumbNail);
  }, []);
  console.log(userInfo.subject);
  console.log(studentId);
  console.log(userFile);

  const handleBack = () => {
    setIsTrue(true);
  };
  const handleDelete = () => {
    deleteStudent(studentId);
    setIsTrue(true);
  };
  return (
    <StudentInfoWrap>
      <div className="info-contain">
        <div>
          <h2>수강생 상세 정보</h2>
        </div>
        <ul className="info-content">
          <li>
            <img
              src={`http://112.222.157.156/img/student/${studentId}/${thumbNail.file}`}
              alt="썸네일"
            />
          </li>
          <li className="info-content-left">
            <div>
              <span>{userInfo.userDetail.name}</span>
              <span>
                {userInfo.userDetail.gender} {userInfo.birth}년생 (만{" "}
                {userInfo.userDetail.age}세)
              </span>
            </div>
            <div>
              <span>과정명</span>
              <span>{userInfo.subject.subjectName}</span>
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
              <span>{userInfo.userDetail.huntJobYn}</span>
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
          {userFile && userFile.length > 0 ? (
            userFile.map(item => <span key={v4()}>{item.file}</span>)
          ) : (
            <span>등록된 포트폴리오 및 이력서(자기소개서)가 없습니다.</span>
          )}
        </div>
      </div>
      <div className="buttons">
        <div>
          <button onClick={handleBack}>돌아가기</button>
        </div>
        <div>
          <button>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </StudentInfoWrap>
  );
};

export default StudentInfo;
