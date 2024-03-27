import QuestionsWrapper from "../../shared/QuestionsWrapper";
import Chip from "@mui/material/Chip";
import { IconExternalLink } from "@tabler/icons-react";
import Highlight from "react-highlight";
import { Tag } from "../../shared/Tag";
import CustomTabPanel, { a11yProps } from "../../shared/CustomTabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const questionsAndAnswers = [
  {
    question: "What are the four principles of accessibility?",
    answer: (
      <div>
        <p>
          The four principles of accessibility, ensuring that content is
          accessible to everyone, include:
        </p>
        <ul>
          <li>
            <strong>Perceivable:</strong> Information and user interface
            components must be presentable to users in ways they can perceive.
          </li>
          <li>
            <strong>Operable:</strong> User interface components and navigation
            must be operable.
          </li>
          <li>
            <strong>Understandable:</strong> Information and the operation of
            the user interface must be understandable.
          </li>
          <li>
            <strong>Robust:</strong> Content must be robust enough that it can
            be interpreted reliably by a wide variety of user agents, including
            assistive technologies.
          </li>
        </ul>
      </div>
    ),
  },
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
          <li>
            <strong>Name:</strong> Provide accessible names or descriptions
            using attributes like aria-label, aria-labelledby, or
            aria-describedby.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What are the different ways to give an element an accessible name?",
    answer: (
      <div>
        <strong>aria-label:</strong> ARIA attribute that directly provides an
        accessible name for an element.
        <Highlight language="html">
          {`<button aria-label="Close">X</button>`}
        </Highlight>
        <strong>aria-labelledby:</strong> ARIA attribute that references the ID
        of another element to use as the accessible name.
        <Highlight language="html">
          {`<h1 id="title">Page Title</h1>
<button aria-labelledby="title">Click Me</button>`}
        </Highlight>
        <strong>aria-describedby:</strong> ARIA attribute that references the ID
        of another element to provide additional description or context.
        <Highlight language="html">
          {`<input aria-describedby="description" />
<p id="description">Enter your email address</p>`}
        </Highlight>
        <strong>Semantic labels:</strong> Using native HTML elements like
        <code>&lt;label&gt;</code> to associate text with form controls.
        <Highlight language="html">
          {`<label for="email">Email:</label>
<input type="email" id="email" />

<!-- Or using implicit association -->
<label>
  Email:
  <input type="email" />
</label>`}
        </Highlight>
        {/* and finally, we have the title */}
        <strong>title attribute:</strong> The title attribute provides a tooltip
        when the user hovers over an element. While it's mainly for sighted
        users, some screen readers announce it. However, it's not recommended
        for accessibility purposes.
        <Highlight language="html">
          {`<!-- Not recommended for accessibility -->
<button title="Close">X</button> `}
        </Highlight>
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
  {
    question:
      "want is tabindex attribute? What do the values 0, -1, values > 0 do?",
    answer: (
      <div>
        <p>
          The <Tag>tabindex</Tag> attribute specifies the tab order of an
          element, determining whether it can receive keyboard focus and in what
          sequence. The values <Tag>0</Tag>, <Tag>-1</Tag> and positive integers
          have the following effects:
        </p>
        <ul>
          <li>
            <strong>tabindex="0":</strong> The element becomes part of the
            natural tab order, following the default source order in the DOM.
            Used to make elements focusable that are not natively focusable,
            like
            <Tag>div</Tag> or <Tag>span</Tag>.
          </li>
          <li>
            <strong>tabindex="-1":</strong> The element can receive focus via
            scripting but is not included in the natural tab order. This is
            useful for elements that should be focusable but not reachable via
            the keyboard alone.
          </li>
          <li>
            <strong>tabindex="n" (where n greater 0):</strong> The element
            becomes part of the tab order and is navigated to after all elements
            with lower tabindex values. This is considered an anti-pattern and
            should be avoided in most cases.
          </li>
        </ul>
      </div>
    ),
  },
];

const AccessibilityContent = () => {
  // Initialize state to load saved checks or an empty object
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem("checkedItems");
    return saved ? JSON.parse(saved) : {};
  });

  // Update localStorage when checkedItems changes
  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  // Handle checkbox change
  const handleCheckChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const sections = [
    {
      title:
        "Browser Accessibility Tree / Accessibility Object Model (1 hour of content)",
      items: [
        {
          id: "treeIntro",
          label:
            "Introduction to the Browser Accessibility Tree (5 minute read)",
          href: "https://web.dev/the-accessibility-tree/",
        },
        {
          id: "semanticsHTML5",
          label: "Semantics & HTML5 in the browser (10 minute video)",
          href: "https://www.youtube.com/watch?v=g2tzEil5TL0",
        },
        {
          id: "overviewARIA",
          label: "Overview of ARIA in relation to a11y tree (10 minute video)",
          href: "https://www.youtube.com/watch?v=g9Qff0b-lHk",
        },
        {
          id: "ariaBasics",
          label: "ARIA Basics (25 minute read)",
          href: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics",
        },
        {
          id: "accessTreeChrome",
          label: "Accessibility Tree in Chrome (10 minute read)",
          href: "https://developer.chrome.com/blog/full-accessibility-tree/",
        },
        {
          id: "pageTitlesReact",
          label: "Page titles in React (5 minute video)",
          href: "https://youtu.be/kz9e81oRs3Y?t=425",
        },
        {
          id: "ariaAuthoring",
          label: "ARIA Authoring practices patterns (reference)",
          href: "https://www.w3.org/WAI/ARIA/apg/patterns/",
        },
        {
          id: "accessibleNameSpec",
          label: "Accessible Name Computation Spec (5 minute read)",
          href: "https://www.w3.org/TR/accname-1.1/#mapping_additional_nd",
        },
        {
          id: "accTreeGuide",
          label:
            "The Accessibility Tree: Training Guide for Advanced Web Development (1 hour read)",
          href: "https://whatsock.com/training/",
        },
      ],
    },
    {
      title: "Keyboard Accessibility (1 hour 20 minutes of content)",
      items: [
        {
          id: "keyboardHTMLCSS",
          label: "Keyboard Accessibility HTML & CSS (30 minute read)",
          href: "https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/",
        },
        {
          id: "keyboardJS",
          label: "Keyboard Accessibility: Javascript (30 minute read)",
          href: "https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-javascript-part2/",
        },
        {
          id: "focusManagementReact",
          label: "Focus management in React (10 minute video)",
          href: "https://youtu.be/kz9e81oRs3Y?t=726",
        },
        {
          id: "keyboardNavReact",
          label: "Keyboard Navigation in React (10 minute video)",
          href: "https://youtu.be/kz9e81oRs3Y?t=1233",
        },
      ],
    },
    {
      title: "Accessibility & UI Elements (50 minutes of content)",
      items: [
        {
          id: "accessibleForms",
          label: "Accessible Forms & Controls, Udemy (11 minute video)",
          href: "https://udemy.com/course/website-accessibility-course/learn/lecture/2758586#overview",
        },
        {
          id: "accessibleText",
          label: "Accessible Text, Udemy (17 minute video)",
          href: "https://udemy.com/course/website-accessibility-course/learn/lecture/2758636",
        },
        {
          id: "accessibleImages",
          label: "Accessible Images, Udemy (11 minute video)",
          href: "https://udemy.com/course/website-accessibility-course/learn/lecture/2758614",
        },
        {
          id: "accessibleTables",
          label: "Accessible Tables, Udemy (10 minute video)",
          href: "https://udemy.com/course/website-accessibility-course/learn/lecture/2758640",
        },
      ],
    },
    {
      title: "ARIA live and Status Updates (45 minutes of content)",
      items: [
        {
          id: "dynamicContent",
          label: "Dynamic Content, Udemy (19 minute video)",
          href: "https://udemy.com/course/website-accessibility-course/learn/lecture/2758644",
        },
        {
          id: "demoARIALive",
          label:
            "Demonstration of ARIA live with a screen reader (10 minute video)",
          href: "https://www.youtube.com/watch?v=i4gvwKeN1GI",
        },
        {
          id: "introARIALive",
          label: "Introduction to ARIA live regions (6 minute read)",
          href: "https://dev.to/garybyrne/introduction-to-aria-live-regions-2m0g",
        },
        {
          id: "ariaLiveReact",
          label: "ARIA live in React (5 minute video)",
          href: "https://youtu.be/kz9e81oRs3Y?t=1855",
        },
        {
          id: "moreLiveRegions",
          label: "More on Live regions (5 minute read)",
          href: "https://whatsock.com/training/#hd24",
        },
      ],
    },
  ];

  return (
    <div>
      <h3>Accessibility Learning Path</h3>
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h4>{section.title}</h4>
          <ul>
            {section.items.map((item) => (
              <li key={item.id} style={{ margin: 0 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!!checkedItems[item.id]}
                      onChange={handleCheckChange}
                      name={item.id}
                      color="success"
                    />
                  }
                  label={
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  }
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

const Learn = () => {
  return (
    <>
      <p>
        Web accessibility ensures that people with disabilities can perceive,
        understand, navigate, and interact with the web, providing equal access
        to information and functionality. It's essential for creating inclusive,
        user-friendly web experiences. Below are some common questions and
        answers related to web accessibility.
      </p>
      <AccessibilityContent />
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
          label="Learn Accessibility (web.dev)"
          onClick={() => {
            window.open("https://web.dev/learn/accessibility", "_blank");
          }}
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="WebAIM's WCAG 2.0 Checklist (WebAIM) (Super useful)"
          onClick={() => {
            window.open(
              "https://webaim.org/standards/wcag/checklist",
              "_blank"
            );
          }}
          icon={<IconExternalLink size={"1.2rem"} />}
        />
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
    </>
  );
};

const Accessibility = () => {
  const [value, setValue] = useState(() => {
    const storedTabValue = localStorage.getItem("a11y-currentTab");
    return storedTabValue !== null ? parseInt(storedTabValue, 10) : 0;
  });

  const handleChange = (event, newValue) => {
    localStorage.setItem("domapi-currentTab", newValue);
    setValue(newValue);
  };

  return (
    <>
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
        <QuestionsWrapper
          storageKey={"a11y-other"}
          questions={questionsAndAnswers}
        />
      </CustomTabPanel>
    </>
  );
};

export default Accessibility;
