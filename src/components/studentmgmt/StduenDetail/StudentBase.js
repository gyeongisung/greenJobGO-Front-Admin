import React from "react";
import NoImage from "../../../assets/NoImage.jpg";
import { InfoBaseWrap } from "../../../styles/StudentInfoStyle";

const StudentBase = ({
  userFile,
  istudent,
  isEditMode,
  userInfo,
  setUserInfo,
}) => {
  return (
    <InfoBaseWrap>
      <li>
        {userFile && userFile.thumbNail ? (
          <img
            src={`http://112.222.157.156/img/student/${istudent}/${userFile.thumbNail}`}
            alt="썸네일"
          />
        ) : (
          <img src={NoImage} alt="썸네일" />
        )}
      </li>
      <li className="info-content-left">
        <div>
          {isEditMode ? (
            <input
              type="text"
              name="studentName"
              value={userInfo.userDetail.name}
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
            <p className="student-name">{userInfo.userDetail.name}</p>
          )}
          <p className="student-age">
            {isEditMode ? (
              <input
                type="text"
                name="gender"
                value={userInfo.userDetail.gender}
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
              <p>{userInfo.userDetail.gender}</p>
            )}
            <p>{userInfo.birth}년생</p>
            {isEditMode ? (
              <input
                type="text"
                name="age"
                value={userInfo.userDetail.age}
                onChange={e => {
                  setUserInfo(userInfo => ({
                    ...userInfo,
                    userDetail: {
                      ...userInfo.userDetail,
                      age: e.target.value,
                    },
                  }));
                }}
              />
            ) : (
              <p>만 {userInfo.userDetail.age}세</p>
            )}
          </p>
        </div>
        <div>
          <span>과정명</span>
          <span>{userInfo.subject.subjectName}</span>
        </div>
        <div>
          <span>주소</span>
          {isEditMode ? (
            <input
              type="text"
              name="address"
              value={userInfo.userDetail.address}
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
            <span>{userInfo.userDetail.address}</span>
          )}
        </div>
        <div>
          <span>Email</span>
          {isEditMode ? (
            <input
              type="text"
              name="email"
              value={userInfo.userDetail.email}
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
            <span>{userInfo.userDetail.email}</span>
          )}
        </div>
        <div>
          <span>자격증</span>
          {isEditMode ? (
            <input
              type="text"
              name="email"
              value={userInfo.certificateValue}
              onChange={e => {
                setUserInfo(userInfo => ({
                  ...userInfo,
                  certificateValue: e.target.value,
                }));
              }}
            />
          ) : (
            <span>{userInfo.certificateValue}</span>
          )}
        </div>
      </li>
      <li className="info-content-right">
        <div>
          <span>취업여부</span>
          {isEditMode ? (
            <select
              name="employment-status"
              onChange={e => {
                setUserInfo(userInfo => ({
                  ...userInfo,
                  userDetail: {
                    ...userInfo.userDetail,
                    huntJobYn: e.target.value,
                  },
                }));
              }}
            >
              <option
                name="employment-status"
                value={userInfo?.userDetail?.huntJobYn === 1 ? 1 : 0}
              >
                {userInfo?.userDetail?.huntJobYn === 1 ? "취업" : "미취업"}
              </option>
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
            {userInfo.userDetail.startedAt} ~ {userInfo.userDetail.endedAt}
          </span>
        </div>
        <div>
          <span>연락처</span>
          {isEditMode ? (
            <input
              type="text"
              name="mobileNumber"
              value={userInfo.userDetail.mobileNumber}
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
            <span>{userInfo.userDetail.mobileNumber}</span>
          )}
        </div>
        <div>
          <span>학력</span>
          {isEditMode ? (
            <input
              type="text"
              name="education"
              value={userInfo.userDetail.education}
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
            <span>{userInfo.userDetail.education}</span>
          )}
        </div>
      </li>
    </InfoBaseWrap>
  );
};

export default StudentBase;