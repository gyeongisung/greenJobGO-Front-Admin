import styled from "@emotion/styled";
import { Maincolor, ellipsis } from "./GlobalStyle";

export const PermanentlyWrap = styled.div`
  position: relative;

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
      display: flex;
      align-items: center;
      margin-top: 3px;
      img {
        width: 19px;
        height: 19px;
        margin-right: 5px;
        margin-top: 2px;
      }
      span {
        line-height: 2;
      }
    }
  }

`;

export const PermanentlyInner = styled.div`
  .delete-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1536px;
    height: 100px;
    border-radius: 5px;
    background: ${Maincolor.search};
    gap: 30px;

    li {
      /* border-radius: 6px; */
      display: flex;
      align-items: center;
      background: ${Maincolor.white};
      span {
        display: inline-block;
        height: 40px;
        line-height: 2.3;
        font-size: 16px;
        font-weight: 500;
        padding-right: 10px;
        background: ${Maincolor.search};
      }

      select {
        /* width: 155px; */
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
    li:nth-of-type(1) {
      select {
        width: 160px;
        height: 40px;
        cursor: pointer;
      }
    }
    li:nth-of-type(2) {
      select {
        width: 540px;
        height: 40px;
        cursor: pointer;
      }
    }
    li:nth-of-type(3) {
      .delete-form {
        display: flex;
        background: ${Maincolor.search};

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
          background: ${Maincolor.search};
        }
      }
    }
    .search-btn {
      background: ${Maincolor.search};
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
  }
  .delete-buttons {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 40px 0 0px 0;
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
    font-size: 14px;
    color: ${Maincolor.btn};
    height: 14px;
    line-height: 14px;
    margin-bottom: 10px;
  }

`;
export const DeleteTable = styled.div`
  position: relative;
  width: 100%;
  /* height: 58vh; */
  height: 475px;
  text-align: center;
  overflow: hidden;
  background: #fff;
  /* box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2); */
  /* box-sizing: border-box; */
  .list-border {
    /* border: 1px solid ${Maincolor.sectiontitle}; */

    .class-table-th {
      color: ${Maincolor.black};
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: 43px;
    }
    > ul {
      /* width: 1500px; */
      width: 1536px;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(10, 43px);
      border-top: 1px solid ${Maincolor.sectiontitle};

      > li {
        line-height: 42px;
        /* height: 44px; */
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
          grid-template-columns: 0.15fr 0.25fr 0.55fr 1.5fr 0.4fr 0.8fr 0.5fr 0.25fr 0.4fr 0.45fr;
          > li {
            padding: 0 5px;
            ${ellipsis.one}
            :not(:last-of-type) {
              border-right: 1px solid ${Maincolor.sectiontitle};
            }
          }
          > li:last-of-type {
            border-bottom: none;
            /* border-bottom: 1px solid ${Maincolor.sectiontitle}; */
          }
        }
      }
    }
  }
`;