import React, { useState } from "react";
import { DeleteModalWrap } from "../../styles/DeleteModalStyle";
import {
  PortFolioAddWrap,
  StudentAcceptModalWrap,
} from "../../styles/ModalStyle";
import { ko } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";
import { deleteStudent } from "../../api/studentAxios";
import { ExcelUploadModalWrap } from "../../styles/ExcelUploadStyle";

export const DeleteStudnetModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  saveCheckBox,
  setListData,
  setSaveCheckBox,
  fetchData,
}) => {
  const handleDeleteCompany = async () => {
    const checkedstudent = saveCheckBox;

    try {
      await deleteStudent(checkedstudent);

      setListData(prevListData =>
        prevListData.filter(item => !checkedstudent.includes(item.istudent)),
      );

      setSaveCheckBox([]);
      fetchData();
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

export const StudentExcelUploadModal = ({
  excelModalOpen,
  setExcelModalOpen,
  handleExcelUpload,
  selectedFile,
  setSelectedFile,
}) => {
  const handleFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };
  const handleCancel = () => {
    setExcelModalOpen(false);
  };
  return (
    <>
      {excelModalOpen && (
        <ExcelUploadModalWrap>
          <div className="dim">
            <div className="modal-inner">
              <ul className="modal-top">
                <li>
                  <h2>엑셀 업로드</h2>
                </li>
                <li>
                  <span onClick={handleCancel}>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                      alt="X"
                    />
                  </span>
                </li>
              </ul>
              <div className="content">
                <h3>수강생 등록</h3>
                <div>
                  <span>
                    엑셀을 업로드하여 다수의 수강생 정보를 한번에 입력할 수
                    있습니다.
                    <br />
                    양식에 맞춰 정보를 입력한 뒤 업로드해주세요.
                  </span>
                </div>
              </div>
              <div className="file-box">
                <input
                  type="file"
                  id="file"
                  accept=".xlsx, .xls, .csv"
                  onChange={handleFileChange}
                />
                <label htmlFor="file">파일첨부</label>
                <input
                  className="upload-name"
                  value={selectedFile ? selectedFile.name : "첨부파일"}
                  placeholder="xlsx 파일 첨부"
                  readOnly
                />
              </div>
              <div className="btn">
                <button onClick={e => handleExcelUpload(e.target.files)}>
                  확인
                </button>
              </div>
            </div>
          </div>
        </ExcelUploadModalWrap>
      )}
    </>
  );
};

export const DeleteSingleStudentModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  handleDelete,
}) => {
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
                <button onClick={handleDelete}>확인</button>
              </div>
            </div>
          </div>
        </DeleteModalWrap>
      )}
    </>
  );
};

export const PortFolioAdd = ({
  modalOpen,
  handlePofolModalCancel,
  iFile,
  setIFile,
  selectedFile,
  setSelectedFile,
  description,
  setDescription,
  linkUrl,
  setLinkUrl,
  handleFileUpload,
}) => {
  const handleDescriptionChange = e => {
    const inputText = e.target.value;

    const limitedText = inputText.slice(0, 150);
    setDescription(limitedText);
  };

  const handleFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <PortFolioAddWrap>
      {modalOpen && (
        <div className="dim">
          <div className="add-modal-inner">
            <div className="add-modal-top">
              <div>
                <h2>포트폴리오 추가</h2>
              </div>
              <div>
                <span onClick={handlePofolModalCancel}>✖</span>
              </div>
            </div>
            <ul className="add-modal-btm">
              <li className="radio-box">
                <input
                  type="radio"
                  id="fileTypeFile"
                  name="fileType"
                  value={2}
                  checked={iFile === 2}
                  onChange={() => setIFile(2)}
                />
                <label htmlFor="fileTypeFile">파일추가</label>
                <input
                  type="radio"
                  id="fileTypeLink"
                  name="fileType"
                  value={3}
                  checked={iFile === 3}
                  onChange={() => setIFile(3)}
                />
                <label htmlFor="fileTypeLink">링크추가</label>
              </li>
              {iFile === 2 ? (
                <>
                  <li className="file-box">
                    <input
                      type="file"
                      id="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="file">파일첨부</label>
                    <input
                      className="upload-name"
                      value={selectedFile ? selectedFile.name : "첨부파일"}
                      placeholder="PDF 첨부파일"
                      readOnly
                    />
                  </li>
                  <li>
                    <textarea
                      cols="30"
                      rows="5"
                      placeholder="포트폴리오 소개 내용을 작성해주세요.(최대 150자)"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </li>
                  <li>
                    <span>
                      *포트폴리오 파일은 최대 5개까지 등록 가능하며, 한번에
                      1개의 파일만 등록 가능합니다.
                    </span>
                    <span>*파일 용량은 최대 50MB까지만 첨부 가능합니다.</span>
                  </li>
                </>
              ) : iFile === 3 ? (
                <>
                  <li className="file-box">
                    <input
                      className="upload-link"
                      placeholder="포트폴리오 링크주소를 입력해주세요."
                      value={linkUrl}
                      onChange={e => setLinkUrl(e.target.value)}
                    />
                  </li>
                  <li>
                    <textarea
                      cols="30"
                      rows="5"
                      placeholder="포트폴리오 소개 내용을 작성해주세요.(최대 150자)"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </li>
                  <li>
                    <span>
                      *포트폴리오 링크는 최대 5개까지 등록 가능하며, 한번에
                      1개의 링크만 등록 가능합니다.
                    </span>
                  </li>
                </>
              ) : null}
              <li>
                <button onClick={handleFileUpload}>등록</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </PortFolioAddWrap>
  );
};
