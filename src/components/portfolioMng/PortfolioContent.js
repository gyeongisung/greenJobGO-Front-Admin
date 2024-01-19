import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { patchSendSaved } from "../../api/portfolioAxios";
import NoImage from "../../assets/NoImage.jpg";
import ConfirmModal from "../ConfirmModal";

const PortfolioContent = ({ item, setPage, fetchData }) => {
  const [savedItemNum, setSavedItemNum] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState();

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
      // await setPage(1);
      let update = 1;
      setIsSaved(update);
      await patchSendSaved({ savedItemNum, isSaved: update });
      await fetchData();
      setModalOpen(false);
    } catch (error) {
      console.log("보관실패", error);
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
      let update = 0;
      setIsSaved(update);
      await patchSendSaved({ savedItemNum, isSaved: update });
      await fetchData();
      setCancelModalOpen(false);
    } catch (error) {
      console.log("보관실패", error);
    }
  };
  // api 요청 성공할 때 화면 리랜더링
  // const updateData = async () => {
  //   try {
  //     const newData = await getPortFolioList({ setStudentPFList });
  //   } catch (error) {
  //     console.error("데이터 업데이트 에러:", error);
  //   }
  // };

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
        <li className="pf-name">{item.studentName} 수강생</li>
        <li className="pf-subject">{item.subjectName}</li>
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
    </div>
  );
};

export default React.memo(PortfolioContent);
