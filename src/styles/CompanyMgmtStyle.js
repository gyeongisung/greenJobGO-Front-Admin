import styled from "@emotion/styled";
import { ellipsis } from "./GlobalStyle";

export const CompanyMgmtWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .company-title {
    width: 82%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    h3 {
      font-size: 24px;
      padding-left: 10px;
    }
  }
`;

export const CompanyMgmtInner = styled.div`
  /* width: 100%; */
  .company-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1340px;
    height: 95px;
    border-radius: 5px;
    background: #a4a4a4;
    gap: 10px;
    > li {
      line-height: 1;
      .company-form {
        display: flex;
        gap: 5px;
        input {
          padding-left: 10px;
          width: 725px;
          height: 40px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }
      }
      > button {
        width: 140px;
        height: 40px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background: #6d6d6d;
        color: #fff;
      }
    }
  }
  .company-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    gap: 5px;
    margin-top: 14px;
    button {
      color: #fff;
      background: #6d6d6d;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      :first-of-type {
        width: 150px;
        height: 40px;
      }
      :not(:first-of-type) {
        width: 100px;
        height: 40px;
      }
    }
  }
  .total-count {
    padding-left: 10px;
    font-size: 14px;
    color: #888888;
    height: 14px;
    line-height: 14px;
    margin-bottom: 5px;
  }
`;
export const CompanyTable = styled.div`
  position: relative;
  width: 100%;
  height: 52vh;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  > ul {
    height: 1340px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 43px);
    > li {
      line-height: 42px;
      border-top: 1px solid #ccc;
      :first-of-type {
        background: #888888;
        color: #fff;
        border-top: 0;
      }
      :last-of-type {
        border-bottom: 1px solid #ccc;
      }
      > ul {
        height: 100%;
        display: grid;
        grid-template-columns: 0.15fr 0.25fr 0.6fr 1fr 0.4fr 0.4fr 0.45fr 0.55fr 1fr;
        > li {
          padding: 0 5px;
          ${ellipsis.one}
          :not(:first-of-type) {
            cursor: pointer;
          }
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;
