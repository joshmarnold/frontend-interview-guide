import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../shared/Footer";
import Accordion from "../shared/Accordion";

const colors = ["#d74a49", "#1b4552", "#6a3d74", "rgb(171 137 32)"];

const topics = [
  {
    title: "Algorithms & Data Structures",
    to: "ds-algos",
    color: colors[0],
  },
  {
    title: "CSS",
    to: "css-questions",
    color: colors[1],
  },
  {
    title: "JavaScript",
    to: "javascript-questions",
    color: colors[1],
  },
  {
    title: "React",
    to: "react-questions",
    color: colors[1],
  },
  {
    title: "Web Dev",
    to: "web-dev",
    color: colors[1],
  },
  {
    title: "DOM API",
    to: "dom-api",
    color: colors[1],
  },
  {
    title: "General Programming",
    to: "general-programming",
    color: colors[2],
  },
  {
    title: "Frontend System Design",
    to: "frontend-system-design",
    color: colors[3],
  },
];

const sections = [
  {
    title: "Goal of this Guide",
    description: (
      <>
        <p>
          Time is limited, and there's a lot to learn. The goal of this guide is
          to provide a focused and efficient approach to help you prepare for
          frontend interviews.
        </p>
        <ol>
          <li>
            All content is located on this site and in the github repo.
            Shouldn't need 3 sites to discover the material. The only external
            linking is to useful videos and documentation like MDN.
          </li>
          <li>
            Layout is simple and easy to use. No confusing/complex layouts.
          </li>
          <li>
            Only essential content for interview prep, no fluff. Each example is
            carefully selected to introduce new ideas, techniques, or
            problem-solving approaches, ensuring that every question contributes
            to your growth and expands your knowledge meaningfully.
          </li>
          <li>No "locked" content. Everything is free to access.</li>
          <li>
            Offer knowledge, problem-solving approaches, examples, and questions
            to assess your understanding.
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
          Clone the repo on github to access the coding content. The repo
          contains two main sections: UI and Algorithms & Data Structures.
        </p>
        <ul>
          <li>
            <strong>UI Interview Prep</strong>: This section contains practical
            UI-related questions like build an accordion or build a calculator.
            The expectation is that you can build these components from scratch
            first using vanilla JS and then using a framework like React.
          </li>
          <li>
            <strong>Algorithms & Data Structures</strong>: This section follows
            the Algorithms & Data Structures section of the guide. Each section
            is contained in a folder with a bunch of files which are test files.
            You can view the implementation along with comments that can explain
            the problem, approach to solve, runtime complexity, and space
            complexity. and reimplement the questions. There's a test runner
            where you can write your own tests to verify the correctness of your
            implementation. View the ouput in the browser console.
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
        <ol>
          <li>
            Begin by cloning the repository to run and reimplement the
            questions. Take some time to understand its structure, which
            comprises two main sections: UI and Algorithms & Data Structures.
          </li>
          <li>
            For each section, refer to its respective README file for guidance
            on the next steps in interacting with the content.
          </li>
          <li>
            There's no need to run a React app or anything complex. Simply open
            the index.html files in the browser in each section to run the code.
            You can use a VSCode extension called "Live Server" to run the code
            and automatically reload when changes are made.
          </li>
          <li>
            Running the Live Server from the root of the project will display
            the various folders and files available for execution.
          </li>
        </ol>
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
      <h2 style={{ textAlign: "center" }}>
        <strong>Frontend Software Engineer Interview Guide</strong>
      </h2>
      <p style={{ marginTop: "25px" }}>
        This resource is designed to be a comprehensive guide for frontend
        interview preparation, covering a wide range of topics specifically
        tailored for frontend developers.
      </p>

      <br></br>

      <Accordion items={sections} />

      <br></br>

      <div className="grid-items-container">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="grid-item"
            aria-label={`Learn more about ${topic.title}`}
            onClick={() => navigator(`/topic/${topic.to}`)}
            style={{ backgroundColor: topic.color }}
          >
            {topic.title}
          </button>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
