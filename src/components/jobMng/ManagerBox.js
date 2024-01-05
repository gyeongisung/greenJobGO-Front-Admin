import React, { useEffect, useState } from "react";
import { JobManagerBoxWrap } from "../../styles/JobmanagerStyle";
import NoImage from "../../assets/NoImage.jpg";
import ManagerEdit from "./ManagerEdit";
import InputModal from "../InputModal";
import {
  deleteJobManagerInfo,
  getJobManagerInfo,
} from "../../api/jobMngAxiois";
import { ModalCancelBtn, ModalOkBtn } from "../../styles/GlobalStyle";
import ConfirmModal from "../ConfirmModal";

const ManagerBox = ({ mngProflieData, setmngProflieData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  //수정 모달 닫음
  const closeModal = () => {
    setModalOpen(false);
  };

  //확인 모달 닫음
  const closeConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  // 수정하기
  const handleEdit = async item => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  // 삭제하기
  const handleConfirm = async item => {
    try {
      await deleteJobManagerInfo(item.iemply);
      setConfirmModalOpen(false);
      updateData();
    } catch (error) {
      console.error("취업 담당자 등록 에러:", error);
    }
  };
  const handleDelete = item => {
    setConfirmModalOpen(true);
  };

  // 변경있을때마다 자료 새로고침
  const updateData = async () => {
    try {
      const newData = await getJobManagerInfo();
      setmngProflieData(newData);
      console.log("데이터 업데이트 성공:", mngProflieData);
    } catch (error) {
      console.error("데이터 업데이트 에러:", error);
    }
  };
  console.log("mngProflieData", mngProflieData);
  return (
    <JobManagerBoxWrap>
      {mngProflieData?.map(item => (
        <div className="manager-profile" key={item.iemply}>
          <img
            src={`/home/download/Employee/${item.iemply}/${item.profilePic}`}
            alt="job manager"
            onError={onImgError}
            className="manager-img"
          />
          <div className="manager-details">
            <p className="manager-word">{item.oneWord}</p>
            <p className="manager-name">{item.name} 취업지원실장</p>
            <ul className="manager-contact">
              <li>
                <span>상담전화</span>
                <span>{item.counselingNumber}</span>
              </li>
              <li>
                <span>모바일</span>
                <span>{item.phoneNumber}</span>
              </li>
              <li>
                <span>이메일</span>
                <span>{item.email}</span>
              </li>
            </ul>
          </div>
          <ul className="btn-group">
            <li>
              <button className="edit-btn" onClick={() => handleEdit(item)}>
                수정
              </button>
              <InputModal
                open={modalOpen}
                close={closeModal}
                header="취업 담당자 수정"
              >
                <ManagerEdit
                  item={selectedItem}
                  setEditModalOpen={setModalOpen}
                  setmngProflieData={setmngProflieData}
                />
              </InputModal>
            </li>
            <li>
              <button
                className="del-btn"
                onClick={() => {
                  handleDelete(item);
                }}
              >
                삭제
              </button>
              <ConfirmModal open={confirmModalOpen} close={closeConfirmModal}>
                <div className="add-recheck-content">
                  <span>항목을 등록 하시겠습니까?</span>
                  <div>
                    <ModalCancelBtn onClick={closeConfirmModal}>
                      취소
                    </ModalCancelBtn>
                    <ModalOkBtn onClick={() => handleConfirm(item)}>
                      확인
                    </ModalOkBtn>
                  </div>
                </div>
              </ConfirmModal>
            </li>
          </ul>
        </div>
      ))}
      {mngProflieData && mngProflieData.length === 0 && (
        <div>취업담당자의 정보를 등록해주세요</div>
      )}
    </JobManagerBoxWrap>
  );
};

export default ManagerBox;
