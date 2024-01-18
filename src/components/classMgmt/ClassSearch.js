import React from "react";

const ClassSearch = ({
  category,
  handleCategoryFiiter,
  search,
  setSearch,
  handleSearch,
  categoryData,
}) => {
  return (
    <ul className="class-search">
      <li className="select-wrap">
        <select
          value={category}
          name="category-state"
          onChange={handleCategoryFiiter}
        >
          <option name="category-state" value="">
            선택
          </option>
          {categoryData &&
            categoryData.map(item => (
              <option
                key={item.iclassification}
                name="category-state"
                value={item.iclassification}
              >
                {item.classification}
              </option>
            ))}
        </select>
      </li>
      <li>
        <div className="class-form">
          <input
            type="text"
            placeholder="훈련 과정명을 검색하세요."
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

export default ClassSearch;
