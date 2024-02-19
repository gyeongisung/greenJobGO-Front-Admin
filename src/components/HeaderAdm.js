import React from "react";
import { HeaderWrap } from "../styles/HeaderStyle";
import { Breadcrumb, Layout } from "antd";

const HeaderAdm = ({ breadCrumbLnbTitle, breadcrumbItems }) => {
  const { Header } = Layout;
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
