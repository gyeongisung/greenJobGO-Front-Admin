import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router";
import { ContentWrap } from "../styles/LayoutStyle";
import { Breadcrumb, Layout } from "antd";
import { Link } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import HeaderAdm from "../components/HeaderAdm";
import AsideAdm from "../components/AsideAdm";

const AdminLayout = () => {
  const { Header, Content } = Layout;

  const { pathname } = useLocation();
  // const { iproduct } = useParams();

  const listPathName = pathname.substring(1);

  // 네비게이션 gnb state
  const [breadCrumbGnb, setBreadCrumbGnb] = useState("");

  // 네비게이션 lnb title state
  const [breadCrumbLnbTitle, setBreadCrumbLnbTitle] = useState("");

  // 네비게이션 lnb path state
  const [breadCrumbLnbPath, setBreadCrumbLnbPath] = useState("");

  // 관리자페이지 - lnb 데이터
  const lnbData = [
    {
      title: "과정등록 • 관리",
      path: "class",
    },
    {
      title: "취업 담당자 관리",
      path: "jobmanager",
    },
    {
      title: "수강생 등록 • 관리",
      path: "student",
    },
    {
      title: "포트폴리오 관리",
      path: "portfolio",
    },
    {
      title: "기업등록 • 관리",
      path: "company",
    },
  ];

  // 관리자페이지 - 네비게이션 데이터
  const breadcrumbItems = [
    {
      title: <Link to="/home">Home</Link>,
    },
    {
      title: breadCrumbGnb,
    },
    {
      title: breadCrumbLnbTitle,
    },
  ];
  const findPath = lnbData.find(item => item.path === listPathName);
  useEffect(() => {
    findPath;
    // gnb 데이터 갱신
    if (pathname.includes("class")) {
      setBreadCrumbGnb("과정 관리");
    } else if (pathname.includes("jobmanager")) {
      setBreadCrumbGnb("과정 관리");
    } else if (pathname.includes("student")) {
      setBreadCrumbGnb("수강생 관리");
    } else if (pathname.includes("portfolio")) {
      setBreadCrumbGnb("수강생 관리");
    } else if (pathname.includes("company")) {
      setBreadCrumbGnb("기업 관리");
    } else {
      setBreadCrumbGnb("");
    }
    // lnb 데이터 갱신
    if (findPath) {
      setBreadCrumbLnbTitle(findPath.title);
      setBreadCrumbLnbPath(findPath.path);
    } else {
      setBreadCrumbLnbTitle("");
    }
  }, [pathname]);
  return (
    <>
      <Layout>
        {/* 관리자페이지 - 사이드메뉴 */}
        <AsideAdm />

        <Layout>
          <ContentWrap>
            <HeaderAdm
              breadCrumbLnbTitle={breadCrumbLnbTitle}
              breadcrumbItems={breadcrumbItems}
            />
            <Content>
              <div className="contents-box">
                <Outlet />
              </div>
            </Content>
          </ContentWrap>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
