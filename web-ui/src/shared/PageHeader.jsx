import { useLocation } from "react-router-dom";

export const paramToTitle = {
  "ds-algos": "Algorithms & Data Structures",
  "dom-api": "DOM API",
  css: "CSS",
  javascript: "JavaScript",
  react: "React",
  "general-programming": "General Programming",
  "frontend-system-design": "Frontend System Design",
  // Subtopics for DS & Algos
  string: "String Algorithms",
  array: "Array Data Structures",
  backtracking: "Backtracking Algorithms",
  bfs: "Breadth-First Search Algorithms",
  "binary-search": "Binary Search Algorithms",
  "binary-tree": "Binary Tree Data Structures",
  dfs: "Depth-First Search Algorithms",
  graph: "Graph Data Structures",
  heap: "Heap Data Structures",
  "how-to-approach": "Approaching Algorithm Problems",
  "linked-list": "Linked List Data Structures",
  map: "Map Data Structures",
  queue: "Queue Data Structures",
  recursion: "Recursion Algorithms",
  set: "Set Data Structures",
  stack: "Stack Data Structures",
  trie: "Trie Data Structures",
  // Subtopics for Frontend System Design
  requirements: "Requirements",
  architecture: "Architecture",
  // Subtopics for Web Dev
  a11y: "Accessibility (A11y)",
  i18n: "Internationalization (i18n)",
  api: "APIs",
  caching: "Caching",
  database: "Databases",
  devtools: "Developer Tools",
  networking: "Networking",
  "performance-and-metrics": "Performance & Metrics",
  security: "Security",
  "web-dev": "Web Development",
  html: "HTML",
  "interview-prep": "Interview Prep",
  "questions-for-interviewer": "Questions for Interviewer",
  "handling-coding-exercises": "Handling Coding Exercises",
  "project-management": "Project Management",
  initiation: "Project Initiation",
  planning: "Project Planning",
  "execution-and-control": "Project Execution & Control",
  "monitoring-and-evaluation": "Project Monitoring & Evaluation",
  methodologies: "Project Methodologies",
  frameworks: "Project Frameworks",
};

export const PageHeader = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const endPath = pathSegments[pathSegments.length - 1];
  const title = paramToTitle[endPath];

  if (!title) {
    return null;
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1 style={{ margin: "0" }}>{title}</h1>
    </div>
  );
};
