import { Link } from "react-router-dom";
import React from "react";

import { PageHeader } from "../../shared/PageHeader";
import Header from "../../shared/Header";

const SystemDesignDocs = () => {
  return (
    <div>
      <p>
        System design is a critical skill for software engineers, particularly
        in the context of frontend development. It involves the process of
        defining the architecture, components, interfaces, and data models for a
        system to satisfy specific requirements.
      </p>
      <p>
        Effective system design requires a deep understanding of the problem
        domain, consideration of scalability, performance, and maintainability,
        and the ability to make informed decisions about trade-offs and best
        practices.
      </p>
      <p>
        When approaching system design questions, it's essential to have a
        structured framework to ensure that all key aspects are covered. The
        R.A.D.I.O. framework provides a comprehensive approach to tackle
        frontend system design. Credit to Shivam Bhalla for developing the
        framework{" "}
        <a
          href="https://www.youtube.com/watch?v=NEzu4FD25KM"
          target="_blank"
          rel="noopener noreferrer"
        >
          [Video]
        </a>
      </p>

      <br></br>
      <h3>
        <Link to="requirements">
          R - Requirements: Laying the Foundation (10%)
        </Link>
      </h3>
      <ul>
        <li>Define functional and non-functional requirements</li>
      </ul>

      <h3>
        <Link to="architecture">
          A - Architecture and High-Level Design (10%)
        </Link>
      </h3>
      <ul>
        <li>Explore the key components of a frontend architecture</li>
      </ul>

      <h3>
        <Link to="data-model">
          D - Data Model: Managing Client-Only Data (20%)
        </Link>
      </h3>
      <ul>
        <li>Define the data model</li>
      </ul>

      <h3>
        <Link to="interface-definition">
          I - Interface Definition and API Design: Making Informed Choices (20%)
        </Link>
      </h3>
      <ul>
        <li>
          Understand the trade-offs and choose the right API design for your
          project
        </li>
      </ul>

      <h3>
        <Link to="optimizations">
          O - Optimizations and Deep Dive in Frontend System Design (40%)
        </Link>
      </h3>
      <ul>
        <li>
          Optimize for performance, network efficiency, and user experience
        </li>
      </ul>
    </div>
  );
};

export default SystemDesignDocs;
