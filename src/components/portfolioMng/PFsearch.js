import React from "react";
import { PfSearchWrap } from "../../styles/PortfolioStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";

const PFsearch = ({ search, category, setCategory }) => {
  const handleCategoryFilter = e => {
    console.log("e", e.target.value);
    setCategory(e.target.value);
    // setPage(1);
  };
  return (
    <PfSearchWrap>
      <ul className="student-portfolio-search">
        <li>
          <label htmlFor="category-select">직종</label>
          <select
            value={search}
            id="category-select"
            onChange={handleCategoryFilter}
          >
            <option value="" selected disabled hidden>
              전체
            </option>
            {category?.map(item => (
              <option key={item.iclassification} value={item.iclassification}>
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
              name="subject-state"
              id="subject-state"
              value={search}
              // onChange={e => setSearch(e.target.value)}
              // onKeyDown={e => {
              //   if (e.key === "Enter") {
              //     handleSearch();
              //   }
              // }}
            />
          </div>
        </li>
        <li>
          <div className="studentname-form">
            <label htmlFor="student-state">수강생 이름</label>
            <input
              type="text"
              name="student-state"
              id="student-state"
              value={search}
              // onChange={e => setSearch(e.target.value)}
              // onKeyDown={e => {
              //   if (e.key === "Enter") {
              //     handleSearch();
              //   }
              // }}
            />
          </div>
        </li>
        <li>
          <BtnGlobal
          // onClick={handleSearch}
          >
            검색
          </BtnGlobal>
        </li>
      </ul>
    </PfSearchWrap>
  );
};

export default PFsearch;
