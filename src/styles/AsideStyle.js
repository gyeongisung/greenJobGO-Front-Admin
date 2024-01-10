import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const SideMenuWrap = styled.div`
  display: fixed;
  top: 0;
  left: 0;
  height: calc(100vh - 60px);
  background: ${Maincolor.white};

  .sidemenu-logo-div {
    position: relative;
    margin: 0 auto;
    width: 250px;
    height: 60px;
    background: ${Maincolor.white};
    img {
      width: 190px;
      height: 15px;
      object-fit: contain;
      position: absolute;
      top: 52%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .ant-menu {
    /* height: calc(100% - 64px); */
    height: 100%;
    width: 250px;
  }
  .ant-menu-sub.ant-menu-inline {
    background: ${Maincolor.white} !important;
  }
  .ant-menu-submenu {
    border-radius: 0;
  }

  .ant-menu .ant-menu-item {
    border-radius: 0;
    height: 50px;
    margin-block: 0;
  }
  .ant-menu-light .ant-menu-item-selected {
    background: rgba(34, 143, 207, 0.1);
  }
  .ant-menu .ant-menu-submenu-title {
    border-radius: 0;
  }

  /* 좌측 하단메뉴 */
  .end-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    background: ${Maincolor.grayLight2};
    width: 250px;
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
