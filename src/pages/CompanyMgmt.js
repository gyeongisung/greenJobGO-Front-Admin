import React, { useEffect, useState } from "react";
import {
  CompanyMgmtInner,
  CompanyMgmtWrap,
  CompanyTable,
} from "../styles/CompanyMgmtStyle";
import {
  getCompanyList,
  getCompanyListDownload,
  postCompanyAccept,
  postCompanyExcel,
} from "../api/companyAxios";
import CompanyList from "../components/companymgmt/CompanyList";
import CompanySearch from "../components/companymgmt/CompanySearch";
import Paging from "../components/companymgmt/CompanyPaging";
import {
  DeleteCompanyModal,
  CompanyMgmtModal,
  ExcelUploadModal,
} from "../components/companymgmt/CompanyModal";
import { AcceptModal, ExcelAcceptModal } from "../components/AcceptModals";
import ErrorModal from "../components/ErrorModal";
import NoListItem from "../components/NoListItem";

const CompanyMgmt = () => {
  const [nothing, setNothing] = useState(false);

  const [listData, setListData] = useState([]);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [excelModalOpen, setExcelModalOpen] = useState(false);
  const [excelOkModal, setExcelOkModal] = useState(false);
  const [excelDownload, setExcelDownload] = useState(null);
  const [acceptOkModal, setAcceptOkModal] = useState(false);
  const [uploadResult, setUpLoadResult] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // 예외처리하기
  const [areaError, setAreaError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [leaderNameError, setLeaderNameError] = useState("");
  // const [homepageError, setHomepageError] = useState("");
  const [managerError, setManagerError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [dateConslusionError, setDateConslusionError] = useState("");

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  const [payload, setPayload] = useState({
    area: "",
    companyName: "",
    leaderName: "",
    homepage: "",
    manager: "",
    phoneNumber: "",
    dateConslusion: "",
  });

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
  };

  const fetchData = async () => {
    await getCompanyList(
      setListData,
      setCount,
      page,
      search,
      setErrorApiInfo,
      setNothing,
    );
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    document.querySelector(".all-checkbox-btn").checked = false;
    document
      .querySelectorAll(".company-checkbox")
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

  const handleDeleteClick = () => {
    if (saveCheckBox.length >= 1) {
      setDeleteModalOpen(true);
    } else {
      setErrorApiInfo("삭제하실 기업을 선택해주세요.");
    }
  };

  const handleExcelModalOpen = () => {
    setExcelModalOpen(true);
  };

  const handleExcelUpload = async () => {
    if (selectedFile) {
      let formData = new FormData();
      formData.append("companyfile", selectedFile);

      try {
        const result = await postCompanyExcel(formData, setErrorApiInfo);

        setUpLoadResult(result);

        if (result.success) {
          setExcelModalOpen(false);
          setExcelOkModal(true);
          setSelectedFile(null);
        }
      } catch (error) {
        setErrorApiInfo("파일업로드에 실패했습니다.");
      }
    }
  };

  const phoneFormatter = num => {
    try {
      num = num.replace(/\s/gi, "");

      if (num.length === 11) {
        return num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      } else if (num.length === 10) {
        return num.replace(/(\d{3})(\d{4})(\d{3})/, "$1-$2-$3");
      } else if (/^02/.test(num) && num.length === 9) {
        return num.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
      } else {
        return num;
      }
    } catch (err) {
      return num;
    }
  };
  const formatPhoneNumber = phoneFormatter(payload.phoneNumber);

  // 기업등록버튼
  const handleModalAccept = async () => {
    try {
      setCompanyNameError(
        !payload.companyName ? "기업명을 입력 해 주세요." : "",
      );
      setAreaError(!payload.area ? "지역을 입력 해 주세요." : "");
      setLeaderNameError(!payload.leaderName ? "대표명을 입력 해 주세요." : "");
      // setHomepageError(!payload.homepage ? "홈페이지를 입력 해 주세요." : "");
      setManagerError(!payload.manager ? "담당자 이름을 입력 해 주세요." : "");
      setPhoneNumberError(
        !payload.phoneNumber ? "연락처를 입력 해 주세요." : "",
      );
      // setDateConslusionError(
      //   !payload.dateConslusion ? "체결일자를 선택 해 주세요." : "",
      // );

      const isError =
        !payload.companyName ||
        !payload.area ||
        !payload.leaderName ||
        !payload.manager ||
        !payload.phoneNumber;
      // !payload.dateConslusion;

      if (!isError) {
        const result = await postCompanyAccept(payload, setErrorApiInfo);
        setUpLoadResult(result);
        setModalOpen(false);

        if (result.success) {
          setModalOpen(false);
          // setAcceptOkModal(true);
          setPayload({
            area: "",
            companyName: "",
            leaderName: "",
            homepage: "",
            manager: "",
            phoneNumber: "",
            dateConslusion: "",
          });
          fetchData();
        }
      }
    } catch (error) {
      setModalOpen(false);
      // setAcceptOkModal(true);
      setPayload({
        area: "",
        companyName: "",
        leaderName: "",
        homepage: "",
        manager: "",
        phoneNumber: "",
        dateConslusion: "",
      });
    }
  };

  const handleExcelDownLoad = async () => {
    getCompanyListDownload(setExcelDownload);
  };
  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

  return (
    <CompanyMgmtWrap>
      <div className="company-title">
        <h3>기업 등록 · 관리</h3>
      </div>
      <CompanyMgmtInner>
        <CompanySearch
          category={category}
          handleCategoryFiiter={handleCategoryFiiter}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {/* 기업등록 모달 */}
        {modalOpen && (
          <CompanyMgmtModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            payload={payload}
            setPayload={setPayload}
            handleModalAccept={handleModalAccept}
            areaError={areaError}
            companyNameError={companyNameError}
            leaderNameError={leaderNameError}
            // homepageError={homepageError}
            managerError={managerError}
            phoneNumberError={phoneNumberError}
            dateConslusionError={dateConslusionError}
            formatPhoneNumber={formatPhoneNumber}
          />
        )}
        {/* 등록확인모달 */}
        {acceptOkModal && (
          <AcceptModal
            acceptOkModal={acceptOkModal}
            setAcceptOkModal={setAcceptOkModal}
            uploadResult={uploadResult}
          />
        )}
        {/* 엑셀업로드 모달 */}
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
        {/* 기업삭제모달 */}
        {deleteModalOpen && (
          <DeleteCompanyModal
            deleteModalOpen={deleteModalOpen}
            setDeleteModalOpen={setDeleteModalOpen}
            saveCheckBox={saveCheckBox}
            setSaveCheckBox={setSaveCheckBox}
            setListData={setListData}
            fetchData={fetchData}
            setErrorApiInfo={setErrorApiInfo}
          />
        )}
        {/* 엑셀업로드 확인모달 */}
        {excelOkModal && (
          <ExcelAcceptModal
            excelOkModal={excelOkModal}
            setExcelOkModal={setExcelOkModal}
            uploadResult={uploadResult}
          />
        )}
        <div className="company-buttons">
          <button onClick={handleDeleteClick}>삭제</button>
          <button onClick={handleExcelDownLoad}>엑셀 다운로드</button>
          <button onClick={handleExcelModalOpen}>엑셀 업로드</button>
          <button onClick={handleModalOpen}>기업등록</button>
        </div>
        <div className="total-count">
          <span>총 {count}개</span>
        </div>
        <CompanyTable>
          {nothing && <NoListItem />}

          <CompanyList
            listData={listData}
            handleAllCheck={handleAllCheck}
            handleCheckBox={handleCheckBox}
            page={page}
            acceptOkModal={acceptOkModal}
            setAcceptOkModal={setAcceptOkModal}
            uploadResult={uploadResult}
            setUpLoadResult={setUpLoadResult}
            fetchData={fetchData}
            setErrorApiInfo={setErrorApiInfo}
          />
        </CompanyTable>
        <Paging page={page} setPage={setPage} count={count} />
      </CompanyMgmtInner>

      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <ErrorModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false);
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false);
          }}
        >
          <span>{errorApiInfo}</span>
        </ErrorModal>
      )}
    </CompanyMgmtWrap>
  );
};

export default CompanyMgmt;
