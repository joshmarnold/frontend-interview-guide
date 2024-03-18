import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Accordion from "../shared/Accordion";
import Highlight from "react-highlight";
import { IconExternalLink } from "@tabler/icons-react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const colors = [
  "#d74a49",
  "#1b4552",
  "#6a3d74",
  "rgb(171 137 32)",
  "#1d863a",
  "rgb(94 137 113)",
];

const topics = [
  {
    title: "HTML",
    to: "html",
    color: colors[1],
  },
  {
    title: "CSS",
    to: "css",
    color: colors[1],
  },
  {
    title: "JavaScript",
    to: "javascript",
    color: colors[1],
  },
  {
    title: "DOM API",
    to: "dom-api",
    color: colors[1],
  },
  {
    title: "Web Dev",
    to: "web-dev",
    color: colors[1],
  },
  {
    title: "React",
    to: "react",
    color: colors[1],
  },
  {
    title: "General Programming",
    to: "general-programming",
    color: colors[2],
  },
  {
    title: "Algorithms & Data Structures",
    to: "ds-algos",
    color: colors[0],
  },
  {
    title: "Frontend System Design",
    to: "frontend-system-design",
    color: colors[3],
  },
  {
    title: "Interview Prep",
    to: "interview-prep",
    color: colors[4],
  },
  // bheavrioal
  {
    title: "Behavioral",
    to: "behavioral",
    color: colors[5],
  },
];

const sections = [
  {
    title: "Goal of this Guide",
    description: (
      <>
        <p>
          Time is limited, and there's a lot to learn. Aggregating all the
          resources and information needed to prepare for a frontend interviews
          can be overwhelming. This guide aims to save time and bring it all
          together in one place, providing a comprehensive resource for frontend
          interview prep.
        </p>

        <ol>
          <li>
            Provide knowledge for easy lookup, problem-solving approaches,
            examples and questions to test understanding.
          </li>
          <li>Minimal, essential content to teach new concepts.</li>
          <li>
            Open source. This guide is open to contributions and feedback.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Supplementary Material",
    description: (
      <>
        <p>
          Theres a github repo that contains the code for this site and also
          practice problems. Clone the repo{" "}
          <strong>
            <a
              href="https://github.com/joshmarnold/frontend-interview-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </strong>
        </p>
        <p>Directory Structure</p>
        {/* show directory structure */}
        <Highlight language="bash">
          {`frontend-interview-guide
  ├── web-ui
  ├── practice-problems
  │   ├── algo`}
        </Highlight>

        <ul>
          <li>
            <strong>web-ui</strong>: Is this site.
          </li>
          <li>
            <strong>Algorithms & Data Structures</strong>: This section follows
            the Algorithms & Data Structures section of the guide. Its an area
            where you can practice problems related to the topics in that
            section with custom test cases.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How to Use This Guide",
    description: (
      <>
        <h4 style={{ margin: 0 }}>Code</h4>
        <p>
          If you're interested in checking out the code examples. Clone the{" "}
          <strong>
            <a
              href="https://github.com/joshmarnold/frontend-interview-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>
          </strong>{" "}
          and start by reading the README file.
        </p>
        <h4>Topics</h4>
        <ol>
          <li>
            When approaching the question and answer sections, imagine that an
            interviewer is asking you these questions directly, and you must
            provide a comprehensive and thoughtful response. You should be able
            to articulate your thoughts and ideas clearly and concisely.
          </li>
          <li>
            It's crucial to treat each section with equal importance, as if you
            know the interviewer is placing significant emphasis on that
            particular topic for the hiring decision. Basically, if its in this
            guide, you should know it.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Contribute",
    description: (
      <>
        <p>
          This material is open source and welcomes feedback and contributions.
          Developers are encouraged to submit pull requests, raise issues, or
          start discussions on the repo to help improve and expand the content.
        </p>
      </>
    ),
  },
];

const Home = () => {
  const navigator = useNavigate();

  return (
    <div className="home-container">
      <br></br>
      <Accordion items={sections} openedByDefault={0} />
      <h3 style={{ fontSize: "16px", marginBottom: "16px" }}>
        Recommended Videos When Starting
      </h3>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Amazon Front End Interview Prep by TechRally (YouTube)"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=rMWDtxJQIbQ",
              "_blank"
            );
          }}
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="Most Tech Interview Prep is GARBAGE by A Life Engineered (YouTube)"
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=0Z9RW_hhUT4",
              "_blank"
            );
          }}
          icon={<IconExternalLink size={"1.2rem"} />}
        />
      </Stack>

      <h3 style={{ fontSize: "16px" }}>Topics</h3>
      <div className="grid-items-container">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="grid-item"
            aria-label={`Learn more about ${topic.title}`}
            onClick={() => navigator(`/${topic.to}`)}
            style={{ backgroundColor: topic.color }}
          >
            {topic.title}
          </button>
        ))}
      </div>
      <h3 style={{ fontSize: "16px" }}>Pracice UI problems</h3>
      <p>
        <span>
          Visit{" "}
          <Chip
            label="greatfrontend.com"
            onClick={() => {
              window.open(
                "https://www.greatfrontend.com/prepare/coding",
                "_blank"
              );
            }}
            icon={<IconExternalLink size={"1.2rem"} />}
          />{" "}
          to practice UI coding problems.
        </span>
      </p>
    </div>
  );
};

export default Home;
