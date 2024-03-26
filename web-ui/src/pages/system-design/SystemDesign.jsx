import { lazy, useState } from "react";
import Tabs from "@mui/material/Tabs";
import { IconExternalLink } from "@tabler/icons-react";
import Tab from "@mui/material/Tab";

import CustomTabPanel, { a11yProps } from "../../shared/CustomTabPanel";

const Requirements = lazy(() => import("./Requirements"));
const Architecture = lazy(() => import("./Architecture"));
const DataModel = lazy(() => import("./DataModel"));
const InterfaceDefinition = lazy(() => import("./InterfaceDefinition"));
const Optimization = lazy(() => import("./Optimization"));

const SystemDesignDocs = () => {
  const [value, setValue] = useState(() => {
    const storedTabValue = localStorage.getItem("sysdesign-currentTab");
    return storedTabValue !== null ? parseInt(storedTabValue, 10) : 0;
  });

  const handleChange = (event, newValue) => {
    localStorage.setItem("javascript-currentTab", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <p>
        System design involves the process of defining the architecture,
        components, interfaces, and data models with consideration for
        scalability, performance, and maintainability, and the ability to make
        informed decisions about trade-offs and best practices.
      </p>

      <span>
        Visit{" "}
        <a
          href="https://www.greatfrontend.com/system-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          greatfrontend.com
          <IconExternalLink size="1rem" />
        </a>{" "}
        for more information on RADIO and practice problems.
      </span>
      <br></br>
      <br></br>
      <p>
        The following are my quick notes on system design. Mainly meant to refer
        back to in the interview
      </p>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="fullWidth"
        textColor="white"
      >
        <Tab label="Requirements (10%)" {...a11yProps(0)} />
        <Tab label="Architecture (10%)" {...a11yProps(1)} />
        <Tab label="Data Model (10%)" {...a11yProps(2)} />
        <Tab label="Interface Definition (30%)" {...a11yProps(3)} />
        <Tab label="Optimization (40%)" {...a11yProps(4)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <Requirements />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Architecture />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DataModel />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <InterfaceDefinition />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Optimization />
      </CustomTabPanel>
    </div>
  );
};

export default SystemDesignDocs;
