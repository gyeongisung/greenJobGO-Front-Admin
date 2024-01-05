import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const JobManagerWrap = styled.div`
  margin: 0 auto;
  padding: 1%;
  width: 100%;
  max-width: 1440px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  .job-title {
    width: 82%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    h3 {
      font-size: 24px;
      font-weight: 700;
      padding-left: 10px;
    }
  }
  .job-content-wrap {
    width: 100%;
    margin: 0 auto;
    /* 담당자 등록 버튼 */
    .maganer-add {
      float: right;
      margin: 40px 20px;
      & > button {
        width: 105px;
        height: 40px;
      }
    }
  }
`;
export const JobManagerBoxWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  /* padding: 1%; */
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
            font-size: 14px;
            font-weight: 700;
            padding-right: 10px;
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
        width: 100px;
        height: 40px;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        color: ${Maincolor.white};
      }
      /* 수정버튼 */
      .edit-btn {
        background: ${Maincolor.grayDeep};
      }
      /* 삭제버튼 */
      .del-btn {
        background: ${Maincolor.grayLight2};
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
    gap: 20px;
    padding: 24px;
    li {
      h3 {
        margin-bottom: 14px;
      }
      input {
        width: 292px;
        height: 40px;
        padding: 10px;
        border-radius: 6px;
        border: 1px solid ${Maincolor.grayMedium};
        background: ${Maincolor.white};
      }
    }
    .email-input {
      input {
        width: 604px;
        height: 40px;
      }
    }

    /* 프로필사진 업로드 */
    .photo-upload {
      position: relative;

      input {
        /* position: absolute;
        top: 40px;
        left: 120px; */
        margin-left: 120px;
        width: 486px;
        height: 40px;
        border: 1px solid ${Maincolor.grayMedium};
        border-radius: 6px;
      }
      input[type="file"]::file-selector-button {
        position: absolute;
        top: 37px;
        left: 0px;
        width: 110px;
        height: 40px;
        background: ${Maincolor.grayDeep};
        color: ${Maincolor.white};
        border: 1px solid ${Maincolor.grayDeep};
        border-radius: 6px;
        cursor: pointer;
      }
      p {
        margin-top: 10px;
        width: 200%;
        color: #eb5757;
      }
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
