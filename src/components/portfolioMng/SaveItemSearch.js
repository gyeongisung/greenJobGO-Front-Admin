import React from "react";
import { PfSearchWrap } from "../../styles/PortfolioStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { v4 } from "uuid";

const SaveItemSearch = ({
  searchsubj,
  setSearchSubj,
  searchname,
  setSearchname,
  category,
  selectCate,
  handleCategoryFilter,
  handleSearchClick,
}) => {
  return (
    <PfSearchWrap>
      <ul className="student-portfolio-search">
        <li>
          <label htmlFor="category-select">직종</label>
          <select
            value={selectCate}
            id="category-select"
            onChange={e => handleCategoryFilter(e)}
          >
            <option value="" selected>
              전체
            </option>
            {category?.map(item => (
              <option key={v4()} value={item.iclassification}>
                {item.classification}
              </option>
            ))}
          </select>
        </li>
        <li>
          <div className="subjectname-form">
            <label htmlFor="subject-state-save">과정명</label>
            <input
              type="text"
              id="subject-state-save"
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
            <label htmlFor="student-state-save">수강생 이름</label>
            <input
              type="text"
              id="student-state-save"
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

export default SaveItemSearch;