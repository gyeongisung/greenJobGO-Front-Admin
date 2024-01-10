import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import NoImage from "../../assets/NoImage.jpg";

const PortfolioBox = ({
  item,
  setSavedItemNum,
  setModalOpen,
  setCancelModalOpen,
}) => {
  console.log("PortfolioBox 리랜더링?");
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 보관함으로 보낸다
  const handleSaveSend = item => {
    setSavedItemNum(item);
    setModalOpen(true);
  };

  // 보관을 취소한다
  const handleSaveCancel = item => {
    setSavedItemNum(item);
    setCancelModalOpen(true);
  };

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
                src={`${process.env.PUBLIC_URL}/got-a-job.png`}
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
    </div>
  );
};

export default React.memo(PortfolioBox);
