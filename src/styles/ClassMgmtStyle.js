import styled from "@emotion/styled";
import { Maincolor, ellipsis } from "./GlobalStyle";

export const ClassMgmtWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .class-title {
    width: 86%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h3 {
      margin: 30px 0;
      font-size: 24px;
      letter-spacing: -0.96px;
      color: ${Maincolor.black};
      /* padding-left: 10px; */
    }
  }
`;

export const ClassMgmtInner = styled.div`
  .class-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1434px;
    height: 95px;
    border-radius: 5px;
    background: ${Maincolor.maingray};
    gap: 10px;
    /* > li {
      line-height: 1; */
    /* > select {
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 150px;
        height: 40px;
        text-align: center;
        cursor: pointer;
      } */

    .select-wrap {
      /* border-radius: 6px; */
      background: ${Maincolor.white};

      select {
        width: 155px;
        height: 40px;
        -o-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 1px solid ${Maincolor.input};
        border-radius: 0;
        background: url(${process.env.PUBLIC_URL}/assets/Arrowdown.png)
          no-repeat calc(100% - 12px) 50%/11px auto;
        padding: 0 28px 0 10px;
      }
      select::-ms-expand {
        display: none;
      }
    }

    .class-form {
      display: flex;
      gap: 5px;
      input {
        padding-left: 10px;
        width: 667px;
        height: 40px;
        border: 1px solid ${Maincolor.input};
        border-radius: 4px;
      }
    }
    button {
      width: 140px;
      height: 40px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      color: #fff;
      background: ${Maincolor.btn};
    }
  }
  /* } */
  .class-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 0;
    /* height: 90px; */
    gap: 5px;
    button {
      color: #fff;
      background: ${Maincolor.btn};
      border: none;
      border-radius: 5px;
      cursor: pointer;
      :first-of-type {
        width: 143px;
        height: 40px;
      }
      :nth-of-type(2) {
        width: 105px;
        height: 40px;
        background: ${Maincolor.input};
      }
      :nth-of-type(3) {
        width: 105px;
        height: 40px;
        background: ${Maincolor.admintxt};
      }
    }
  }
  .total-count {
    /* padding-left: 10px; */
    font-size: 14px;
    color: #888888;
    height: 14px;
    line-height: 14px;
    margin-bottom: 10px;
  }
`;
export const ClassTable = styled.div`
  position: relative;
  width: 100%;
  height: 52vh;
  text-align: center;
  /* border: 1px solid #ccc; */
  border: 1px solid ${Maincolor.sectiontitle};
  /* border-radius: 5px; */
  overflow: hidden;
  background: #fff;
  /* box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2); */
  box-sizing: border-box;
  > ul {
    width: 1434px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 43px);
    > li {
      line-height: 42px;
      border-top: 1px solid ${Maincolor.sectiontitle};
      :first-of-type {
        background: ${Maincolor.search};
        color: ${Maincolor.black};
        border-top: 0;
      }
      :last-of-type {
        border-bottom: 1px solid ${Maincolor.sectiontitle};
      }
      > ul {
        height: 100%;
        display: grid;
        grid-template-columns: 0.15fr 0.2fr 0.4fr 1.5fr 0.4fr 0.8fr 0.7fr 0.4fr 0.4fr;
        > li {
          cursor: pointer;
          padding: 0 5px;
          ${ellipsis.one}
          :not(:last-of-type) {
            border-right: 1px solid ${Maincolor.sectiontitle};
          }
        }
      }
    }
  }
`;
