import QuestionsWrapper from "../../shared/QuestionsWrapper";
import TopicsList from "../../shared/TopicsList";
import Highlight from "react-highlight";
import { Tag } from "../../shared/Tag";

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
    question:
      "What role does the `prototype` property play in function and class constructors?",
    answer: (
      <>
        <p>
          In JavaScript, the <code>prototype</code> property is used in the
          context of function and class constructors to define properties and
          methods that should be inherited by instances created from these
          constructors. This <code>prototype</code> property points to an object
          that instances created with the <code>new</code> keyword will have as
          their prototype. This means that any property or method placed on a
          constructor's <code>prototype</code> object will be accessible to all
          instances of that constructor, allowing shared functionality and
          efficient memory use.
        </p>
      </>
    ),
  },
  {
    question:
      "How does JavaScript's prototypical inheritance differ from classical inheritance?",
    answer: (
      <>
        <p>
          Unlike classical inheritance, where classes inherit from other classes
          in a hierarchical manner, JavaScript’s prototypical inheritance
          involves objects inheriting directly from other objects. There are no
          classes in the traditional sense (though ES6 classes are syntactic
          sugar over this system). Instead, inheritance is achieved through the
          prototype chain, with objects having a <code>__proto__</code> property
          linking to their prototype object. This allows for more dynamic and
          flexible inheritance structures, as any object can inherit from any
          other, without the constraints of class-based models.
        </p>
      </>
    ),
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
    question:
      "What role does the `prototype` property play in function and class constructors?",
    answer: (
      <>
        <p>
          In JavaScript, the <code>prototype</code> property is used in the
          context of function and class constructors to define properties and
          methods that should be inherited by instances created from these
          constructors. This <code>prototype</code> property points to an object
          that instances created with the <code>new</code> keyword will have as
          their prototype. This means that any property or method placed on a
          constructor's <code>prototype</code> object will be accessible to all
          instances of that constructor, allowing shared functionality and
          efficient memory use.
        </p>
      </>
    ),
  },
  {
    question:
      "How does JavaScript's prototypical inheritance differ from classical inheritance?",
    answer: (
      <>
        <p>
          Unlike classical inheritance, where classes inherit from other classes
          in a hierarchical manner, JavaScript’s prototypical inheritance
          involves objects inheriting directly from other objects. There are no
          classes in the traditional sense (though ES6 classes are syntactic
          sugar over this system). Instead, inheritance is achieved through the
          prototype chain, with objects having a <code>__proto__</code> property
          linking to their prototype object. This allows for more dynamic and
          flexible inheritance structures, as any object can inherit from any
          other, without the constraints of class-based models.
        </p>
      </>
    ),
  },
  {
    question:
      "What is the difference between the __proto__ property and the prototype property in JavaScript?",
    answer: (
      <>
        <p>
          The <code>__proto__</code> property is an internal property of an
          object, pointing to its prototype from which it can inherit methods
          and properties. Conversely, the <code>prototype</code> property is
          found on constructor functions and classes, specifying the prototype
          object that instances created with <code>new</code> will have as their{" "}
          <code>__proto__</code>.
        </p>
      </>
    ),
  },
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
    question:
      "What is the role of the constructor property in prototypical inheritance?",
    answer: (
      <>
        <p>
          The <code>constructor</code> property in a prototype object points
          back to the constructor function that created it. This property is
          crucial for understanding which function created a particular
          instance, allowing objects created through prototypical inheritance to
          identify their original constructor.
        </p>
      </>
    ),
  },
  {
    question:
      "Can instances directly access the prototype property of their constructor?",
    answer: (
      <>
        <p>
          No, instances do not directly access the{" "}
          <span className="tag">prototype</span> property of their constructor.
          Instead, they interact with the prototype through their internal{" "}
          <span className="tag">__proto__</span> property, which links them to
          their constructor’s prototype.
        </p>
      </>
    ),
  },
  {
    question:
      "Why is the __proto__ property considered deprecated and what should be used instead?",
    answer: (
      <>
        <p>
          The <span className="tag">__proto__</span> property is considered
          deprecated due to its non-standard nature across different JavaScript
          engines and potential performance issues. Instead,{" "}
          <span className="tag">Object.getPrototypeOf(obj)</span> or{" "}
          <span className="tag">Object.setPrototypeOf(obj, prototype)</span>{" "}
          should be used for getting or setting an object’s prototype.
        </p>
      </>
    ),
  },
  {
    question:
      "How does changing the prototype of a constructor function affect existing instances?",
    answer: (
      <>
        <p>
          Changing the prototype of a constructor function affects all future
          instances created with that constructor, but existing instances retain
          their original prototype link and are not automatically updated with
          the new prototype.
        </p>
      </>
    ),
  },
  {
    question:
      "What is the significance of the 'null' prototype in the prototype chain?",
    answer: (
      <>
        <p>
          A <span className="tag">'null'</span> prototype marks the end of the
          prototype chain. When an object's{" "}
          <span className="tag">__proto__</span> property is null, it indicates
          that the object does not inherit properties or methods from any other
          object, effectively stopping the inheritance chain.
        </p>
      </>
    ),
  },
  {
    question:
      "How can you create an object with a specific prototype or no prototype at all?",
    answer: (
      <>
        <p>
          To create an object with a specific prototype, use{" "}
          <span className="tag">Object.create(prototypeObj)</span>. To create an
          object with no prototype, use{" "}
          <span className="tag">Object.create(null)</span>, which creates an
          object without a prototype (<span className="tag">__proto__</span>{" "}
          property is null).
        </p>
      </>
    ),
  },
  {
    question:
      "What are the implications of adding or modifying properties on a constructor's prototype?",
    answer: (
      <>
        <p>
          Adding or modifying properties on a constructor’s prototype affects
          all instances that inherit from that prototype, providing a powerful
          way to dynamically update the behavior of all instances, but also
          requiring caution to avoid unintended side effects.
        </p>
      </>
    ),
  },
  {
    question: (
      <p style={{ margin: 0 }}>
        What happens when calling a constructor function without the{" "}
        <Tag>new</Tag> keyword? Consider <Tag>this</Tag>, <Tag>return</Tag>, and{" "}
        <Tag>prototype</Tag>
      </p>
    ),
    answer: (
      <div>
        <p>
          Calling a constructor function without the <Tag>new</Tag> keyword
          leads to:
        </p>
        <ul>
          <li>
            <Tag>this</Tag> context: Without <Tag>new</Tag>, <Tag>this</Tag>{" "}
            does not refer to a new object instance but to the global object
            (window in browsers) in non-strict mode, or is <Tag>undefined</Tag>{" "}
            in strict mode, potentially leading to errors or unexpected
            behavior.
          </li>
          <li>
            <Tag>return</Tag> value: A constructor called without <Tag>new</Tag>{" "}
            returns <Tag>undefined</Tag> unless explicitly returning an object,
            failing to create a new instance.
          </li>
          <li>
            <Tag>prototype</Tag>: The resulting object does not inherit from the
            constructor's prototype, missing out on the prototype chain, which
            includes methods or properties defined there.
          </li>
        </ul>
        <p>Example:</p>
        <Highlight language="javascript">
          {`function Vehicle(make) {
  this.make = make;
}
Vehicle.prototype.honk = function() {
  console.log('Beep beep!');
};

let car1 = Vehicle("Toyota"); // Incorrect: "this" is not bound, "car1" is undefined
let car2 = new Vehicle("Honda"); // Correct: creates a new instance with "Vehicle.prototype" in its prototype chain`}
        </Highlight>
      </div>
    ),
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
  // memory mgmt
  {
    question:
      "How does memory management differ between low-level and high-level programming languages?",
    answer: (
      <>
        <p>
          In low-level languages like C and C++, developers are responsible for
          manually allocating and freeing up memory. This involves using
          functions like <code>malloc()</code> or <code>new</code> for
          allocation and <code>free()</code> or <code>delete</code> for
          deallocation. This manual process gives developers more control but
          also makes it more complex and error-prone, potentially leading to
          issues like memory leaks and pointer errors.
        </p>
        <p>
          High-level languages like JavaScript, Python, and C# abstract away
          these details by automatically managing memory. They allocate memory
          when new objects are created and release it when objects are no longer
          in use, which is typically done through a process known as garbage
          collection. Garbage collection simplifies development by automating
          memory management, reducing the chances of memory-related errors and
          allowing developers to focus more on writing the logic of their
          applications.
        </p>
      </>
    ),
  },
  {
    question:
      "What are the differences between the stack and the heap in programming?",
    answer: (
      <>
        <p>
          The stack and heap are two areas of memory used for different types of
          memory allocation in programming languages.
        </p>
        <ul>
          <li>
            <strong>Stack:</strong> The stack is a structured area of memory
            that operates on a last-in-first-out basis (LIFO). It is used for
            static memory allocation, which includes local variables and
            function calls. Memory allocation and deallocation on the stack are
            done automatically when a function is called and when it returns.
          </li>
          <li>
            <strong>Heap:</strong> The heap is used for dynamic memory
            allocation, which allows variables to be allocated and freed in any
            order. Unlike the stack, the heap is managed by the programmer (in
            low-level languages) or by the garbage collector (in high-level
            languages). The heap is more flexible than the stack but managing
            memory allocation and deallocation is more complex and can lead to
            issues like memory leaks if not handled correctly.
          </li>
        </ul>
        <p>
          In essence, the stack is fast and managed by the system, whereas the
          heap is more flexible and usually larger, but requires more management
          overhead, either by the developer or the runtime environment's garbage
          collector.
        </p>
      </>
    ),
  },
];
const Quiz = () => {
  return (
    <>
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

      <QuestionsWrapper
        storageKey="js"
        questions={questionsAndAnswers}
        timeout={0}
      />
    </>
  );
};

export default Quiz;
