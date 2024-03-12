// ProjectMethodologiesAndFrameworks.js
import React from "react";

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
    </div>
  );
};

export default ProjectMethodologiesAndFrameworks;
