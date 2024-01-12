import React, { useCallback, useState } from "react";

import { v4 } from "uuid";
import SaveItemBox from "./SaveItemBox";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { getSavedPFList } from "../../api/portfolioAxios";
import ConfirmModal from "../ConfirmModal";


const SaveItemContent = ({ savedPFList, setSavedPFList }) => {

  return (
    <PortFolioContentWrap>

      {savedPFList?.res?.map(item => (
        <SaveItemBox
          key={v4()}
          item={item}
          setSavedPFList={setSavedPFList}
        />
      ))}
    </PortFolioContentWrap>
  );
};

export default React.memo(SaveItemContent);
