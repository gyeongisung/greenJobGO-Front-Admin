import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { patchSendSaved } from "../../api/portfolioAxios";
import NoImage from "../../assets/DefaultImg.png";
import ConfirmModal from "../ConfirmModal";
import OkModal from "../OkModal";
import { useNavigate } from "react-router";

const PortfolioContent = ({ item, setPage, fetchData, setErrorApiInfo }) => {
  const [savedItemNum, setSavedItemNum] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState();

  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  const navigate = useNavigate();
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 보관함으로 보낸다
  const handleSaveSend = item => {
    setSavedItemNum(item);
    setModalOpen(true);
  };

  // 보관 컨펌
  const handleConfirm = async () => {
    try {
      await patchSendSaved({
        savedItemNum,
        isSaved: 1,
        setErrorInfo,
        setErrorApiInfo,
      });
      fetchData();
      await setModalOpen(false);
      setErrorModalOpen(true);
    } catch (error) {
      setErrorApiInfo(`Saved: ${error.message}`);
    }
  };

  // 보관을 취소한다
  const handleSaveCancel = item => {
    setSavedItemNum(item);
    setCancelModalOpen(true);
  };

  // 보관취소 컨펌
  const handleCancelConfirm = async () => {
    try {
      await patchSendSaved({
        savedItemNum,
        isSaved: 0,
        setErrorInfo,
        setErrorApiInfo,
      });
      fetchData();
      await setCancelModalOpen(false);
      setErrorModalOpen(true);
    } catch (error) {
      setErrorModalOpen(true);
    }
  };

  const handleUserDetailMove = () => {
    navigate(`/admin/student/${item.istudent}`);
  };

  useEffect(() => {
    if (errorInfo) {
      setErrorModalOpen(true);
      // fetchData();
    } else {
      setErrorModalOpen(false);
    }
  }, [errorInfo]);

  return (
    <div className="pf-box">
      <div className="pf-img">
        <div className="pf-img-hover">
          {item.storageYn === 0 ? (
            <i
              className="savedGo-btn"
              onClick={() => handleSaveSend(item.istudent)}
            >
              <FontAwesomeIcon icon={regularHeart} />
            </i>
          ) : item.storageYn === 1 ? (
            <i
              className="isSaved-btn"
              onClick={() => handleSaveCancel(item.istudent)}
            >
              <FontAwesomeIcon icon={solidHeart} />
            </i>
          ) : null}
        </div>
        <img src={`${item.img}`} alt={item.studentName} onError={onImgError} />
        <ul className="thumb-right">
          {item.huntJobYn === 1 && (
            <li>
              <img
                src={`${process.env.PUBLIC_URL}/assets/got-a-job.png`}
                alt="got-a-job"
                className="job-yes-icon"
                onError={onImgError}
              />
            </li>
          )}
        </ul>
      </div>
      <ul>
        <li className="pf-name" onClick={handleUserDetailMove}>
          {item.studentName} 수강생
        </li>
        <li className="pf-subject" onClick={handleUserDetailMove}>
          {item.subjectName}
        </li>
        {item.storageYn === 1 ? (
          <li className="isSaved-name-right">
            <FontAwesomeIcon icon={solidHeart} />
          </li>
        ) : null}
      </ul>
      {/* 보관확인모달 */}
      {modalOpen && (
        <ConfirmModal
          open={modalOpen}
          close={() => setModalOpen(false)}
          onConfirm={handleConfirm}
          onCancel={() => setModalOpen(false)}
        >
          <span>해당 포트폴리오를 보관 하시겠습니까?</span>
        </ConfirmModal>
      )}

      {/* 보관취소모달 */}
      {cancelModalOpen && (
        <ConfirmModal
          open={cancelModalOpen}
          close={() => setCancelModalOpen(false)}
          onConfirm={handleCancelConfirm}
          onCancel={() => setCancelModalOpen(false)}
        >
          <span>해당 포트폴리오 보관을 취소 하시겠습니까?</span>
        </ConfirmModal>
      )}
      {/* api 에러 확인모달 */}
      {errorModalOpen && (
        <OkModal
          header={""}
          open={errorModalOpen}
          close={() => {
            setErrorModalOpen(false);
            // fetchData();
            setErrorInfo("");
          }}
          onConfirm={() => {
            setErrorModalOpen(false);
            setErrorInfo("");
          }}
        >
          <span>{errorInfo}</span>
        </OkModal>
      )}
    </div>
  );
};

export default React.memo(PortfolioContent);
