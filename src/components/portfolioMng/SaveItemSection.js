import React, { useEffect, useState } from "react";
import { getSavedPFList, patchSendMain } from "../../api/portfolioAxios";
import SaveItemContent from "./SaveItemContent";
import SaveItemSearch from "./SaveItemSearch";
import SaveItemPaging from "./SaveItemPaging";

const SaveItemSection = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [savedPFList, setSavedPFList] = useState("");
  const [nothing, setNothing] = useState(false);

  useEffect(() => {
    getSavedPFList({ setSavedPFList, page, setCount, setNothing });
  }, [page]);

  console.log("savedPFList", savedPFList);
  return (
    <div>
      {/* 검색화면 */}
      <SaveItemSearch
        page={page}
        setPage={setPage}
        setSavedPFList={setSavedPFList}
        setCount={setCount}
        setNothing={setNothing}
      />
      {/* 보관함 리스트 화면 */}
      {/* {savedPFList?.res?.length > 0 ? ( */}
      <SaveItemContent
        savedPFList={savedPFList}
        setSavedPFList={setSavedPFList}
        nothing={nothing}
        page={page}
        setCount={setCount}
        setNothing={setNothing}
      />
      {/* 페이지네이션 */}
      <SaveItemPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default React.memo(SaveItemSection);
