import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

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
  }
  /* 내용 섹션 */
  .content-wrap {
    position: absolute;
    margin-top: 60px;
    top: 0;
    left: 0;
    width: 1440px;
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
  .student-portfolio-search {
    display: flex;
    /* justify-content: left; */
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
