import React, { useEffect, useState } from "react";
import {
  DeleteTable,
  PermanentlyInner,
  PermanentlyWrap,
} from "../styles/PermanentlyStyle";
import DeletePaging from "../components/Permanently/DeletePaging";
import DeleteList from "../components/Permanently/DeleteList";
import DeleteSearch from "../components/Permanently/DeleteSearch";
import { getStudentList } from "../api/permanentlyAxios";
import { getBigcate } from "../api/portfolioAxios";

const PermanentlyDelete = () => {
  const [listData, setListData] = useState([]);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  // const [categoryData, setCategoryData] = useState([]);
  const [selectCate, setSelectCate] = useState("");

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  // const [category, setCategory] = useState(0);
  const [searchsubj, setSearchsubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadResult, setUpLoadResult] = useState(false);
  const [payload, setPayload] = useState({
    courseSubjectName: "",
    iclassification: 0,
    classification: "",
    startedAt: "",
    endedAt: "",
    instructor: "",
    lectureRoom: "",
    round: "",
    classTime: "",
  });

  // 수강생 검색
  const handleSearch = () => {
    setPage(1);
    fetchData();
  };
  let resultIdArray = saveCheckBox;

  // const handleAllCheck = e => {
  //   const allCheckBox = document.querySelectorAll(".class-checkbox");
  //   resultIdArray = [];
  //   if (e.target.checked === true) {
  //     allCheckBox.forEach(item => {
  //       item.checked = true;
  //       resultIdArray.push(parseInt(item.classList[1].slice(6)));
  //     });
  //   } else {
  //     allCheckBox.forEach(item => {
  //       item.checked = false;
  //     });
  //     resultIdArray = [];
  //   }
  //   setSaveCheckBox(resultIdArray);
  // };

  // const handleCheckBox = e => {
  //   const clickList = e.currentTarget;
  //   const icourseSubject = parseInt(clickList.classList[1].slice(6));
  //   if (e.target.checked === true) {
  //     resultIdArray.push(icourseSubject);
  //   } else {
  //     resultIdArray = resultIdArray.filter(item => item !== icourseSubject);
  //   }
  //   setSaveCheckBox(resultIdArray);
  //   console.log(saveCheckBox);
  // };

  const fetchData = () => {
    getStudentList(setListData, setCount, page, selectCate, searchname);
  };

  // useEffect(() => {
  //   fetchData();
  //   getBigcate(setCategoryData);
  // }, [page]);

  useEffect(() => {
    // document.querySelector(".all-checkbox-btn").checked = false;
    // document
    //   .querySelectorAll(".class-checkbox")
    //   .forEach(item => (item.checked = false));
    // setSaveCheckBox([]);
  }, [listData]);

  // // 카테고리 변경
  // const handleCategoryFiiter = e => {
  //   setCategory(e.target.value);
  //   setPage(1);
  // };

  return (
    <PermanentlyWrap>
      <div className="delete-title">
        <h3>영구 삭제</h3>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/bxs_error.png`}
            alt="경고"
          />
          <span>
            영구 삭제 시 보관함에 저장된 포트폴리오도 함께 삭제 됩니다.
          </span>
        </div>
      </div>
      <PermanentlyInner>
        <DeleteSearch
          // category={category}
          // handleCategoryFiiter={handleCategoryFiiter}
          // handleSearch={handleSearch}
          // categoryData={categoryData}
          searchname={searchname}
          setSearchname={setSearchname}
          searchsubj={searchsubj}
          setSearchsubj={setSearchsubj}
          fetchData={fetchData}
          page={page}
          setPage={setPage}
          setSelectCate={setSelectCate}
          selectCate={selectCate}
        />
        <div className="delete-buttons">
          <button>삭제</button>
        </div>
        <div className="total-count">
          <span>총 {count}개</span>
        </div>
        <DeleteTable>
          {/* <DeleteList
            listData={listData}
            handleAllCheck={handleAllCheck}
            handleCheckBox={handleCheckBox}
            page={page}
            uploadResult={uploadResult}
            setUpLoadResult={setUpLoadResult}
            selectCate={selectCate}
          /> */}
        </DeleteTable>
        <DeletePaging page={page} setPage={setPage} count={count} />
      </PermanentlyInner>
    </PermanentlyWrap>
  );
};

export default PermanentlyDelete;
