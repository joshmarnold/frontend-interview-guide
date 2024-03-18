import CustomTabPanel, { a11yProps } from "../../shared/CustomTabPanel";
import ListItemLink from "../../shared/ListItemLink";
import Specificity from "../../svgs/css/specificity";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { lazy, useState } from "react";
const Learn = lazy(() => import("./Learn"));

const About = () => {
  return (
    <>
      <p>
        If the following topics are new to you, I recommend watching the
        following videos to get a better understanding of CSS. If you're looking
        for a refresher or a deeper dive, these videos are also helpful. I think
        for these concepts, videos would be more helpful so that you can see the
        visual representation of the concepts. You will be expected to know
        these topics for the technical interview.
      </p>
      <ul>
        <ListItemLink
          to="https://www.youtube.com/watch?v=fYq5PXgSsbE"
          text="Flexbox"
        />
        <ListItemLink
          to="https://youtu.be/9zBsdzdE4sM?si=jYiv2hbYYK9TWcJv"
          text="CSS Grid"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=x4u1yp3Msao"
          text="Responsive Design"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=xRp6HVjCDrY"
          text="Browser Compatibility"
        />
      </ul>
    </>
  );
};

const CSS = () => {
  const [value, setValue] = useState(() => {
    const storedTabValue = localStorage.getItem("css-currentTab");
    return storedTabValue !== null ? parseInt(storedTabValue, 10) : 0;
  });

  const handleChange = (event, newValue) => {
    localStorage.setItem("css-currentTab", newValue);
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
          <h2 style={{ margin: 0 }}>Fundamentals</h2>
          <br></br>

          <h3 style={{ margin: "0px" }}>Selectors</h3>
          <ul>
            <li>
              Element selectors target elements by their tag name (e.g.,{" "}
              <code>p</code>, <code>div</code>).
            </li>

            <li>
              Class selectors target elements with a specific class (e.g.,{" "}
              <code>.my-class</code>).
            </li>
            <li>
              ID selectors target elements with a specific ID (e.g.,{" "}
              <code>#my-id</code>).
            </li>
            <li>
              Attribute selectors target elements based on their attributes
              (e.g., <code>[type="text"]</code>).
            </li>
            <li>
              Pseudo-class selectors target elements based on a specific state
              (e.g., <code>:hover</code>, <code>:active</code>).
            </li>
            <li>
              Pseudo-element selectors target specific parts of an element
              (e.g., <code>::before</code>, <code>::after</code>).
            </li>
          </ul>

          <h3 style={{ margin: "0px" }}>Display</h3>
          <ul>
            <li>
              <code>display: block;</code> - Elements take up the full width
              available and start on a new line.
            </li>
            <li>
              <code>display: inline;</code> - Elements only take up as much
              width as needed and do not start on a new line.
            </li>
            <li>
              <code>display: inline-block;</code> - Elements behave like inline
              elements but can have a width and height.
            </li>
            <li>
              <code>display: flex;</code> - Creates a flex container for
              flexible box layout.
            </li>
            <li>
              <code>display: grid;</code> - Creates a grid container for grid
              layout.
            </li>
          </ul>

          <h3 style={{ margin: "0px" }}>Position</h3>
          <ul>
            <li>
              <code>position: static;</code> - Default positioning, elements
              follow the normal document flow.
            </li>
            <li>
              <code>position: relative;</code> - Elements are positioned
              relative to their normal position.
            </li>
            <li>
              <code>position: absolute;</code> - Elements are positioned
              relative to their nearest positioned ancestor.
            </li>
            <li>
              <code>position: fixed;</code> - Elements are positioned relative
              to the browser window.
            </li>
            <li>
              <code>position: sticky;</code> - Elements are positioned based on
              the user's scroll position.
            </li>
          </ul>

          <h3 style={{ margin: "0px" }}>Specificity</h3>
          <ul>
            <li>
              Specificity determines which styles are applied when multiple
              selectors target the same element.
            </li>
            <li>Inline styles have the highest specificity.</li>
            <li>IDs have higher specificity than classes and attributes.</li>
            <li>
              Classes and attributes have higher specificity than element
              selectors.
            </li>
            <li>The more specific selector takes precedence.</li>
            <li>
              <Specificity />
            </li>
          </ul>

          <h3 style={{ margin: "0px" }}>Other Fundamental Concepts</h3>
          <ul>
            <li>
              Box Model - Every element is composed of content, padding, border,
              and margin.
            </li>
            <li>
              CSS Units - Pixels (px), percentages (%), ems (em), rems (rem),
              and viewport units (vw, vh) are commonly used.
            </li>
            <li>
              Inheritance - Some CSS properties are inherited by child elements
              from their parent elements.
            </li>
            <li>
              Cascading - When multiple styles are applied to an element, the
              cascading rules determine which styles take precedence. The order
              of precedence is inline styles, IDs, classes, and elements and
              then the order in which the styles are declared.
            </li>
          </ul>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Learn />
        </CustomTabPanel>
      </div>
    </>
  );
};

export default CSS;
