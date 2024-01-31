import React, { useState } from "react";
import { EdeitCompanyModal } from "./CompanyModal";

const CompanyList = ({
  listData,
  handleAllCheck,
  handleCheckBox,
  page,
  acceptOkModal,
  setAcceptOkModal,
  uploadResult,
  setUpLoadResult,
  fetchData,
  setErrorApiInfo
}) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(null);
  const handleEditModalOpen = data => {
    setCompanyInfo(data);
    setEditModalOpen(true);
  };

  const handleModalCancel = () => {
    setEditModalOpen(false);
    document.body.style.overflow = "unset";
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
          <li className="company-table-th">대표명</li>
          <li className="company-table-th">담당자</li>
          <li className="company-table-th">연락처</li>
          <li className="company-table-th">체결일자</li>
          <li className="company-table-th">홈페이지</li>
        </ul>
      </li>
      {listData.length > 0 &&
        listData.map((item, index) => (
          <li
            key={item.companyCode}
            onClick={e =>
              !e.target.classList.contains("check-box-li") &&
              handleEditModalOpen(item)
            }
          >
            <ul>
              <li className="check-box-li">
                <input
                  type="checkbox"
                  name="check-box"
                  defaultChecked={false}
                  className={`company-checkbox userId${item.companyCode}`}
                  onChange={e => handleCheckBox(e)}
                  onClick={e => e.stopPropagation()}
                />
              </li>
              <li>{(page - 1) * 10 + index + 1}</li>
              <li>{item.area}</li>
              <li>{item.companyName}</li>
              <li>{item.leaderName}</li>
              <li>{item.manager}</li>
              <li>{item.phoneNumber}</li>
              <li>{item.dateConslusion}</li>
              <li className="check-box-li" onClick={e => e.stopPropagation()}>
                <a
                  href={`https://${item.homepage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.homepage}
                </a>
              </li>
            </ul>
          </li>
        ))}
      {editModalOpen && (
        <EdeitCompanyModal
          companyInfo={companyInfo}
          editModalOpen={editModalOpen}
          setEditModalOpen={setEditModalOpen}
          handleModalCancel={handleModalCancel}
          acceptOkModal={acceptOkModal}
          setAcceptOkModal={setAcceptOkModal}
          uploadResult={uploadResult}
          setUpLoadResult={setUpLoadResult}
          fetchData={fetchData}
          setErrorApiInfo={setErrorApiInfo}
        />
      )}
    </ul>
  );
};

export default CompanyList;
