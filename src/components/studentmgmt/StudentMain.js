import React, { useEffect, useState } from "react";
import StudentSearch from "../studentmgmt/StudentSearch";
import StudentList from "../studentmgmt/StudentList";
import StudentPaging from "../studentmgmt/StudentPaging";
import {
  StudentMgmtInner,
  StudentMgmtWrap,
  StudentTable,
} from "../../styles/StudentMgmtStyle";
import {
  DeleteStudnetModal,
  StudentExcelUploadModal,
  StudentModal,
} from "../studentmgmt/StudentModal";
import {
  getStudenListDownload,
  getStudentList,
  postExcelSign,
} from "../../api/studentAxios";
import { getCategory } from "../../api/classAxios";
import { AcceptModal, ExcelAcceptModal } from "../AcceptModals";
import { ExcelUploadModal } from "../companymgmt/CompanyModal";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  RecoilEnv,
} from "recoil";
import { useNavigate } from "react-router";
import { recoilPersist } from "recoil-persist";
import { v4 } from "uuid";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const { persistAtom } = recoilPersist();

export const StudentPageAtom = atom({
  // key: `StudentPageAtom`,
  key: `StudentPageAtom/${v4()}`,
  default: {
    page: 1,
    count: 0,
    search: "",
    category: "",
    render: true,
  },
  effects_UNSTABLE: [persistAtom],
});

const StudentMain = ({ handleInfoClick }) => {
  const navigate = useNavigate();

  const [listData, setListData] = useState([]);
  // const [saveCheckBox, setSaveCheckBox] = useState([]);
  // const [page, setPage] = useState(1);
  // const [count, setCount] = useState(0);
  // const [search, setSearch] = useState("");
  // const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [excelModalOpen, setExcelModalOpen] = useState(false);
  const [excelOkModal, setExcelOkModal] = useState(false);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [uploadResult, setUpLoadResult] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [excelDownload, setExcelDownload] = useState(null);

  const [cateValue, setCateValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [pageState, setPageState] = useRecoilState(StudentPageAtom);
  const { page, count, search, category, render } = pageState;

  console.log("pageState", pageState);
  // let resultIdArray = saveCheckBox;

  // 체크박스 전체 선택
  // const handleAllCheck = e => {
  //   const allCheckBox = document.querySelectorAll(".student-checkbox");
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

  // 체크박스 개별 선택
  // const handleCheckBox = e => {
  //   const clickList = e.currentTarget;
  //   const companyCode = parseInt(clickList.classList[1].slice(6));
  //   if (e.target.checked === true) {
  //     resultIdArray.push(companyCode);
  //   } else {
  //     resultIdArray = resultIdArray.filter(item => item !== companyCode);
  //   }
  //   setSaveCheckBox(resultIdArray);
  //   console.log(saveCheckBox);
  // };

  // GET API
  const fetchData = () => {
    // getStudentList(setListData, setCount, page, search, category);
    getStudentList(setListData, setPageState, page, search, category);
  };

  useEffect(() => {
    fetchData();
    // getCategory(setCategoryData);
  }, [page, render]);

  // useEffect(() => {
  //   document.querySelector(".all-checkbox-btn").checked = false;
  //   document
  //     .querySelectorAll(".student-checkbox")
  //     .forEach(item => (item.checked = false));
  //   setSaveCheckBox([]);
  // }, [listData]);

  // 검색 버튼
  const handleSearch = async () => {
    setPageState(prev => ({
      ...prev,
      page: 1,
      category,
      search,
      render: false,
    }));

    // setPage(1);
    await fetchData();
  };

  // 대분류 선택
  const handleCategoryFiiter = e => {
    // setCategory(e.target.value);
    // setCateValue(e.target.value);
    // setSearchValue("");
    setPageState(prev => ({
      ...prev,
      // page: 1,
      category: e.target.value,
      search: "",
    }));
  };

  // 엑셀 업로드 버튼
  const handleExcelModalOpen = () => {
    setExcelModalOpen(true);
  };

  // 엑셀 업로드 POST API
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
        fetchData();
      } catch (error) {
        console.error("파일 업로드에 실패했습니다.", error);
      }
    }
  };

  // 엑셀 다운로드 버튼
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
          // cateValue={cateValue}
          // setSearchValue={setSearchValue}
          handleCategoryFiiter={handleCategoryFiiter}
          search={search}
          // setSearch={setSearch}
          handleSearch={handleSearch}
          // categoryData={categoryData}
          // setCategoryData={setCategoryData}
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
          <StudentExcelUploadModal
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
        {/* {deleteModalOpen && (
          <DeleteStudnetModal
            deleteModalOpen={deleteModalOpen}
            setDeleteModalOpen={setDeleteModalOpen}
            saveCheckBox={saveCheckBox}
            setSaveCheckBox={setSaveCheckBox}
            setListData={setListData}
            fetchData={fetchData}
          />
        )} */}
        <div className="student-buttons">
          <button onClick={handleExcelDownLoad}>엑셀 다운로드</button>
          <button onClick={handleExcelModalOpen}>엑셀 업로드</button>
        </div>
        <div className="total-count">
          <span>[총 {count}개]</span>
        </div>
        <StudentTable>
          <StudentList
            listData={listData}
            // handleAllCheck={handleAllCheck}
            // handleCheckBox={handleCheckBox}
            page={page}
            // handleInfoClick={handleInfoClick}
          />
        </StudentTable>
        <StudentPaging
          page={page}
          // setPage={setPage}
          count={count}
          pgge={page}
        />
      </StudentMgmtInner>
    </StudentMgmtWrap>
  );
};

export default StudentMain;
