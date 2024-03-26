import React from "react";

//  <strong>Question:</strong> Design a system for a social media platform
//     like Twitter.{" "}

const Requirements = () => {
  return (
    <div>
      <p>Do not go into depth here! Just gather the requirements.</p>

      <h2>Functional Requirements</h2>
      <p>
        Functional requirements describe the specific behaviors and actions that
        the system must support. This is where you narrow down the scope of the
        system and define what it should do.
      </p>
      <ul>
        <li>What feature of the application are we building?</li>
        <li>What features does the feature need to support?</li>
        <li>What actions can users take on the feature?</li>
        <li>
          Are there any specific workflows or user stories that need to be
          supported?
        </li>
      </ul>

      <h2>Non-Functional Requirements</h2>
      <p>
        Non-functional requirements describe the quality attributes of the
        system and the constraints that it must adhere to. This is where you
        define how the system should behave and perform.
      </p>
      <ol>
        <li>
          <strong>Responsiveness:</strong>
          <ul>
            <li>What are the target devices and screen sizes?</li>
            <li>
              Should the design follow a mobile-first or desktop-first approach?
            </li>
          </ul>
        </li>
        <li>
          <strong>Accessibility (a11y):</strong>
          <ul>
            <li>What level of WCAG compliance is required (A, AA, or AAA)?</li>
            <li>
              Are there specific assistive technologies or browsers that need to
              be supported?
            </li>
          </ul>
        </li>
        <li>
          <strong>Internationalization (i18n):</strong>
          <ul>
            <li>
              Which locales or languages does the application need to support?
            </li>
            <li>
              How should the application handle right-to-left (RTL) languages?
            </li>
          </ul>
        </li>
        <li>
          <strong>Performance:</strong>
          <ul>
            <li>
              Are there specific benchmarks or performance goals, such as load
              time or time to interactive?
            </li>
            <li>
              How should the application optimize resource loading (e.g., image
              optimization, code splitting)?
            </li>
          </ul>
        </li>
        <li>
          <strong>Offline Support:</strong>
          <ul>
            <li>What features need to be available offline?</li>
            <li>
              How should the application handle data caching and
              synchronization?
            </li>
          </ul>
        </li>
        <li>
          <strong>Security:</strong>
          <ul>
            <li>What security measures are required to protect user data?</li>
            <li>
              How should the application mitigate common web vulnerabilities
              (e.g., XSS, CSRF)?
            </li>
          </ul>
        </li>
        <li>
          <strong>Testing:</strong>
          <ul>
            <li>
              What types of testing (unit, integration, end-to-end) are
              expected?
            </li>
          </ul>
        </li>
        <li>
          <strong>Maintainability:</strong>
          <ul>
            <li>What coding standards or best practices should be followed?</li>
            <li>
              How is the codebase structured to support long-term
              maintainability and readability?
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Requirements;
