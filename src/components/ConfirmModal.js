import React from "react";
import { ConfirmModalWarp, ModalCancelBtn, ModalOkBtn } from "../styles/GlobalStyle";

const ConfirmModal = ({  open, close, onConfirm, onCancel, children }) => {
  console.log("컨펌모달 작동됩니다");
  const stopPropagation = e => {
    e.stopPropagation();
  };
  return (
    <ConfirmModalWarp onClick={close}>
      <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
        {open ? (
          <div
            className="modalConfirm-wrapper"
            onClick={e => stopPropagation(e)}
          >
            {/* 모달내용(컴포넌트 읽어오는부분) */}
            <div className="modalConfirm-content">
              {children}
              <div>
                <ModalCancelBtn onClick={onCancel}>취소</ModalCancelBtn>
                <ModalOkBtn onClick={onConfirm}>확인</ModalOkBtn>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </ConfirmModalWarp>
  );
};

export default ConfirmModal;
