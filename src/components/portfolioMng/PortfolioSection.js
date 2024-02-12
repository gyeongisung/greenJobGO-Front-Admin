import React, { useCallback, useEffect, useState } from "react";
import PFsearch from "./PFsearch";
import { getPortFolioList } from "../../api/portfolioAxios";
import PortfolioContent from "./PortfolioContent";
import PortfolioPaging from "./PortfolioPaging";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import NoListItem from "../NoListItem";
import ErrorModal from "../ErrorModal";

const PortfolioSection = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [studentPFList, setStudentPFList] = useState("");
  const [nothing, setNothing] = useState(false);
  const [searchsubj, setSearchSubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [selectCate, setSelectCate] = useState("");
  const [searchCate, setSearchCate] = useState("");
  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  // url을 만들자
  const makeUrl = () => {
    let query = "";

    if (searchCate !== "") {
      query += `iclassfication=${searchCate}&`;
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
    try {
      await getPortFolioList({
        setStudentPFList,
        page,
        setCount,
        resultUrl,
        setNothing,
        setErrorApiInfo,
      });
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  // 검색버튼 클릭
  const handleSearchClick = async () => {
    setSearchCate(selectCate);
    setPage(1);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [page, searchCate]);

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);
  return (
    <div>
      {/* 검색창 화면*/}
      <PFsearch
        handleSearchClick={handleSearchClick}
        selectCate={selectCate}
        setSelectCate={setSelectCate}
        searchsubj={searchsubj}
        setSearchSubj={setSearchSubj}
        searchname={searchname}
        setSearchname={setSearchname}
        setErrorApiInfo={setErrorApiInfo}
      />
      {/* 포트폴리오 리스트 화면 */}
      <PortFolioContentWrap>
        {nothing && <NoListItem />}
        {studentPFList?.res?.map(item => (
          <PortfolioContent
            key={`pk${item.istudent}`}
            item={item}
            studentPFList={studentPFList}
            setPage={setPage}
            nothing={nothing}
            fetchData={fetchData}
            setErrorApiInfo={setErrorApiInfo}
          />
        ))}
      </PortFolioContentWrap>
      {/* 페이지네이션 */}
      <PortfolioPaging page={page} setPage={setPage} count={count} />
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

export default PortfolioSection;
