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
  EnrollCategoryModal,
} from "../components/classMgmt/ClassModal";
import {
  deleteCategory,
  getCategory,
  getClassSubject,
  postCategory,
  postClassSubject,
} from "../api/classAxios";
import { AcceptModal } from "../components/AcceptModals";
import OkModal from "../components/OkModal";
import ErrorModal from "../components/ErrorModal";

const ClassMgmt = () => {
  const [listData, setListData] = useState([]);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(0);
  const [categoryValue, setCategoryValue] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [deleteOkModalOpen, setDeleteOkModalOpen] = useState(false);
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

  // 예외처리하기
  const [cateError, setCateError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [teacherError, setTeacherError] = useState("");
  const [roundError, setRoundError] = useState("");
  const [classTimeError, setClassTimeError] = useState("");
  const [classroomError, setClassroomError] = useState("");

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  const [checkModalOpen, setCheckModalOpen] = useState(false);
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
    getClassSubject(
      setListData,
      setCount,
      page,
      search,
      category,
      setErrorApiInfo,
    );
  };

  useEffect(() => {
    fetchData();
    getCategory(setCategoryData, setErrorApiInfo);
  }, [page]);

  useEffect(() => {
    document.querySelector(".all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".class-checkbox")
      .forEach(item => (item.checked = false));
    setSaveCheckBox([]);

    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [listData, errorApiInfo]);

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
      setCheckModalOpen(true);
    }
    document.body.style.overflow = "hidden";
  };

  // 카테고리 추가
  const handlePostCategory = async () => {
    const postData = { classification: categoryValue };
    try {
      const result = await postCategory(postData, setErrorApiInfo);
      setUpLoadResult(result);
      setCategoryValue("");
      setIsAdd(false);
      await getCategory(setCategoryData, setErrorApiInfo);
    } catch (error) {
      // setAcceptOkModal(true);
      setCategoryValue("");
    }
  };

  // 카테고리 삭제
  const handleDeleteCategory = async data => {
    await deleteCategory(data, setErrorApiInfo);
    await getCategory(setCategoryData, setErrorApiInfo);
  };

  const handleEnrollModalOpen = () => {
    setEnrollModalOpen(true);
  };

  // 과정추가
  const handleModalAccept = async () => {
    const { classification, ...newPayload } = payload;
    // const formatData = {
    //   ...newPayload,
    //   startedAt: payload.startedAt
    //     ? format(payload.startedAt, "yyyy-MM-dd")
    //     : null,
    //   endedAt: payload.endedAt ? format(payload.endedAt, "yyyy-MM-dd") : null,
    // };
    try {
      setCateError(
        !payload.iclassification ? "카테고리를 선택 해 주세요." : "",
      );
      setSubjectError(
        !payload.courseSubjectName ? "과정명을 선택 해 주세요." : "",
      );
      setStartDateError(!payload.startedAt ? "시작날짜를 선택 해 주세요." : "");
      setEndDateError(!payload.endedAt ? "종료날짜를 선택 해 주세요." : "");
      setRoundError(!payload.round ? "과정 회차를 입력 해 주세요." : "");
      setClassTimeError(
        !payload.classTime ? "수업 시간을 입력 해 주세요." : "",
      );
      setTeacherError(!payload.instructor ? "강사명을 입력 해 주세요." : "");
      setClassroomError(!payload.lectureRoom ? "강의실을 입력 해 주세요." : "");

      const isError =
        !payload.iclassification ||
        !payload.courseSubjectName ||
        !payload.startedAt ||
        !payload.endedAt ||
        !payload.round ||
        !payload.classTime ||
        !payload.instructor ||
        !payload.lectureRoom;

      if (!isError) {
        const result = await postClassSubject(payload, setErrorApiInfo);
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
          fetchData();
        }
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
        {enrollModalOpen && (
          <EnrollCategoryModal
            categoryData={categoryData}
            enrollModalOpen={enrollModalOpen}
            setEnrollModalOpen={setEnrollModalOpen}
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
            handleDeleteCategory={handleDeleteCategory}
            handlePostCategory={handlePostCategory}
            deleteOkModalOpen={deleteOkModalOpen}
            setDeleteOkModalOpen={setDeleteOkModalOpen}
            isAdd={isAdd}
            setIsAdd={setIsAdd}
          />
        )}
        {acceptOkModal && (
          <AcceptModal
            acceptOkModal={acceptOkModal}
            setAcceptOkModal={setAcceptOkModal}
            uploadResult={uploadResult}
            setEnrollModalOpen={setEnrollModalOpen}
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
            cateError={cateError}
            subjectError={subjectError}
            startDateError={startDateError}
            endDateError={endDateError}
            teacherError={teacherError}
            roundError={roundError}
            classTimeError={classTimeError}
            classroomError={classroomError}
          />
        )}
        {deleteModalOpen && (
          <DeleteClassModal
            deleteModalOpen={deleteModalOpen}
            setDeleteModalOpen={setDeleteModalOpen}
            saveCheckBox={saveCheckBox}
            setSaveCheckBox={setSaveCheckBox}
            setListData={setListData}
            fetchData={fetchData}
            setErrorApiInfo={setErrorApiInfo}
          />
        )}
        <div className="class-buttons">
          <button onClick={handleEnrollModalOpen}>대분류 설정</button>
          <button onClick={handleDeleteModalOpen}>삭제</button>
          <button onClick={handleModalOpen}>과정등록</button>
        </div>
        <div className="total-count">
          <span>[총 {count}개]</span>
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
            fetchData={fetchData}
            setErrorApiInfo={setErrorApiInfo}
          />
        </ClassTable>
        <ClassPaging page={page} setPage={setPage} count={count} />
      </ClassMgmtInner>
      {checkModalOpen && (
        <OkModal
          header={""}
          open={checkModalOpen}
          close={() => {
            setCheckModalOpen(false);
          }}
          onConfirm={() => {
            setCheckModalOpen(false);
          }}
        >
          <span>삭제하실 과정을 선택해주세요.</span>
        </OkModal>
      )}

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
    </ClassMgmtWrap>
  );
};

export default ClassMgmt;
