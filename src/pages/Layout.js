import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { Outlet } from "react-router";
import { LayoutWrap } from "../styles/LayoutStyle";
import { useNavigate, useNavigation } from "react-router-dom";

const Layout = () => {
  useNavigate;
  useNavigation;
  return (
    <LayoutWrap>
      <ul className="layout-inner">
        <li>
          <Aside />
        </li>
        <li>
          <div className="header-wrap">
            <Header />
          </div>
          <div className="content">
            <div className="content-wrap">
              <Outlet />
            </div>
          </div>
        </li>
      </ul>
    </LayoutWrap>
  );
};

export default Layout;
