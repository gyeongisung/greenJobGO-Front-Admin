import styled from "@emotion/styled";

export const ClassMgmtWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .class-title {
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

export const ClassMgmtInner = styled.div`
  .class-search {
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
      > select {
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 150px;
        height: 40px;
        text-align: center;
        cursor: pointer;
      }
      > .class-form {
        display: flex;
        gap: 5px;
        input {
          padding-left: 5px;
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
        color: #fff;
        background: #6d6d6d;
      }
    }
  }
  .class-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 90px;
    gap: 5px;
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
`;
export const ClassTable = styled.div`
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
    width: 1340px;
    height: 100%;
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
        grid-template-columns: 0.15fr 0.2fr 0.4fr 1.5fr 0.8fr 0.4fr 0.4fr;
        > li {
          :not(:last-of-type) {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
`;
