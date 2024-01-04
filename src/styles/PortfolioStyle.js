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
