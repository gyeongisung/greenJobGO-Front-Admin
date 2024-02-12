import React from "react";
import { ModalWarp } from "../styles/GlobalStyle";

const InputModal = ({ open, close, header, children }) => {
  return (
    <ModalWarp>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <div className="modal-wrapper">
            {/* 헤더내용 */}
            <div className="modal-header">
              {header}
              <p className="close" onClick={close}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                  alt="X"
                />
              </p>
            </div>
            {/* 모달내용(컴포넌트 읽어오는부분) */}
            <div className="modal-content">{children}</div>
          </div>
        ) : null}
      </div>
    </ModalWarp>
  );
};

export default InputModal;
