import Highlight from "react-highlight";
import { Tag } from "../../shared/Tag";

const Principles = () => {
  return (
    <>
      <p>
        The principles of web development encompass a wide range of concepts and
        best practices. This is a comprehensive list of principles that are
        typically encountered.
      </p>
      <h2>CSS Principles</h2>
      <div>
        <h3>BEM (Block Element Modifier)</h3>
        <p>
          BEM is a methodology and naming convention that helps in creating
          reusable components and code sharing in front-end development. It aims
          to make CSS code more maintainable and easier to understand by
          structuring CSS classes into independent blocks that can be easily
          mixed and matched.
        </p>
        <pre>
          <Highlight language="css">
            {`.block {}
.block__element {}
.block--modifier {}`}
          </Highlight>
        </pre>
      </div>
      <div>
        <h3>SMACSS (Scalable and Modular Architecture for CSS)</h3>
        <p>
          SMACSS is a style guide for organizing CSS rules to improve code
          scalability and maintainability. It categorizes CSS rules into five
          types: Base, Layout, Module, State, and Theme, encouraging a modular
          approach to stylesheet organization.
        </p>
      </div>
      <h2>JavaScript Principles</h2>
      <div>
        <h3>SOLID Principles</h3>
        <p>
          <strong>Single-responsibility Principle (SRP):</strong> The
          Single-responsibility Principle dictates that a class or module should
          have one, and only one, reason to change. This means that each class
          or module should only have one job or responsibility. In the context
          of React, SRP encourages the creation of reusable components focused
          on a single functionality. This approach enhances code readability and
          maintainability.
        </p>

        <p>
          <strong>Open-closed Principle (OCP):</strong> The Open-closed
          Principle states that software entities (classes, modules, functions,
          etc.) should be open for extension but closed for modification. This
          allows for adding new functionality without changing existing code,
          reducing the risk of bugs. In React, applying OCP can mean designing
          components that can be customized via props or higher-order
          components, allowing for flexible reuse without modifying the original
          component.
        </p>

        <p>
          <strong>Liskov Substitution Principle (LSP):</strong> The Liskov
          Substitution Principle asserts that objects of a superclass should be
          replaceable with objects of its subclasses without affecting the
          correctness of the program. For React development, this principle
          ensures that components are interchangeable under similar contexts
          without breaking the application, promoting a more reliable and robust
          component hierarchy.
        </p>

        <p>
          <strong>Interface Segregation Principle (ISP):</strong> The Interface
          Segregation Principle encourages that no client should be forced to
          depend on methods it does not use. While JavaScript and React don’t
          use interfaces in the same way as typed languages, the spirit of ISP
          can be observed by ensuring components don’t inherit or require props
          they don’t need, leading to more decoupled and easier-to-manage code.
        </p>

        <p>
          <strong>Dependency Inversion Principle (DIP):</strong> The Dependency
          Inversion Principle involves two key points: High-level modules should
          not depend on low-level modules; both should depend on abstractions.
          Abstractions should not depend on details; details should depend on
          abstractions. In React, this translates to using context or dependency
          injection to manage dependencies, making components more decoupled and
          easier to test.
        </p>
      </div>

      <h3>YAGNI (You Aren't Gonna Need It)</h3>
      <p>
        YAGNI is a super important principle of programming that states a
        programmer should not add functionality until deemed necessary. It helps
        in avoiding feature creep and keeps the codebase simple and efficient.
      </p>

      <h3>TDD (Test-Driven Development)</h3>
      <p>
        TDD is a software development process that relies on the repetition of a
        very short development cycle: requirements are turned into very specific
        test cases, then the software is improved to pass the new tests, only.
      </p>

      <h3>BDD (Behavior-Driven Development)</h3>
      <p>
        Behavior-Driven Development (BDD) is an extension of Test-Driven
        Development (TDD) that emphasizes collaboration between developers, QA,
        and non-technical stakeholders (such as product owners) in a software
        project. BDD focuses on creating simple scenarios that describe how an
        application should behave from the perspective of an end user. These
        scenarios are written in a natural, domain-specific language that can be
        understood by all parties involved in the development process.
      </p>
      <p>
        The main goal of BDD is to improve communication among team members and
        stakeholders to ensure that the software being developed meets the
        business requirements and provides value to the user. This approach
        helps in identifying any misunderstanding or ambiguities in requirements
        before the development starts, which can significantly reduce the cost
        of changes and errors in later stages of the development lifecycle.
      </p>

      <p>
        BDD's adoption has been increasing, especially in the product
        development lifecycle (PDLC) planning stage, where it proves invaluable
        for creating user stories that are directly translated into code. This
        is facilitated by popular libraries such as <Tag>Gherkin</Tag> and{" "}
        <Tag>Cucumber</Tag>, which enable the definition of application behavior
        in plain language that can be easily converted into automated tests.
      </p>
    </>
  );
};

export default Principles;
