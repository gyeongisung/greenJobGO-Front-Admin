import React, {  useEffect, useState } from "react";
import PFsearch from "./PFsearch";
import { getPortFolioList } from "../../api/portfolioAxios";
import PortfolioContent from "./PortfolioContent";
import PortfolioPaging from "./PortfolioPaging";
import { NothingData } from "../../styles/PortfolioStyle";

const PortfolioSection = () => {
  const [searchsubj, setSearchSubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [studentPFList, setStudentPFList] = useState("");

  useEffect(() => {
    console.log("상위 화면 리랜더링 합니다");
    getPortFolioList({ setStudentPFList, page, setCount });
  }, [page]);

  return (
    <div>
      <PFsearch
        searchsubj={searchsubj}
        setSearchSubj={setSearchSubj}
        searchname={searchname}
        setSearchname={setSearchname}
        page={page}
        setPage={setPage}
        setStudentPFList={setStudentPFList}
        setCount={setCount} />
      {/* {studentPFList.res.length > 0 ? ( */}
      <PortfolioContent
        studentPFList={studentPFList}
        setStudentPFList={setStudentPFList}
        setCount={setCount}
      />
      {/* ) : (
        // 데이터 없을 때 뜨는 화면
        <NothingData>
          <p>데이터가 없어요 （；´д｀）ゞ</p>
        </NothingData>
      )} */}
      <PortfolioPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default React.memo(PortfolioSection);
