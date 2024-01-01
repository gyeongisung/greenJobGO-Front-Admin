import React from "react";

const StudentList = ({ listData, handleAllCheck, handleCheckBox, page }) => {
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
                  className={`student-checkbox userId${item.companyCode}`}
                  onChange={e => handleCheckBox(e)}
                />
              </li>
              <li>{(page - 1) * 10 + index + 1}</li>
              <li>{item.area}</li>
              <li>{item.companyName}</li>
              <li>{item.sector}</li>
              <li>{item.leaderName}</li>
              <li>{item.manger}</li>
              <li>{item.phonenumber}</li>
              <li>{item.dateConslusion}</li>
              <li>{item.dateConslusion}</li>
              <li>{item.dateConslusion}</li>
              <li>{item.dateConslusion}</li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default StudentList;
