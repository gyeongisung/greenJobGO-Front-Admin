import React, { useEffect, useState } from "react";
import { getSavedPFList } from "../../api/portfolioAxios";
import SaveItemContent from "./SaveItemContent";
import SaveItemSearch from "./SaveItemSearch";
import SaveItemPaging from "./SaveItemPaging";
import { atom, useRecoilState } from "recoil";
import { v4 } from "uuid";
import ErrorModal from "../../components/ErrorModal";

// 보관함리스트 저장 recoil
export const savedListRecoil = atom({
  key: `savedListRecoil/${v4()}`,
  // key: `savedListRecoil`,
  default: [],
});

const SaveItemSection = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [nothing, setNothing] = useState(false);

  const [searchsubj, setSearchSubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [selectCate, setSelectCate] = useState("");

  // 보관함 리스트 recoil
  const [savedPFList, setSavedPFList] = useRecoilState(savedListRecoil);
  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  // 메인 보낼 list
  const [clickItems, setClickItems] = useState([]);

  // 쿼리 주소를 변환하자
  const makeUrl = () => {
    let query = "";

    if (selectCate !== "") {
      query += `&iclassfication=${selectCate}`;
    }
    if (searchsubj !== "") {
      query += `&subjectName=${searchsubj}`;
    }
    if (searchname !== "") {
      query += `&studentName=${searchname}`;
    }
    // query = query ? query.slice(0, -1) : "";
    return query;
  };

  const fetchData = async () => {
    const resultUrl = makeUrl();
    await getSavedPFList({
      setSavedPFList,
      page,
      setCount,
      resultUrl,
      setNothing,
      setErrorApiInfo,
    });
  };

  // 검색버튼 클릭
  const handleSearchClick = async () => {
    try {
      setPage(1);
      await fetchData();
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

  return (
    <div>
      {/* 검색화면 */}
      <SaveItemSearch
        handleSearchClick={handleSearchClick}
        setPage={setPage}
        selectCate={selectCate}
        setSelectCate={setSelectCate}
        searchsubj={searchsubj}
        setSearchSubj={setSearchSubj}
        searchname={searchname}
        setSearchname={setSearchname}
        fetchData={fetchData}
        clickItems={clickItems}
        setClickItems={setClickItems}
        setErrorApiInfo={setErrorApiInfo}
      />
      {/* 보관함 리스트 화면 */}
      <SaveItemContent
        fetchData={fetchData}
        nothing={nothing}
        clickItems={clickItems}
        setClickItems={setClickItems}
      />
      {/* 페이지네이션 */}
      <SaveItemPaging page={page} setPage={setPage} count={count} />
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
    </div>
  );
};

export default SaveItemSection;
