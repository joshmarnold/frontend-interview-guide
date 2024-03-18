import Highlight from "react-highlight";

const PrototypeSection = () => {
  return (
    <>
      <h4 style={{ margin: 0 }}>What is the "prototype"?</h4>
      <p>
        When referring to the "prototype" in JavaScript, it specifically
        pertains to the internal linkage mechanism that objects use to inherit
        properties and methods from other objects. Every JavaScript object has a
        hidden, internal link to another object called its "prototype." This
        link allows the object to inherit properties and methods from its
        prototype. In code, this linkage is accessed via the __proto__ property
        of an object, which points to its prototype object. The prototype
        property, on the other hand, typically exists on constructor functions
        or classes and is used to set the prototype of objects created with that
        constructor function or class.
      </p>

      <h4>Inheritance</h4>
      <p>
        Every object is linked to a prototype via its __proto__ property. This
        prototype object (that __proto__ points to) itself may have a prototype
        ( __proto__) from which it points to another objects prototype and
        inherits methods and properties, and so on. This chain continues until
        an object with null as its prototype is reached, which is the end of the
        prototype chain.
      </p>

      <h4>Constructor Functions vs Object Instances</h4>
      <h4>Constructor Functions</h4>
      <p>
        Functions in JavaScript have a <span className="tag">prototype</span>{" "}
        property because they can be used as constructors to create instances.
        This <span className="tag">prototype</span> property is a blueprint for
        the instances, providing them with properties and methods to inherit.
      </p>

      <p>
        The role of the constructor function is to create and initialize an
        object when a function is used with the <span className="tag">new</span>{" "}
        keyword. It will:
      </p>
      <ol>
        <li>Create a new object.</li>
        <li>
          Copies properties and methods from the objects body to the new object.
        </li>
        <li>Set the prototype of the new object to the constructor's.</li>
        <li>
          Invoke the creator function with <span className="tag">this</span>{" "}
          bound to the new object.
        </li>
        <li>Return the new object.</li>
      </ol>

      <Highlight language={"javascript"}>
        {`// Heres an example of what this might look like in code
function Person(name, age) {
  // Create a new object (happens implicitly when using 'new' with a function)
  // this = {};

  // Copies properties and methods from the function's body to the new object.
  this.name = name;
  this.age = age;

  // Set the prototype of the new object to the constructor's prototype is done implicitly:
  // this.__proto__ = Person.prototype;

  // Invoke the creator function with 'this' bound to the new object (we're doing it right now).
  // Return the new object is also done implicitly if no other object is returned from the constructor.
}

// Adding a method to Person's prototype
Person.prototype.introduce = function() {
  console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
};

// Using the constructor to create a new Person object
const john = new Person("John", 22);

// Testing the introduce method, which is inherited from the prototype
john.introduce(); // Output: "Hello, my name is John and I am 22 years old."`}
      </Highlight>

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

      <h4>The constructor property</h4>
      <p>
        Within the prototype of each function is a property called{" "}
        <span className="tag">constructor</span>, which points back to the
        function itself.
      </p>

      <Highlight language={"javascript"}>
        {`console.log(Person.prototype.constructor === Person); // true
console.log(Object.prototype.constructor === Object); // true
console.log(Array.prototype.constructor === Array); // true
console.log(Function.prototype.constructor === Function); // true`}
      </Highlight>

      <p>
        The <span className="tag">constructor</span> property can be used for:
      </p>
      <ol>
        <li>
          Checking the type of an object instance, as it references the function
          used to create the object.
          <Highlight language={"javascript"}>
            {`const john = new Person("John", 30);
console.log(john.constructor === Person); // true
`}
          </Highlight>
        </li>
        <li>
          Creating new instances of the same type, by calling the constructor
          function with the <span className="tag">new</span> keyword. This is
          useful when you want to create a new object of the same type as an
          existing object.
          <Highlight language={"javascript"}>
            {`const john = new Person("John", 30);
const sarah = new john.constructor("Sarah", 25); // Creates a new Person object
`}
          </Highlight>
        </li>
      </ol>

      <h4>
        Difference between direct properties and methods and prototype
        properties and methods
      </h4>
      <p>
        When using a constructor function or class in JavaScript, like{" "}
        <span className="tag">Person</span>, properties and methods attached to{" "}
        <span className="tag">this</span> within it are copied over to each
        instance created by it. This means each instance receives its own unique
        set of properties and methods.
      </p>
      <p>
        For example, in the <span className="tag">Person</span> constructor,
        properties such as <span className="tag">name</span> and{" "}
        <span className="tag">age</span>, and methods like{" "}
        <span className="tag">sayName</span>, are directly attached to each
        instance. Thus, if multiple instances of{" "}
        <span className="tag">Person</span> are created, each one has its own{" "}
        <span className="tag">name</span>, <span className="tag">age</span>, and{" "}
        <span className="tag">sayName</span> method.
      </p>
      <p>
        Conversely, properties and methods defined on the constructor's{" "}
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

export default PrototypeSection;
