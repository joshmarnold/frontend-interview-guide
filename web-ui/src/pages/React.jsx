import { useState } from "react";
import Header from "../shared/Header";
import { PageHeader } from "../shared/PageHeader";
import QuestionAnswer from "../shared/QuestionAnswer";

const questionsAndAnswers = [
  {
    question: "What is React and why would you use it?",
    answer: (
      <>
        <p>
          React is a JavaScript library for building user interfaces,
          particularly single-page applications.
        </p>
        <ul>
          <li>It offers reusable components,</li>
          <li>a virtual DOM,</li>
          <li>and a unidirectional data flow.</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "Explain the difference between class components and functional components.",
    answer: (
      <>
        <p>
          Class components are ES6 classes that extend{" "}
          <code>React.Component</code> and can have lifecycle methods and state.
        </p>
        <p>
          Functional components are simpler functions that return JSX and can
          use hooks to manage state and side effects.
        </p>
      </>
    ),
  },
  {
    question: "What are React hooks? Name some commonly used hooks.",
    answer: (
      <>
        <p>
          Hooks allow functional components to use state and lifecycle methods.
          Common hooks include:
        </p>
        <ul>
          <li>
            <code>useState</code>,
          </li>
          <li>
            <code>useEffect</code>,
          </li>
          <li>
            <code>useContext</code>, and
          </li>
          <li>
            <code>useReducer</code>.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What's the difference between `useCallback` and `useMemo` in React?",
    answer: (
      <>
        <p>
          <strong>
            <code>useCallback</code>:
          </strong>{" "}
          returns a memoized callback function, ensuring that the function
          instance remains the same across renders unless its dependencies
          change. This is useful for optimizing performance in components that
          rely on reference equality to prevent unnecessary renders.
        </p>
        <p>
          <strong>
            <code>useMemo</code>:
          </strong>{" "}
          returns a memoized value, recalculating the value only when one of its
          dependencies changes. It's used to optimize performance by avoiding
          expensive calculations on every render.
        </p>
      </>
    ),
  },
  {
    question: "How does React handle state?",
    answer: (
      <>
        <p>
          State is an object managed within a component, representing data that
          may change over time. It can be initialized in class components via
          the <code>constructor</code> or with <code>useState</code> in
          functional components.
        </p>
      </>
    ),
  },
  {
    question:
      "Explain the significance of the virtual DOM and how it boosts performance.",
    answer: (
      <>
        <p>
          The virtual DOM is an in-memory representation of the real DOM. On
          state or data changes, React creates a virtual DOM to compare with the
          previous one and updates the real DOM with minimal, efficient changes,
          optimizing rendering.
        </p>
      </>
    ),
  },
  {
    question: "What is JSX and why is it used in React?",
    answer: (
      <>
        <p>
          JSX (JavaScript XML) is a syntax extension for JavaScript. It allows
          writing HTML-like code in JavaScript, making the structure of UI
          components more readable.
        </p>
      </>
    ),
  },
  {
    question: "What is Redux and how is it related to React?",
    answer: (
      <>
        <p>
          Redux is a predictable state container for JavaScript applications. It
          helps manage global state in larger React apps, using actions,
          reducers, and a store.
        </p>
      </>
    ),
  },
  {
    question: "What are React props? How are they different from state?",
    answer: (
      <>
        <p>
          Props (short for "properties") are read-only inputs passed from parent
          to child components. Unlike mutable state, props are immutable.
        </p>
      </>
    ),
  },
  {
    question: "How can you achieve component reusability in React?",
    answer: (
      <>
        <p>
          By creating modular and generic components, using props to pass data,
          and employing higher-order components or custom hooks.
        </p>
      </>
    ),
  },
  {
    question: "Explain the concept of 'Lifting State Up' in React.",
    answer: (
      <>
        <p>
          It refers to the practice of moving shared state to a common ancestor
          component, so that multiple components can access or modify it.
        </p>
      </>
    ),
  },
  {
    question: "What is React's `memo()` function, and when would you use it?",
    answer: (
      <>
        <p>
          <code>React.memo()</code> is a higher order component that memoizes
          the rendered output of the passed component preventing unnecessary
          renders if the props haven't changed.
        </p>
      </>
    ),
  },
  {
    question: "What are React fragments and how can they benefit performance?",
    answer: (
      <>
        <p>
          Fragments allow you to group a list of child elements without adding
          an extra node to the DOM, which can reduce the overall number of DOM
          elements and improve performance.
        </p>
      </>
    ),
  },
  {
    question: "Explain lazy loading in React and its advantages.",
    answer: (
      <>
        <p>
          React's <code>lazy()</code> function allows you to render a dynamic
          import as a regular component, enabling code-splitting which can
          significantly improve load times by only loading components as they're
          needed.
        </p>
      </>
    ),
  },
  {
    question:
      "What is virtualization and how can it help with performance in large lists or data sets in React?",
    answer: (
      <>
        <p>
          Virtualization involves rendering only a visible subset of your data
          (like in a long list), thereby improving performance by not wasting
          resources on off-screen elements. Libraries like{" "}
          <code>react-virtualized</code> or <code>react-window</code> can help
          with this.
        </p>
      </>
    ),
  },
  {
    question:
      "How does the `useCallback` hook contribute to performance optimizations in React?",
    answer: (
      <>
        <p>
          <code>useCallback</code> returns a memoized version of the callback
          function, ensuring that it doesn't get recreated every render unless
          one of its dependencies changes.
        </p>
        <p>
          This is especially useful when passing callbacks to optimized child
          components that rely on reference equality to prevent unnecessary
          renders.
        </p>
      </>
    ),
  },
  {
    question:
      "What role does `key` prop play in React lists and why is it important for performance?",
    answer: (
      <>
        <p>
          The <code>key</code> prop helps React identify which items have
          changed, are added, or removed, enabling efficient and accurate
          updates to the rendered list.
        </p>
      </>
    ),
  },
  {
    question:
      "What is code splitting in React and how can it enhance web app performance?",
    answer: (
      <>
        <p>
          Code splitting is a technique used to split the JavaScript bundle into
          smaller chunks, which can be loaded on demand. It enhances web app
          performance by reducing the initial bundle size and loading only the
          necessary code for each page or feature.
        </p>
      </>
    ),
  },
];

const React = () => {
  const [showTopics, setShowTopics] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {questionsAndAnswers.map((qa, index) => (
          <QuestionAnswer
            key={index}
            question={qa.question}
            answer={qa.answer}
          />
        ))}
      </div>
    </>
  );
};

export default React;
