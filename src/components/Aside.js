import React from "react";
import { AsideWrap } from "../styles/AsideStyle";

const Aside = () => {
  return (
    <AsideWrap>
      <div className="gnb-wrap">
        <ul className="gnb">
          <li>
            <span>홈</span>
          </li>
        </ul>
      </div>
      <div className="user-info-wrap"></div>
    </AsideWrap>
  );
};

export default Aside;
