import React from "react";
import { HeaderWrap } from "../styles/HeaderStyle";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const HeaderAdm = () => {
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
            <div>
              <Link to="/home" onClick={handleClick}>
                <h3>Admin</h3>
              </Link>
            </div>
          </HeaderWrap>
        </Header>
      </Layout>
    </>
  );
};

export default HeaderAdm;
