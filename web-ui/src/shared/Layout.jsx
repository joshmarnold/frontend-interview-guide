import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";

const Layout = () => {
  const location = useLocation();
  const [expanded, setExpanded] = React.useState(false);
  const isInDsAlgosPath = location.pathname.includes("ds-algos");

  return (
    <div className={`app-wrapper ${expanded ? "open" : ""}`}>
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <NavBar setExpanded={setExpanded} expanded={expanded} />
      <div className="main-content">
        <div className="main-inner-content">
          {isInDsAlgosPath && (
            <Paper
              elevation={6}
              style={{
                padding: "24px",
                color: "#f7bb43",
              }}
            >
              This section is a work in progress
            </Paper>
          )}

          <Suspense fallback={<CircularProgress />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
