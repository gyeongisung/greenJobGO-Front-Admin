import React, { useEffect, useState } from "react";
import { getStudentSubject } from "../../api/homeAxios";
import { v4 } from "uuid";
import { getBigcate } from "../../api/portfolioAxios";
import { getSubjectInfo } from "../../api/permanentlyAxios";
import OkModal from "../OkModal";

const DeleteSearch = ({
  handleSearch,
  searchname,
  setSearchname,
  searchsubj,
  setSearchsubj,
  setSelectCate,
  selectCate,
  setErrorInfo,
}) => {
  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  const [category, setCategory] = useState([]);
  const [subjectList, setSubjectList] = useState([]);

  // 카테변경값 저장
  const handleCategoryFilter = e => {
    console.log("필터변경e", e.target.value);
    setSelectCate(e.target.value);
    setSearchsubj("");
    setSearchname("");
  };
  // 과목변경값 저장
  const handleSubjectFilter = e => {
    console.log("과목선택e", e.target.value);
    setSearchsubj(e.target.value);
  };

  useEffect(() => {
    getBigcate(setCategory, setErrorApiInfo);
  }, []);
  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

  useEffect(() => {
    getSubjectInfo({ selectCate, setSubjectList, setErrorInfo });
  }, [selectCate]);
  return (
    <ul className="delete-search">
      <li>
        <span>직종</span>
        <select
          value={selectCate}
          id="category-state"
          onChange={e => handleCategoryFilter(e)}
        >
          <option name="category-state" value="" defaultValue>
            선택
          </option>
          {category?.map(item => (
            <option key={v4()} value={item.iclassification}>
              {item.classification}
            </option>
          ))}
        </select>
      </li>
      <li>
        <span>과정명</span>
        <select
          value={searchsubj}
          id="subject-select-student"
          onChange={e => handleSubjectFilter(e)}
        >
          <option value="" defaultValue>
            과정명 선택
          </option>
          {subjectList?.map(item => (
            <option key={v4()} value={item.subjectName}>
              {item.round !== null && `(${item.round}기)`}
              {item.subjectName}
            </option>
          ))}
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
            value={searchname}
            onChange={e => setSearchname(e.target.value)}
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
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <OkModal
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
        </OkModal>
      )}
    </ul>
  );
};

export default DeleteSearch;
