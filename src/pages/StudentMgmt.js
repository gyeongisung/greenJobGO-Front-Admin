import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { atom, RecoilEnv, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import StudentSearch from "../components/studentmgmt/StudentSearch";
import StudentList from "../components/studentmgmt/StudentList";
import StudentPaging from "../components/studentmgmt/StudentPaging";
import {
  getStudenListDownload,
  getStudentList,
  postExcelSign,
} from "../api/studentAxios";
import {
  StudentMgmtInner,
  StudentMgmtWrap,
  StudentTable,
} from "../styles/StudentMgmtStyle";
import {
  DeleteStudnetModal,
  StudentExcelUploadModal,
  StudentModal,
} from "../components/studentmgmt/StudentModal";
import { AcceptModal, ExcelAcceptModal } from "../components/AcceptModals";
import NoListItem from "../components/NoListItem";
import ErrorModal from "../components/ErrorModal";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const { persistAtom } = recoilPersist();

export const StudentPageAtom = atom({
  // key: `StudentPageAtom`,
  key: `StudentPageAtom`,
  default: {
    page: 1,
    count: 0,
    search: "",
    category: "",
  },
  effects_UNSTABLE: [persistAtom],
});
const StudentMgmt = () => {
  const navigate = useNavigate();

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  const [nothing, setNothing] = useState(false);
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
  const [isLoading, setIsLoading] = useState(false);
  const [cateValue, setCateValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [pageState, setPageState] = useRecoilState(StudentPageAtom);
  const { page, count, search, category, render } = pageState;

  // GET API
  const fetchData = () => {
    // getStudentList(setListData, setCount, page, search, category);
    getStudentList(
      setListData,
      setPageState,
      page,
      search,
      category,
      setNothing,
      setErrorApiInfo,
    );
  };

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
    setIsLoading(true);
    if (selectedFile) {
      let formData = new FormData();
      formData.append("studentfile", selectedFile);

      try {
        const result = await postExcelSign(formData, setErrorApiInfo);

        setIsLoading(false);

        setUpLoadResult(result);

        if (result.success) {
          setExcelModalOpen(false);
          // setExcelOkModal(true);
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
    getStudenListDownload(setExcelDownload, setErrorApiInfo);
  };

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

  useEffect(() => {
    fetchData();
    // getCategory(setCategoryData);
  }, [page, count]);

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
            isLoading={isLoading}
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
          <span>총 {count}명</span>
        </div>
        <StudentTable>
          {nothing && <NoListItem />}
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
    </StudentMgmtWrap>
  );
};

export default StudentMgmt;
