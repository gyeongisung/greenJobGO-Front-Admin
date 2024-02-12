import React from "react";
import SaveItemBox from "./SaveItemBox";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import { selector, useRecoilValue } from "recoil";
import { savedListRecoil } from "./SaveItemSection";
import NoListItem from "../NoListItem";
import { v4 } from "uuid";

// 선택된 필터정보 읽자
export const readsavedListItems = selector({
  key: `readsavedListItems/${v4()}`,
  // 값을 읽겠다
  get: ({ get }) => {
    const result = get(savedListRecoil);
    return result;
  },
});
const SaveItemContent = ({ fetchData, nothing,
  clickItems,
  setClickItems }) => {
  // 보관함 리스트 recoil을 읽어오자
  const savedListRead = useRecoilValue(readsavedListItems);

  return (
    <PortFolioContentWrap>
      {nothing && <NoListItem />}

      {savedListRead.res?.map(item => (
        <SaveItemBox
          key={`pk${item.istudent}`}
          item={item}
          fetchData={fetchData}
          clickItems={clickItems}
          setClickItems={setClickItems}
        />
      ))}
    </PortFolioContentWrap>
  );
};

export default React.memo(SaveItemContent);
