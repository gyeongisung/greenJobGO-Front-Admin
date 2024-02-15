import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const StudentList = ({
  listData,
  page,
}) => {
  const navigate = useNavigate();

  const handleClickList = istudent => {
    navigate(`/admin/student/${istudent}`);
  };

  return (
    <ul>
      <li className="student-list">
        <ul>
          <li className="student-table-th">번호</li>
          <li className="student-table-th">대분류</li>
          <li className="student-table-th">과정명</li>
          <li className="student-table-th">수강기간</li>
          <li className="student-table-th">이름</li>
          <li className="student-table-th">성별</li>
          <li className="student-table-th">주소</li>
          <li className="student-table-th">연락처</li>
          <li className="student-table-th">학력</li>
          <li className="student-table-th">자격증</li>
          <li className="student-table-th">포트폴리오</li>
          <li className="student-table-th">취업여부</li>
        </ul>
      </li>
      {listData?.length > 0 &&
        listData.map((item, index) => (
          <li key={item.istudent}>
            <ul
              className="student-list-content"
              onClick={() => handleClickList(item.istudent)}
            >
              <li>{(page - 1) * 10 + index + 1}</li>
              <li>{item.classification}</li>
              <li>
                {item.round && `(${item.round}기)`}
                {item.subjectName}
              </li>
              <li>
                {item.startedAt} ~ {item.endedAt}
              </li>
              <li>{item.name}</li>
              <li>{item.gender}</li>
              <li>{item.address}</li>
              <li>{item.mobileNumber}</li>
              <li>{item.education}</li>
              <li>{item.certificate}개</li>
              <li>{item.file}개</li>
              <li>{item.huntJobYn === 1 ? "취업" : "미취업"}</li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default StudentList;
