import styled from "@emotion/styled";

export const JobManagerWrap = styled.div`
  margin: 0 auto;
  padding: 1%;
  .manager-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 1%;
    .manager-profile {
      width: 440px;
      height: 630px;
      border-radius: 10px;
      border: 1px #dfdfdf solid;
      padding: 20px;
      ul {
        /* 담당자 한마디 */
        li:nth-of-type(2) {   
          font-weight: 500;
          font-size: 20px;
          line-height: 29px;
        }
        /* 담당자 이름 */
        li:nth-of-type(3) {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
    }
  }
`;
