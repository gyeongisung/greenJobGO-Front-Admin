import React from "react";
import { ErrorModalWarp, ModalOkBtn } from "../styles/GlobalStyle";

const ErrorModal = ({ header, open, close, onConfirm, children }) => {
  const stopPropagation = e => {
    e.stopPropagation();
  };
  console.log("error-modal");
  return (
    <ErrorModalWarp onClick={close}>
      <div className={open ? "openErrorModal error-modal" : "error-modal"}>
        {open && (
          <div className="modalError-wrapper" onClick={e => stopPropagation(e)}>
            {/* 헤더내용 */}
            <div className="error-modal-header">
              {header}
              <p className="close" onClick={close}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                  alt="X"
                />
              </p>
            </div>
            {/* 모달내용(컴포넌트 읽어오는부분) */}
            <div className="modalError-content">
              {children}
              <div>
                <ModalOkBtn onClick={onConfirm}>확인</ModalOkBtn>
              </div>
            </div>
          </div>
        )}
      </div>
    </ErrorModalWarp>
  );
};

export default ErrorModal;
