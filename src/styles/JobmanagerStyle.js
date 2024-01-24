import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const JobManagerWrap = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  overflow: auto;
  & > div {
    width: 1400px;
    margin: 0 auto;

    .job-title {
      display: flex;
      justify-content: flex-start;
      margin: 30px 0;
      h3 {
        font-size: 24px;
        font-weight: 700;
      }
    }
    .job-content-wrap {
      margin: 0 auto;
      display: flex;
      justify-content: left;
      flex-direction: column;

      /* 담당자 등록 버튼 */
      .maganer-add {
        margin-top: 30px;
        & > button {
          float: right;
          width: 105px;
          height: 50px;
          margin-bottom: 20px;
        }
      }
    }
  }
`;
export const JobManagerBoxWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  .manager-profile {
    width: 440px;
    height: 623px;
    border-radius: 12px;
    border: 1px ${Maincolor.grayLight2} solid;
    padding: 40px;
    .manager-img {
      width: 170px;
      height: 226px;
      object-fit: contain;
      margin-bottom: 25px;
    }

    .manager-details {
      /* 담당자 한마디 */
      font-weight: 500;
      .manager-word {
        font-size: 20px;
        color: ${Maincolor.black};
        margin-bottom: 14px;
      }
      /* 담당자 이름 */
      .manager-name {
        font-size: 16px;
        margin-top: 14px;
      }
      /* 담당자 연락처 */
      .manager-contact {
        margin-top: 52px;
        li {
          display: flex;
          justify-content: left;
          align-items: center;
          margin-top: 16px;
          span:nth-of-type(1) {
            width: 60px;
            font-size: 14px;
            font-weight: 700;
            margin-right: 10px;
          }
          span:nth-of-type(2) {
            font-weight: 400;
            font-size: 16px;
            letter-spacing: -0.24px;
          }
        }
      }
    }
    .btn-group {
      display: flex;
      justify-content: right;
      align-items: center;
      gap: 10px;
      margin-top: 40px;
      li > button {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: -0.21px;
        width: 100px;
        height: 40px;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        color: ${Maincolor.white};
      }
      /* 수정버튼 */
      .edit-btn {
        background: ${Maincolor.btn};
      }
      /* 삭제버튼 */
      .del-btn {
        background: ${Maincolor.input};
      }
    }
  }
  .add-recheck-content {
    font-size: 14px;
    line-height: 120%;
    color: #515151;
    & div {
      margin-top: 32px;
      text-align: right;
      & button {
        margin-left: 5px;
      }
    }
  }

  // 수정 파일 업로드 버튼
  .file-edit-wrap {
    button {
      background: none;
      border: none;
      margin-left: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

// 등록페이지
export const JobManagerAddSty = styled.div`
  ul {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    gap: 10px 20px;
    padding: 40px 50px 15px 50px;
    li {
      h3 {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -0.27px;
        color: ${Maincolor.black};
        margin-bottom: 15px;
      }
      input {
        width: 282px;
        height: 40px;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid ${Maincolor.input};
        background: ${Maincolor.white};
      }
    }
    .email-input {
      input {
        width: 584px;
        height: 40px;
      }
    }

    /* 프로필사진 업로드 */
    .photo-upload {
      position: relative;
      & > h3 {
        margin-bottom: 8px;
      }
      .file-place-hold {
        position: absolute;
        height: 40px;
        top: 33px;
        left: 0;
        z-index: 9;
      }
      input {
        margin-left: 120px;
        width: 466px;
        height: 38px;
        border: 1px solid ${Maincolor.grayMedium};
        border-radius: 4px;
        z-index: -1;
      }
      input[type="file"]::file-selector-button {
        position: absolute;
        top: 33px;
        left: 0px;
        width: 110px;
        height: 40px;
        background: ${Maincolor.btn};
        color: ${Maincolor.white};
        border: 1px solid ${Maincolor.btn};
        border-radius: 6px;
        cursor: pointer;
      }
      & > span {
        font-size: 14px;
        font-weight: 400;
        margin-top: 10px;
        width: 200%;
        color: #eb5757;
      }
    }
    .error-class {
      padding-left: 2px;
      height: 14px;
      margin-top: 3px;
      font-size: 10px;
      color: ${Maincolor.red};
    }
  }

  .add-accept {
    display: flex;
    justify-content: center;
    align-items: center;
    .add-recheck-content {
      font-size: 14px;
      line-height: 120%;
      color: #515151;
      & div {
        margin-top: 32px;
        text-align: right;
        & button {
          margin-left: 5px;
        }
      }
    }
  }
`;
