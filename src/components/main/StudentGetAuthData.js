import React from "react";
import { StudentAuthgetListSty } from "../../styles/HomeStyle";

const StudentGetAuthData = ({ authInfo }) => {
  return (
    <StudentAuthgetListSty>
      <div className="auth-list-div">
        <h2>수강생 이력서 등록/열람 기간</h2>
        <div className="class-auth-list">
          {authInfo &&
            authInfo?.map(item => (
              <ul key={`${item.subjectName}` + `${item.round}`}>
                <li>
                  <span className="title">
                    {item.round && `(${item.round}기)`}
                    {item.subjectName}
                  </span>
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
