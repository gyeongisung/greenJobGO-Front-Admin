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
import { useRecoilState } from "recoil";
import { changeComponent } from "../recoil/atoms/ChangeState";

const AsideAdm = () => {
  const [isTrue, setIsTrue] = useRecoilState(changeComponent);
  const navigate = useNavigate();

  const location = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(
    location.pathname,
  );

  useEffect(() => {
    setDefaultSelectedKeys(location.pathname);
  }, [location]);

  const handleIsTrue = () => {
    setIsTrue(true);
  };

  const handleLogout = () => {
    postLogout();
    navigate("/");
  };

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
      getItem(
        <Link onClick={handleIsTrue} to="/student">
          수강생 등록 • 관리
        </Link>,
        "/student",
      ),
      getItem(<Link to="/portfolio">포트폴리오 관리</Link>, "/portfolio"),
    ]),
    getItem(<Link to="/company">기업등록 • 관리</Link>, "/company", null),
  ];

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
            width: "250",
            height: "calc(100vh - 62px)",
            background: "#ffffff",
          }}
          defaultOpenKeys={["sub1", "sub2"]}
          defaultSelectedKeys={[defaultSelectedKeys]}
          mode={"inline"}
          theme={"light"}
          items={menuItems2}
        />
        <div className="end-menu">
          <ul>
            <li className="end-m-id">아이디</li>
            <li className="end-m-role">role</li>
            <li className="end-m-logout" onClick={handleLogout}>
              로그아웃 <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </li>
          </ul>
        </div>
      </Sider>
    </SideMenuWrap>
  );
};

export default AsideAdm;
