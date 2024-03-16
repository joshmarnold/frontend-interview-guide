import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from "./PageHeader";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="app-wrapper">
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div className="main-content">
        <div className="main-inner-content">
          <NavBar setExpanded={setExpanded} />
          <br></br>
          {/* <PageHeader /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Layout;
