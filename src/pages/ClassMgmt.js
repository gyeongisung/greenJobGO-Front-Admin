import React, { useEffect, useState } from "react";
import {
  ClassMgmtInner,
  ClassMgmtWrap,
  ClassTable,
} from "../styles/ClassMgmtStyle";
import ClassPaging from "../components/classMgmt/ClassPaging";
import ClassSearch from "../components/classMgmt/ClassSearch";
import ClassList from "../components/classMgmt/ClassList";
import {
  ClassAcceptModal,
  DeleteClassModal,
} from "../components/classMgmt/ClassModal";
import {
  getCategory,
  getClassSubject,
  postClassSubject,
} from "../api/classAxios";
import { format } from "date-fns";
import { AcceptModal } from "../components/AcceptModals";

const ClassMgmt = () => {
  const [listData, setListData] = useState([]);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
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
    console.log(saveCheckBox);
  };

  const fetchData = () => {
    getClassSubject(setListData, setCount, page, search, category);
  };

  useEffect(() => {
    fetchData();
    getCategory(setCategoryData);
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

  const handleDeleteModalOpen = () => {
    if (saveCheckBox.length >= 1) {
      setDeleteModalOpen(true);
    } else {
      alert("삭제하실 과정을 선택해주세요.");
    }
    document.body.style.overflow = "hidden";
  };

  const handleModalAccept = async () => {
    const { classification, ...newPayload } = payload;
    const formatData = {
      ...newPayload,
      startedAt: payload.startedAt
        ? format(payload.startedAt, "yyyy-MM-dd")
        : null,
      endedAt: payload.endedAt ? format(payload.endedAt, "yyyy-MM-dd") : null,
    };
    try {
      const result = await postClassSubject(formatData);

      setUpLoadResult(result);

      setModalOpen(false);
      if (result.success) {
        setAcceptOkModal(true);
        setPayload({
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
        console.log(modalOpen);
        console.log(acceptOkModal);
      }
    } catch (error) {
      setAcceptOkModal(true);
      setPayload({
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
    }
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
          categoryData={categoryData}
        />
        {acceptOkModal && (
          <AcceptModal
            acceptOkModal={acceptOkModal}
            setAcceptOkModal={setAcceptOkModal}
            uploadResult={uploadResult}
            fetchData={fetchData}
          />
        )}
        {modalOpen && (
          <ClassAcceptModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            payload={payload}
            setPayload={setPayload}
            handleModalAccept={handleModalAccept}
            categoryData={categoryData}
          />
        )}
        {deleteModalOpen && (
          <DeleteClassModal
            deleteModalOpen={deleteModalOpen}
            setDeleteModalOpen={setDeleteModalOpen}
            saveCheckBox={saveCheckBox}
            setSaveCheckBox={setSaveCheckBox}
            setListData={setListData}
          />
        )}
        <div className="class-buttons">
          <button onClick={handleModalOpen}>과정등록</button>
          <button onClick={handleDeleteModalOpen}>삭제</button>
        </div>
        <div className="total-count">
          <span>총 {count}개</span>
        </div>
        <ClassTable>
          <ClassList
            listData={listData}
            handleAllCheck={handleAllCheck}
            handleCheckBox={handleCheckBox}
            page={page}
            acceptOkModal={acceptOkModal}
            setAcceptOkModal={setAcceptOkModal}
            uploadResult={uploadResult}
            setUpLoadResult={setUpLoadResult}
            categoryData={categoryData}
          />
        </ClassTable>
        <ClassPaging page={page} setPage={setPage} count={count} />
      </ClassMgmtInner>
    </ClassMgmtWrap>
  );
};

export default ClassMgmt;
