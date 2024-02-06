import React, { useState } from "react";
import { JobManagerBoxWrap } from "../../styles/JobmanagerStyle";
import NoImage from "../../assets/NoImage.jpg";
import ManagerEdit from "./ManagerEdit";
import InputModal from "../InputModal";
import {
  deleteJobManagerInfo,
} from "../../api/jobMngAxiois";
import ConfirmModal from "../ConfirmModal";

const ManagerBox = ({
  mngProflieData,
  setmngProflieData,
  updateData,
  setErrorApiInfo,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteNum, setDeleteNum] = useState("");

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // 수정하기
  const handleEdit = async item => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  // 삭제하기
  const handleDeleteConfirm = async () => {
    try {
      await deleteJobManagerInfo(deleteNum, setErrorApiInfo);
      await updateData();
      setConfirmModalOpen(false);
    } catch (error) {
      console.error("취업 담당자 등록 에러:", error);
    }
  };
  const handleDelete = item => {
    setDeleteNum(item);
    setConfirmModalOpen(true);
  };

  return (
    <JobManagerBoxWrap>
      {mngProflieData &&
        mngProflieData?.map(item => (
          <div className="manager-profile" key={item.iemply}>
            <img
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
                <button
                  className="del-btn"
                  onClick={() => {
                    handleDelete(item.iemply);
                  }}
                >
                  삭제
                </button>
              </li>
              <li>
                <button className="edit-btn" onClick={() => handleEdit(item)}>
                  수정
                </button>
              </li>
            </ul>
          </div>
        ))}
      {modalOpen && (
        <InputModal
          open={modalOpen}
          close={() => setModalOpen(false)}
          header="취업 담당자 수정"
        >
          <ManagerEdit
            item={selectedItem}
            setEditModalOpen={setModalOpen}
            mngProflieData={mngProflieData}
            setmngProflieData={setmngProflieData}
            updateData={updateData}
            setErrorApiInfo={setErrorApiInfo}
          />
        </InputModal>
      )}
      {/* 삭제 확인 모달 */}
      {confirmModalOpen && (
        <ConfirmModal
          open={confirmModalOpen}
          close={() => setConfirmModalOpen(false)}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setConfirmModalOpen(false)}
        >
          <span>항목을 삭제 하시겠습니까?</span>
        </ConfirmModal>
      )}
      {mngProflieData && mngProflieData.length === 0 && (
        <div>취업담당자의 정보를 등록해주세요</div>
      )}

    </JobManagerBoxWrap>
  );
};

export default ManagerBox;
