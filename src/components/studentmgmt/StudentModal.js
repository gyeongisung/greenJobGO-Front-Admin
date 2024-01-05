import React, { useState } from "react";
import { DeleteModalWrap } from "../../styles/DeleteModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { StudentAcceptModalWrap } from "../../styles/ModalStyle";
import { ko } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";

export const DeleteStudnetModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  saveCheckBox,
  setListData,
  setSaveCheckBox,
}) => {
  const handleDeleteCompany = async () => {
    const checkedCompanyCode = saveCheckBox;

    try {
      // await deleteCompany(checkedCompanyCode);

      setListData(prevListData =>
        prevListData.filter(
          item => !checkedCompanyCode.includes(item.companyCode),
        ),
      );

      setSaveCheckBox([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOk = async () => {
    await handleDeleteCompany();
    setDeleteModalOpen(false);
  };

  const closeModal = () => {
    setDeleteModalOpen(false);
  };

  return (
    <>
      {deleteModalOpen && (
        <DeleteModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <FontAwesomeIcon
                  icon={faExclamation}
                  className="warning-icon"
                />
              </div>
              <div className="content">
                <span>선택하신 기업을 삭제 하시겠습니까?</span>
                <span>삭제하신 기업은 영구 삭제되어 복구할 수 없습니다.</span>
              </div>
              <div className="btns">
                <button onClick={handleOk}>확인</button>
                <button onClick={closeModal}>취소</button>
              </div>
            </div>
          </div>
        </DeleteModalWrap>
      )}
    </>
  );
};

export const StudentModal = ({ modalOpen, setModalOpen }) => {
  const [payload, setPayload] = useState({
    area: "",
    companyName: "",
    leaderName: "",
    jobField: "",
    manger: "",
    phoneNumber: "",
    dateConslusion: "",
  });

  const handleModalCancel = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleModalAccept = () => {
    // postCompanyAccept(payload);
    setModalOpen(false);
  };
  console.log(payload);
  return (
    <>
      {modalOpen && (
        <StudentAcceptModalWrap>
          <div className="dim">
            <div className="student-modal-inner">
              <ul className="modal-top">
                <li>
                  <h2>수강생 등록</h2>
                </li>
                <li>
                  <span onClick={handleModalCancel}>✖</span>
                </li>
              </ul>
              <div className="modal-btm">
                <div className="student-category">
                  <h3>대분류</h3>
                  <div className="student-category-box">
                    <select
                      name="category-state"
                      onChange={e => {
                        setPayload(payload => ({
                          ...payload,
                          classification: e.target.value,
                        }));
                      }}
                    >
                      <option name="category-state" value="선택">
                        선택
                      </option>
                      <option name="category-state" value="IT 분야">
                        IT 분야
                      </option>
                      <option name="category-state" value="건축기계 분야">
                        건축기계 분야
                      </option>
                      <option name="category-state" value="UIUX 분야">
                        UI/UX 분야
                      </option>
                      <option name="category-state" value="빅데이터 분야">
                        빅데이터 분야
                      </option>
                      <option name="category-state" value="영상 분야">
                        영상 분야
                      </option>
                      <option name="category-state" value="편집디자인 분야">
                        편집디자인 분야
                      </option>
                    </select>
                  </div>
                </div>
                <ul>
                  <li>
                    <div>
                      <h3>과정명</h3>
                      <input
                        type="text"
                        value={payload.courseSubjectName}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            courseSubjectName: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </li>
                  <li className="date-picker-wrap">
                    <div>
                      <h3>수강기간</h3>
                    </div>
                    <div>
                      <ReactDatePicker
                        className="date-picker"
                        locale={ko}
                        selected={payload.startedAt}
                        dateFormat="yyyy년 MM월 dd일"
                        startDate={payload.startedAt}
                        endDate={payload.endedAt}
                        selectsStart
                        onChange={value => {
                          setPayload(payload => ({
                            ...payload,
                            startedAt: value,
                          }));
                        }}
                      />
                      <ReactDatePicker
                        className="date-picker"
                        locale={ko}
                        selected={payload.endedAt}
                        dateFormat="yyyy년 MM월 dd일"
                        startDate={payload.startedAt}
                        endDate={payload.endedAt}
                        selectsEnd
                        minDate={payload.startedAt}
                        onChange={date => {
                          setPayload(payload => ({
                            ...payload,
                            endedAt: date,
                          }));
                        }}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>이름</h3>
                      <input
                        type="text"
                        value={payload.instructor}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            instructor: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div>
                      <h3>성별</h3>
                      <input
                        type="text"
                        value={payload.lectureRoom}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            lectureRoom: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="modal-ok">
                <button onClick={handleModalAccept}>등록</button>
              </div>
            </div>
          </div>
        </StudentAcceptModalWrap>
      )}
    </>
  );
};
