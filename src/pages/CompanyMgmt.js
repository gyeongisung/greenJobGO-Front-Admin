import React, { useEffect, useState } from "react";
import {
  CompanyMgmtInner,
  CompanyMgmtWrap,
  CompanyTable,
} from "../styles/CompanyMgmtStyle";
import Pagination from "../components/Paging";
import { CompanyMgmtModal } from "../components/InputModal";

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
    const userId = parseInt(clickList.classList[1].slice(6));
    if (e.target.checked === true) {
      resultIdArray.push(userId);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== userId);
    }
    setSaveCheckBox(resultIdArray);
  };

  useEffect(() => {
    document.querySelector(".all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".company-checkbox")
      .forEach(item => (item.checked = false));
    setSaveCheckBox([]);
  }, [listData]);

  const handleCategoryFiiter = e => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
    console.log(modalOpen);
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
              />
            </form>
          </li>
          <li>
            <button>검색</button>
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
          <button onClick={() => handleModalOpen()}>기업등록</button>
          <button>수정</button>
          <button>삭제</button>
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
                        className={`company-checkbox userId${item.userId}`}
                        onChange={e => handleCheckBox(e)}
                      />
                    </li>
                    <li>{(page - 1) * 16 + index + 1}</li>
                    <li>{item.nm}</li>
                    <li>{item.birth}</li>
                    <li>{item.phone}</li>
                    <li>{item.email}</li>
                    <li>{item.email}</li>
                    <li>{item.email}</li>
                    <li>{item.email}</li>
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
