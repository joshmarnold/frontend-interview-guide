import React from "react";

const Architecture = () => {
  return (
    <div>
      <p>This is a high-level technical analysis</p>
      <h3>Start with a simple UI design</h3>
      <ul>
        <li>Just wireframe the UI</li>
      </ul>

      <h3>Then design the component architecture</h3>
      <ul>
        <li>
          <strong>Design Patterns:</strong>
          <ul>
            <li>MVC</li>
            <li>MVVM</li>
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
    </div>
  );
};

export default Architecture;
