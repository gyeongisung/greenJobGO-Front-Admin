import React, { useEffect, useRef, useState } from "react";
import { JobManagerAddSty } from "../../styles/JobmanagerStyle";
import {
  BtnGlobal,
  ModalCancelBtn,
  ModalOkBtn,
} from "../../styles/GlobalStyle";
import ConfirmModal from "../ConfirmModal";
import { getJobManagerInfo, postManagerInfo } from "../../api/jobMngAxiois";
import OkModal from "../OkModal";

const ManagerAdd = ({
  setAddModalOpen,
  updateData,
  setErrorApiInfo
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectImg, setSelectImg] = useState();
  const [addInfo, setAddInfo] = useState({
    name: "",
    oneWord: "",
    counselingNumber: "",
    phoneNumber: "",
    email: "",
  });

  // // api 오류 메세지 받아오는 state.
  // const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  // const [errorApiInfo, setErrorApiInfo] = useState("");

  // 입력 에러 처리
  const [addNameError, setAddNameError] = useState("");
  const [addOnewordError, setAddOnewordError] = useState("");
  const [addCounselError, setAddCounselError] = useState("");
  const [addPhoneError, setAddPhoneError] = useState("");
  const [addEmailError, setAddEmailError] = useState("");
  const [addImgError, setAddImgError] = useState("");
  const [placeholder, setPlaceholder] = useState("JPG,PNG,JPEG,GIF 파일 첨부");

  const img_ref = useRef(null);

  const openModal = () => {
    setAddNameError(
      addInfo.name === undefined || addInfo.name === ""
        ? "이름을 입력 해 주세요."
        : "",
    );
    setAddOnewordError(
      addInfo.oneWord === undefined || addInfo.oneWord === ""
        ? "한 줄 소개를 입력 해 주세요."
        : "",
    );

    setAddCounselError(
      addInfo.counselingNumber === undefined || addInfo.counselingNumber === ""
        ? "상담전화를 입력 해 주세요."
        : "",
    );

    setAddPhoneError(
      addInfo.phoneNumber === undefined || addInfo.phoneNumber === ""
        ? "모바일을 입력 해 주세요."
        : "",
    );

    setAddEmailError(
      addInfo.email === undefined || addInfo.email === ""
        ? "이메일을 입력 해 주세요."
        : "",
    );

    setAddImgError(
      selectImg === undefined || selectImg === ""
        ? "프로필 이미지를 입력 해 주세요."
        : "",
    );
    if (
      addInfo.name &&
      addInfo.oneWord &&
      addInfo.counselingNumber &&
      addInfo.phoneNumber &&
      addInfo.email &&
      selectImg
    ) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleImageUpload = e => {
    e.preventDefault();
    const file = e.target.files[0];
    setSelectImg(file);
    if (img_ref.current.value !== "") {
      const fileName = img_ref.current.value;
      setPlaceholder(fileName);
    } else {
      console.log("데이터가 없다는디");
    }
  };

  const handleInfoAdd = (e, fieldName) => {
    setAddInfo({ ...addInfo, [fieldName]: e.target.value });
  };

  const handleConfirm = async () => {
    const formData = new FormData();
    formData.append("pic", selectImg);
    formData.append("name", addInfo.name);
    formData.append("oneWord", addInfo.oneWord);
    formData.append("counselingNumber", addInfo.counselingNumber);
    formData.append("phoneNumber", addInfo.phoneNumber);
    formData.append("email", addInfo.email);
    try {
      await postManagerInfo(formData, setErrorApiInfo);
      setModalOpen(false);
      await updateData();
      setAddModalOpen(false);
    } catch (error) {
      setErrorApiInfo(`Job manager upload: ${error.message}`);
    }
  };

  // useEffect(() => {
  //   if (errorApiInfo) {
  //     setApiErrorModalOpen(true);
  //   } else {
  //     setApiErrorModalOpen(false);
  //   }
  // }, [errorApiInfo]);

  return (
    <JobManagerAddSty>
      <ul>
        <li>
          <h3>이름</h3>
          <input
            type="text"
            maxLength={20}
            placeholder="이름"
            value={addInfo.name}
            onChange={e => handleInfoAdd(e, "name")}
          ></input>
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
            maxLength={20}
            value={addInfo.oneWord}
            onChange={e => handleInfoAdd(e, "oneWord")}
          ></input>
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
            value={addInfo.counselingNumber}
            onChange={e => handleInfoAdd(e, "counselingNumber")}
          ></input>
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
            value={addInfo.phoneNumber}
            onChange={e => handleInfoAdd(e, "phoneNumber")}
          ></input>
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
            value={addInfo.email}
            onChange={e => handleInfoAdd(e, "email")}
          ></input>
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
              placeholder={placeholder}
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
        <BtnGlobal onClick={openModal}>등록</BtnGlobal>
        {modalOpen && (
          <ConfirmModal
            open={modalOpen}
            close={closeModal}
            onConfirm={handleConfirm}
            onCancel={() => setModalOpen(false)}
          >
            <span>등록 하시겠습니까?</span>
          </ConfirmModal>
        )}
        {/* api 에러 확인모달
        {apiErrorModalOpen && (
          <OkModal
            header={""}
            open={apiErrorModalOpen}
            close={() => {
              setApiErrorModalOpen(false);
              setErrorApiInfo("");
            }}
            onConfirm={() => {
              setApiErrorModalOpen(false);
              setErrorApiInfo("");
            }}
          >
            <span>{errorApiInfo}</span>
          </OkModal>
        )} */}
      </div>
    </JobManagerAddSty>
  );
};

export default ManagerAdd;
