import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const DeleteModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  .content-wrap {
    position: absolute;
    width: 21.5%;
    height: 15.5vh;
    top: 50%;
    left: 50%;
    padding: 15px 20px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: ${Maincolor.white};
    transform: translate(-50%, -50%);
    animation: modal-show 0.3s;
    z-index: 999;
    > div {
      text-align: center;
    }
    .header {
      display: flex;
      justify-content: flex-end;
      font-size: 14px;
      cursor: pointer;
      & img {
        width: 12px;
        height: 12px;
        object-fit: contain;
      }
    }
    .content {
      display: flex;
      font-size: 14px;
      font-weight: 400;
    }
    .btns {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 5px;
      button {
        width: 65px;
        height: 32px;
        line-height: 32px;
        background: #176b87;
        color: #fff;
        border: 1px solid;
        border-radius: 4px;
        cursor: pointer;
        :first-of-type {
          background: #7e7e7e;
        }
        :last-of-type {
          background: #228fcf;
        }
      }
    }
  }
`;

export const HardDeleteModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  .content-wrap {
    position: absolute;
    width: 410px;
    height: 141px;
    top: 50%;
    left: 50%;
    padding: 20px 30px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: ${Maincolor.white};
    transform: translate(-50%, -50%);
    animation: modal-show 0.3s;
    z-index: 999;
    > div {
      text-align: center;
    }
    .header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 500;
      > span {
        color: ${Maincolor.black};
        :last-of-type {
          cursor: pointer;
        }
        & img {
          width: 12px;
          height: 12px;
          object-fit: contain;
        }
      }
    }
    .content {
      display: flex;
      gap: 5px;
      font-size: 13px;
      font-weight: 400;
    }
    .btns {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 5px;
      button {
        width: 65px;
        height: 32px;
        line-height: 32px;
        color: ${Maincolor.white};
        border: none;
        border-radius: 4px;
        cursor: pointer;
        :first-of-type {
          background: ${Maincolor.sectiontitle};
        }
        :last-of-type {
          background: ${Maincolor.admintxt};
        }
      }
    }
  }
`;
