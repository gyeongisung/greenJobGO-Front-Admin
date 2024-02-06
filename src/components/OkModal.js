import React from "react";
import {
  ModalOkBtn,
  OkModalWarp,
} from "../styles/GlobalStyle";

const OkModal = ({ header, open, close, onConfirm, children }) => {
  return (
    <OkModalWarp>
      <div className={open ? "openOkModal ok-modal" : "ok-modal"}>
        {open && (
          <div className="modalOk-wrapper">
            {/* 헤더내용 */}
            <div className="ok-modal-header">
              {header}
              <p className="close" onClick={close}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                  alt="X"
                />
              </p>
            </div>
            {/* 모달내용(컴포넌트 읽어오는부분) */}
            <div className="modalOk-content">
              {children}
              <div>
                <ModalOkBtn onClick={onConfirm}>확인</ModalOkBtn>
              </div>
            </div>
          </div>
        )}
      </div>
    </OkModalWarp>
  );
};

export default OkModal;
