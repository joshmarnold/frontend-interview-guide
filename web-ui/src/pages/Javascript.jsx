import { useState } from "react";
import QuestionAnswer from "../shared/QuestionAnswer";
import TopicsList from "../shared/TopicsList";
import { IconExternalLink } from "@tabler/icons-react";
import ListItemLink from "../shared/ListItemLink";

const questionsAndAnswers = [
  // Primitive and Object Types
  {
    question: "What types of data are considered primitive in JavaScript?",
    answer: "Number, String, Boolean, Undefined, Null, BigInt, Symbol.",
  },
  {
    question: "Name some object types in JavaScript.",
    answer:
      "Object, Function, Array, Date, RegExp, Error (along with its subtypes).",
  },
  // The `this` Keyword
  {
    question: "What does the `this` keyword refer to in JavaScript?",
    answer: "It refers to the object that is executing the current function.",
  },
  {
    question: "Can you explain what implicit binding is?",
    answer:
      "It occurs when a method is invoked on an object, making `this` refer to the object left of the dot.",
  },
  {
    question: "What is explicit binding in JavaScript?",
    answer:
      "It involves using `.call`, `.apply`, or `.bind` to explicitly set `this`.",
  },
  {
    question: "How does the `new` keyword affect the `this` binding?",
    answer:
      "It creates a new object and sets `this` to it during the execution of the constructor function.",
  },
  {
    question: "What happens when none of the other bindings apply?",
    answer:
      "`this` falls back to the global object, or is `undefined` in strict mode.",
  },
  // Prototypal Inheritance and Constructors
  {
    question: "What is prototypal inheritance?",
    answer:
      "It's a method by which an object can inherit properties and methods of another object.",
  },
  {
    question: "How do you add a method to a prototype without using a class?",
    answer: "By using `PrototypeName.prototype.methodName = function() {}`.",
  },
  {
    question: "What is the purpose of a constructor in JavaScript?",
    answer: "To create and initialize an object.",
  },
  // Functions
  {
    question:
      "What's the difference between a function declaration and a function expression?",
    answer:
      "Function declarations are hoisted, while function expressions are not.",
  },
  // Scope and Closures
  {
    question: "What are the three types of scope in JavaScript?",
    answer: "Global, Function, and Block scope.",
  },
  {
    question: "How do `var`, `let`, and `const` differ in terms of scoping?",
    answer:
      "`var` is function-scoped, while `let` and `const` are block-scoped.",
  },
  {
    question: "What is a closure?",
    answer:
      "A function that remembers the variables from the lexical scope in which it was declared, even after that scope has completed execution.",
  },
  // Hoisting
  {
    question: "What is hoisting?",
    answer:
      "The process of moving function and variable declarations to the top of their containing scope during the compilation phase.",
  },
  {
    question: "Are variables declared with `let` and `const` hoisted?",
    answer:
      "Yes, but they remain in a 'temporal dead zone' from the start of the block until the declaration is encountered.",
  },
  // Asynchronous JavaScript
  {
    question: "What is a Promise in JavaScript?",
    answer:
      "An object representing the eventual completion or failure of an asynchronous operation.",
  },
  {
    question: "What are the three states of a Promise?",
    answer: "Pending, Fulfilled, and Rejected.",
  },
  {
    question: "What is the purpose of async/await?",
    answer:
      "To write asynchronous code that looks and behaves like synchronous code.",
  },
  // Execution Context
  {
    question: "What exactly is Execution context?",
    answer:
      "In JavaScript, an execution context is the environment in which JavaScript code is evaluated and executed, containing information about variable scope, this value, and the call stack.",
  },
  {
    question: "What types of execution contexts exist?",
    answer: "Global and Function.",
  },
  {
    question:
      "What is the global execution context? In Node, what is this called?",
    answer:
      "The default or base execution environment where JavaScript code is executed for the first time.",
  },
  {
    question:
      "In The browser what is this called? Global Object, Window Object",
    answer: "Window Object.",
  },
  {
    question: "When a new execution context gets executed, it’s added to what?",
    answer: "The execution stack.",
  },
  {
    question: "What does the function execution context do?",
    answer:
      "It's created whenever a function is invoked to provide an environment for the function's execution.",
  },
  {
    question: "What role does the call stack play in JavaScript execution?",
    answer:
      "It manages function invocation by keeping track of all the execution contexts.",
  },
  {
    question:
      "How many phases for the EC have? What are they called and what do they do?",
    answer:
      "Creation Phase: Creates global object, this object, Setup memory space for variables and functions and set them to undefined. Execution Phase: Starts to run program line by line.",
  },
  // Web APIs and Event Loop
  {
    question: "What is the Event Loop in JavaScript?",
    answer:
      "The Event Loop is a mechanism that allows JavaScript to perform non-blocking operations by using callbacks and event-handling, despite being single-threaded.",
  },
  {
    question: "What are Web APIs in JavaScript execution context?",
    answer:
      "Web APIs are interfaces provided by browsers that allow JavaScript to use features beyond the ECMAScript standard, such as DOM manipulation, timers, and HTTP requests.",
  },
  {
    question: "How do callbacks relate to the Event Loop?",
    answer:
      "Callbacks are functions that are placed in the Callback Queue when an asynchronous operation completes; the Event Loop then executes these callbacks when the Call Stack is clear.",
  },
  {
    question: "Can Web APIs directly interact with the JavaScript Call Stack?",
    answer:
      "No, Web APIs cannot directly interact with the Call Stack. They place callback functions in the Callback Queue, which the Event Loop then checks and pushes to the Call Stack when it's empty.",
  },
  {
    question: "What is the Call Stack in JavaScript?",
    answer:
      "The Call Stack is a LIFO (Last In, First Out) stack that tracks function execution. When a function is called, it's added to the stack, and when the function returns, it's removed from the stack.",
  },
  {
    question:
      "What role does the Callback Queue play in asynchronous operations?",
    answer:
      "The Callback Queue holds Callback representing events or operations that need to be processed. Each message has a function associated with it, which the Event Loop transfers to the Call Stack when the stack becomes empty.",
  },
  {
    question: "How do Promises in JavaScript relate to the Event Loop?",
    answer:
      "Promises represent future values from asynchronous operations. They have `.then()` and `.catch()` methods for handling fulfilled or rejected states, and their callbacks are handled by the Event Loop similarly to other asynchronous operations.",
  },
  // Miscellaneous
  {
    question: "How can you avoid callback hell?",
    answer:
      "By using Promises or async/await to write cleaner, more manageable code.",
  },
  {
    question: "What is memoization and its downside?",
    answer:
      "It's a caching technique that stores the results of expensive function calls. The downside is the increased use of memory.",
  },
  {
    question: "Explain implicit type coercion.",
    answer:
      "Automatic conversion of values from one data type to another by JavaScript, such as converting a string and a number into a single string when using the `+` operator.",
  },
  {
    question: "What's the difference between `==` and `===`?",
    answer:
      "`==` compares values after coercion, while `===` compares both value and type without coercion.",
  },
  // More on Functions and Scope
  {
    question: "What's a factory function?",
    answer:
      "A function that returns a new object without the use of the `new` keyword.",
  },
  {
    question: "Why use constructor functions?",
    answer:
      "To create multiple instances of similar objects with the same structure and methods.",
  },
  {
    question: "How does block scoping work with `let` and `const`?",
    answer:
      "Variables declared with `let` and `const` are scoped to the nearest enclosing block.",
  },
  {
    question: "What is the temporal dead zone?",
    answer:
      "The period between entering scope and being declared where variables cannot be accessed.",
  },
  {
    question: "Discuss the concept of closure and its practical applications.",
    answer:
      "A closure is a function that remembers the variables from the lexical scope in which it was declared, even after that scope has completed execution. Closures are useful for data encapsulation, creating private variables, and in functional programming patterns.",
  },
  {
    question:
      "How does the `let` keyword differ from `var` in terms of scope and hoisting?",
    answer:
      "`let` is block-scoped, meaning it is only accessible within the nearest enclosing block, and it is not hoisted to the top of its scope. In contrast, `var` is function-scoped and is hoisted.",
  },
  {
    question:
      "Can you explain the use and benefits of arrow functions introduced in ES6?",
    answer:
      "Arrow functions provide a concise syntax, don’t bind their own `this`, making them ideal for use in callbacks and functional programming patterns. They also implicitly return a value when the function body is a single expression.",
  },
  // Advanced and Miscellaneous
  {
    question: "How does asynchronous code execute in JavaScript?",
    answer:
      "Through the event loop, which manages execution of callbacks, promises, and async/await.",
  },
  {
    question: "What does the `static` keyword do in a class?",
    answer:
      "It declares a static method or property that belongs to the class itself, not to instances of the class.",
  },
  {
    question: "What are getters and setters in JavaScript objects?",
    answer:
      "Special methods to define object properties that are accessed and set by calling a method, but interacted with like properties.",
  },
  {
    question: "How can you implement inheritance without using classes?",
    answer: "By setting the prototype of one object to an instance of another.",
  },
  {
    question: "How do you handle errors in asynchronous code?",
    answer:
      "Using `.catch` with promises or try/catch blocks with async/await.",
  },
  {
    question: "How do `call`, `apply`, and `bind` differ?",
    answer:
      "`call` and `apply` invoke a function immediately with a given `this` value, `apply` accepts an array of arguments, while `bind` returns a new function with a bound `this` value.",
  },
  {
    question: "What does `use strict` do?",
    answer:
      "It enables strict mode, which catches common coding errors and unsafe actions like accessing the global object.",
  },
  {
    question: "How can you clone an object in JavaScript?",
    answer: "By using `Object.assign` or the spread operator `{...obj}`.",
  },
];

const About = () => {
  return (
    <>
      <p>
        If the following topics are new to you, I recommend watching the
        following videos to get a better understanding of JavaScript. If you're
        looking for a refresher or a deeper dive, these videos are also helpful.
        You will be expected to know these topics for the technical interview.
      </p>
      <ul>
        <ListItemLink
          to="https://youtu.be/lW_erSjyMeM?si=_PqotoCBcdXX40_0"
          text="Block scope and shadow DOM"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=8zKuNo4ay8E"
          text="Event Loop"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=Nt-qa_LlUH0"
          text="Hoisting / Execution Context"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=zE9iro4r918"
          text="this, call, apply, bind"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=XskMWBXNbp0&t=1s"
          text="prototype (Video 1)"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=GhJTy5-X3kA&t=2s"
          text="prototype (Video 2)"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=1UTqFAjYx1k&t=62s"
          text="prototype (Video 3)"
        />
      </ul>
    </>
  );
};

const JavaScript = () => {
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
        <About />
        <br></br>
        <TopicsList>
          <ol style={{ margin: 0 }}>
            <li style={{ margin: 0 }}>Data Types and Objects</li>
            <li>
              <span className="tag">this</span> Keyword and Binding
            </li>
            <li>Prototypal Inheritance</li>
            <li>Functions and Scope</li>
            <li>Promises and Async/Await</li>
            <li>Execution Context and Call Stack</li>
            <li>Event Loop and Web APIs</li>
            <li>Type Coercion and Comparison Operators</li>
            <li>ES6 Features (Arrow Functions, Classes, etc.)</li>
            <li>Error Handling</li>
            <li>Object Manipulation</li>
            <li>Closures</li>
          </ol>
        </TopicsList>

        <br></br>
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

export default JavaScript;