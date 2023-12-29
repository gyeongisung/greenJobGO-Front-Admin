import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const JobManagerWrap = styled.div`
  margin: 0 auto;
  padding: 1%;
  /* 담당자 등록 버튼 */
  .maganer-add {
    float: right;
    & > button {
      width: 160px;
      height: 40px;
      border: 0;
      border-radius: 4px;
      margin: 40px 20px;
      cursor: pointer;
    }
  }
`;
export const JobManagerBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 1%;
  .manager-profile {
    width: 440px;
    height: 630px;
    border-radius: 12px;
    border: 1px ${Maincolor.grayLight2} solid;
    padding: 40px;
    .manager-details {
      /* 담당자 한마디 */
      font-weight: 500;
      .manager-word {
        font-size: 20px;
        margin-top: 14px;
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
          margin-top: 15px;
          span:nth-of-type(1) {
            font-weight: 700;
            padding-right: 10px;
          }
          span:nth-of-type(2) {
            font-weight: 400;
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
        background: ${Maincolor.grayLight2};
      }
      /* 삭제버튼 */
      .del-btn {
        background: ${Maincolor.grayDeep};
      }
    }
  }
`;
