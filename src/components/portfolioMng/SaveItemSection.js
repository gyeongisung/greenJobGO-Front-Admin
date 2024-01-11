import React, { useEffect, useState } from "react";
import { getSavedPFList, patchSendMain } from "../../api/portfolioAxios";
import SaveItemContent from "./SaveItemContent";
import SaveItemSearch from "./SaveItemSearch";
import { v4 } from "uuid";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import SaveItemPaging from "./SaveItemPaging";

const SaveItemSection = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [savedPFList, setSavedPFList] = useState("");
  const [checkItems, setCheckItems] = useState([]);
  const [isMain, setIsMain] = useState(1);

  // 메인으로 보낼 리스트를 체크하자
  const handleMainCheck = (istudent, isChecked) => {
    if (isChecked) {
      setCheckItems(prev => [...prev, istudent]);
    } else {
      setCheckItems(checkItems.filter(item => item !== istudent));
    }
  };

  // const query = checkItems.map(num => `num=${num}`).join("&");

  const handleGoMain = async e => {
    // try {
    //   const queryState = await query();
    //   await patchSendMain({ queryState, isMain });
    // } catch (error) {
    //   console.error("에러", error);
    // }
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
            setSavedPFList={setSavedPFList}
            checkItems={checkItems}
            handleMainCheck={handleMainCheck}
          />
        ))}
      </PortFolioContentWrap>
      {/* 페이지네이션 */}
      <SaveItemPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default SaveItemSection;
