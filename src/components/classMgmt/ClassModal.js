import { useState } from "react";
import { ClassAcceptModalWrap } from "../../styles/ModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { DeleteModalWrap } from "../../styles/DeleteModalStyle";
import { deleteClassSubject, postClassSubject } from "../../api/classAxios";
import { ko } from "date-fns/locale";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export const DeleteClassModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  saveCheckBox,
  setListData,
  setSaveCheckBox,
}) => {
  const handleDeleteSubject = async () => {
    const checkedSubjectCode = saveCheckBox;

    try {
      await deleteClassSubject(checkedSubjectCode);

      setListData(prevListData =>
        prevListData.filter(
          item => !checkedSubjectCode.includes(item.icourseSubject),
        ),
      );

      setSaveCheckBox([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOk = async () => {
    await handleDeleteSubject();
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
                <span>선택하신 수강 과정을 삭제 하시겠습니까?</span>
                <span>
                  삭제하신 수강 과정은 영구 삭제되어 복구할 수 없습니다.
                </span>
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

export const ClassAcceptModal = ({ modalOpen, setModalOpen }) => {
  const [payload, setPayload] = useState({
    courseSubjectName: "",
    classification: "",
    startedAt: "",
    endedAt: "",
    instructor: "",
    lectureRoom: "",
  });

  const handleModalCancel = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleModalAccept = () => {
    const formatData = {
      ...payload,
      startedAt: payload.startedAt
        ? format(payload.startedAt, "yyyy-MM-dd")
        : null,
      endedAt: payload.endedAt ? format(payload.endedAt, "yyyy-MM-dd") : null,
    };
    postClassSubject(formatData);
    setModalOpen(false);
  };
  return (
    <>
      {modalOpen && (
        <ClassAcceptModalWrap>
          <div className="dim">
            <div className="class-modal-inner">
              <ul className="modal-top">
                <li>
                  <h2>과정 등록</h2>
                </li>
                <li>
                  <span onClick={handleModalCancel}>✖</span>
                </li>
              </ul>
              <div className="modal-btm">
                <div className="class-category">
                  <h3>대분류</h3>
                  <div className="class-category-box">
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
                        showIcon
                        icon="fa fa-calendar"
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
                      <h3>강사명</h3>
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
                      <h3>강의실</h3>
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
        </ClassAcceptModalWrap>
      )}
    </>
  );
};


export const ClassEditModal = ({ modalOpen, setModalOpen }) => {
  const [payload, setPayload] = useState({
    courseSubjectName: "",
    classification: "",
    startedAt: "",
    endedAt: "",
    instructor: "",
    lectureRoom: "",
  });

  const handleModalCancel = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleModalAccept = () => {
    const formatData = {
      ...payload,
      startedAt: payload.startedAt
        ? format(payload.startedAt, "yyyy-MM-dd")
        : null,
      endedAt: payload.endedAt ? format(payload.endedAt, "yyyy-MM-dd") : null,
    };
    postClassSubject(formatData);
    setModalOpen(false);
  };
  return (
    <>
      {modalOpen && (
        <ClassAcceptModalWrap>
          <div className="dim">
            <div className="class-modal-inner">
              <ul className="modal-top">
                <li>
                  <h2>과정 등록</h2>
                </li>
                <li>
                  <span onClick={handleModalCancel}>✖</span>
                </li>
              </ul>
              <div className="modal-btm">
                <div className="class-category">
                  <h3>대분류</h3>
                  <div className="class-category-box">
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
                        showIcon
                        icon="fa fa-calendar"
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
                      <h3>강사명</h3>
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
                      <h3>강의실</h3>
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
        </ClassAcceptModalWrap>
      )}
    </>
  );
};
