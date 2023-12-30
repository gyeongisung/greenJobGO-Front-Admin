import React, { useEffect, useState } from "react";
import {
  CompanyMgmtInner,
  CompanyMgmtWrap,
  CompanyTable,
} from "../styles/CompanyMgmtStyle";
import Pagination from "../components/Paging";
import { CompanyMgmtModal } from "../components/Modal";
import {
  deleteCompany,
  getCompanyList,
  postCompanyExcel,
} from "../api/companyAxios";

const CompanyMgmt = () => {
  const [listData, setListData] = useState([]);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [accept, setAccept] = useState(false);

  let resultIdArray = saveCheckBox;

  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".company-checkbox");
    resultIdArray = [];
    if (e.target.checked === true) {
      allCheckBox.forEach(item => {
        item.checked = true;
        resultIdArray.push(parseInt(item.classList[1].slice(6)));
      });
    } else {
      allCheckBox.forEach(item => {
        item.checked = false;
      });
      resultIdArray = [];
    }
    setSaveCheckBox(resultIdArray);
  };

  const handleCheckBox = e => {
    const clickList = e.currentTarget;
    const companyCode = parseInt(clickList.classList[1].slice(6));
    if (e.target.checked === true) {
      resultIdArray.push(companyCode);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== companyCode);
    }
    setSaveCheckBox(resultIdArray);
  };

  const fetchData = () => {
    getCompanyList(setListData, setCount, page, search);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    document.querySelector(".all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".company-checkbox")
      .forEach(item => (item.checked = false));
    setSaveCheckBox([]);
  }, [listData]);

  const handleSearch = () => {
    setPage(1);
    fetchData();
  };
  const handleCategoryFiiter = e => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleExcelUpload = companyfile => {
    let formData = new FormData();
    formData.append("companyfile", companyfile[0]);
    postCompanyExcel(formData);
  };

  const handleDeleteCompany = async () => {
    // 선택된 companyCode 배열
    const checkedCompanyCodes = saveCheckBox;

    try {
      // 선택된 기업 삭제 요청
      await deleteCompany(checkedCompanyCodes);

      // 삭제 요청이 성공하면 화면에서도 해당 항목을 삭제
      setListData(prevListData =>
        prevListData.filter(
          item => !checkedCompanyCodes.includes(item.companyCode),
        ),
      );

      // 체크박스 초기화
      setSaveCheckBox([]);
    } catch (error) {
      console.error("기업 삭제 오류:", error);
    }
  };
  return (
    <CompanyMgmtWrap>
      <div className="company-title">
        <h3>기업 등록 · 관리</h3>
      </div>
      <CompanyMgmtInner>
        <ul className="company-search">
          <li>
            <select
              value={category}
              name="category-state"
              onChange={handleCategoryFiiter}
            >
              <option name="category-state" value="">
                선택
              </option>
              <option name="category-state" value="">
                카테고리1
              </option>
              <option name="category-state" value="">
                카테고리2
              </option>
              <option name="category-state" value="">
                카테고리3
              </option>
              <option name="category-state" value="">
                카테고리4
              </option>
            </select>
          </li>
          <li>
            <form onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                placeholder="기업 이름을 검색하세요."
                name="category-state"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </form>
          </li>
          <li>
            <button onClick={handleSearch}>검색</button>
          </li>
        </ul>
        <div className="company-buttons">
          {modalOpen && (
            <CompanyMgmtModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setAccept={setAccept}
            />
          )}
          <div>
            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={e => handleExcelUpload(e.target.files)}
            />
          </div>
          <button onClick={() => handleModalOpen()}>기업등록</button>
          <button>수정</button>
          <button onClick={handleDeleteCompany}>삭제</button>
        </div>
        <CompanyTable>
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
        </CompanyTable>
        <Pagination page={page} setPage={setPage} count={count} />
      </CompanyMgmtInner>
    </CompanyMgmtWrap>
  );
};

export default CompanyMgmt;
