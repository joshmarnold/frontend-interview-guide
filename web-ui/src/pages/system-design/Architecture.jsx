import React from "react";

const Architecture = () => {
  return (
    <div>
      <h3>Start with a simple UI design</h3>
      <ul>
        <li>Just wireframe the UI</li>
      </ul>

      <h3>Then design the component architecture</h3>
      <ul>
        <li>
          <strong>Design Patterns:</strong>
          <ul>
            <li>
              <strong>View Layer Application:</strong> The UI is divided into
              separate components, each responsible for rendering a specific
              part of the interface. This allows for better organization and
              reusability of code.
            </li>
            <li>
              <strong>Controller:</strong> The controller component acts as an
              intermediary between the view components and the data model. It
              handles user interactions, updates the data model, and passes the
              updated data to the relevant view components.
            </li>
            <li>
              <strong>Data Model (Store):</strong> The data model, often
              implemented as a store, holds the application state and provides
              methods to modify and retrieve data. It serves as a single source
              of truth for the application.
            </li>
          </ul>
        </li>
        <li>
          <strong>Data Flow:</strong>
          <ul>
            <li>
              The data flows unidirectionally from the data model to the view
              components. When a user interacts with the UI, the controller
              updates the data model, which triggers updates in the relevant
              view components.
            </li>
            <li>
              The view components receive data from the controller or directly
              from the data model and render the UI based on that data. They do
              not modify the data directly but instead notify the controller of
              user interactions.
            </li>
          </ul>
        </li>
        <li>
          <strong>Interactions:</strong>
          <ul>
            <li>
              User interactions, such as clicking buttons or submitting forms,
              are handled by the controller component. The controller updates
              the data model based on the interaction and notifies the relevant
              view components to re-render with the updated data.
            </li>
            <li>
              The view components can also emit events or callbacks to the
              controller to indicate specific interactions or changes in their
              state. The controller then decides how to handle those events and
              update the data model accordingly.
            </li>
          </ul>
        </li>
      </ul>

      <p>
        By following this architecture, the application achieves a clear
        separation of concerns between the view, controller, and data model. It
        promotes code reusability, maintainability, and testability. The
        unidirectional data flow and centralized state management make it easier
        to reason about the application's behavior and avoid inconsistencies.
      </p>
    </div>
  );
};

export default Architecture;
