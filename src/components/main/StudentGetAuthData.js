import React from "react";
import { StudentAuthgetListSty } from "../../styles/HomeStyle";
import { v4 } from "uuid";

const StudentGetAuthData = ({ authInfo }) => {
  return (
    <StudentAuthgetListSty>
      <div className="auth-list-div">
        <h2>과정별 이력서 등록/열람 기간</h2>
        <div className="class-auth-list">
          {authInfo &&
            authInfo?.map(item => (
              <ul key={v4()}>
                <li>
                  <span className="title">{item.subjectName}</span>
                  <span className="date">
                    {item.startedAt} ~ {item.endedAt}
                  </span>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </StudentAuthgetListSty>
  );
};

export default StudentGetAuthData;
