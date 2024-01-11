import React, { useEffect, useState } from "react";
import ConfirmModal from "../ConfirmModal";
import { CheckToMainSt } from "../../styles/PortfolioStyle";
import { getSavedPFList, patchSendSaved } from "../../api/portfolioAxios";
import NoImage from "../../assets/NoImage.jpg";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const SaveItemContent = ({
  item,
  checkItems,
  handleMainCheck,
  setSavedPFList,
}) => {
  const [savedItemNum, setSavedItemNum] = useState("");
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState();

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
      let update = 0;
      setIsSaved(update);
      await patchSendSaved({ savedItemNum, isSaved: update });
      await updateData();
      setCancelModalOpen(false);
    } catch (error) {
      console.log("보관실패", error);
    }
  };

  // api 요청 성공할 때 화면 리랜더링
  const updateData = async () => {
    try {
      const newData = await getSavedPFList({ setSavedPFList });
    } catch (error) {
      console.error("데이터 업데이트 에러:", error);
    }
  };

  useEffect(() => {
    console.log("보관리스트 리랜더링~");
  }, []);

  console.log("보관함 컨텐츠");

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

export default React.memo(SaveItemContent);
