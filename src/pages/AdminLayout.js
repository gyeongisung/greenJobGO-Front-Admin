import React, { useEffect, useState } from "react";
import Aside from "../components/AsideAdm";
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
  // pathname에서 /admin/ 는 제외처리
  // const listPathName = pathname.slice(7);

  // 네비게이션 gnb state
  // const [breadCrumbGnb, setBreadCrumbGnb] = useState("");
  // 네비게이션 lnb title state
  // const [breadCrumbLnbTitle, setBreadCrumbLnbTitle] = useState("");
  // 네비게이션 lnb path state
  // const [breadCrumbLnbPath, setBreadCrumbLnbPath] = useState("");
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
  // const breadcrumbItems = [
  //   {
  //     title: <Link to="/home">Home</Link>,
  //   },
  //   {
  //     title: breadCrumbGnb,
  //   },
  //   {
  //     title: breadCrumbLnbTitle,
  //   },
  // ];
  // const findPath = lnbData.find(item => item.path === listPathName);
  // useEffect(() => {
  //   findPath;
  //   // gnb 데이터 갱신
  //   if (pathname.includes("member")) {
  //     setBreadCrumbGnb("회원관리");
  //   } else if (pathname.includes("store")) {
  //     setBreadCrumbGnb("매장관리");
  //   } else if (pathname.includes("order")) {
  //     // console.log("order 포함되었어요");
  //     setBreadCrumbGnb("주문관리");
  //   } else if (pathname.includes("product")) {
  //     // console.log("product 포함되었어요");
  //     setBreadCrumbGnb("상품관리");
  //   } else {
  //     // console.log("메인이에요");
  //     setBreadCrumbGnb("");
  //   }
  //   // lnb 데이터 갱신
  //   if (findPath) {
  //     setBreadCrumbLnbTitle(findPath.title);
  //     setBreadCrumbLnbPath(findPath.path);
  //     // console.log("제목", breadCrumbLnbTitle);
  //     // console.log("path이름", breadCrumbLnbPath);
  //   } else {
  //     setBreadCrumbLnbTitle("");
  //   }
  // }, [pathname]);
  return (
    <>
      <Layout>
        {/* 관리자페이지 - 사이드메뉴 */}
        <AsideAdm />
        {/* 관리자페이지 - 네비게이션 */}
        {/* <div className="breadcrumb-wrap">
            {breadCrumbLnbTitle !== "" && (
              <Breadcrumb items={breadcrumbItems} />
              )}
            </div> */}
        {/* <div className="layout-box"> */}
        {/* 관리자페이지 - 페이지 이름 표시 */}
        {/* {breadCrumbLnbTitle !== "" && ( */}
        {/* <div className="pg-title"> */}
        {/* <h2>{breadCrumbLnbTitle}</h2> */}
        {/* </div> */}
        {/* )} */}
        <ContentWrap>
          <Layout>
            <HeaderAdm />
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </ContentWrap>
      </Layout>
    </>
  );
};

export default AdminLayout;
