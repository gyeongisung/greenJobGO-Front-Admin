import React, { useEffect, useState } from "react";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import NoImage from "../../assets/NoImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { getPortFolioList, patchSendSaved } from "../../api/portfolioAxios";
import {
  ConfirmModalContent,
  ModalCancelBtn,
  ModalOkBtn,
} from "../../styles/GlobalStyle";
import ConfirmModal from "../ConfirmModal";

const PortfolioContent = ({ studentPFList, setStudentPFList, setCount }) => {
  const [savedItemNum, setSavedItemNum] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(1);
  0;
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const closeCancelModal = () => {
    setCancelModalOpen(false);
  };

  // 보관함으로 보낸다
  const handleSaveSend = item => {
    setSavedItemNum(item);
    setModalOpen(true);
  };
  const handleConfirm = async () => {
    try {
      await setIsSaved(1);
      await patchSendSaved({ savedItemNum, isSaved });
      // await updateData();
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
  const handleCancelConfirm = async () => {
    try {
      await setIsSaved(0);
      await patchSendSaved({ savedItemNum, isSaved });
      // await updateData();
      setCancelModalOpen(false);
    } catch (error) {
      console.log("보관실패", error);
    }
  };

  useEffect(() => {
    getPortFolioList({ setStudentPFList, setCount });
  }, [isSaved]);
  return (
    <PortFolioContentWrap>
      {studentPFList?.res?.map((item, index) => (
        <div className="pf-box" key={index}>
          <div className="pf-img-hover">
            {item.storageYn === 0 ? (
              <i
                className="saved-btn"
                onClick={() => handleSaveSend(item.istudent)}
              >
                <FontAwesomeIcon icon={regularHeart} />
              </i>
            ) : item.storageYn === 1 ? (
              <i
                className="saved-btn"
                onClick={() => handleSaveCancel(item.istudent)}
              >
                <FontAwesomeIcon icon={solidHeart} />
              </i>
            ) : null}
          </div>
          <div className="pf-img">
            <img
              src={`${item.img}`}
              alt={item.studentName}
              onError={onImgError}
            />
          </div>
          <ul>
            <li className="pf-name">{item.studentName} 수강생</li>
            <li className="pf-subject">{item.subjectName}</li>
          </ul>
        </div>
      ))}

      {/* 보관확인모달 */}
      {modalOpen && (
        <ConfirmModal open={modalOpen} close={closeModal}>
          <ConfirmModalContent>
            <span>해당 포트폴리오를 보관 하시겠습니까?</span>
            <div>
              <ModalCancelBtn onClick={closeModal}>취소</ModalCancelBtn>
              <ModalOkBtn onClick={() => handleConfirm()}>확인</ModalOkBtn>
            </div>
          </ConfirmModalContent>
        </ConfirmModal>
      )}
      {/* 보관취소모달 */}
      {cancelModalOpen && (
        <ConfirmModal open={cancelModalOpen} close={closeCancelModal}>
          <ConfirmModalContent>
            <span>해당 포트폴리오 보관을 취소 하시겠습니까?</span>
            <div>
              <ModalCancelBtn onClick={closeCancelModal}>취소</ModalCancelBtn>
              <ModalOkBtn onClick={() => handleCancelConfirm()}>
                확인
              </ModalOkBtn>
            </div>
          </ConfirmModalContent>
        </ConfirmModal>
      )}
    </PortFolioContentWrap>
  );
};

export default PortfolioContent;
