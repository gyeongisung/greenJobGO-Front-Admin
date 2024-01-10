import React, { useEffect, useState } from "react";
import { getSavedPFList } from "../../api/portfolioAxios";
import SaveItemContent from "./SaveItemContent";
import SaveItemSearch from "./SaveItemSearch";
import { v4 } from "uuid";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import SaveItemPaging from "./SaveItemPaging";

const SaveItemSection = () => {
  // const [searchsubj, setSearchSubj] = useState("");
  // const [searchname, setSearchname] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [savedPFList, setSavedPFList] = useState("");
  const [checkItems, setCheckItems] = useState([]);

  // 메인으로 보낼 리스트를 체크하자
  const handleMainCheck = (istudent, isChecked) => {
    if (isChecked) {
      setCheckItems(prev => [...prev, istudent]);
    } else {
      setCheckItems(checkItems.filter(item => item !== istudent));
    }
    console.log("뭐체크됨?", checkItems);
  };

  const handleGoMain = e => {
    console.log("메인으로 보내는 포폴 클릭", e);
  };

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
      <PortFolioContentWrap>
        <BtnGlobal className="GoMainGo" onClick={handleGoMain}>
          메인 포트폴리오 적용
        </BtnGlobal>
        {savedPFList?.res?.map(item => (
          <SaveItemContent
            key={v4()}
            item={item}
            checkItems={checkItems}
            handleMainCheck={handleMainCheck}
            setSavedPFList={setSavedPFList}
          />
        ))}
      </PortFolioContentWrap>
      {/* 페이지네이션 */}
      <SaveItemPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default React.memo(SaveItemSection);
