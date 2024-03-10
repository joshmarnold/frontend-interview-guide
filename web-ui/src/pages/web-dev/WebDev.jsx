import { Link } from "react-router-dom";

const WebDev = () => {
  return (
    <>
      <p>
        This section is dedicated to web development. It covers a wide range of
        topics.
      </p>

      <ol>
        <li>
          <Link to="a11y">Accessibility</Link>
        </li>
        <li>
          <Link to="i18n">Internationalization</Link>
        </li>
        <li>
          <Link to="caching">Caching</Link>
        </li>
        <li>
          <Link to="database">Database</Link>
        </li>
        <li>
          <Link to="networking">Networking</Link>
        </li>
        <li>
          <Link to="performance-and-metrics">Performance & Metrics</Link>
        </li>
        <li>
          <Link to="security">Security</Link>
        </li>
        <li>
          <Link to="devtools">Developer Tools</Link>
        </li>
        <li>
          <Link to="api">API</Link>
        </li>
      </ol>
    </>
  );
};

export default WebDev;
