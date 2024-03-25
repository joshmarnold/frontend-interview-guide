import QuestionsWrapper from "../../shared/QuestionsWrapper";

const generalQuestionsAndAnswers = [
  {
    question: "What happens when I type 'google.com' in the browser?",
    answer: (
      <div>
        <p>
          When you type 'google.com' in the browser and press enter, several
          steps occur to load the webpage:
        </p>
        <ol>
          <li>
            The browser checks its own cache to see if it has the IP address for
            'google.com'. If not, it proceeds to the next step.
          </li>
          <li>
            The browser initiates a DNS (Domain Name System) lookup to resolve
            the domain name 'google.com' to an IP address.
          </li>
          <li>
            Once the IP address is obtained, the browser establishes a TCP
            (Transmission Control Protocol) connection with the server hosting
            the website.
          </li>
          <li>
            After the connection is established, the browser sends an HTTP
            (Hypertext Transfer Protocol) request to the server for the webpage.
          </li>
          <li>
            The server processes the request and sends back an HTTP response
            containing the requested webpage's HTML, CSS, JavaScript, and other
            resources.
          </li>
          <li>
            The browser then renders the received content, displaying the Google
            homepage on your screen.
          </li>
        </ol>
      </div>
    ),
  },
  {
    question:
      "What does the browser do when it gets the files back from the server?",
    answer: (
      <div>
        <p>
          When the browser receives the files back from the server, it performs
          the following actions:
        </p>
        <ol>
          <li>
            It parses the received HTML to construct the Document Object Model
            (DOM), representing the structure of the webpage.
          </li>
          <li>
            It parses and applies the received CSS styles to the corresponding
            elements, creating the render tree.
          </li>
          <li>
            It executes any JavaScript code included in the webpage, which may
            manipulate the DOM, handle user interactions, or fetch additional
            resources.
          </li>
          <li>
            It fetches additional resources referenced in the HTML, such as
            images, fonts, or scripts, and begins loading them concurrently.
          </li>
          <li>
            As resources are loaded, the browser progressively renders the
            webpage, displaying content to the user as it becomes available.
          </li>
          <li>
            Throughout this process, the browser may also cache resources for
            future use, optimizing performance for subsequent visits to the same
            webpage.
          </li>
        </ol>
      </div>
    ),
  },
  {
    question: "What is an IP (Internet Protocol):",
    answer: (
      <p>
        Responsible for routing packets of data from the source to the
        destination across diverse networks, using IP addresses for identifying
        sending and receiving devices.
      </p>
    ),
  },
  {
    question: "What is TCP (Transmission Control Protocol):",
    answer: (
      <p>
        Ensures the reliable and ordered delivery of a data stream between
        applications running on hosts communicating over an IP network.
      </p>
    ),
  },
  {
    question: "What is the role of IP in networking?",
    answer: (
      <p>
        IP (Internet Protocol) is responsible for addressing and routing packets
        of data so that they can travel across networks and arrive at the
        correct destination.
      </p>
    ),
  },
  {
    question: "What are the basic differences between TCP and UDP?",
    answer: (
      <p>
        TCP (Transmission Control Protocol) provides reliable, ordered, and
        error-checked delivery of data between applications, while UDP (User
        Datagram Protocol) is faster but does not guarantee delivery, order, or
        error checking.
      </p>
    ),
  },
  {
    question: "Why is HTTP typically used with TCP instead of UDP?",
    answer: (
      <p>
        HTTP (Hypertext Transfer Protocol) is used with TCP because web
        applications require the reliable data transfer that TCP offers,
        ensuring that web pages load correctly without missing or out-of-order
        elements.
      </p>
    ),
  },
  {
    question: "What are the different versions of HTTP and their key features?",
    answer: (
      <div>
        <p>
          HTTP (Hypertext Transfer Protocol) has evolved through several
          versions:
        </p>
        <ul>
          <li>
            <strong>HTTP/0.9 (1991):</strong> The first version, simple and
            limited to GET requests for retrieving HTML documents.
          </li>
          <li>
            <strong>HTTP/1.0 (1996):</strong> Introduced headers, additional
            methods like POST, and status codes.
          </li>
          <li>
            <strong>HTTP/1.1 (1997, updated in 1999):</strong> Added
            (keep-alive) persistent connections, chunked transfer encoding, and
            more methods and status codes for enhanced control.
          </li>
          <li>
            <strong>HTTP/2 (2015):</strong> Brought binary framing,
            multiplexing, header compression, and server push, significantly
            improving efficiency and performance.
          </li>
          <li>
            <strong>HTTP/3 (2022):</strong> Utilizes QUIC (Quick UDP Internet
            Connections) to reduce latency, improve security, and overcome
            limitations of previous versions.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are keep-alive connections in HTTP?",
    answer: (
      <div>
        <p>
          Keep-alive connections are a feature of the HTTP protocol that allow
          multiple requests and responses to be sent over a single TCP
          connection without having to open a new one for each transaction. This
          feature significantly improves the efficiency of network communication
          between clients and servers by:
        </p>
        <ul>
          <li>
            Reducing the overhead and latency associated with establishing new
            connections.
          </li>
          <li>Decreasing the amount of CPU and memory usage on the server.</li>
          <li>Allowing for faster loading times for webpages and resources.</li>
        </ul>
        <p>
          Introduced in HTTP/1.1, keep-alive connections are enabled by default,
          leveraging the <code>Connection: keep-alive</code> header to inform
          the server that the client wishes to maintain the connection open for
          additional requests.
        </p>
      </div>
    ),
  },
  {
    question: "What is binary framing in HTTP/2?",
    answer: (
      <div>
        <p>
          Binary framing in HTTP/2 refers to the way data is packaged and
          transported between the client and server. Unlike the text-based
          format of HTTP/1.x, HTTP/2 uses a binary protocol that divides data
          into smaller, manageable frames. This change allows for more efficient
          parsing, reduced latency, and improved network utilization, as well as
          enabling other HTTP/2 features like multiplexing and stream
          prioritization.
        </p>
      </div>
    ),
  },
  {
    question: "What is multiplexing in HTTP/2?",
    answer: (
      <div>
        <p>
          Multiplexing is a feature of HTTP/2 that allows multiple requests and
          responses to be sent concurrently over a single TCP connection. This
          solves the HTTP/1.x issue of head-of-line blocking, where the
          request-response cycle had to be completed before a new one could
          begin, significantly improving the efficiency and speed of data
          transfer.
        </p>
      </div>
    ),
  },
  {
    question: "How does header compression work in HTTP/2?",
    answer: (
      <div>
        <p>
          Header compression in HTTP/2, implemented via HPACK, reduces the size
          of the headers for HTTP requests and responses. By compressing
          headers, HTTP/2 minimizes the overall amount of data transmitted
          between client and server, thus reducing latency and improving page
          load times, especially in environments with constrained bandwidth.
        </p>
      </div>
    ),
  },
  {
    question: "What is server push in HTTP/2?",
    answer: (
      <div>
        <p>
          Server push in HTTP/2 allows a server to proactively send resources to
          a client before the client requests them. By predicting the resources
          a client will need (such as CSS and JavaScript files) and sending them
          in advance, server push aims to further reduce loading times for
          webpages, enhancing the user experience.
        </p>
      </div>
    ),
  },
  {
    question:
      "Can you give an example of when you might use UDP in application development?",
    answer: (
      <p>
        UDP is useful for applications where speed is crucial and some loss of
        data is acceptable, such as live video streaming or multiplayer online
        games.
      </p>
    ),
  },
  {
    question: "What does DNS stand for, and what is its primary function?",
    answer: (
      <p>
        DNS stands for Domain Name System, which primarily functions to
        translate human-readable website names into numerical IP addresses,
        facilitating the location of internet resources.
      </p>
    ),
  },
  {
    question:
      "Who is responsible for the overall coordination and operation of domain names within DNS?",
    answer: (
      <p>
        ICANN (Internet Corporation for Assigned Names and Numbers) is
        responsible for the global coordination and operational integrity of
        domain names within the DNS framework.
      </p>
    ),
  },
  {
    question:
      "What is the difference between ICANN and Domain Name Registrars?",
    answer: (
      <p>
        ICANN oversees the internet's overall infrastructure, while Domain Name
        Registrars, certified by ICANN, provide services for registering domain
        names to individuals and organizations.
      </p>
    ),
  },
  {
    question:
      "What type of DNS record associates a domain name with an IPv4 address?",
    answer: (
      <p>
        The A (Address) record is the type of DNS record that directly
        associates a domain name with its corresponding IPv4 address.
      </p>
    ),
  },
  {
    question:
      "When a URL starts with HTTPS, what does the 'S' stand for, and why is it important?",
    answer: (
      <p>
        The 'S' in HTTPS stands for Secure, signifying that the web browser to
        server connection is encrypted, which is vital for protecting user data
        and ensuring secure communications.
      </p>
    ),
  },
  {
    question:
      "What is the main difference between FTP and SSH protocols as indicated by their URL schemes?",
    answer: (
      <p>
        FTP, used for file transfers on remote servers, differs from SSH, which
        provides secure remote server or computer connections, as highlighted by
        their respective URL schemes.
      </p>
    ),
  },
  {
    question:
      "In a domain name, what does the top-level domain (TLD) represent? Give an example.",
    answer: (
      <p>
        The top-level domain (TLD) categorizes websites into distinct groups or
        purposes, such as ".com" for commercial entities, illustrating the
        nature of the website.
      </p>
    ),
  },
  {
    question:
      "How does specifying a port in a URL differ from the standard HTTP or HTTPS connection? Provide an example.",
    answer: (
      <p>
        Specifying a port in a URL, like <strong>localhost:8080</strong>,
        directs the connection to a specific server port, diverging from
        standard ports used by HTTP or HTTPS.
      </p>
    ),
  },
];

const Networking = () => {
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
          storageKey="networking"
          questions={generalQuestionsAndAnswers}
        />
      </div>
      <br></br>
    </>
  );
};

export default Networking;
