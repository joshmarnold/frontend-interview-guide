import { Link } from "react-router-dom";
import React from "react";

import { IconBrandTwitterFilled, IconExternalLink } from "@tabler/icons-react";

const SystemDesignDocs = () => {
  return (
    <div>
      <p>
        System design is a critical skill for software engineers, particularly
        in the context of frontend development. It involves the process of
        defining the architecture, components, interfaces, and data models with
        consideration for scalability, performance, and maintainability, and the
        ability to make informed decisions about trade-offs and best practices.
      </p>
      <p>
        When approaching system design questions, it's essential to have a
        structured framework to ensure that all key aspects are covered. I
        personally have found the R.A.D.I.O framework to be an effective
        approach{" "}
        <a
          href="https://www.youtube.com/watch?v=NEzu4FD25KM"
          target="_blank"
          rel="noopener noreferrer"
        >
          [Video]
        </a>
      </p>

      <p>
        <span>
          Visit{" "}
          <a
            href="https://www.greatfrontend.com/system-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            greatfrontend.com
            <IconExternalLink size="1rem" />
          </a>{" "}
          for more information on RADIO and practice problems.
        </span>
      </p>
    </div>
  );
};

export default SystemDesignDocs;
