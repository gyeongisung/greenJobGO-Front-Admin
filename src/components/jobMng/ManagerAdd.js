import React, { useState } from "react";
import { JobManagerAddSty } from "../../styles/JobmanagerStyle";
import {
  BtnGlobal,
  ModalCancelBtn,
  ModalOkBtn,
} from "../../styles/GlobalStyle";
import ConfirmModal from "../ConfirmModal";

const ManagerAdd = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleConfirm = () => {
    setModalOpen(false); // 모달을 닫습니다.
  };
  return (
    <JobManagerAddSty>
      <ul>
        <li>
          <h3>이름</h3>
          <input type="text" placeholder="이름"></input>
        </li>
        <li>
          <h3>한 줄 소개</h3>
          <input
            type="text"
            placeholder="소개문구를 작성해주세요. (최대 20자)"
          ></input>
        </li>
        <li>
          <h3>상담전화</h3>
          <input type="text" placeholder="상담전화"></input>
        </li>
        <li>
          <h3>모바일</h3>
          <input type="text" placeholder="모바일"></input>
        </li>
        <li className="email-input">
          <h3>이메일</h3>
          <input type="text" placeholder="이메일"></input>
        </li>
        <li className="photo-upload">
          <h3>프로필 이미지</h3>
          {/* <div className="upload-area"> */}
          <input
            type="file"
            name="file"
            id="file"
            accept="image/gif,image/jpeg,image/png"
            placeholder="JPG,PNG,JPEG,GIF 파일 첨부"
          />
          {/* </div> */}
          <p>*프로필 이미지를 등록해주세요.</p>
        </li>
      </ul>
      <div className="add-accept">
        <BtnGlobal onClick={openModal}>등록</BtnGlobal>
        <ConfirmModal open={modalOpen} close={closeModal}>
          <div className="add-recheck-content">
            <span>항목을 삭제하시겠습니까?</span>
            <div>
              <ModalCancelBtn onClick={closeModal}>취소</ModalCancelBtn>
              <ModalOkBtn onClick={handleConfirm}>확인</ModalOkBtn>
            </div>
          </div>
        </ConfirmModal>
      </div>
    </JobManagerAddSty>
  );
};

export default ManagerAdd;
