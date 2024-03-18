import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { lazy, useState } from "react";
import CustomTabPanel, { a11yProps } from "../../shared/CustomTabPanel";

const Quiz = lazy(() => import("./Quiz"));
const Learn = lazy(() => import("./Learn"));

const JavaScript = () => {
  const [value, setValue] = useState(() => {
    const storedTabValue = localStorage.getItem("javascript-currentTab");
    return storedTabValue !== null ? parseInt(storedTabValue, 10) : 0;
  });

  const handleChange = (event, newValue) => {
    localStorage.setItem("javascript-currentTab", newValue);
    setValue(newValue);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          textColor="white"
        >
          <Tab label="Quiz" {...a11yProps(0)} />
          <Tab label="Quiz" {...a11yProps(1)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <Learn />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Quiz />
        </CustomTabPanel>
      </div>
    </>
  );
};

export default JavaScript;
