import React from "react";

const BulkSearch = ({
  category,
  handleCategoryFiiter,
  searchsubj,
  handleSubjectFilter,
  categoryData,
  subjData,
  handleSearch,
}) => {
  return (
    <ul className="delete-search">
      <li className="select-wrap">
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
      <li className="select-wrap">
        <span>과정명</span>
        <select
          name="subject-state"
          value={searchsubj}
          onChange={handleSubjectFilter}
        >
          <option name="subject-state" value="">
            과정명 선택
          </option>
          {subjData &&
            subjData.map(item => (
              <option key={item.icourseSubject} value={item.icourseSubject}>
                {item.round !== null && `(${item.round}기)`}
                {item.subjectName}
              </option>
            ))}
        </select>
      </li>
      <li>
        <button onClick={handleSearch}>조회</button>
      </li>
    </ul>
  );
};

export default BulkSearch;
