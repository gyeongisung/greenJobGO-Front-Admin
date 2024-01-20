import styled from "@emotion/styled";

// 컬러 ================
// 메인색상
export const Maincolor = {
  white: "#fff",
  black: "#222",
  grayWhite: "#F0F0F0",
  grayLight2: "#d9d9d9",
  grayMedium: "#A9A9A9",
  grayMediumDeep: "#7E7E7E",
  grayDeep: "#6D6D6D",
  blueMedium: "#228FCF",
  // 확정된 컬러바입니다
  wrapborder: "#ECF0F4",
  grayLight: "#DEDEDE",
  search: "#e6e6e6",
  maingray: "#d9d9d9",
  paginate: "#bababa",
  input: "#aaaaaa",
  sectiontitle: "#898989",
  header: "#7b7b7b",
  btn: "#6d6d6d",
  admintxt: "#228fcf",
  adminmode: "rgba(34, 143, 207, 0.10)",
  red: "#EB5757",
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

//공통)입력 모달스타일
export const ModalWarp = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal-wrapper {
    width: 684px;
    height: 624px;
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
    height: 70px;
    padding: 20px 40px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
    p {
      position: absolute;
      top: 18px;
      right: 40px;
      width: 30px;
      height: 30px;
      color: ${Maincolor.black};
      background-color: transparent;
      cursor: pointer;
      img {
        width: 18px;
        height: 18px;
        object-fit: contain;
      }
    }
  }
  /* 모달 내용 */
  .modal-content {
    height: 100%;
    /* padding: 16px; */
  }

  .modal.openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.1s;
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

//공통) 확인 모달스타일
export const ConfirmModalWarp = styled.div`
  .Confimmodal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modalConfirm-wrapper {
    position: relative;
    width: 410px;
    height: 140px;
    margin: 0 auto;
    border-radius: 6px;
    border: 1px solid ${Maincolor.grayLight2};
    background-color: ${Maincolor.white};
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-co-show 0.1s;
    overflow: hidden;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);
  }
  /* 모달 헤더 */
  .modal-header {
    height: 45px;
    position: relative;
    padding: 15px 20px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    p {
      position: absolute;
      top: 15px;
      right: 0px;
      width: 30px;
      height: 14px;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.2;
      color: ${Maincolor.black};
      cursor: pointer;
      img {
        display: inline-block;
        width: 12px;
        height: 12px;
        object-fit: contain;
      }
    }
  }
  /* 모달 내용 */
  .modalConfirm-content {
    /* position: absolute; */
    /* top: 50px;
    left: 20px; */
    height: 100%;
    padding: 0px 20px 0px 30px;
    font-size: 14px;
    color: #515151;
    & > div {
      margin-top: 20px;
      text-align: right;
      & button {
        margin-left: 5px;
      }
    }
  }

  .Confimmodal.openConfirmModal {
    display: flex;
    align-items: center;
    animation: modal-co-bg-show 0.1s;
  }

  @keyframes modal-co-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-co-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const ConfirmModalContent = styled.div`
  font-size: 14px;
  line-height: 120%;
  color: #515151;
  & div {
    margin-top: 32px;
    text-align: right;
    & button {
      margin-left: 5px;
    }
  }
`;

/* 공통 확인버튼 */
export const BtnGlobal = styled.button`
  /* .confirm-btn { */
  width: 150px;
  height: 50px;
  border-radius: 8px;
  border: 0;
  background: ${Maincolor.admintxt};
  color: ${Maincolor.white};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.24px;
  cursor: pointer;
`;

// 모달 확인 버튼
export const ModalOkBtn = styled.button`
  width: 65px;
  height: 32px;
  border-radius: 4px;
  border: 0;
  background: ${Maincolor.admintxt};
  color: ${Maincolor.white};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

// 모달 취소 버튼
export const ModalCancelBtn = styled.button`
  width: 65px;
  height: 32px;
  border-radius: 4px;
  border: 0;
  background: ${Maincolor.grayMediumDeep};
  color: ${Maincolor.white};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

export const NoItemSty = styled.div`
  /* width: 1544px; */
  /* height: 630px; */
  width: 100%;
  height: 100%;
  padding: 80px 0;
  & > div {
    margin: 0 auto;
    width: 1400px;
    height: 270px;
    border-radius: 10px;
    /* border: 1px solid ${Maincolor.maingray}; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    & > img {
      margin: 0 auto;
      width: 66px;
      height: 73px;
      object-fit: contain;
    }
    & > p {
      margin-top: 18px;
      color: ${Maincolor.black};
      text-align: center;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
