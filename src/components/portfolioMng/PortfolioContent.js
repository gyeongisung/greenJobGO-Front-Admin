import React, { useState } from "react";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import NoImage from "../../assets/NoImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { patchSendSaved } from "../../api/portfolioAxios";
import {
  ConfirmModalContent,
  ModalCancelBtn,
  ModalOkBtn,
} from "../../styles/GlobalStyle";
import ConfirmModal from "../ConfirmModal";

const PortfolioContent = ({ studentPFList }) => {
  const [savedItemNum, setSavedItemNum] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState("1");

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSaveSend = item => {
    setSavedItemNum(item);
    setModalOpen(true);
  };
  const handleConfirm = async () => {
    try {
      await patchSendSaved({ savedItemNum, isSaved });
      setModalOpen(false);
    } catch (error) {
      console.log("보관실패", error);
    }
  };

  return (
    <PortFolioContentWrap>
      {studentPFList?.res?.map((item, index) => (
        <div className="pf-box" key={index}>
          <div className="pf-img-hover">
            <i
              className="saved-btn"
              onClick={() => handleSaveSend(item.istudent)}
            >
              <FontAwesomeIcon icon={faHeart} />
            </i>
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

      {/* 확인모달 */}
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
    </PortFolioContentWrap>
  );
};

export default PortfolioContent;
