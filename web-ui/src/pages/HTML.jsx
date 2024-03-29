import React from "react";
import Highlight from "react-highlight";
import QuestionsWrapper from "../shared/QuestionsWrapper";
import Chip from "@mui/material/Chip";
import { IconExternalLink } from "@tabler/icons-react";
import { Tag } from "../shared/Tag";

const htmlQuestions = [
  {
    question: "What is the purpose of semantic HTML tags?",
    answer: (
      <p>
        Semantic HTML tags are used to give meaning and structure to the content
        of a webpage. They help search engines, screen readers, and developers
        understand the purpose and context of different parts of the document.
        Examples of semantic tags include <Tag>header</Tag>, <Tag>nav</Tag>,{" "}
        <Tag>main</Tag>, <Tag>article</Tag>, <Tag>section</Tag>,{" "}
        <Tag>aside</Tag>, and <Tag>footer</Tag>.
      </p>
    ),
  },
  {
    question:
      "What is the difference between block-level and inline elements in HTML?",
    answer: (
      <p>
        Block-level elements start on a new line and take up the full width
        available, while inline elements do not start on a new line and only
        take up as much width as necessary. Examples of block-level elements
        include <Tag>div</Tag>, <Tag>p</Tag>, <Tag>h1</Tag>-<Tag>h6</Tag>,{" "}
        <Tag>ul</Tag>, <Tag>ol</Tag>, and <Tag>li</Tag>. Examples of inline
        elements include <Tag>span</Tag>, <Tag>a</Tag>, <Tag>img</Tag>,{" "}
        <Tag>strong</Tag>, and <Tag>em</Tag>.
      </p>
    ),
  },
  {
    question: "What is the purpose of the 'alt' attribute in an 'img' tag?",
    answer: (
      <p>
        The <Tag>alt</Tag> attribute provides alternative text for an image if
        the image cannot be displayed or if the user is using a screen reader.
        It is important for accessibility and should describe the content or
        purpose of the image.
      </p>
    ),
  },
  {
    question:
      "What is the difference between the 'GET' and 'POST' methods in HTML forms?",
    answer: (
      <p>
        The <Tag>GET</Tag> method sends form data as part of the URL, making it
        visible in the browser's address bar and limiting the amount of data
        that can be sent. The <Tag>POST</Tag> method sends form data in the body
        of the HTTP request, making it more secure and allowing for larger
        amounts of data to be sent.
      </p>
    ),
  },
  {
    question: "What is the purpose of the 'meta' tag in HTML?",
    answer: (
      <p>
        The <Tag>meta</Tag> tag is used to provide metadata about an HTML
        document. It can include information such as the document's character
        encoding, viewport settings, keywords, description, and author. This
        information is used by browsers, search engines, and other web services
        to better understand and display the webpage.
      </p>
    ),
  },
  {
    question:
      "What is the purpose of the 'label' tag and the 'for' attribute in HTML forms?",
    answer: (
      <>
        <p>
          The <Tag>label</Tag> tag is used to provide a text label for an input
          element in an HTML form. It enhances usability and accessibility by
          associating the label with its corresponding input field. The{" "}
          <Tag>for</Tag> attribute is used to establish this association.
        </p>
        <p>
          The <Tag>for</Tag> attribute of the <Tag>label</Tag> tag should be
          equal to the <Tag>id</Tag> attribute of the related input element.
          This creates a logical connection between the label and the input
          field.
        </p>
        <Highlight language="html">
          {`<label for="username">Username:</label>
<input type="text" id="username" name="username">`}
        </Highlight>

        <p>
          It's important to note that the <Tag>for</Tag> attribute is not
          required if the <Tag>label</Tag> tag is wrapped around the input
          element itself. In this case, the association is implied by the
          nesting structure.
        </p>
        <Highlight language="html">
          {`<label>
  Username:
  <input type="text" name="username">
</label>`}
        </Highlight>
        <p>
          However, using the <Tag>for</Tag> attribute is still considered a best
          practice for explicitly associating labels with their corresponding
          input fields, especially when the label and input are not adjacent in
          the HTML structure.
        </p>
      </>
    ),
  },
  {
    question: "What does a DOCTYPE do?",
    answer: (
      <p>
        A DOCTYPE is a declaration at the beginning of an HTML document that
        specifies the version of HTML being used. It tells the browser how to
        interpret the document and render it correctly. The DOCTYPE declaration
        is not an HTML tag; it is an instruction to the web browser.
      </p>
    ),
  },
  {
    question: "How do you serve a page with content in multiple languages?",
    answer: (
      <p>
        To serve a page with content in multiple languages, you can use the{" "}
        <Tag>lang</Tag> attribute on the <Tag>html</Tag> tag to specify the
        default language of the document. Then, you can use the <Tag>lang</Tag>{" "}
        attribute on specific elements to indicate content in different
        languages. Additionally, you can use server-side techniques or
        JavaScript to detect the user's preferred language and serve the
        appropriate content.
      </p>
    ),
  },
  {
    question:
      "What kind of things must you be wary of when designing or developing for multilingual sites?",
    answer: (
      <ul>
        <li>
          Use appropriate character encodings to support different languages and
          special characters.
        </li>
        <li>
          Be mindful of text direction (left-to-right or right-to-left) for
          different languages.
        </li>
        <li>
          Consider the length of translated text, as it may affect the layout
          and design of the page.
        </li>
        <li>
          Use language-specific stylesheets or CSS rules to handle different
          typography and formatting conventions.
        </li>
        <li>
          Ensure that dates, times, currencies, and other locale-specific
          elements are properly formatted for each language.
        </li>
      </ul>
    ),
  },
  {
    question: "What are 'data-' attributes good for?",
    answer: (
      <p>
        <Tag>data-</Tag> attributes, also known as data attributes, allow you to
        store custom data within HTML elements. They provide a way to associate
        additional information with elements that can be accessed and
        manipulated using JavaScript. Data attributes are useful for creating
        custom functionality, tracking analytics, or providing context to
        JavaScript code without altering the semantic structure of the HTML.
      </p>
    ),
  },
  {
    question:
      "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
    answer: (
      <ul>
        <li>
          Semantics: HTML5 introduces new semantic elements that provide meaning
          and structure to the content.
        </li>
        <li>
          Connectivity: HTML5 offers APIs for real-time communication, such as
          WebSockets and Server-Sent Events.
        </li>
        <li>
          Offline and Storage: HTML5 provides mechanisms for offline web
          applications and client-side storage, such as Application Cache and
          Web Storage (localStorage and sessionStorage).
        </li>
        <li>
          Multimedia: HTML5 includes native support for audio and video playback
          without the need for plugins.
        </li>
        <li>
          2D/3D Graphics and Effects: HTML5 introduces the canvas element for
          rendering 2D graphics and supports WebGL for 3D graphics.
        </li>
        <li>
          Performance and Integration: HTML5 offers techniques for optimizing
          performance, such as Web Workers and asynchronous script loading.
        </li>
        <li>
          Device Access: HTML5 provides APIs for accessing device features, such
          as geolocation, camera, and microphone.
        </li>
        <li>
          Styling: HTML5 works well with CSS3 for advanced styling and layout
          capabilities.
        </li>
      </ul>
    ),
  },
  {
    question:
      "Describe the difference between a 'cookie', 'sessionStorage', and 'localStorage'.",
    answer: (
      <ul>
        <li>
          <strong>Cookie:</strong> A small piece of data stored by a website on
          the user's browser. Cookies are typically used for session management,
          user preferences, and tracking. They have an expiration date and can
          be accessed by both the server and the client.
        </li>
        <li>
          <strong>sessionStorage:</strong> A web storage object that allows data
          to be stored for the duration of a session. The data is cleared when
          the user closes the browser tab or window. sessionStorage is
          accessible only by the client-side and has a larger storage capacity
          compared to cookies.
        </li>
        <li>
          <strong>localStorage:</strong> Similar to sessionStorage, but the data
          stored in localStorage persists even after the browser is closed and
          reopened. It provides a larger storage capacity than cookies and is
          also accessible only by the client-side.
        </li>
      </ul>
    ),
  },
  {
    question:
      "Describe the difference between '<script>', '<script async>', and '<script defer>'.",
    answer: (
      <ul>
        <li>
          <Tag>&lt;script&gt;</Tag>: The default behavior. The script is
          downloaded and executed immediately, blocking the parsing of the HTML
          document until the script is completed.
        </li>
        <li>
          <Tag>&lt;script async&gt;</Tag>: The script is downloaded
          asynchronously in the background, allowing the HTML parsing to
          continue. The script is executed as soon as it is downloaded, without
          waiting for the HTML parsing to complete. Async scripts are not
          guaranteed to execute in a specific order.
        </li>
        <li>
          <Tag>&lt;script defer&gt;</Tag>: The script is downloaded
          asynchronously in the background, allowing the HTML parsing to
          continue. However, the script is executed only after the HTML document
          has been fully parsed. Deferred scripts are executed in the order they
          appear in the HTML document.
        </li>
      </ul>
    ),
  },
  {
    question:
      "Why is it generally a good idea to position CSS '<link>'s between '<head></head>' and JS '<script>'s just before '</body>'? Do you know any exceptions?",
    answer: (
      <p>
        It is generally recommended to position CSS <Tag>&lt;link&gt;</Tag> tags
        in the <Tag>&lt;head&gt;</Tag> section and JS <Tag>&lt;script&gt;</Tag>{" "}
        tags just before the closing <Tag>&lt;/body&gt;</Tag> tag for the
        following reasons:
        <ul>
          <li>
            Placing CSS in the <Tag>&lt;head&gt;</Tag> allows the styles to be
            loaded and applied early in the page rendering process, avoiding a
            flash of unstyled content (FOUC).
          </li>
          <li>
            Placing JS scripts at the end of the <Tag>&lt;body&gt;</Tag> allows
            the HTML content to be parsed and rendered first, improving the
            perceived page load time and user experience.
          </li>
        </ul>
        However, there are exceptions to this general guideline:
        <ul>
          <li>
            If a script is required for rendering above-the-fold content or
            initializing critical functionality, it can be placed in the{" "}
            <Tag>&lt;head&gt;</Tag> section.
          </li>
          <li>
            If a script is small and does not impact the rendering of the page,
            it can be placed in the <Tag>&lt;head&gt;</Tag> for simplicity.
          </li>
          <li>
            If a stylesheet is large and not critical for above-the-fold
            content, it can be loaded asynchronously or deferred to improve page
            load performance.
          </li>
        </ul>
      </p>
    ),
  },
  {
    question: "What is progressive rendering?",
    answer: (
      <p>
        Progressive rendering is a technique used to improve the perceived
        performance and user experience of a web page by rendering and
        displaying content as soon as it is available, rather than waiting for
        the entire page to load. It allows users to see and interact with parts
        of the page while the rest of the content is still being downloaded and
        rendered. Progressive rendering can be achieved through techniques such
        as:
        <ul>
          <li>Prioritizing and loading critical content first</li>
          <li>Lazy-loading non-critical resources</li>
          <li>Using placeholders or skeleton screens for pending content</li>
          <li>
            Splitting the page into smaller chunks and loading them
            incrementally
          </li>
        </ul>
      </p>
    ),
  },
  {
    question:
      "Why would you use a 'srcset' attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",
    answer: (
      <p>
        The <Tag>srcset</Tag> attribute in an <Tag>&lt;img&gt;</Tag> tag is used
        to specify multiple image sources with different resolutions or sizes.
        It allows the browser to choose the most appropriate image based on the
        device's display density and viewport size. The browser uses the
        following process when evaluating the <Tag>srcset</Tag> attribute:
        <ol>
          <li>
            The browser determines the device's display density (pixel ratio)
            and the size of the image container in CSS pixels.
          </li>
          <li>
            It parses the <Tag>srcset</Tag> attribute and creates a list of
            available image sources along with their width descriptors or pixel
            densities.
          </li>
          <li>
            Based on the device's display density and the image container size,
            the browser selects the most appropriate image source from the list.
          </li>
          <li>
            If a width descriptor is provided, the browser uses it to calculate
            the effective pixel density of each image source.
          </li>
          <li>The browser downloads and displays the selected image.</li>
        </ol>
        Using the <Tag>srcset</Tag> attribute allows the browser to choose an
        optimized image for the user's device, reducing bandwidth usage and
        improving page load performance.
      </p>
    ),
  },
  {
    question: "Describe event bubbling",
    answer: (
      <>
        <p>
          Event bubbling is a mechanism in which an event triggered on a nested
          element propagates up through its ancestor elements in the DOM tree
          until it reaches the root element or an element with an event listener
          that stops the propagation. When an event is triggered on an element,
          the event is first captured and handled by the innermost element and
          then propagated to outer elements.
        </p>
        <p>
          During the bubbling phase, the event is transmitted from the target
          element to its parent elements, then to their parent elements, and so
          on, until it reaches the top of the DOM hierarchy. This allows parent
          elements to respond to events that occur on their child elements.
        </p>
        <p>
          Event bubbling enables event delegation, where a single event listener
          can be attached to a parent element to handle events triggered by its
          child elements. This is useful when you have multiple child elements
          that require the same event handling logic, as it reduces the number
          of event listeners needed and improves performance.
        </p>
        <p>
          To stop event bubbling and prevent the event from being propagated to
          parent elements, you can use the <Tag>stopPropagation()</Tag> method
          on the event object. This prevents the event from being handled by any
          parent elements in the bubbling phase.
        </p>
      </>
    ),
  },

  {
    question: "Explain event delegation",
    answer: (
      <>
        <p>
          Event delegation is a technique in JavaScript where a single event
          listener is attached to a parent element to handle events triggered by
          its child elements, instead of attaching event listeners to each
          individual child element. It relies on the event bubbling mechanism,
          where events triggered on child elements propagate up to their parent
          elements.
        </p>
        <p>
          The main idea behind event delegation is that when an event occurs on
          a child element, it will bubble up to its parent elements. By
          attaching an event listener to a parent element, you can capture and
          handle the event when it reaches the parent, regardless of which child
          element triggered the event.
        </p>
        <p>Event delegation has several benefits:</p>
        <ul>
          <li>
            <strong>Efficiency:</strong> Instead of attaching event listeners to
            each child element, you only need to attach a single event listener
            to the parent element. This reduces the number of event listeners
            needed, improving performance and memory usage.
          </li>
          <li>
            <strong>Dynamic elements:</strong> Event delegation works well with
            dynamically added elements. When new child elements are added to the
            parent, they automatically inherit the event listener attached to
            the parent, without the need to explicitly attach event listeners to
            each new child element.
          </li>
          <li>
            <strong>Simplified code:</strong> Event delegation simplifies your
            code by reducing the need to manage individual event listeners for
            each child element. You can handle events for multiple child
            elements with a single event listener on the parent.
          </li>
        </ul>
        <p>
          To implement event delegation, you attach the event listener to the
          parent element and then use the <Tag>event.target</Tag> property to
          determine which child element triggered the event. You can then
          perform the desired actions based on the target element.
        </p>
        <p>
          Event delegation is particularly useful when dealing with a large
          number of child elements or when the child elements are dynamically
          added or removed from the DOM.
        </p>
      </>
    ),
  },
];

const Resources = () => {
  return (
    <>
      <h4>Resources</h4>

      <div>
        <Chip
          label="HTML Full Course by freeCodeCamp (YouTube)"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=kUMe1FH4CHE",
              "_blank"
            );
          }}
          icon={<IconExternalLink size={"1.2rem"} />}
        />
      </div>
    </>
  );
};

const HTML = () => {
  return (
    <>
      {/* Add HTML topics and concepts here */}
      <h3 style={{ margin: "0px" }}>Basic Structure</h3>
      <Highlight language="html">
        {`<!doctype html>
<html>
    <head>
        <title>Page Title</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Hello, World!</h1>
        <p>This is a paragraph of text.</p>
        <img src="image.jpg" alt="Description of image">
    </body>
</html>`}
      </Highlight>
      <ul>
        <li>
          The basic structure of an HTML document includes the{" "}
          <Tag>doctype</Tag>, <Tag>html</Tag>, <Tag>head</Tag>, and{" "}
          <Tag>body</Tag> tags.
        </li>
        <li>
          The <Tag>head</Tag> section contains meta-information about the
          document, such as its title and links to stylesheets.
        </li>
        <li>
          The <Tag>body</Tag> section contains the content of the document,
          including text, images, and other media.
        </li>
      </ul>
      <Resources />

      <br />
      <QuestionsWrapper storageKey="html" questions={htmlQuestions} />
    </>
  );
};

export default HTML;
