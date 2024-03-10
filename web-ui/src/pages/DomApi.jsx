import React, { useState } from "react";
import { PageHeader } from "../shared/PageHeader";
import Highlight from "react-highlight";
import Header from "../shared/Header";
import QuestionAnswer from "../shared/QuestionAnswer";

import "./DomApi.scss";

const accessingDOMElementsQuestions = [
  {
    question: "How do you select the accordion wrapper element?",
    answer: (
      <Highlight className="javascript">
        {`document.querySelector(".accordion-wrapper")
// or
document.getElementsByClassName("accordion-wrapper")[0]`}
      </Highlight>
    ),
  },
  {
    question: "How do you select all the accordion elements?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionItems = document.querySelectorAll(".accordion");`}
        </Highlight>
        <p>
          <code>document.querySelectorAll()</code> returns a{" "}
          <code>NodeList</code>, which is a static collection of elements. It
          represents a snapshot of the elements at the time the query was made
          and does not reflect any subsequent changes to the DOM.
        </p>
        <Highlight className="javascript">
          {`const accordionItems = Array.from(document.getElementsByClassName("accordion"));`}
        </Highlight>
        <p>
          <code>document.getElementsByClassName()</code> returns an{" "}
          <code>HTMLCollection</code>, which is a live collection of elements.
          It dynamically updates to reflect changes in the DOM, such as the
          addition or removal of elements that match the class name.
        </p>
        <p>
          The <code>Array.from()</code> method is used to convert the{" "}
          <code>HTMLCollection</code> into a new array instance. This is
          necessary because <code>HTMLCollection</code> is an array-like object
          but not an actual array. It does not have access to common array
          methods like <code>forEach()</code>, <code>map()</code>,{" "}
          <code>filter()</code>, etc.
        </p>
        <p>
          Here's an example that demonstrates the usefulness of an{" "}
          <code>HTMLCollection</code> being a live collection:
        </p>
        <Highlight className="html">
          {`<!-- index.html -->
<div id="list-container">
  <div class="list-item">Item 1</div>
  <div class="list-item">Item 2</div>
  <div class="list-item">Item 3</div>
</div>
<button id="add-item">Add Item</button>`}
        </Highlight>
        <Highlight className="javascript">
          {`// script.js
// Select all elements with class 'list-item' - returns a live HTMLCollection
const items = document.getElementsByClassName('list-item');

// Function to add a new item
function addItem() {
  const newItem = document.createElement('div');
  newItem.className = 'list-item';
  newItem.textContent = \`Item \${items.length + 1}\`;
  document.getElementById('list-container').appendChild(newItem);

  // Log the updated collection size without needing to re-query the DOM
  console.log(\`Updated items count: \${items.length}\`);
}

// Add event listener to button
document.getElementById('add-item').addEventListener('click', addItem);`}
        </Highlight>
        <p>
          In this example, <code>items</code> is an <code>HTMLCollection</code>{" "}
          that automatically updates when new elements with the class
          'list-item' are added to the DOM. When the "Add Item" button is
          clicked, a new item is created and appended to the list container. The{" "}
          <code>items</code> collection automatically reflects the updated count
          of elements, making it convenient to work with dynamic collections.
        </p>
      </div>
    ),
  },
  {
    question:
      "How do you select the title section of the first accordion item?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`document.querySelector(".accordion:first-child .title-section");`}
        </Highlight>
        <p>
          In this case, <code>document.querySelector</code> is used to select
          the title section of the first accordion item. Here's why:
        </p>
        <ul>
          <li>
            <strong>Specificity:</strong> The selector{" "}
            <code>.accordion:first-child .title-section</code> targets the first{" "}
            <code>.accordion</code> element and then finds the{" "}
            <code>.title-section</code> element within it. This ensures that
            only the title section of the first accordion item is selected.
          </li>
          <li>
            <strong>🔑 Speed of Selection:</strong>{" "}
            <code>document.querySelector</code> is designed to return the first
            element that matches the specified selector, stopping as soon as it
            finds a match. This can be more efficient in terms of selection
            speed if you're only interested in the first match because it
            doesn't need to scan the entire document.
          </li>
          <li>
            <strong>Flexibility:</strong> <code>document.querySelector</code>{" "}
            allows you to use any valid CSS selector to target the desired
            element. It provides a powerful and flexible way to select elements
            based on their tag name, class, ID, attributes, or any combination
            of these.
          </li>
        </ul>
        <p>Let's compare this approach with other methods:</p>
        <ul>
          <li>
            <code>document.getElementsByClassName</code>: This method returns a
            live <code>HTMLCollection</code> of all elements with the specified
            class name. To select the title section of the first accordion item,
            you would need to use an index or convert the collection to an
            array. For example:
            <Highlight className="javascript">
              {`document.getElementsByClassName("accordion")[0].querySelector(".title-section");`}
            </Highlight>
            This approach requires an extra step and may not be as intuitive or
            readable compared to the <code>document.querySelector</code>{" "}
            approach.
          </li>
          <li>
            <code>document.querySelectorAll</code>: This method returns a{" "}
            <code>NodeList</code> of all elements that match the specified
            selector. To select the title section of the first accordion item,
            you would need to use an index. For example:
            <Highlight className="javascript">
              {`document.querySelectorAll(".accordion .title-section")[0];`}
            </Highlight>
            While this approach works, it selects all matching elements and then
            retrieves the first one, which may be less efficient compared to{" "}
            <code>document.querySelector</code>.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "How do you select the description element of the second accordion item?",
    answer: (
      <>
        <Highlight className="javascript">
          {`document.querySelector(".accordion:nth-child(2) .description");`}
        </Highlight>
        <p>Alternatively, if the description element has an ID:</p>
        <Highlight className="javascript">
          {`document.getElementById("desc-2");`}
        </Highlight>
      </>
    ),
  },
  {
    question:
      "How do you select the expand icon element of the first accordion item?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionItem = document.querySelector(".accordion");`}
        </Highlight>
        <Highlight className="javascript">
          {`const expandIcon = accordionItem.querySelector(".expand-icon");`}
        </Highlight>
        <p>
          In this approach, we first select an accordion item using{" "}
          <code>document.querySelector(".accordion")</code>. This returns the
          first element with the class <code>.accordion</code>. 🔑 This example
          showcases <span class="tag">flaky code</span>, highlighting the risks
          associated with an unreliable DOM structure, particularly when
          multiple accordion items are present on a page. It serves as a
          cautionary tale about the importance of specificity in your DOM
          design. To ensure robust and predictable interactions, always use
          unique IDs or class names to minimize ambiguity and enhance stability.
        </p>
        <p>
          Moving on, once we have the <code>accordionItem</code> element, we can
          search within it for the expand icon element using{" "}
          <code>accordionItem.querySelector(".expand-icon")</code>. This will
          find the first element with the class <code>.expand-icon</code> that
          is a descendant of the <code>accordionItem</code>.
        </p>
        <p>
          🔑 This technique of searching within other DOM elements is known as{" "}
          <span class="tag">DOM Traversal</span> or{" "}
          <span class="tag">nested selection</span>. It allows you to narrow
          down your search scope to a specific part of the DOM tree, which can
          be more efficient and targeted compared to searching the entire
          document.
        </p>
        <p>
          By using <code>querySelector</code> or other DOM traversal methods on
          a parent element, you can select child elements relative to that
          parent. This is particularly useful when you don't have unique IDs for
          the elements you want to select or when you need to select elements
          based on their relationship to other elements in the DOM hierarchy.
        </p>
      </div>
    ),
  },
  {
    question:
      "How do you select the next accordion item sibling of a given accordion item?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionItem = document.querySelector(".accordion");`}
        </Highlight>
        <Highlight className="javascript">
          {`const nextAccordionItem = accordionItem.nextElementSibling;`}
        </Highlight>
        <p>
          The <code>nextElementSibling</code> property returns the element
          immediately following the specified element in its parent's children
          list, excluding text nodes and comments. This property is useful for
          traversing the DOM when you need to find an element's sibling
          elements.
        </p>
        <p>Other similar methods and properties for DOM traversal include:</p>
        <ol>
          <li>
            <strong>previousElementSibling</strong>: Returns the element
            immediately preceding the specified one in its parent's children
            list, excluding text nodes and comments.
          </li>
          <li>
            <strong>parentNode</strong>: Returns the parent node of the
            specified element.
          </li>
          <li>
            <strong>childNodes</strong>: Returns a live NodeList containing all
            child nodes of an element, including text nodes and comments.
          </li>
          <li>
            <strong>children</strong>: Returns a live HTMLCollection of the
            child elements of an element.
          </li>
          <li>
            <strong>firstChild</strong>: Returns the first child node of an
            element, including text nodes and comments.
          </li>
          <li>
            <strong>lastChild</strong>: Returns the last child node of an
            element, including text nodes and comments.
          </li>
          <li>
            <strong>firstElementChild</strong>: Returns the first child element
            of an element, excluding text nodes and comments.
          </li>
          <li>
            <strong>lastElementChild</strong>: Returns the last child element of
            an element, excluding text nodes and comments.
          </li>
          <li>
            <strong>querySelector(selector)</strong>: Returns the first element
            that matches a specified CSS selector(s) among the descendants of
            the element.
          </li>
          <li>
            <strong>querySelectorAll(selector)</strong>: Returns a static
            NodeList representing a list of the document's elements that match
            the specified group of selectors.
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: "How do you check if an accordion item has the 'active' class?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionItem = document.querySelector(".accordion");`}
        </Highlight>
        <Highlight className="javascript">
          {`const isActive = accordionItem.classList.contains("active");`}
        </Highlight>
        <p>
          In this example, the <code>classList</code> property is used to check
          if an element has a specific class. The <code>classList</code>{" "}
          property is a read-only property that returns a live{" "}
          <code>DOMTokenList</code> collection of the class attributes of the
          element.
        </p>
        <p>
          The <code>classList</code> property is part of the{" "}
          <code>Element</code> interface in the DOM API. It provides convenient
          methods to manipulate the class list of an element. Some commonly used
          methods of <code>classList</code> include:
        </p>
        <ul>
          <li>
            <code>add(class1, class2, ...)</code>: Adds one or more class values
            to the element.
          </li>
          <li>
            <code>remove(class1, class2, ...)</code>: Removes one or more class
            values from the element.
          </li>
          <li>
            <code>toggle(class, force)</code>: Toggles the specified class
            value. If the class exists, it is removed; if it doesn't exist, it
            is added.
          </li>
          <li>
            <code>contains(class)</code>: Checks if the element has the
            specified class value. Returns <code>true</code> if the class
            exists, <code>false</code> otherwise.
          </li>
          <li>
            <code>replace(oldClass, newClass)</code>: Replaces an existing class
            value with a new class value.
          </li>
        </ul>
        <p>
          For more information about the <code>Element</code> instance, refer to
          the official{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Mozilla Developer Network (MDN) documentation
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    question:
      "How do you get the data-testid attribute value of an accordion item?",
    answer: (
      <>
        <Highlight className="javascript">
          {`const accordionItem = document.querySelector(".accordion");`}
        </Highlight>
        <Highlight className="javascript">
          {`const testId = accordionItem.getAttribute("data-testid");`}
        </Highlight>

        <p>
          The <code>getAttribute()</code> method of the <code>Element</code>{" "}
          interface returns the value of a specified attribute on the element.
        </p>
        <p>
          For more information, refer to the official{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Mozilla Developer Network (MDN) documentation
          </a>
        </p>
      </>
    ),
  },
];

const AccessingDOMElements = () => {
  return (
    <>
      <br />
      <h3 id="access-dom-elements">Accessing DOM Elements</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {accessingDOMElementsQuestions.map((qa, index) => (
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

const manipulatingDOMElementsQuestions = [
  {
    question:
      "How do you create a new accordion item and add it to the accordion wrapper?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionWrapper = document.querySelector(".accordion-wrapper");
const newAccordionItem = document.createElement("div");
newAccordionItem.className = "accordion";

const titleSection = document.createElement("div");
titleSection.className = "title-section";
titleSection.setAttribute("role", "button");
titleSection.setAttribute("tabindex", "0");
titleSection.setAttribute("aria-controls", "desc-2");
titleSection.setAttribute("id", "btn-2");

const title = document.createElement("div");
title.className = "title";
title.textContent = "New Accordion Item";

const expandIcon = document.createElement("div");
expandIcon.className = "expand-icon";

const collapseIcon = document.createElement("div");
collapseIcon.className = "collapse-icon";

titleSection.appendChild(title);
titleSection.appendChild(expandIcon);
titleSection.appendChild(collapseIcon);

const description = document.createElement("div");
description.className = "description";
description.setAttribute("id", "desc-2");
description.textContent = "This is a new accordion item.";

newAccordionItem.appendChild(titleSection);
newAccordionItem.appendChild(description);

accordionWrapper.appendChild(newAccordionItem);`}
        </Highlight>
        <p>
          This code creates a new accordion item by creating the necessary
          elements (<code>div</code>s), setting their classes and attributes,
          and appending them to the appropriate parent elements. Finally, the
          new accordion item is appended to the accordion wrapper. Really makes
          you appreciate frameworks like React, huh?
        </p>
      </div>
    ),
  },
  {
    question:
      "How do you insert a new element before the first accordion item?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionWrapper = document.querySelector(".accordion-wrapper");
// Select the first accordion item
const existingAccordionItem = document.querySelector(".accordion");

const newElement = document.createElement("div");
newElement.textContent = "New element inserted before the accordion item.";

accordionWrapper.insertBefore(newElement, existingAccordionItem);`}
        </Highlight>
        <p>
          This code selects the accordion wrapper and the existing accordion
          item. It then creates a new <code>div</code> element and sets its text
          content. Finally, it uses the <code>insertBefore()</code> method to
          insert the new element before the existing accordion item within the
          accordion wrapper.
        </p>
      </div>
    ),
  },
  {
    question: "How do you remove the last accordion item from the DOM?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`// heres a couple of many ways
const accordionItem = document.querySelector(".accordion");
accordionItem.parentNode.removeChild(accordionItem);

// or

const accordionWrapper = document.querySelector(".accordion-wrapper");
const lastAccordionItem = accordionWrapper.lastElementChild;

if (lastAccordionItem) {
  lastAccordionItem.remove();
}
`}
        </Highlight>
      </div>
    ),
  },
  {
    question: "How do you clone an existing accordion item?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionItem = document.querySelector(".accordion");
const clonedAccordionItem = accordionItem.cloneNode(true);`}
        </Highlight>
        <p>
          This code selects the accordion item to be cloned using{" "}
          <code>querySelector()</code>. It then calls the{" "}
          <code>cloneNode()</code> method on the accordion item, passing{" "}
          <code>true</code> as the argument to create a deep clone. The cloned
          accordion item is assigned to the <code>clonedAccordionItem</code>{" "}
          variable. You can then modify the cloned item and insert it into the
          DOM as needed.
        </p>
      </div>
    ),
  },
  {
    question:
      "How do you change the background color and text color of an accordion item?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionItem = document.querySelector(".accordion");
accordionItem.style.backgroundColor = "#f0f0f0";
accordionItem.style.color = "#333";`}
        </Highlight>
        <p>
          This code selects the accordion item using{" "}
          <code>querySelector()</code>. It then modifies the <code>style</code>{" "}
          property of the accordion item to change its background color and text
          color. In this example, the background color is set to{" "}
          <code>#f0f0f0</code> (light gray) and the text color is set to{" "}
          <code>#333</code> (dark gray). You can replace these values with any
          valid CSS color values.
        </p>
      </div>
    ),
  },
  {
    question: "How do you add or remove a class from an element?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionItem = document.querySelector(".accordion");

// Add a class
accordionItem.classList.add("active");

// Remove a class
accordionItem.classList.remove("active");

// Toggle a class
accordionItem.classList.toggle("active");`}
        </Highlight>
        <p>
          This code selects the accordion item using{" "}
          <code>querySelector()</code>. It then demonstrates how to add, remove,
          or toggle a class on the accordion item using the{" "}
          <code>classList</code> property and its respective methods:
        </p>
        <ul>
          <li>
            <code>add()</code>: Adds a class to the element.
          </li>
          <li>
            <code>remove()</code>: Removes a class from the element.
          </li>
          <li>
            <code>toggle()</code>: Toggles a class on the element (adds it if it
            doesn't exist, removes it if it does).
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "How do you get the computed value of a style property for an element? Say, the background color of an accordion item?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const accordionItem = document.querySelector(".accordion");
const backgroundColor = window.getComputedStyle(accordionItem).getPropertyValue("background-color");
console.log(backgroundColor);`}
        </Highlight>
        <p>
          This code selects the accordion item using{" "}
          <code>querySelector()</code>. It then uses the{" "}
          <code>getComputedStyle()</code> method to retrieve the computed styles
          of the accordion item. The <code>getPropertyValue()</code> method is
          called on the computed styles object to get the value of a specific
          style property, in this case, the background color.
        </p>
        <p>
          It's important to note that <code>getComputedStyle()</code> can have
          performance implications and should be used sparingly, especially in
          performance-critical scenarios. Here are a few things to keep in mind:
        </p>
        <ul>
          <li>
            <code>getComputedStyle()</code> triggers a reflow (or re-render) of
            the element and its descendants, which can be computationally
            expensive. If you need to access multiple style properties, it's
            more efficient to store the computed styles object in a variable and
            then access the properties from that object.
          </li>
          <li>
            Avoid using <code>getComputedStyle()</code> in loops or frequently
            called functions. If possible, cache the computed styles or use
            alternative methods like accessing inline styles or CSS classes
            directly.
          </li>
          <li>
            If you only need to check the presence or absence of a specific
            style, consider using the <code>classList</code> property or
            checking inline styles instead of relying on{" "}
            <code>getComputedStyle()</code>.
          </li>
        </ul>
      </div>
    ),
  },
];

const ManipulatingDOMElements = () => {
  return (
    <>
      <h3 id="manipulating-dom-elements">Manipulating DOM Elements</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {manipulatingDOMElementsQuestions.map((qa, index) => (
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

const AccordionExample = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "The Hitchhiker's Guide to the Galaxy",
      description: "A comedic science fiction series by Douglas Adams.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const newItem = {
      id: items.length + 1,
      title,
      description,
    };
    setItems([...items, newItem]);
    e.target.reset();
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h3>UI</h3>
      <br></br>
      <div className="example-wrapper">
        <div className="form-wrapper">
          <form id="itemForm" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" required></textarea>

            <button type="submit">Add Item</button>
          </form>
        </div>

        <div className="accordion-wrapper">
          {items.map((item, index) => (
            <div key={item.id} className="accordion" data-testid={item.id}>
              <div
                className="title-section"
                role="button"
                tabIndex={0}
                aria-controls={`desc-${item.id}`}
                id={`btn-${item.id}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="title">{item.title}</div>
                <div
                  className={`expand-icon ${
                    activeIndex === index ? "active" : ""
                  }`}
                ></div>
                <div
                  className={`collapse-icon ${
                    activeIndex === index ? "active" : ""
                  }`}
                ></div>
              </div>
              <div
                className={`description ${
                  activeIndex === index ? "active" : ""
                }`}
                id={`desc-${item.id}`}
                aria-labelledby={`btn-${item.id}`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>Code</h3>
      <Highlight className="html">
        {`<div id="app">
  <div class="form-wrapper">
    <form id="itemForm">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" required>

      <label for="description">Description:</label>
      <textarea id="description" name="description" required></textarea>

      <button type="submit">Add Item</button>
    </form>
  </div>

  <div class="accordion-wrapper">
    <div class="accordion">
      <div class="title-section" role="button" tabindex="0" aria-controls="desc-1" id="btn-1">
        <div class="title">The Hitchhiker's Guide to the Galaxy</div>
        <div class="expand-icon"></div>
        <div class="collapse-icon"></div>
      </div>
      <div class="description" id="desc-1">
        <p>A comedic science fiction series by Douglas Adams.</p>
      </div>
    </div>
  </div>
</div>`}
      </Highlight>
    </div>
  );
};

const handlingEventsQuestions = [
  {
    question: "How do you toggle the first accordion item?",
    answer: (
      <>
        <Highlight className="javascript">
          {`document.querySelector(".accordion:first-of-type .title-section")
          .addEventListener("click", function(event) {
  // Access the parent node of the title-section
  const accordionItem = event.currentTarget.parentNode;

  // Now, use the parent node to find the description and icons within it
  const description = accordionItem.querySelector(".description");
  const expandIcon = accordionItem.querySelector(".expand-icon");
  const collapseIcon = accordionItem.querySelector(".collapse-icon");

  if (description.style.display === "none" || description.style.display === "") {
    description.style.display = "block";
    expandIcon.style.display = "none";
    collapseIcon.style.display = "block";
  } else {
    description.style.display = "none";
    expandIcon.style.display = "block";
    collapseIcon.style.display = "none";
  }
});
`}
        </Highlight>
        <p>
          In this example, an event listener is added to the title section of
          the first accordion item. When the title section is clicked, the event
          listener triggers a function that toggles the visibility of the
          description and the expand/collapse icons. The function uses the{" "}
          <code>parentNode</code> property to access the parent node of the
          title section, which is the accordion item. It then uses{" "}
          <code>querySelector</code> to find the description and icons within
          the accordion item.
        </p>
        <p>
          Note <span className="tag">currentTarget</span> vs{" "}
          <span className="tag">target</span>: currentTarget is the element to
          which the event listener is attached, while target is the element that
          triggered the event. In this case, currentTarget is the title section,
          and target is the expand icon. Using currentTarget ensures that the
          event listener responds to clicks on the title section, regardless of
          which part of the title section is clicked.
        </p>
      </>
    ),
  },
  {
    question:
      "How do you add an event listener to dynamically added accordion items?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`document.querySelector(".accordion-wrapper").addEventListener("click", (event) => {
  if (event.target.closest(".title-section")) {
    const accordionId = event.target.closest(".title-section").getAttribute("aria-controls");
    const description = document.getElementById(accordionId);
    description.style.display = description.style.display === "none" ? "block" : "none";
  }
});`}
        </Highlight>
        <p>
          This code demonstrates the use of event delegation to handle click
          events on dynamically added accordion items. Instead of attaching
          event listeners to each individual accordion item, a single event
          listener is attached to the parent element with the class{" "}
          <code>.accordion-wrapper</code>.
        </p>
        <p>
          When a click event occurs within the <code>.accordion-wrapper</code>,
          the event listener captures the event and checks if the clicked
          element or any of its ancestors matches the selector{" "}
          <code>.title-section</code> using the <code>closest()</code> method.
        </p>
        <p>
          The <code>closest()</code> method traverses up the DOM tree from the
          clicked element and returns the nearest ancestor that matches the
          specified selector. If no matching ancestor is found, it returns{" "}
          <code>null</code>. This allows us to determine if the click occurred
          on a <code>.title-section</code> element or one of its descendants.
        </p>
        <p>
          If a <code>.title-section</code> is found, the code retrieves the
          value of the <code>aria-controls</code> attribute from the clicked{" "}
          <code>.title-section</code> using <code>getAttribute()</code>. This
          attribute should correspond to the <code>id</code> of the associated
          description element.
        </p>
        <p>
          Using the retrieved <code>accordionId</code>, the code selects the
          corresponding description element using{" "}
          <code>document.getElementById()</code>. It then toggles the visibility
          of the description element by checking its current{" "}
          <code>display</code> style property. If it's currently set to{" "}
          <code>none</code>, it's changed to <code>block</code> to show the
          description, and vice versa.
        </p>
        <p>
          By using event delegation, this approach efficiently handles events
          for multiple accordion items, including those added to the DOM after
          the initial page load. It avoids the need to attach separate event
          listeners to each accordion item, which can be beneficial for
          performance and maintainability.
        </p>
        <p>
          The <code>closest()</code> method is particularly useful in this
          scenario because it allows us to find the nearest ancestor{" "}
          <code>.title-section</code> element, even if the click event occurred
          on a child element within the <code>.title-section</code>. This
          flexibility ensures that the accordion functionality works correctly
          regardless of where exactly the click occurred within the title
          section.
        </p>
      </div>
    ),
  },
];

const HandlingEvents = () => {
  return (
    <>
      <h3 id="handling-events">Handling Events</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {handlingEventsQuestions.map((qa, index) => (
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

const formQuestionsAnswers = [
  {
    question: "How do you access the value of the 'title' input field?",
    answer: (
      <Highlight className="javascript">
        {`const titleInput = document.getElementById("title");
const titleValue = titleInput.value;`}
      </Highlight>
    ),
  },
  {
    question: "How do you set the value of the 'title' input field?",
    answer: (
      <Highlight className="javascript">
        {`const titleInput = document.getElementById("title");
titleInput.value = "New Title";`}
      </Highlight>
    ),
  },
  {
    question: "How do you handle form submission?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const form = document.getElementById("itemForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Access form field values from the event object
  // We can access form fields by referencing their name attributes
  const titleValue = event.target.elements.title.value;
  const descriptionValue = event.target.elements.description.value;

  // Perform form submission logic here
  console.log("Form submitted:");
  console.log("Title:", titleValue);
  console.log("Description:", descriptionValue);

  // Reset form fields
  form.reset();
});`}
        </Highlight>
        <p>
          In this example, we add an event listener to the form's{" "}
          <code>submit</code> event. When the form is submitted, the{" "}
          <code>preventDefault()</code> method is called to prevent the default
          form submission behavior. We then access the values of the form fields
          using their respective IDs and perform any desired form submission
          logic. Finally, we reset the form fields using the{" "}
          <code>reset()</code> method.
        </p>
      </div>
    ),
  },
  {
    question: "How do you validate form fields before submission?",
    answer: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Highlight className="javascript">
          {`const form = document.getElementById("itemForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = event.target.elements.title;
  const descriptionInput = event.target.elements.description;

  if (titleInput.value.trim() === "") {
    alert("Please enter a title.");
    titleInput.focus();
    return;
  }

  if (descriptionTextarea.value.trim() === "") {
    alert("Please enter a description.");
    descriptionTextarea.focus();
    return;
  }

  // Form is valid, perform submission logic here
  console.log("Form submitted successfully!");
  form.reset();
});`}
        </Highlight>
        <p>
          In this example, we validate the form fields before submission. We
          check if the 'title' input field and 'description' textarea are empty
          (after trimming any whitespace). If any field is empty, we display an
          alert message, set the focus to the corresponding field, and return
          early to prevent form submission. If all fields are valid, we proceed
          with the form submission logic.
        </p>
      </div>
    ),
  },
  {
    question: "How do you reset form fields after successful submission?",
    answer: (
      <Highlight className="javascript">
        {`const form = document.getElementById("itemForm");
form.reset();`}
      </Highlight>
    ),
  },
];

const WorkingWithForms = () => {
  return (
    <>
      <h3 id="working-with-forms">Working with Forms</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {formQuestionsAnswers.map((qa, index) => (
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

const DomApi = () => {
  return (
    <div>
      <p>
        The Document Object Model (DOM) API is a programming interface for web
        documents. It represents the structure of a document as a tree of
        objects, allowing developers to manipulate and interact with the
        content, structure, and styles of a web page using JavaScript.
      </p>
      <p>
        While modern web development heavily relies on frameworks and libraries
        like React, understanding and working with the DOM API is still crucial,
        especially in interview settings. Many interviews assess a candidate's
        knowledge of vanilla JavaScript and their ability to work directly with
        the DOM API, as it demonstrates a solid foundation in web development
        fundamentals.
      </p>
      <p>
        In this section, we'll explore a series of pragmatic questions related
        to working with the DOM API. We'll provide code samples of HTML and ask
        questions about how to interact with and manipulate the DOM elements.
        The focus will be on common areas such as forms, accessing DOM elements,
        traversing the DOM tree, and handling events.
      </p>

      <h3>Key topics:</h3>
      <ol className="selectable">
        <li
          onClick={() => {
            window.location.href = "#access-dom-elements";
          }}
        >
          Accessing DOM Elements
          <ul>
            <li>
              Methods for selecting elements (getElementById, querySelector,
              etc.)
            </li>
            <li>
              Traversing the DOM tree (parentNode, childNodes, firstChild,
              lastChild, etc.)
            </li>
          </ul>
        </li>
        <li
          onClick={() => {
            window.location.href = "#manipulating-dom-elements";
          }}
        >
          Manipulating DOM Elements
          <ul>
            <li>Creating new elements (createElement)</li>
            <li>Inserting elements into the DOM (appendChild, insertBefore)</li>
            <li>Removing elements from the DOM (removeChild)</li>
            <li>Cloning elements (cloneNode)</li>
            <li>Styling elements</li>
          </ul>
        </li>
        <li
          onClick={() => {
            window.location.href = "#working-with-forms";
          }}
        >
          Working with Forms
          <ul>
            <li>Accessing form elements</li>
            <li>Getting and setting form values</li>
            <li>Handling form submissions</li>
            <li>Form validation</li>
          </ul>
        </li>
        <li
          onClick={() => {
            window.location.href = "#handling-events";
          }}
        >
          Handling Events
          <ul>
            <li>Adding event listeners (addEventListener)</li>
            <li>Removing event listeners (removeEventListener)</li>
            <li>Event object and its properties</li>
            <li>Event propagation and delegation</li>
          </ul>
        </li>
      </ol>

      <h2>Example</h2>
      <p>
        Let's consider an example of an accordion with a default item and a form
        to add new items. We'll use this example to discuss and analyze the DOM
        API concepts.
      </p>

      <AccordionExample />
      <AccessingDOMElements />
      <ManipulatingDOMElements />
      <HandlingEvents />
      <WorkingWithForms />
    </div>
  );
};

export default DomApi;
