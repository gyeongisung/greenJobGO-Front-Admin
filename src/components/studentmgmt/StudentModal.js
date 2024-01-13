import React, { useState } from "react";
import { DeleteModalWrap } from "../../styles/DeleteModalStyle";
import {
  PortFolioAddWrap,
  StudentAcceptModalWrap,
} from "../../styles/ModalStyle";
import { ko } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";
import { deleteStudent } from "../../api/studentAxios";

export const DeleteStudnetModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  saveCheckBox,
  setListData,
  setSaveCheckBox,
}) => {
  const handleDeleteCompany = async () => {
    const checkedstudent = saveCheckBox;

    try {
      await deleteStudent(checkedstudent);

      setListData(prevListData =>
        prevListData.filter(item => !checkedstudent.includes(item.istudent)),
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
                <span onClick={closeModal}>✖</span>
              </div>
              <div className="content">
                <span>해당 수강생을 삭제 하시겠습니까?</span>
              </div>
              <div className="btns">
                <button onClick={closeModal}>취소</button>
                <button onClick={handleOk}>확인</button>
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

export const PortFolioAdd = () => {
  return (
    <PortFolioAddWrap>
      <div>
        <div className="modal-top">
          <h2>포트폴리오 추가</h2>
          <span>✖</span>
        </div>
        <div className="modal=btm">
          <ul>
            <li>
              <input
                type="radio"
                id="student"
                name="role"
                value="ROLE_USER"
                // checked={userType === "ROLE_USER"}
                // onChange={handleUserTypeChange}
              />
              <label htmlFor="student">파일추가</label>
              <input
                type="radio"
                id="company"
                name="role"
                value="ROLE_COMPANY"
                // checked={userType === "ROLE_COMPANY"}
                // onChange={handleUserTypeChange}
              />
              <label htmlFor="company">링크추가</label>
            </li>
            <li>
              <input
                type="file"
                id="file"
                accept=".xlsx, .xls, .csv"
                // onChange={handleFileChange}
              />
              <label htmlFor="file">파일첨부</label>
              <input
                className="upload-name"
                // value={selectedFile ? selectedFile.name : "첨부파일"}
                placeholder="첨부파일"
                readOnly
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="포트폴리오 소개 내용을 작성해주세요.(최대 150자)"
              />
            </li>
            <li>
              <span>
                *포트폴리오 파일은 최대 5개까지 등록 가능하며, 한번에 1개의
                파일만 등록 가능합니다.
              </span>
              <span>*파일 용량은 최대 50MB까지만 첨부 가능합니다.</span>
            </li>
            <li>
              <button>등록</button>
            </li>
          </ul>
        </div>
      </div>
    </PortFolioAddWrap>
  );
};
