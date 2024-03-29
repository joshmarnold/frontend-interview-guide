import Highlight from "react-highlight";
import { Tag } from "../../shared/Tag";

const PreModules = () => {
  return (
    <>
      <h2 style={{ margin: 0 }}>Before Modules (Early 1990s to 2009)</h2>
      <p>
        Initially, JavaScript lacked a module system, leading to{" "}
        <Tag>global namespace pollution</Tag> and{" "}
        <Tag>dependency management challenges</Tag>. Scripts were included in
        HTML using the <Tag>&lt;script&gt;</Tag> tag, causing potential
        conflicts and loading order issues. Developers had to manually manage
        dependencies and namespace conflicts, often resulting in spaghetti code
        and poor maintainability. Lets discuss the 2 main ways of including or
        creating "modules" in this era:
      </p>

      <h3>Local Modules</h3>
      <p>
        Encapsulate code to create private variables and functions, simulating
        modular behavior.
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

const NpmModulesContent = () => {
  return (
    <div>
      <h2>npm and the Evolution of JavaScript Modules</h2>
      <p>
        Launched in 2010, npm (Node Package Manager) quickly became a
        cornerstone of JavaScript development, closely tied to the rise of
        Node.js and its module system, CommonJS. As the first major package
        manager for JavaScript, npm provided an unprecedented means of
        distributing and managing modules, catalyzing the growth of a vast
        ecosystem of reusable code.
      </p>
      <p>
        npm's introduction marked a pivotal moment in JavaScript's evolution,
        facilitating the modular development approach that modern JavaScript
        practices rely on. It simplified sharing and using code across projects,
        promoting a culture of collaboration and innovation within the
        JavaScript community.
      </p>
      <h3>Key Contributions of npm</h3>
      <ul>
        <li>
          <strong>Module Sharing:</strong> npm's registry enabled developers to
          easily share their modules, contributing to a rich ecosystem of
          JavaScript libraries and frameworks.
        </li>
        <li>
          <strong>Dependency Management:</strong> Through the{" "}
          <code>package.json</code> file, npm streamlined the installation and
          management of package dependencies, enhancing project maintainability.
        </li>
        <li>
          <strong>Adoption of Semver:</strong> By supporting semantic
          versioning, npm helped manage dependencies more predictably, reducing
          the risks associated with package updates.
        </li>
      </ul>
      <p>
        As the JavaScript landscape evolved with the introduction of ES Modules
        and advancements in browser capabilities, npm continued to play a
        critical role, adapting to support the broader ecosystem beyond Node.js.
        Today, npm stands as a testament to JavaScript's modular evolution,
        bridging the past and future of module management.
      </p>
    </div>
  );
};

const UMDContent = () => {
  return (
    <>
      <h2>UMD (Universal Module Definition) (Early 2010s)</h2>
      <p>
        As JavaScript's popularity soared and its usage expanded beyond browsers
        to server-side applications, the community faced a challenge: the
        division between the <Tag>CommonJS</Tag> module system, prevalent in
        Node.js for server-side development, and <Tag>AMD</Tag> (Asynchronous
        Module Definition), designed for asynchronous loading of modules in
        browsers. This division made it cumbersome for developers to write
        modules that could work unmodified in both environments.
      </p>
      <p>
        Enter <Tag>UMD</Tag>, a design pattern that emerged as a solution to
        this problem. UMD aimed to create a flexible module definition that
        could adapt to the most common JavaScript environments of the time,
        specifically those that supported either CommonJS or AMD. By detecting
        the module system in use and defining modules accordingly, UMD allowed
        developers to write their code once and have it run anywhere, without
        modification.
      </p>
      <Highlight>
        {`(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // Define as an AMD module
    define(['dependency'], factory);
  } else if (typeof exports === 'object') {
    // Define as a CommonJS module
    module.exports = factory(require('dependency'));
  } else {
    // Define as a global variable for environments without a module system
    root.myModule = factory(root.dependency);
  }
}(this, function(dependency) {
  // Module code here
}));`}
      </Highlight>
      <h3>Why Did UMD Come About?</h3>
      <p>
        UMD was developed as a pragmatic solution to the fragmentation in
        JavaScript module systems, with the following goals:
      </p>
      <ul>
        <li>
          <Tag>Interoperability</Tag>: To enable JavaScript libraries and
          modules to be used in various environments without the need for
          environment-specific versions.
        </li>
        <li>
          <Tag>Simplicity</Tag>: To reduce the complexity for library authors by
          providing a single pattern that works everywhere, making it easier to
          distribute and reuse code.
        </li>
        <li>
          <Tag>Flexibility</Tag>: To support the most common use cases in module
          development, including serving as a global object for direct use in
          the browser, being managed by an AMD loader like RequireJS, or being
          required in a CommonJS environment like Node.js.
        </li>
      </ul>
      <p>
        UMD played a crucial role in the transitional period of JavaScript
        module systems, offering a bridge that allowed for greater flexibility
        and cross-compatibility. By accommodating different module formats, UMD
        helped unify the JavaScript community, making it easier to share and
        distribute code across different environments. However, with the
        introduction and standardization of ES Modules (ECMAScript Modules), the
        need for patterns like UMD has diminished, as ES Modules provide a
        native and uniform way to work with modules in JavaScript.
      </p>
    </>
  );
};

const EsModulesContent = () => {
  return (
    <div>
      <h2>ES Modules: The Modern Standard for JavaScript Modularity</h2>
      <p>
        With the advent of ECMAScript 2015 (ES6), JavaScript received its first
        official, language-level module system in the form of ES Modules (ESM).
        This monumental shift addressed many of the limitations and complexities
        of previous module systems like CommonJS and AMD, unifying module syntax
        for both client-side and server-side development.
      </p>
      <h3>Key Features of ES Modules:</h3>
      <ul>
        <li>
          <Tag>Static Structure</Tag>: Declared at the top level, allowing for
          optimizations like tree shaking to improve performance.
        </li>
        <li>
          <Tag>Dynamic Import</Tag>: Support for dynamically importing modules
          with the <code>import()</code> function, enabling code-splitting and
          reduced initial load times.
        </li>
        <li>
          <Tag>Browser Support</Tag>: Direct support in modern browsers,
          eliminating the need for module loaders or build steps for client-side
          code.
        </li>
        <li>
          <Tag>Integration with Node.js</Tag>: Node.js supports ES Modules,
          facilitating unified module syntax across development environments.
        </li>
      </ul>
      <h3>Syntax Overview:</h3>
      <Highlight>
        {`// Importing a single export from a module
import { myExport } from './module.js';

// Importing the default export
import myDefault from './module.js';

// Dynamic import
import('./module.js').then((module) => {
  // Use module
});`}
      </Highlight>
      <Highlight>
        {`// Exporting individual features
export const myExport = ...;

// Exporting the default export
export default ...;`}
      </Highlight>
      <h3>Why ES Modules?</h3>
      <p>
        ES Modules streamline JavaScript development by providing a standardized
        and efficient module system. They replace community-driven solutions
        with a native module system optimized for static analysis and tree
        shaking. This not only enhances performance but also simplifies code
        organization and sharing across environments.
      </p>
      <h3>Impact of ES Modules:</h3>
      <p>
        The introduction of ES Modules has transformed JavaScript development
        practices, encouraging modular code, easing module sharing, and
        improving the structure and maintainability of applications. As a
        cornerstone of modern JavaScript, they enjoy widespread support across
        the development ecosystem.
      </p>
      <h3>Specifying ES Modules over CommonJS</h3>
      <p>
        In Node.js, to specify ES Modules use, add <code>"type": "module"</code>{" "}
        in your <code>package.json</code>. For CommonJS files in an ES Module
        project, use the <code>.cjs</code> extension. Alternatively, use the{" "}
        <code>.mjs</code> extension for ES Modules when the context defaults to
        CommonJS.
      </p>
    </div>
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

      <UMDContent />
    </>
  );
};

function ModulesSection() {
  return (
    <div>
      <p>
        This section covers things like CommonJS vs ES Modules, import vs
        require, npm, etc..
      </p>
      <br></br>
      <PreModules />
      <CommonJSAndAMDAndUMD />
      <EsModulesContent />
      <NpmModulesContent />
    </div>
  );
}

export default ModulesSection;
