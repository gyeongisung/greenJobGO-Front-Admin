import React from "react";

const CompanyList = ({ listData, handleAllCheck, handleCheckBox, page }) => {
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
          <li key={index}>
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
              <li>{item.area}</li>
              <li>{item.companyName}</li>
              <li>{item.sector}</li>
              <li>{item.leaderName}</li>
              <li>{item.manger}</li>
              <li>{item.phonenumber}</li>
              <li>{item.dateConslusion}</li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default CompanyList;
