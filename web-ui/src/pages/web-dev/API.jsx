import QuestionsWrapper from "../../shared/QuestionsWrapper";
import Highlight from "react-highlight";
import { Tag } from "../../shared/Tag";

const generalQuestionsAndAnswers = [
  {
    question:
      "What is HTTP, and on which layers of the Internet protocol suite does it operate?",
    answer: (
      <>
        <p>
          HTTP is the Hypertext Transfer Protocol used for transmitting web
          pages on the Internet.
        </p>
        <p>It operates at the application layer.</p>
      </>
    ),
  },
  {
    question: "How does HTTPS enhance the security of HTTP communications?",
    answer: (
      <>
        <p>HTTPS encrypts HTTP requests and responses with SSL/TLS.</p>
        <p>
          This ensures data privacy and security between the client and server.
        </p>
      </>
    ),
  },
  {
    question: "Describe the basic process of an HTTP request-response cycle.",
    answer: (
      <>
        <p>The client sends an HTTP request to the server.</p>
        <p>
          The server processes the request and sends back an HTTP response
          containing the requested information or an error message.
        </p>
      </>
    ),
  },
  {
    question:
      "Can you explain the significance of HTTP methods, and provide examples of when you might use GET versus POST?",
    answer: (
      <>
        <p>
          HTTP methods indicate the desired action to be performed on a
          resource.
        </p>
        <p>
          For example, GET retrieves data from a server, and POST submits data
          to be processed to a server.
        </p>
      </>
    ),
  },
  {
    question: "What role do HTTP status codes play in web communications?",
    answer: (
      <>
        <p>
          HTTP status codes provide standardized information to the client about
          the result of their request.
        </p>
        <p>They indicate success, errors, redirections, and more.</p>
      </>
    ),
  },
  {
    question: "Why is HTTP/2 considered an improvement over HTTP/1.1?",
    answer: (
      <>
        <p>
          HTTP/2 introduces performance enhancements such as multiplexing,
          header compression, and server push.
        </p>
        <p>This reduces latency and improves page load times.</p>
      </>
    ),
  },
  {
    question:
      "How does the HTTP Strict Transport Security (HSTS) mechanism improve web security?",
    answer: (
      <>
        <p>HSTS forces browsers to make requests over HTTPS instead of HTTP.</p>
        <p>This prevents downgrade attacks and ensures secure connections.</p>
      </>
    ),
  },
  {
    question:
      "Explain the difference between a URL and a URI in the context of HTTP.",
    answer: (
      <>
        <p>
          A URL is a specific type of URI that not only identifies a resource
          but also provides a means of locating it by describing its primary
          access mechanism.
        </p>
        <p>For example, its network location.</p>
      </>
    ),
  },
  {
    question:
      "In HTTP communications, what are request and response headers, and what information might they contain?",
    answer: (
      <>
        <p>
          Request headers provide additional information about the resource to
          be fetched or about the client itself.
        </p>
        <p>
          Response headers provide additional information about the server's
          response.
        </p>
        <p>
          They can contain data about content type, caching policies, and
          cookies, among other things.
        </p>
      </>
    ),
  },
  {
    question:
      "What is the purpose of the query string in a URL, and how is it used in HTTP requests?",
    answer: (
      <>
        <p>
          The query string in a URL is used to pass parameters to the server for
          processing.
        </p>
        <p>
          It is often used in GET requests to retrieve specific information or
          filter results.
        </p>
      </>
    ),
  },
  {
    question:
      "What is an API, and why is it important in software development?",
    answer: (
      <>
        <p>
          An API (Application Programming Interface) is a set of rules and
          protocols that allows different software applications to communicate
          with each other. It defines the methods and data formats that
          applications can use to request and exchange information.
        </p>
        <p>
          APIs are essential in software development because they enable
          seamless integration between different systems, services, and
          platforms. They promote code reusability, simplify development, and
          foster collaboration among developers and teams.
        </p>
      </>
    ),
  },
  {
    question:
      "Can you explain the main differences between REST, GraphQL, and gRPC API paradigms?",
    answer: (
      <>
        <p>
          - REST (Representational State Transfer): Uses standard HTTP methods
          (GET, POST, PUT, DELETE) for communication and follows a stateless
          client-server architecture. It typically uses JSON as the data format.
        </p>
        <p>
          - GraphQL: Provides a query language for APIs, allowing clients to
          request specific data from the server. It enables clients to specify
          the shape and structure of the response they need, reducing
          over-fetching and under-fetching of data.
        </p>
        <p>
          - gRPC (Remote Procedure Call): Uses protocol buffers for efficient
          and language-agnostic serialization of data. It supports bidirectional
          streaming and offers high-performance communication between services.
        </p>
      </>
    ),
  },
  {
    question: "What are the key constraints of a RESTful API?",
    answer: (
      <>
        <p>
          The key constraints of a RESTful API, also known as Richardson's
          Maturity Model, include:
        </p>
        <ul>
          <li>Client-server architecture</li>
          <li>Statelessness</li>
          <li>Cacheability</li>
          <li>Uniform interface</li>
          <li>Layered system</li>
          <li>Code on demand (optional)</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How does the stateless nature of REST APIs benefit system architecture?",
    answer: (
      <>
        <p>
          The stateless nature of REST APIs means that each request from a
          client to the server contains all the information necessary to
          understand and process the request. This allows for improved
          scalability, reliability, and simplicity in system architecture.
        </p>
        <p>
          Statelessness reduces server-side storage requirements and eliminates
          the need for session management, making it easier to scale
          horizontally by adding more servers to handle increased load.
        </p>
      </>
    ),
  },
  {
    question: "What is pagination? What are the main kinds?",
    answer: (
      <>
        <p>
          Pagination is a technique used in web development to divide content
          into separate pages and allow users to navigate through large
          collections of data by loading a subset of results at one time. The
          main kinds of pagination are <Tag>offset-based</Tag> and{" "}
          <Tag>cursor-based</Tag> pagination.
        </p>
      </>
    ),
  },
  {
    question: "What is offset pagination? What are pros and cons?",
    answer: (
      <>
        <p>
          Offset pagination operates by designating a starting point (the
          offset) and specifying how many records to retrieve from that point
          forward (the limit). Imagine it as instructing, "Begin at record 10
          and fetch the following 5 records." The offset can be a direct number
          or inferred from the page number requested. For instance, asking for
          page 3, with each page displaying 5 items, translates to an offset of
          10, calculated as 2 complete pages prior times 5 items per page.
        </p>
        <p>
          An API employing offset-based pagination typically receives two
          parameters: <code>size</code>, indicating the number of items per
          page, and <code>page</code>, the specific page to fetch.
        </p>
        <Highlight language="javascript">
          {`{
  "pagination": {
    "size": 5,
    "page": 2,
    "total_pages": 4,
    "total": 20
  },
  "results": [...]
}`}
        </Highlight>
        <p>
          The corresponding SQL might look like{" "}
          <code>SELECT * FROM posts LIMIT 5 OFFSET 10;</code>, adjusting based
          on the page requested.
        </p>
        <p>Pros of offset pagination include:</p>
        <ul>
          <li>It allows users to navigate directly to a desired page.</li>
          <li>It clearly indicates the total page count.</li>
          <li>
            Backend implementation is straightforward, using a simple
            calculation: <code>(page - 1) * size</code>.
          </li>
          <li>It's adaptable across various database systems.</li>
        </ul>
        <p>Cons, however, feature notable drawbacks:</p>
        <ul>
          <li>
            <strong>Inaccurate Page Results:</strong> Frequent data updates can
            lead to page content shifting, potentially causing users to see
            duplicate records if newer records are added between page views.
          </li>
          <li>
            <strong>Fixed Page Size:</strong> Adjusting the page size in
            subsequent requests can lead to missed records, as the offset is
            tied to the initial page size.
          </li>
          <li>
            <strong>Performance Issues:</strong> For large datasets, as the
            offset increases, performance can significantly decrease, affecting
            query speed and efficiency.
          </li>
        </ul>
        <p>
          Despite these challenges, offset-based pagination is widely used in
          scenarios where users expect to navigate directly to specific pages,
          such as in blogs, e-commerce sites, and search results pages.
        </p>
      </>
    ),
  },
  {
    question: "What is cursor-based pagination?",
    answer: (
      <>
        <p>
          Cursor-based pagination utilizes a cursor as a reference point to
          navigate through a dataset. Unlike traditional methods that request a
          specific range of items by their position, cursor-based pagination
          works by saying, "Give me a set number of items starting after this
          specific item."
        </p>
        <p>
          The cursor typically represents a unique attribute of a dataset item,
          such as an ID or timestamp, serving as the pivot for subsequent data
          fetches. This approach enables queries like:
        </p>
        <Highlight language="sql">
          {`SELECT * FROM table WHERE id > cursor LIMIT 5;`}
        </Highlight>
        <p>This method expects parameters like:</p>
        <ul>
          <li>
            <strong>size:</strong> the number of results per page,
          </li>
          <li>
            <strong>cursor:</strong> the identifier for the point to start
            fetching items from.
          </li>
        </ul>
        <Highlight language="javascript">
          {`{
  "pagination": {
    "size": 10,
    "next_cursor": "=dXNlcjpVMEc5V0ZYTlo"
  },
  "results": [...]
}`}
        </Highlight>
        <p>Advantages include:</p>
        <ul>
          <li>
            Enhanced efficiency and speed, especially with large datasets.
          </li>
          <li>
            Mitigation of issues related to data shifting over time, making it
            ideal for real-time data feeds.
          </li>
        </ul>
        <p>However, there are downsides:</p>
        <ul>
          <li>
            Clients can't directly access a specific page without sequential
            navigation.
          </li>
          <li>
            It can be more complex to implement and requires a unique,
            sequential identifier.
          </li>
        </ul>
        <p>
          Due to these properties, platforms like Facebook, Slack, and Zendesk
          prefer cursor-based pagination for their APIs, especially when
          consistent data flow and integrity are crucial.
        </p>
      </>
    ),
  },
  {
    question:
      "What challenges do RESTful APIs face in terms of over-fetching and under-fetching data?",
    answer: (
      <>
        <p>
          RESTful APIs often face challenges related to over-fetching and
          under-fetching data:
        </p>
        <ul>
          <li>
            <strong>Over-fetching:</strong> Retrieving more data than needed for
            a specific use case, resulting in unnecessary bandwidth consumption
            and increased response times.
          </li>
          <li>
            <strong>Under-fetching:</strong> Not retrieving enough data in a
            single request, leading to multiple roundtrips to the server and
            decreased performance.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How does GraphQL address the issues of over-fetching and under-fetching found in RESTful APIs?",
    answer: (
      <>
        <p>
          GraphQL addresses the issues of over-fetching and under-fetching by
          allowing clients to request only the data they need. With GraphQL,
          clients can specify the exact shape and structure of the response,
          reducing the amount of data transferred over the network and improving
          performance.
        </p>
      </>
    ),
  },
  {
    question: "Describe the role of queries and mutations in GraphQL.",
    answer: (
      <>
        <p>
          In GraphQL, queries are used to retrieve data from the server, while
          mutations are used to modify or create data. Queries resemble JSON
          objects and specify the fields and nested relationships of the data to
          be retrieved. Mutations allow clients to perform operations such as
          creating, updating, or deleting data on the server.
        </p>
      </>
    ),
  },
  {
    question:
      "What is gRPC, and how does it differ from REST and GraphQL in terms of communication and data format?",
    answer: (
      <>
        <p>
          gRPC is a high-performance RPC (Remote Procedure Call) framework
          developed by Google. It differs from REST and GraphQL in terms of
          communication and data format:
        </p>
        <ul>
          <li>
            <strong>Communication:</strong> gRPC uses HTTP/2 for communication,
            enabling bidirectional streaming and efficient multiplexing of
            requests and responses. REST and GraphQL typically use HTTP/1.1 or
            HTTP/2 for communication.
          </li>
          <li>
            <strong>Data format:</strong> gRPC uses protocol buffers (protobuf)
            for data serialization, which is more compact and efficient than
            JSON used in REST and GraphQL. Protocol buffers offer strong typing,
            backward compatibility, and automatic code generation for multiple
            programming languages.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What is the significance of HTTP/2 in the context of gRPC and its performance benefits?",
    answer: (
      <>
        <p>
          HTTP/2 significantly improves the performance of gRPC by introducing
          features like multiplexing, header compression, and server push.
        </p>
        <p>
          Multiplexing allows multiple requests and responses to be sent and
          received in parallel over a single connection, reducing latency and
          improving throughput.
        </p>
        <p>
          Header compression reduces overhead by compressing header fields,
          resulting in smaller header sizes and faster transmission.
        </p>
        <p>
          Server push enables servers to send additional resources to clients
          without waiting for a request, further improving performance by
          reducing round-trip times.
        </p>
      </>
    ),
  },
  {
    question:
      "How do Web Sockets differ from traditional HTTP communication, and in what scenarios might they be preferred?",
    answer: (
      <>
        <p>
          Web Sockets provide full-duplex communication channels over a single,
          long-lived TCP connection, allowing real-time, low-latency data
          exchange between clients and servers.
        </p>
        <p>
          Unlike traditional HTTP communication, which follows a
          request-response model and requires a new connection for each request,
          Web Sockets maintain a persistent connection, enabling bi-directional
          communication.
        </p>
        <p>
          Web Sockets are preferred in scenarios requiring real-time updates,
          such as chat applications, online gaming, and financial trading
          platforms, where instant communication and data synchronization are
          crucial.
        </p>
      </>
    ),
  },
  {
    question:
      "Discuss the concept of streaming in gRPC and its comparison to Web Sockets.",
    answer: (
      <>
        <p>
          Streaming in gRPC allows clients and servers to establish long-lived
          connections for bi-directional streaming of data. It supports both
          unary (single request, single response) and bidirectional (multiple
          requests and responses) streaming.
        </p>
        <p>
          Unlike Web Sockets, which operate at the transport layer, gRPC
          streaming is built on top of HTTP/2, leveraging its features such as
          multiplexing and header compression.
        </p>
        <p>
          While Web Sockets provide a generic, low-level protocol for real-time
          communication, gRPC offers a higher-level, protocol-buffer-based API,
          making it more suitable for structured data exchange and
          interoperability between different programming languages.
        </p>
      </>
    ),
  },
  {
    question:
      "Considering modern web applications, how would you choose between REST, GraphQL, and gRPC for a new project?",
    answer: (
      <>
        <p>
          The choice between REST, GraphQL, and gRPC depends on various factors
          such as project requirements, team expertise, performance
          considerations, and scalability needs.
        </p>
        <p>
          REST is a well-established, standardized architectural style suitable
          for simple, resource-based APIs with predefined endpoints. It's ideal
          for scenarios where caching, statelessness, and compatibility with
          existing systems are essential.
        </p>
        <p>
          GraphQL offers a flexible, query-based approach to data fetching,
          allowing clients to request precisely the data they need. It's
          suitable for complex, data-driven applications with diverse client
          requirements, enabling efficient data retrieval and minimizing
          over-fetching and under-fetching issues.
        </p>
        <p>
          gRPC provides high-performance, strongly-typed communication between
          services using protocol buffers. It's best suited for microservices
          architectures and internal service-to-service communication, where low
          latency, efficient serialization, and language-agnostic interfaces are
          critical.
        </p>
        <p>
          Ultimately, the decision should be based on a thorough evaluation of
          the project's technical requirements, performance objectives, and
          long-term maintainability.
        </p>
      </>
    ),
  },
];

const API = () => {
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
        <QuestionsWrapper
          storageKey="api"
          questions={generalQuestionsAndAnswers}
        />
      </div>
    </>
  );
};

export default API;
