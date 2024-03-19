import Highlight from "react-highlight";
import { Tag } from "../../shared/Tag";

const PreModules = () => {
  return (
    <>
      <h2>Before Modules (Early 1990s to 2009)</h2>
      <p>
        Initially, JavaScript lacked a module system, leading to{" "}
        <Tag>global namespace pollution</Tag> and{" "}
        <Tag>dependency management challenges</Tag>. Scripts were included in
        HTML using the <Tag>&lt;script&gt;</Tag> tag, causing potential
        conflicts and loading order issues. Developers had to manually manage
        dependencies and namespace conflicts, often resulting in spaghetti code
        and poor maintainability. Lets discuss the 2 main ways of including
        scripts in HTML:
      </p>

      <h3>Local Modules</h3>
      <p>
        How to encapsulate code to create private variables and functions,
        simulating modular behavior.
      </p>
      <p></p>
      <h4>IIFE (Immediately Invoked Function Expression)</h4>
      <p>
        To address namespace pollution, developers utilized IIFEs, encapsulating
        code to create private variables and functions, simulating modular
        behavior:
      </p>
      <Highlight language="javascript">
        {`(function() {
  var privateVar = 'I am private';
  window.myModule = {
    publicMethod: function() { console.log(privateVar); }
  };
})();`}
      </Highlight>
      <p>
        This pattern was particularly useful for creating a semblance of modules
        by isolating code and exposing only what was necessary on the global
        scope, thus reducing the risk of conflicts with other scripts or
        libraries included in the page.
      </p>

      <h4>Remote Modules</h4>
      <p>
        During this era, developers would often download libraries by directly
        including a script tag in their HTML that pointed to a remote server or
        hosting them locally. For example, to use a generic library named
        "ExampleLib", one might include:
      </p>
      <Highlight language="html">
        {`<script src="https://cdn.example.com/ExampleLib/1.0.0/ExampleLib.min.js"></script>`}
      </Highlight>
      <p>
        Once included, these libraries typically attached themselves to the
        global <Tag>window</Tag> object, making their API available globally.
        For instance, "ExampleLib" would be accessible via{" "}
        <Tag>window.ExampleLib</Tag>, allowing developers to use its utilities
        across their application:
      </p>
      <Highlight language="javascript">
        {`// Using ExampleLib from the global scope
console.log(window.ExampleLib.someUtilityFunction());

// Or simply, assuming the library attaches itself to the window object
console.log(ExampleLib.someUtilityFunction());`}
      </Highlight>

      <p>
        In situations where libraries did not automatically attach themselves to
        the global <Tag>window</Tag> object, or when developers preferred not to
        pollute the global namespace (in simple terms, avoid cluttering the
        global object with too many properties and methods), a common practice
        was to manually assign these libraries to a custom namespace. This
        approach provided a structured and organized way to include multiple
        libraries and modules without causing naming conflicts or overloading
        the global scope.
      </p>
      <p>
        Assuming "ExampleLib" does not automatically attach itself to the
        window, developers could manually initialize it within a dedicated
        namespace:
      </p>
      <Highlight language="javascript">
        {`// Creating or referencing a namespace object on the window
var MyApp = window.MyApp || {};

// Manually attaching ExampleLib to the namespace
MyApp.ExampleLib = ExampleLib;

// Remove the global reference to ExampleLib
delete window.ExampleLib;

// Now, ExampleLib's functionalities can be accessed through the MyApp namespace
console.log(MyApp.ExampleLib.someUtilityFunction());`}
      </Highlight>
      <p>
        This method of encapsulating libraries under a single global namespace
        object helped to minimize the risk of global namespace pollution.
      </p>
    </>
  );
};

const CommonJSAndAMDAndUMD = () => {
  return (
    <>
      <h2>CommonJS and AMD (Asynchronous Module Definition) (2009)</h2>
      <p>
        The landscape of JavaScript modules saw significant advancements in 2009
        with the introduction of CommonJS and AMD (Asynchronous Module
        Definition). These two systems addressed the limitations of the previous
        era by formalizing the concept of modules in JavaScript, albeit in
        different environments and with distinct approaches.
      </p>
      <p>
        <strong>CommonJS:</strong> Originally designed for server-side
        JavaScript with Node.js, CommonJS introduced a simple and
        straightforward syntax for including modules. The key feature of
        CommonJS is its synchronous module loading, which means that modules are
        loaded one by one, in the order they are required. This approach suits
        server-side development well, where modules are typically located
        locally and do not require network loading, minimizing the impact of
        synchronous operations. However, this synchronous nature poses
        challenges for web applications, where loading modules from a network
        can lead to significant performance bottlenecks.
      </p>
      <p>Example of CommonJS syntax:</p>
      <Highlight language="javascript">
        {`var module = require('module-name');`}
      </Highlight>
      <p>
        <strong>AMD:</strong> In contrast, AMD was developed with the web in
        mind, specifically addressing the asynchronous nature of web
        applications. Utilized by libraries like RequireJS, AMD allows
        developers to define modules and their dependencies upfront, which are
        then loaded asynchronously. This means that the application does not
        have to wait for a module to be loaded and parsed before moving on to
        load the next one, improving the performance of web applications by
        reducing load times.
      </p>
      <p>Example of AMD syntax:</p>
      <Highlight language="javascript">
        {`define(['dependency'], function(dependency) {
  Module code here
});`}
      </Highlight>

      <h3>UMD (Universal Module Definition) (Early 2010s)</h3>
      <p>
        UMD emerged to bridge CommonJS and AMD, providing a pattern for modules
        to operate in both environments:
      </p>
      <Highlight language="javascript">
        {`(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['dependency'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('dependency'));
  } else {
    root.myModule = factory(root.dependency);
  }
}(this, function(dependency) {
  // Module code here
}));`}
      </Highlight>
    </>
  );
};

function ModulesSection() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>History of JavaScript Modules</h1>
      <p>
        Understanding the evolution of JavaScript modules from a developer's
        perspective highlights the innovations and challenges leading to modern
        modular JavaScript development.
      </p>
      <p>
        This section should answer "What's the difference between require and
        import syntax"
      </p>

      <PreModules />
      <CommonJSAndAMDAndUMD />
    </div>
  );
}

export default ModulesSection;
