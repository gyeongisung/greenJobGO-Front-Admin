import React, { useEffect, useState } from "react";
import PFsearch from "./PFsearch";
import { getPortFolioList } from "../../api/portfolioAxios";
import PortfolioContent from "./PortfolioContent";
import PortfolioPaging from "./PortfolioPaging";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import NoListItem from "../NoListItem";

const PortfolioSection = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [studentPFList, setStudentPFList] = useState("");
  const [nothing, setNothing] = useState(false);
  // const [queryAdd, setQueryAdd] = useState();
  const [searchsubj, setSearchSubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [selectCate, setSelectCate] = useState("");

  // url을 만들자
  const makeUrl = () => {
    let query = "";

    if (selectCate !== "") {
      query += `iclassfication=${selectCate}&`;
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
    await getPortFolioList({
      setStudentPFList,
      page,
      setCount,
      resultUrl,
      setNothing,
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
          />
        ))}
      </PortFolioContentWrap>
      {/* 페이지네이션 */}
      <PortfolioPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default PortfolioSection;
