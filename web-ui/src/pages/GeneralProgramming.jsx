import React from "react";

const GeneralProgramming = () => {
  return (
    <>
      <h2>Object-Oriented Programming (OOP)</h2>
      <p>
        OOP is a style of programming that is centered around objects instead of
        functions.
      </p>

      <h3>What are the 4 Pillars of OOP?</h3>
      <ol>
        <li>
          <strong>Encapsulation</strong>
          <ul>
            <li>
              What: Group related variables and methods that operate on them
              into an object.
            </li>
            <li>Why: Reduce complexity and increase reusability</li>
            <li>How does JS achieve this? Through closures</li>
          </ul>
        </li>
        <li>
          <strong>Abstraction</strong>
          <ul>
            <li>
              What: Hide away certain methods and only expose what you need to.
            </li>
            <li>Why: Reduce the impact of change.</li>
          </ul>
        </li>
        <li>
          <strong>Inheritance</strong>
          <ul>
            <li>Eliminate redundant code</li>
          </ul>
        </li>
        <li>
          <strong>Polymorphism</strong>
          <ul>
            <li>
              What: Poly: Many. Morphism: forms. Objects can be used in many
              ways. Can take on many forms.
            </li>
            <li>Why: Don't need exact forms for every scenario.</li>
          </ul>
        </li>
      </ol>

      <h3>What is composition and inheritance and the difference?</h3>
      <ul>
        <li>
          Inheritance: You're describing what objects are and how they relate to
          each other. Objects can inherit props and methods from other objects.
        </li>
        <li>
          Composition: You're describing what an object can do. You can create a
          bunch of functions that provide functionality and then you can create
          an object and attach whatever functionality (function) that you want.
        </li>
      </ul>

      {/* Additional "need-to-know" items */}
      <div className="divider"></div>
      <h2>Software Development Methodologies</h2>
      <ul>
        <li>Waterfall Model</li>
        <li>Agile Development</li>
        <li>Scrum</li>
        <li>Kanban</li>
        <li>Test-Driven Development (TDD)</li>
      </ul>
    </>
  );
};

export default GeneralProgramming;
