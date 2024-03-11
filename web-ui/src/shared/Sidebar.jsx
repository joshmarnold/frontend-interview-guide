import {
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
  IconHome,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Tree } from "react-arborist";
import { Link, useLocation } from "react-router-dom";
import { paramToTitle } from "./PageHeader";

const routeData = [
  { id: "1", name: "Home", path: "/", icon: IconHome },
  { id: "52", name: "HTML", path: "html" },
  { id: "5", name: "CSS", path: "css" },
  { id: "6", name: "JavaScript", path: "javascript" },
  { id: "2", name: "DOM APIs", path: "dom-api" },
  {
    id: "9",
    name: "Web Dev",
    path: "web-dev",
    children: [
      { id: "9-1", name: "A11y", path: "web-dev/a11y" },
      { id: "9-2", name: "I18n", path: "web-dev/i18n" },
      { id: "9-3", name: "API", path: "web-dev/api" },
      { id: "9-4", name: "Caching", path: "web-dev/caching" },
      { id: "9-5", name: "Database", path: "web-dev/database" },
      { id: "9-6", name: "Devtools", path: "web-dev/devtools" },
      { id: "9-7", name: "Networking", path: "web-dev/networking" },
      {
        id: "9-8",
        name: "Performance & Metrics",
        path: "web-dev/performance-and-metrics",
      },
      { id: "9-9", name: "Security", path: "web-dev/security" },
    ],
  },
  { id: "4", name: "React", path: "react" },
  { id: "3", name: "General Programming", path: "general-programming" },
  {
    id: "7",
    name: "Frontend System Design",
    path: "frontend-system-design",
    children: [
      {
        id: "7-1",
        name: "Requirements",
        path: "frontend-system-design/requirements",
      },
      {
        id: "7-2",
        name: "Architecture",
        path: "frontend-system-design/architecture",
      },
    ],
  },
  {
    id: "8",
    name: "Algorithms & Data Structures",
    path: "ds-algos",
    children: [
      {
        id: "8-1",
        name: "Data Structures",
        children: [
          { id: "8-1-1", name: "String", path: "ds-algos/string" },
          { id: "8-1-2", name: "Array", path: "ds-algos/array" },
          { id: "8-1-3", name: "Binary Tree", path: "ds-algos/binary-tree" },
          { id: "8-1-4", name: "Graph", path: "ds-algos/graph" },
          { id: "8-1-5", name: "Heap", path: "ds-algos/heap" },
          { id: "8-1-6", name: "Linked List", path: "ds-algos/linked-list" },
          { id: "8-1-7", name: "Map", path: "ds-algos/map" },
          { id: "8-1-8", name: "Queue", path: "ds-algos/queue" },
          { id: "8-1-9", name: "Set", path: "ds-algos/set" },
          { id: "8-1-10", name: "Stack", path: "ds-algos/stack" },
          { id: "8-1-11", name: "Trie", path: "ds-algos/trie" },
        ],
      },
      {
        id: "8-2",
        name: "Algorithms",
        children: [
          {
            id: "8-2-1",
            name: "How to Approach",
            path: "ds-algos/how-to-approach",
          },
          {
            id: "8-2-2",
            name: "Binary Search",
            path: "ds-algos/binary-search",
          },
          { id: "8-2-3", name: "DFS", path: "ds-algos/dfs" },
          { id: "8-2-4", name: "BFS", path: "ds-algos/bfs" },
          { id: "8-2-5", name: "Backtracking", path: "ds-algos/backtracking" },
          { id: "8-2-6", name: "Recursion", path: "ds-algos/recursion" },
        ],
      },
    ],
  },
  {
    id: "10",
    name: "Interview Prep",
    path: "interview-prep",
    children: [
      {
        id: "10-1",
        name: "Questions For Interviewer",
        path: "interview-prep/questions-for-interviewer",
      },
      {
        id: "10-2",
        name: "Handling Coding Exercises",
        path: "interview-prep/handling-coding-exercises",
      },
    ],
  },
  // project management
  {
    id: "11",
    name: "Project Management",
    path: "project-management",
    children: [
      {
        id: "11-1",
        name: "Agile",
        path: "project-management/agile",
      },
      {
        id: "11-2",
        name: "Scrum",
        path: "project-management/scrum",
      },
      {
        id: "11-3",
        name: "Kanban",
        path: "project-management/kanban",
      },
      {
        id: "11-4",
        name: "Lean",
        path: "project-management/lean",
      },
      {
        id: "11-5",
        name: "Waterfall",
        path: "project-management/waterfall",
      },
    ],
  },
];

function Node({ node, style, dragHandle, currentPage, setExpanded, isMobile }) {
  const isActive = currentPage === node?.data?.path;
  return (
    <div
      ref={dragHandle}
      style={{
        ...style,
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "1fr 30px",
      }}
      className={`sidebar-item ${isActive ? "active" : ""}`}
    >
      <Link
        onClick={() => {
          if (isMobile) setExpanded(false);
        }}
        to={node?.data?.path}
        style={{
          paddingLeft: "6px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          height: "100%",
        }}
      >
        {node?.data?.icon && <node.data.icon size="1rem" />}
        {node?.data?.name}
      </Link>
      {!node.isLeaf && (
        <span
          onClick={() => {
            if (node.isOpen) node.close();
            else node.open();
          }}
          className="sidebar-item-expand-icon"
        >
          {!node.isOpen ? (
            <IconChevronUp size="1.2rem" />
          ) : (
            <IconChevronDown size="1.2rem" />
          )}
        </span>
      )}
      {node.isLeaf && <div />}
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const Sidebar = ({ expanded, setExpanded }) => {
  const location = useLocation();
  const currentPage = location.pathname.substring(1) || "/";

  const size = useWindowSize();

  const windowHeight = window.innerHeight;

  const [initialOpenState, setInitialOpenState] = useState(() => {
    const savedState = localStorage.getItem("treeOpenState");
    return savedState ? JSON.parse(savedState) : {};
  });

  const handleStateChange = (id) => {
    const newState = { ...initialOpenState };
    newState[id] = newState[id] ? !newState[id] : true;

    setInitialOpenState(newState);
    localStorage.setItem("treeOpenState", JSON.stringify(newState));
  };
  const isMobile = size.width < 768;

  if (isMobile && !expanded) return null;

  const width = isMobile ? "100%" : 250;
  return (
    <div className="sidebar">
      <Tree
        initialData={routeData}
        width={width}
        height={windowHeight - 55}
        rowHeight={32}
        disableDrag
        indent={25}
        initialOpenState={initialOpenState}
        onToggle={handleStateChange}
        openByDefault={false}
      >
        {(props) => (
          <Node
            {...props}
            currentPage={currentPage}
            setExpanded={setExpanded}
            isMobile={isMobile}
          />
        )}
      </Tree>
    </div>
  );
};
export default Sidebar;
