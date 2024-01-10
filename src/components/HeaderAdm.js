import React from "react";
import { HeaderWrap } from "../styles/HeaderStyle";
import { Breadcrumb, Layout } from "antd";
import { Link } from "react-router-dom";

const HeaderAdm = ({ breadCrumbLnbTitle, breadcrumbItems }) => {
  const { Header } = Layout;

  const handleClick = () => {
    return;
  };
  return (
    <>
      <Layout>
        <Header
          style={{
            background: `#ffffff`,
          }}
        >
          <HeaderWrap>
            {/* 상단 네비게이션 메뉴 */}
            <div className="breadcrumb-wrap">
              {breadCrumbLnbTitle !== "" && (
                <Breadcrumb separator=">" items={breadcrumbItems} />
              )}
            </div>
          </HeaderWrap>
        </Header>
      </Layout>
    </>
  );
};

export default HeaderAdm;
