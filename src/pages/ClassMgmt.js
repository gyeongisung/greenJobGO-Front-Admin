import React, { useEffect, useState } from "react";
import {
  ClassMgmtInner,
  ClassMgmtWrap,
  ClassTable,
} from "../styles/ClassMgmtStyle";
import ClassPaging from "../components/classMgmt/ClassPaging";
import ClassSearch from "../components/classMgmt/ClassSearch";
import ClassList from "../components/classMgmt/ClassList";
import { ClassAcceptModal } from "../components/classMgmt/ClassModal";
import { getClassSubject } from "../api/classAxios";

const ClassMgmt = () => {
  const [listData, setListData] = useState([]);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [accept, setAccept] = useState(false);

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
    const icourseSubject = parseInt(clickList.classList[1].slice(6));
    if (e.target.checked === true) {
      resultIdArray.push(icourseSubject);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== icourseSubject);
    }
    setSaveCheckBox(resultIdArray);
  };

  const fetchData = () => {
    getClassSubject(setListData, setCount, page, search, category);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    document.querySelector(".all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".class-checkbox")
      .forEach(item => (item.checked = false));
    setSaveCheckBox([]);
  }, [listData]);

  const handleSearch = () => {
    setPage(1);
    fetchData();
  };

  const handleCategoryFiiter = e => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <ClassMgmtWrap>
      <div className="class-title">
        <h3>과정 등록 · 관리</h3>
      </div>
      <ClassMgmtInner>
        <ClassSearch
          category={category}
          handleCategoryFiiter={handleCategoryFiiter}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <div className="class-buttons">
          {modalOpen && (
            <ClassAcceptModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setAccept={setAccept}
            />
          )}
          <button onClick={() => handleModalOpen()}>과정등록</button>
          <button>수정</button>
          <button>삭제</button>
        </div>

        <ClassTable>
          <ClassList
            listData={listData}
            handleAllCheck={handleAllCheck}
            handleCheckBox={handleCheckBox}
            page={page}
          />
        </ClassTable>
        <ClassPaging page={page} setPage={setPage} count={count} />
      </ClassMgmtInner>
    </ClassMgmtWrap>
  );
};

export default ClassMgmt;
