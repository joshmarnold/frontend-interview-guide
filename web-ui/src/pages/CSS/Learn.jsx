import Specificity from "../../svgs/css/specificity";
import Chip from "@mui/material/Chip";
import { IconExternalLink } from "@tabler/icons-react";
import { Tag } from "../../shared/Tag";

const Resources = () => {
  const handleChipClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <h3>Resources</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <Chip
          label="Learn Flexbox in 15 Minutes by Web Dev Simplified (YouTube)"
          onClick={() =>
            handleChipClick("https://www.youtube.com/watch?v=fYq5PXgSsbE")
          }
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="Learn CSS Grid in 20 Minutes by Web Dev Simplified (YouTube)"
          onClick={() =>
            handleChipClick("https://youtu.be/9zBsdzdE4sM?si=jYiv2hbYYK9TWcJv")
          }
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="A practical guide to responsive web design by Kevin Powell (YouTube)"
          onClick={() =>
            handleChipClick("https://www.youtube.com/watch?v=x4u1yp3Msao")
          }
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="Checking for browser support by Kevin Powell (YouTube)"
          onClick={() =>
            handleChipClick("https://www.youtube.com/watch?v=xRp6HVjCDrY")
          }
          icon={<IconExternalLink size={"1.2rem"} />}
        />
      </div>
    </>
  );
};

const Learn = () => {
  return (
    <>
      <h3 style={{ margin: "0px" }}>Selectors</h3>
      <ul>
        <li>
          Element selectors target elements by their tag name (e.g.,{" "}
          <Tag>p</Tag>, <Tag>div</Tag>).
        </li>

        <li>
          Class selectors target elements with a specific class (e.g.,{" "}
          <Tag>.my-class</Tag>).
        </li>
        <li>
          ID selectors target elements with a specific ID (e.g.,{" "}
          <Tag>#my-id</Tag>).
        </li>
        <li>
          Attribute selectors target elements based on their attributes (e.g.,{" "}
          <Tag>[type="text"]</Tag>).
        </li>
        <li>
          Pseudo-class selectors target elements based on a specific state
          (e.g., <Tag>:hover</Tag>, <Tag>:active</Tag>).
        </li>
        <li>
          Pseudo-element selectors target specific parts of an element (e.g.,{" "}
          <Tag>::before</Tag>, <Tag>::after</Tag>).
        </li>
      </ul>

      <h3 style={{ margin: "0px" }}>Display</h3>
      <ul>
        <li>
          <Tag>display: block;</Tag> - Elements take up the full width available
          and start on a new line.
        </li>
        <li>
          <Tag>display: inline;</Tag> - Elements only take up as much width as
          needed and do not start on a new line.
        </li>
        <li>
          <Tag>display: inline-block;</Tag> - Elements behave like inline
          elements but can have a width and height.
        </li>
        <li>
          <Tag>display: flex;</Tag> - Creates a flex container for flexible box
          layout.
        </li>
        <li>
          <Tag>display: grid;</Tag> - Creates a grid container for grid layout.
        </li>
      </ul>

      <h3 style={{ margin: "0px" }}>Position</h3>
      <ul>
        <li>
          <Tag>position: static;</Tag> - Default positioning, elements follow
          the normal document flow.
        </li>
        <li>
          <Tag>position: relative;</Tag> - Elements are positioned relative to
          their normal position.
        </li>
        <li>
          <Tag>position: absolute;</Tag> - Elements are positioned relative to
          their nearest positioned ancestor.
        </li>
        <li>
          <Tag>position: fixed;</Tag> - Elements are positioned relative to the
          browser window.
        </li>
        <li>
          <Tag>position: sticky;</Tag> - Elements are positioned based on the
          user's scroll position.
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
          Classes and attributes have higher specificity than element selectors.
        </li>
        <li>The more specific selector takes precedence.</li>
        <li>
          <Specificity />
        </li>
      </ul>

      <h3 style={{ margin: "0px" }}>Other Fundamental Concepts</h3>
      <ul>
        <li>
          Box Model - Every element is composed of content, padding, border, and
          margin.
        </li>
        <li>
          CSS Units - Pixels (px), percentages (%), ems (em), rems (rem), and
          viewport units (vw, vh) are commonly used.
        </li>
        <li>
          Inheritance - Some CSS properties are inherited by child elements from
          their parent elements.
        </li>
        <li>
          Cascading - When multiple styles are applied to an element, the
          cascading rules determine which styles take precedence. The order of
          precedence is inline styles, IDs, classes, and elements and then the
          order in which the styles are declared.
        </li>
      </ul>

      <Resources />
    </>
  );
};

export default Learn;
