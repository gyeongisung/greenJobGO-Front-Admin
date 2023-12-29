import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const SideMenuWrap = styled.div`
  height: calc(100vh - 0px);
  background: ${Maincolor.white};

  .sidemenu-logo-div {
    position: relative;
    width: 100%;
    height: 60px;
    background: ${Maincolor.white};
    img {
      width: 180px;
      object-fit: contain;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .ant-menu {
    /* height: calc(100% - 64px); */
    height: 100%;
  }
  .ant-menu-sub.ant-menu-inline {
    background: ${Maincolor.white} !important;
  }
  .ant-menu .ant-menu-item {
    border-radius: 0;
  }
  .ant-menu .ant-menu-submenu-title {
    border-radius: 0;
  }
  .end-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    background: ${Maincolor.grayLight2};
    width: 200px;
    height: 140px;
  }
`;
