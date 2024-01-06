import React from "react";
import { StudentInfoWrap } from "../../styles/StudentInfoStyle";

const StudentInfo = () => {
  return (
    <StudentInfoWrap>
      <div className="info-contain">
        <div>
          <h2>수강생 상세 정보</h2>
        </div>
        <ul className="info-content">
          <li>
            <img src="" alt="썸네일" />
          </li>
          <li className="info-content-left">
            <div>
              <span>김그린</span>
              <span>여 1999(만 25세)</span>
            </div>
            <div>
              <span>과정명</span>
              <span>UX/UI 반응형 디자인 & 퍼블리싱 과정</span>
            </div>
            <div>
              <span>주소</span>
              <span>대구 중구 중앙대로 394 제일빌딩 5F</span>
            </div>
            <div>
              <span>Email</span>
              <span>green123@gmail.com</span>
            </div>
            <div>
              <span>자격증</span>
              <span>웹디자인기능사, 컴퓨터활용능력1급, 전산회계 1급</span>
            </div>
          </li>
          <li className="info-content-right">
            <div>
              <span>취업여부</span>
              <span>X</span>
            </div>
            <div>
              <span>수료기간</span>
              <span>2023.06.01 ~ 2023.12.01</span>
            </div>
            <div>
              <span>연락처</span>
              <span>010-1234-5678</span>
            </div>
            <div>
              <span>학력</span>
              <span>계명대학교 컴퓨터공학부 4년제 졸업</span>
            </div>
          </li>
        </ul>
        <div>
          <span>https://www.figma.com/file/DNPBzZmznUfUHpoZN</span>
        </div>
      </div>
      <div className="buttons">
        <div>
          <button>돌아가기</button>
        </div>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
    </StudentInfoWrap>
  );
};

export default StudentInfo;
