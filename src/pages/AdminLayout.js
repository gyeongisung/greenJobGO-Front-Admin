import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { ContentWrap, LayoutWrapSty } from "../styles/LayoutStyle";
import { Breadcrumb, Layout } from "antd";
import { Link } from "react-router-dom";
import HeaderAdm from "../components/HeaderAdm";
import AsideAdm from "../components/AsideAdm";

const AdminLayout = () => {
  const { Header, Content } = Layout;

  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const listPathName = pathname.substring(1);

  // 네비게이션 gnb state
  const [breadCrumbGnb, setBreadCrumbGnb] = useState("");

  // 네비게이션 lnb title state
  const [breadCrumbLnbTitle, setBreadCrumbLnbTitle] = useState("초기화");

  // 네비게이션 lnb path state
  const [breadCrumbLnbPath, setBreadCrumbLnbPath] = useState("초기화");

  // 관리자페이지 - lnb 데이터
  const lnbData = [
    {
      title: "과정등록 • 관리",
      path: "admin/class",
    },
    {
      title: "취업 담당자 관리",
      path: "admin/jobmanager",
    },
    {
      title: "수강생 등록 • 관리",
      path: "admin/student",
    },
    {
      title: "포트폴리오 관리",
      path: "admin/portfolio",
    },
    {
      title: "기업등록 • 관리",
      path: "admin/company",
    },
    {
      title: "일괄 삭제",
      path: "admin/bulk",
    },
    {
      title: "영구 삭제",
      path: "admin/permanently",
    },
  ];

  // 관리자페이지 - 네비게이션 데이터
  const breadcrumbItems = [
    {
      title: <Link to="/admin/home">Home</Link>,
    },
    {
      title: breadCrumbGnb,
    },
    {
      title: breadCrumbLnbTitle,
    },
  ];
  useEffect(() => {
    const findPath = lnbData.find(item => item.path === listPathName);
    // findPath;
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
    } else if (pathname.includes("bulk")) {
      setBreadCrumbGnb("데이터 삭제");
    } else if (pathname.includes("permanently")) {
      setBreadCrumbGnb("데이터 삭제");
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
    <LayoutWrapSty>
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
    </LayoutWrapSty>
  );
};

export default AdminLayout;
