import styled from "@emotion/styled";
import { Maincolor, ellipsis } from "./GlobalStyle";

export const StudentMgmtWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .student-title {
    width: 1500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    h3 {
      margin: 30px 0;
      font-size: 24px;
      letter-spacing: -0.96px;
      color: ${Maincolor.black};
    }
  }
`;

export const StudentMgmtInner = styled.div`
  .student-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95px;
    border-radius: 5px;
    background: ${Maincolor.maingray};
    gap: 10px;
    .select-wrap {
      background: ${Maincolor.white};

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
      }
      select::-ms-expand {
        display: none;
      }
    }
    form {
      display: flex;
      gap: 5px;
      input {
        padding-left: 10px;
        width: 725px;
        height: 40px;
        border: 1px solid ${Maincolor.input};
        border-radius: 3px;
      }
    }
    .searchbtn {
      width: 140px;
      height: 40px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      background: ${Maincolor.btn};
      color: #fff;
    }
  }

  .student-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    margin-top: 40px;
    margin-bottom: 0;
    button {
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      :first-of-type {
        background: ${Maincolor.input};
        width: 105px;
        height: 40px;
      }
      :nth-of-type(2) {
        background: ${Maincolor.btn};
        width: 143px;
        height: 40px;
      }
      :nth-of-type(3) {
        background: ${Maincolor.admintxt};
        width: 143px;
        height: 40px;
      }
    }
  }
  .total-count {
    font-size: 14px;
    color: #888888;
    height: 14px;
    line-height: 14px;
    margin-bottom: 10px;
  }
`;
export const StudentTable = styled.div`
  position: relative;
  width: 1500px;
  height: 54vh;
  text-align: center;
  overflow: hidden;
  background: #fff;
  > ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(11, 43px);
    border-top: 1px solid ${Maincolor.sectiontitle};
    > li {
      line-height: 42px;
      border: 1px solid ${Maincolor.sectiontitle};
      border-bottom: none;
      :first-of-type {
        background: ${Maincolor.search};
        color: ${Maincolor.black};
        border-top: 0;
      }
      :last-of-type {
        border-bottom: 1px solid ${Maincolor.sectiontitle};
      }
      ul {
        height: 100%;
        display: grid;
        grid-template-columns: 0.2fr 0.5fr 1.5fr 0.8fr 0.5fr 0.3fr 0.5fr 0.5fr 0.5fr 0.35fr 0.35fr 0.35fr;
        > li {
          color: #222;
          padding: 0 5px;
          ${ellipsis.one}
          cursor: pointer;
          :not(:last-of-type) {
            border-bottom: none;
            border-right: 1px solid ${Maincolor.sectiontitle};
          }
        }
        .student-table-th {
          cursor: default;
        }
      }
    }
  }
`;
