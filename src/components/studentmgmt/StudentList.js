import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

const StudentList = ({
  listData,
  handleAllCheck,
  handleCheckBox,
  page,
  // handleInfoClick,
}) => {
  return (
    <ul>
      <li className="student-list">
        <ul>
          <li className="student-table-th">
            <input
              type="checkbox"
              name="all-check-box"
              onChange={e => handleAllCheck(e)}
              className="all-checkbox-btn"
            />
          </li>
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
      {listData.length > 0 &&
        listData.map((item, index) => (
          <li key={item.istudent}
          //  key={item.istudent}
          // onClick={e =>
          //   !e.target.classList.contains("check-box-li") &&
          //   handleInfoClick(item)
          // }
          >
            <Link to={`/student/${item.istudent}`}>
              <ul className="student-list-content">
                <li className="check-box-li">
                  <input
                    type="checkbox"
                    name="check-box"
                    defaultChecked={false}
                    className={`student-checkbox userId${item.istudent}`}
                    onChange={e => handleCheckBox(e)}
                    onClick={e => e.stopPropagation()}
                  />
                </li>
                <li>{(page - 1) * 10 + index + 1}</li>
                <li>{item.classification}</li>
                <li>{item.subjectName}</li>
                <li>
                  {item.startedAt} ~ {item.endedAt}
                </li>
                <li>{item.name}</li>
                <li>{item.gender}</li>
                <li>{item.address}</li>
                <li>{item.mobileNumber}</li>
                <li>{item.education}</li>
                <li>{item.certificate}</li>
                <li>{item.file}</li>
                <li>{item.file}</li>
              </ul>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default StudentList;
