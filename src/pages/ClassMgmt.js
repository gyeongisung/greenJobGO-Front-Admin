import React, { useEffect, useState } from "react";
import {
  ClassMgmtInner,
  ClassMgmtWrap,
  ClassTable,
} from "../styles/ClassMgmtStyle";
import { useNavigate } from "react-router";
import Pagination from "../components/Paging";

const ClassMgmt = () => {
  const [listData, setListData] = useState([]);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  let resultIdArray = saveCheckBox;

  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".class-checkbox");
    resultIdArray = [];
    if (e.target.checked === true) {
      allCheckBox.forEach(item => {
        item.checked = true;
        resultIdArray.push(parseInt(item.classList[1].slice(6)));
      });
    } else {
      allCheckBox.forEach(item => {
        item.checked = false;
      });
      resultIdArray = [];
    }
    setSaveCheckBox(resultIdArray);
  };

  const handleCheckBox = e => {
    const clickList = e.currentTarget;
    const userId = parseInt(clickList.classList[1].slice(6));
    if (e.target.checked === true) {
      resultIdArray.push(userId);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== userId);
    }
    setSaveCheckBox(resultIdArray);
  };

  useEffect(() => {
    document.querySelector(".all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".class-checkbox")
      .forEach(item => (item.checked = false));
    setSaveCheckBox([]);
  }, [listData]);

  const handleCategoryFiiter = e => {
    setCategory(e.target.value);
    setPage(1);
  };

  return (
    <ClassMgmtWrap>
      <div className="class-title">
        <h3>과정 등록 · 관리</h3>
      </div>
      <ClassMgmtInner>
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
        <div className="class-buttons">
          <button>과정등록</button>
          <button>수정</button>
          <button>삭제</button>
        </div>
        <ClassTable>
          <ul>
            <li className="class-list">
              <ul>
                <li className="class-table-th">
                  <input
                    type="checkbox"
                    name="all-check-box"
                    onChange={e => handleAllCheck(e)}
                    className="all-checkbox-btn"
                  />
                </li>
                <li className="class-table-th">순번</li>
                <li className="class-table-th">과정명</li>
                <li className="class-table-th">수강기간</li>
                <li className="class-table-th">강사명</li>
                <li className="class-table-th">강의실</li>
              </ul>
            </li>
            {listData.length > 0 &&
              listData.map((item, index) => (
                <li key={index}>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        name="check-box"
                        defaultChecked={false}
                        className={`class-checkbox userId${item.userId}`}
                        onChange={e => handleCheckBox(e)}
                      />
                    </li>
                    <li>{(page - 1) * 16 + index + 1}</li>
                    <li>{item.nm}</li>
                    <li>{item.birth}</li>
                    <li>{item.phone}</li>
                    <li>{item.email}</li>
                  </ul>
                </li>
              ))}
          </ul>
        </ClassTable>
        <Pagination page={page} setPage={setPage} count={count} />
      </ClassMgmtInner>
    </ClassMgmtWrap>
  );
};

export default ClassMgmt;
