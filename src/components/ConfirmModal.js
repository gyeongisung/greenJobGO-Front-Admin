import React from "react";
import {
  ConfirmModalWarp,
  ModalCancelBtn,
  ModalOkBtn,
} from "../styles/GlobalStyle";

const ConfirmModal = ({
  header,
  open,
  close,
  onConfirm,
  onCancel,
  children,
}) => {
  return (
    <ConfirmModalWarp>
      <div className={open ? "openConfirmModal Confimmodal" : "Confirmmodal"}>
        {open ? (
          <div
            className="modalConfirm-wrapper"
          >
            {/* 헤더내용 */}
            <div className="confirm-modal-header">
              {header}
              <p className="close" onClick={close}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                  alt="X"
                />
              </p>
            </div>
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
