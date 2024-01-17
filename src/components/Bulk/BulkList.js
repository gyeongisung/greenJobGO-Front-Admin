import React from "react";

const BulkList = ({ listData, page, handleDeleteClick }) => {
  return (
    <ul>
      <li className="bulk-list">
        <ul>
          <li className="bulk-table-th">번호</li>
          <li className="bulk-table-th">대분류</li>
          <li className="bulk-table-th">과정명</li>
          <li className="bulk-table-th">회차</li>
          <li className="bulk-table-th">수강기간</li>
          <li className="bulk-table-th">관리</li>
        </ul>
      </li>
      {listData.length > 0 &&
        listData.map((item, index) => (
          <li key={item.icourseSubject}>
            <ul>
              <li>{(page - 1) * 10 + index + 1}</li>
              <li>{item.classification}</li>
              <li>{item.subjectName}</li>
              <li>{item.round}</li>
              <li>
                {item.startedAt} ~ {item.endedAt}
              </li>
              <li>
                <button
                  onClick={() =>
                    handleDeleteClick(item.icourseSubject, item.iclassification)
                  }
                >
                  삭제
                </button>
              </li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default BulkList;
