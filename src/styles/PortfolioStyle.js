import styled from "@emotion/styled";
import { Maincolor, ellipsis } from "./GlobalStyle";

// 레이아웃 구성
export const PortFolioPage = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  margin: 30px;
  /* 탭버튼 커스텀 */
  .tab-button {
    width: 163px;
    height: 46px;
    background: ${Maincolor.white};
    border: 1px solid #d0d0d0;
    cursor: pointer;
    border-bottom: 1px solid ${Maincolor.grayDeep};
    border-radius: 6px 6px 0px 0px;

    &.active {
      border-top: 1px solid ${Maincolor.grayDeep};
      border-right: 1px solid ${Maincolor.grayDeep};
      border-bottom: 1px solid ${Maincolor.white};
      border-left: 1px solid ${Maincolor.grayDeep};
    }
  }
  /* 검색바 윗쪽 라인 */
  .search-upper-line {
    position: absolute;
    top: 45px;
    left: 325px;
    width: 1260px;
    height: 1px;
    border-top: 1px solid ${Maincolor.grayDeep};
  }
  /* 내용 섹션 */
  .content-wrap {
    position: absolute;
    top: 44px;
    left: 0;
    width: 1620px;
    height: 30px;
  }
`;

// 검색바 스타일
export const PfSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 1266px;
  min-width: 1266px;
  height: 100px;
  border-radius: 12px;
  background: ${Maincolor.search};
  margin-top: 30px;
  .student-portfolio-search {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 30px 0;
    label {
      font-size: 16px;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: -0.64px;
      margin-right: 18px;
      margin-left: 30px;
    }
    li > select {
      border: 1px solid ${Maincolor.input};
      width: 154px;
      height: 40px;
      padding: 8px 12px;
      align-items: center;
      gap: 10px;
    }
    li > div > input {
      width: 215px;
      height: 40px;
      border: 1px solid ${Maincolor.input};
      border-radius: 5px;
      padding: 8px 12px;
    }
    li > button {
      margin-left: 120px;
      width: 180px;
      height: 50px;
    }
    /* select창 화살표 커스텀 */
    .select-wrap {
      background: linear-gradient(
        to right,
        ${Maincolor.search} 33.5%,
        ${Maincolor.white} 33.5%
      );
      select {
        -o-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url(${process.env.PUBLIC_URL}/assets/Arrowdown.png)
          no-repeat calc(100% - 12px) 50%/11px auto;
        padding: 0 28px 0 10px;
      }
      select::-ms-expand {
        display: none;
      }
    }
  }
`;

// 포트폴리오 페이지 스타일
export const PortFolioContentWrap = styled.div`
  position: relative;
  width: 1600px;
  /* height: 630px; */
  height: 570px;
  padding: 30px 0 0 0;
  display: flex;
  justify-content: left;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 30px;

  .pf-box {
    width: 294px;
    height: 251px;
    /* margin: 10px 0; */
    .pf-img,
    .saved-img {
      position: relative;
      margin-bottom: 15px;
      img {
        width: 294px;
        height: 185px;
        object-fit: cover;
      }
      /* 리스트 썸네일 우측 아이콘 */
      .thumb-right {
        position: absolute;
        top: 0px;
        right: 0px;

        /* 보관중인 포트폴리오 아이콘*/
        .save-icon {
          font-size: 25px;
          /* color: ${Maincolor.white}; */
        }
        /* 취업자 아이콘 */
        .job-yes-icon {
          margin: 15px;
          width: 25px;
          height: 25px;
          object-fit: contain;
        }
      }
    }

    /* 보관함 -> 저장된 이미지 */
    .saved-img {
      position: relative;
      margin-bottom: 15px;
      & > img {
        width: 294px;
        height: 185px;
        object-fit: cover;
      }
      .isMainDim {
        position: absolute;
        top: 0;
        left: 0;
        width: 294px;
        height: 185px;
        background: rgba(0, 0, 0, 0.3);
      }
    }

    /* 포트폴리오 정보 */
    & > ul,
    .side-info {
      position: relative;
      .pf-name {
        width: 120px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.24px;
        margin-bottom: 5px;
        ${ellipsis.one}
      }
      .pf-subject {
        width: 290px;
        color: ${Maincolor.grayDeep};
        font-size: 16px;
        font-weight: 400;
        letter-spacing: -0.24px;
        ${ellipsis.one}
      }
      /* 보관함에 있는 포트폴리오 하트 */
      .isSaved-name-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        color: #ff6262;
        & > svg {
          font-size: 16px;
        }
      }
    }
  }
  /* 포트폴리오리스트 -> 마우스 호버 */
  .pf-box:hover .pf-img-hover {
    display: block;
    z-index: 99;
  }

  .pf-img-hover {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 294px;
    height: 60px;
    background: rgba(0, 0, 0, 0.3);
    z-index: 99;
    .savedGo-btn,
    .isSaved-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 25px;
      padding: 5px;
      cursor: pointer;
    }
    // 보관함으로 보내요 버튼
    .savedGo-btn {
      color: ${Maincolor.white};
    }
    .isSaved-btn {
      color: ${Maincolor.red};
    }
  }
`;

// 메인으로 보내는 체크박스 style
export const CheckToMainSt = styled.div`
  .Saved-infoWrap {
    width: 294px;
    display: flex;
    justify-content: left;
    .main-checked {
      line-height: 2;
      margin-right: 8px;
      > li > input {
        width: 17px;
        height: 17px;
        text-align: center;
      }
    }
    .side-info {
      position: relative;
      .pf-subject {
        width: 257px;
        ${ellipsis.one}
      }
      /* 보관함에 있는 포트폴리오 하트 */
      .isSaved-name-right {
        position: absolute;
        top: 0;
        right: -10px;
        width: 20px;
        color: ${Maincolor.red};
        cursor: pointer;
        & > svg {
          font-size: 16px;
        }
      }
    }
  }
`;

export const GoMainBtnSty = styled.div`
  /* 메인으로 보내는 버튼 */
  .GoMainGo {
    position: absolute;
    top: 80px;
    left: 1360px;
    width: 225px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.24px;
    background: ${Maincolor.admintxt};
  }
`;

// 검색결과가 없어요
export const NothingData = styled.div`
  width: 80vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
  }
`;
