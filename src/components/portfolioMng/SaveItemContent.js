import React, { useCallback, useState } from "react";

import { v4 } from "uuid";
import SaveItemBox from "./SaveItemBox";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import NoListItem from "../NoListItem";

const SaveItemContent = ({ savedPFList, setSavedPFList,nothing }) => {
  return (
    <PortFolioContentWrap>
      {nothing && <NoListItem />}

      {savedPFList?.res?.map(item => (
        <SaveItemBox key={v4()} item={item} setSavedPFList={setSavedPFList} />
      ))}
    </PortFolioContentWrap>
  );
};

export default React.memo(SaveItemContent);
