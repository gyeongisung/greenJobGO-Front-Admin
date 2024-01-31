import React, { useEffect, useState } from "react";
import BulkPaging from "../components/Bulk/BulkPaging";
import BulkList from "../components/Bulk/BulkList";
import BulkSearch from "../components/Bulk/BulkSearch";
import { BulkInner, BulkTable, BulkWrap } from "../styles/BulkStyle";
import {
  deleteStudent,
  getBulkStudentList,
  getClassificationList,
} from "../api/bulkAxios";
import { getCategory } from "../api/bulkAxios";
import { BulkDeletetModal } from "../components/AcceptModals";
import OkModal from "../components/OkModal";
import { StudentPageAtom } from "../components/studentmgmt/StudentMain";
import { useResetRecoilState } from "recoil";
import NoListItem from "../components/NoListItem";

const BulkDelete = () => {
  const [nothing, setNothing] = useState(false);

  const [listData, setListData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subjData, setSubjData] = useState([]);
  const [keyData, setKeyData] = useState({});
  const [searchsubj, setSearchsubj] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");
  const [uploadResult, setUpLoadResult] = useState(false);

  const fetchData = () => {
    getBulkStudentList(
      setListData,
      page,
      setCount,
      category,
      searchsubj,
      setErrorInfo,
      setNothing,
    );
  };

  useEffect(() => {
    fetchData();
    getCategory(setCategoryData, setErrorInfo);
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchData();
  };
  const handleCategoryFiiter = async e => {
    const newCtegory = e.target.value;
    setCategory(newCtegory);
    await getClassificationList(newCtegory, setSubjData, setErrorInfo);
    setPage(1);
  };
  const handleSubjectFilter = e => {
    setSearchsubj(e.target.value);
    setPage(1);
  };

  const handleDeleteClick = (icourseSubject, iclassification) => {
    setKeyData({ icourseSubject, iclassification });
    setModalOpen(true);
  };

  const handleDelete = async () => {
    if (keyData) {
      const { icourseSubject, iclassification } = keyData;
      try {
        deleteStudent(icourseSubject, iclassification, setErrorInfo);
        setErrorModalOpen(true);
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  // useEffect(() => {
  //   setErrorModalOpen(true);
  // }, [errorInfo]);

  return (
    <BulkWrap>
      {/* 삭제진행 유무 모달 */}
      {modalOpen && (
        <BulkDeletetModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          handleDelete={handleDelete}
        />
      )}
      {/* 삭제처리 확인모달 */}
      {errorModalOpen && (
        <OkModal
          header={""}
          open={errorModalOpen}
          close={() => {
            setErrorModalOpen(false), setErrorInfo("");
          }}
          onConfirm={() => {
            setErrorModalOpen(false), setErrorInfo("");
          }}
        >
          <span>{errorInfo}</span>
        </OkModal>
      )}
      <div className="delete-title">
        <h3>일괄 삭제</h3>
      </div>
      <BulkInner>
        <BulkSearch
          category={category}
          handleCategoryFiiter={handleCategoryFiiter}
          searchsubj={searchsubj}
          setSearchsubj={setSearchsubj}
          handleSubjectFilter={handleSubjectFilter}
          categoryData={categoryData}
          subjData={subjData}
          setCategory={setCategory}
          handleSearch={handleSearch}
        />
        <div className="total-count">
          <span>총 {count}개</span>
        </div>
        <BulkTable>
          {nothing && <NoListItem />}
          <BulkList
            listData={listData}
            page={page}
            uploadResult={uploadResult}
            setUpLoadResult={setUpLoadResult}
            categoryData={categoryData}
            handleDeleteClick={handleDeleteClick}
          />
        </BulkTable>
        <BulkPaging page={page} setPage={setPage} count={count} />
      </BulkInner>
    </BulkWrap>
  );
};

export default BulkDelete;
