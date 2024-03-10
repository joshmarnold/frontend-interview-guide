import React from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from "./PageHeader";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <br></br>
      <br></br>
      <PageHeader />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
