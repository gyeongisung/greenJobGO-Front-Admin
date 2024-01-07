import React, { useState } from "react";
import {
  ConfirmModalContent,
  ModalCancelBtn,
  ModalOkBtn,
} from "../../styles/GlobalStyle";
import ConfirmModal from "../ConfirmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  CheckToMainSt,
  PortFolioContentWrap,
} from "../../styles/PortfolioStyle";
import { patchSendSaved } from "../../api/portfolioAxios";
import NoImage from "../../assets/NoImage.jpg";

const SaveItemContent = ({ savedPFList }) => {
  const [savedItemNum, setSavedItemNum] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isSavedCancel, setIsSavedCancel] = useState("0");

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleGoMain = e => {
    console.log("메인으로 보내는 포폴 클릭", e);
  };
  const handleSaveSend = item => {
    console.log("보관함?", item);
    setSavedItemNum(item);
    setModalOpen(true);
  };
  const handleConfirm = async () => {
    try {
      await patchSendSaved({ savedItemNum, isSavedCancel });
      setModalOpen(false);
    } catch (error) {
      console.log("보관실패", error);
    }
  };

  return (
    <PortFolioContentWrap>
      {savedPFList?.res?.map((item, index) => (
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
          <CheckToMainSt>
            <ul className="main-checked">
              <li>
                <input type="checkbox" onClick={e => handleGoMain(e)} />
              </li>
            </ul>
            <ul>
              <li className="pf-name">{item.studentName} 수강생</li>
              <li className="pf-subject">{item.subjectName}</li>
            </ul>
          </CheckToMainSt>
        </div>
      ))}

      {/* 확인모달 */}
      {modalOpen && (
        <ConfirmModal open={modalOpen} close={closeModal}>
          <ConfirmModalContent>
            <span>해당 포트폴리오의 보관을 취소 하시겠습니까?</span>
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

export default SaveItemContent;
