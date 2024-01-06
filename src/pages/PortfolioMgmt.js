import React, { useEffect, useState } from "react";
import PfContentWrap from "../components/portfolioMng/PfContentWrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioSection from "../components/portfolioMng/PortfolioSection";
import SaveItemSection from "../components/portfolioMng/SaveItemSection";
import MainpfSection from "../components/portfolioMng/MainpfSection";
import { PortFolioPage } from "../styles/PortfolioStyle";

const PortfolioMgmt = () => {
  // 버튼 활성화 state
  const [activeTab, setActiveTab] = useState(1);

  const TabBtns = [
    {
      ibtn: 1,
      name: "포트폴리오 관리",
      component: <PortfolioSection />,
    },
    {
      ibtn: 2,
      name: "보관함",
      component: <SaveItemSection />,
    },
  ];

  const handleTabBtn = (_ibtn, e) => {
    e.preventDefault();
    setActiveTab(_ibtn);
  };

  useEffect(() => {
    // api get 요청 자리
  }, [activeTab]);
  return (
    <PortFolioPage>
      {TabBtns.map(item => (
        <div key={item.ibtn}>
          <ul>
            <li>
              <button
                className={`${
                  activeTab === item.ibtn ? "active" : ""
                } tab-button`}
                onClick={e => handleTabBtn(item.ibtn, e)}
              >
                {item.name}
              </button>
              <div className="search-upper-line"></div>
            </li>
          </ul>
          <div className="content-wrap">
            {activeTab === item.ibtn && item.component}
          </div>
        </div>
      ))}
    </PortFolioPage>
  );
};

export default PortfolioMgmt;
