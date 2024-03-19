import QuestionsWrapper from "../../shared/QuestionsWrapper";

const generalQuestionsAndAnswers = [
  {
    question:
      "What development tools are part of your regular workflow, and how do they contribute to the development process?",
    answer: (
      <ul>
        <li>
          <strong>Code Editors:</strong> Tools like Visual Studio Code or
          Sublime Text for writing and editing code with features like
          IntelliSense and plugin support to streamline development.
        </li>
        <li>
          <strong>Version Control:</strong> Git for tracking changes, managing
          branches, and collaborating with other developers through platforms
          like GitHub or GitLab.
        </li>
        <li>
          <strong>Module Bundlers and Task Runners:</strong> Webpack for
          bundling assets and transpiling code, and tools like Gulp or Grunt for
          automating repetitive tasks such as minification and compilation.
        </li>
        <li>
          <strong>Linters and Formatters:</strong> ESLint for enforcing coding
          standards and identifying issues, and Prettier for automatically
          formatting code for consistency.
        </li>
        <li>
          <strong>Testing Frameworks:</strong> Jest or Mocha for writing unit
          and integration tests to ensure the reliability of the code.
        </li>
        <li>
          <strong>DevOps Tools:</strong> Docker for containerization and
          Kubernetes for orchestration to manage the application in different
          environments.
        </li>
        <li>
          <strong>Browser DevTools:</strong> For debugging, performance tuning,
          and responsive design testing directly in the browser.
        </li>
        <li>
          <strong>API Development Tools:</strong> Postman or Insomnia for
          designing, testing, and documenting APIs.
        </li>
        <li>
          <strong>Frameworks and Libraries:</strong> Depending on the project,
          frameworks like React for building user interfaces, along with state
          management libraries like Redux.
        </li>
      </ul>
    ),
  },
  {
    question:
      "What role does ESLint play in improving code quality, and how can it be integrated into a development workflow?",
    answer: (
      <p>
        ESLint enhances code quality by enforcing consistent coding standards
        and detecting potential errors and bugs through static code analysis. It
        can be seamlessly integrated into a development workflow by setting up
        pre-commit hooks to run ESLint checks before each commit or
        incorporating it into continuous integration (CI) pipelines to ensure
        code quality across the project.
      </p>
    ),
  },
  {
    question: "What is Webpack?",
    answer: (
      <p>
        Webpack is a module bundler that processes modules with dependencies to
        generate static assets. It is widely used in modern web development to
        bundle JavaScript, CSS, images, and other assets for efficient
        distribution and deployment. Webpack also supports code splitting,
        enabling developers to load only the necessary code for specific
        features, thereby improving the performance of web applications.
      </p>
    ),
  },
  // question about babel
  {
    question: "How does Babel contribute to the development process?",
    answer: (
      <p>
        Babel is a JavaScript compiler that transforms modern JavaScript code
        into backward-compatible versions to ensure cross-browser compatibility
        and support for older environments. It is commonly used to transpile
        ECMAScript 6 (ES6) and later syntax into ES5 code, allowing developers
        to leverage the latest language features while maintaining compatibility
        with older browsers and environments.
      </p>
    ),
  },
  {
    question: "What tools do you use to ensure consistent clean code?",
    answer: (
      <p>
        To ensure consistent clean code, I rely on tools like ESLint for
        enforcing coding standards and identifying issues, and Prettier for
        automatically formatting code for consistency. These tools help maintain
        a clean and readable codebase, reduce the likelihood of errors, and
        improve the overall maintainability of the code.
      </p>
    ),
  },
  {
    question:
      "Can you explain the concept of Source Maps and what environment they're useful in?",
    answer: (
      <p>
        Source Maps link compiled code back to its original source files,
        allowing developers to debug minified or transpiled code as if they were
        working with the original source code. This is invaluable in a
        development environment as it facilitates easier debugging and issue
        resolution, leading to faster development cycles.
      </p>
    ),
  },
  {
    question:
      "What is the importance of the Console panel, and how is it typically used by developers?",
    answer: (
      <p>
        The Console panel in DevTools serves as a critical tool for logging
        diagnostic information, executing JavaScript commands within the page's
        context, and interacting with the Document Object Model (DOM).
        Developers often use it for debugging purposes, monitoring events, and
        testing code snippets in real-time to identify and resolve issues
        efficiently.
      </p>
    ),
  },
  {
    question:
      "Describe how the Network Panel in DevTools can be used to optimize resource loading.",
    answer: (
      <p>
        The Network Panel in DevTools provides comprehensive insights into each
        network operation performed by the web page, including loading times,
        resource sizes, and HTTP headers. Developers can utilize this
        information to identify bottlenecks, pinpoint slow-loading resources,
        optimize loading sequences, and adjust code splitting strategies to
        enhance the overall performance and speed of resource loading.
      </p>
    ),
  },
];

const DevTools = () => {
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
        <QuestionsWrapper
          storageKey="devtools"
          questions={generalQuestionsAndAnswers}
        />
      </div>
    </>
  );
};

export default DevTools;
