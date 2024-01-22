import React, { useEffect, useState } from "react";
import { StudentInfoWrap } from "../../styles/StudentInfoStyle";
import {
  deleteFile,
  deleteStudent,
  getStudentDetail,
  postStudentFileUpload,
  putStudentCertificate,
  putStudentInfo,
} from "../../api/studentAxios";
import { useRecoilState } from "recoil";
import { changeComponent } from "../../recoil/atoms/ChangeState";
import { v4 } from "uuid";
import NoImage from "../../assets/NoImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faCrown, faLink } from "@fortawesome/free-solid-svg-icons";
import { DeleteSingleStudentModal, PortFolioAdd } from "./StudentModal";
import { AcceptModal, EditAceeptModal } from "../AcceptModals";
import { useNavigate, useParams } from "react-router";
import StudentPortF from "./StudentPortF";

const StudentInfo = ({ studentInfo }) => {
  const { istudent } = useParams();

  const navigate = useNavigate();
  // const [studentId, setIstudentId] = useState(studentInfo.istudent);
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

  console.log(userInfo);
  console.log(userFile);
  // const [iFile, setIFile] = useState(2);
  const [modalOpen, setModalOpen] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [uploadResult, setUpLoadResult] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [description, setDescription] = useState("");
  // const [linkUrl, setLinkUrl] = useState("");
  // const [isTrue, setIsTrue] = useRecoilState(changeComponent);

  useEffect(() => {
    getStudentDetail(istudent, setUserInfo, setUserFile);
  }, [istudent, isEditMode]);

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleUpdate = async () => {
    try {
      let result;
      console.log("result", result);
      result = await putStudentInfo(istudent, userInfo.userDetail);
      result = await putStudentCertificate(istudent, userInfo.certificateValue);
      setUpLoadResult(result);

      if (result.success) {
        await setAcceptOkModal(true);
        await setIsEditMode(false);
        navigate("/student/portfolioEdit", {
          state: {
            istudent,
            // setUserInfo,
            userFile,
            // setUserFile,
          },
        });
      }
      getStudentDetail(istudent, setUserInfo, setUserFile);
    } catch (error) {
      // setAcceptOkModal(true);
      // setIsEditMode(false);
    }
  };

  // const handleFileUpload = async () => {
  //   if (iFile && (iFile === 2 || iFile === 3)) {
  //     let formData = new FormData();
  //     formData.append("file", selectedFile);
  //     try {
  //       const result = await postStudentFileUpload(
  //         studentId,
  //         iFile,
  //         formData,
  //         description,
  //         linkUrl,
  //       );
  //       setUpLoadResult(result);
  //       if (result.success) {
  //         setModalOpen(false);
  //         setAcceptOkModal(true);
  //         setIFile(2);
  //         setSelectedFile(null);
  //         setLinkUrl("");
  //         setDescription("");
  //         getStudentDetail(studentId, setUserInfo, setUserFile);
  //       }
  //     } catch (error) {
  //       setModalOpen(false);
  //       setAcceptOkModal(true);
  //       setIFile(2);
  //       setSelectedFile(null);
  //       setLinkUrl("");
  //       setDescription("");
  //       getStudentDetail(studentId, setUserInfo, setUserFile);
  //     }
  //   }
  // };

  const handleBack = () => {
    // if (isEditMode) {
    //   setIsEditMode(!isEditMode);
    // } else {
    //   setIsTrue(true);
    // }
    navigate("/student");
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };
  const handleDelete = () => {
    deleteStudent(istudent);
    // setIsTrue(true);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteFile = async fileId => {
    await deleteFile(fileId);
    await getStudentDetail(istudent, setUserInfo, setUserFile);
    console.log(fileId);
  };

  // const handleAddButton = () => {
  //   setModalOpen(true);
  // };

  // const handlePofolModalCancel = () => {
  //   setModalOpen(false);
  // };

  return (
    <StudentInfoWrap>
      {/* {modalOpen && (
        <PortFolioAdd
          modalOpen={modalOpen}
          handlePofolModalCancel={handlePofolModalCancel}
          iFile={iFile}
          setIFile={setIFile}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          description={description}
          setDescription={setDescription}
          linkUrl={linkUrl}
          setLinkUrl={setLinkUrl}
          handleFileUpload={handleFileUpload}
        />
      )} */}
      {acceptOkModal && (
        <AcceptModal
          acceptOkModal={acceptOkModal}
          setAcceptOkModal={setAcceptOkModal}
          uploadResult={uploadResult}
        />
      )}
      {deleteModalOpen && (
        <DeleteSingleStudentModal
          handleDelete={handleDelete}
          deleteModalOpen={deleteModalOpen}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      )}
      {editModal && (
        <EditAceeptModal
          editModal={editModal}
          setEditModal={setEditModal}
          uploadResult={uploadResult}
        />
      )}
      <div className="title">
        <h2>수강생 상세 정보</h2>
      </div>
      <div className="info-contain">
        <ul className="info-content">
          <li>
            {userFile && userFile.thumbNail ? (
              <img
                src={`http://112.222.157.156/img/student/${istudent}/${userFile.thumbNail}`}
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
                {isEditMode ? (
                  <input
                    type="text"
                    name="gender"
                    value={userInfo.userDetail.gender}
                    onChange={e => {
                      setUserInfo(userInfo => ({
                        ...userInfo,
                        userDetail: {
                          ...userInfo.userDetail,
                          gender: e.target.value,
                        },
                      }));
                    }}
                  />
                ) : (
                  <p>{userInfo.userDetail.gender}</p>
                )}
                <p>{userInfo.birth}년생</p>
                {isEditMode ? (
                  <input
                    type="text"
                    name="age"
                    value={userInfo.userDetail.age}
                    onChange={e => {
                      setUserInfo(userInfo => ({
                        ...userInfo,
                        userDetail: {
                          ...userInfo.userDetail,
                          age: e.target.value,
                        },
                      }));
                    }}
                  />
                ) : (
                  <p>만 {userInfo.userDetail.age}세</p>
                )}
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
              {isEditMode ? (
                <input
                  type="text"
                  name="email"
                  value={userInfo.certificateValue}
                  onChange={e => {
                    setUserInfo(userInfo => ({
                      ...userInfo,
                      certificateValue: e.target.value,
                    }));
                  }}
                />
              ) : (
                <span>{userInfo.certificateValue}</span>
              )}
            </div>
          </li>
          <li className="info-content-right">
            <div>
              <span>취업여부</span>
              {isEditMode ? (
                <input
                  type="text"
                  name="email"
                  value={userInfo.userDetail.huntJobYn}
                  onChange={e => {
                    setUserInfo(userInfo => ({
                      ...userInfo,
                      userDetail: {
                        ...userInfo.userDetail,
                        huntJobYn: e.target.value,
                      },
                    }));
                  }}
                />
              ) : (
                <span>{userInfo.userDetail.huntJobYn}</span>
              )}
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
        <div className="info-resume">
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
              // userFile.resume.oneWord &&
              userFile.resume.resume ? (
                <div>
                  <div>
                    <p>
                      <FontAwesomeIcon icon={faFilePdf} />
                    </p>
                    <a
                      href={`http://${userFile.resume.resume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp;
                      {userFile.resume.resume}
                    </a>
                  </div>
                  {isEditMode ? (
                    <div>
                      <p>
                        <FontAwesomeIcon
                          onClick={() =>
                            handleDeleteFile(userFile.resume.ifile)
                          }
                          icon={faCircleXmark}
                          style={{ color: "#6d6d6d" }}
                        />
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <span>&nbsp;이력서가 등록되어 있지 않습니다.</span>
              )}
            </li>
          </ul>
        </div>
        {isEditMode ? (
          <></>
        ) : (
          <ul className="portfolio-list">
            <li>
              <h2>포트폴리오</h2>
            </li>
            <></>
            <li>
              <div>
                {userFile &&
                userFile.portFolio &&
                userFile.portFolio.length > 0 ? (
                  userFile.portFolio.map(item => (
                    <div className="portfolio-box" key={v4()}>
                      <div>
                        <div>
                          <p>
                            <FontAwesomeIcon icon={faFilePdf} />
                          </p>
                          <a
                            href={`http://${item.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            &nbsp;
                            {item.file}
                          </a>
                        </div>
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
                        </div>
                      </div>
                      <span>{item.oneWord}</span>
                    </div>
                  ))
                ) : (
                  <div>
                    <div className="portfolio-zero">
                      <span>등록된 포트폴리오 PDF 파일이 없습니다.</span>
                    </div>
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
                        <div>
                          <p>
                            <FontAwesomeIcon icon={faLink} />
                          </p>
                          <a
                            href={`http://${item.fileLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            &nbsp;{item.fileLink}
                          </a>
                        </div>
                      </div>
                      <span>{item.oneWord}</span>
                    </div>
                  ))
                ) : (
                  <div>
                    <div className="portfolio-zero">
                      <span>등록된 포트폴리오 링크가 없습니다.</span>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        )}
      </div>
      <div className="buttons">
        <div>
          {isEditMode ? (
            <div className="spacer" />
          ) : (
            <>
              <button onClick={handleDeleteClick}>삭제</button>
            </>
          )}
        </div>
        <div>
          {isEditMode ? (
            <>
              <button onClick={handleCancel}>취소</button>
              <button onClick={handleUpdate}>저장</button>
            </>
          ) : (
            <>
              <button onClick={handleBack}>돌아가기</button>
              <button onClick={handleEditMode}>수정</button>
            </>
          )}
        </div>
      </div>
    </StudentInfoWrap>
  );
};

export default StudentInfo;
