import React from "react";
import { SideMenuWrap } from "../styles/AsideStyle";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { Link } from "react-router-dom";

const AsideAdm = () => {
  const menuItems = [
    {
      key: "home",
      // icon: <ShoppingOutlined />,
      title: "홈",
      items: [{ key: "1", link: "/home", label: "홈" }],
    },
    {
      key: "sub1",
      // icon: <UserOutlined />,
      title: "과정관리",
      items: [
        {
          key: "2",
          link: "/class",
          label: "과정등록 • 관리",
        },
        {
          key: "3",
          link: "/jobmanager",
          label: "취업 담당자 관리",
        },
      ],
    },
    {
      key: "sub2",
      // icon: <ShopOutlined />,
      title: "수강생 관리",
      items: [
        {
          key: "5",
          link: "/student",
          label: "수강생 등록 • 관리",
        },
        {
          key: "6",
          link: "/portfolio",
          label: "포트폴리오 관리",
        },
      ],
    },
    {
      key: "sub3",
      // icon: <LaptopOutlined />,
      title: "기업등록 • 관리",
      items: [{ key: "8", link: "/company", label: "기업등록 • 관리" }],
    },
  ];
  return (
    <SideMenuWrap>
      <Sider
        style={{
          // height: "calc(100vh - 140px)",
        }}
      >
        <div className="sidemenu-logo-div">
          <Link to="/home">logo 위치</Link>
        </div>
        <Menu
          mode="inline"
          collapsed="true"
          // defaultSelectedKeys={[defaultSide]}
          defaultOpenKeys={menuItems.map(item => item.key)}
        >
          {menuItems.map(menuItem => (
            <SubMenu
              key={menuItem.key}
              icon={menuItem.icon}
              title={menuItem.title}
            >
              {menuItem.items.map(item => (
                <Menu.Item key={item.key}>
                  <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Sider>
      {/* <div className="end-menu"></div> */}
    </SideMenuWrap>
  );
};

export default AsideAdm;
