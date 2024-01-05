import React, { useEffect, useState } from "react";
import { SideMenuWrap } from "../styles/AsideStyle";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { postLogout } from "../api/client";

const AsideAdm = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(
    location.pathname,
  );
  console.log("location", location);

  useEffect(() => {
    setDefaultSelectedKeys(location.pathname);
  }, [location]);

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const menuItems2 = [
    // getItem("홈", "1", null),
    getItem(<Link to="/home">홈</Link>, "/home", null),
    getItem("과정관리", "sub1", null, [
      getItem(<Link to="/class">과정등록 • 관리</Link>, "/class"),
      getItem(<Link to="/jobmanager">취업 담당자 관리</Link>, "/jobmanager"),
    ]),
    getItem("수강생 관리", "sub2", null, [
      getItem(<Link to="/student">수강생 등록 • 관리</Link>, "/student"),
      getItem(<Link to="/portfolio">포트폴리오 관리</Link>, "/portfolio"),
    ]),
    getItem(<Link to="/company">기업등록 • 관리</Link>, "/company", null),
  ];

  const handleLogout = () => {
    postLogout();
    navigate("/");
  };

  return (
    <SideMenuWrap>
      <Sider
        style={
          {
            // height: "calc(100vh - 140px)",
          }
        }
      >
        <Link to="/home">
          <div className="sidemenu-logo-div">
            <img
              src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
              alt="greenlogo"
            />
          </div>
        </Link>
        <Menu
          style={{
            width: 200,
            background: "#ffffff",
          }}
          defaultOpenKeys={["sub1", "sub2"]}
          defaultSelectedKeys={[defaultSelectedKeys]}
          mode={"inline"}
          theme={"light"}
          items={menuItems2}
        />
      </Sider>
      <div className="end-menu">
        <ul>
          <li className="end-m-id">
            아이디
            <img
              src={`${process.env.PUBLIC_URL}/assets/settingIcon.svg`}
              alt="icon"
            />
          </li>
          <li className="end-m-role">role</li>
          <li className="end-m-logout" onClick={handleLogout}>
            로그아웃 <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </li>
        </ul>
      </div>
    </SideMenuWrap>
  );
};

export default AsideAdm;
