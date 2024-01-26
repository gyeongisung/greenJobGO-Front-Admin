import React from "react";
import { useRecoilState } from "recoil";
import { v4 } from "uuid";
import { StudentPageAtom } from "./StudentMain";

const StudentSearch = ({
  category,
  handleCategoryFiiter,
  search,
  setSearch,
  handleSearch,
  categoryData,
}) => {
  const [pageState, setPageState] = useRecoilState(StudentPageAtom);

  return (
    <ul className="student-search">
      <li className="select-wrap">
        <select
          value={category}
          name="category-state"
          onChange={handleCategoryFiiter}
        >
          <option name="category-state" value="">
            선택
          </option>
          {categoryData.map(item => (
            <option
              key={v4()}
              name="category-state"
              value={item.iclassification}
            >
              {item.classification}
            </option>
          ))}
        </select>
      </li>
      <li>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="훈련 과정명을 검색하세요."
            name="category-state"
            value={search}
            onChange={e => 
              // setSearch(e.target.value)
              setPageState(prev => ({ ...prev, search: e.target.value }))
            }
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

export default StudentSearch;
