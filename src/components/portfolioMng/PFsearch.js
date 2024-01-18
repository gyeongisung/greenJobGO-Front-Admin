import React, { useCallback, useEffect, useState } from "react";
import { PfSearchWrap } from "../../styles/PortfolioStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { getBigcate } from "../../api/portfolioAxios";

const PFsearch = ({
  handleSearchClick,
  selectCate,
  setSelectCate,
  searchsubj,
  setSearchSubj,
  searchname,
  setSearchname,
}) => {
  const [category, setCategory] = useState([]);

  // 카테변경값 저장
  const handleCategoryFilter = e => {
    console.log("필터변경e", e.target.value);
    setSelectCate(e.target.value);
    setSearchSubj("");
    setSearchname("");
  };

  useEffect(() => {
    getBigcate(setCategory);
  }, []);

  return (
    <PfSearchWrap>
      <ul className="student-portfolio-search">
        <li className="select-wrap">
          <label htmlFor="category-select">직종</label>
          <select
            value={selectCate}
            id="category-select"
            onChange={e => handleCategoryFilter(e)}
          >
            <option value="" defaultValue>
              전체
            </option>
            {category?.map(item => (
              <option
                key={`cate${item.iclassification}`}
                value={item.iclassification}
              >
                {item.classification}
              </option>
            ))}
          </select>
        </li>
        <li>
          <div className="subjectname-form">
            <label htmlFor="subject-state">과정명</label>
            <input
              type="text"
              id="subject-state"
              value={searchsubj}
              onChange={e => setSearchSubj(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleSearchClick();
                }
              }}
            />
          </div>
        </li>
        <li>
          <div className="studentname-form">
            <label htmlFor="student-state">수강생 이름</label>
            <input
              type="text"
              id="student-state"
              value={searchname}
              onChange={e => setSearchname(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleSearchClick();
                }
              }}
            />
          </div>
        </li>
        <li>
          <BtnGlobal onClick={handleSearchClick}>조회</BtnGlobal>
        </li>
      </ul>
    </PfSearchWrap>
  );
};

export default PFsearch;
