import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LoginInner = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    :first-of-type {
      width: 50%;
      height: 100vh;
      img {
        width: 100%;
        height: 100vh;
      }
    }
    :last-of-type {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      margin-right: 12.5%;
      .login-title {
        padding-left: 65px;
      }
      form {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        gap: 25px;
        div {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 20px;
          font-weight: 600;
          input {
            width: 440px;
            height: 40px;
            border: 1px solid black;
            border-radius: 6px;
            padding: 0 5px;
          }
          button {
            width: 440px;
            height: 50px;
            font-size: 16px;
            font-weight: 600;
            color: ${Maincolor.white};
            background: ${Maincolor.admintxt};
            border: 1px solid ${Maincolor.admintxt};
            border-radius: 6px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
