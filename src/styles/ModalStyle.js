import styled from "@emotion/styled";

export const ModalWrap = styled.div`
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
`;
export const ModalInner = styled.div`
  position: absolute;
  width: 45%;
  height: 75%;
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
  .modal-btm {
    width: 100%;
    padding: 0 80px;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        div {
          display: flex;
          :last-of-type {
            border: none;
          }
          h3 {
            font-size: 18px;
          }
          input {
            width: 100%;
            height: 40px;
            border: 1px solid #a4a4a4;
            border-radius: 6px;
          }
        }
      }
    }
  }
  .modal-ok {
    margin-top: 30px;
    button {
      color: #fff;
      background: #6d6d6d;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export const CompanyAcceptModalWrap = styled.div`
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
  .company-modal-inner {
    position: absolute;
    width: 40%;
    height: 70%;
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
    .modal-btm {
      width: 100%;
      padding: 0 50px;
      .company-info {
        > h3 {
          width: 0;
          font-size: 18px;
          margin-top: 25px;
        }
        > input {
          width: 100%;
          height: 40px;
          border: 1px solid #a4a4a4;
          border-radius: 6px;
          padding: 0px 7px;
        }
      }
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin-top: 15px;
        li {
          width: 100%;
          display: flex;
          gap: 20px;
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
              padding: 0px 7px;
            }
          }
        }
      }
    }
    .modal-ok {
      padding-top: 45px;
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

export const ClassAcceptModalWrap = styled.div`
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
  .class-modal-inner {
    position: absolute;
    width: 40%;
    height: 70%;
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
    .modal-btm {
      width: 100%;
      padding: 0 50px;
      .class-category {
        > h3 {
          width: 0;
          font-size: 18px;
          margin: 15px 0 10px 0;
        }
        .class-category-box {
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

export const StudentAcceptModalWrap = styled.div`
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
  .student-modal-inner {
    position: absolute;
    width: 40%;
    height: 70%;
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
