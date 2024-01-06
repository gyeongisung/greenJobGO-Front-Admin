import React, { useEffect, useState } from "react";
import { JobManagerAddSty } from "../../styles/JobmanagerStyle";
import {
  BtnGlobal,
  ModalCancelBtn,
  ModalOkBtn,
} from "../../styles/GlobalStyle";
import ConfirmModal from "../ConfirmModal";
import { getJobManagerInfo, postManagerInfo } from "../../api/jobMngAxiois";

const ManagerAdd = ({ setAddModalOpen, mngProflieData, setmngProflieData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectImg, setSelectImg] = useState();
  const [addInfo, setAddInfo] = useState({
    name: "",
    oneWord: "",
    counselingNumber: "",
    phoneNumber: "",
    email: "",
  });
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleImageUpload = e => {
    e.preventDefault();
    const file = e.target.files[0];
    setSelectImg(file);
  };

  const handleInfoAdd = (e, fieldName) => {
    setAddInfo({ ...addInfo, [fieldName]: e.target.value });
  };

  const handleConfirm = async () => {
    const formData = new FormData();
    formData.append("pic", selectImg);
    formData.append("name", addInfo.name);
    formData.append("oneWord", addInfo.oneWord);
    formData.append("counselingNumber", addInfo.counselingNumber);
    formData.append("phoneNumber", addInfo.phoneNumber);
    formData.append("email", addInfo.email);

    try {
      await postManagerInfo(formData);
      await setModalOpen(false);
      await updateData();
      await setAddModalOpen(false);
    } catch (error) {
      console.error("취업 담당자 등록 에러:", error);
    }
  };
  // 변경있을때마다 자료 새로고침
  const updateData = async () => {
    try {
      const newData = await getJobManagerInfo(setmngProflieData);
    } catch (error) {
      console.error("데이터 업데이트 에러:", error);
    }
  };

  useEffect(() => {
    if (mngProflieData !== undefined) {
      console.log("mngProflieData가 변경됨:", mngProflieData);
    }
  }, [mngProflieData]);
  return (
    <JobManagerAddSty>
      <ul>
        <li>
          <h3>이름</h3>
          <input
            type="text"
            placeholder="이름"
            value={addInfo.name}
            onChange={e => handleInfoAdd(e, "name")}
          ></input>
        </li>
        <li>
          <h3>한 줄 소개</h3>
          <input
            type="text"
            placeholder="소개문구를 작성해주세요. (최대 20자)"
            value={addInfo.oneWord}
            onChange={e => handleInfoAdd(e, "oneWord")}
          ></input>
        </li>
        <li>
          <h3>상담전화</h3>
          <input
            type="text"
            placeholder="상담전화"
            value={addInfo.counselingNumber}
            onChange={e => handleInfoAdd(e, "counselingNumber")}
          ></input>
        </li>
        <li>
          <h3>모바일</h3>
          <input
            type="text"
            placeholder="모바일"
            value={addInfo.phoneNumber}
            onChange={e => handleInfoAdd(e, "phoneNumber")}
          ></input>
        </li>
        <li className="email-input">
          <h3>이메일</h3>
          <input
            type="text"
            placeholder="이메일"
            value={addInfo.email}
            onChange={e => handleInfoAdd(e, "email")}
          ></input>
        </li>
        <li className="photo-upload">
          <h3>프로필 이미지</h3>
          {/* <div className="upload-area"> */}
          <input
            type="file"
            name="job-mng-img"
            id="job-img-upload"
            accept="image/gif,image/jpeg,image/jpg,image/png"
            placeholder="JPG,PNG,JPEG,GIF 파일 첨부"
            onChange={handleImageUpload}
          />
          {/* </div> */}
          <p>*프로필 이미지를 등록해주세요.</p>
        </li>
      </ul>
      <div className="add-accept">
        <BtnGlobal onClick={openModal}>등록</BtnGlobal>
        <ConfirmModal open={modalOpen} close={closeModal}>
          <div className="add-recheck-content">
            <span>항목을 등록 하시겠습니까?</span>
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
