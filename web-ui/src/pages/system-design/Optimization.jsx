// - Networking
//     - handling concurrent requests/race conditions
//         - attach a timestamp to request to determine latest
//         - save results in map and only show correspongin to the input
// - Caching
//     - hashmap
//     - list of results
//     - normalized map of results
//     - initial results
//     - caching strategy
//         - cache duration?
//         - Data source: network only, n and cache, cache only
// - Performance
//     - Images
//         - **`[<img loading="lazy">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)`**
//         - preloading
// - User Experience
//     - loading states
//     - fuzzy search
// - A11y / i18n
//     - semantic html and aira-labels
//     - other aria properties like “haspopup” and states like “expanded” to indicuate behavior

const Optimization = () => {
  return (
    <>
      <p>
        So far we haven't actually discussed what html elements to use or how to
        create the components. Do that here.
      </p>
      <p>Then discuss optimazations</p>
      <ol>
        <li>
          <strong>Networking</strong>
          <ul>
            <li>
              <strong>Handling Concurrent Requests/R ace Conditions</strong>
              <ul>
                <li>Attach a timestamp to request to determine the latest</li>
                <li>
                  Save results in a map and only show corresponding to the input
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Caching</strong>
          <ul>
            <li>Hashmap</li>
            <li>List of results</li>
            <li>Normalized map of results</li>
            <li>Initial results</li>
            <li>Caching strategy</li>
            <ul>
              <li>Cache duration?</li>
              <li>Data source: network only, n and cache, cache only</li>
            </ul>
          </ul>
        </li>
        <li>
          <strong>Performance</strong>
          <ul>
            <li>Images</li>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading">
                  <code>&lt;img loading="lazy"&gt;</code>
                </a>
              </li>
              <li>Preloading</li>
            </ul>
          </ul>
        </li>
        <li>
          <strong>User Experience</strong>
          <ul>
            <li>Loading states</li>
            <li>Fuzzy search</li>
          </ul>
        </li>
        <li>
          <strong>A11y / i18n</strong>
          <ul>
            <li>Semantic HTML and Aria-labels</li>
            <li>
              Other Aria properties like “haspopup” and states like “expanded”
              to indicate behavior
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Optimization;
