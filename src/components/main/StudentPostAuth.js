import React, { useEffect, useState } from "react";
import { StudentAuthPostSty } from "../../styles/HomeStyle";
import { DatePicker, Space } from "antd";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { getStudentSubject, patchStudentAuthData } from "../../api/homeAxios";
import ConfirmModal from "../ConfirmModal";
import dayjs from "dayjs";
import { getBigcate } from "../../api/portfolioAxios";
import { v4 } from "uuid";

const StudentPostAuth = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [subjectPk, setSubjectPk] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isAuthEdit, setIsAuthEdit] = useState(1);
  const [category, setCategory] = useState([]);
  const [selectCate, setSelectCate] = useState("");
  const [subjectList, setSubjectList] = useState([]);

  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";

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

  const onRangeChange = (dates, dateStrings) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };
  // 권한기간 수정 버튼
  const handleSummit = () => {
    setModalOpen(true);
  };
  const handleSummitConfirm = async () => {
    try {
      await patchStudentAuthData({ subjectPk, startDate, endDate, isAuthEdit });
      await updateData();
      setModalOpen(false);
    } catch (error) {
      console.log("변경실패", error);
    }
  };
  // api 요청 성공할 때 화면 리랜더링
  const updateData = async () => {
    try {
      // const newData = await patchStudentAuthData(setAuthInfo);
    } catch (error) {
      console.error("데이터 업데이트 에러:", error);
    }
  };

  useEffect(() => {
    getBigcate(setCategory);
  }, []);
  useEffect(() => {
    getStudentSubject({ selectCate, setSubjectList });
  }, [selectCate]);
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
            {category?.map(item => (
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
              선택
            </option>
            {subjectList?.map(item => (
              <option key={v4()} value={item.icourseSubject}>
                {item.courseSubjectName}
              </option>
            ))}
          </select>
        </li>
        <li>
          <Space direction="vertical" size={12}>
            <RangePicker
              format={dateFormat}
              onChange={onRangeChange}
              id="student-auth-date"
              disabledDate={disabledDate}
            />
          </Space>
        </li>
      </ul>
      <BtnGlobal className="auth-post" onClick={handleSummit}>
        적용
      </BtnGlobal>
      {/* 권한 변경 확인모달 */}
      {modalOpen && (
        <ConfirmModal
          open={modalOpen}
          close={() => setModalOpen(false)}
          onConfirm={handleSummitConfirm}
          onCancel={() => setModalOpen(false)}
        >
          <span>과정별 수강생 계정 열람 시간을 변경 하시겠습니까?</span>
        </ConfirmModal>
      )}
    </StudentAuthPostSty>
  );
};

export default StudentPostAuth;
