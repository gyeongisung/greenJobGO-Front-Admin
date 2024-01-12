import React, { useEffect, useState } from "react";
import StudentSearch from "../studentmgmt/StudentSearch";
import StudentList from "../studentmgmt/StudentList";
import StudentPaging from "../studentmgmt/StudentPaging";
import {
  StudentMgmtInner,
  StudentMgmtWrap,
  StudentTable,
} from "../../styles/StudentMgmtStyle";
import { DeleteStudnetModal, StudentModal } from "../studentmgmt/StudentModal";
import {
  getStudenListDownload,
  getStudentList,
  postExcelSign,
} from "../../api/studentAxios";
import { getCategory } from "../../api/classAxios";
import { AcceptModal, ExcelAcceptModal } from "../AcceptModals";
import { ExcelUploadModal } from "../companymgmt/CompanyModal";

const StudentMain = ({ handleInfoClick }) => {
  const [listData, setListData] = useState([]);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [excelModalOpen, setExcelModalOpen] = useState(false);
  const [excelOkModal, setExcelOkModal] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [uploadResult, setUpLoadResult] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [excelDownload, setExcelDownload] = useState(null);

  let resultIdArray = saveCheckBox;

  const handleAllCheck = e => {
    const allCheckBox = document.querySelectorAll(".company-checkbox");
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
    const companyCode = parseInt(clickList.classList[1].slice(6));
    if (e.target.checked === true) {
      resultIdArray.push(companyCode);
    } else {
      resultIdArray = resultIdArray.filter(item => item !== companyCode);
    }
    setSaveCheckBox(resultIdArray);
    console.log(saveCheckBox);
  };

  const fetchData = () => {
    getStudentList(setListData, setCount, page, search, category);
  };

  useEffect(() => {
    fetchData();
    getCategory(setCategoryData);
  }, [page]);

  useEffect(() => {
    document.querySelector(".all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".student-checkbox")
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
    console.log(category);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleDeleteClick = () => {
    if (saveCheckBox.length >= 1) {
      setDeleteModalOpen(true);
    } else {
      console.log("삭제할 훈련생을 선택해주세요.");
    }
  };

  const handleExcelModalOpen = () => {
    setExcelModalOpen(true);
  };

  const handleExcelUpload = async () => {
    if (selectedFile) {
      let formData = new FormData();
      formData.append("studentfile", selectedFile);

      try {
        const result = await postExcelSign(formData);

        setUpLoadResult(result);

        if (result.success) {
          setExcelModalOpen(false);
          setExcelOkModal(true);
          setSelectedFile(null);
        }
      } catch (error) {
        console.error("파일 업로드에 실패했습니다.", error);
      }
    }
  };

  const handleExcelDownLoad = async () => {
    getStudenListDownload(setExcelDownload);
  };

  return (
    <StudentMgmtWrap>
      <div className="student-title">
        <h3>수강생 등록 · 관리</h3>
      </div>
      <StudentMgmtInner>
        <StudentSearch
          category={category}
          handleCategoryFiiter={handleCategoryFiiter}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          categoryData={categoryData}
        />
        {modalOpen && (
          <StudentModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
        {acceptOkModal && (
          <AcceptModal
            acceptOkModal={acceptOkModal}
            setAcceptOkModal={setAcceptOkModal}
            uploadResult={uploadResult}
          />
        )}
        {excelModalOpen && (
          <ExcelUploadModal
            excelModalOpen={excelModalOpen}
            setExcelModalOpen={setExcelModalOpen}
            handleExcelUpload={handleExcelUpload}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            excelOkModal={excelOkModal}
            setExcelOkModal={setExcelOkModal}
          />
        )}
        {excelOkModal && (
          <ExcelAcceptModal
            excelOkModal={excelOkModal}
            setExcelOkModal={setExcelOkModal}
            uploadResult={uploadResult}
          />
        )}
        {deleteModalOpen && (
          <DeleteStudnetModal
            deleteModalOpen={deleteModalOpen}
            setDeleteModalOpen={setDeleteModalOpen}
            saveCheckBox={saveCheckBox}
            setSaveCheckBox={setSaveCheckBox}
            setListData={setListData}
          />
        )}
        <div className="student-buttons">
          <button onClick={handleExcelModalOpen}>엑셀 업로드</button>
          <button onClick={handleExcelDownLoad}>엑셀 다운로드</button>
          <button onClick={handleDeleteClick}>삭제</button>
        </div>
        <div className="total-count">
          <span>총 {count}개</span>
        </div>
        <StudentTable>
          <StudentList
            listData={listData}
            handleAllCheck={handleAllCheck}
            handleCheckBox={handleCheckBox}
            page={page}
            handleInfoClick={handleInfoClick}
          />
        </StudentTable>
        <StudentPaging
          page={page}
          setPage={setPage}
          count={count}
          pgge={page}
        />
      </StudentMgmtInner>
    </StudentMgmtWrap>
  );
};

export default StudentMain;
