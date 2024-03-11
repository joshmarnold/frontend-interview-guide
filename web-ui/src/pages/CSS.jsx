import ListItemLink from "../shared/ListItemLink";
import QuestionAnswer from "../shared/QuestionAnswer";
import TopicsList from "../shared/TopicsList";
import Specificity from "../svgs/css/specificity";

const cssQuestions = [
  {
    question: "What are CSS preprocessors and name two examples?",
    answer:
      "CSS preprocessors extend CSS with variables, nesting, and mixins to write maintainable code. Examples include Sass and LESS.",
  },
  {
    question: "What’s a rule in CSS?",
    answer: "A CSS rule consists of a selector and a declaration block.",
  },
  {
    question: "What is a mixin in CSS preprocessors?",
    answer: "A mixin is a reusable group of CSS declarations.",
  },
  {
    question:
      "How do functions work in CSS preprocessors, and can you give an example?",
    answer:
      "Functions return values. For example, darken() function darkens a color.",
  },
  {
    question: "What are nested rules in CSS preprocessors?",
    answer:
      "Nested rules allow you to nest CSS selectors inside of another selector, helping in organizing and structuring CSS.",
  },
  {
    question: "How do CSS Grid and Flexbox differ?",
    answer:
      "CSS Grid is for 2D layouts managing both columns and rows, while Flexbox is for 1D layouts, aligning items in a single direction.",
  },
  {
    question: "What is the purpose of responsive design?",
    answer:
      "Responsive design ensures websites function well on a variety of devices and screen sizes.",
  },
  {
    question: "What are the pros and cons of CSS-in-JS?",
    answer:
      "Pros include scoped styles and dynamic styling capabilities. Cons include potential runtime overhead and a paradigm shift for traditional CSS developers.",
  },
  {
    question: "How do you ensure browser compatibility in CSS?",
    answer:
      "By using tools like 'Can I use', adding vendor prefixes, and employing polyfills for unsupported features.",
  },
  {
    question: "List the methods to load CSS in a webpage.",
    answer:
      "Inline using the 'style' attribute, internal using <style> tags, and external via <link> elements.",
  },
  {
    question: "Describe different types of CSS selectors.",
    answer:
      "Types include Class (.), ID (#), Attribute ([]), Child (>), Descendant (space), and Pseudo-classes like :hover.",
  },
  {
    question: "How does grouping in CSS work?",
    answer:
      "Grouping applies the same style rules to multiple selectors by separating them with commas.",
  },
  {
    question: "What are pseudo-classes and pseudo-elements? Give examples.",
    answer:
      "Pseudo-classes (e.g., :hover, :nth-child) style elements in specific states. Pseudo-elements (e.g., ::before, ::after) create sub-parts of elements for styling.",
  },
  {
    question: "How are data attributes used in CSS?",
    answer:
      "Data attributes (data-*) store additional information on HTML elements, which can be styled or manipulated with CSS and JavaScript.",
  },
  {
    question: "What are the differences between relative units em, rem, and %?",
    answer:
      "em is relative to the parent element's font-size, rem is relative to the root element's font-size, and % is relative to the parent element's dimension.",
  },
  {
    question:
      "Explain the importance of the 'box-sizing: border-box;' property.",
    answer:
      "It includes padding and border in the element's total width and height, preventing layout issues when adding these properties.",
  },
  {
    question: "What are the different position values in CSS and their uses?",
    answer:
      "static is the default. relative positions an element relative to its normal position. absolute positions relative to the nearest positioned ancestor. fixed positions relative to the viewport.",
  },
  {
    question: "What is the purpose of the 'display: flex;' property?",
    answer:
      "It creates a flex container, enabling a flexible and responsive layout among its child elements.",
  },
  {
    question: "What is the main axis and the cross axis?",
    answer:
      "The main axis is the primary axis along which flex items are laid out. The cross axis is perpendicular to the main axis.",
  },
  {
    question: "How does the 'flex-direction' property affect a flex container?",
    answer:
      "It defines the main axis of the layout, determining whether the items are laid out horizontally (row) or vertically (column).",
  },
  {
    question: "What does the 'flex-wrap' property do?",
    answer:
      "It allows flex items to wrap onto multiple lines, instead of forcing them to fit on a single line.",
  },
  {
    question:
      "How does the 'justify-content' property work in a flex container?",
    answer:
      "It aligns flex items along the main axis, with values like flex-start, flex-end, center, space-between, and space-around.",
  },
  {
    question:
      "What is the function of the 'align-items' property in a flex container?",
    answer:
      "It aligns flex items along the cross axis, with options including flex-start, flex-end, center, baseline, and stretch.",
  },
  {
    question: "How is the 'align-content' property used in flex containers?",
    answer:
      "It aligns flex lines within the container when there is extra space on the cross axis, similar to justify-content but for multiple lines.",
  },
  {
    question: "What does the 'flex-grow' property do for a flex item?",
    answer:
      "It controls the ability of a flex item to grow if necessary, to fill the space in the flex container.",
  },
  {
    question: "How does the 'flex-shrink' property affect a flex item?",
    answer:
      "It determines the ability of a flex item to shrink if needed, to prevent overflow of the container.",
  },
  {
    question: "What is the 'flex-basis' property and how is it used?",
    answer:
      "It sets the initial main size of a flex item before the remaining space is distributed, specified as a length, percentage, or auto.",
  },
  {
    question: "Can you explain the shorthand 'flex' property for flex items?",
    answer:
      "The flex property combines flex-grow, flex-shrink, and flex-basis into a single declaration, streamlining flex item configuration.",
  },
  {
    question: "How does the 'order' property work for flex items?",
    answer:
      "It changes the order in which a flex item appears in the flex container, without changing the HTML structure.",
  },
  {
    question:
      "What is the difference between 'align-items' and 'align-self' in flexbox?",
    answer:
      "align-items sets the default alignment for all flex items in the container, while align-self allows alignment to be overridden for individual flex items.",
  },
  {
    question: "How can the 'gap' property be utilized in a flex container?",
    answer:
      "It specifies the space between flex items, both for rows and columns, making it easier to maintain consistent spacing without CSS hacks.",
  },
];

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
            Attribute selectors target elements based on their attributes (e.g.,{" "}
            <code>[type="text"]</code>).
          </li>
          <li>
            Pseudo-class selectors target elements based on a specific state
            (e.g., <code>:hover</code>, <code>:active</code>).
          </li>
          <li>
            Pseudo-element selectors target specific parts of an element (e.g.,{" "}
            <code>::before</code>, <code>::after</code>).
          </li>
        </ul>

        <h3 style={{ margin: "0px" }}>Display</h3>
        <ul>
          <li>
            <code>display: block;</code> - Elements take up the full width
            available and start on a new line.
          </li>
          <li>
            <code>display: inline;</code> - Elements only take up as much width
            as needed and do not start on a new line.
          </li>
          <li>
            <code>display: inline-block;</code> - Elements behave like inline
            elements but can have a width and height.
          </li>
          <li>
            <code>display: flex;</code> - Creates a flex container for flexible
            box layout.
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
            <code>position: relative;</code> - Elements are positioned relative
            to their normal position.
          </li>
          <li>
            <code>position: absolute;</code> - Elements are positioned relative
            to their nearest positioned ancestor.
          </li>
          <li>
            <code>position: fixed;</code> - Elements are positioned relative to
            the browser window.
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
            CSS Units - Pixels (px), percentages (%), ems (em), rems (rem), and
            viewport units (vw, vh) are commonly used.
          </li>
          <li>
            Inheritance - Some CSS properties are inherited by child elements
            from their parent elements.
          </li>
          <li>
            Cascading - When multiple styles are applied to an element, the
            cascading rules determine which styles take precedence. The order of
            precedence is inline styles, IDs, classes, and elements and then the
            order in which the styles are declared.
          </li>
        </ul>
        <br></br>
        <TopicsList>
          <ol style={{ margin: 0 }}>
            <li>CSS Fundamentals</li>
            <li>CSS Preprocessing</li>
            <li>Layout Techniques (Flexbox, Grid)</li>
            <li>Responsive Design</li>
            <li>CSS-in-JS</li>
            <li>Browser Compatibility</li>
          </ol>
        </TopicsList>
        <br></br>
        {cssQuestions.map((qa, index) => (
          <QuestionAnswer
            key={index}
            question={qa.question}
            answer={qa.answer}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default CSS;
