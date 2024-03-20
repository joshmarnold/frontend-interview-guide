// ProjectMethodologiesAndFrameworks.js
import React from "react";
import { Tag } from "../../shared/Tag";

const ProjectMethodologiesAndFrameworks = () => {
  return (
    <div>
      <p>
        There are various project management methodologies used in software
        development, each with its own principles, practices, and frameworks.
        While there are many methodologies available, Agile and Waterfall are by
        far the most popular and widely adopted approaches. Among the Agile
        methodologies, Scrum is the most commonly encountered framework,
        especially in the context of front-end development.
      </p>
      <h3>Agile Methodologies</h3>
      <p>
        Agile methodologies are iterative and incremental approaches to project
        management and software development. They emphasize flexibility,
        collaboration, and rapid delivery of working software. Agile
        methodologies prioritize customer satisfaction, embrace change, and
        promote continuous improvement.
      </p>
      <h4>Scrum</h4>
      <p>
        Scrum is an agile framework that focuses on delivering working software
        in short iterations called sprints. It involves a cross-functional team,
        daily stand-up meetings, sprint planning and sprint retrospectives.
        Scrum emphasizes transparency, inspection, and adaptation to deliver
        value incrementally.
      </p>
      <h4>Kanban</h4>
      <p>
        Kanban is an agile methodology that visualizes work using a board with
        columns representing different stages of the workflow. It focuses on
        limiting work in progress, managing flow, and continuously improving the
        process. Kanban helps identify bottlenecks, optimize throughput, and
        enhance team collaboration.
      </p>

      <h4>Differences between Scrum and Kanban</h4>
      <ul>
        <li>
          <strong>Iterations:</strong> Scrum works in fixed-length iterations
          called sprints, typically lasting 2-4 weeks. Kanban, on the other
          hand, focuses on continuous flow and does not have fixed iterations.
        </li>
        <li>
          <strong>Roles:</strong> Scrum defines specific roles, such as Product
          Owner, Scrum Master, and Development Team. Kanban does not prescribe
          specific roles and allows teams to adapt to their existing roles and
          responsibilities.
        </li>
        <li>
          <strong>Meetings:</strong> Scrum has predefined meetings, including
          sprint planning, daily stand-ups, sprint reviews, and retrospectives.
          Kanban does not have mandatory meetings but encourages regular team
          coordination and collaboration.
        </li>
        <li>
          <strong>Work in Progress (WIP):</strong> Kanban emphasizes limiting
          work in progress to optimize flow and identify bottlenecks. Scrum does
          not explicitly limit WIP but focuses on completing a set of work
          within each sprint.
        </li>
        <li>
          <strong>Change Management:</strong> Scrum accommodates changes to the
          product backlog between sprints but aims to minimize changes within a
          sprint. Kanban allows for more flexibility in accommodating changes as
          long as the WIP limits are respected.
        </li>
      </ul>

      <h3>Waterfall Methodology</h3>
      <p>
        Waterfall is a linear and sequential approach to project management. It
        follows a strict sequence of phases, where each phase must be completed
        before moving on to the next. Waterfall emphasizes detailed planning,
        documentation, and strict control over the project scope. It is suitable
        for projects with well-defined requirements and minimal changes.
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
    </div>
  );
};

export default ProjectMethodologiesAndFrameworks;
