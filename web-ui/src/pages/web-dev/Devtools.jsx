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
    question:
      "What is Webpack, and how does it differ from task runners like Gulp or Grunt?",
    answer: (
      <p>
        Webpack is a module bundler that processes modules with dependencies to
        generate static assets. Unlike task runners like Gulp or Grunt, Webpack
        is specifically designed for bundling assets, including JavaScript
        files, CSS stylesheets, and images, optimizing them for use in web
        applications.
      </p>
    ),
  },
  {
    question:
      "Can you explain the concept of Source Maps and how they are useful in a development environment?",
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
      "In the context of DevTools, what is the importance of the Console panel, and how is it typically used by developers?",
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

export default DevTools;
