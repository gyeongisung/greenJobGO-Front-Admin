import React from "react";
import { JobManagerBoxWrap } from "../../styles/JobmanagerStyle";
import NoImage from "../../assets/NoImage.jpg";

const ManagerBox = ({ mngProflieData }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <JobManagerBoxWrap>
      {mngProflieData?.map(item => (
        <div className="manager-profile" key={item.iemply}>
          <img
            src={`${process.env.PUBLIC_URL}/home/download/Employee/${item.iemply}/${item.profilePic}`}
            alt="job manager"
            onError={onImgError}
          />
          <div className="manager-details">
            <p className="manager-word">{item.oneWord}</p>
            <p className="manager-name">{item.name} 취업지원실장</p>
            <ul className="manager-contact">
              <li>
                <span>상담전화</span>
                <span>{item.conuselingNumber}</span>
              </li>
              <li>
                <span>모바일</span>
                <span>{item.phoneNumber}</span>
              </li>
              <li>
                <span>이메일</span>
                <span>{item.email}</span>
              </li>
            </ul>
          </div>
          <ul className="btn-group">
            <li>
              <button className="edit-btn">수정</button>
            </li>
            <li>
              <button className="del-btn">삭제</button>
            </li>
          </ul>
        </div>
      ))}
      {mngProflieData && mngProflieData.length === 0 && (
        <div>취업담당자의 정보를 등록해주세요</div>
      )}
    </JobManagerBoxWrap>
  );
};

export default ManagerBox;
