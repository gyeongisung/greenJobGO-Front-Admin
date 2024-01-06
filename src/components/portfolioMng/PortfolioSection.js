import React, { useEffect, useState } from "react";
import PFsearch from "./PFsearch";
import { getBigcate, getPortFolioList } from "../../api/portfolioAxios";
import PortfolioContent from "./PortfolioContent";
import PortfolioPaging from "./PortfolioPaging";

const PortfolioSection = () => {
  const [search, setSearch] = useState();
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [studentPFList, setStudentPFList] = useState("");
  useEffect(() => {
    getBigcate(setCategory);
    getPortFolioList({ setStudentPFList, page });
  }, []);
  return (
    <div>
      <PFsearch search={search} category={category} setCategory={setCategory} />
      <PortfolioContent studentPFList={studentPFList}/>
      <PortfolioPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default PortfolioSection;
