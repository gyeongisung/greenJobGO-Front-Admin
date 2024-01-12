import styled from "@emotion/styled";

export const StudentInfoWrap = styled.div`
  padding: 50px 100px 20px 100px;
  .info-contain {
    h2 {
      font-size: 24px;
      margin-bottom: 30px;
    }
    .info-content {
      display: flex;
      gap: 40px;
      margin-bottom: 40px;
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
            margin-bottom: 25px;
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
            span {
              :first-of-type {
                font-size: 20px;
                font-weight: 600;
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
          }
          :nth-of-type(4) {
            display: flex;
            align-items: center;
            gap: 28px;
          }
          :nth-of-type(5) {
            display: flex;
            align-items: center;
            gap: 18px;
          }
        }
      }
      .info-content-right {
        padding-left: 30px;
        div {
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
    > div {
      :last-of-type {
        height: 37vh;
        /* background: green; */
        padding-bottom: 30px;
      }
    }
  }
  .buttons {
    display: flex;
    width: 100%;
    div {
      :first-of-type {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 50%;
        > button {
          width: 180px;
          height: 50px;
          color: #fff;
          background: #6d6d6d;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      }
      :last-of-type {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        width: 50%;
        > button {
          width: 105px;
          height: 40px;
          color: #fff;
          background: #6d6d6d;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }
`;
