import React from "react";

const ClassSearch = ({
  category,
  handleCategoryFiiter,
  search,
  setSearch,
  handleSearch,
}) => {
  return (
    <ul className="class-search">
      <li>
        <select
          value={category}
          name="category-state"
          onChange={handleCategoryFiiter}
        >
          <option name="category-state" value="">
            선택
          </option>
          <option name="category-state" value={1}>
            IT 분야
          </option>
          <option name="category-state" value={2}>
            건축기계 분야
          </option>
          <option name="category-state" value={3}>
            UI/UX 분야
          </option>
          <option name="category-state" value={4}>
            빅데이터 분야
          </option>
          <option name="category-state" value={5}>
            영상 분야
          </option>
          <option name="category-state" value={6}>
            편집디자인 분야
          </option>
        </select>
      </li>
      <li>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="훈련과정 명을 검색하세요."
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
  );
};

export default ClassSearch;
