import React, { useEffect, useState } from "react";
import { StudentInfoWrap } from "../../styles/StudentInfoStyle";
import {
  deleteFile,
  deleteStudent,
  getStudentDetail,
  postStudentFileUpload,
  postStudentResumeUpload,
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
import { AcceptModal, DeleteOkModal, EditAceeptModal } from "../AcceptModals";
import { useNavigate, useParams } from "react-router";
import StudentPortF from "./StudentPortF";
import StudentBase from "./StduenDetail/StudentBase";
import StudentResume from "./StduenDetail/StudentResume";
import StudentPofol from "./StduenDetail/StudentPofol";

const StudentInfo = () => {
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
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteOkModal, setDeleteOkModal] = useState(false);
  const [uploadResult, setUpLoadResult] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [resumeFile, setResumeFile] = useState("");
  const [resumeOneWord, setResumeOneWord] = useState("");
  // const [modalOpen, setModalOpen] = useState(false);
  // const [iFile, setIFile] = useState(2);
  // const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [linkUrl, setLinkUrl] = useState("");
  // const [isTrue, setIsTrue] = useRecoilState(changeComponent);

  useEffect(() => {
    getStudentDetail(istudent, setUserInfo, setUserFile);
  }, [istudent, isEditMode]);

  // 수정모드 변경 버튼
  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // 파일 이름 표시
  const handleResumeFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setResumeFile(file);
    }
  };
  
  // 이력서 등록 버튼
  const handleResumeUpload = async () => {
    const formData = new FormData();
    formData.append("file", resumeFile);
    try {
      const result = await postStudentResumeUpload(
        istudent,
        resumeOneWord,
        formData,
      );
      setUpLoadResult(result);
      if (result.success === true) {
        setAcceptOkModal(true);
      }
      getStudentDetail(istudent, setUserInfo, setUserFile);
    } catch (error) {
      setAcceptOkModal(true);
    }
  };

  // 수강생 기본정보, 자격증 수정 버튼
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

  // 돌아가기 버튼
  const handleBack = () => {
    // if (isEditMode) {
    //   setIsEditMode(!isEditMode);
    // } else {
    //   setIsTrue(true);
    // }
    navigate(-1);
  };

  // 수정 취소 버튼
  const handleCancel = () => {
    setIsEditMode(false);
  };
  // const handleDelete = () => {
  //   deleteStudent(istudent);
  //   // setIsTrue(true);
  // };

  // 파일 삭제 확인 버튼
  const handleOkClick = async () => {
    try {
      const result = await deleteFile(userFile?.resume?.ifile);
      if (result.success === true) {
        setDeleteOkModal(false);
        setResumeFile("");
        setResumeOneWord("");
        getStudentDetail(istudent, setUserInfo, setUserFile);
      }
    } catch (error) {
      setDeleteOkModal(false);
      alert("실패했지..롱?");
      setResumeFile("");
      setResumeOneWord("");
    }
  };

  // 모달 취소 버튼
  const handleCancelClick = () => {
    setDeleteOkModal(false);
  };

  // 파일 삭제 모달 버튼
  const handleDeleteClick = () => {
    setDeleteOkModal(true);
  };

  // const handleDeleteFile = async fileId => {
  //   await deleteFile(fileId);
  //   getStudentDetail(istudent, setUserInfo, setUserFile);
  //   console.log(fileId);
  // };

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
      {deleteOkModal && (
        <DeleteOkModal
          deleteOkModal={deleteOkModal}
          handleOkClick={handleOkClick}
          handleCancelClick={handleCancelClick}
        />
      )}
      {acceptOkModal && (
        <AcceptModal
          acceptOkModal={acceptOkModal}
          setAcceptOkModal={setAcceptOkModal}
          uploadResult={uploadResult}
        />
      )}
      {/* {deleteModalOpen && (
        <DeleteSingleStudentModal
          handleDelete={handleDelete}
          deleteModalOpen={deleteModalOpen}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      )} */}
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
        <StudentBase
          userFile={userFile}
          istudent={istudent}
          isEditMode={isEditMode}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <StudentResume
          userFile={userFile}
          isEditMode={isEditMode}
          handleDeleteClick={handleDeleteClick}
          resumeOneWord={resumeOneWord}
          setResumeOneWord={setResumeOneWord}
          resumeFile={resumeFile}
          handleResumeFileChange={handleResumeFileChange}
          handleResumeUpload={handleResumeUpload}
          userInfo={userInfo}
        />
        {!isEditMode && <StudentPofol userFile={userFile} />}
      </div>
      <div className="buttons">
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
        {/* </div> */}
      </div>
    </StudentInfoWrap>
  );
};

export default StudentInfo;
