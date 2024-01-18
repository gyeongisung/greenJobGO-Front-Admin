import React, { useCallback, useState } from "react";

import { v4 } from "uuid";
import SaveItemBox from "./SaveItemBox";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import { selector, useRecoilValue } from "recoil";
import { savedListRecoil } from "./SaveItemSection";

// 선택된 필터정보 읽자
export const readsavedListItems = selector({
  key: `readsavedListItems`,
  // 값을 읽겠다
  get: ({ get }) => {
    const result = get(savedListRecoil);
    return result;
  },
});
const SaveItemContent = () => {
  // 보관함 리스트 recoil을 읽어오자
  const savedListRead = useRecoilValue(readsavedListItems);

  return (
    <PortFolioContentWrap>
      {savedListRead.res?.map(item => (
        <SaveItemBox
          key={`pk${item.istudent}`}
          item={item}
        />
      ))}
    </PortFolioContentWrap>
  );
};

export default React.memo(SaveItemContent);
