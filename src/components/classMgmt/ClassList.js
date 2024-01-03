import React from "react";

const ClassList = ({ listData, handleAllCheck, handleCheckBox, page }) => {
  return (
    <ul>
      <li className="class-list">
        <ul>
          <li className="class-table-th">
            <input
              type="checkbox"
              name="all-check-box"
              onChange={e => handleAllCheck(e)}
              className="all-checkbox-btn"
            />
          </li>
          <li className="class-table-th">번호</li>
          <li className="class-table-th">대분류</li>
          <li className="class-table-th">과정명</li>
          <li className="class-table-th">수강기간</li>
          <li className="class-table-th">강사명</li>
          <li className="class-table-th">강의실</li>
        </ul>
      </li>
      {listData.length > 0 &&
        listData.map((item, index) => (
          <li key={index}>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="check-box"
                  defaultChecked={false}
                  className={`class-checkbox userId${item.icourseSubject}`}
                  onChange={e => handleCheckBox(e)}
                />
              </li>
              <li>{(page - 1) * 10 + index + 1}</li>
              <li>{item.classification}</li>
              <li>{item.courseSubjectName}</li>
              <li>
                {item.startedAt} ~ {item.endedAt}
              </li>
              <li>{item.instructor}</li>
              <li>{item.lectureRoom}</li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default ClassList;
