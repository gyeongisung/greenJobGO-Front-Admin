import React, { useCallback, useState } from "react";

import { v4 } from "uuid";
import SaveItemBox from "./SaveItemBox";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import NoListItem from "../NoListItem";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { savedListRecoil } from "./SaveItemSection";
import { clickMainRecoil } from "./SaveItemCheckbox";

// 선택된 필터정보 읽자
export const readsavedListItems = selector({
  key: `/${v4()}`,
  // 값을 읽겠다
  get: ({ get }) => {
    const result = get(savedListRecoil);
    return result;
  },
});
const SaveItemContent = ({ nothing }) => {
  // 보관함 리스트 recoil을 읽어오자
  const savedListRead = useRecoilValue(readsavedListItems);

  return (
    <PortFolioContentWrap>
      {savedListRead.res?.map(item => (
        <SaveItemBox key={`pk${item.istudent}`} item={item} />
      ))}
    </PortFolioContentWrap>
  );
};

export default React.memo(SaveItemContent);
