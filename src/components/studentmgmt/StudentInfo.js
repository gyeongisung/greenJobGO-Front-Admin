import React, { useEffect, useState } from "react";
import { StudentInfoWrap } from "../../styles/StudentInfoStyle";
import {
  deleteCertificate,
  deleteFile,
  getStudentDetail,
  postStudentCertificate,
  postStudentPofolUpload,
  postStudentResumeUpload,
  putStudentInfo,
} from "../../api/studentAxios";
import { useRecoilState } from "recoil";
import { AcceptModal, DeleteOkModal, EditAceeptModal } from "../AcceptModals";
import { useNavigate, useParams } from "react-router";
import StudentBase from "./StduenDetail/StudentBase";
import StudentResume from "./StduenDetail/StudentResume";
import StudentPofol from "./StduenDetail/StudentPofol";
import { StudentPageAtom } from "./StudentMain";
import ErrorModal from "../ErrorModal";
import UploadLoading from "../UploadLoading";
import ConfirmModal from "../ConfirmModal";

const StudentInfo = () => {
  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");
  const navigate = useNavigate();
  const { istudent } = useParams();
  const [userInfo, setUserInfo] = useState({
    userDetail: "",
    birth: "",
    certificateValue: [],
    subject: "",
  });
  const [userFile, setUserFile] = useState({
    thumbNail: "",
    resume: "",
    portFolio: [],
    fileLinks: [],
  });
  const [hashTag, setHashTag] = useState("");
  const [hashSave, setHashSave] = useState([]);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteOkModal, setDeleteOkModal] = useState(false);
  const [uploadResult, setUpLoadResult] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState("");
  const [resumeOneWord, setResumeOneWord] = useState("");
  const [pageState, setPageState] = useRecoilState(StudentPageAtom);
  const [imageOkModal, setImageOkModal] = useState(false);

  const fetchData = () => {
    getStudentDetail(
      istudent,
      setUserInfo,
      setUserFile,
      setHashSave,
      setErrorApiInfo,
    );
  };

  useEffect(() => {
    fetchData();
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
  // 이미지 등록
  const handleImageUpeload = async () => {
    postStudentPofolUpload();
  };

  const handleImageUploadModal = () => {
    setImageOkModal(true);
  };
  const handleImageModalClose = () => {
    setImageOkModal(false);
  };

  // 이력서 등록 버튼
  const handleResumeUpload = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", resumeFile);
    try {
      const result = await postStudentResumeUpload(
        istudent,
        resumeOneWord,
        formData,
        setErrorApiInfo,
      );

      setIsLoading(false);

      setUpLoadResult(result);
      if (result.success === true) {
        setAcceptOkModal(true);
      }
      fetchData();
    } catch (error) {
      setAcceptOkModal(true);
    }
  };

  // 수강생 기본정보, 자격증 수정 버튼
  const handleUpdate = async () => {
    try {
      let result;
      result = await putStudentInfo(
        istudent,
        userInfo.userDetail,
        setErrorApiInfo,
      );
      setUpLoadResult(result);

      if (result.success) {
        await setAcceptOkModal(true);
        await setIsEditMode(false);
        navigate("/admin/student/portfolioEdit", {
          state: {
            istudent,
            userFile,
          },
        });
      }

      fetchData();
    } catch (error) {
      // setAcceptOkModal(true);
      // setIsEditMode(false);
    }
  };

  // 돌아가기 버튼
  const handleBack = () => {
    navigate("/admin/student");
  };

  // 수정 취소 버튼
  const handleCancel = () => {
    setIsEditMode(false);
  };
  // 파일 삭제 확인 버튼
  const handleOkClick = async () => {
    try {
      const result = await deleteFile(userFile?.resume?.ifile, setErrorApiInfo);
      if (result.success === true) {
        setDeleteOkModal(false);
        setResumeFile("");
        setResumeOneWord("");
        fetchData();
      }
    } catch (error) {
      setDeleteOkModal(false);
      setErrorApiInfo("파일삭제가 제대로 되지 않았습니다.");
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

  // 연락처 대시 추가
  const phoneFormatter = num => {
    try {
      num = num.replace(/\s/gi, "");

      if (num.length === 11) {
        return num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      } else if (num.length === 10) {
        return num.replace(/(\d{3})(\d{4})(\d{3})/, "$1-$2-$3");
      } else if (/^02/.test(num) && num.length === 9) {
        return num.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
      } else {
        return num;
      }
    } catch (err) {
      return num;
    }
  };

  const formatPhoneNumber = phoneFormatter(userInfo.userDetail.mobileNumber);

  // 해시태그
  const handleHashChange = e => {
    setHashTag(e.target.value);
  };

  // 해시태그 추가
  const handleAddHashTag = async e => {
    const command = ["Comma", "Enter", "NumpadEnter"];
    if (!command.includes(e.code)) return;

    const inputValue = e.target.value?.trim();

    if (!inputValue || inputValue === "") {
      setHashTag("");
      return;
    }

    let newHashTag = inputValue;

    const regExp = /[{}[\].;:|)*~`!^_+<>@#$%&\\=('"]/g;

    if (regExp.test(newHashTag)) {
      newHashTag = newHashTag.replace(regExp, "");
    }

    if (newHashTag.includes(",")) {
      newHashTag = newHashTag.split(",").join("");
    }

    if (newHashTag === "") return;

    if (hashSave.length >= 6) {
      setHashTag("");
      return;
    }

    if (!hashSave.includes(newHashTag)) {
      try {
        setHashSave(prevHashTags => [...prevHashTags, newHashTag]);
        await postStudentCertificate(istudent, newHashTag);
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
    setHashTag("");
  };

  const handleKeyDown = e => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") return;
    e.preventDefault();

    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
    if (!regExp.test(e.currentTarget.value)) {
      setHashTag("");
    }
  };

  // 해시태그 삭제
  const handleRemoveHashTag = async icertificate => {
    await deleteCertificate(istudent, icertificate);
    fetchData();
  };

  const handleHuntJob = e => {
    const newValue = e.target.value === "1" ? 1 : 0;
    setUserInfo(userInfo => ({
      ...userInfo,
      userDetail: {
        ...userInfo.userDetail,
        huntJobYn: newValue,
      },
    }));
  };

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

  return (
    <StudentInfoWrap>
      {isLoading && <UploadLoading />}
      {imageOkModal && (
        <ConfirmModal
          open={imageOkModal}
          close={handleImageModalClose}
          // onConfirm={handleMainCancelConfirm}
          onCancel={handleImageModalClose}
        >
          <span>대표 포트폴리오 이미지를 삭제 하시겠습니까?</span>
        </ConfirmModal>
      )}
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
          formatPhoneNumber={formatPhoneNumber}
          hashTag={hashTag}
          hashSave={hashSave}
          handleAddHashTag={handleAddHashTag}
          handleRemoveHashTag={handleRemoveHashTag}
          handleHashChange={handleHashChange}
          handleKeyDown={handleKeyDown}
          handleHuntJob={handleHuntJob}
          handleImageUploadModal={handleImageUploadModal}
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
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <ErrorModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false);
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false);
          }}
        >
          <span>{errorApiInfo}</span>
        </ErrorModal>
      )}
    </StudentInfoWrap>
  );
};

export default StudentInfo;
