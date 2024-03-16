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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Networking;
