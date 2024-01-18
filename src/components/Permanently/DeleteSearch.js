import React from "react";

const DeleteSearch = ({
  category,
  handleCategoryFiiter,
  search,
  setSearch,
  handleSearch,
  categoryData,
}) => {
  return (
    <ul className="delete-search">
      <li>
        <span>직종</span>
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
        <span>과정명</span>
        <select name="" id="">
          <option value="">과정명 선택</option>
          <option value=""></option>
        </select>
      </li>
      <li>
        <div className="delete-form">
          <label htmlFor="student_name">수강생 이름</label>
          <input
            type="text"
            id="student_name"
            placeholder="수강생 이름을 검색하세요."
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
      <li className="search-btn">
        <button onClick={handleSearch}>조회</button>
      </li>
    </ul>
  );
};

export default DeleteSearch;
