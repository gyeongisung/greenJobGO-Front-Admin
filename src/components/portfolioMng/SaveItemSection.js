import React, { useEffect, useState } from "react";
import { getSavedPFList, patchSendMain } from "../../api/portfolioAxios";
import SaveItemContent from "./SaveItemContent";
import SaveItemSearch from "./SaveItemSearch";
import SaveItemPaging from "./SaveItemPaging";

const SaveItemSection = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [savedPFList, setSavedPFList] = useState("");

  useEffect(() => {
    getSavedPFList({ setSavedPFList, page, setCount });
  }, [page]);

  return (
    <div>
      {/* 검색화면 */}
      <SaveItemSearch
        page={page}
        setPage={setPage}
        setSavedPFList={setSavedPFList}
        setCount={setCount}
      />
      {/* 보관함 리스트 화면 */}
      <SaveItemContent
        savedPFList={savedPFList}
        setSavedPFList={setSavedPFList}
      />
      {/* 페이지네이션 */}
      <SaveItemPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default React.memo(SaveItemSection);
