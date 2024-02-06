import React, { useState, useEffect } from "react";
import NoImage from "../../assets/NoImage.jpg";
import { patchSendSaved } from "../../api/portfolioAxios";
import ConfirmModal from "../ConfirmModal";
import { CheckToMainSt } from "../../styles/PortfolioStyle";
import SaveItemCheckbox from "./SaveItemCheckbox";
import OkModal from "../OkModal";

// // 메인클릭 정보 저장 recoil

const SaveItemBox = ({ item, fetchData, clickItems, setClickItems }) => {
  const [savedItemNum, setSavedItemNum] = useState([]);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
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
        setErrorInfo
      });
      setCancelModalOpen(false);
    } catch (error) {
      setErrorModalOpen(true);
    }
  };
  useEffect(() => {
    if (errorInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }
  }, [errorInfo]);

  return (
    <div className="pf-box">
      <div className="saved-img">
        <img src={`${item.img}`} alt={item.studentName} onError={onImgError} />
        {item.companyMainYn === 1 ? <div className="isMainDim"></div> : null}
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
      <CheckToMainSt>
        <SaveItemCheckbox
          item={item}
          handleSaveCancel={handleSaveCancel}
          fetchData={fetchData}
          clickItems={clickItems}
          setClickItems={setClickItems}
        />
      </CheckToMainSt>
      {/* 보관취소모달 */}
      {cancelModalOpen && (
        <ConfirmModal
          open={cancelModalOpen}
          close={() => {
            setCancelModalOpen(false);
          }}
          onConfirm={handleCancelConfirm}
          onCancel={() => {
            setCancelModalOpen(false);
          }}
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
            setErrorModalOpen(false), setErrorInfo("");
          }}
          onConfirm={() => {
            setErrorModalOpen(false), setErrorInfo("");
          }}
        >
          <span>{errorInfo}</span>
        </OkModal>
      )}
    </div>
  );
};

export default React.memo(SaveItemBox);
