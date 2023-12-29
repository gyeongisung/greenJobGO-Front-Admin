import React from "react";
import { JobManagerBoxWrap } from "../../styles/JobmanagerStyle";

const ManagerBox = ({ mngProflieData }) => {
  return (
    <JobManagerBoxWrap>
      {mngProflieData?.map((item, index) => (
        <div className="manager-profile" key={index}>
          <img src={item.img} alt="job manager" />
          <div className="manager-details">
            <p className="manager-word">{item.shortword}</p>
            <p className="manager-name">{item.name} 취업지원실장</p>
            <ul className="manager-contact">
              <li>
                <span>상담전화</span>
                <span>{item.call}</span>
              </li>
              <li>
                <span>모바일</span>
                <span>{item.mobile}</span>
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
