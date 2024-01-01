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
          <option name="category-state" value="선택">
            선택
          </option>
          <option name="category-state" value="카테고리1">
            카테고리1
          </option>
          <option name="category-state" value="카테고리2">
            카테고리2
          </option>
          <option name="category-state" value="카테고리3">
            카테고리3
          </option>
          <option name="category-state" value="카테고리4">
            카테고리4
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
          />
        </form>
      </li>
      <li>
        <button>검색</button>
      </li>
    </ul>
  );
};

export default ClassSearch;
