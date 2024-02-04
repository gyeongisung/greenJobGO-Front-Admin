import React, { useEffect, useState } from "react";

import { StudentAuthPostSty } from "../../styles/HomeStyle";
import { ConfigProvider, DatePicker, Space } from "antd";
import { BtnGlobal } from "../../styles/GlobalStyle";
import {
  getStudentAuthData,
  getStudentSubject,
  patchStudentAuthData,
} from "../../api/homeAxios";
import ConfirmModal from "../ConfirmModal";

import dayjs from "dayjs";
import locale from "antd/lib/locale/ko_KR";

import { getBigcate } from "../../api/portfolioAxios";
import { v4 } from "uuid";
import OkModal from "../OkModal";
import ErrorModal from "../ErrorModal";

const StudentPostAuth = ({ setAuthInfo }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [subjectPk, setSubjectPk] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState([]);
  const [selectCate, setSelectCate] = useState(0);
  const [subjectList, setSubjectList] = useState([]);

  // 에러처리 state
  const [cateError, setCateError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  // 카테변경값 저장
  const handleCategoryFilter = e => {
    console.log("필터변경e", e.target.value);
    setSelectCate(e.target.value);
  };

  // 과목변경값 저장
  const handleSubjectFilter = e => {
    console.log("과목선택e", e.target.value);
    setSubjectPk(Number(e.target.value));
  };

  // 이전날짜 선택못하게 막기
  const disabledDate = current => {
    return current && current < dayjs().startOf("day");
  };
  const Today = dayjs().format("YYYY-MM-DD");

  const onRangeChange = (dates, dateStrings) => {
    console.log("dateStrings", dateStrings);
    setStartDate(Today);
    setEndDate(dateStrings[1]);
  };

  // 권한기간 수정 버튼
  const handleSummit = () => {
    setCateError(!selectCate ? "카테고리를 선택 해 주세요." : "");
    setSubjectError(!subjectPk ? "과정명을 선택 해 주세요." : "");
    // setStartDateError(
    //   startDate === Today ? "권한 시작날짜는 오늘 날짜만 선택 가능 합니다" : "",
    // );
    setEndDateError(!endDate ? "권한 종료날짜를 선택 해 주세요." : "");
    console.log("startDate", startDate);

    const isError = !selectCate || !subjectPk || !endDate;

    // 에러가 없을 때 모달 열기
    if (!isError) {
      setModalOpen(true);
    } else {
      setErrorModalOpen(true);
    }
  };
  const handleSummitConfirm = async () => {
    try {
      await patchStudentAuthData({
        subjectPk,
        startDate,
        endDate,
        setErrorApiInfo,
      });
      setModalOpen(false);
      await updateData();
      // if (errorApiInfo) {
      //   setApiErrorModalOpen(true);
      // } else {
      //   setApiErrorModalOpen(false);
      // }
    } catch (error) {
      setErrorApiInfo("수강생 권한 변경이 정상처리되지 않았습니다.");
    }
  };
  // api 요청 성공할 때 화면 리랜더링
  const updateData = async () => {
    try {
      const newData = await getStudentAuthData(setAuthInfo);
      setSelectCate(0);
      setSubjectPk("");
      setEndDate("");
    } catch (error) {
      console.error("데이터 업데이트 에러:", error);
    }
  };

  useEffect(() => {
    getBigcate(setCategory, setErrorApiInfo);
  }, []);
  useEffect(() => {
    getStudentSubject({ selectCate, setSubjectList, setErrorApiInfo });
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [selectCate, errorApiInfo]);
  return (
    <StudentAuthPostSty>
      <ul className="click-content">
        <li className="select-wrap">
          <select
            value={selectCate}
            id="cate-select-student"
            onChange={e => handleCategoryFilter(e)}
          >
            <option value="" defaultValue>
              선택
            </option>
            {category.length &&
              category.map(item => (
                <option key={v4()} value={item.iclassification}>
                  {item.classification}
                </option>
              ))}
          </select>
        </li>
        <li className="select-wrap">
          <select
            value={subjectPk}
            id="subject-select-student"
            onChange={e => handleSubjectFilter(e)}
          >
            <option value="" defaultValue>
              과정명 선택
            </option>
            {subjectList?.map(item => (
              <option key={v4()} value={item.icourseSubject}>
                {item.round && `(${item.round}기)`}
                {item.subjectName}
              </option>
            ))}
          </select>
        </li>
        <li>
          <ConfigProvider locale={locale}>
            <Space direction="vertical" size={12}>
              <RangePicker
                format={dateFormat}
                onChange={onRangeChange}
                id="student-auth-date"
                disabledDate={disabledDate}
                defaultValue={[dayjs(), endDate ? dayjs(endDate) : null]}
                disabled={[true, false]}
                value={[dayjs(), endDate ? dayjs(endDate) : null]}
                placeholder={["시작 날짜", "종료 날짜"]}
              />
            </Space>
          </ConfigProvider>
        </li>
      </ul>
      <BtnGlobal className="auth-post" onClick={handleSummit}>
        적용
      </BtnGlobal>
      {/* 권한 변경 확인모달 */}
      {modalOpen && (
        <ConfirmModal
          header={""}
          open={modalOpen}
          close={() => setModalOpen(false)}
          onConfirm={handleSummitConfirm}
          onCancel={() => setModalOpen(false)}
        >
          <span>과정별 수강생 계정 열람 시간을 변경 하시겠습니까?</span>
        </ConfirmModal>
      )}
      {/* 빈값 에러 확인모달 */}
      {errorModalOpen && (
        <ErrorModal
          header={""}
          open={errorModalOpen}
          close={() => setErrorModalOpen(false)}
          onConfirm={() => setErrorModalOpen(false)}
        >
          <span>
            {cateError || subjectError || startDateError || endDateError}
          </span>
        </ErrorModal>
      )}
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <ErrorModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false), setErrorApiInfo("");
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false), setErrorApiInfo("");
          }}
        >
          <span>{errorApiInfo}</span>
        </ErrorModal>
      )}
    </StudentAuthPostSty>
  );
};

export default StudentPostAuth;
