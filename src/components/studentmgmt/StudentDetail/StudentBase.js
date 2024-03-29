import React from "react";
import NoImage from "../../../assets/DefaultImg.png";
import { InfoBaseWrap } from "../../../styles/StudentInfoStyle";
import HashTag from "./HashTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const StudentBase = ({
  userFile,
  istudent,
  isEditMode,
  userInfo,
  setUserInfo,
  formatPhoneNumber,
  hashTag,
  hashSave,
  handleAddHashTag,
  handleRemoveHashTag,
  handleHashChange,
  handleKeyDown,
  handleHuntJob,
  handleImgDeleteModalOpen,
  handleImgChange,
}) => {
  const formattedDate = e => {
    let inputText = e.target.value;

    if (inputText.length > 10) {
      inputText = inputText.substring(0, 10);
    }
    const formattedValue = inputText
      .replace(/[^0-9]/g, "")
      .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    setUserInfo(userInfo => ({
      ...userInfo,
      birth: formattedValue,
    }));
  };
  return (
    <InfoBaseWrap>
      <li>
        {isEditMode ? (
          <div className="edit-image">
            <div className="edit-image-icons">
              <p>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={handleImgDeleteModalOpen}
                />
              </p>
              <input
                id="image-file"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImgChange}
              />
              <label htmlFor="image-file">
                <FontAwesomeIcon icon={faFileImage} />
              </label>
            </div>
            {userFile?.thumbNail?.img ? (
              <img
                src={`${process.env.REACT_APP_BASE_FILE_URL}/${istudent}/${userFile?.thumbNail.img}`}
                alt="썸네일"
              />
            ) : (
              <img src={NoImage} alt="썸네일" />
            )}
          </div>
        ) : (
          <div>
            {userFile?.thumbNail?.img ? (
              <img
                src={`${process.env.REACT_APP_BASE_FILE_URL}/${istudent}/${userFile?.thumbNail.img}`}
                alt="썸네일"
              />
            ) : (
              <img src={NoImage} alt="썸네일" />
            )}
          </div>
        )}
      </li>
      <li className="info-content-left">
        <div>
          {isEditMode ? (
            <input
              type="text"
              name="studentName"
              value={userInfo?.userDetail.name}
              onChange={e => {
                setUserInfo(userInfo => ({
                  ...userInfo,
                  userDetail: {
                    ...userInfo.userDetail,
                    name: e.target.value,
                  },
                }));
              }}
            />
          ) : (
            <p className="student-name">{userInfo?.userDetail.name}</p>
          )}
          <div className="student-age">
            {isEditMode ? (
              <input
                type="text"
                name="gender"
                value={userInfo?.userDetail.gender}
                onChange={e => {
                  setUserInfo(userInfo => ({
                    ...userInfo,
                    userDetail: {
                      ...userInfo.userDetail,
                      gender: e.target.value,
                    },
                  }));
                }}
              />
            ) : (
              <p>{userInfo?.userDetail.gender}</p>
            )}
            {isEditMode ? (
              <input
                type="text"
                name="age"
                value={userInfo?.birth || ""}
                onChange={formattedDate}
              />
            ) : (
              <p>{userInfo?.birth}</p>
            )}
            <p>만 {userInfo?.userDetail.age}세</p>
          </div>
        </div>
        <div>
          <span>과정명</span>
          <span>{userInfo?.subject.subjectName}</span>
        </div>
        <div>
          <span>주소</span>
          {isEditMode ? (
            <input
              type="text"
              name="stdaddress"
              value={userInfo?.userDetail.address}
              onChange={e => {
                setUserInfo(userInfo => ({
                  ...userInfo,
                  userDetail: {
                    ...userInfo.userDetail,
                    address: e.target.value,
                  },
                }));
              }}
            />
          ) : (
            <span>{userInfo?.userDetail.address}</span>
          )}
        </div>
        <div>
          <span>Email</span>
          {isEditMode ? (
            <input
              type="text"
              name="stdemail"
              value={userInfo?.userDetail.email}
              onChange={e => {
                setUserInfo(userInfo => ({
                  ...userInfo,
                  userDetail: {
                    ...userInfo.userDetail,
                    email: e.target.value,
                  },
                }));
              }}
            />
          ) : (
            <span>{userInfo?.userDetail.email}</span>
          )}
        </div>
        <div className="certificate">
          <span>자격증</span>
          {isEditMode ? (
            <HashTag
              hashTag={hashTag}
              hashSave={hashSave}
              handleAddHashTag={handleAddHashTag}
              handleRemoveHashTag={handleRemoveHashTag}
              handleHashChange={handleHashChange}
              handleKeyDown={handleKeyDown}
            />
          ) : (
            <div className="read-hashtag">
              {hashSave?.map(item => (
                <div key={item.icertificate}>
                  <span>{item?.certificate}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </li>
      <li className="info-content-right">
        <div>
          <span>취업여부</span>
          {isEditMode ? (
            <select
              name="employment-status"
              value={userInfo?.userDetail?.huntJobYn}
              onChange={handleHuntJob}
            >
              <option name="employment-status" value={1}>
                취업
              </option>
              <option name="employment-status" value={0}>
                미취업
              </option>
            </select>
          ) : (
            <span>
              {userInfo?.userDetail?.huntJobYn === 0 ? "미취업" : "취업"}
            </span>
          )}
        </div>
        <div>
          <span>수료기간</span>
          <span>
            {userInfo?.userDetail.startedAt} ~ {userInfo?.userDetail.endedAt}
          </span>
        </div>
        <div>
          <span>연락처</span>
          {isEditMode ? (
            <input
              type="text"
              name="mobileNumber"
              value={formatPhoneNumber}
              maxLength={13}
              onChange={e => {
                setUserInfo(userInfo => ({
                  ...userInfo,
                  userDetail: {
                    ...userInfo.userDetail,
                    mobileNumber: e.target.value,
                  },
                }));
              }}
            />
          ) : (
            <span>{userInfo?.userDetail.mobileNumber}</span>
          )}
        </div>
        <div>
          <span>학력</span>
          {isEditMode ? (
            <input
              type="text"
              name="education"
              value={userInfo?.userDetail.education}
              onChange={e => {
                setUserInfo(userInfo => ({
                  ...userInfo,
                  userDetail: {
                    ...userInfo.userDetail,
                    education: e.target.value,
                  },
                }));
              }}
            />
          ) : (
            <span>{userInfo?.userDetail.education}</span>
          )}
        </div>
      </li>
    </InfoBaseWrap>
  );
};

export default StudentBase;
