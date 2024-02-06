import { faCircleXmark, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { InfoResumeWrap } from "../../../styles/StudentInfoStyle";
import { useParams } from "react-router";
import { Maincolor } from "../../../styles/GlobalStyle";

const StudentResume = ({
  userFile,
  isEditMode,
  handleDeleteClick,
  resumeOneWord,
  setResumeOneWord,
  resumeFile,
  handleResumeFileChange,
  handleResumeUpload,
  userInfo,
}) => {
  const { istudent } = useParams();
  return (
    <InfoResumeWrap>
      <ul>
        <li>
          <h2>이력서 및 자기소개서</h2>
        </li>
        <li>
          <h3>한줄 소개</h3>
          {userInfo && userInfo?.userDetail?.introducedLine ? (
            <span>&nbsp;{userInfo?.userDetail?.introducedLine}</span>
          ) : (
            <>
              {isEditMode ? (
                <div className="oneword">
                  <input
                    type="text"
                    value={resumeOneWord}
                    onChange={e => {
                      setResumeOneWord(e.target.value);
                    }}
                    placeholder="나를 소개하는 문구를 작성해주세요.(최대 50자)"
                  />
                </div>
              ) : (
                <span>&nbsp;한줄소개가 등록되어 있지 않습니다.</span>
              )}
            </>
          )}
        </li>
        <li>
          <h3>이력서 및 자기소개서</h3>
          {userFile && userFile.resume && userFile.resume?.resume ? (
            <div className="file-box">
              <div>
                <p>
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    // color={`${Maincolor.grayDeep}`}
                  />
                </p>
                <a
                  href={`${process.env.REACT_APP_BASE_FILE_URL}/${istudent}/${userFile.resume.resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;
                  {userFile.resume.originFileName}
                </a>
              </div>
              {isEditMode ? (
                <div>
                  <p>
                    <FontAwesomeIcon
                      onClick={handleDeleteClick}
                      icon={faCircleXmark}
                      style={{ color: "#6d6d6d" }}
                    />
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <>
              {isEditMode ? (
                <div className="edit-file-box">
                  <input
                    type="file"
                    id="resumefile"
                    accept=".pdf"
                    onChange={handleResumeFileChange}
                  />
                  <label htmlFor="resumefile">파일첨부</label>
                  <input
                    className="upload-name"
                    id="upload_resume"
                    value={resumeFile ? resumeFile.name : "첨부파일"}
                    readOnly
                  />
                  <div>
                    <button onClick={handleResumeUpload}>저장</button>
                  </div>
                </div>
              ) : (
                <span>&nbsp;이력서가 등록되어 있지 않습니다.</span>
              )}
            </>
          )}
        </li>
      </ul>
    </InfoResumeWrap>
  );
};

export default StudentResume;
