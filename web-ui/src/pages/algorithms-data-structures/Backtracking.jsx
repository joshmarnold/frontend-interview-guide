import { PageHeader } from "../../shared/PageHeader";

export default function Backtracking() {
  return (
    <>
      <div>
        <p>
          Backtracking is a systematic method for exploring all potential
          solutions to a problem by making a series of choices and then undoing
          them if they don't lead to a solution. It is called backtracking
          because the algorithm "backtracks" to previous states when it
          encounters a dead end, searching for alternative paths. This approach
          is particularly effective for combinatorial search problems where the
          goal is to find all possible configurations that meet specific
          conditions.
        </p>

        <p>Skip to</p>
        <ul>
          <li>
            <a href="#part-1">Part 1: Combinatorial Search Problems</a>
          </li>
          <li>
            <a href="#part-2">Part 2: Pruning</a>
          </li>
        </ul>

        <h2>Part 1: Combinatorial Search Problems</h2>
        <p>
          Combinatorial search problems involve finding groupings and
          assignments of objects that satisfy certain conditions. Classic
          examples include finding all permutations, combinations, subsets and
          solving sudoku. The time complexity of these problems often grows
          rapidly with the size of the problem.
        </p>
        <br />

        <div className="note">
          <h3>Prereqs: Essential Math Concepts</h3>

          <p>
            <strong>Factorials (n!):</strong> The product of all positive
            integers up to
            <em>n</em>, crucial for understanding permutations. For example, 3!
            = 3 * 2 * 1 = 6.
          </p>
          <br />
          <h4>Permutations and Combinations</h4>
          <p>
            Quick Primer:
            <a href="https://www.youtube.com/watch?v=NEGxh_D7yKU">
              How to Use Permutations and Combinations
            </a>
          </p>
          <p>
            <strong>Permutations</strong>
          </p>
          <p>See problem: permutations-no-dups.js</p>
          <p>
            Permutations are the different arrangements of a set of items,
            <strong>where the order matters.</strong>
            The formula for permutations is: <em>n! / (n - r)!</em>, where{" "}
            <em>n</em> is the total number of items and <em>r</em> is the number
            of items to choose.
          </p>

          <div className="bubble">
            <p style={{ margin: 0 }}>
              Example: What are the permutations of the set {(1, 2, 3)} taken 2
              at a time?
            </p>
            <ul>
              <li>n=3, r=2</li>
              <li>3! / (3 - 2)! = 6 / 1 = 6 total permutations</li>
              <li>
                <span style={{ color: "rgb(219, 158, 158)" }}>
                  {(1, 2)}, {(1, 3)},
                </span>
                <span style={{ color: "rgb(112, 182, 112)" }}>
                  {" "}
                  {(2, 1)}, {(2, 3)}{" "}
                </span>
                <span style={{ color: "rgb(129, 129, 241)" }}>
                  {" "}
                  {(3, 1)}, {(3, 2)}{" "}
                </span>
              </li>
            </ul>
            Because the order matters, {(1, 2)} and {(2, 1)} are considered
            different permutations. In combinations, these are considered the
            same.
          </div>
          <br />

          <strong>Permutations with duplicates</strong>
          <p>See problem: permutations-with-dups.js</p>

          <p>
            When there are duplicate elements in the set, the number of unique
            permutations decreases. The formula for permutations with duplicates
            is:
            <span className="tag">n! / (d1! * d2! * ... * dk!)</span>
            where:
          </p>
          <ul style={{ margin: 0 }}>
            <li>n is the total number of elements</li>
            <li>d1, d2, ..., dk are the numbers of each duplicate element</li>
          </ul>

          <div className="bubble">
            <p style={{ margin: 0 }}>
              Example: What are the permutations of the set {(1, 1, 2)} taken 2
              at a time?
            </p>
            <ul>
              <li>n = 3, r = 2</li>
              <li>
                Total permutations (without considering duplicates): 3! / (3 -
                2)! = 6
              </li>
              <li>Number of duplicate elements: 1 appears twice, so d1 = 2</li>
              <li>Unique permutations: 6 / 2! = 3</li>
              <li>
                <span style={{ color: "rgb(219, 158, 158)" }}>({(1, 1)},</span>
                <span style={{ color: "rgb(112, 182, 112)" }}>({(1, 2)},</span>
                <span style={{ color: "rgb(129, 129, 241)" }}>({(2, 1)})</span>
              </li>
            </ul>
          </div>

          <br />
          <br />
          <p>
            <strong>Combinations</strong> are the different groupings of a set
            of items,
            <strong>where the order does not matter.</strong> The formula for
            combinations is: <em>n! / r!(n - r)!</em>, where <em>n</em> is the
            total number of items and <em>r</em> is the number of items to
            choose.
          </p>

          <div className="bubble">
            <p style={{ margin: 0 }}>
              Example, What are the combinations of the set {(1, 2, 3)} taken 2
              at a time?
            </p>
            <ul>
              <li>n=3, r=2</li>
              <li>3! / 2!(3 - 2)! = 6 / 2 = 3 total combinations</li>
              <li>
                <span style={{ color: "rgb(219, 158, 158)" }}>{(1, 2)},</span>
                <span style={{ color: "rgb(112, 182, 112)" }}> {(1, 3)},</span>
                <span style={{ color: "rgb(129, 129, 241)" }}> {(2, 3)}</span>
              </li>
            </ul>
            Because the order does not matter, {(1, 2)} and {(2, 1)} are
            considered the same combination.
          </div>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <div>
        <h3>Backtracking and DFS</h3>
        <div style={{ display: "grid", gridTemplateColumns: "2fr auto" }}>
          <p>
            The algorithm commonly used to solve combinatorial search problems
            is known as <strong>backtracking</strong>, which is essentially DFS
            (Depth-First Search) on a state-space tree. This tree represents all
            possible states or configurations that can be explored to find a
            solution. The leaves of the tree represent the final states, and the
            edges represent the choices made at each step. For example, consider
            the state-space tree for the string "abc". We'll continue to use
            this example to illustrate further concepts.
          </p>
          <div
            style={{
              textAlign: "center",
              position: "relative",
              margin: "0 55px",
            }}
          >
            <svg
              width="300"
              height="280"
              xmlns="http://www.w3.org/2000/svg"
              style={{ scale: 1.2 }}
            >
              {/* SVG content here */}
            </svg>
            <p
              style={{
                fontSize: "12px",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%)",
                whiteSpace: "nowrap",
                paddingTop: "10px",
                color: "gray",
              }}
            >
              state-space tree for the string "abc"
            </p>
          </div>
        </div>

        <h3>Difference between DFS and Backtracking</h3>
        <p>
          Unlike traditional DFS problems where a tree is given for traversal,
          backtracking problems require constructing the tree and generating its
          edges and nodes dynamically. This process involves writing logic to
          discover the potential branches and leaves at each step.
        </p>

        <h3>Implementing a Backtracking Algorithm</h3>
        <p>
          To implement a backtracking algorithm, it's crucial to visualize the
          problem as a state-space tree. Identifying when a solution is reached
          and how to generate potential branches are key steps in this process.
          The basic template for a backtracking function involves the following
          steps:
        </p>
        <ol>
          <li>
            <strong>Choice:</strong> In a backtracking algorithm, choices are
            the set of options you can take from any given state. For our
            example, the choice at each step in the word generation process is
            whether to append an 'a' or a 'b' to the current string being
            constructed.
          </li>
          {/* More list items */}
        </ol>

        <h4>Permutation Problems</h4>

        <h5>No duplicates, e.g., "abc"</h5>
        <ol>{/* List items */}</ol>

        <h3>Example Problem</h3>
        <p>
          In this problem, we aim to generate all possible n-letter words
          composed of 'a' and 'b', under the constraint that no two 'a's are
          adjacent to each other. This problem serves as a classic example to
          demonstrate the application of backtracking, highlighting choices,
          constraints, and goals.
        </p>
        <div className="code">
          <pre>
            <code className="language-javascript">{`// JavaScript code example`}</code>
          </pre>
          {/* More code content */}
        </div>

        <h4>Time Complexity</h4>
        <p>{/* Time complexity explanation */}</p>

        <h4>Space Complexity</h4>
        <p>{/* Space complexity explanation */}</p>

        <div className="divider"></div>
        <h2 id="part-2">Part 2: Pruning</h2>
        <p>
          See problem:{" "}
          <span className="tag">partition-strings-into-palindromes.js</span>
        </p>
        <p>
          Pruning is a technique used to optimize backtracking algorithms by
          eliminating branches that are guaranteed to lead to invalid solutions.
          This is achieved by adding additional constraints to the search space,
          which allows the algorithm to skip over paths that are guaranteed to
          be invalid.
        </p>
        <p className="bubble">
          🗝️ This is just an additional condition that is checked before making
          a choice to explore a branch.
        </p>

        <p>
          Perform the following steps to apply pruning to a backtracking
          algorithm:
        </p>
        <ol>{/* List items */}</ol>
      </div>
    </>
  );
}
