import React, { useEffect, useState } from "react";
import { PortFolioContentWrap } from "../../styles/PortfolioStyle";
import { patchSendSaved } from "../../api/portfolioAxios";
import {
  ConfirmModalContent,
  ModalCancelBtn,
  ModalOkBtn,
} from "../../styles/GlobalStyle";
import { v4 } from "uuid";

import ConfirmModal from "../ConfirmModal";
import PortfolioBox from "./PortfolioBox";

const PortfolioContent = ({ studentPFList }) => {
  const [savedItemNum, setSavedItemNum] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(1);
  // const [renderState, setRenderState] = useState(false);


  const handleConfirm = async () => {
    try {
      await setIsSaved(1);
      await patchSendSaved({ savedItemNum, isSaved });
      setModalOpen(false);
    } catch (error) {
      console.log("보관실패", error);
    }
  };

  const handleCancelConfirm = async () => {
    try {
      await setIsSaved(0);
      await patchSendSaved({ savedItemNum, isSaved });
      setCancelModalOpen(false);
    } catch (error) {
      console.log("보관실패", error);
    }
  };

  // useEffect(() => {
  //   console.log("컨텐츠 화면 리랜더링 합니다");
  // }, []);
  return (
    <PortFolioContentWrap>
      {studentPFList?.res?.map(item => (
        <PortfolioBox
          key={v4()}
          item={item}
          setSavedItemNum={setSavedItemNum}
          setModalOpen={setModalOpen}
          setCancelModalOpen={setCancelModalOpen}
        />
      ))}
      {/* 보관확인모달 */}
      {modalOpen && (
        <ConfirmModal
          open={modalOpen}
          close={() => setModalOpen(false)}
          onConfirm={handleConfirm}
          onCancel={() => setModalOpen(false)}
        >
          <span>해당 포트폴리오를 보관 하시겠습니까?</span>
        </ConfirmModal>
      )}

      {/* 보관취소모달 */}
      {cancelModalOpen && (
        <ConfirmModal
          open={cancelModalOpen}
          close={() => setCancelModalOpen(false)}
          onConfirm={handleCancelConfirm}
          onCancel={() => setCancelModalOpen(false)}
        >
          <span>해당 포트폴리오 보관을 취소 하시겠습니까?</span>
        </ConfirmModal>
      )}
    </PortFolioContentWrap>
  );
};

export default React.memo(PortfolioContent);
