import React, { lazy, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel, { a11yProps } from "../../../shared/CustomTabPanel";
const Learn = lazy(() => import("./Learn"));
const Quiz = lazy(() => import("./Quiz"));

const Caching = () => {
  const [value, setValue] = useState(() => {
    const storedTabValue = localStorage.getItem("caching-currentTab");
    return storedTabValue !== null ? parseInt(storedTabValue, 10) : 0;
  });

  const handleChange = (event, newValue) => {
    localStorage.setItem("caching-currentTab", newValue);
    setValue(newValue);
  };

  return (
    <div className="flex column">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="fullWidth"
        textColor="white"
      >
        <Tab label="Learn" {...a11yProps(0)} />
        <Tab label="Quiz" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Learn />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Quiz />
      </CustomTabPanel>
    </div>
  );
};

export default Caching;
