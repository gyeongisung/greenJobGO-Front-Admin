import styled from "@emotion/styled";

export const ExcelUploadModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: "Pretendard", sans-serif;
  .dim {
    position: absolute;
    width: 1980px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    z-index: 10;
  }
  .modal-inner {
    position: absolute;
    width: 45%;
    height: 45%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: #ffffff;
    border-radius: 10px;
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
        padding: 10px 20px;
        vertical-align: middle;
        background-color: #6d6d6d;
        cursor: pointer;
        margin-left: 10px;
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
      padding-top: 40px;
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
