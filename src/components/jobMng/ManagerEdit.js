import React, { useState } from "react";
import { JobManagerAddSty } from "../../styles/JobmanagerStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { patchEditStore } from "../../api/jobMngAxiois";

const ManagerEdit = ({ item }) => {
  const [editManager, setEditManager] = useState(item);

  const handleInfoEdit = (e, fieldName) => {
    setEditManager({ ...editManager, [fieldName]: e.target.value });
    console.log("editManager", editManager);
  };

  // 주소를 변환하자
  const makeUrl = () => {
    let query = "";

    if (item.name !== editManager.name) {
      query += `name=${editManager.name}&`;
    }
    if (item.oneWord !== editManager.oneWord) {
      query += `oneWord=${editManager.oneWord}&`;
    }
    if (item.conuselingNumber !== editManager.conuselingNumber) {
      query += `conuselingNumber=${editManager.conuselingNumber}&`;
    }
    if (item.phoneNumber !== editManager.phoneNumber) {
      query += `phone=${editManager.phoneNumber}&`;
    }
    if (item.email !== editManager.email) {
      query += `email=${editManager.email}&`;
    }

    // 마지막에는 & 제외하기
    if (query.endsWith("&")) {
      query = query.slice(0, -1);
    }
    return query;
  };
  const handleEditOK = async () => {
    try {
      let formData = new FormData();
      Object.keys(editManager).forEach(key => {
        formData.append(key, editManager[key]);
      });

      const query = makeUrl();
      console.log("query", query);

      const result = await patchEditStore({
        formData,
        query,
        iemply: item.iemply,
      });
      console.log("result", result);
    } catch (error) {
      console.error("수정 에러", error);
    }
  };

  return (
    <JobManagerAddSty>
      <ul>
        <li>
          <h3>이름</h3>
          <input
            type="text"
            placeholder="이름"
            value={editManager.name}
            onChange={e => handleInfoEdit(e, "name")}
          />
        </li>
        <li>
          <h3>한 줄 소개</h3>
          <input
            type="text"
            placeholder="소개문구를 작성해주세요. (최대 20자)"
            value={editManager.oneWord}
            onChange={e => handleInfoEdit(e, "oneWord")}
          />
        </li>
        <li>
          <h3>상담전화</h3>
          <input
            type="text"
            placeholder="상담전화"
            value={editManager.conuselingNumber}
            onChange={e => handleInfoEdit(e, "conuselingNumber")}
          />
        </li>
        <li>
          <h3>모바일</h3>
          <input
            type="text"
            placeholder="모바일"
            value={editManager.phoneNumber}
            onChange={e => handleInfoEdit(e, "phoneNumber")}
          />
        </li>
        <li className="email-input">
          <h3>이메일</h3>
          <input
            type="text"
            placeholder="이메일"
            value={editManager.email}
            onChange={e => handleInfoEdit(e, "email")}
          />
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
        <BtnGlobal onClick={handleEditOK}> 수정 </BtnGlobal>
      </div>
    </JobManagerAddSty>
  );
};

export default ManagerEdit;
