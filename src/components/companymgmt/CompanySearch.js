import React from "react";

const CompanySearch = ({
  search,
  setSearch,
  handleSearch,
}) => {
  return (
    <ul className="company-search">
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
