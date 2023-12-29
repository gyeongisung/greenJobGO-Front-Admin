import styled from "@emotion/styled";

export const ModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: "Pretendard", sans-serif;
  .dim {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    z-index: 10;
  }
`;
export const ModalInner = styled.div`
  position: absolute;
  width: 45%;
  height: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #ffffff;
  border-radius: 10px;
  z-index: 99;
  .modal-top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding: 30px 0 30px 0;
    margin-bottom: 30px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
    li {
      :last-of-type {
        position: absolute;
        top: 3%.5;
        right: 3.5%;
        font-size: 21px;
        cursor: pointer;
      }
      h2 {
        font-size: 23px;
        color: #000;
      }
    }
  }
  .modal-btm {
    width: 100%;
    padding: 0 80px;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        div {
          display: flex;
          :last-of-type {
            border: none;
          }
          h3 {
            font-size: 18px;
          }
          input {
            width: 100%;
            height: 40px;
            border: 1px solid #a4a4a4;
            border-radius: 6px;
          }
        }
      }
    }
  }
  .modal-ok {
    margin-top: 30px;
    button {
      color: #fff;
      background: #6d6d6d;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
