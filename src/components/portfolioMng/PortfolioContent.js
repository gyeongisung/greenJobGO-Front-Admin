import React from "react";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";

const PortfolioContent = () => {
  return (
    <PortFolioContentWrap>
      <div className="pf-box">
        <div className="pf-img">
          <img src="http://placehold.it/320x300" />
        </div>
        <ul>
          <li>김그린 수강생</li>
          <li>UX/UI 반응형 디자인 & 퍼블리싱 과정</li>
        </ul>
      </div>
    </PortFolioContentWrap>
  );
};

export default PortfolioContent;
