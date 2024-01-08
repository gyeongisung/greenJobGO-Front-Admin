import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const LayoutWrapSty = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
`;

export const ContentWrap = styled.div`
  display: fixed;
  top: 0;
  left: 0;
  height: calc(100vh - 60px);
  /* min-width: 1400px; */
  background: ${Maincolor.white} !important;
  background: red;
  .ant-layout-header {
    height: 60px;
    line-height: 60px;
  }
  .ant-layout-content {
    position: absolute;
    top: 60px;
    left: 250px;
    width: calc(100vw - 250px);
    height: calc(100vh - 60px);
    margin: 0 auto;
    background: ${Maincolor.white};
    border: 10px ${Maincolor.grayLight} solid;
    /* box-shadow: inset 0px -2px 20px black; */
  }
  .contents-box {
    height: calc(100vh - 80px);
    /* padding: 1%; */
    margin: 0 auto;
  }
`;
