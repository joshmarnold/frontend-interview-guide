import ListItemLink from "../../shared/ListItemLink";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CircularProgress from "@mui/material/CircularProgress";

import { Suspense, lazy, useState } from "react";
import CustomTabPanel, { a11yProps } from "../../shared/CustomTabPanel";
import Accordion from "../../shared/Accordion";
const ThisSection = lazy(() => import("./ThisSection"));
const PrototypeSection = lazy(() => import("./PrototypeSection"));
const Learn = lazy(() => import("./Learn"));

const About = () => {
  return (
    <>
      <p>
        If the following topics are new to you, I recommend watching the
        following videos to get a better understanding of JavaScript. If you're
        looking for a refresher or a deeper dive, these videos are also helpful.
        You will be expected to know these topics for the technical interview.
      </p>
      <ul>
        <ListItemLink
          to="https://www.youtube.com/watch?v=-G9c4CMMUKc&list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB&index=1"
          text="Hoisting / Execution Context / Call Stack"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=28AXSTCpsyU&list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB&index=3"
          text="Event Loop"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=fVXp7ZWjlO4"
          text="this, call, apply, bind"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=GhJTy5-X3kA"
          text="prototype"
        />
        <ListItemLink
          to="https://youtu.be/lW_erSjyMeM?si=_PqotoCBcdXX40_0"
          text="Block scope and shadow DOM"
        />
      </ul>
    </>
  );
};

const Wrapper = ({ children }) => {
  return <Suspense fallback={<CircularProgress />}>{children}</Suspense>;
};

const sections = [
  {
    title: "this, call, apply, bind",
    description: (
      <Wrapper>
        <ThisSection />
      </Wrapper>
    ),
  },
  {
    title: "Prototypal Inheritance",
    description: (
      <Wrapper>
        <PrototypeSection />
      </Wrapper>
    ),
  },
];

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
          <Tab label="Learn" {...a11yProps(0)} />
          <Tab label="Quiz" {...a11yProps(1)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <About />
          <br></br>
          <Accordion items={sections} openedByDefault={0} timeout={0} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Learn />
        </CustomTabPanel>
      </div>
    </>
  );
};

export default JavaScript;
