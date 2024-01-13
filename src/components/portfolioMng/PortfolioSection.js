import React, { useEffect, useState } from "react";
import PFsearch from "./PFsearch";
import { getPortFolioList } from "../../api/portfolioAxios";
import PortfolioContent from "./PortfolioContent";
import PortfolioPaging from "./PortfolioPaging";
import { NothingData, PortFolioContentWrap } from "../../styles/PortfolioStyle";
import { v4 } from "uuid";
import NoListItem from "../NoListItem";

const PortfolioSection = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [studentPFList, setStudentPFList] = useState("");
  const [nothing, setNothing] = useState(false);

  useEffect(() => {
    console.log("상위 화면 리랜더링 합니다");
    getPortFolioList({ setStudentPFList, page, setCount, setNothing });
  }, [page]);

  return (
    <div>
      {/* 검색창 화면*/}
      <PFsearch
        page={page}
        setPage={setPage}
        setStudentPFList={setStudentPFList}
        setCount={setCount}
        setNothing={setNothing}
      />
      {/* 포트폴리오 리스트 화면 */}
      {/* {studentPFList?.res?.length > 0 ? ( */}
      <PortFolioContentWrap>
        {nothing && <NoListItem />}

        {studentPFList?.res?.map(item => (
          <PortfolioContent
            key={v4()}
            item={item}
            setStudentPFList={setStudentPFList}
            nothing={nothing}
          />
        ))}
      </PortFolioContentWrap>
      {/* ) : ( */}
      {/* )} */}
      {/* 페이지네이션 */}
      <PortfolioPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default PortfolioSection;
