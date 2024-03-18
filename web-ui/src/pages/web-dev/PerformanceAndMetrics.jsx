import QuestionsWrapper from "../../shared/QuestionsWrapper";
import { Tag } from "../../shared/Tag";
import Highlight from "react-highlight";

const generalQuestionsAndAnswers = [
  {
    question: "What is Time to First Byte (TTFB), and what does it measure?",
    answer: (
      <p>
        TTFB measures the time from making an HTTP request to receiving the
        first byte of a page. It's critical for assessing server responsiveness
        and contributes to faster page perception, enhancing user experience.
      </p>
    ),
  },
  {
    question: "How can you improve TTFB on a website?",
    answer: (
      <p>
        Strategies include optimizing server performance, using CDNs, enabling
        keep-alive connections, and minimizing server-side processing through
        caching and database optimization.
      </p>
    ),
  },
  {
    question:
      "What role does caching play in web performance, and how can it be optimized?",
    answer: (
      <p>
        Caching reduces server load, bandwidth, and latency by storing file
        copies or data responses. Optimization includes setting proper cache
        headers, using browser caching, and server-side caching for dynamic
        content.
      </p>
    ),
  },
  {
    question:
      "What is First Contentful Paint (FCP), and why is it significant?",
    answer: (
      <>
        <p>
          This tracks how long it takes for the first piece of content to appear
          on the screen after a user navigates to a page. It's a key measure of
          a site's speed, reflecting how quickly users can see something on the
          page. Improving FCP means users are less likely to leave due to
          waiting, enhancing their overall experience.
        </p>
        <p>
          For example, if you navigate to a news website and the headline
          appears within 1.5 seconds, that's the site's FCP time. A faster FCP,
          like this, ensures users have a positive first impression of the
          website's performance.
        </p>
      </>
    ),
  },
  {
    question:
      "What is the Critical Rendering Path, and how can it be optimized?",
    answer: (
      <>
        <p>
          The critical rendering path is about ensuring the most important parts
          of a website are visible first when someone visits a page. It
          prioritizes the quick loading and display of immediately visible
          content, allowing users to start interacting with the site faster.
        </p>
        <p>
          In technical terms, it's the sequence of steps the browser goes
          through to turn the site's code into the visual elements on the
          screen. This involves processing HTML, CSS, and JavaScript to render
          the layout and content.
        </p>
        <p>
          To optimize this process, you should minimize file sizes, prioritize
          the loading of essential content, and defer less important resources
          until needed. This strategy enhances the user experience by making the
          main content accessible more quickly and keeping users engaged.
        </p>
      </>
    ),
  },
  {
    question: (
      <p style={{ margin: 0 }}>
        What's the difference between <Tag>{`<script>`}</Tag>,{" "}
        <Tag>{`<script async>`}</Tag>, and <Tag>{`<script defer>`}</Tag> tags?
      </p>
    ),
    answer: (
      <ul>
        <li>
          <Tag>{`<script>`}</Tag>: Blocks HTML parsing until the script is
          downloaded and executed.
        </li>
        <li>
          <Tag>{`<script async>`}</Tag>: Downloads the script asynchronously and
          executes it as soon as it’s downloaded, without blocking HTML parsing.
        </li>
        <li>
          <Tag>{`<script defer>`}</Tag>: Downloads the script asynchronously but
          delays execution until after the HTML document is fully parsed. This
          does not mean the page is fully visible or rendered to the user. It
          means the HTML parsing is complete.
        </li>
      </ul>
    ),
  },
  {
    question:
      "How does image optimization impact web performance, and what techniques can be used?",
    answer: (
      <p>
        Image optimization enhances page load times and reduces bandwidth by
        compressing images, using modern formats, responsive images, and lazy
        loading offscreen images.
      </p>
    ),
  },
  {
    question:
      "Can you provide an example of using Web Performance APIs to analyze page performance?",
    answer: (
      <div>
        <p>
          Here's a simple example using the Navigation Timing API to measure how
          long it takes for a page to load:
        </p>
        <Highlight className="javascript">
          {`if (window.performance) {
  const timing = window.performance.timing;
  const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
  console.log("Page Load Time: ", pageLoadTime);
}`}
        </Highlight>
        <p>
          And here's an example using the Resource Timing API to get insights
          into the loading time of specific resources like scripts, stylesheets,
          and images:
        </p>
        <Highlight className="javascript">
          {`window.performance.getEntriesByType("resource").forEach((resource) => {
  console.log(resource.name + ": " + (resource.responseEnd - resource.startTime));
});`}
        </Highlight>
      </div>
    ),
  },
  {
    question: "What impact does web performance have on SEO?",
    answer: (
      <p>
        Web performance significantly influences SEO because search engines like
        Google consider page speed a critical ranking factor. Websites that load
        quickly tend to offer better user experiences, which can result in
        higher engagement rates, reduced bounce rates, and improved rankings in
        search engine results.
      </p>
    ),
  },
  {
    question: "How do HTTP/2 and HTTP/3 improve web performance?",
    answer: (
      <p>
        HTTP/2 and HTTP/3 bring substantial enhancements to web performance over
        HTTP/1.1 by introducing features like multiplexing, allowing multiple
        requests and responses simultaneously over a single connection; header
        compression to reduce overhead; and prioritization of resources, all
        contributing to decreased latency and faster page loading times.
      </p>
    ),
  },
  {
    question:
      "What is the significance of the Largest Contentful Paint (LCP) metric, and how can it be optimized?",
    answer: (
      <p>
        Largest Contentful Paint (LCP) is a critical metric for gauging the time
        it takes to render the largest piece of content within the viewport,
        offering insights into the perceived load speed of a page. Optimizing
        LCP can involve enhancing server response times, refining resource
        loading priorities, and minimizing the impact of non-essential
        third-party scripts to ensure swift rendering of major content elements.
      </p>
    ),
  },
  {
    question: "What impact does web performance have on SEO?",
    answer: (
      <p>
        Web performance significantly influences SEO, as search engines
        prioritize fast-loading websites for a better user experience, which can
        lead to improved rankings, higher engagement, and reduced bounce rates.
      </p>
    ),
  },
  {
    question:
      "Can you explain what 'Speed Index' is and how it affects user experience?",
    answer: (
      <p>
        Speed Index quantifies the rate at which content is visually displayed
        during page load. A lower Speed Index indicates a quicker content
        rendering, enhancing the user's perception of speed and improving their
        experience.
      </p>
    ),
  },
  {
    question:
      "What is 'Total Blocking Time' (TBT), and how does it relate to interactivity?",
    answer: (
      <p>
        TBT measures the delay in interactivity from the First Contentful Paint
        to when the page becomes fully interactive. Lower TBT values denote a
        more responsive page, contributing to a smoother user interaction.
      </p>
    ),
  },
  {
    question:
      "How does 'Largest Contentful Paint' (LCP) differ from FCP, and what does it tell you about a webpage?",
    answer: (
      <p>
        Unlike FCP, which marks the first content appearance, LCP identifies
        when the largest content element is fully displayed. It highlights the
        readiness of the main webpage content, crucial for assessing the user's
        viewing experience.
      </p>
    ),
  },
  {
    question:
      "What is 'Cumulative Layout Shift' (CLS), and what aspect of performance does it address?",
    answer: (
      <div>
        <p>
          CLS evaluates visual stability by measuring unexpected layout shifts.
          A lower CLS indicates a more stable page layout, enhancing the user's
          experience by preventing disorienting content movements. It's
          important to understand that CLS is measured cumulatively over the
          entire lifespan of the page, not just during the initial load. This
          includes shifts caused by user interactions, images loading, or any
          dynamic content changes.
        </p>
        <p>
          To manage and improve CLS, especially for dynamic and interactive
          content like sidebars or modals, it's crucial to reserve space for
          elements that might load later, use CSS transform for animations, and
          ensure significant layout changes are user-initiated. These practices
          help maintain a stable layout, contributing to a better CLS score and
          overall user experience.
        </p>
      </div>
    ),
  },
  {
    question:
      "What is meant by 'render-blocking resources', and how can they be eliminated to improve website performance?",
    answer: (
      <p>
        Render-blocking resources are assets that hinder the initial page
        rendering. They can be mitigated by inlining essential styles, deferring
        non-critical scripts, and using asynchronous loading for additional
        stylesheets to boost rendering speed.
      </p>
    ),
  },
  {
    question:
      "Why is it important to remove unused CSS, and how can this task be accomplished?",
    answer: (
      <p>
        Eliminating unused CSS reduces file size and speeds up page loading.
        Tools like PurgeCSS can automate the process by identifying and removing
        styles not applied to your site's content.
      </p>
    ),
  },
  {
    question:
      "How does enabling text compression benefit website performance, and which methods are commonly used?",
    answer: (
      <p>
        Text compression reduces the size of text-based files, enhancing their
        transfer speed across the network. Gzip and Brotli are popular
        compression methods, easily activated via server configurations or
        Content Delivery Networks (CDNs), significantly improving load times.
      </p>
    ),
  },
  {
    question:
      "Between Gzip and Brotli, which is the preferred compression algorithm and why? How would you use Brotli compression in practice?",
    answer: (
      <div>
        <p>
          The choice between Gzip and Brotli often depends on the specific
          requirements of your project, including compatibility needs and the
          level of compression desired. <strong>Brotli</strong> is generally
          considered the preferred compression algorithm when the highest
          compression ratio and speed are priorities, and when compatibility
          with the latest browsers is sufficient for your audience. Brotli
          offers better compression ratios than Gzip, which means it can make
          files smaller and thus further speed up the loading of web pages.
        </p>
        <p>
          However, <strong>Gzip</strong> still has widespread support and is a
          robust choice for broader compatibility, especially with older
          browsers. It is also easier to implement across various servers due to
          its long-standing presence.
        </p>
        <p>To use Brotli compression in practice:</p>
        <ol>
          <li>
            <strong>Compress Static Assets:</strong> Use a build tool or a
            command-line utility to compress your CSS, JavaScript, and other
            text-based assets with Brotli before deployment. Tools like Webpack
            can be configured to use Brotli compression via plugins.
          </li>
          <li>
            <strong>Store Compressed Files:</strong> Upload your
            Brotli-compressed files to your hosting solution or a content
            delivery network (CDN) like Amazon S3. Ensure you maintain the
            original file extension (e.g., .js, .css) for simplicity.
          </li>
          <li>
            <strong>Serve Files with Correct Headers:</strong> When serving
            compressed files, your server or CDN needs to include the{" "}
            <Tag>Content-Encoding: br</Tag> response header to indicate that the
            content is Brotli-compressed. Additionally, configure the{" "}
            <Tag>Content-Type</Tag> header appropriately (e.g.,{" "}
            <Tag>text/css</Tag> for CSS files) to ensure proper handling by the
            browser.
          </li>
          <li>
            <strong>Configure Fallbacks:</strong> Not all browsers support
            Brotli compression. Implement a fallback mechanism to serve
            Gzip-compressed or uncompressed files based on the{" "}
            <Tag>Accept-Encoding</Tag> request header sent by the browser.
          </li>
        </ol>
      </div>
    ),
  },
  {
    question:
      "What does 'preconnect to required origins' entail, and when should it be used?",
    answer: (
      <div>
        <p>
          Preconnecting to required origins involves establishing early network
          connections to critical third-party domains. This optimization can
          significantly reduce the time needed to set up connections for
          fetching resources, making it ideal for domains from which resources
          are certain to be requested. This speeds up the overall loading
          process by ensuring that key resources can be fetched without delay.
        </p>
        <p>Here's how to implement it in HTML:</p>
        <Highlight className="html">
          {`<link rel="preconnect" href="https://example.com">`}
        </Highlight>
        <p>And for adding preconnect via HTTP headers (on your server):</p>
        <Highlight className="http">
          {`Link: <https://example.com>; rel="preconnect"`}
        </Highlight>
        <p>
          It's best to use preconnect when you know your page will definitely
          request resources from a specific origin and you want to minimize the
          connection setup time. This is particularly useful for resources
          hosted on CDNs, API endpoints, or external web fonts. However, it's
          important to use this feature judiciously to avoid unnecessary
          preconnections that could waste resources.
        </p>
      </div>
    ),
  },
  {
    question:
      "Why is it important to reduce server response times, and how can you achieve this?",
    answer: (
      <p>
        Lowering server response times enhances the site's responsiveness by
        improving the Time to First Byte (TTFB). This can be achieved through
        server hardware upgrades, optimizing server software configurations, and
        utilizing Content Delivery Networks (CDNs) to decrease the distance data
        travels to the user, crucial for a swift initial loading experience.
      </p>
    ),
  },
  {
    question:
      "What is the purpose of preloading key requests, and how is it done?",
    answer: (
      <p>
        Preloading key requests signals to the browser about critical resources
        required early in the loading process. By specifying{" "}
        <code>rel="preload"</code> in link tags, these essential resources are
        fetched sooner, prioritizing their early availability and potentially
        enhancing page performance.
      </p>
    ),
  },
  {
    question:
      "How can third-party code impact site performance, and what can be done to mitigate this?",
    answer: (
      <p>
        Third-party scripts can significantly slow down website performance.
        Mitigation strategies include conducting a thorough script audit,
        delaying the loading of non-essential scripts, and employing script
        management tools to selectively load resources, helping maintain optimal
        performance levels.
      </p>
    ),
  },
  {
    question:
      "Explain the concept of lazy loading with facades for third-party resources.",
    answer: (
      <p>
        Lazy loading with facades involves deferring the load of non-essential
        third-party resources until they are needed, using lightweight
        placeholders. This strategy reduces initial page load times and
        conserves bandwidth, loading substantial resources only upon user
        interaction, which can drastically improve site speed and user
        experience.
      </p>
    ),
  },
];

const PerformanceAndMetrics = () => {
  return (
    <>
      <p>
        Use the following metrics when evaluating web performance and user
        experience:
      </p>
      <ul>
        <li>Time to First Byte (TTFB)</li>
        <li>First Contentful Paint (FCP)</li>
        <li>Largest Contentful Paint (LCP)</li>
        <li>Total Blocking Time (TBT)</li>
        <li>Cumulative Layout Shift (CLS)</li>
        <li>Speed Index</li>
        <li>Critical Rendering Path (Not a metric)</li>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <QuestionsWrapper
          storageKey="PerformanceAndMetrics"
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

export default PerformanceAndMetrics;
