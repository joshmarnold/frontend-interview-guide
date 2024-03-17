import TopicsList from "../shared/TopicsList";
import ListItemLink from "../shared/ListItemLink";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Highlight from "react-highlight";

import { useState } from "react";
import CustomTabPanel, { a11yProps } from "../shared/CustomTabPanel";
import QuestionsWrapper from "../shared/QuestionsWrapper";

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
      "How does JavaScript’s prototypical inheritance differ from classical inheritance?",
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
      "How does JavaScript’s prototypical inheritance differ from classical inheritance?",
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
          text="Hoisting / Execution Context (Broken)"
        />
        <ListItemLink
          to="https://www.youtube.com/watch?v=fVXp7ZWjlO4"
          text="this, call, apply, bind"
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

const ThisSection = () => {
  return (
    <>
      <h2 className="tag">this</h2>
      <p>
        <span className="tag">this</span> ALWAYS refers to and holds the value
        of an object. Okay, why? It's a way for the object to reference itself,
        ie, to access its own properties and methods.
      </p>
      <p>
        Further, its important to note that it is actually a reference to the
        object which invokes the current function. The specific object to which
        this refers can vary depending on how and where the function is called.
        Here's a quick rundown of the different ways this can be bound:
      </p>
      <ol>
        <li>
          <strong>Global Context:</strong> In the global execution context,
          outside of any function, this refers to the global object. In web
          browsers, the global object is <span class="tag">window</span>, while
          in Node.js, it's
          <span class="tag">global</span>.
          <Highlight language="javascript">
            {`console.log(this === window); // true`}
          </Highlight>
        </li>
        <li>
          <strong>Function Call:</strong> In a regular function call,{" "}
          <span className="tag">this</span> refers to the global object in
          non-strict mode and <span class="tag">undefined</span> in strict mode
          (<span class="tag">'use strict';</span>).
          <Highlight language="javascript">
            {`function greet() {
  return "Hello, " + this.name;
}
console.log(greet()); // Hello, undefined`}
          </Highlight>
        </li>
        <li>
          <strong>Method Call:</strong> When a function is called as a method of
          an object (<span class="tag">objectName.methodName()</span>),{" "}
          <span className="tag">this</span> refers to the object from which the
          method was called. This is only if the method is not an arrow
          function.
          <Highlight language="javascript">
            {`const person = {
  name: "John",
  greet: function() {
    return "Hello, " + this.name;
  }
};
console.log(person.greet()); // Hello, John`}
          </Highlight>
        </li>
        <li>
          <strong>Constructor Call:</strong> When a function is used as a
          constructor with the new keyword (
          <span class="tag">new ConstructorName()</span>), this refers to the
          newly created instance.
          <Highlight language="javascript">
            {`function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john.name); // John`}
          </Highlight>
        </li>
        <li>
          <strong>Explicit Setting:</strong> Using{" "}
          <span class="tag">call()</span>,<span class="tag">apply()</span>, or{" "}
          <span class="tag">bind()</span> methods, you can explicitly set the
          value of this to any object you choose.
          <Highlight language="javascript">
            {`function greet() {
  return "Hello, " + this.name;
}
const person = { name: "John" };
console.log(greet.call(person)); // Hello, John`}
          </Highlight>
        </li>
        <li>
          <strong>Arrow Functions:</strong> Arrow functions do not have their
          own this context; instead, they capture the this value of the
          enclosing context in which they are defined. So, within an arrow
          function, this refers to the this value of its surrounding scope.
          <Highlight language="javascript">
            {`const personWithArrow = {
  firstName: "Jane",
  lastName: "Doe",
  getFullName: () => {
    return this.firstName + " " + this.lastName;
  }
};
console.log(personWithArrow.getFullName()); // undefined undefined

// Correct use of arrow function with 'this' outside the method
const firstName = "Global Jane";
const lastName = "Global Doe";
console.log(personWithArrow.getFullName()); // Global Jane Global Doe`}
          </Highlight>
        </li>
        <li>
          <strong>Event Handlers:</strong> In the context of DOM event handlers,
          this refers to the HTML element that received the event.
          <Highlight language="javascript">
            {`document.querySelector("button").addEventListener("click", function() {
  console.log(this); // the button element

  this.style.display = "none"; // hide the button

  // careful, 'setTimout' is a method of the window object
  setTimeout(function() {
    console.log(this); // the window object
  }, 1000);

  // using arrow function to preserve 'this'
  setTimeout(() => {
    console.log(this); // the button element
  }, 1000);
});`}
          </Highlight>
        </li>
      </ol>

      <p>
        In case you didn't catch it, arrow functions do not have their own{" "}
        <span className="tag">this</span>. If <span className="tag">this</span>{" "}
        is used within an arrow function, it will be inherited from the
        enclosing scope.
      </p>

      {/* call appl bind */}
      <h2 className="tag">call, apply, bind</h2>
      <p>
        These are methods that can be used to set the value of this, and invoke
        a function with a specific this value. They are used to borrow methods
        from other objects, set the value of this, and invoke functions with a
        specific this value.
      </p>
      <Highlight language="javascript">
        {`// call
function greet() {
  return "Hello, " + this.name;
}
const person = { name: "John" };
console.log(greet.call(person)); // Hello, John

// apply
function greet2(greeting) {
  return greeting + ", " + this.name;
}
console.log(greet2.apply(person, ["Hi"])); // Hi, John

// bind
const greet3 = greet.bind(person);
console.log(greet3()); // Hello, John`}
      </Highlight>
    </>
  );
};

const PrototypeSection = () => {
  return (
    <>
      <div className="divider"></div>
      <h2 className="tag">Prototypal Inheritance</h2>
      <h4>Terminology</h4>
      <ul>
        <li>
          <p>
            I'm using "Creator Function" to refer to a function that is used to
            create objects. This is synonymous with "constructor function" and
            "class" in JavaScript. This distinction is made to avoid confusion
            with the "constructor" property of prototypes, which is a function.
          </p>
          <Highlight language={"javascript"}>
            {`// Creator Function (Formally known as Constructor Function)
function Person(name, age) {
  this.name = name;
  this.age = age;
}`}
          </Highlight>
        </li>
        <li>
          <p>
            When discussing an object's prototype in JavaScript, we are usually
            referring to the <code>__proto__</code> property. This property
            links an object to another object, which serves as its prototype,
            enabling inheritance of properties and methods. This concept is
            separate from the <code>prototype</code> property found on creator
            functions. The <code>prototype</code> property on a creator function
            specifies the properties and methods that should be inherited by
            instances created through the <code>new</code> keyword from that
            creator function. It's important to distinguish between these two
            uses of the term "prototype" to understand JavaScript's inheritance
            model accurately.
          </p>
        </li>
      </ul>

      <h4>What is the "prototype"?</h4>
      <p>
        In JavaScript, the term "prototype" refers to a mechanism by which
        objects inherit features from one another. The prototype of an object is
        connected through its <code>__proto__</code> property, which points to
        the prototype object from which it inherits properties and methods.
      </p>
      <ul>
        <li>
          <strong>Properties and Methods:</strong> Prototypes associated with
          creator functions contain shared properties and methods. These shared
          attributes provide common functionality to all instances created from
          the creator function, preventing the need for duplicate code.
        </li>
        <li>
          <strong>Linking:</strong> Instances are linked to the prototype object
          via the <code>__proto__</code> property. This link enables instances
          to access and use properties and methods from the prototype chain,
          implementing prototypical inheritance.
        </li>
        <li>
          <strong>Creation:</strong> A prototype object is automatically created
          when a creator function is defined. This prototype serves as a
          blueprint for instances generated using the creator function with the{" "}
          <code>new</code> keyword, and is assigned to the creator function's{" "}
          <code>prototype</code> property.
        </li>
      </ul>

      <h4>Inheritance</h4>
      <p>
        When you create an object in JavaScript, this object internally links to
        another object. This thing that does the linking is referred to as its
        "prototype". I want to clear upfront that this is not the "prototype"
        property though. It's actually the "__proto__". This prototype object
        (__proto__) itself may have a prototype ( __proto__) from which it
        points to another objects prototype and inherits methods and properties,
        and so on. This chain continues until an object with null as its
        prototype is reached, which is the end of the prototype chain.
      </p>

      <p>
        It's important to note "what" has a prototype and why. Also note that we
        refer to constructor functions as "constructors". This might be
        confusing because a functions prototype itself has a property called
        "constructor" which is a function. When reading, keep this in mind and
        try to understand the context.
      </p>
      <h4>Functions</h4>
      <p>
        Functions in JavaScript have a <span className="tag">prototype</span>{" "}
        property because they can be used as constructors to create instances.
        This <span className="tag">prototype</span> property is a blueprint for
        the instances, providing them with properties and methods to inherit.
      </p>

      <h4>Instances</h4>
      <p>
        Instances do not have a <span className="tag">prototype</span> property
        because they are the end products, created by constructors or defined
        via object literals. Instead, instances have a{" "}
        <span className="tag">__proto__</span> property, linking them to their
        constructor's <span className="tag">prototype</span>, enabling
        inheritance.
      </p>
      <Highlight language={"javascript"}>
        {`const john = new Person("John", 30);

console.log(john.prototype); // undefined (instances do not have a prototype property)
console.log(john.__proto__ === Person.prototype); // true
console.log(john.__proto__.__proto__ === Object.prototype); // true
console.log(john.__proto__.__proto__.__proto__); // null
        
const sarah = {};
console.log(sarah.__proto__ === Object.prototype); // true
        `}
      </Highlight>

      <h4>Constructor Functions and Prototype Inheritance</h4>
      <p>
        Within the prototype of each function is a property called{" "}
        <span className="tag">constructor</span>, which points back to the
        function itself.
      </p>
      <p>
        The role of the constructor is to create and initialize an object when a
        function is used with the <span className="tag">new</span> keyword. It
        will:
      </p>
      <ol>
        <li>Create a new object.</li>
        <li>
          Copies properties and methods from the objects body to the new object.
          (Not the prototype)
        </li>
        <li>Set the prototype of the new object to the constructor's.</li>
        <li>
          Invoke the constructor function with <span className="tag">this</span>{" "}
          bound to the new object.
        </li>
        <li>Return the new object.</li>
      </ol>

      <h4>
        Difference between direct properties and methods and prototype
        properties and methods
      </h4>
      <p>
        When using a creator function or class in JavaScript, like{" "}
        <span className="tag">Person</span>, properties and methods attached to{" "}
        <span className="tag">this</span> within the creator are copied over to
        each instance created by the creator. This means each instance receives
        its own unique set of properties and methods.
      </p>
      <p>
        For example, in a <span className="tag">Person</span> creator,
        properties such as <span className="tag">name</span> and{" "}
        <span className="tag">age</span>, and methods like{" "}
        <span className="tag">sayName</span>, are directly attached to each
        instance. Thus, if multiple instances of{" "}
        <span className="tag">Person</span> are created, each one has its own{" "}
        <span className="tag">name</span>, <span className="tag">age</span>, and{" "}
        <span className="tag">sayName</span> method, based on the arguments
        provided to the creator and the function definition within it.
      </p>
      <p>
        Conversely, properties and methods defined on the creator's{" "}
        <span className="tag">prototype</span> are not copied to each instance.
        Instead, they are accessible to all instances via the prototype chain.
        This mechanism allows instances to share access to common properties and
        methods without having individual copies, exemplified by the{" "}
        <span className="tag">greet</span> method in our{" "}
        <span className="tag">Person</span> example. Defined on{" "}
        <span className="tag">Person.prototype</span>,{" "}
        <span className="tag">greet</span> is available to all instances,
        showcasing efficient memory usage and inheritance.
      </p>

      <Highlight language={"javascript"}>
        {`function Person(name, age) {
  // Direct properties unique to each instance
  this.name = name;
  this.age = age;

  // Direct method unique to each instance (not recommended for methods due to memory inefficiency)
  this.sayName = function() {
    console.log(this.name);
  };
}

// Prototype method, shared by all instances
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

// Each has direct properties
console.log(person1.name); // Alice
console.log(person2.name); // Bob

// And each can access the shared prototype method
person1.greet(); // Hello, my name is Alice and I am 30 years old.
person2.greet(); // Hello, my name is Bob and I am 25 years old.
`}
      </Highlight>

      {/* typical inhertiage example using animal and dog */}
      <h4>Typical Inheritance Example</h4>
      <p>
        In the following example, we have a <span className="tag">Dog</span>{" "}
        creator that inherits from an <span className="tag">Animal</span>{" "}
        creator. This is achieved by setting the prototype of{" "}
        <span className="tag">Dog</span> to an instance of{" "}
        <span className="tag">Animal</span>.
      </p>
      <Highlight language={"javascript"}>
        {`function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a noise.");
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(this.name + " barks.");

  // Call the parent method
  this.speak();
}

let dog = new Dog("Rex", "Golden Retriever");
dog.bark(); // Rex barks. Rex makes a noise.
`}
      </Highlight>
      <p>
        In the example above, the <span className="tag">Dog</span> creator calls
        the <span className="tag">Animal</span> creator using{" "}
        <span className="tag">call</span> to set the{" "}
        <span className="tag">name</span> property. The{" "}
        <span className="tag">Dog</span> prototype is then set to an instance of
        the <span className="tag">Animal</span> prototype using{" "}
        <span className="tag">Object.create</span>, and the{" "}
        <span className="tag">creator</span> property is reset to{" "}
        <span className="tag">Dog</span>.
      </p>
      <p>
        This pattern is a common way to achieve inheritance in JavaScript,
        allowing <span className="tag">Dog</span> instances to inherit from{" "}
        <span className="tag">Animal</span> and access its methods, while also
        having their own unique properties and methods.
      </p>
    </>
  );
};

const JavaScript = () => {
  const [value, setValue] = useState(() => {
    const storedTabValue = localStorage.getItem("javascript-currentTab");
    return storedTabValue !== null ? parseInt(storedTabValue, 10) : 0;
  });

  const handleChange = (event, newValue) => {
    localStorage.setItem("javascript-currentTab", newValue);
    setValue(newValue);
  };

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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          textColor="white"
        >
          <Tab label="Learn" {...a11yProps(0)} />
          <Tab label="Quiz" {...a11yProps(1)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <About />
          <ThisSection />
          <PrototypeSection />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
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

          <QuestionsWrapper storageKey="js" questions={questionsAndAnswers} />
        </CustomTabPanel>
      </div>
    </>
  );
};

export default JavaScript;
