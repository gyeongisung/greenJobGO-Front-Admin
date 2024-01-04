import React, { useEffect, useState } from "react";
import {
  CompanyMgmtInner,
  CompanyMgmtWrap,
  CompanyTable,
} from "../styles/CompanyMgmtStyle";
import { getCompanyList, postCompanyExcel } from "../api/companyAxios";
import CompanyList from "../components/companymgmt/CompanyList";
import CompanySearch from "../components/companymgmt/CompanySearch";
import Paging from "../components/companymgmt/CompanyPaging";
import {
  DeleteCompanyModal,
  CompanyMgmtModal,
} from "../components/companymgmt/CompanyModal";

const CompanyMgmt = () => {
  const [listData, setListData] = useState([]);
  const [saveCheckBox, setSaveCheckBox] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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

  const fetchData = () => {
    getCompanyList(setListData, setCount, page, search);
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
      alert("삭제하실 기업을 선택해주세요.")
    }
  };

  const handleExcelUpload = companyfile => {
    let formData = new FormData();
    formData.append("companyfile", companyfile[0]);
    postCompanyExcel(formData);
  };

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
        {modalOpen && (
          <CompanyMgmtModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
        {deleteModalOpen && (
          <DeleteCompanyModal
            deleteModalOpen={deleteModalOpen}
            setDeleteModalOpen={setDeleteModalOpen}
            saveCheckBox={saveCheckBox}
            setSaveCheckBox={setSaveCheckBox}
            setListData={setListData}
          />
        )}
        <div className="company-buttons">
          <div>
            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={e => handleExcelUpload(e.target.files)}
            />
          </div>
          <button onClick={handleModalOpen}>기업등록</button>
          <button>수정</button>
          <button onClick={handleDeleteClick}>삭제</button>
        </div>
        <div className="total-count">
          <span>총 {count}개</span>
        </div>
        <CompanyTable>
          <CompanyList
            listData={listData}
            handleAllCheck={handleAllCheck}
            handleCheckBox={handleCheckBox}
            page={page}
          />
        </CompanyTable>
        <Paging page={page} setPage={setPage} count={count} />
      </CompanyMgmtInner>
    </CompanyMgmtWrap>
  );
};

export default CompanyMgmt;
