import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      
      <p style={{ marginTop: "24px" }}>
        Time is limited so the goal is to focus on high ROI algorithms. These
        are the algorithms most frequently used in interviews.
      </p>
      <p style={{ marginTop: "12px" }}>
        Templates and questions for each algo can be found in the "algos"
        folder. Go through each file and reimplement the solutions. Open the
        console to see the output. You can enable and disable tests in the
        tests.js file.
      </p>

      <h3 style={{ margin: "24px 0" }}>
        <Link to="how-to-approach">
          First Read: Approaching LeetCode Problems
        </Link>
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "60px",
        }}
      >
        <div className="flex column">
          <h3>Essential Data Structures</h3>
          <ol className="nav">
            <li>
              <Link to="string">String</Link>
            </li>
            <li>
              <Link to="array">Array</Link>
            </li>
            <li>
              <Link to="stack">Stack</Link>
            </li>
            <li>
              <Link to="queue">Queue</Link>
            </li>
            <li>
              <Link to="map">Hash Table / Map</Link>
            </li>
            <li>
              <Link to="set">Set</Link>
            </li>
            <li>
              <Link to="tree">Tree</Link>
            </li>
            <li>
              <Link to="binary-tree">Binary Tree</Link>
            </li>
            <li>Binary Search Tree</li>
            <li>
              <Link to="graph">Graph</Link>
            </li>
            <li>
              <Link to="linked-list">Linked List</Link>
            </li>
            <li>
              <Link to="heap">Heap (Optional)</Link>
            </li>
            <li>
              <Link to="trie">Trie (Optional)</Link>
            </li>
          </ol>
        </div>

        <div className="flex column">
          <h3 style={{ marginTop: "32px" }}>Algos by order of priority</h3>
          <ol className="nav">
            <li>
              <Link to="binary-search">Binary Search</Link>
            </li>
            <li>
              <Link to="recursion">Recursion</Link>
            </li>
            <li>
              <Link to="dfs">DFS</Link>
            </li>
            <li>
              <Link to="backtracking">Backtracking</Link>
            </li>

            <li>
              <Link to="bfs">BFS</Link>
            </li>
            <li>
              <Link to="two-pointers">Two Pointers</Link>
            </li>

            <li>
              <Link to="graph">Graph</Link>
            </li>
            <li>Priority queye / Heap</li>
            <li>Trie</li>
            <li>Intervals</li>
            <li>Dynamic Programming</li>
          </ol>
        </div>

        <div className="flex column">
          <h3 style={{ marginTop: "32px" }}>leetcode solutions</h3>
          <ol className="nav">
            <li>
              <Link to="binary-search">Word Ladder</Link>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
