import React, { useEffect, useState } from "react";

const DeleteList = ({
  listData,
  allClick,
  setAllClick,
  clickItems,
  setClickItems,
  page,
}) => {

  // 체크박스 변경 이벤트 핸들러
  const handleCheckBox = (checked, istudent) => {
    setClickItems(prev =>
      checked ? [...prev, istudent] : prev.filter(item => item !== istudent),
    );

    if (allClick) {
      const allCheckBox = document.getElementById("allcheck");
      allCheckBox.checked = clickItems.length === listData.length;
    }
  };

  // 전체선택
  const handleSelectAll = isChecked => {
    if (isChecked) {
      setClickItems(listData.map(({ istudent }) => istudent));
      setAllClick(true);
    } else {
      setClickItems([]);
      setAllClick(false);
    }
  };

  useEffect(() => {
    setClickItems([]);
    setAllClick(false);
  }, [page]);
  return (
    <div className="list-border">
      <ul>
        <li className="class-list">
          <ul>
            <li className="class-table-th">
              <input
                type="checkbox"
                id="allcheck"
                onChange={e => handleSelectAll(e.target.checked)}
                checked={allClick}
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
            <li key={item.istudent}>
              <ul>
                <li className="check-box-li">
                  <input
                    type="checkbox"
                    id={`check${item.istudent}`}
                    checked={clickItems.includes(item.istudent)}
                    value={item.istudent}
                    onChange={e => {
                      handleCheckBox(e.target.checked, item.istudent);
                    }}
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
