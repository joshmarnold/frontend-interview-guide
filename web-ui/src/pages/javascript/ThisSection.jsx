import Highlight from "react-highlight";

const ThisSection = () => {
  return (
    <>
      <p>
        <span className="tag">this</span> ALWAYS refers to and holds the value
        of an object. Okay, why? It's a way for an object to reference itself,
        ie, to access its own properties and methods.
      </p>
      <p>
        The specific object to which <span className="tag">this</span> refers
        can vary based on the context in which it's used. While commonly
        associated with functions, <span className="tag">this</span> can refer
        to different objects depending on how and where it's invoked.
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

export default ThisSection;
