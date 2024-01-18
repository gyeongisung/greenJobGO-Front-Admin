import React, { useState } from "react";

const DeleteList = ({ listData, handleAllCheck, handleCheckBox, page }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [classInfo, setClassInfo] = useState(null);
  const handleEditModalOpen = data => {
    setClassInfo(data);
    setEditModalOpen(true);
  };

  const handleModalCancel = () => {
    setEditModalOpen(false);
    document.body.style.overflow = "unset";
  };
  return (
    <div className="list-border">
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
            <li className="class-table-th">회차</li>
            <li className="class-table-th">수강기간</li>
            <li className="class-table-th">이름</li>
            <li className="class-table-th">성별</li>
            <li className="class-table-th">포트폴리오</li>
            <li className="class-table-th">보관된 포트폴리오</li>
          </ul>
        </li>
        {listData.length > 0 &&
          listData.map((item, index) => (
            <li
              key={item.icourseSubject}
              onClick={e =>
                !e.target.classList.contains("check-box-li") &&
                handleEditModalOpen(item)
              }
            >
              <ul>
                <li className="check-box-li">
                  <input
                    type="checkbox"
                    name="check-box"
                    defaultChecked={false}
                    className={`class-checkbox userId${item.icourseSubject}`}
                    onChange={e => handleCheckBox(e)}
                    onClick={e => e.stopPropagation()}
                  />
                </li>
                <li>{(page - 1) * 10 + index + 1}</li>
                <li>{item.classification}</li>
                <li>{item.subjectName}</li>
                <li>{item.round && `${item.round}회차`}</li>
                <li>
                  {item.startedAt} ~ {item.endedAt}
                </li>
                <li>{item.studentName}</li>
                <li>{item.gender}</li>
                <li>{item.portfolio}</li>
                <li>
                  {item.storageYn === 0
                    ? "없음"
                    : item.storageYn === 1
                      ? "있음"
                      : null}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DeleteList;
