import React from "react";

const CompanySearch = ({
  category,
  handleCategoryFiiter,
  search,
  setSearch,
  handleSearch,
}) => {
  return (
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
        <div className="company-form">
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
        </div>
      </li>
      <li>
        <button onClick={handleSearch}>검색</button>
      </li>
    </ul>
  );
};

export default CompanySearch;
