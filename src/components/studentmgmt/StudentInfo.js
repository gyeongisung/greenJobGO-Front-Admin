import React, { useEffect, useState } from "react";
import { StudentInfoWrap } from "../../styles/StudentInfoStyle";
import {
  deleteStudent,
  getStudentDetail,
  putStudentInfo,
} from "../../api/studentAxios";
import { useRecoilState } from "recoil";
import { changeComponent } from "../../recoil/atoms/ChangeState";
import { v4 } from "uuid";
import NoImage from "../../assets/NoImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faCrown, faLink } from "@fortawesome/free-solid-svg-icons";

const StudentInfo = ({ studentInfo }) => {
  const [studentId, setIstudentId] = useState(studentInfo.istudent);
  const [userInfo, setUserInfo] = useState({
    userDetail: "",
    birth: "",
    certificateValue: "",
    subject: "",
  });
  const [userFile, setUserFile] = useState({
    thumbNail: "",
    resume: "",
    portFolio: [],
    fileLinks: [],
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [isTrue, setIsTrue] = useRecoilState(changeComponent);
  const [isEditMode, setIsEditMode] = useState(false);
  const [modify, setModify] = useState({
    studentName: userInfo.userDetail.name,
    address: userInfo.userDetail.address,
    email: userInfo.userDetail.email,
    education: userInfo.userDetail.education,
    mobileNumber: userInfo.userDetail.mobileNumber,
  });

  useEffect(() => {
    getStudentDetail(studentId, setUserInfo, setUserFile);
  }, [studentId, isEditMode]);

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
    // if (isEditMode) {
    //   setModify({
    //     studentName: userInfo.userDetail.name,
    //     address: userInfo.userDetail.address,
    //     email: userInfo.userDetail.email,
    //     education: userInfo.userDetail.education,
    //     mobileNumber: userInfo.userDetail.mobileNumber,
    //   });
    // }
  };

  const handleUpdate = async () => {
    try {
      await putStudentInfo(studentId, userInfo.userDetail);
      getStudentDetail(studentId, setUserInfo, setUserFile);
      setIsEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

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
            {userFile && userFile.thumbNail ? (
              <img
                src={`http://112.222.157.156/img/student/${studentId}/${userFile.thumbNail}`}
                alt="썸네일"
              />
            ) : (
              <img src={NoImage} alt="썸네일" />
            )}
          </li>
          <li className="info-content-left">
            <div>
              {isEditMode ? (
                <input
                  type="text"
                  name="studentName"
                  value={userInfo.userDetail.name}
                  onChange={e => {
                    setUserInfo(userInfo => ({
                      ...userInfo,
                      userDetail: {
                        ...userInfo.userDetail,
                        name: e.target.value,
                      },
                    }));
                  }}
                />
              ) : (
                <p className="student-name">{userInfo.userDetail.name}</p>
              )}
              <p className="student-age">
                {userInfo.userDetail.gender} {userInfo.birth}년생 (만{" "}
                {userInfo.userDetail.age}세)
              </p>
            </div>
            <div>
              <span>과정명</span>
              <span>{userInfo.subject.subjectName}</span>
            </div>
            <div>
              <span>주소</span>
              {isEditMode ? (
                <input
                  type="text"
                  name="address"
                  value={userInfo.userDetail.address}
                  onChange={e => {
                    setUserInfo(userInfo => ({
                      ...userInfo,
                      userDetail: {
                        ...userInfo.userDetail,
                        address: e.target.value,
                      },
                    }));
                  }}
                />
              ) : (
                <span>{userInfo.userDetail.address}</span>
              )}
            </div>
            <div>
              <span>Email</span>
              {isEditMode ? (
                <input
                  type="text"
                  name="email"
                  value={userInfo.userDetail.email}
                  onChange={e => {
                    setUserInfo(userInfo => ({
                      ...userInfo,
                      userDetail: {
                        ...userInfo.userDetail,
                        email: e.target.value,
                      },
                    }));
                  }}
                />
              ) : (
                <span>{userInfo.userDetail.email}</span>
              )}
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
              {isEditMode ? (
                <input
                  type="text"
                  name="mobileNumber"
                  value={userInfo.userDetail.mobileNumber}
                  onChange={e => {
                    setUserInfo(userInfo => ({
                      ...userInfo,
                      userDetail: {
                        ...userInfo.userDetail,
                        mobileNumber: e.target.value,
                      },
                    }));
                  }}
                />
              ) : (
                <span>{userInfo.userDetail.mobileNumber}</span>
              )}
            </div>
            <div>
              <span>학력</span>
              {isEditMode ? (
                <input
                  type="text"
                  name="education"
                  value={userInfo.userDetail.education}
                  onChange={e => {
                    setUserInfo(userInfo => ({
                      ...userInfo,
                      userDetail: {
                        ...userInfo.userDetail,
                        education: e.target.value,
                      },
                    }));
                  }}
                />
              ) : (
                <span>{userInfo.userDetail.education}</span>
              )}
            </div>
          </li>
        </ul>
        <div>
          <ul>
            <li>
              <h2>이력서 및 자기소개서</h2>
            </li>
            <li>
              <h3>한줄 소개</h3>
              {userFile && userFile.resume && userFile.resume.oneWord ? (
                <span>&nbsp;{userFile.resume.oneWord}</span>
              ) : (
                <span>&nbsp;한줄 소개를 작성하지 않았습니다.</span>
              )}
            </li>
            <li>
              <h3>이력서 및 자기소개서</h3>
              {userFile &&
              userFile.resume &&
              userFile.resume.oneWord &&
              userFile.resume.resume ? (
                <a
                  href={`${userFile.resume.resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFilePdf} />
                  &nbsp;
                  {userFile.resume.resume}
                </a>
              ) : (
                <span>&nbsp;이력서가 등록되어 있지 않습니다.</span>
              )}
            </li>
          </ul>
        </div>
        <ul className="portfolio-list">
          <li>
            <h2>포트폴리오</h2>
          </li>
          <li
            className={`${
              (userFile && userFile.portFolio) || userFile.fileLinks
                ? ""
                : "portfolio-zero"
            }`}
          >
            <div>
              {userFile &&
              userFile.portFolio &&
              userFile.portFolio.length > 0 ? (
                userFile.portFolio.map(item => (
                  <div className="portfolio-box" key={v4()}>
                    <div>
                      <span>
                        <FontAwesomeIcon icon={faFilePdf} />
                        &nbsp;
                        {item.file}
                      </span>
                      <div className="portfolio-icons">
                        {item.mainYn === 1 ? (
                          <p>
                            <FontAwesomeIcon
                              icon={faCrown}
                              style={{ color: "#228FCF" }}
                            />
                          </p>
                        ) : (
                          ""
                        )}
                        <p className="delete-icon">
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            style={{ color: "#6d6d6d" }}
                          />
                        </p>
                      </div>
                    </div>
                    <span>{item.oneWord}</span>
                  </div>
                ))
              ) : (
                <div>
                  <span>등록된 포트폴리오 PDF 파일이 없습니다.</span>
                </div>
              )}
            </div>
            <div>
              {userFile &&
              userFile.fileLinks &&
              userFile.fileLinks.length > 0 ? (
                userFile.fileLinks.map(item => (
                  <div className="portfolio-box" key={v4()}>
                    <div>
                      <span>
                        <FontAwesomeIcon icon={faLink} />
                        {item.fileLink}
                      </span>
                      <p className="delete-icon">
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          style={{ color: "#6d6d6d" }}
                        />
                      </p>
                    </div>
                    <span>{item.oneWord}</span>
                  </div>
                ))
              ) : (
                <div>
                  <span>등록된 포트폴리오 링크가 없습니다.</span>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <div>
          <button onClick={handleDelete}>삭제</button>
        </div>
        <div>
          <button onClick={handleBack}>돌아가기</button>

          {isEditMode ? (
            <button onClick={handleUpdate}>확인</button>
          ) : (
            <button onClick={handleEditMode}>수정</button>
          )}
        </div>
      </div>
    </StudentInfoWrap>
  );
};

export default StudentInfo;
