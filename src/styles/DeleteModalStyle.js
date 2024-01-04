import styled from "@emotion/styled";

export const DeleteModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .dim {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9;
    backdrop-filter: blur(2px);
  }
  .content-wrap {
    position: absolute;
    width: 27%;
    height: 20vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    /* padding: 30px; */
    z-index: 99;
    > div {
      text-align: center;
    }
    .header {
      padding-top: 20px;
      .warning-icon {
        color: #ff5e5e;
        background: #ffe7ea;
        width: 21px;
        height: 21px;
        border: 1px solid;
        border-radius: 50%;
        padding: 5px;
      }
    }
    .content {
      line-height: 1.6;
      span {
        display: block;
        font-size: 16px;
        font-weight: 800;
        :last-of-type {
          font-weight: 400;
          font-size: 13px;
        }
      }
    }
    .btns {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding-bottom: 20px;
      button {
        width: 65px;
        height: 32px;
        line-height: 32px;
        background: #176b87;
        color: #fff;
        border: 1px solid;
        border-radius: 4px;
        cursor: pointer;
        :first-of-type {
          background: #228fcf;
        }
        :last-of-type {
          background: #7e7e7e;
        }
      }
    }
  }
`;
