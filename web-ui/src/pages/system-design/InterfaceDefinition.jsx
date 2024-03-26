import React from "react";

const InterfaceDefinition = () => {
  return (
    <div>
      <h2>Interacting with the System</h2>

      <p>Same as Data Model, I see two types of problems to anticipate:</p>
      <ul>
        <li>
          <strong>Server Communication:</strong>
          In this case, we'll need to consider how the client will communicate
          with the server. We'll need to decide on the protocol (e.g., HTTP,
          WebSockets) and the API design (e.g., REST, GraphQL).
        </li>
        <li>
          <strong>Components:</strong>
          In this case, there's no client server, but we'll need to consider how
          the components will interact with each other. We'll need to decide on
          the props that will be passed between components and the internal
          functions that will be used.
        </li>
      </ul>
      <h3>Server Communication</h3>
      <p>
        For server communication, we'll utilize the HTTP protocol. We have
        several options:
      </p>
      <ul>
        <li>
          HTTP/1.1: Suitable for general use, doesn't support multiplexing but
          is widely supported.
        </li>
        <li>
          HTTP/2: Offers performance improvements like multiplexing, header
          compression, and server push, ideal for high-load APIs.
        </li>
        <li>
          HTTP/3: Built on QUIC, reduces connection and transport latency, good
          for mobile and lossy networks but less widely supported.
        </li>
      </ul>

      <h3>API Options</h3>
      <p>
        Depending on the project requirements, we can choose from various API
        options:
      </p>
      <ul>
        <li>
          REST: Standardized and widely used for its simplicity and scalability.
        </li>
        <li>
          GraphQL: Allows clients to request only the data they need, reducing
          over-fetching and under-fetching.
        </li>
        <li>
          Websockets: Offers bidirectional communication over a single TCP
          connection, suitable for real-time applications.
        </li>
        <li>
          Server-Sent Events: Provides unidirectional communication from the
          server to the client, suitable for streaming data.
        </li>
      </ul>

      <h3>Designing the API</h3>
      <p>We'll design the API with the following considerations:</p>
      <ul>
        <li>Request type (POST, GET) for each endpoint.</li>
        <li>Authentication mechanism (e.g., JWT tokens) for secure access.</li>
        <li>
          Request inputs and outputs, specifying the expected data format (e.g.,
          JSON).
        </li>
        <li>
          Standard HTTP status codes for indicating the success or failure of a
          request (e.g., 200 for success, 404 for not found).
        </li>
      </ul>
    </div>
  );
};

export default InterfaceDefinition;
