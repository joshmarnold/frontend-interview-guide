import QuestionsWrapper from "../../shared/QuestionsWrapper";
import { Tag } from "../../shared/Tag";

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
      "Describe how to use Web Performance APIs to measure performance in the browser.",
    answer: (
      <p>
        Web Performance APIs, like Navigation Timing and Resource Timing,
        provide detailed insights into page loading and usage, helping to
        pinpoint performance bottlenecks for optimization.
      </p>
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
    question: "How do HTTP/2 and HTTP/3 improve web performance?",
    answer: (
      <p>
        HTTP/2 and HTTP/3 enhance web performance through features like
        multiplexing, header compression, and prioritized resource loading,
        reducing latency and accelerating page load times compared to HTTP/1.1.
      </p>
    ),
  },
  {
    question:
      "What is the significance of the Largest Contentful Paint (LCP) metric, and how can it be optimized?",
    answer: (
      <p>
        LCP measures the render time of the largest content element visible,
        offering insight into perceived load speed. Optimizing LCP involves
        server enhancements, resource strategy refinement, and minimizing the
        impact of non-essential scripts.
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
      <p>
        CLS evaluates visual stability by measuring unexpected layout shifts. A
        lower CLS indicates a more stable page layout, enhancing the user's
        experience by preventing disorienting content movements.
      </p>
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
      "What does 'preconnect to required origins' entail, and when should it be used?",
    answer: (
      <p>
        Preconnecting to required origins involves establishing early network
        connections to critical third-party domains. This optimization reduces
        the time needed to set up connections for fetching resources, ideal for
        domains from which resources are guaranteed to be requested, thereby
        speeding up the loading process.
      </p>
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
