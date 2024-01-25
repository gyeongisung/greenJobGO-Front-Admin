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
import { useRecoilState, useResetRecoilState } from "recoil";
import { changeComponent } from "../recoil/atoms/ChangeState";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import ConfirmModal from "./ConfirmModal";
import { StudentPageAtom } from "./studentmgmt/StudentMain";

const AsideAdm = () => {
  // 수강생페이지 리코일정보 reset하기
  const ResetStudentPageRecoil = useResetRecoilState(StudentPageAtom);

  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  // const [isTrue, setIsTrue] = useRecoilState(changeComponent);
  const [authState, setAuthState] = useRecoilState(AuthStateAtom);

  const { isLogin, role, id, name } = authState;

  const navigate = useNavigate();

  const location = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(
    location.pathname,
  );

  useEffect(() => {
    setDefaultSelectedKeys(location.pathname);
  }, [location]);

  const handleIsTrue = () => {
    // setIsTrue(true);
    // 클릭할 때 수강생등록페이지 리코일정보를 reset해라
    ResetStudentPageRecoil();
  };

  const handleLogoutClick = () => {
    setLogoutModalOpen(true);
  };
  const handleLogoutConfirm = () => {
    postLogout();
    setAuthState(prevAuthState => ({
      ...prevAuthState,
      isLogin: false,
      accessToken: null,
      role: "",
      id: "",
      name: "",
    }));
    setLogoutModalOpen(false);

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
    getItem("데이터 삭제", "sub3", null, [
      getItem(<Link to="/bulk">일괄 삭제</Link>, "/bulk"),
      getItem(<Link to="/permanently">영구 삭제</Link>, "/permanently"),
    ]),
  ];

  return (
    <SideMenuWrap>
      {isLogin ? (
        <Sider
          style={
            {
              // height: "calc(100vh - 140px)",
            }
          }
        >
          <div className="sidemenu-logo-div">
            <img
              src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
              alt="greenlogo"
            />
          </div>
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
              <li className="end-m-id">{id}</li>
              <li className="end-m-role">{name || role}</li>
              <li className="end-m-logout" onClick={handleLogoutClick}>
                로그아웃 <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </li>
            </ul>
          </div>
        </Sider>
      ) : null}
      {/* 메인취소모달 */}
      {logoutModalOpen && (
        <ConfirmModal
          open={logoutModalOpen}
          close={() => {
            setLogoutModalOpen(false);
          }}
          onConfirm={handleLogoutConfirm}
          onCancel={() => {
            setLogoutModalOpen(false);
          }}
        >
          <span>로그아웃 하시겠습니까?</span>
        </ConfirmModal>
      )}
    </SideMenuWrap>
  );
};

export default AsideAdm;
