import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const AcceptModalWrap = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0; */
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
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
      img {
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

export const CompanyAcceptModalWrap = styled.div`
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
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  .company-modal-inner {
    position: absolute;
    width: 700px;
    height: 640px;
    top: 50%;
    left: 50%;
    text-align: center;
    overflow: hidden;
    border-radius: 10px;
    background-color: ${Maincolor.white};
    transform: translate(-50%, -50%);
    animation: modal-show 0.3s;
    z-index: 99;
    /* padding-bottom: 40px; */
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
        & img {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        :last-of-type {
          position: absolute;
          top: 3%.5;
          right: 3.5%;
          font-size: 21px;
          cursor: pointer;
        }
        h2 {
          font-size: 20px;
          color: #222;
          font-weight: 500;
        }
      }
    }
    .modal-btm {
      width: 100%;
      padding: 0 50px;

      .company-info {
        > h3 {
          width: 0;
          font-size: 18px;
          color: #222;
          font-weight: 500;
          margin-top: 10px;
          margin-bottom: 15px;
        }
        > input {
          width: 100%;
          height: 40px;
          border: 1px solid #a4a4a4;
          border-radius: 6px;
          padding: 0px 10px;
        }
      }
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 15px;
        li {
          width: 100%;
          display: flex;
          gap: 20px;

          /* 에러처리 */
          .error-class {
            width: 200px;
            text-align: left;
            padding-left: 2px;
            height: 14px;
            margin-top: 3px;
            font-size: 10px;
            color: ${Maincolor.red};
          }

          > div {
            width: 100%;
            border-radius: 6px;
            > h3 {
              width: 0;
              font-size: 18px;
              font-weight: 500;
              margin-bottom: 15px;
            }
            > input {
              width: 100%;
              height: 40px;
              border: 1px solid #a4a4a4;
              border-radius: 6px;
              padding: 0px 10px;
            }
          }
        }
      }
    }
    .modal-ok {
      padding: 40px 0;
      button {
        font-weight: 500;
        font-size: 16px;
        width: 150px;
        height: 50px;
        color: #fff;
        background: ${Maincolor.admintxt};
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const ClassAcceptModalWrap = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0; */
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
  .class-modal-inner {
    position: absolute;
    width: 700px;
    height: 640px;
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
      margin-bottom: 40px;
      border-radius: 10px 10px 0 0;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
      li {
        :last-of-type {
          position: absolute;
          top: 3.5%;
          right: 3.5%;
          cursor: pointer;
          & img {
            width: 18px;
            height: 18px;
            object-fit: contain;
          }
        }
        h2 {
          font-size: 20px;
          color: #222;
          font-weight: 500;
        }
      }
    }
    .modal-btm {
      width: 100%;
      padding: 0 40px;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 15px;
        .select-wrap {
          /* border-radius: 6px; */
          background: ${Maincolor.white};
          & > p {
            width: 200px;
          }
          select {
            width: 155px;
            height: 40px;
            -o-appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: 1px solid ${Maincolor.input};
            background: url(${process.env.PUBLIC_URL}/assets/Arrowdown.png)
              no-repeat calc(100% - 12px) 50%/11px auto;
            padding: 0 28px 0 10px;
            border-radius: 0;
          }
          select::-ms-expand {
            display: none;
          }
        }
        > li {
          height: 100%;
          display: flex;
          width: 100%;
          gap: 20px;
          margin-bottom: 5px;
          /* 에러처리 */
          .error-class {
            width: 200px;
            text-align: left;
            padding-left: 2px;
            height: 14px;
            margin-top: 3px;
            font-size: 10px;
            color: ${Maincolor.red};
          }
          .class-name {
            > input {
              width: 440px;
              height: 40px;
              border: 1px solid #a4a4a4;
              border-radius: 4px;
              padding: 0px 10px;
            }
          }
          > div {
            width: 100%;
            border-radius: 6px;
            .class-category-box {
              width: 0;
              > select {
                /* width: 145px; */
                height: 40px;
                border-radius: 4px;
                border: 1px solid ${Maincolor.input};
                cursor: pointer;
                :first-of-type {
                  width: 155px;
                }
              }
            }
            > h3 {
              width: 0;
              font-size: 18px;
              font-weight: 500;
              margin-bottom: 10px;
            }
            > input {
              width: 100%;
              height: 40px;
              border: 1px solid ${Maincolor.input};
              border-radius: 4px;
              padding: 0px 10px;
            }
          }
        }
        .date-picker-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0px;
          /* align-items: center; */
          > div {
            width: 100%;
            /* display: flex; */
            /* align-items: end; */
            .datePicker {
              /* display: flex;
              flex-direction: column; */
              /* flex-wrap: wrap; */
            }
            .date-error {
              display: flex;
              gap: 130px;
              justify-content: left;
            }
            /* .date-picker {
              width: 100%;
              height: 40px;
              border: 1px solid ${Maincolor.input};
              text-align: center;
              border-radius: 4px;
              padding: 0px 80px;
            }
            .react-datepicker__day:nth-of-type(1) {
              color: red;
            }
            .react-datepicker__day:nth-of-type(7) {
              color: #8685ff;
            }
            .react-datepicker__day-name:nth-of-type(1) {
              color: #ff5555;
            }
            .react-datepicker__day-name:nth-of-type(7) {
              color: #8685ff;
            }
          }
        } */
          }
        }
      }
    }
    .modal-ok {
      padding: 30px 0;
      > button {
        width: 150px;
        height: 50px;
        color: #fff;
        background: ${Maincolor.admintxt};
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const StudentAcceptModalWrap = styled.div`
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
  .student-modal-inner {
    position: absolute;
    width: 40%;
    height: 70%;
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
    .modal-btm {
      width: 100%;
      padding: 0 50px;
      .student-category {
        > h3 {
          width: 0;
          font-size: 18px;
          margin: 15px 0 10px 0;
        }
        .student-category-box {
          width: 0;
          > select {
            width: 150px;
            height: 40px;
            border-radius: 6px;
            border: 1px solid #a4a4a4;
            cursor: pointer;
          }
        }
      }
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 15px;
        > li {
          display: flex;
          width: 100%;
          gap: 15px;
          > div {
            width: 100%;
            border-radius: 6px;
            > h3 {
              width: 0;
              font-size: 18px;
              margin-bottom: 5px;
            }
            > input {
              width: 100%;
              height: 40px;
              border: 1px solid #a4a4a4;
              border-radius: 6px;
            }
          }
        }
        .date-picker-wrap {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          > div {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 15px;
            .date-picker {
              width: 100%;
              height: 40px;
              border: 1px solid #a4a4a4;
              text-align: center;
              border-radius: 6px;
              padding: 0px 80px;
            }
            .react-datepicker__day:nth-of-type(1) {
              color: red;
            }
            .react-datepicker__day:nth-of-type(7) {
              color: #8685ff;
            }
            .react-datepicker__day-name:nth-of-type(1) {
              color: #ff5555;
            }
            .react-datepicker__day-name:nth-of-type(7) {
              color: #8685ff;
            }
          }
        }
      }
    }
    .modal-ok {
      margin-top: 50px;
      > button {
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

export const PortFolioAddWrap = styled.div`
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
  .add-modal-inner {
    position: absolute;
    width: 782px;
    height: 494px;
    top: 50%;
    left: 50%;
    text-align: center;
    overflow: hidden;
    border-radius: 10px;
    background-color: ${Maincolor.white};
    transform: translate(-50%, -50%);
    animation: modal-show 0.3s;
    z-index: 99;
    padding-bottom: 40px;
  }
  .add-modal-top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
    > div {
      :last-of-type {
        position: absolute;
        top: 3%.5;
        right: 3.5%;
        font-size: 21px;
        cursor: pointer;
      }
    }
  }
  .add-modal-btm {
    padding: 0px 40px;
    li {
      :nth-of-type(3) {
        padding-top: 14px;
        > textarea {
          width: 702px;
          height: 100px;
          resize: none;
          padding: 10px;
          border: 1px solid #aaa;
          border-radius: 4px;
        }
      }
      :nth-of-type(4) {
        text-align: start;
        padding-top: 14px;
        > span {
          display: block;
          font-size: 14px;
          padding-bottom: 8px;
          color: #eb5757;
        }
      }
      :last-of-type {
        padding-top: 32px;
        > button {
          width: 150px;
          height: 50px;
          font-size: 16px;
          color: #fff;
          background: #6d6d6d;
          border: 1px solid #6d6d6d;
          border-radius: 6px;
          cursor: pointer;
        }
      }
    }
    .radio-box {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 16px;
      padding: 40px 0 14px 0;
      > label {
        :first-of-type {
          margin-right: 18px;
        }
      }
      > input {
        width: 16px;
        height: 16px;
        line-height: 16px;
      }
    }
    .file-box {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 10px;
      .upload-link {
        width: 702px;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #a4a4a4;
        border-radius: 6px;
      }
      .upload-name {
        display: inline-block;
        width: 584px;
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
  }
`;

export const EnrollCategoryWrap = styled.div`
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
  .Enroll-modal-inner {
    position: absolute;
    width: 684px;
    height: 624px;
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
          font-size: 20px;
          color: #000;
          font-weight: 500;
        }
      }
    }
    > div {
      display: flex;
      padding: 35px 40px 15px 40px;
      h3 {
        font-size: 18px;
        font-weight: 500;
      }
    }
    .modal-btm {
      height: 360px;
      padding: 0 40px;
      overflow-y: auto;
      margin-right: 32px;
      .saveBtn {
        background: ${Maincolor.sectiontitle};
        color: #fff;
        margin-left: 20px;
        width: 65px;
        height: 32px;
        border-radius: 4px;
      }
      .cancelBtn {
        width: 65px;
        height: 32px;
        border-radius: 4px;
        border: 1px solid ${Maincolor.sectiontitle};
        background: ${Maincolor.white};
        color: ${Maincolor.sectiontitle};
      }
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        input {
          width: 292px;
          height: 40px;
          line-height: 40px;
          border: 1px solid #aaa;
          border-radius: 4px;
          padding: 9px;
        }
        button {
          width: 40px;
          height: 40px;
          /* color: #fff; */
          background: white;
          border: none;
          /* border-radius: 6px; */
          cursor: pointer;
          svg {
            color: ${Maincolor.btn};
            font-size: 20px;
          }
        }
      }
    }
    .accept-button {
      display: flex;
      justify-content: center;
      align-items: center;
      > button {
        width: 555px;
        height: 50px;
        font-size: 16px;
        color: #fff;
        background: #228fcf;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      }
    }
  }
`;
