import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { StudentPageAtom } from "../../pages/StudentMgmt";
import { getCategory } from "../../api/classAxios";
import ErrorModal from "../ErrorModal";

const StudentSearch = ({
  handleCategoryFiiter,
  search,
  handleSearch,
  cateValue,
}) => {
  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");
  const [pageState, setPageState] = useRecoilState(StudentPageAtom);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategory(setCategoryData, setErrorApiInfo);
  }, []);

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);
  return (
    <ul className="student-search">
      <li className="select-wrap">
        <select
          value={cateValue}
          name="category-state"
          onChange={e => handleCategoryFiiter(e)}
        >
          <option name="category-state" value="">
            선택
          </option>
          {categoryData.map(item => (
            <option
              key={`cate${item.iclassification}`}
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
        <button onClick={handleSearch} className="searchbtn">
          검색
        </button>
      </li>
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <ErrorModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
        >
          <span>{errorApiInfo}</span>
        </ErrorModal>
      )}
    </ul>
  );
};

export default StudentSearch;
