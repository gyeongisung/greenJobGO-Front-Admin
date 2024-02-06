import React, { useRef, useState } from "react";
import { JobManagerAddSty } from "../../styles/JobmanagerStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { getJobManagerInfo, patchManagerEdit } from "../../api/jobMngAxiois";
import ConfirmModal from "../ConfirmModal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OkModal from "../OkModal";

const ManagerEdit = ({
  item,
  setEditModalOpen,
  updateData,
  setErrorApiInfo,
}) => {
  const [editManager, setEditManager] = useState(item);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectImg, setSelectImg] = useState(item.profilePic);
  const [isImg, setIsImg] = useState(item.profilePic);

  // 입력 에러 처리
  const [addNameError, setAddNameError] = useState("");
  const [addOnewordError, setAddOnewordError] = useState("");
  const [addCounselError, setAddCounselError] = useState("");
  const [addPhoneError, setAddPhoneError] = useState("");
  const [addEmailError, setAddEmailError] = useState("");
  const [addImgError, setAddImgError] = useState("");
  const [placeholder, setPlaceholder] = useState("JPG,PNG,JPEG,GIF 파일 첨부");

  const img_ref = useRef(null);

  // 쿼리 주소를 변환하자
  const makeUrl = () => {
    let query = "";

    if (item.name !== editManager.name) {
      query += `name=${editManager.name}&`;
    }
    if (item.oneWord !== editManager.oneWord) {
      query += `oneWord=${editManager.oneWord}&`;
    }
    if (item.counselingNumber !== editManager.counselingNumber) {
      query += `counselingNumber=${editManager.counselingNumber}&`;
    }
    if (item.phoneNumber !== editManager.phoneNumber) {
      query += `phone=${editManager.phoneNumber}&`;
    }
    if (item.email !== editManager.email) {
      query += `email=${editManager.email}&`;
    }
    if (query.endsWith("&")) {
      query = query.slice(0, -1);
    }
    return query;
  };

  // 이미지업로드
  const handleImageUpload = e => {
    e.preventDefault();
    const file = e.target.files[0];
    setSelectImg(file);
    setIsImg(e.target.value);
    if (img_ref.current.value !== "") {
      const fileName = img_ref.current.value;
      setPlaceholder(fileName);
    } else {
      // console.log("데이터가 처리되지 않았습니다");
    }
  };

  const handleInfoEdit = (e, fieldName) => {
    setEditManager({ ...editManager, [fieldName]: e.target.value });
  };

  // 수정 확인 모달 띄우기
  const handleEditOK = async () => {
    setAddNameError(
      editManager.name === undefined || editManager.name === ""
        ? "이름을 입력 해 주세요."
        : "",
    );
    setAddOnewordError(
      editManager.oneWord === undefined || editManager.oneWord === ""
        ? "한 줄 소개를 입력 해 주세요."
        : "",
    );

    setAddCounselError(
      editManager.counselingNumber === undefined ||
        editManager.counselingNumber === ""
        ? "상담전화를 입력 해 주세요."
        : "",
    );

    setAddPhoneError(
      editManager.phoneNumber === undefined || editManager.phoneNumber === ""
        ? "모바일을 입력 해 주세요."
        : "",
    );

    setAddEmailError(
      editManager.email === undefined || editManager.email === ""
        ? "이메일을 입력 해 주세요."
        : "",
    );

    setAddImgError(
      isImg === undefined || isImg === ""
        ? "프로필 이미지를 입력 해 주세요."
        : "",
    );
    if (
      editManager.name &&
      editManager.oneWord &&
      editManager.counselingNumber &&
      editManager.phoneNumber &&
      editManager.email &&
      isImg
    ) {
      setConfirmModalOpen(true);
    }
  };

  // 수정 재확인 ok
  const handleConfirm = async () => {
    const formData = new FormData();
    formData.append("pic", selectImg);
    const query = makeUrl();
    try {
      await patchManagerEdit({ formData, editManager, query, setErrorApiInfo });
      await updateData();
      setEditModalOpen(false);
    } catch (error) {
      console.error("취업 담당자 등록 에러:", error);
    }
  };

  return (
    <JobManagerAddSty>
      <ul>
        <li>
          <h3>이름</h3>
          <input
            type="text"
            maxLength={20}
            placeholder="이름"
            value={editManager.name}
            onChange={e => handleInfoEdit(e, "name")}
          />
          {addNameError ? (
            <p className="error-class">{addNameError}</p>
          ) : (
            <p className="error-class"></p>
          )}
        </li>
        <li>
          <h3>한 줄 소개</h3>
          <input
            type="text"
            placeholder="소개문구를 작성해주세요. (최대 20자)"
            value={editManager.oneWord}
            maxLength={20}
            onChange={e => handleInfoEdit(e, "oneWord")}
          />{" "}
          {addOnewordError ? (
            <p className="error-class">{addOnewordError}</p>
          ) : (
            <p className="error-class"></p>
          )}
        </li>
        <li>
          <h3>상담전화</h3>
          <input
            type="text"
            maxLength={13}
            placeholder="상담전화"
            value={editManager.counselingNumber}
            onChange={e => handleInfoEdit(e, "counselingNumber")}
          />
          {addCounselError ? (
            <p className="error-class">{addCounselError}</p>
          ) : (
            <p className="error-class"></p>
          )}
        </li>
        <li>
          <h3>모바일</h3>
          <input
            type="text"
            maxLength={13}
            placeholder="모바일"
            value={editManager.phoneNumber}
            onChange={e => handleInfoEdit(e, "phoneNumber")}
          />{" "}
          {addPhoneError ? (
            <p className="error-class">{addPhoneError}</p>
          ) : (
            <p className="error-class"></p>
          )}
        </li>
        <li className="email-input">
          <h3>이메일</h3>
          <input
            type="text"
            maxLength={25}
            placeholder="이메일"
            value={editManager.email}
            onChange={e => handleInfoEdit(e, "email")}
          />
          {addEmailError ? (
            <p className="error-class">{addEmailError}</p>
          ) : (
            <p className="error-class"></p>
          )}
        </li>
        <li className="photo-upload">
          <h3>프로필 이미지</h3>
          <div className="upload-area">
            <input
              className="file-place-hold"
              value={isImg}
              disabled
            />
            <input
              type="file"
              name="job-mng-img"
              id="job-img-upload"
              ref={img_ref}
              accept="image/gif,image/jpeg,image/jpg,image/png"
              // placeholder="JPG,PNG,JPEG,GIF 파일 첨부"
              onChange={handleImageUpload}
            />
          </div>
          {addImgError ? (
            <p className="error-class">{addImgError}</p>
          ) : (
            <p className="error-class"></p>
          )}
          <span>*프로필 이미지를 등록해주세요.</span>
        </li>
      </ul>
      <div className="add-accept">
        <BtnGlobal onClick={handleEditOK}> 수정 </BtnGlobal>
      </div>
      {confirmModalOpen && (
        <ConfirmModal
          header={""}
          open={confirmModalOpen}
          close={() => setConfirmModalOpen(false)}
          onConfirm={handleConfirm}
          onCancel={() => setConfirmModalOpen(false)}
        >
          <span>수정 하시겠습니까?</span>
        </ConfirmModal>
      )}
    </JobManagerAddSty>
  );
};

export default ManagerEdit;
