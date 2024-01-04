import React from "react";
import { ConfirmModalWarp } from "../styles/GlobalStyle";

const ConfirmModal = ({ open, close, children }) => {
  const stopPropagation = e => {
    e.stopPropagation();
  };
  return (
    <ConfirmModalWarp onClick={close}>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <div className="modal-wrapper" onClick={e => stopPropagation(e)}>
            {/* 모달내용(컴포넌트 읽어오는부분) */}
            <div className="modal-content">{children}</div>
          </div>
        ) : null}
      </div>
    </ConfirmModalWarp>
  );
};

export default ConfirmModal;
