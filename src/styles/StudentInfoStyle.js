import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const StudentInfoWrap = styled.div`
  /* padding: 30px 25px 0px 92px; */
  height: auto;
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
  }
  .buttons {
    border-top: 1px solid ${Maincolor.grayLight};
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 45px 0;
    > button {
      width: 131px;
      height: 50px;
      color: ${Maincolor.white};
      background: ${Maincolor.admintxt};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      :first-of-type {
        color: ${Maincolor.white};
        background: ${Maincolor.btn};
      }
    }
  }
`;
export const InfoBaseWrap = styled.ul`
  display: flex;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${Maincolor.header};
  color: #222;
  height: auto;
  li:first-of-type {
    max-width: 300px;
    height: auto;
    img {
      width: 100%;
    }
  }
  .info-content-left {
    font-size: 16px;
    width: 450px;
    height: auto;
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
        /* margin-bottom: 40px; */
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
          color: ${Maincolor.btn};
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
        gap: 21px;
        > span {
          :last-of-type {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      :nth-of-type(3) {
        display: flex;
        align-items: center;
        gap: 21px;
        > span {
          :first-of-type {
            margin-right: 15.4px;
          }
        }
        > input {
          border: 1px solid ${Maincolor.input};
          border-radius: 4px;
          padding: 2px 8px;
          width: 350px;
          height: 22px;
          padding-left: 3px;
          line-height: 20px;
        }
      }
      :nth-of-type(4) {
        display: flex;
        align-items: center;
        gap: 21.6px;
        > input {
          border: 1px solid ${Maincolor.input};
          border-radius: 4px;
          padding: 2px 8px;
          width: 350px;
          height: 22px;
          padding-left: 3px;
          line-height: 20px;
        }
      }
    }
    .certificate {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 980px;
      height: 26px;
      > span {
        margin-right: 21px;
      }
      > .hash-tag-wrap {
        .hash-tag-inner {
          display: flex;
          flex-wrap: wrap;
          > .hash-tag-input {
            padding: 5px 3px 3px 0;
            font-size: 16px;
            width: 300px;
            display: inline-flex;
            cursor: text;
            height: 26px;
            border: none;
          }
          > .tags {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 5px;
            font-size: 16px;
            font-weight: 400;
            color: ${Maincolor.black};
            background: ${Maincolor.search};
            border-radius: 6px;
            padding: 5px 5px 5px 10px;
            margin: 0;
            > img {
              width: 11px;
              height: 11px;
              cursor: pointer;
            }
          }
        }
      }
      .read-hashtag {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        > div {
          height: 26px;
          display: flex;
          align-items: center;
          color: ${Maincolor.black};
          background: ${Maincolor.search};
          border-radius: 6px;
          padding: 5px 10px;
          margin: 0;
          > span {
            font-size: 16px;
            font-weight: 400;
            margin: 0;
          }
        }
      }
    }
  }
  .info-content-right {
    width: 50%;
    height: auto;
    div {
      font-size: 16px;
      > input {
        border: 1px solid ${Maincolor.input};
        border-radius: 4px;
        padding: 2px 8px;
        width: 350px;
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
        margin-bottom: 26px;
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
`;
export const InfoResumeWrap = styled.div`
  height: 310px;
  /* border-bottom: 1px solid ${Maincolor.header}; */
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
      :nth-of-type(2) {
        .oneword {
          > input {
            width: 690px;
            height: 40px;
            border: 1px solid ${Maincolor.input};
            padding: 0 10px;
            border-radius: 4px;
          }
          > p {
            color: ${Maincolor.red};
            padding: 8px 0 0 4px;
          }
        }
      }
      :nth-of-type(3) {
        margin-top: 30px;
        .file-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 690px;
          height: 40px;
          line-height: 40px;
          background: ${Maincolor.search};
          border-radius: 6px;
          padding: 0px 13px 0 10px;
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
        .edit-file-box {
          display: flex;
          align-items: center;
          gap: 10px;
          .upload-name {
            display: inline-block;
            width: 570px;
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
            border: 1px solid ${Maincolor.input};
            border-radius: 4px;
            color: ${Maincolor.input};
          }
          label {
            display: inline-block;
            width: 110px;
            height: 40px;
            line-height: 40px;
            color: ${Maincolor.white};
            border-radius: 6px;
            text-align: center;
            background-color: ${Maincolor.grayDeep};
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
          > div {
            display: flex;
            gap: 5px;
            padding-left: 5px;
            button {
              width: 85px;
              height: 40px;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              :first-of-type {
                color: ${Maincolor.white};
                background: ${Maincolor.sectiontitle};
              }
              /* :last-of-type {
                color: ${Maincolor.sectiontitle};
                background: ${Maincolor.white};
                border: 1px solid ${Maincolor.sectiontitle};
              } */
            }
          }
        }
      }
    }
  }
`;
export const InfoPofolWrap = styled.ul`
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
        background: ${Maincolor.btn};
        border: 1px solid ${Maincolor.btn};
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
          border: 1px solid ${Maincolor.search};
          border-radius: 6px;
          margin-bottom: 14px;
          > div {
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: ${Maincolor.search};
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
            .main-pofol {
              font-size: 14px;
              background: ${Maincolor.admintxt};
              border-radius: 4px;
              > span {
                width: 70px;
                height: 28px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
                color: ${Maincolor.white};
              }
            }
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
          background: ${Maincolor.btn};
          border: 1px solid ${Maincolor.btn};
          border-radius: 6px;
          cursor: pointer;
        }
      }
      :last-of-type {
        display: flex;
        justify-content: space-between;
        gap: 40px;
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
            display: flex;
            gap: 10px;
            margin-bottom: 14px;
            .portfolio-inner {
              width: 650px;
              display: flex;
              flex-direction: column;
              border: 1px solid ${Maincolor.search};
              border-radius: 6px;
              .portfolio-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: ${Maincolor.search};
                height: 40px;
                div {
                  :first-of-type {
                    display: flex;
                    align-items: center;
                    gap: 3px;
                    padding-left: 10px;
                  }
                  :last-of-type {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding-right: 10px;
                    .main-pofol-icon {
                      width: 20px;
                      font-size: 18px;
                      color: ${Maincolor.admintxt};
                    }
                    .delete-icon {
                      font-size: 18px;
                      color: ${Maincolor.btn};
                    }
                  }
                  .main-pofol {
                    font-size: 14px;
                    background: ${Maincolor.admintxt};
                    border-radius: 4px;
                    padding: 0;
                    > span {
                      width: 70px;
                      height: 28px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      gap: 5px;
                      color: ${Maincolor.white};
                    }
                  }
                }
              }
              .portfolio-btm {
                width: 690px;
                height: 60px;
                padding: 10px;
              }
            }
            .main-check {
              line-height: 45px;
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
