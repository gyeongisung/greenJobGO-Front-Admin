import React, { useEffect, useState } from "react";
import {
  getSavedPFList,
} from "../../api/portfolioAxios";
import PFsearch from "./PFsearch";
import SaveItemContent from "./SaveItemContent";
import PortfolioPaging from "./PortfolioPaging";
import SaveItemSearch from "./SaveItemSearch";

const SaveItemSection = () => {
  const [searchsubj, setSearchSubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [savedPFList, setSavedPFList] = useState("");

  useEffect(() => {
    getSavedPFList({ setSavedPFList, page, setCount });
  }, [page]);

  return (
    <div>
      <SaveItemSearch
        searchsubj={searchsubj}
        setSearchSubj={setSearchSubj}
        searchname={searchname}
        setSearchname={setSearchname}
        page={page}
        setPage={setPage}
        setSavedPFList={setSavedPFList}
        setCount={setCount}
      />
      {/* {studentPFList.res.length > 0 ? ( */}
      <SaveItemContent savedPFList={savedPFList} />
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

export default React.memo(SaveItemSection);
