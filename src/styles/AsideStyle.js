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
    cursor: pointer;
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
    padding: 27px 39px 19px 22px;
    .end-m-id {
      position: relative;
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      margin-bottom: 6px;
      img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: -1px;
        margin-left: 12px;
      }
    }
    .end-m-role {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      margin-bottom: 32px;
    }
    .end-m-logout {
      text-align: right;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      cursor: pointer;
    }
  }
`;
