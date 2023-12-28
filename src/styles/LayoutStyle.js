import styled from "@emotion/styled";

export const ContentWrap = styled.div`
  height: calc(100vh - 64px);
  min-height: 600px;
  min-width: 1200px;
  background: #ffffff;
  .ant-layout-header {
    padding: 0;
  }
  .ant-layout-content {
    /* width: 100vw; */
    /* height: calc(100vh - 64px); */
    height: 100%;
    min-height: 600px;
    min-width: 1200px;
    margin: 0 auto;
    /* height: 100vh; */
    background: #ffffff;
    border: 10px #dfdfdf solid;
    /* box-shadow: inset 0px -2px 20px black; */
  }
  .contents-box {
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 200px);
    height: calc(100% - 64px);
    padding: 1%;
    & > div {
      overflow: auto;
      height: 100%;
      padding-right: 1%;
      padding-bottom: 1%;
    }
  }
`;
