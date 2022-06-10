import config from "config";
import React, { useEffect } from "react";
import "./App.less";
import { Link, Route, Routes } from "react-router-dom";
import { Layout, Menu, Breadcrumb, MenuProps } from "antd";
import Sider from "components/Sider/sider";

import PageA from "pages/pageA";
import PageB from "pages/pageB";
import Login from "pages/login/login";
import Create from "pages/create/create";

import useAccount from "hooks/useAccount";

const { Header, Content, Footer } = Layout;
function App() {
  const { account } = useAccount();

  if (!account.group) {
    return <Login></Login>;
  }

  return (
    <Layout hasSider>
      <Sider></Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: "center",
              minHeight: "calc(100vh - 166px)",
            }}
          >
            <Routes>
              <Route path="/" element={<PageA />} />
              <Route path="/create" element={<Create />} />
              <Route path="/login" element={<Login />} />
              <Route path="expenses" element={<PageA />} />
              <Route path="invoices" element={<PageB />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2022</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
