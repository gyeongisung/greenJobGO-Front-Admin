import { useEffect, useState } from "react";
import {
  ClassAcceptModalWrap,
  EnrollCategoryWrap,
} from "../../styles/ModalStyle";
import { DeleteModalWrap } from "../../styles/DeleteModalStyle";
import {
  deleteClassSubject,
  postClassSubject,
  putClassSubject,
} from "../../api/classAxios";
// import ReactDatePicker from "react-datepicker";
// import { format, formatISO, parseISO } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { AcceptModal, DeleteAceeptModal } from "../AcceptModals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { getBigcate } from "../../api/portfolioAxios";
import { ConfigProvider, DatePicker, Space } from "antd";
import dayjs from "dayjs";
import locale from "antd/lib/locale/ko_KR";
import { Maincolor } from "../../styles/GlobalStyle";

export const DeleteClassModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  saveCheckBox,
  setListData,
  setSaveCheckBox,
  fetchData,
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
      fetchData();
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
                <span onClick={closeModal}>✖</span>
              </div>
              <div className="content">
                <span>해당 훈련과정을 삭제 하시겠습니까?</span>
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

export const ClassAcceptModal = ({
  modalOpen,
  setModalOpen,
  payload,
  setPayload,
  handleModalAccept,
  categoryData,
  cateError,
  subjectError,
  startDateError,
  endDateError,
  teacherError,
  roundError,
  classTimeError,
  classroomError,
}) => {
  const dateFormat = "YYYY-MM-DD";
  const disabledDate = current => {
    return current < dayjs(payload.startedAt).startOf("day");
  };

  const handleModalCancel = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };
  const onStartRangeChange = (date, dateStrings) => {
    setPayload(payload => ({
      ...payload,
      startedAt: dateStrings ? dateStrings : null,
    }));
  };
  const onEndRangeChange = (date, dateStrings) => {
    setPayload(payload => ({
      ...payload,
      endedAt: dateStrings ? dateStrings : null,
    }));
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
                  <span onClick={handleModalCancel}>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                      alt="X"
                    />
                  </span>
                </li>
              </ul>
              <div className="modal-btm">
                <ul>
                  <li>
                    <div>
                      <h3>대분류</h3>
                      <div className="class-category-box select-wrap">
                        <select
                          name="category-state"
                          onChange={e => {
                            setPayload(payload => ({
                              ...payload,
                              iclassification: e.target.value,
                            }));
                          }}
                        >
                          <option name="category-state" value="선택">
                            선택
                          </option>
                          {categoryData &&
                            categoryData.map((item, index) => (
                              <option
                                key={item.index}
                                name="category-state"
                                value={item.iclassification}
                              >
                                {item.classification}
                              </option>
                            ))}
                        </select>
                        {cateError ? (
                          <p className="error-class">{cateError}</p>
                        ) : (
                          <p className="error-class"></p>
                        )}
                      </div>
                    </div>
                    <div className="class-name">
                      <h3>과정명</h3>
                      <input
                        type="text"
                        maxLength={70}
                        value={payload.courseSubjectName}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            courseSubjectName: e.target.value,
                          }));
                        }}
                      />{" "}
                      {subjectError ? (
                        <p className="error-class">{subjectError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
                    </div>
                  </li>
                  <li className="date-picker-wrap">
                    <div>
                      <h3>수강기간</h3>
                    </div>
                    <div>
                      <ConfigProvider
                        locale={locale}
                        theme={{
                          token: {
                            colorPrimary: `${Maincolor.black}`,
                            colorBorder: `${Maincolor.input}`,
                          },
                        }}
                      >
                        <Space direction="horizonal" size={15}>
                          <DatePicker
                            style={{
                              width: "295px",
                              height: "40px",
                              borderRadius: "4px",
                              marginRight: "5px",
                            }}
                            format={dateFormat}
                            onChange={onStartRangeChange}
                            placeholder={"시작 날짜"}
                          />
                          <DatePicker
                            style={{
                              width: "295px",
                              height: "40px",
                              borderRadius: "4px",
                            }}
                            format={dateFormat}
                            disabledDate={disabledDate}
                            onChange={onEndRangeChange}
                            placeholder={"종료 날짜"}
                          />
                        </Space>
                      </ConfigProvider>
                      {/* <ReactDatePicker
                        className="date-picker"
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
                      /> */}
                      <div className="date-error">
                        {startDateError ? (
                          <p className="error-class">{startDateError}</p>
                        ) : (
                          <p className="error-class"></p>
                        )}
                        {endDateError ? (
                          <p className="error-class">{endDateError}</p>
                        ) : (
                          <p className="error-class"></p>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>수강시간</h3>
                      <input
                        type="number"
                        maxLength={10}
                        value={payload.classTime}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            classTime: e.target.value,
                          }));
                        }}
                      />{" "}
                      {classTimeError ? (
                        <p className="error-class">{classTimeError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
                    </div>
                    <div>
                      <h3>회차</h3>
                      <input
                        type="number"
                        maxLength={10}
                        value={payload.round}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            round: e.target.value,
                          }));
                        }}
                      />{" "}
                      {roundError ? (
                        <p className="error-class">{roundError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>강사명</h3>
                      <input
                        type="text"
                        maxLength={20}
                        value={payload.instructor}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            instructor: e.target.value,
                          }));
                        }}
                      />{" "}
                      {teacherError ? (
                        <p className="error-class">{teacherError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
                    </div>
                    <div>
                      <h3>강의실</h3>
                      <input
                        type="text"
                        maxLength={10}
                        value={payload.lectureRoom}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            lectureRoom: e.target.value,
                          }));
                        }}
                      />{" "}
                      {classroomError ? (
                        <p className="error-class">{classroomError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
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

export const ClassEditModal = ({
  classInfo,
  editModalOpen,
  setEditModalOpen,
  handleModalCancel,
  categoryData,
  acceptOkModal,
  setAcceptOkModal,
  uploadResult,
  setUpLoadResult,
  fetchData,
}) => {
  const [payload, setPayload] = useState({
    icourseSubject: classInfo.icourseSubject,
    iclassification: classInfo.iclassification,
    courseSubjectName: classInfo.courseSubjectName,
    round: classInfo.round,
    startedAt: classInfo.startedAt,
    endedAt: classInfo.endedAt,
    classTime: classInfo.classTime,
    instructor: classInfo.instructor,
    lectureRoom: classInfo.lectureRoom,
    classification: classInfo.classification,
  });
  const dateFormat = "YYYY-MM-DD";

  // 예외처리하기
  const [cateError, setCateError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [teacherError, setTeacherError] = useState("");
  const [roundError, setRoundError] = useState("");
  const [classTimeError, setClassTimeError] = useState("");
  const [classroomError, setClassroomError] = useState("");

  const onStartRangeChange = (date, dateStrings) => {
    setPayload(payload => ({
      ...payload,
      startedAt: dateStrings ? dateStrings : null,
    }));
  };
  const onEndRangeChange = (date, dateStrings) => {
    setPayload(payload => ({
      ...payload,
      endedAt: dateStrings ? dateStrings : null,
    }));
  };
  const disabledDate = current => {
    return current < dayjs(payload.startedAt).startOf("day");
  };
  const handleModalAccept = async () => {
    const { classification, ...newPayload } = payload;
    // const formatData = {
    //   ...newPayload,
    //   startedAt: payload.startedAt
    //     ? format(payload.startedAt, "yyyy-MM-dd")
    //     : null,
    //   endedAt: payload.endedAt ? format(payload.endedAt, "yyyy-MM-dd") : null,
    // };

    try {
      setCateError(
        !payload.iclassification ? "카테고리를 선택 해 주세요." : "",
      );
      setSubjectError(
        !payload.courseSubjectName ? "과정명을 선택 해 주세요." : "",
      );
      setStartDateError(!payload.startedAt ? "시작날짜를 선택 해 주세요." : "");
      setEndDateError(!payload.endedAt ? "종료날짜를 선택 해 주세요." : "");
      setRoundError(!payload.round ? "과정 회차를 입력 해 주세요." : "");
      setClassTimeError(
        !payload.classTime ? "수업 시간을 입력 해 주세요." : "",
      );
      setTeacherError(!payload.instructor ? "강사명을 입력 해 주세요." : "");
      setClassroomError(!payload.lectureRoom ? "강의실을 입력 해 주세요." : "");

      const isError =
        !payload.iclassification ||
        !payload.courseSubjectName ||
        !payload.startedAt ||
        !payload.endedAt ||
        !payload.round ||
        !payload.classTime ||
        !payload.instructor ||
        !payload.lectureRoom;

      if (!isError) {
        const result = await putClassSubject(payload);
        setUpLoadResult(result);
        if (result.success) {
          setEditModalOpen(false);
          setAcceptOkModal(true);
          fetchData();
        }
      }
    } catch (error) {
      setEditModalOpen(false);
      setAcceptOkModal(true);
    }
  };

  return (
    <>
      {editModalOpen && (
        <ClassAcceptModalWrap>
          <div className="dim">
            <div className="class-modal-inner">
              <ul className="modal-top">
                <li>
                  <h2>과정 수정</h2>
                </li>
                <li>
                  <span onClick={handleModalCancel}>✖</span>
                </li>
              </ul>
              <div className="modal-btm">
                <ul>
                  <li>
                    <div>
                      <h3>대분류</h3>
                      <div className="class-category-box select-wrap">
                        <select
                          name="category-state"
                          onChange={e => {
                            setPayload(payload => ({
                              ...payload,
                              iclassification: e.target.value,
                            }));
                          }}
                        >
                          <option
                            name="category-state"
                            value={payload.classification}
                          >
                            {payload.classification}
                          </option>
                          {categoryData &&
                            categoryData.map(item => (
                              <option
                                key={item.iclassification}
                                name="category-state"
                                value={item.iclassification}
                              >
                                {item.classification}
                              </option>
                            ))}
                        </select>
                        {cateError ? (
                          <p className="error-class">{cateError}</p>
                        ) : (
                          <p className="error-class"></p>
                        )}
                      </div>
                    </div>
                    <div className="class-name">
                      <h3>과정명</h3>
                      <input
                        type="text"
                        maxLength={70}
                        value={payload.courseSubjectName}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            courseSubjectName: e.target.value,
                          }));
                        }}
                      />
                      {subjectError ? (
                        <p className="error-class">{subjectError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
                    </div>
                  </li>
                  <li className="date-picker-wrap">
                    <div>
                      <h3>수강기간</h3>
                    </div>
                    <div>
                      <ConfigProvider
                        locale={locale}
                        theme={{
                          token: {
                            colorPrimary: `${Maincolor.black}`,
                            colorBorder: `${Maincolor.input}`,
                          },
                        }}
                      >
                        <Space direction="horizonal" size={15}>
                          <DatePicker
                            style={{
                              width: "295px",
                              height: "40px",
                              borderRadius: "4px",
                              marginRight: "5px",
                            }}
                            format={dateFormat}
                            onChange={onStartRangeChange}
                            defaultValue={dayjs(payload.startedAt)}
                            placeholder={"시작 날짜"}
                          />
                          <DatePicker
                            style={{
                              width: "295px",
                              height: "40px",
                              borderRadius: "4px",
                            }}
                            format={dateFormat}
                            onChange={onEndRangeChange}
                            defaultValue={dayjs(payload.endedAt)}
                            disabledDate={disabledDate}
                            placeholder={"종료 날짜"}
                          />
                        </Space>
                      </ConfigProvider>
                      {/* <ReactDatePicker
                        className="date-picker"
                        icon="fa fa-calendar"
                        locale={ko}
                        selected={
                          payload.startedAt ? parseISO(payload.startedAt) : null
                        }
                        dateFormat="yyyy년 MM월 dd일"
                        selectsStart
                        onChange={date => {
                          setPayload(payload => ({
                            ...payload,
                            startedAt: date ? formatISO(date) : null,
                          }));
                        }}
                      /> */}
                      {/* <ReactDatePicker
                        className="date-picker"
                        locale={ko}
                        selected={
                          payload.endedAt ? parseISO(payload.endedAt) : null
                        }
                        dateFormat="yyyy년 MM월 dd일"
                        selectsEnd
                        minDate={
                          payload.startedAt ? parseISO(payload.startedAt) : null
                        }
                        onChange={date => {
                          setPayload(payload => ({
                            ...payload,
                            endedAt: date ? formatISO(date) : null,
                          }));
                        }}
                        /> */}
                      <div className="date-error">
                        {startDateError ? (
                          <p className="error-class">{startDateError}</p>
                        ) : (
                          <p className="error-class"></p>
                        )}
                        {endDateError ? (
                          <p className="error-class">{endDateError}</p>
                        ) : (
                          <p className="error-class"></p>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>수강시간</h3>
                      <input
                        type="number"
                        maxLength={10}
                        value={payload.classTime}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            classTime: e.target.value,
                          }));
                        }}
                      />
                      {classTimeError ? (
                        <p className="error-class">{classTimeError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
                    </div>
                    <div>
                      <h3>회차</h3>
                      <input
                        type="number"
                        maxLength={10}
                        value={payload.round}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            round: e.target.value,
                          }));
                        }}
                      />
                      {roundError ? (
                        <p className="error-class">{roundError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>강사명</h3>
                      <input
                        type="text"
                        maxLength={20}
                        value={payload.instructor}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            instructor: e.target.value,
                          }));
                        }}
                      />{" "}
                      {teacherError ? (
                        <p className="error-class">{teacherError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
                    </div>
                    <div>
                      <h3>강의실</h3>
                      <input
                        type="text"
                        maxLength={10}
                        value={payload.lectureRoom}
                        onChange={e => {
                          setPayload(payload => ({
                            ...payload,
                            lectureRoom: e.target.value,
                          }));
                        }}
                      />
                      {classroomError ? (
                        <p className="error-class">{classroomError}</p>
                      ) : (
                        <p className="error-class"></p>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
              {acceptOkModal && (
                <AcceptModal
                  acceptOkModal={acceptOkModal}
                  setAcceptOkModal={setAcceptOkModal}
                  uploadResult={uploadResult}
                />
              )}
              <div className="modal-ok">
                <button onClick={handleModalAccept}>수정</button>
              </div>
            </div>
          </div>
        </ClassAcceptModalWrap>
      )}
    </>
  );
};

export const EnrollCategoryModal = ({
  isAdd,
  setIsAdd,
  categoryData,
  enrollModalOpen,
  setEnrollModalOpen,
  handleDeleteCategory,
  handlePostCategory,
  categoryValue,
  setCategoryValue,
  deleteOkModalOpen,
  setDeleteOkModalOpen,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [addCategory, setAddCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);

  const handleAddCategory = () => {
    setIsAdd(true);
  };

  const handleDeleteButton = data => {
    if (data.iclassification) {
      setDeleteOkModalOpen(true);
      setCategoryId(data.iclassification);
    } else {
      setAddCategory(prevData =>
        prevData.filter(item => item.classification !== data.classification),
      );
    }
  };

  const handleModalCancel = () => {
    setEnrollModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // const handleEditClick = data => {
  //   // console.log("data", data);
  //   if (data === ) {
  //     setIsEdit(true);
  //   } else {
  //     setIsEdit(false);
  //   }

  // };

  return (
    <>
      {enrollModalOpen && (
        <EnrollCategoryWrap>
          {deleteOkModalOpen && (
            <DeleteAceeptModal
              deleteOkModalOpen={deleteOkModalOpen}
              setDeleteOkModalOpen={setDeleteOkModalOpen}
              handleDeleteCategory={handleDeleteCategory}
              categoryId={categoryId}
              setEnrollModalOpen={setEnrollModalOpen}
            />
          )}
          <div className="dim">
            <div className="Enroll-modal-inner">
              <ul className="modal-top">
                <li>
                  <h2>대분류 설정</h2>
                </li>
                <li>
                  <span onClick={handleModalCancel}>✖</span>
                </li>
              </ul>
              <div>
                <h3>대분류명</h3>
              </div>
              <ul className="modal-btm">
                {isAdd ? (
                  <li>
                    <div className="new-add">
                      <input
                        type="text"
                        value={categoryValue}
                        onChange={e => setCategoryValue(e.target.value)}
                        placeholder="대분류명을 입력해 주세요."
                      />
                      <button className="saveBtn" onClick={handlePostCategory}>
                        저장
                      </button>{" "}
                      <button
                        className="cancelBtn"
                        onClick={() => {
                          setCategoryValue("");
                          setIsAdd(false);
                        }}
                      >
                        취소
                      </button>
                    </div>
                  </li>
                ) : (
                  <></>
                )}
                {categoryData &&
                  [...categoryData, ...addCategory].map(item => (
                    <li key={item.iclassification}>
                      {isEdit ? (
                        <>
                          <div>
                            <input type="text" value={item.classification} />
                          </div>
                          <div>
                            <button
                              className="saveBtn"
                              onClick={handlePostCategory}
                            >
                              저장
                            </button>
                            <button
                              className="cancelBtn"
                              onClick={() => {
                                setIsEdit(false);
                              }}
                            >
                              취소
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <input
                              type="text"
                              value={item.classification}
                              readOnly
                            />
                          </div>
                          <div>
                            {/* <button onClick={() => handleEditClick(item.classification)}>
                              <FontAwesomeIcon icon={faPencil} />
                            </button> */}
                            <button onClick={() => handleDeleteButton(item)}>
                              <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
              </ul>
              <div className="accept-button">
                <button onClick={handleAddCategory}> + 대분류 추가 </button>
              </div>
            </div>
          </div>
        </EnrollCategoryWrap>
      )}
    </>
  );
};
