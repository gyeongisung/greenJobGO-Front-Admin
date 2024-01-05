import React, { useState } from "react";
import { EdeitCompanyModal } from "./CompanyModal";

const CompanyList = ({ listData, handleAllCheck, handleCheckBox, page }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(null);
  const handleEditModalOpen = data => {
    setCompanyInfo(data);
    setEditModalOpen(true);
  };

  return (
    <ul>
      <li className="company-list">
        <ul>
          <li className="company-table-th">
            <input
              type="checkbox"
              name="all-check-box"
              onChange={e => handleAllCheck(e)}
              className="all-checkbox-btn"
            />
          </li>
          <li className="company-table-th">번호</li>
          <li className="company-table-th">지역</li>
          <li className="company-table-th">기업명</li>
          <li className="company-table-th">채용분야</li>
          <li className="company-table-th">대표명</li>
          <li className="company-table-th">담당자</li>
          <li className="company-table-th">연락처</li>
          <li className="company-table-th">체결일자</li>
        </ul>
      </li>
      {listData.length > 0 &&
        listData.map((item, index) => (
          <li key={item.companyCode}>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="check-box"
                  defaultChecked={false}
                  className={`company-checkbox userId${item.companyCode}`}
                  onChange={e => handleCheckBox(e)}
                />
              </li>
              <li>{(page - 1) * 10 + index + 1}</li>
              {editModalOpen && (
                <EdeitCompanyModal
                  companyInfo={companyInfo}
                  editModalOpen={editModalOpen}
                  setEditModalOpen={setEditModalOpen}
                />
              )}
              <li>{item.area}</li>
              <li onClick={() => handleEditModalOpen(item)}>
                {item.companyName}
              </li>
              <li>{item.jobField}</li>
              <li>{item.leaderName}</li>
              <li>{item.manager}</li>
              <li>{item.phoneNumber}</li>
              <li>{item.dateConslusion}</li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default CompanyList;
