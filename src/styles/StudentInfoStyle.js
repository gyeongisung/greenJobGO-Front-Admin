import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const StudentInfoWrap = styled.div`
  /* padding: 30px 25px 0px 92px; */
  height: 100%;
  overflow-y: hidden;
  .title > h2 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.96px;
    margin-top: 30px;
    margin-left: 92px;
    margin-bottom: 30px;
  }
  .info-contain {
    margin-left: 92px;
    margin-right: 25px;
    padding-right: 92px;
    overflow-y: auto;
    height: 600px;
    .info-content {
      display: flex;
      gap: 40px;
      padding-bottom: 40px;
      border-bottom: 1px solid #7b7b7b;
      color: #222;
      li:first-of-type {
        width: 300px;
        height: 240px;
        img {
          width: 100%;
        }
      }
      .info-content-left {
        div {
          :not(:last-of-type) {
            margin-bottom: 20px;
          }
          :not(:first-of-type) {
            span {
              :first-of-type {
                font-size: 17px;
                font-weight: 600;
              }
            }
          }
          :nth-of-type(1) {
            display: flex;
            align-items: end;
            gap: 8px;
            margin-bottom: 40px;
            > input {
              border: 1px solid ${Maincolor.input};
              border-radius: 4px;
              padding: 2px 6px;
              font-size: 18px;
              width: 100px;
              height: 25px;
            }
            .student-name {
              font-size: 22px;
              font-weight: 500;
              letter-spacing: -0.3px;
            }
            .student-age {
              display: flex;
              justify-content: center;
              gap: 10px;
              font-size: 16px;
              font-weight: 500;
              color: #6d6d6d;
              letter-spacing: -0.24px;
              input {
                border: 1px solid ${Maincolor.input};
                border-radius: 4px;
                padding: 2px 8px;
                width: 40px;
                height: 25px;
                padding-left: 3px;
                line-height: 20px;
              }
            }
          }
          :nth-of-type(2) {
            display: flex;
            align-items: center;
            gap: 18px;
          }
          :nth-of-type(3) {
            display: flex;
            align-items: center;
            gap: 34px;
            > input {
              border: 1px solid ${Maincolor.input};
              border-radius: 4px;
              padding: 2px 8px;
              width: 100%;
              height: 22px;
              padding-left: 3px;
              line-height: 20px;
            }
          }
          :nth-of-type(4) {
            display: flex;
            align-items: center;
            gap: 28px;
            > input {
              border: 1px solid ${Maincolor.input};
              border-radius: 4px;
              padding: 2px 8px;
              width: 100%;
              height: 22px;
              padding-left: 3px;
              line-height: 20px;
            }
          }
          :nth-of-type(5) {
            display: flex;
            align-items: center;
            gap: 18px;
            > input {
              border: 1px solid ${Maincolor.input};
              border-radius: 4px;
              padding: 2px 8px;
              width: 100%;
              height: 22px;
              padding-left: 3px;
              line-height: 20px;
            }
          }
        }
      }
      .info-content-right {
        padding-left: 30px;
        div {
          > input {
            border: 1px solid ${Maincolor.input};
            border-radius: 4px;
            padding: 2px 8px;
            width: 100%;
            height: 22px;
            padding-left: 3px;
            line-height: 20px;
          }
          > span {
            :first-of-type {
              font-size: 16px;
              font-weight: 700;
            }
          }
          :not(:last-of-type) {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 24px;
          }
          :nth-of-type(1) {
            display: flex;
            align-items: end;
            gap: 18px;
            margin-bottom: 40px;
          }
          :nth-of-type(2) {
            display: flex;
            align-items: center;
            gap: 18px;
          }
          :nth-of-type(3) {
            display: flex;
            align-items: center;
            gap: 34px;
          }
          :nth-of-type(4) {
            display: flex;
            align-items: center;
            gap: 50px;
          }
        }
      }
    }
    .info-resume {
      height: 310px;
      border-bottom: 1px solid #7b7b7b;
      padding: 40px 0;
      > ul {
        > li {
          > h2 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 30px;
            letter-spacing: -0.27px;
          }
          > h3 {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 14px;
            letter-spacing: -0.27px;
          }
          :last-of-type {
            margin-top: 30px;
            > div {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 690px;
              height: 40px;
              line-height: 40px;
              background: #e6e6e6;
              border-radius: 6px;
              padding: 0px 13px 0 10px;
              margin-top: 14px;
              a {
                font-size: 14px;
              }
              p {
                font-size: 21px;
                height: 21px;
                line-height: 21px;
                cursor: pointer;
              }
              div {
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }
    }
    .portfolio-list {
      width: 100%;
      padding-bottom: 30px;
      li {
        width: 100%;
        padding-bottom: 30px;
        :first-of-type {
          display: flex;
          justify-content: space-between;
          padding-top: 40px;
          > button {
            width: 225px;
            height: 40px;
            font-weight: 500;
            color: #fff;
            background: #6d6d6d;
            border: 1px solid #6d6d6d;
            border-radius: 6px;
            cursor: pointer;
          }
        }
        :last-of-type {
          display: flex;
          justify-content: space-between;
          > div {
            .portfolio-zero {
              width: 690px;
              height: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              > div {
                width: 100%;
                > span {
                  width: 100%;
                }
              }
            }
            .portfolio-box {
              width: 690px;
              height: 100px;
              border: 1px solid #e6e6e6;
              border-radius: 6px;
              margin-bottom: 14px;
              > div {
                width: 100%;
                height: 40px;
                line-height: 40px;
                background-color: #e6e6e6;
                display: flex;
                align-items: center;
                justify-content: space-between;
                > div {
                  display: flex;
                  align-items: center;
                  padding: 0 13px 0 10px;
                  a {
                    color: ${Maincolor.black};
                    font-size: 14px;
                    font-weight: 400;
                    margin-left: 5px;
                  }
                  p {
                    font-size: 18px;
                    height: 21px;
                    line-height: 21px;
                  }
                }
              }
              .portfolio-icons {
                display: flex;
                gap: 15px;
                font-size: 21px;
                line-height: 21px;
              }
              .delete-icon {
                font-size: 21px;
                line-height: 21px;
                cursor: pointer;
              }
              > span {
                display: block;
                padding-left: 5px;
                font-size: 14px;
                font-weight: 400;
                padding: 10px;
              }
            }
          }
        }
      }
    }
  }
  .buttons {
    border-top: 1px solid ${Maincolor.grayLight};
    display: flex;
    gap: 360px;
    height: 130px;
    width: 100%;
    div {
      margin: 40px 0 40px 92px;
      :first-of-type {
        .spacer {
          width: 39px;
        }
        > button {
          width: 131px;
          height: 50px;
          color: #fff;
          background: ${Maincolor.input};
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      }
      :last-of-type {
        display: flex;
        gap: 10px;
        > button {
          width: 131px;
          height: 50px;
          color: #fff;
          background: ${Maincolor.admintxt};
          border: none;
          border-radius: 4px;
          cursor: pointer;
          :first-of-type {
            width: 131px;
            height: 50px;
            color: #fff;
            background: ${Maincolor.btn};
          }
        }
      }
    }
  }
`;

export const StudentPFeditSty = styled.div`
  /* padding: 30px 25px 0px 92px; */
  height: 100%;
  overflow-y: hidden;
  width: 1651px;
  padding-left: 92px;
  padding-right: 100px;

  .portfolio-list {
    width: 100%;
    height: 695px;

    padding-bottom: 30px;

    > li {
      h2 {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.96px;
        margin-top: 30px;
        margin-bottom: 30px;
      }
      :first-of-type {
        display: flex;
        justify-content: space-between;
        padding-top: 40px;
        > button {
          margin-top: 70px;
          margin-bottom: 20px;
          width: 225px;
          height: 40px;
          font-weight: 500;
          color: #fff;
          background: #6d6d6d;
          border: 1px solid #6d6d6d;
          border-radius: 6px;
          cursor: pointer;
        }
      }
      :last-of-type {
        display: flex;
        justify-content: space-between;
        > div {
          .portfolio-zero {
            width: 690px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            > div {
              width: 100%;
              > span {
                width: 100%;
              }
            }
          }
          .portfolio-box {
            width: 690px;
            height: 90px;
            border: 1px solid #e6e6e6;
            border-radius: 6px;
            margin-bottom: 14px;
            > div {
              width: 100%;
              height: 40px;
              line-height: 40px;
              background-color: #e6e6e6;
              display: flex;
              align-items: center;
              justify-content: space-between;
              > div {
                display: flex;
                align-items: center;
                padding: 0 13px 0 10px;
                a {
                  color: ${Maincolor.black};
                  font-size: 14px;
                  font-weight: 400;
                  margin-left: 5px;
                }
                p {
                  font-size: 18px;
                  height: 21px;
                  line-height: 21px;
                }
              }
            }
            .portfolio-icons {
              display: flex;
              gap: 15px;
              font-size: 21px;
              line-height: 21px;
            }
            .delete-icon {
              font-size: 21px;
              line-height: 21px;
              cursor: pointer;
            }
            > span {
              display: block;
              padding-left: 5px;
              font-size: 14px;
              font-weight: 400;
              padding: 10px;
            }
          }
        }
      }
    }
  }
  .buttons {
    border-top: 1px solid ${Maincolor.grayLight};
    display: flex;
    height: 130px;
    width: 100%;
    div {
      margin: 0 auto;
      > button {
        margin: 40px 0;
        width: 131px;
        height: 50px;
        color: #fff;
        background: ${Maincolor.input};
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
`;
