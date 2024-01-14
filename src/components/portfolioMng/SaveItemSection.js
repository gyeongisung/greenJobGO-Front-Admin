import React, { useEffect, useState } from "react";
import { getSavedPFList, patchSendMain } from "../../api/portfolioAxios";
import SaveItemContent from "./SaveItemContent";
import SaveItemSearch from "./SaveItemSearch";
import SaveItemPaging from "./SaveItemPaging";
import { v4 } from "uuid";
import { atom, useRecoilState } from "recoil";
import NoListItem from "../NoListItem";

// 보관함리스트 저장 recoil
export const savedListRecoil = atom({
  key: `savedListRecoil/${v4()}`,
  default: [],
});

const SaveItemSection = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  // const [savedPFList, setSavedPFList] = useState("");
  const [nothing, setNothing] = useState(false);

  // 보관함 리스트 recoil
  const [savedPFList, setSavedPFList] = useRecoilState(savedListRecoil);

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
        setCount={setCount}
        setNothing={setNothing}
      />
      {/* 보관함 리스트 화면 */}
      {/* {nothing && <NoListItem />} */}
      {nothing ? (
        <NoListItem />
      ) : (
        <SaveItemContent
          nothing={nothing}
          setCount={setCount}
          setNothing={setNothing}
        />
      )}
      {/* 페이지네이션 */}
      <SaveItemPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default React.memo(SaveItemSection);
