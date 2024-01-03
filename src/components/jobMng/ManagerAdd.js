import React, { useState } from "react";
import { JobManagerAddSty } from "../../styles/JobmanagerStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";

const ManagerAdd = () => {
  const [filename, setFilename] = useState("");

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      setFilename(file.name);
    }
  };
  return (
    <JobManagerAddSty>
      <ul>
        <li>
          <h3>이름</h3>
          <input type="text" placeholder="이름"></input>
        </li>
        <li>
          <h3>한 줄 소개</h3>
          <input
            type="text"
            placeholder="소개문구를 작성해주세요. (최대 20자)"
          ></input>
        </li>
        <li>
          <h3>상담전화</h3>
          <input type="text" placeholder="상담전화"></input>
        </li>
        <li>
          <h3>모바일</h3>
          <input type="text" placeholder="모바일"></input>
        </li>
        <li className="email-input">
          <h3>이메일</h3>
          <input type="text" placeholder="이메일"></input>
        </li>
        <li className="photo-upload">
          <h3>프로필 이미지</h3>
          {/* <div className="upload-area"> */}
          <input
            type="file"
            name="file"
            id="file"
            accept="image/gif,image/jpeg,image/png"
            placeholder="JPG,PNG,JPEG,GIF 파일 첨부"
          />
          {/* </div> */}
          <p>*프로필 이미지를 등록해주세요.</p>
        </li>
      </ul>
      <div className="add-accept">
        <BtnGlobal> 등록완료 </BtnGlobal>
      </div>
    </JobManagerAddSty>
  );
};

export default ManagerAdd;
