import QuestionsWrapper from "../../shared/QuestionsWrapper";

const securityQuestions = [
  {
    question: "What is Cross-Site Scripting (XSS) and how can you prevent it?",
    answer: (
      <>
        <p>
          Cross-Site Scripting (XSS) is a type of security vulnerability that
          allows an attacker to inject malicious scripts into web pages viewed
          by other users. It occurs when user input is not properly validated or
          sanitized before being rendered in the browser. To prevent XSS, you
          should:
        </p>
        <ul>
          <li>
            Validate and sanitize user input on the server-side before storing
            or using it.
          </li>
          <li>
            Encode or escape user-generated content when rendering it in HTML,
            especially in contexts like script tags, attributes, or inline
            styles.
          </li>
          <li>
            Use appropriate security libraries or frameworks that provide
            built-in XSS protection.
          </li>
          <li>
            Implement Content Security Policy (CSP) to restrict the sources of
            executable scripts.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What is Content Security Policy (CSP) and how does it enhance security?",
    answer: (
      <>
        <p>
          Content Security Policy (CSP) is a security mechanism that allows
          website owners to declare and enforce a set of rules specifying the
          sources of content that a browser is allowed to load and execute. CSP
          enhances security by:
        </p>
        <ul>
          <li>
            Mitigating XSS attacks by restricting the sources of executable
            scripts and other resources.
          </li>
          <li>
            Preventing unauthorized data leakage by specifying allowed
            destinations for form submissions and AJAX requests.
          </li>
          <li>
            Controlling the loading of resources like images, stylesheets, and
            fonts from specific sources.
          </li>
          <li>
            Enforcing secure communication by specifying the allowed protocols
            (e.g., HTTPS) for resource loading.
          </li>
        </ul>
        <p>
          CSP is implemented by setting the <code>Content-Security-Policy</code>{" "}
          HTTP header or using a <code>&lt;meta&gt;</code> tag in the HTML
          document.
        </p>
      </>
    ),
  },
  {
    question: "How can you prevent Cross-Site Request Forgery (CSRF) attacks?",
    answer: (
      <>
        <p>
          Cross-Site Request Forgery (CSRF) is an attack that tricks a user into
          performing unwanted actions on a web application they are
          authenticated in. To prevent CSRF attacks, you can implement the
          following measures:
        </p>
        <ul>
          <li>
            Use anti-CSRF tokens: Include a unique, random token in each form or
            request that modifies state on the server. Verify the token on the
            server-side before processing the request.
          </li>
          <li>
            Implement the SameSite attribute for cookies: Set the{" "}
            <code>SameSite</code> attribute to <code>Strict</code> or{" "}
            <code>Lax</code> to restrict cookie access from different sites.
          </li>
          <li>
            Use the <code>Referer</code> or <code>Origin</code> header: Check
            the <code>Referer</code> or <code>Origin</code> header on the
            server-side to ensure that the request originates from the expected
            source.
          </li>
          <li>
            Implement user interaction-based CSRF protection: Require user
            interaction, such as re-authentication or a confirmation step, for
            sensitive actions.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is input validation and why is it important?",
    answer: (
      <>
        <p>
          Input validation is the process of verifying and sanitizing user input
          before using it in application logic or storing it in a database. It
          is important for several reasons:
        </p>
        <ul>
          <li>
            Preventing security vulnerabilities: Input validation helps mitigate
            risks such as XSS attacks, SQL injection, and other code injection
            vulnerabilities.
          </li>
          <li>
            Ensuring data integrity: Validating input ensures that the data
            received from users conforms to the expected format and constraints.
          </li>
          <li>
            Improving user experience: Providing meaningful feedback to users
            about invalid input helps them correct mistakes and reduces
            frustration.
          </li>
          <li>
            Protecting against malicious users: Input validation acts as a first
            line of defense against malicious attempts to exploit the
            application.
          </li>
        </ul>
        <p>
          Input validation should be performed on both the client-side (for
          immediate feedback) and the server-side (for security and data
          integrity).
        </p>
      </>
    ),
  },
  {
    question: "What are some common client-side security best practices?",
    answer: (
      <>
        <p>Here are some common client-side security best practices:</p>
        <ul>
          <li>
            Keep libraries and frameworks up to date: Regularly update your
            frontend dependencies to ensure you have the latest security
            patches.
          </li>
          <li>
            Validate and sanitize user input: Implement client-side input
            validation and sanitization to prevent XSS and other injection
            attacks.
          </li>
          <li>
            Use HTTPS: Serve your web application over HTTPS to encrypt data in
            transit and protect against man-in-the-middle attacks.
          </li>
          <li>
            Implement Content Security Policy (CSP): Use CSP to specify allowed
            sources of content and restrict the execution of untrusted scripts.
          </li>
          <li>
            Use secure and HttpOnly cookies: Set the <code>Secure</code> and{" "}
            <code>HttpOnly</code> flags on cookies to ensure they are only sent
            over HTTPS and are not accessible via JavaScript.
          </li>
          <li>
            Avoid exposing sensitive information: Do not include sensitive data
            like API keys, passwords, or personal information in client-side
            code or storage.
          </li>
          <li>
            Implement proper access controls: Ensure that client-side access
            controls align with server-side access controls to prevent
            unauthorized access.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What is the difference between authentication and authorization?",
    answer: (
      <>
        <p>
          Authentication and authorization are two crucial concepts in security:
        </p>
        <ul>
          <li>
            <strong>Authentication</strong> is the process of verifying the
            identity of a user or entity. It ensures that the user is who they
            claim to be. Common authentication methods include usernames and
            passwords, biometric data, or security tokens.
          </li>
          <li>
            <strong>Authorization</strong> is the process of granting or denying
            access to specific resources or actions based on the authenticated
            user's privileges. It determines what the user is allowed to do or
            access within the system.
          </li>
        </ul>
        <p>
          In summary, authentication confirms the user's identity, while
          authorization controls their access rights based on their
          authenticated identity.
        </p>
      </>
    ),
  },
  {
    question: "What is the purpose of encryption in security?",
    answer: (
      <>
        <p>
          Encryption is a fundamental technique used in security to protect
          sensitive data. Its purpose is to ensure confidentiality, integrity,
          and authenticity of information. The main objectives of encryption
          are:
        </p>
        <ol>
          <li>
            <strong>Confidentiality</strong>: Encryption scrambles the data into
            an unreadable format, making it unintelligible to unauthorized
            parties. Only authorized individuals with the decryption key can
            convert the encrypted data back into its original form.
          </li>
          <li>
            <strong>Integrity</strong>: Encryption helps detect any tampering or
            modification of the encrypted data. If the encrypted data is
            altered, it will not decrypt correctly, indicating that the data has
            been compromised.
          </li>
          <li>
            <strong>Authenticity</strong>: Encryption can be used to verify the
            authenticity of the data origin. Digital signatures, which are based
            on encryption, can prove that the data originated from a trusted
            source and has not been tampered with.
          </li>
        </ol>
        <p>
          Encryption is essential for protecting sensitive information during
          storage and transmission, ensuring that only authorized parties can
          access and use the data as intended.
        </p>
      </>
    ),
  },
  {
    question: "How can you protect against Denial-of-Service (DoS) attacks?",
    answer: (
      <ul>
        <li>
          Implement rate limiting to prevent excessive requests from a single
          source.
        </li>
        <li>
          Use a web application firewall (WAF) to filter and block malicious
          traffic.
        </li>
        <li>
          Implement CAPTCHAs or other challenge-response mechanisms to prevent
          automated attacks.
        </li>
        <li>
          Monitor and analyze traffic patterns to detect and respond to DoS
          attacks promptly.
        </li>
      </ul>
    ),
  },
  {
    question:
      "What are some security considerations for handling file uploads?",
    answer: (
      <ul>
        <li>
          Validate and sanitize file names and extensions to prevent directory
          traversal and execution of malicious files.
        </li>
        <li>
          Limit the size and type of files that can be uploaded to prevent
          resource exhaustion and unauthorized file types.
        </li>
        <li>
          Scan uploaded files for malware or malicious content using antivirus
          software or file scanning services.
        </li>
        <li>
          Store uploaded files in a separate directory with limited permissions
          to prevent unauthorized access.
        </li>
      </ul>
    ),
  },
];

const Security = () => {
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
        <QuestionsWrapper storageKey="Security" questions={securityQuestions} />
      </div>
    </>
  );
};

export default Security;
