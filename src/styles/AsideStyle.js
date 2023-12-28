import styled from "@emotion/styled";

export const SideMenuWrap = styled.div`
  height: calc(100vh - 0px);

  .sidemenu-logo-div {
    width: 100%;
    height: 64px;
    background: #d9d9d9;
  }

  .ant-menu {
    /* height: calc(100% - 64px); */
    height: 100%;
  }
  .ant-menu-sub.ant-menu-inline {
    background: #ffffff !important;
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
    background: #d9d9d9;
    width: 200px;
    height: 140px;
  }
`;
