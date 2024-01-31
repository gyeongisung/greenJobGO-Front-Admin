import React, { useEffect, useState } from "react";
import {
  DeleteTable,
  PermanentlyInner,
  PermanentlyWrap,
} from "../styles/PermanentlyStyle";
import DeletePaging from "../components/Permanently/DeletePaging";
import DeleteList from "../components/Permanently/DeleteList";
import DeleteSearch from "../components/Permanently/DeleteSearch";
import {
  deleteCompleteStudent,
  getCompleteDeleteList,
} from "../api/permanentlyAxios";
import NoListItem from "../components/NoListItem";
import ConfirmModal from "../components/ConfirmModal";
import OkModal from "../components/OkModal";

const PermanentlyDelete = () => {
  const [nothing, setNothing] = useState(false);
  const [listData, setListData] = useState("");

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [searchsubj, setSearchsubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [selectCate, setSelectCate] = useState(0);

  // 체크박스 state
  const [clickItems, setClickItems] = useState([]);
  const [allClick, setAllClick] = useState(false);

  // 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const [errorInfo, setErrorInfo] = useState("");

  // url을 만들자
  const makeUrl = () => {
    let query = "";

    if (selectCate !== "" && selectCate !== 0) {
      query += `iclassification=${selectCate}&`;
    }
    if (searchsubj !== "") {
      query += `subjectName=${searchsubj}&`;
    }
    if (searchname !== "") {
      query += `studentName=${searchname}&`;
    }
    query = query ? query.slice(0, -1) : "";
    return query;
  };

  const fetchData = async () => {
    const resultUrl = makeUrl();
    await getCompleteDeleteList({
      setListData,
      setCount,
      page,
      resultUrl,
      setNothing,
      setErrorInfo
    });
  };

  console.log("listData", listData);
  // 수강생 검색
  const handleSearch = async () => {
    try {
      setPage(1);
      await fetchData();
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  // 삭제버튼 클릭
  const handleDelete = () => {
    if (clickItems.length === 0) {
      setErrorInfo("삭제할 내용을 선택하세요.");
      return;
    } else {
      setModalOpen(true);
    }
  };

  // 삭제컨펌
  const handleDelConfirm = async () => {
    try {
      // await setPage(1);
      await deleteCompleteStudent({ clickItems, setErrorInfo });
      // await fetchData();
      await setModalOpen(false);
      setErrorModalOpen(true);
    } catch (error) {
      console.log("삭제실패", error);
      setErrorModalOpen(true);
    }
  };

  useEffect(() => {
    if (errorInfo) {
      setErrorModalOpen(true);
      // fetchData();
    } else {
      setErrorModalOpen(false);
    }
  }, [errorInfo]);

  useEffect(() => {
    fetchData();
  }, [page]);

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
          handleSearch={handleSearch}
          searchname={searchname}
          setSearchname={setSearchname}
          searchsubj={searchsubj}
          setSearchsubj={setSearchsubj}
          selectCate={selectCate}
          setSelectCate={setSelectCate}
          setErrorInfo={setErrorInfo}
        />
        <div className="delete-buttons">
          <button onClick={handleDelete}>삭제</button>
        </div>
        <div className="total-count">
          <span>총 {count}개</span>
        </div>
        <DeleteTable>
          {nothing && <NoListItem />}
          <DeleteList
            listData={listData}
            page={page}
            allClick={allClick}
            setAllClick={setAllClick}
            clickItems={clickItems}
            setClickItems={setClickItems}
          />
        </DeleteTable>
        <DeletePaging page={page} setPage={setPage} count={count} />
      </PermanentlyInner>

      {/* 삭제확인모달 */}
      {modalOpen && (
        <ConfirmModal
          header={
            <p
              style={{
                width: "200px",
                position: "absolute",
                top: "20px",
                left: "25px",
              }}
            >
              항목을 삭제하시겠습니까?
            </p>
          }
          open={modalOpen}
          close={() => setModalOpen(false)}
          onConfirm={handleDelConfirm}
          onCancel={() => setModalOpen(false)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/bxs_error.png`}
            alt="경고"
          />
          <span style={{ fontSize: "12px", lineHeight: "2.5" }}>
            확인 버튼 클릭 시 해당 항목과 포트폴리오가 영구적으로 삭제됩니다.
          </span>
        </ConfirmModal>
      )}
      {/* api 에러 확인모달 */}
      {errorModalOpen && (
        <OkModal
          header={""}
          open={errorModalOpen}
          close={() => {
            setErrorModalOpen(false);
            fetchData();
          }}
          onConfirm={() => {
            setErrorModalOpen(false);
            fetchData();
          }}
        >
          <span>{errorInfo}</span>
        </OkModal>
      )}
    </PermanentlyWrap>
  );
};

export default PermanentlyDelete;
