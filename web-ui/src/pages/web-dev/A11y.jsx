import QuestionsWrapper from "../../shared/QuestionsWrapper";
import Chip from "@mui/material/Chip";
import { IconExternalLink } from "@tabler/icons-react";
import Highlight from "react-highlight";
import { Tag } from "../../shared/Tag";

const questionsAndAnswers = [
  {
    question:
      "What are the different levels of WCAG compliance, and what do they signify?",
    answer: (
      <div>
        <p>
          The Web Content Accessibility Guidelines (WCAG) are organized into
          three levels of compliance: A, AA, and AAA. These levels are designed
          to meet the needs of different groups and situations:
        </p>
        <ul>
          <li>
            <strong>Level A:</strong> The most basic web accessibility features.
            Compliance at this level indicates that the web content meets the
            minimum accessibility standards and is accessible to some users.
          </li>
          <li>
            <strong>Level AA:</strong> Deals with the biggest and most common
            barriers for disabled users. Compliance at this level is generally
            targeted as the standard for web content and covers a wider range of
            accessibility issues, making content accessible to a broader
            audience.
          </li>
          <li>
            <strong>Level AAA:</strong> The highest and most comprehensive level
            of web accessibility. Achieving this level indicates that the
            content has addressed the widest range of accessibility issues.
            However, it is not always possible to meet all Level AAA
            requirements for all content, and it is not considered a practical
            requirement for entire sites.
          </li>
        </ul>
        <p>
          These levels are incremental, meaning that to comply with Level AA, a
          site must first meet all Level A criteria, and to meet Level AAA, it
          must fulfill both Level A and Level AA criteria.
        </p>
      </div>
    ),
  },
  {
    question: "What are key practices to ensure website accessibility?",
    answer: (
      <div>
        <p>
          Ensuring website accessibility involves implementing a range of best
          practices to make web content usable for people with various
          disabilities. Key practices include:
        </p>
        <ul>
          <li>
            <strong>Using Semantic HTML:</strong> Proper use of HTML elements
            (like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
            <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code>) provides
            a meaningful structure that assistive technologies can interpret.
          </li>
          <li>
            <strong>Providing Text Alternatives:</strong> All non-text content
            (images, videos) should have text alternatives (alt text, captions,
            transcripts) so that it can be changed into other forms people need,
            such as large print, braille, or speech.
          </li>
          <li>
            <strong>Ensuring Keyboard Accessibility:</strong> All functionality
            should be accessible using a keyboard alone, allowing users who
            cannot use a mouse to navigate and interact with the site.
          </li>
          <li>
            <strong>Creating Consistent Navigation:</strong> Consistency in
            navigation and interface elements helps users understand and predict
            how to use your site.
          </li>
          <li>
            <strong>Implementing ARIA Where Necessary:</strong> Use ARIA roles,
            states, and properties to enhance accessibility when native HTML
            cannot achieve the desired level of accessibility.
          </li>
          <li>
            <strong>Ensuring Sufficient Color Contrast:</strong> Text and
            background colors should have enough contrast to be easily
            distinguishable by users with visual impairments.
          </li>
          <li>
            <strong>Testing with Assistive Technologies:</strong> Regularly test
            your site using screen readers and other assistive technologies to
            identify and fix accessibility barriers.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What is ARIA and when should you use it?",
    answer: (
      <div>
        <p>
          ARIA (Accessible Rich Internet Applications) significantly enhances
          web accessibility by providing semantics for custom controls that lack
          corresponding HTML elements. This is particularly useful for complex
          web components like tabs, modals, and carousels, where standard HTML
          elements fall short in conveying the role, state, and properties of
          these components to assistive technologies.
        </p>
        <p>
          For example, consider a tabs component built with <code>div</code>{" "}
          elements. Without ARIA, these <code>div</code>s are semantically
          neutral, making it challenging for screen reader users to understand
          and interact with them. By applying ARIA roles and properties, we can
          define their roles as tabs, making the component accessible.
        </p>
        <Highlight className="javascript">
          {`<div role="tablist">
  <div role="tab" aria-selected="true" tabindex="0">Tab 1</div>
  <div role="tab" aria-selected="false" tabindex="-1">Tab 2</div>
  <div role="tab" aria-selected="false" tabindex="-1">Tab 3</div>
</div>
<div role="tabpanel">Content for Tab 1</div>
<div role="tabpanel" hidden>Content for Tab 2</div>
<div role="tabpanel" hidden>Content for Tab 3</div>`}
        </Highlight>
        <p>
          The code above illustrates how ARIA roles (<code>role="tab"</code> and{" "}
          <code>role="tabpanel"</code>) and properties (
          <code>aria-selected</code> and <code>tabindex</code>) can be used to
          enhance the semantics of a tabs component. This makes the tabs
          navigable and understandable to users relying on assistive
          technologies, such as screen readers.
        </p>
        <p>
          Remember, ARIA is a powerful tool for improving accessibility, but it
          should be used as a supplement to semantic HTML whenever possible.
          Always prefer using native HTML elements with inherent accessibility
          features before resorting to ARIA attributes.
        </p>
      </div>
    ),
  },
  {
    question:
      "What are the main aspects of ARIA crucial for enhancing web accessibility?",
    answer: (
      <div>
        <p>
          The main aspects of ARIA, essential for improving web accessibility,
          include:
        </p>
        <ul>
          <li>
            <strong>Roles:</strong> Define the type or purpose of an element.
            Helps assistive technologies understand its function.
            <Highlight language="html">
              {`<div role="navigation"></div> <!-- Navigation role for a navigation bar -->`}
            </Highlight>
          </li>
          <li>
            <strong>States:</strong> Dynamic attributes that inform assistive
            technologies of changes to elements based on user interaction.
            <Highlight language="html">
              {`<button aria-pressed="true">Toggle</button> <!-- State indicating a button is pressed -->`}
            </Highlight>
          </li>
          <li>
            <strong>Properties:</strong> Define additional qualities of an
            element, providing more context about an element's role or behavior.
            <Highlight language="html">
              {`<input aria-required="true" /> <!-- Property indicating a field is required -->`}
            </Highlight>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Does ARIA change the behavior of elements?",
    answer: (
      <p>
        No, ARIA does not change an element's behavior. It only affects the
        semantics, which are the instructions provided to assistive technology.
        Implementing functional behaviors, like keyboard navigation, still
        requires JavaScript.
      </p>
    ),
  },
  {
    question: "Why are headings important in web accessibility?",
    answer: (
      <p>
        Headings provide a mental outline of the page for screen reader users,
        allowing them to navigate and understand the content structure
        efficiently. Using headings in sequential order without skipping levels,
        and adjusting their sizes via CSS for visual differentiation, is
        essential for accessibility.
      </p>
    ),
  },
  {
    question: "How do semantic elements improve web accessibility?",
    answer: (
      <p>
        Semantic elements inherently carry meaning about their content, aiding
        assistive technologies in conveying the purpose of elements to users.
        Using the correct semantic element, like <code>&lt;button&gt;</code> for
        buttons, ensures that the element's function is accessible to screen
        reader users.
      </p>
    ),
  },
  {
    question: "Why should you avoid using generic elements as controls?",
    answer: (
      <p>
        Generic elements such as <code>&lt;div&gt;</code> lack semantics that
        indicate interactive roles to assistive technologies. When these are
        used as controls, like buttons, they can mislead screen reader users,
        making crucial functionalities inaccessible.
      </p>
    ),
  },
  {
    question:
      "Why is the ARIA Authoring Practices Guide recommended for learning ARIA?",
    answer: (
      <p>
        The ARIA Authoring Practices Guide is recommended because it is a
        practical, easy-to-understand resource tailored for developers. Unlike
        the more technical and dense ARIA specification, the guide is laid out
        with real-world applications in mind. It details how to use ARIA to make
        common UI patterns accessible, including code examples and keyboard
        interaction patterns. This approachable format helps developers quickly
        find and implement solutions for accessibility challenges, making it an
        invaluable tool for learning how to use ARIA effectively.
      </p>
    ),
  },
  {
    question: "How do skip links improve website navigation for accessibility?",
    answer: (
      <div>
        <p>
          Skip links are hidden navigation links that appear only when focused
          (usually through keyboard navigation), allowing users to skip directly
          to the main content or specific sections of a page, bypassing repeated
          content like menus and headers. This practice significantly improves
          website navigation for users relying on screen readers or keyboard
          navigation by providing a quicker, more efficient way to access the
          content they seek, without having to navigate through every menu item
          or navigational element.
        </p>
      </div>
    ),
  },
  {
    question:
      "How do HTML5 landmark elements enhance navigation for accessible websites?",
    answer: (
      <div>
        <p>
          HTML5 landmark elements, such as <Tag>nav</Tag>, <Tag>header</Tag>,{" "}
          <Tag>footer</Tag>, and <Tag>main</Tag>, play a crucial role in
          enhancing website navigation for accessibility. These semantic
          elements clearly define the structure and layout of a web page,
          allowing assistive technologies like screen readers to easily
          interpret and navigate the content. By using landmark elements,
          developers can indicate areas of importance and function within a
          page, enabling users to quickly navigate to and between these
          sections. This structured approach to web design not only improves the
          overall user experience for those relying on assistive technologies
          but also contributes to cleaner, more semantic HTML coding practices.
        </p>
      </div>
    ),
  },
  {
    question:
      "What is the accessibility tree, and why is it important for web accessibility?",
    answer: (
      <div>
        <p>
          The accessibility tree is a simplified, browser-generated
          representation of a web page's UI, structured specifically for use by
          assistive technologies like screen readers. It abstracts away the
          complexity of the DOM, focusing instead on providing semantic
          information and interactive controls. The tree includes information
          such as roles (what an element represents), properties (attributes
          that can change how an element is used), and states (conditions that
          can change over time).
        </p>
        <p>
          Understanding and utilizing the accessibility tree is crucial for web
          accessibility because it directly influences how content is
          interpreted and interacted with by users who rely on assistive
          technologies. By ensuring that the accessibility tree accurately
          represents the UI and its interactive elements, developers can improve
          the navigability and usability of their web content for all users,
          regardless of their ability to perceive or interact with it in
          conventional ways.
        </p>
      </div>
    ),
  },
  {
    question:
      "How can you use Chrome DevTools for testing website accessibility?",
    answer: (
      <div>
        <p>
          Chrome DevTools offers several features to assist with testing website
          accessibility:
        </p>
        <ul>
          <li>
            <strong>Accessibility Tree:</strong> Inspect the accessibility tree
            to understand how your content is structured from an accessibility
            standpoint. This feature shows how elements are exposed to assistive
            technologies, including roles, names, and states.
          </li>
          <li>
            <strong>ARIA Attributes:</strong> Review ARIA roles, states, and
            properties to ensure they are applied correctly, enhancing the
            semantic information available to assistive technologies.
          </li>
        </ul>
      </div>
    ),
  },
];

const Accessibility = () => {
  return (
    <>
      <p>
        Web accessibility ensures that people with disabilities can perceive,
        understand, navigate, and interact with the web, providing equal access
        to information and functionality. It's essential for creating inclusive,
        user-friendly web experiences. Below are some common questions and
        answers related to web accessibility.
      </p>
      <h3>Resources</h3>
      <div
        style={{
          marginTop: "5px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <Chip
          label="Accessibility Fundamentals with Rob Dodson by SFHTML5 (YouTube)"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=z8xUCzToff8",
              "_blank"
            );
          }}
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="Learn Accessibility - Full a11y Tutorial by freeCodeCamp.org (YouTube)"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=e2nkq3h1P68",
              "_blank"
            );
          }}
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="Web Accessibility Guidelines (W3C)"
          onClick={() => {
            window.open(
              "https://www.w3.org/WAI/standards-guidelines/aria/",
              "_blank"
            );
          }}
          icon={<IconExternalLink size={"1.2rem"} />}
        />
      </div>
      <br></br>

      <QuestionsWrapper
        storageKey={"a11y-other"}
        questions={questionsAndAnswers}
      />
    </>
  );
};

export default Accessibility;
