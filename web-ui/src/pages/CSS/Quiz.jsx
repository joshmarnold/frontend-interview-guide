import QuestionsWrapper from "../../shared/QuestionsWrapper";
import TopicsList from "../../shared/TopicsList";

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

const Learn = () => {
  return (
    <>
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
      <QuestionsWrapper storageKey="css" questions={cssQuestions} />
    </>
  );
};

export default Learn;
