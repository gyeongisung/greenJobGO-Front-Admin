import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const ExcelUploadModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: "Pretendard", sans-serif;
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  .modal-inner {
    position: absolute;
    width: 45%;
    height: 45%;
    top: 50%;
    left: 50%;
    text-align: center;
    overflow: hidden;
    border-radius: 10px;
    background-color: ${Maincolor.white};
    transform: translate(-50%, -50%);
    animation: modal-show 0.3s;
    z-index: 99;
    .modal-top {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      padding: 30px 0 30px 0;
      margin-bottom: 30px;
      border-radius: 10px 10px 0 0;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
      li {
        :last-of-type {
          position: absolute;
          top: 3%.5;
          right: 3.5%;
          font-size: 21px;
          cursor: pointer;
        }
        h2 {
          font-size: 23px;
          color: #000;
        }
      }
    }
    .content {
      width: 100%;
      text-align: start;
      padding: 0 70px;
      margin-bottom: 30px;
      > h3 {
        margin-bottom: 15px;
      }
    }
    .file-box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .upload-name {
        display: inline-block;
        width: 70%;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border: 1px solid #a4a4a4;
        border-radius: 6px;
        color: #6d6d6d;
      }
      label {
        display: inline-block;
        height: 40px;
        color: #fff;
        border-radius: 6px;
        padding: 10px 30px;
        vertical-align: middle;
        background-color: #6d6d6d;
        cursor: pointer;
      }
      input[type="file"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
      }
    }
    .btn {
      padding-top: 50px;
      button {
        width: 150px;
        height: 50px;
        color: #fff;
        background: #6d6d6d;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const ExcelAcceptModalWrap = styled.div`
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
    z-index: 50;
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
    z-index: 99;
    > div {
      text-align: center;
    }
    h2 {
      display: flex;
      font-size: 18px;
      width: 100%;
    }
    .header {
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      cursor: pointer;
    }
    .content {
      display: flex;
      font-size: 14px;
      font-weight: 500;
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
