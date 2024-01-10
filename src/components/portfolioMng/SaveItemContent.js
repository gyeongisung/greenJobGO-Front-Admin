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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const SaveItemContent = ({ savedPFList }) => {
  const [savedItemNum, setSavedItemNum] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isSavedCancel, setIsSavedCancel] = useState(0);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(1);
  const [checkItems, setCheckItems] = useState([]);

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
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
  // 보관을 취소한다
  const handleSaveCancel = item => {
    console.log("item", item);
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
                  id={`${v4()}`}
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
              {item.storageYn === 1 ? (
                <li
                  className="isSaved-name-right"
                  onClick={() => handleSaveCancel(item.istudent)}
                >
                  <FontAwesomeIcon icon={solidHeart} />
                </li>
              ) : null}
            </ul>
          </CheckToMainSt>
        </div>
      ))}
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
    </PortFolioContentWrap>
  );
};

export default React.memo(SaveItemContent);
