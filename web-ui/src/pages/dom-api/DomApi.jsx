import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { IconExternalLink } from "@tabler/icons-react";
import CustomTabPanel, { a11yProps } from "../../shared/CustomTabPanel";
import Chip from "@mui/material/Chip";

import "./DomApi.scss";

const Quiz = React.lazy(() => import("./Quiz"));

const DomApi = () => {
  const [value, setValue] = useState(() => {
    const storedTabValue = localStorage.getItem("domapi-currentTab");
    return storedTabValue !== null ? parseInt(storedTabValue, 10) : 0;
  });

  const handleChange = (event, newValue) => {
    localStorage.setItem("domapi-currentTab", newValue);
    setValue(newValue);
  };

  return (
    <div>
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
        <p>
          The Document Object Model (DOM) API is a programming interface for web
          documents. It represents the structure of a document as a tree of
          objects, allowing developers to manipulate and interact with the
          content, structure, and styles of a web page using JavaScript.
        </p>
        <p>
          While modern web development heavily relies on frameworks and
          libraries like React, understanding and working with the DOM API is
          still crucial, especially in interview settings. Many interviews
          assess a candidate's knowledge of vanilla JavaScript and their ability
          to work directly with the DOM API, as it demonstrates a solid
          foundation in web development fundamentals.
        </p>
        <p>
          In this section, we'll explore a series of pragmatic questions related
          to working with the DOM API. We'll provide code samples of HTML and
          ask questions about how to interact with and manipulate the DOM
          elements. The focus will be on common areas such as forms, accessing
          DOM elements, traversing the DOM tree, and handling events.
        </p>
        <h3>Resources</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "1rem",
          }}
        >
          <Chip
            label="MDN DOM API Docs"
            onClick={() => {
              window.open(
                "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
                "_blank"
              );
            }}
            icon={<IconExternalLink size={"1.2rem"} />}
          />
          <Chip
            label="DOM API by ColorCode (YouTube)"
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=wbQLEXg_urE",
                "_blank"
              );
            }}
            icon={<IconExternalLink size={"1.2rem"} />}
          />
          <Chip
            label="JavaScript DOM Manipulation – Full Course for Beginners (YouTube)"
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=5fb2aPlgoys",
                "_blank"
              );
            }}
            icon={<IconExternalLink size={"1.2rem"} />}
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Quiz />
      </CustomTabPanel>
    </div>
  );
};

export default DomApi;
