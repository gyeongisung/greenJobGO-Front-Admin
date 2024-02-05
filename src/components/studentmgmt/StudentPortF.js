import React, { useEffect, useState } from "react";
import {
  StudentInfoWrap,
  StudentPFeditSty,
} from "../../styles/StudentInfoStyle";
import { v4 } from "uuid";
import { PortFolioAdd } from "./StudentModal";
import { AcceptModal, DeleteOkModal } from "../AcceptModals";
import {
  deleteFile,
  getStudentDetail,
  patchMainPofolSelected,
  postStudentPofolUpload,
} from "../../api/studentAxios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCrown,
  faFilePdf,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router";
import ErrorModal from "../ErrorModal";
import ConfirmModal from "../ConfirmModal";
import UploadLoading from "../UploadLoading";

const StudentPortF = () => {
  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  const [uploadResult, setUpLoadResult] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [iFile, setIFile] = useState(2);
  const [fileId, setFileId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [deleteOkModal, setDeleteOkModal] = useState(false);
  const [mainYnModal, setMainYnModal] = useState(false);
  const [mainYn, setMainYn] = useState(0);
  const [mainCheck, setMainCheck] = useState("");
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

  const navigate = useNavigate();
  const location = useLocation();
  const userSendInfo = location.state;

  console.log("edit", userSendInfo);

  useEffect(() => {
    getStudentDetail(userSendInfo.istudent, setUserInfo, setUserFile);
  }, [userInfo.istudent]);

  const handleFileUpload = async () => {
    setIsLoading(true);
    if (iFile && (iFile === 2 || iFile === 3)) {
      let formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const result = await postStudentPofolUpload(
          userSendInfo.istudent,
          iFile,
          formData,
          description,
          linkUrl,
          setErrorApiInfo,
        );
        setIsLoading(false);
        setUpLoadResult(result);
        if (result.success === true) {
          setModalOpen(false);
          setAcceptOkModal(true);
          setIFile(2);
          setSelectedFile(null);
          setLinkUrl("");
          setDescription("");
          getStudentDetail(userSendInfo.istudent, setUserInfo, setUserFile);
        }
      } catch (error) {
        setModalOpen(false);
        setAcceptOkModal(true);
        setIFile(2);
        setSelectedFile(null);
        setLinkUrl("");
        setDescription("");
        getStudentDetail(userSendInfo.istudent, setUserInfo, setUserFile);
      }
    }
  };
  const handleAddButton = () => {
    setModalOpen(true);
  };
  const handlePofolModalCancel = () => {
    setModalOpen(false);
  };

  const handleUpdate = () => {
    navigate(`/admin/student/${userSendInfo.istudent}`);
  };

  const handleDeleteFile = async fileId => {
    setFileId(fileId);
    setDeleteOkModal(true);
  };

  const handleOkClick = async () => {
    try {
      const result = await deleteFile(fileId);
      if (result.success === true) {
        setDeleteOkModal(false);
        getStudentDetail(userSendInfo.istudent, setUserInfo, setUserFile);
      }
    } catch (error) {
      setDeleteOkModal(false);
      setErrorApiInfo("정상적으로 처리 되지 않았습니다.");
    }
  };

  const handleCancelClick = () => {
    setDeleteOkModal(false);
  };

  const handleCheckboxChange = (e, ifile) => {
    if (e.target.checked) {
      setMainCheck([ifile]);
      setMainYn(0);
      setMainYnModal(true);
      console.log(mainCheck);
    } else {
      setMainCheck([ifile]);
      setMainYn(1);
      setMainYnModal(true);
      console.log(mainCheck);
    }
  };

  const handleMainPofolOk = () => {
    patchMainPofolSelected(
      userSendInfo.istudent,
      mainCheck,
      mainYn,
      setErrorApiInfo,
    );
    setMainYnModal(false);
  };

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

  return (
    <StudentPFeditSty>
      {isLoading && <UploadLoading />}
      {deleteOkModal && (
        <DeleteOkModal
          deleteOkModal={deleteOkModal}
          handleOkClick={handleOkClick}
          handleCancelClick={handleCancelClick}
        />
      )}
      {/* 보관확인모달 */}
      {mainYnModal && (
        <ConfirmModal
          open={mainYnModal}
          close={() => setMainYnModal(false)}
          onConfirm={handleMainPofolOk}
          onCancel={() => setMainYnModal(false)}
        >
          <span>대표 포트폴리오로 등록 하시겠습니까?</span>
        </ConfirmModal>
      )}
      <ul className="portfolio-list">
        <li>
          <h2>포트폴리오</h2>
          <button onClick={handleAddButton} className="upload-btn">
            + 포트폴리오 파일 또는 링크 추가
          </button>
        </li>
        <li>
          <div>
            {userFile && userFile.portFolio && userFile.portFolio.length > 0 ? (
              userFile.portFolio.map(item => (
                <div className="portfolio-box" key={v4()}>
                  <div className="portfolio-inner">
                    <div className="portfolio-top">
                      <div>
                        <p>
                          <FontAwesomeIcon icon={faFilePdf} />
                        </p>
                        <a
                          href={`https://greenjobgo.kr/img/student/${userSendInfo.istudent}/${item.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          &nbsp;
                          {item.file}
                        </a>
                      </div>
                      <div className="portfolio-icons">
                        {item.mainYn === 1 ? (
                          <p className="main-pofol-icon">
                            <FontAwesomeIcon icon={faCrown} />
                          </p>
                        ) : (
                          ""
                        )}
                        <p className="delete-icon">
                          <FontAwesomeIcon
                            onClick={() => handleDeleteFile(item.ifile)}
                            icon={faCircleXmark}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="portfolio-btm">
                      <span>{item.oneWord}</span>
                    </div>
                  </div>
                  <div className="main-check">
                    <input
                      type="checkbox"
                      value={item.ifile}
                      checked={item.mainYn === 1}
                      onChange={e => handleCheckboxChange(e, item.ifile)}
                    />
                  </div>
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
            {userFile && userFile.fileLinks && userFile.fileLinks.length > 0 ? (
              userFile.fileLinks.map(item => (
                <div className="portfolio-box" key={v4()}>
                  <div className="portfolio-inner">
                    <div className="portfolio-top">
                      <div>
                        <p>
                          <FontAwesomeIcon icon={faLink} />
                        </p>
                        <a
                          href={`https://${item.fileLink}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          &nbsp;{item.fileLink}
                        </a>
                      </div>
                      <div>
                        <p className="delete-icon">
                          <FontAwesomeIcon
                            onClick={() => handleDeleteFile(item.ifile)}
                            icon={faCircleXmark}
                            style={{ color: "#6d6d6d" }}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="portfolio-btm">
                      <span>{item.oneWord}</span>
                    </div>
                  </div>
                  <div className="main-check">
                    <input
                      type="checkbox"
                      value={item.ifile}
                      checked={item.mainYn === 1}
                      onChange={e => handleCheckboxChange(e, item.ifile)}
                    />
                  </div>
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
      <div className="buttons">
        <div>
          <>
            <button onClick={handleUpdate}>확인</button>
          </>
        </div>
      </div>
      {modalOpen && (
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
      )}
      {acceptOkModal && (
        <AcceptModal
          acceptOkModal={acceptOkModal}
          setAcceptOkModal={setAcceptOkModal}
          uploadResult={uploadResult}
        />
      )}
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
    </StudentPFeditSty>
  );
};

export default StudentPortF;
