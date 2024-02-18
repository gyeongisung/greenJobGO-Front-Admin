import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const NotFoundWrap = styled.div`
  background: ${Maincolor.adminmode};
  .inner {
    width: 720px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > div {
      :nth-of-type(1) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        > img {
          width: 450px;
        }
      }
      :nth-of-type(2) {
        padding-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 100px;
        gap: 5px;
        h2 {
          padding-bottom: 30px;
        }
        span {
          font-size: 18px;
          color: ${Maincolor.btn};
        }
        .info {
          > span {
            :nth-of-type(2) {
              font-weight: 600;
              color: ${Maincolor.black};
              line-height: 10px;
            }
          }
        }
      }
      :nth-of-type(3) {
        padding-top: 70px;
        > button {
          width: 160px;
          height: 40px;
          border: none;
          border-radius: 6px;
          background: ${Maincolor.maingray};
          cursor: pointer;
        }
      }
    }
  }
`;
