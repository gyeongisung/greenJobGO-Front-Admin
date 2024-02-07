import styled from "@emotion/styled";
import { Maincolor, ellipsis } from "./GlobalStyle";

export const CompanyMgmtWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .company-title {
    width: 1400px;
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

export const CompanyMgmtInner = styled.div`
  .company-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1400px;
    height: 95px;
    border-radius: 6px;
    background: ${Maincolor.search};
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
          border: 1px solid ${Maincolor.input};
          border-radius: 3px;
        }
      }
      > button {
        width: 140px;
        height: 40px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background: ${Maincolor.btn};
        color: #fff;
      }
    }
  }
  .company-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    margin-top: 40px;
    margin-bottom: 0;

    button {
      color: #fff;
      background: ${Maincolor.btn};
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
        width: 105px;
        height: 40px;
      }
      :nth-of-type(3) {
        background: ${Maincolor.admintxt};
        width: 105px;
        height: 40px;
      }
      :nth-of-type(4) {
        background: ${Maincolor.admintxt};
        width: 105px;
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
export const CompanyTable = styled.div`
  position: relative;
  width: 1400px;
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
      > ul {
        height: 100%;
        display: grid;
        grid-template-columns: 0.15fr 0.2fr 0.5fr 1.2fr 0.4fr 0.4fr 0.45fr 0.55fr 0.9fr;
        > li {
          > a {
            color: ${Maincolor.black};
            :hover {
              color: ${Maincolor.admintxt};
            }
          }
          padding: 0 5px;
          ${ellipsis.one}
          :not(:first-of-type,:last-of-type) {
            cursor: pointer;
          }
          :not(:last-of-type) {
            border-bottom: none;
            border-right: 1px solid ${Maincolor.sectiontitle};
          }
        }
        .check-box-li,
        .company-table-th {
          cursor: default;
        }
      }
    }
  }
`;
