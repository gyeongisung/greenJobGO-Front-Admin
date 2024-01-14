import styled from "@emotion/styled";

export const StudentInfoWrap = styled.div`
  padding: 50px 100px 20px 100px;
  height: 100%;
  overflow-y: scroll;
  .info-contain {
    h2 {
      font-size: 24px;
      margin-bottom: 30px;
    }
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
              font-size: 18px;
              width: 100px;
              height: 25px;
            }
            .student-name {
              font-size: 20px;
              font-weight: 600;
            }
            .student-age {
              font-size: 14px;
              font-weight: 500;
              color: #6d6d6d;
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
            width: 100%;
            height: 22px;
            padding-left: 3px;
            line-height: 20px;
          }
          > span {
            :first-of-type {
              font-size: 17px;
              font-weight: 600;
            }
          }
          :not(:last-of-type) {
            margin-bottom: 25px;
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
    .portfolio-list {
      width: 100%;
      padding-bottom: 30px;

      li {
        width: 100%;
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
                padding-right: 12px;
                padding-left: 5px;
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
              }
            }
          }
        }
      }
    }
    > div {
      :nth-of-type(2) {
        height: 310px;
        border-bottom: 1px solid #7b7b7b;
        li {
          font-size: 16px;
          :nth-of-type(1) {
            padding-top: 40px;
          }
          :nth-of-type(2) {
            padding-top: 30px;
          }
          :nth-of-type(3) {
            padding-top: 30px;
          }
        }
      }
    }
  }
  .buttons {
    display: flex;
    width: 100%;
    div {
      :first-of-type {
        padding-right: 400px;
        > button {
          width: 131px;
          height: 50px;
          color: #fff;
          background: #aaa;
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
          background: #6d6d6d;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          :first-of-type {
            width: 180px;
            height: 50px;
            color: #fff;
            background: #aaa;
          }
        }
      }
    }
  }
`;
