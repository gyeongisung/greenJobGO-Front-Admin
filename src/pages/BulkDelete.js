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

const BulkDelete = () => {
  const [listData, setListData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subjData, setSubjData] = useState([]);
  const [keyData, setKeyData] = useState({});
  const [searchsubj, setSearchsubj] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadResult, setUpLoadResult] = useState(false);

  const fetchData = () => {
    getBulkStudentList(setListData, page, setCount, category, searchsubj);
  };

  useEffect(() => {
    fetchData();
    getCategory(setCategoryData);
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchData();
  };
  const handleCategoryFiiter = async e => {
    const newCtegory = e.target.value;
    setCategory(newCtegory);
    await getClassificationList(newCtegory, setSubjData);
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

  const handleDelete = () => {
    if (keyData) {
      const { icourseSubject, iclassification } = keyData;
      deleteStudent(icourseSubject, iclassification);
    }
  };

  return (
    <BulkWrap>
      {modalOpen && (
        <BulkDeletetModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          handleDelete={handleDelete}
        />
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
