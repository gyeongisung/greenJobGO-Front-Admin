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
  const [deleteNum, setDeleteNum] = useState("");

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
    console.log("수정모달열림", item);
    setSelectedItem(item);
    setModalOpen(true);
  };

  // 삭제하기
  const handleDeleteConfirm = async () => {
    console.log("삭제확인누름");
    console.log("삭제확인, 몇번?", deleteNum);

    try {
      await deleteJobManagerInfo(deleteNum);
      await updateData();
      setConfirmModalOpen(false);
    } catch (error) {
      console.error("취업 담당자 등록 에러:", error);
    }
  };
  const handleDelete = item => {
    console.log("삭제할래?", item);
    setDeleteNum(item);
    setConfirmModalOpen(true);
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
    <JobManagerBoxWrap>
      {mngProflieData?.map(item => (
        <div className="manager-profile" key={item.iemply}>
          <img
            // src={`/home/download/Employee/${item.iemply}/${item.profilePic}`}
            src={`${item.profilePic}`}
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
                  mngProflieData={mngProflieData}
                  setmngProflieData={setmngProflieData}
                />
              </InputModal>
            </li>
            <li>
              <button
                className="del-btn"
                onClick={() => {
                  handleDelete(item.iemply);
                }}
              >
                삭제
              </button>
            </li>
          </ul>
        </div>
      ))}
      {/* 확인모달 */}
      <ConfirmModal open={confirmModalOpen} close={closeConfirmModal}>
        <div className="add-recheck-content">
          <span>항목을 삭제 하시겠습니까?</span>
          <div>
            <ModalCancelBtn onClick={closeConfirmModal}>취소</ModalCancelBtn>
            <ModalOkBtn onClick={() => handleDeleteConfirm()}>확인</ModalOkBtn>
          </div>
        </div>
      </ConfirmModal>
      {mngProflieData && mngProflieData.length === 0 && (
        <div>취업담당자의 정보를 등록해주세요</div>
      )}
    </JobManagerBoxWrap>
  );
};

export default ManagerBox;
