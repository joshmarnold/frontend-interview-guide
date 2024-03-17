import React, { useState } from "react";
import QuestionsWrapper from "../../shared/QuestionsWrapper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel, { a11yProps } from "../../shared/CustomTabPanel";

const frontendCaching = [
  {
    question: "What is browser caching and how does it work?",
    answer: (
      <p>
        Browser caching is a technique where a web browser stores resources
        (such as HTML, CSS, JavaScript, images) locally on the client's machine.
        When a user visits a website, the browser downloads and caches these
        resources. On subsequent visits or page loads, the browser can retrieve
        the cached resources instead of downloading them again from the server.
        This improves performance by reducing network requests and loading
        times.
      </p>
    ),
  },
  {
    question: "What are the different types of browser caching?",
    answer: (
      <ul>
        <li>
          HTTP Caching: Caching based on HTTP headers such as{" "}
          <code>Cache-Control</code>, <code>Expires</code>, and{" "}
          <code>ETag</code>.
        </li>
        <li>
          Application Caching (AppCache): Allows web applications to cache
          resources for offline access. (Deprecated)
        </li>
        <li>
          Service Worker Caching: Enables fine-grained control over caching and
          offline functionality using service workers.
        </li>
        <li>
          Local Storage and Session Storage: Client-side key-value storage
          mechanisms for caching data.
        </li>
      </ul>
    ),
  },
  {
    question: "How can you control browser caching using HTTP headers?",
    answer: (
      <ul>
        <li>
          <code>Cache-Control</code>: Specifies caching directives for both
          requests and responses (e.g., <code>max-age</code>,{" "}
          <code>no-cache</code>, <code>no-store</code>).
        </li>
        <li>
          <code>Expires</code>: Indicates when a resource should be considered
          stale and re-fetched from the server.
        </li>
        <li>
          <code>ETag</code>: Provides a unique identifier for a resource,
          allowing conditional requests and validation.
        </li>
        <li>
          <code>Last-Modified</code>: Indicates the last modification timestamp
          of a resource.
        </li>
      </ul>
    ),
  },
  {
    question: "What is application-level caching in the frontend?",
    answer: (
      <p>
        Application-level caching in the frontend refers to caching data, API
        responses, or rendered components within the application code itself. It
        involves storing data in memory, local storage, or other client-side
        storage mechanisms to avoid unnecessary network requests and improve
        performance. Application-level caching is implemented and controlled by
        the developer using JavaScript code and frameworks.
      </p>
    ),
  },
  {
    question: "How can you implement caching in a frontend application?",
    answer: (
      <ul>
        <li>
          In-Memory Caching: Store data in variables or data structures within
          the application's memory.
        </li>
        <li>
          Local Storage or Session Storage: Use the browser's storage APIs to
          store key-value pairs.
        </li>
        <li>
          Service Workers: Intercept network requests and cache responses for
          offline access and performance optimization.
        </li>
        <li>
          Caching Libraries: Use libraries like <code>axios-cache-adapter</code>{" "}
          or <code>react-query</code> that provide caching functionality.
        </li>
      </ul>
    ),
  },
  {
    question:
      "What are localStorage, sessionStorage, and cookies, and how do they differ?",
    answer: (
      <>
        <p>
          <strong>localStorage</strong>, <strong>sessionStorage</strong>, and{" "}
          <strong>cookies</strong> are all mechanisms used for storing data on
          the client-side in web applications, but they have some key
          differences:
        </p>
        <ol>
          <li>
            <strong>localStorage</strong>:
            <ul>
              <li>
                localStorage is a web storage object that allows data to be
                stored in the browser.
              </li>
              <li>
                Data stored in localStorage persists even after the browser is
                closed and reopened.
              </li>
              <li>
                It provides a larger storage capacity (typically around 5-10MB)
                compared to cookies.
              </li>
              <li>
                Data stored in localStorage is not automatically sent to the
                server with each request.
              </li>
              <li>
                It is useful for storing data that needs to be persisted across
                sessions, such as user preferences or cached data.
              </li>
            </ul>
          </li>
          <li>
            <strong>sessionStorage</strong>:
            <ul>
              <li>
                sessionStorage is similar to localStorage but has a shorter
                lifespan.
              </li>
              <li>
                Data stored in sessionStorage is specific to the current browser
                session and is cleared when the session ends (i.e., when the
                browser is closed).
              </li>
              <li>It provides the same storage capacity as localStorage.</li>
              <li>
                It is useful for storing temporary data that is specific to a
                single session, such as user authentication tokens or form data.
              </li>
            </ul>
          </li>
          <li>
            <strong>Cookies</strong>:
            <ul>
              <li>
                Cookies are small text files that are stored on the client's
                device by websites.
              </li>
              <li>
                They have a smaller storage capacity (typically around 4KB)
                compared to localStorage and sessionStorage.
              </li>
              <li>
                Cookies are automatically sent to the server with each HTTP
                request, allowing the server to read and modify cookie data. But
                it's important to note that cookies are only sent to same origin
                requests. Meaning, if a cookie is set by a website, it will only
                be sent to that website.
              </li>
              <li>
                They have an expiration date and can be set to expire after a
                specific time or when the browser session ends.
              </li>
              <li>
                Cookies are commonly used for user authentication, session
                management, and tracking user preferences or behaviors.
              </li>
            </ul>
          </li>
        </ol>
        <p>
          In summary, localStorage and sessionStorage provide larger client-side
          storage capacity and are not automatically sent to the server, while
          cookies have a smaller capacity but are sent with each request.
          localStorage persists data across sessions, sessionStorage is cleared
          when the session ends, and cookies have configurable expiration dates
          and are often used for user-specific data and server-side
          communication.
        </p>
      </>
    ),
  },
  {
    question:
      "What are different caching strategies (e.g., cache-first, network-first)?",
    answer: (
      <ul>
        <li>
          Cache First: Check the cache first and serve cached content if
          available. If not found, fetch from the network and update the cache.
        </li>
        <li>
          Network First: Fetch from the network first and update the cache. If
          the network fails, serve from the cache as a fallback.
        </li>
        <li>
          Stale While Revalidate: Serve cached content immediately, but also
          fetch from the network to update the cache in the background.
        </li>
        <li>
          Network Only: Always fetch from the network and do not cache the
          response.
        </li>
        <li>
          Cache Only: Serve only from the cache and do not fetch from the
          network.
        </li>
      </ul>
    ),
  },
  {
    question: "When would you use each caching strategy?",
    answer: (
      <ul>
        <li>
          Cache First: Suitable for static assets that rarely change, such as
          images, CSS, or JavaScript files.
        </li>
        <li>
          Network First: Useful for frequently updated or dynamic content that
          requires the latest data.
        </li>
        <li>
          Stale While Revalidate: Beneficial for content that can tolerate
          slight staleness but needs to be updated in the background.
        </li>
        <li>
          Network Only: Appropriate for real-time or sensitive data that should
          always be fetched from the server.
        </li>
        <li>
          Cache Only: Used for offline scenarios or when serving content that is
          guaranteed to be available in the cache.
        </li>
      </ul>
    ),
  },
];

const backendCaching = [
  {
    question: "What is server-side caching and why is it important?",
    answer: (
      <>
        <p>
          Server-side caching refers to the technique of storing frequently
          accessed data or the result of expensive computations in memory on the
          server. It is important for several reasons:
        </p>
        <ul>
          <li>
            Improved Performance: By caching data on the server, subsequent
            requests for the same data can be served from the cache instead of
            being retrieved from the original source (e.g., database), reducing
            response times and improving overall application performance.
          </li>
          <li>
            Reduced Load on Backend Systems: Caching helps to alleviate the load
            on backend systems, such as databases or external APIs, by reducing
            the number of requests made to them. This can prevent overloading
            and improve scalability.
          </li>
          <li>
            Increased Throughput: With caching, the server can handle a higher
            number of requests per second, as it can serve cached responses
            quickly without the need for expensive computations or I/O
            operations.
          </li>
          <li>
            Better User Experience: Faster response times resulting from caching
            lead to a better user experience, as users can access the requested
            data more quickly.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What are some common server-side caching techniques?",
    answer: (
      <>
        <p>There are several common server-side caching techniques:</p>
        <ol>
          <li>
            <strong>In-Memory Caching:</strong> This involves storing data in
            the server's RAM. It is the fastest form of caching but is limited
            by the available memory on the server. Examples include caching
            frequently accessed objects, query results, or rendered HTML pages.
          </li>
          <li>
            <strong>Database Query Result Caching:</strong> Database queries
            that are expensive to execute can be cached to avoid repeated
            execution. The query results are stored in memory or on disk, and
            subsequent requests for the same query can be served from the cache.
          </li>
          <li>
            <strong>HTTP Caching:</strong> HTTP caching involves caching
            responses at the web server level. The server can set caching
            headers (e.g., <code>Cache-Control</code>, <code>Expires</code>) to
            instruct clients or intermediate caches to store and reuse
            responses, reducing the load on the server.
          </li>
          <li>
            <strong>Content Delivery Network (CDN) Caching:</strong> CDNs are
            distributed networks of servers that cache static assets (e.g.,
            images, CSS, JavaScript files) closer to the end-users. By serving
            content from a nearby CDN server, the load on the origin server is
            reduced, and the content delivery latency is minimized.
          </li>
          <li>
            <strong>Application-Level Caching:</strong> Application-level
            caching involves caching data within the application code itself.
            This can include caching the results of expensive computations, API
            responses, or rendered views. Frameworks like Redis or Memcached are
            commonly used for application-level caching.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "What are cache eviction policies?",
    answer: (
      <>
        <p>
          Cache eviction policies determine how and when data is removed from
          the cache to make room for new data. Some common cache eviction
          policies are:
        </p>
        <ul>
          <li>
            Least Recently Used (LRU): Removes the least recently accessed or
            used items first.
          </li>
          <li>
            Least Frequently Used (LFU): Removes the least frequently accessed
            or used items first.
          </li>
          <li>
            First In, First Out (FIFO): Removes the oldest items first, based on
            the order they were added to the cache.
          </li>
          <li>
            Time-based Expiration: Removes items based on a predefined
            expiration time or time-to-live (TTL).
          </li>
          <li>
            Randomized Eviction: Randomly selects items to be removed from the
            cache.
          </li>
        </ul>
        <p>
          The choice of cache eviction policy depends on the specific
          requirements of the application, such as the access patterns, data
          freshness needs, and cache size constraints.
        </p>
      </>
    ),
  },
  {
    question: "How do you ensure data consistency when using caching?",
    answer: (
      <>
        <p>
          Ensuring data consistency is crucial when using caching to avoid
          serving stale or outdated data to users. Here are a few strategies to
          maintain data consistency:
        </p>
        <ol>
          <li>
            <strong>Cache Invalidation:</strong> Invalidate or remove the cached
            data when the corresponding data in the primary data source (e.g.,
            database) is updated. This ensures that the cache always serves the
            most up-to-date data.
          </li>
          <li>
            <strong>Time-to-Live (TTL):</strong> Set a TTL for cached data to
            automatically expire and remove it from the cache after a specified
            time. This helps to regularly refresh the cache with the latest data
            from the primary data source.
          </li>
          <li>
            <strong>Cache Synchronization:</strong> Implement a mechanism to
            synchronize the cache with the primary data source. When data is
            updated in the primary source, trigger an update or invalidation of
            the corresponding cached data.
          </li>
          <li>
            <strong>Versioning:</strong> Include versioning information with the
            cached data. When the primary data source is updated, increment the
            version. Clients can compare the version of the cached data with the
            latest version to determine if they need to fetch the updated data.
          </li>
          <li>
            <strong>Read-through and Write-through Caching:</strong> With
            read-through caching, the cache automatically fetches the data from
            the primary data source if it's not found in the cache.
            Write-through caching ensures that any write operations are
            performed on both the cache and the primary data source
            simultaneously.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "What are some popular caching frameworks or libraries?",
    answer: (
      <>
        <p>
          There are several popular caching frameworks and libraries used in
          backend development:
        </p>
        <ul>
          <li>
            <strong>Redis:</strong> An open-source, in-memory data store that
            supports various data structures and can be used as a cache, message
            broker, and database.
          </li>
          <li>
            <strong>Memcached:</strong> A distributed memory caching system that
            provides high performance and scalability for caching key-value
            pairs.
          </li>
          <li>
            <strong>Ehcache:</strong> A Java-based caching framework that offers
            in-memory and disk-based caching, distributed caching, and cache
            management features.
          </li>
          <li>
            <strong>Varnish:</strong> An HTTP accelerator and reverse proxy that
            can cache and serve web content quickly, reducing the load on
            backend servers.
          </li>
          <li>
            <strong>Nginx:</strong> A web server and reverse proxy that includes
            caching capabilities, allowing it to serve static content and cached
            responses efficiently.
          </li>
          <li>
            <strong>Hazelcast:</strong> An open-source, in-memory data grid and
            caching platform that provides distributed caching and data
            processing capabilities.
          </li>
          <li>
            <strong>Amazon ElastiCache:</strong> A fully managed caching service
            provided by AWS that supports both Memcached and Redis, offering
            high performance and scalability.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is a Content Delivery Network (CDN) and what's its goal?",
    answer: (
      <>
        <p>
          A CDN is a network of cache servers located around the world, designed
          to store copies of content close to end users for faster access and
          improved website performance.
        </p>
        <p>
          The primary goal is to reduce latency and improve access speed by
          bringing content physically closer to end users, optimizing the
          overall user experience.
        </p>
      </>
    ),
  },

  {
    question: "How does a CDN improve website performance?",
    answer: (
      <p>
        By caching content on servers close to end users, CDNs reduce the
        distance data must travel, decreasing load times and bandwidth usage,
        which in turn speeds up content delivery and improves user experience.
      </p>
    ),
  },
  {
    question: "What type of content is typically served through a CDN?",
    answer: (
      <p>
        CDNs are ideal for delivering static content, such as HTML pages, CSS
        stylesheets, and static JavaScript files, which do not change
        frequently.
      </p>
    ),
  },
  {
    question: "Can CDNs serve dynamic content?",
    answer: (
      <p>
        Modern edge servers within CDNs can serve dynamic content through
        serverless JavaScript functions that adapt to different inputs like
        device type, time of day, and user location.
      </p>
    ),
  },
  {
    question: "What is a push CDN, and when is it used?",
    answer: (
      <p>
        A push CDN is used for static content that doesn't change often. New
        data is pushed from the origin server to all cache servers immediately
        upon update, ensuring all users get a cache hit upon request.
      </p>
    ),
  },
  {
    question: "How does a pull CDN work?",
    answer: (
      <p>
        In a pull CDN, content is not stored on the CDN until it is requested.
        Upon a request, the CDN pulls the content from the origin server and
        caches it for future requests, aligning closely with traditional caching
        concepts.
      </p>
    ),
  },
  {
    question: "What is the difference between push and pull CDNs?",
    answer: (
      <p>
        Push CDNs require proactive content distribution to cache servers, ideal
        for static, infrequently changed content. Pull CDNs cache content
        on-demand when requested by a user, better for dynamic or frequently
        updated content.
      </p>
    ),
  },
  {
    question: "How do CDNs provide redundancy and reliability?",
    answer: (
      <p>
        By distributing content across multiple servers worldwide, CDNs ensure
        that if one server fails, others can take over, maintaining content
        availability and reliability.
      </p>
    ),
  },
];

const Caching = () => {
  const [value, setValue] = useState(() => {
    const storedTabValue = localStorage.getItem("caching-currentTab");
    return storedTabValue !== null ? parseInt(storedTabValue, 10) : 0;
  });

  const handleChange = (event, newValue) => {
    localStorage.setItem("caching-currentTab", newValue);
    setValue(newValue);
  };

  return (
    <div className="flex column">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="fullWidth"
        textColor="white"
      >
        <Tab label="Learn" {...a11yProps(0)} />
        <Tab label="Quiz" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <p>
          Caching is a crucial aspect of web development that plays a
          significant role in optimizing performance and reducing the load on
          servers. It involves storing frequently accessed data or resources in
          a cache, which can be quickly retrieved when needed, instead of
          fetching them from the original source each time.
        </p>
        <h3>Frontend Caching</h3>
        <p>
          Frontend caching refers to the techniques and mechanisms used to cache
          data and resources on the client-side, typically in the web browser.
          It aims to minimize network requests and improve the responsiveness of
          web applications. Frontend caching can be implemented at different
          levels, such as browser caching, application-level caching, and using
          caching strategies like cache-first or network-first.
        </p>
        <p>
          Browser caching involves the web browser storing resources (e.g.,
          HTML, CSS, JavaScript, images) locally on the client's machine.
          Subsequent requests for the same resources can be served from the
          browser cache, reducing the need for network requests. HTTP headers,
          such as Cache-Control and ETag, can be used to control browser caching
          behavior.
        </p>
        <p>
          Application-level caching in the frontend refers to caching data, API
          responses, or rendered components within the application code itself.
          It can be achieved using techniques like in-memory caching, local
          storage, or leveraging caching libraries and frameworks.
        </p>
        <h3>Backend Caching</h3>
        <p>
          Backend caching involves caching data and resources on the server-side
          to reduce the load on the server and improve response times. While
          backend caching is not the primary focus of frontend development
          interviews, it's still important to have a basic understanding of its
          concepts and techniques.
        </p>
        <p>
          Backend caching can be implemented at various levels, such as database
          caching, object caching, or using caching proxies like Redis or
          Memcached. It helps minimize the need for expensive computations,
          database queries, or external API calls by storing the results in a
          cache for faster retrieval.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h2 style={{ margin: 0 }}>Frontend Caching</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <QuestionsWrapper
            storageKey="caching-frontend"
            questions={frontendCaching}
          />

          <h2>Backend Caching</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <QuestionsWrapper
              storageKey="caching-backend"
              questions={backendCaching}
            />
          </div>
        </div>
      </CustomTabPanel>
    </div>
  );
};

export default Caching;
