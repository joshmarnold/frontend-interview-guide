import { useState } from "react";
import QuestionAnswer from "../../shared/QuestionAnswer";
import TopicsList from "../../shared/TopicsList";

const questionsAndAnswers = [
  {
    question:
      "The different types of users who benefit from accessible web content include:",
    answer: (
      <ul>
        <li>
          <strong>Visually Impaired Users</strong>: This includes users who are
          blind, have low vision, or have color blindness, requiring screen
          readers, magnification, and high contrast.
        </li>
        <li>
          <strong>Hearing Impaired Users</strong>: Users who are deaf or hard of
          hearing benefit from captions, transcripts, and sign language videos.
        </li>
        <li>
          <strong>Motor Impaired Users</strong>: Individuals with limited fine
          motor control, who use keyboard navigation, voice recognition
          software, or adapted mice.
        </li>
        <li>
          <strong>Cognitive and Neurological Impaired Users</strong>: Users with
          dyslexia, autism, and other cognitive or neurological disabilities
          benefit from clear navigation, simple language, and consistent layout.
        </li>
        <li>
          <strong>Speech Impaired Users</strong>: Those who have difficulty
          speaking or cannot speak at all, requiring alternative communication
          methods for web interactions.
        </li>
        <li>
          <strong>Photosensitive Users</strong>: Individuals susceptible to
          seizures triggered by flashing lights or certain visual patterns,
          needing content that avoids such triggers.
        </li>
        <li>
          <strong>Learning Disabilities</strong>: Users with learning
          disabilities like dyslexia benefit from content that supports
          different learning styles, such as text, audio, and visual aids.
        </li>
      </ul>
    ),
  },
  {
    question:
      "What considerations should be made for visually impaired users when designing accessible web content?",
    answer: (
      <p>
        Ensure text content is readable through screen readers by using semantic
        HTML and ARIA labels. Provide text alternatives for non-text content,
        like images, through alt attributes. Use high contrast color schemes and
        resizable text to accommodate users with low vision.
      </p>
    ),
  },
  {
    question:
      "How can web content be made accessible for users with hearing impairments?",
    answer: (
      <p>
        Include captions or transcripts for audio and video content to ensure
        users who are deaf or hard of hearing can access the information. Ensure
        all content is fully accessible without sound.
      </p>
    ),
  },
  {
    question:
      "What accessibility features are important for users with motor disabilities?",
    answer: (
      <p>
        Design interfaces that are navigable using keyboard only or through
        voice commands, as some users may not be able to use a mouse. Ensure
        clickable targets are large enough and provide ample time for users to
        complete actions.
      </p>
    ),
  },
  {
    question:
      "How should web content be structured to support users with cognitive disabilities?",
    answer: (
      <p>
        Use clear, simple language and provide consistent navigation. Break down
        information into smaller, manageable chunks and use visual cues to help
        with content understanding. Avoid time-limited tasks to reduce cognitive
        load.
      </p>
    ),
  },
  {
    question:
      "What are key accessibility considerations for users with speech disabilities?",
    answer: (
      <p>
        Ensure web applications that require voice input also provide
        alternative methods for interaction, such as text input or selection
        from a list, to accommodate users who cannot speak or have difficulty
        speaking.
      </p>
    ),
  },
  {
    question:
      "How can websites be made more accessible for users with photosensitive epilepsy?",
    answer: (
      <p>
        Avoid using flashing or blinking content that exceeds the thresholds for
        frequency and brightness. Provide warnings for users and the option to
        disable animations or flashing elements.
      </p>
    ),
  },
  {
    question:
      "What steps can be taken to ensure web accessibility for users with learning disabilities?",
    answer: (
      <p>
        Use clear, concise language and provide definitions for complex
        terminology. Incorporate multimedia elements like images and videos to
        support text, and allow users to customize their viewing experience,
        such as adjusting font size and background color.
      </p>
    ),
  },
  {
    question: "What is Web Accessibility, and why is it important?",
    answer: (
      <p>
        Web accessibility ensures websites are usable by everyone, including
        people with disabilities. It's crucial for inclusivity, legal
        compliance, and expanding market reach, allowing all users equal access
        to information and functionality.
      </p>
    ),
  },
  {
    question:
      "Can you explain the WCAG? What are the different levels of WCAG compliance?",
    answer: (
      <p>
        The Web Content Accessibility Guidelines (WCAG) provide standards for
        web accessibility. There are three levels of compliance: A (minimum), AA
        (mid-level, recommended for most websites), and AAA (highest).
      </p>
    ),
  },
  {
    question:
      "How do you ensure your web content is accessible to screen readers?",
    answer: (
      <p>
        Use semantic HTML and ARIA roles, labels, and landmarks to ensure
        content is structured logically. Proper HTML elements like headings,
        lists, and links enhance screen reader usability.
      </p>
    ),
  },
  {
    question:
      "What are some common accessibility issues and how do you fix them?",
    answer: (
      <p>
        Common issues include lack of keyboard navigability and missing alt text
        for images. Fix these by ensuring keyboard focus, providing alt
        attributes for images, checking color contrast, and labeling form
        elements.
      </p>
    ),
  },
  {
    question: "How would you implement accessible forms?",
    answer: (
      <p>
        Implement accessible forms with descriptive labels, fieldsets for
        grouping, clear error messages and instructions, and ensuring all
        elements are keyboard accessible.
      </p>
    ),
  },
  {
    question:
      "What tools or methods do you use to test the accessibility of a website?",
    answer: (
      <p>
        Use tools like axe, Lighthouse, Wave, and screen readers (NVDA, JAWS,
        VoiceOver) for testing. Manual methods include keyboard-only navigation
        and using high-contrast modes.
      </p>
    ),
  },
  {
    question: "How do ARIA roles improve web accessibility?",
    answer: (
      <p>
        ARIA roles define the type of UI element (e.g., button, slider, tab),
        helping assistive technologies understand their function and
        facilitating appropriate user interaction.
      </p>
    ),
  },
  {
    question: "What is the difference between ARIA properties and states?",
    answer: (
      <p>
        ARIA properties provide additional semantics that are generally static
        (e.g., <code>aria-required="true"</code>), while ARIA states indicate
        dynamic changes to UI components (e.g.,{" "}
        <code>aria-expanded="false"</code>).
      </p>
    ),
  },
  {
    question:
      "Can you give an example of using ARIA for dynamic content updates?",
    answer: (
      <p>
        <code>aria-live="polite"</code> marks a section where non-urgent updates
        occur, allowing screen readers to announce changes during idle times,
        whereas <code>aria-live="assertive"</code> is for urgent updates that
        interrupt the current speech.
      </p>
    ),
  },
  {
    question: "How can ARIA enhance the accessibility of custom widgets?",
    answer: (
      <p>
        By applying roles such as <code>role="slider"</code> along with
        attributes like <code>aria-valuemin</code>, <code>aria-valuemax</code>,
        and <code>aria-valuenow</code>, custom sliders become accessible, as
        these ARIA roles and attributes convey the widget's state and
        functionality to assistive technologies.
      </p>
    ),
  },
  {
    question:
      "Why is it important to use HTML elements over ARIA attributes wherever possible?",
    answer: (
      <p>
        Native HTML elements inherently possess accessibility features, making
        them preferable for ensuring web content is accessible. ARIA should be
        used to enhance accessibility only when HTML limitations prevent
        achieving the required functionality.
      </p>
    ),
  },
  {
    question:
      "What is the role of aria-live in improving accessibility for dynamic web content?",
    answer: (
      <p>
        The <code>aria-live</code> attribute informs assistive technologies
        about how to treat changes in content, with values like "polite" or
        "assertive" guiding the urgency and manner of these updates to users.
      </p>
    ),
  },
  {
    question:
      "How do you ensure a custom dropdown menu is accessible using ARIA?",
    answer: (
      <p>
        Use <code>role="menu"</code> for the dropdown container and{" "}
        <code>role="menuitem"</code> for each option.{" "}
        <code>aria-haspopup="true"</code> indicates that a control opens a menu,
        and <code>aria-expanded</code> manages its open or closed state.
      </p>
    ),
  },
  {
    question:
      "How can ARIA (Accessible Rich Internet Applications) be used to improve web accessibility?",
    answer: (
      <p>
        ARIA roles, properties, and states enhance accessibility for dynamic
        content and complex UI controls, providing context and interactivity to
        assistive technologies.
      </p>
    ),
  },
  {
    question: "What is the importance of color contrast in web accessibility?",
    answer: (
      <p>
        Adequate color contrast helps users with visual impairments. Tools can
        test and ensure compliance with WCAG color contrast ratios, making
        content more readable.
      </p>
    ),
  },
  {
    question:
      "Explain the concept of focus management in web applications. Why is it important?",
    answer: (
      <p>
        Focus management is key for keyboard users, especially in SPAs and modal
        dialogs. Techniques include directing focus to new content or controls
        as needed, enhancing usability.
      </p>
    ),
  },
  {
    question:
      "What steps would you take to make a single-page application (SPA) accessible?",
    answer: (
      <p>
        Manage focus, update the document title on navigation, and ensure
        dynamic content changes are announced to screen readers to make SPAs
        accessible.
      </p>
    ),
  },
  {
    question:
      "How do you approach responsive design with accessibility in mind?",
    answer: (
      <p>
        Use flexible layouts, scalable text, and media queries to ensure content
        is accessible and readable across various devices and screen sizes.
      </p>
    ),
  },
  {
    question: "Can you explain how to use skip links? Why are they important?",
    answer: (
      <p>
        Skip links allow keyboard users to bypass repetitive navigation to
        access the main content directly, improving site navigability.
      </p>
    ),
  },
  {
    question: "What is the role of keyboard accessibility in web development?",
    answer: (
      <p>
        Ensure all interactive elements are operable through keyboard interfaces
        alone to accommodate users who rely on keyboards for navigation.
      </p>
    ),
  },
  {
    question: "What are some key practices to ensure a website is accessible?",
    answer: (
      <ul>
        <li>
          <strong>Semantic HTML</strong>: Use HTML elements according to their
          intended purpose, which helps assistive technologies understand the
          structure and meaning of the content.
        </li>
        <li>
          <strong>Alt Text for Images</strong>: Provide descriptive alt
          attributes for images so that screen reader users can understand the
          content they cannot see.
        </li>
        <li>
          <strong>Keyboard Navigation</strong>: Ensure all interactive elements
          are navigable and usable with a keyboard alone, without requiring a
          mouse.
        </li>
        <li>
          <strong>Color Contrast</strong>: Maintain high contrast between text
          and its background to aid users with visual impairments.
        </li>
        <li>
          <strong>ARIA Labels</strong>: Use ARIA labels and roles where
          necessary, especially for dynamic content and custom interactive
          controls, to provide additional context for assistive technologies.
        </li>
        <li>
          <strong>Responsive Design</strong>: Ensure the site is usable across a
          range of devices and screen sizes, accommodating users with varying
          levels of ability.
        </li>
        <li>
          <strong>Error Identification</strong>: Provide clear and immediate
          feedback when users make errors, including instructions on how to
          correct them.
        </li>
        <li>
          <strong>Skip Links</strong>: Implement skip navigation links to allow
          users to bypass repetitive content and navigate directly to the main
          content.
        </li>
        <li>
          <strong>Testing</strong>: Regularly test the site with both automated
          accessibility tools and manually, including with screen readers and
          through keyboard-only navigation.
        </li>
      </ul>
    ),
  },
  {
    question: "How would you test a website for accessibility compliance?",
    answer: (
      <p>
        I test a website for accessibility compliance by combining automated
        tools with manual testing. I use automated tools like Google Lighthouse,
        axe, or WAVE to quickly identify and correct a range of accessibility
        issues. Then, I manually test the website by navigating with a keyboard
        only, using screen readers like NVDA or VoiceOver, and checking for
        proper color contrast. Additionally, I conduct user testing with
        individuals who have disabilities to get real-world feedback on the
        accessibility of the site.
      </p>
    ),
  },
];

const chromeQuestionsAndAnswers = [
  {
    question:
      "How can Chrome DevTools impact accessibility in web development?",
    answer: (
      <p>
        Chrome DevTools significantly enhances web accessibility by providing
        developers with tools to inspect and improve the semantic structure of
        web pages. The Accessibility Tree, part of the Elements panel, allows
        for the inspection of ARIA roles, states, and properties, ensuring
        content is structured in a way that is accessible to screen readers.
        Additionally, the integrated Lighthouse tool offers automated
        accessibility audits, offering recommendations and actionable insights
        to address web accessibility issues effectively.
      </p>
    ),
  },
  {
    question:
      "What are some manual accessibility testing techniques, and how does Chrome support them?",
    answer: (
      <p>
        Manual accessibility testing is crucial for catching issues automated
        tools may miss. Techniques include using keyboard navigation to ensure
        all interactive elements are accessible and utilizing Chrome's visual
        focus indicators to track tab order. ChromeVox, a screen reading tool,
        aids in understanding how content is presented to visually impaired
        users. The Styles pane in Chrome DevTools is also useful for manually
        checking color contrast against WCAG guidelines, ensuring text
        readability.
      </p>
    ),
  },
  {
    question:
      "How does the Lighthouse audit tool in Chrome contribute to web accessibility?",
    answer: (
      <p>
        The Lighthouse audit tool in Chrome is pivotal for conducting
        comprehensive accessibility evaluations on web pages. It generates
        reports that categorize and prioritize issues, providing developers with
        detailed descriptions and links to relevant documentation. This
        facilitates the addressing of various accessibility concerns, such as
        color contrast and ARIA attribute usage, ensuring that web content meets
        accessibility standards and is accessible to a wider audience.
      </p>
    ),
  },
  {
    question:
      "What role does the Accessibility Tree in Chrome DevTools play in improving web accessibility?",
    answer: (
      <p>
        The Accessibility Tree feature in Chrome DevTools is instrumental in
        enhancing web accessibility. It provides a visual representation of how
        web elements are exposed to assistive technologies, detailing their
        roles, names, and values. This visibility enables developers to adjust
        HTML and ARIA attributes with precision, ensuring that custom widgets
        are accessible and that interactive elements are correctly labeled for
        screen reader users.
      </p>
    ),
  },
  {
    question:
      "What challenges might arise while testing accessibility with Chrome, and how can they be addressed?",
    answer: (
      <p>
        Testing accessibility in Chrome may present challenges, particularly
        with dynamic content changes that automated tools might not catch.
        Developers can use the Event Listeners panel in Chrome DevTools to debug
        JavaScript events responsible for content updates, ensuring ARIA live
        regions are correctly announced by screen readers. Complementing
        automated tools with regular manual testing, including keyboard
        navigation and screen reader evaluations, provides a comprehensive
        approach to accessibility testing, capturing issues that automated scans
        may overlook.
      </p>
    ),
  },
];

const googleLightHouseQuestionsAnswers = [
  {
    question: "How can custom controls on a website be made accessible?",
    answer: (
      <p>
        Ensuring custom controls are accessible involves assigning appropriate
        ARIA roles to communicate the control type to assistive technologies.
        It's crucial to associate each control with a clear label, either
        through implicit labeling or by using <code>aria-labelledby</code>,
        enabling screen readers to accurately convey information to users.
      </p>
    ),
  },
  {
    question:
      "What strategies prevent user focus from getting trapped within a section of a webpage?",
    answer: (
      <p>
        Preventing focus trapping involves ensuring modals or focus-capturing
        components have logical mechanisms for focus transition, such as close
        buttons or JavaScript for managing focus shifts. This focus management
        allows keyboard users to navigate through all interactive elements
        smoothly.
      </p>
    ),
  },
  {
    question:
      "Why is it important for interactive controls to be keyboard-focusable?",
    answer: (
      <p>
        Keyboard-focusable interactive controls are crucial to ensure
        accessibility for users who rely on keyboard navigation. By making all
        interactive elements focusable through standard HTML5 elements and, when
        necessary, the <code>tabindex</code> attribute, websites can cater to a
        broader range of users, including those who do not use a mouse.
      </p>
    ),
  },
  {
    question:
      "How can the purpose and state of interactive elements be communicated to users?",
    answer: (
      <p>
        Communicating the purpose and state of interactive elements can be
        achieved by utilizing semantic HTML and ARIA attributes. For example,
        indicating a button's state with <code>aria-pressed</code> and
        describing elements through tooltips or visually hidden text enhances
        user understanding and interaction.
      </p>
    ),
  },
  {
    question: "What practices establish a logical tab order on a webpage?",
    answer: (
      <p>
        Establishing a logical tab order involves arranging the HTML source code
        to reflect the desired navigation sequence, matching the visual and
        content flow from top to bottom and left to right. Controlling the{" "}
        <code>tabindex</code> can further refine keyboard navigation, ensuring a
        coherent and intuitive user experience.
      </p>
    ),
  },
  {
    question:
      "How is focus managed when adding new content to the page dynamically?",
    answer: (
      <p>
        Managing focus for dynamically added content, such as modals or alerts,
        requires programmatically shifting the focus to the new elements using
        JavaScript. This approach ensures users are aware of the updates and can
        interact with the new content immediately.
      </p>
    ),
  },
  {
    question: "How is offscreen content made accessible?",
    answer: (
      <p>
        Offscreen content is made accessible by hiding it from both visual
        display and assistive technologies when not in use, using CSS properties
        like <code>display: none;</code> or <code>visibility: hidden;</code>,
        and <code>aria-hidden="true"</code>. When the content needs to be
        accessible, these properties are adjusted to make it perceivable to
        users.
      </p>
    ),
  },
  {
    question:
      "How do HTML5 landmark elements enhance website navigation for assistive technologies?",
    answer: (
      <p>
        HTML5 landmark elements, such as <code>&lt;header&gt;</code>,{" "}
        <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,{" "}
        <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code>, play a
        significant role in structuring content semantically. They improve
        navigation and comprehension for screen reader users by clearly defining
        the layout and major sections of the page.
      </p>
    ),
  },
  {
    question:
      "What steps are taken to align the visual order with the DOM order on a webpage?",
    answer: (
      <p>
        Ensuring the visual order and DOM order are in sync involves structuring
        the HTML to reflect the visual layout accurately. If CSS techniques
        alter the visual presentation, adjustments to the DOM order are
        necessary to preserve a logical navigation flow, thereby enhancing the
        accessibility and coherence of the webpage.
      </p>
    ),
  },
];

const Accessibility = () => {
  const [showTopics, setShowTopics] = useState(false);

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
        <p>
          Web accessibility ensures that people with disabilities can perceive,
          understand, navigate, and interact with the web, providing equal
          access to information and functionality. It's essential for creating
          inclusive, user-friendly web experiences. Below are some common
          questions and answers related to web accessibility.
        </p>
        <br></br>

        <TopicsList>
          <ol style={{ margin: 0 }}>
            <li style={{ margin: 0 }}>
              <h4 style={{ margin: 0 }}>Web Accessibility Fundamentals</h4>
              <ul>
                <li>Definition and importance of web accessibility</li>
                <li>
                  Different types of users who benefit from accessible web
                  content
                </li>
                <li>Key practices to ensure website accessibility</li>
              </ul>
            </li>

            <li>
              <h4>Web Content Accessibility Guidelines (WCAG)</h4>
              <ul>
                <li>Overview of WCAG</li>
                <li>Different levels of WCAG compliance</li>
                <li>Implementing WCAG guidelines in web development</li>
              </ul>
            </li>

            <li>
              <h4>Accessible Rich Internet Applications (ARIA)</h4>
              <ul>
                <li>Introduction to ARIA and its role in web accessibility</li>
                <li>ARIA roles, properties, and states</li>
                <li>
                  Using ARIA for dynamic content updates and custom widgets
                </li>
              </ul>
            </li>

            <li>
              <h4>Designing for Specific Accessibility Needs</h4>
              <ul>
                <li>Considerations for visually impaired users</li>
                <li>Accessibility for users with hearing impairments</li>
                <li>
                  Accessibility features for users with motor disabilities
                </li>
                <li>
                  Structuring web content for users with cognitive disabilities
                </li>
                <li>
                  Accessibility considerations for users with speech
                  disabilities, photosensitive epilepsy, and learning
                  disabilities
                </li>
              </ul>
            </li>

            <li>
              <h4>Accessible User Interface Components</h4>
              <ul>
                <li>Implementing accessible forms</li>
                <li>Ensuring color contrast for web accessibility</li>
                <li>Focus management in web applications</li>
                <li>Keyboard accessibility and tab order</li>
                <li>Accessible custom controls and widgets</li>
              </ul>
            </li>

            <li>
              <h4>Responsive Design and Accessibility</h4>
              <ul>
                <li>
                  Approaching responsive design with accessibility in mind
                </li>
                <li>Using skip links for improved navigation</li>
                <li>Managing focus for dynamically added content</li>
                <li>Handling offscreen content accessibly</li>
              </ul>
            </li>

            <li>
              <h4>Testing and Auditing for Web Accessibility</h4>
              <ul>
                <li>Tools and methods for testing website accessibility</li>
                <li>Conducting manual accessibility testing</li>
                <li>Using Chrome DevTools for accessibility audits</li>
                <li>Addressing common accessibility issues</li>
              </ul>
            </li>

            <li>
              <h4>Advanced Accessibility Techniques</h4>
              <ul>
                <li>Aligning visual order with DOM order</li>
                <li>Using HTML5 landmark elements for navigation</li>
                <li>
                  Managing focus traps and keyboard-focusable interactive
                  controls
                </li>
                <li>
                  Communicating the purpose and state of interactive elements
                </li>
              </ul>
            </li>
          </ol>
        </TopicsList>

        <br></br>
        {[...questionsAndAnswers, ...googleLightHouseQuestionsAnswers].map(
          (qa, index) => (
            <QuestionAnswer
              key={index}
              question={qa.question}
              answer={qa.answer}
              index={index}
            />
          )
        )}

        <h2>Chrome Accessibility Questions</h2>
        {chromeQuestionsAndAnswers.map((qa, index) => (
          <QuestionAnswer
            key={index}
            question={qa.question}
            answer={qa.answer}
            index={index}
          />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Accessibility;
