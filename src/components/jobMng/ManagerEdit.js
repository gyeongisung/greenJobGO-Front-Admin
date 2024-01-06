import React, { useEffect, useState } from "react";
import { JobManagerAddSty } from "../../styles/JobmanagerStyle";
import {
  BtnGlobal,
  ConfirmModalContent,
  ModalCancelBtn,
  ModalOkBtn,
} from "../../styles/GlobalStyle";
import { getJobManagerInfo, patchManagerEdit } from "../../api/jobMngAxiois";
import ConfirmModal from "../ConfirmModal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ManagerEdit = ({
  item,
  setEditModalOpen,
  mngProflieData,
  setmngProflieData,
}) => {
  const [editManager, setEditManager] = useState(item);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectImg, setSelectImg] = useState();
  const [isImg, setIsImg] = useState(item.profilePic);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // 쿼리 주소를 변환하자
  const makeUrl = () => {
    let query = "";

    if (item.name !== editManager.name) {
      query += `name=${editManager.name}&`;
    }
    if (item.oneWord !== editManager.oneWord) {
      query += `oneWord=${editManager.oneWord}&`;
    }
    if (item.counselingNumber !== editManager.counselingNumber) {
      query += `counselingNumber=${editManager.counselingNumber}&`;
    }
    if (item.phoneNumber !== editManager.phoneNumber) {
      query += `phone=${editManager.phoneNumber}&`;
    }
    if (item.email !== editManager.email) {
      query += `email=${editManager.email}&`;
    }
    if (query.endsWith("&")) {
      query = query.slice(0, -1);
    }
    return query;
  };

  const handleEditOK = async () => {
    setModalOpen(true);
  };

  // 이미지업로드
  const handleImageUpload = (e, fieldName) => {
    e.preventDefault();
    const file = e.target.files[0];
    setSelectImg(file);
  };

  //이미지 수정
  const handleImgDel = () => {
    setIsImg("");
  };

  const handleInfoEdit = (e, fieldName) => {
    setEditManager({ ...editManager, [fieldName]: e.target.value });
  };

  // 수정 재확인
  const handleConfirm = async () => {
    const formData = new FormData();
    formData.append("pic", selectImg);
    const query = makeUrl();
    try {
      await patchManagerEdit({ formData, editManager, query });
      await updateData();
      setEditModalOpen(false);
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
            value={editManager.name}
            onChange={e => handleInfoEdit(e, "name")}
          />
        </li>
        <li>
          <h3>한 줄 소개</h3>
          <input
            type="text"
            placeholder="소개문구를 작성해주세요. (최대 20자)"
            value={editManager.oneWord}
            onChange={e => handleInfoEdit(e, "oneWord")}
          />
        </li>
        <li>
          <h3>상담전화</h3>
          <input
            type="text"
            placeholder="상담전화"
            value={editManager.counselingNumber}
            onChange={e => handleInfoEdit(e, "counselingNumber")}
          />
        </li>
        <li>
          <h3>모바일</h3>
          <input
            type="text"
            placeholder="모바일"
            value={editManager.phoneNumber}
            onChange={e => handleInfoEdit(e, "phoneNumber")}
          />
        </li>
        <li className="email-input">
          <h3>이메일</h3>
          <input
            type="text"
            placeholder="이메일"
            value={editManager.email}
            onChange={e => handleInfoEdit(e, "email")}
          />
        </li>
        <li className="photo-upload">
          <h3>프로필 이미지</h3>
          {isImg ? (
            <div className="file-edit-wrap">
              <span className="isFile">{isImg}</span>
              <button onClick={handleImgDel}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          ) : (
            <input
              type="file"
              name="job-mng-img"
              id="job-img-upload"
              accept="image/gif,image/jpeg,image/jpg,image/png"
              onChange={handleImageUpload}
            />
          )}
          <p>*프로필 이미지를 등록해주세요.</p>
        </li>
      </ul>
      <div className="add-accept">
        <BtnGlobal onClick={handleEditOK}> 수정 </BtnGlobal>
        <ConfirmModal open={modalOpen} close={closeModal}>
          <ConfirmModalContent>
            <span>항목을 수정 하시겠습니까?</span>
            <div>
              <ModalCancelBtn onClick={closeModal}>취소</ModalCancelBtn>
              <ModalOkBtn onClick={handleConfirm}>확인</ModalOkBtn>
            </div>
          </ConfirmModalContent>
        </ConfirmModal>
      </div>
    </JobManagerAddSty>
  );
};

export default ManagerEdit;
