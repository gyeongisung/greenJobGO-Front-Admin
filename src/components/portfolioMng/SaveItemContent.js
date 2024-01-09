import React, { useState } from "react";
import {
  BtnGlobal,
  ConfirmModalContent,
  ModalCancelBtn,
  ModalOkBtn,
} from "../../styles/GlobalStyle";
import ConfirmModal from "../ConfirmModal";
import {
  CheckToMainSt,
  PortFolioContentWrap,
} from "../../styles/PortfolioStyle";
import { patchSendSaved } from "../../api/portfolioAxios";
import NoImage from "../../assets/NoImage.jpg";
import { v4 } from "uuid";

const SaveItemContent = ({ savedPFList }) => {
  const [savedItemNum, setSavedItemNum] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isSavedCancel, setIsSavedCancel] = useState(0);
  const [checkItems, setCheckItems] = useState([]);

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // 메인으로 보낼 리스트를 체크하자
  const handleMainCheck = (istudent, isChecked) => {
    if (isChecked) {
      setCheckItems(prev => [...prev, istudent]);
    } else {
      setCheckItems(checkItems.filter(item => item !== istudent));
    }
    console.log("뭐체크됨?", checkItems);
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
      <BtnGlobal className="GoMainGo" onClick={handleGoMain}>
        메인 포트폴리오 적용
      </BtnGlobal>
      {savedPFList?.res?.map(item => (
        <div className="pf-box" key={v4()}>
          <div className="saved-img">
            <img
              src={`${item.img}`}
              alt={item.studentName}
              onError={onImgError}
            />
            {item.companyMainYn === 1 ? (
              <div className="isMainDim"></div>
            ) : null}
            <ul className="thumb-right">
              {item.huntJobYn === 1 && (
                <li>
                  <img
                    src={`${process.env.PUBLIC_URL}/got-a-job.png`}
                    alt="got-a-job"
                    className="job-yes-icon"
                    onError={onImgError}
                  />
                </li>
              )}
            </ul>
          </div>
          <CheckToMainSt>
            <ul className="main-checked">
              <li>
                <input
                  type="checkbox"
                  id="go-main-checked"
                  checked={checkItems.includes(item.istudent)}
                  onChange={() =>
                    handleMainCheck(
                      item.istudent,
                      !checkItems.includes(item.istudent),
                    )
                  }
                />
              </li>
            </ul>
            <ul className="side-info">
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
