import styled from "styled-components";
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
    border-bottom: 2px solid ${Maincolor.grayDeep};

    &.active {
      border-top: 2px solid ${Maincolor.grayDeep};
      border-right: 2px solid ${Maincolor.grayDeep};
      border-bottom: 2px solid ${Maincolor.white};
      border-left: 2px solid ${Maincolor.grayDeep};
    }
  }
  .search-upper-line {
    position: absolute;
    top: 44px;
    left: 324px;
    width: 1260px;
    height: 2px;
    background: ${Maincolor.grayDeep};
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
  width: 1266px;
  min-width: 1266px;
  height: 100px;
  border-radius: 12px;
  background: ${Maincolor.grayWhite};
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
      margin-right: 16px;
      margin-left: 30px;
    }
    li > select {
      border: 1px solid ${Maincolor.grayMedium};
      border-radius: 5px;
      width: 154px;
      height: 40px;
      padding: 8px 12px;
      align-items: center;
      gap: 10px;
    }
    li > div > input {
      width: 215px;
      height: 40px;
      border: 1px solid ${Maincolor.grayMedium};
      border-radius: 5px;
      padding: 8px 12px;
    }
    li > button {
      margin-left: 120px;
      width: 180px;
      height: 50px;
    }
  }
`;

// 포트폴리오 페이지 스타일
export const PortFolioContentWrap = styled.div`
  position: relative;
  width: 1600px;
  padding: 30px 0;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  .GoMainGo {
    position: absolute;
    top: -50px;
    left: 1360px;
    width: 225px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.24px;
  }
  .pf-box {
    width: 294px;
    margin: 10px 0;
    .pf-img {
      position: relative;
      margin-bottom: 15px;
      img {
        width: 294px;
        height: 185px;
        object-fit: cover;
      }
      .save-icon {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 25px;
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
        width: 294px;
        height: 185px;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
      }
    }

    /* 포트폴리오 정보 */
    .pf-name {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.24px;
      margin-bottom: 5px;
    }
    .pf-subject {
      width: 294px;
      color: ${Maincolor.grayDeep};
      font-size: 16px;
      font-weight: 400;
      letter-spacing: -0.24px;
      ${ellipsis.one}
    }
  }
  /* 포트폴리오리스트 -> 마우스 호버 */
  .pf-box:hover .pf-img-hover {
    display: block;
    z-index: 888;
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

    .savedGo-btn {
      color: ${Maincolor.white};
    }

    .isSaved-btn {
      color: #ff6262;
    }
  }
`;

// 메인으로 보내는 체크박스 style
export const CheckToMainSt = styled.div`
  display: flex;
  justify-content: center;
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
    .pf-subject {
      width: 250px;
      ${ellipsis.one}
    }
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
