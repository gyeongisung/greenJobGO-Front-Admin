import styled from "@emotion/styled";
import { Maincolor, ellipsis } from "./GlobalStyle";

export const PermanentlyWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .delete-title {
    width: 1500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding: 30px 0;
    h3 {
      font-size: 24px;
      padding-left: 10px;
    }
    div {
      img {
        margin-right: 5px;
      }
    }
  }
`;

export const PermanentlyInner = styled.div`
  .delete-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1500px;
    height: 95px;
    border-radius: 5px;
    background: ${Maincolor.search};
    gap: 10px;
    > li {
      padding-right: 20px;
      > span {
        font-size: 16px;
        font-weight: 500;
        padding-right: 10px;
      }
      :nth-of-type(1) {
        > select {
          border: 1px solid ${Maincolor.input};
          border-radius: 3px;
          width: 160px;
          height: 40px;
          text-align: center;
          cursor: pointer;
        }
      }
      :nth-of-type(2) {
        > select {
          border: 1px solid ${Maincolor.input};
          border-radius: 3px;
          width: 540px;
          height: 40px;
          text-align: center;
          cursor: pointer;
        }
      }
      :nth-of-type(3) {
        > .delete-form {
          display: flex;
          gap: 5px;
          input {
            padding-left: 10px;
            width: 200px;
            height: 40px;
            border: 1px solid ${Maincolor.input};
            border-radius: 3px;
          }
          label {
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            font-weight: 500;
            padding-right: 10px;
          }
        }
      }
      :nth-of-type(4) {
        > button {
          width: 140px;
          height: 40px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          color: #fff;
          background: ${Maincolor.btn};
        }
      }
    }
  }
  .delete-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 40px 0 5px 0;
    button {
      width: 105px;
      height: 40px;
      color: #fff;
      background: ${Maincolor.input};
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .total-count {
    padding-left: 10px;
    font-size: 14px;
    color: ${Maincolor.btn};
    height: 14px;
    line-height: 14px;
    margin-bottom: 5px;
  }
`;
export const DeleteTable = styled.div`
  position: relative;
  width: 100%;
  height: 52vh;
  text-align: center;
  border: 1px solid ${Maincolor.sectiontitle};
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  > ul {
    width: 1500px;
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
        grid-template-columns: 0.15fr 0.25fr 0.55fr 1.5fr 0.4fr 0.8fr 0.5fr 0.25fr 0.4fr 0.45fr;
        > li {
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
