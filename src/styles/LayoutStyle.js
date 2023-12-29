import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const ContentWrap = styled.div`
  height: calc(100vh - 60px);
  min-height: 600px;
  min-width: 1400px;
  background: ${Maincolor.white} !important;
  .ant-layout-header {
    height: 60px;
    line-height: 60px;
  }
  .ant-layout-content {
    /* width: 100vw; */
    /* height: calc(100vh - 64px); */
    height: 100%;
    min-height: 600px;
    min-width: 1400px;
    margin: 0 auto;
    /* height: 100vh; */
    background: ${Maincolor.white};
    border: 10px ${Maincolor.grayLight} solid;
    /* box-shadow: inset 0px -2px 20px black; */
  }
  .contents-box {
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 200px);
    height: calc(100% - 60px);
    padding: 1%;
    & > div {
      overflow: auto;
      /* height: 100%; */
      height: calc(100vh - 84px);
      padding-right: 1%;
      padding-bottom: 1%;
    }
  }
`;
