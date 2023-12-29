import styled from "@emotion/styled";

// 컬러 ================
// 메인색상
export const Maincolor = {
  white: "#fff",
  black: "#000",
  grayLight: "#DEDEDE",
  grayLight2: "#d9d9d9",
  grayMedium: "#A9A9A9",
  grayDeep: "#6D6D6D",
};

// 말줄임 ================
export const ellipsis = {
  // 한줄
  one: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};

//모달스타일
export const ModalWarp = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);

    button {
      outline: none;
      cursor: pointer;
      border: 0;
    }
  }
  .modal-wrapper {
    width: 684px;
    height: 726px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: ${Maincolor.white};
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
  }
  /* 모달 헤더 */
  .modal-header {
    position: relative;
    padding: 16px 64px 16px 16px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
    p {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 30px;
      color: ${Maincolor.black};
      background-color: transparent;
    }
  }
  /* 모달 내용 */
  .modal-content {
    height: 100%;
    padding: 16px;
  }

  .modal.openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
