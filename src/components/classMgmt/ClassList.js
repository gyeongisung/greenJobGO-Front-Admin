import React, { useState } from "react";
import { ClassEditModal } from "./ClassModal";

const ClassList = ({
  listData,
  handleAllCheck,
  handleCheckBox,
  page,
  acceptOkModal,
  setAcceptOkModal,
  uploadResult,
  setUpLoadResult,
  categoryData,
}) => {
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
          <li className="class-table-th">수강시간</li>
          <li className="class-table-th">강사명</li>
          <li className="class-table-th">강의실</li>
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
              <li>{item.courseSubjectName}</li>
              <li>{item.round}</li>
              <li>
                {item.startedAt} ~ {item.endedAt}
              </li>
              <li>{item.classTime}</li>
              <li>{item.instructor}</li>
              <li>{item.lectureRoom}</li>
            </ul>
          </li>
        ))}

      {editModalOpen && (
        <ClassEditModal
          classInfo={classInfo}
          editModalOpen={editModalOpen}
          setEditModalOpen={setEditModalOpen}
          handleModalCancel={handleModalCancel}
          categoryData={categoryData}
          acceptOkModal={acceptOkModal}
          setAcceptOkModal={setAcceptOkModal}
          uploadResult={uploadResult}
          setUpLoadResult={setUpLoadResult}
        />
      )}
    </ul>
  );
};

export default ClassList;
