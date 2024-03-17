import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import CircularProgress from "@mui/material/CircularProgress";

const Layout = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="app-wrapper">
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div className="main-content">
        <div className="main-inner-content">
          <NavBar setExpanded={setExpanded} />
          <br></br>
          <Suspense fallback={<CircularProgress />}>
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
