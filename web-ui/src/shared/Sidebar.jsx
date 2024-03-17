import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import clsx from "clsx";
import Typography from "@mui/material/Typography";
import { forwardRef, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem, useTreeItem } from "@mui/x-tree-view/TreeItem";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Tree.scss";

const pathsToIds = {
  "/": "1",
  html: "52",
  css: "5",
  javascript: "6",
  "dom-api": "2",
  "web-dev": "9",
  "web-dev/a11y": "9-1",
  "web-dev/i18n": "9-2",
  "web-dev/api": "9-3",
  "web-dev/caching": "9-4",
  "web-dev/database": "9-5",
  "web-dev/devtools": "9-6",
  "web-dev/networking": "9-7",
  "web-dev/performance-and-metrics": "9-8",
  "web-dev/security": "9-9",
  react: "4",
  "general-programming": "3",
  "frontend-system-design": "7",
  "frontend-system-design/requirements": "7-1",
  "frontend-system-design/architecture": "7-2",
  "ds-algos": "8",
  "ds-algos/string": "8-1-1",
  "ds-algos/array": "8-1-2",
  "ds-algos/binary-tree": "8-1-3",
  "ds-algos/graph": "8-1-4",
  "ds-algos/heap": "8-1-5",
  "ds-algos/linked-list": "8-1-6",
  "ds-algos/map": "8-1-7",
  "ds-algos/queue": "8-1-8",
  "ds-algos/set": "8-1-9",
  "ds-algos/stack": "8-1-10",
  "ds-algos/trie": "8-1-11",
  "ds-algos/how-to-approach": "8-2-1",
  "ds-algos/binary-search": "8-2-2",
  "ds-algos/dfs": "8-2-3",
  "ds-algos/bfs": "8-2-4",
  "ds-algos/backtracking": "8-2-5",
  "ds-algos/recursion": "8-2-6",
  "interview-prep": "10",
  "interview-prep/questions-for-interviewer": "10-1",
  "interview-prep/handling-coding-exercises": "10-2",
  "project-management": "11",
  "project-management/initiation": "11-1",
  "project-management/planning": "11-2",
  "project-management/execution-and-control": "11-3",
  "project-management/monitoring-and-evaluation": "11-4",
  "project-management/methodologies": "11-5",
  "project-management/frameworks": "11-6",
};

const data = {
  id: "0",
  name: "root",
  children: [
    { id: "1", name: "Home", path: "/", icon: HomeIcon },
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
            {
              id: "8-2-5",
              name: "Backtracking",
              path: "ds-algos/backtracking",
            },
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
    { id: "15", name: "Behavorial", path: "behavioral", isHeader: false },
    { id: "12", name: "Extras", isHeader: true, disabled: true },
    // project management
    {
      id: "11",
      name: "Project Management",
      path: "project-management",
      children: [
        {
          id: "11-5",
          name: "Methodologies",
          path: "project-management/methodologies",
        },
        {
          id: "11-6",
          name: "Frameworks",
          path: "project-management/frameworks",
        },
        // {
        //   id: "11-1",
        //   name: "Initiation",
        //   path: "project-management/initiation",
        // },
        // { id: "11-2", name: "Planning", path: "project-management/planning" },
        // {
        //   id: "11-3",
        //   name: "Execution & Control",
        //   path: "project-management/execution-and-control",
        // },
        // {
        //   id: "11-4",
        //   name: "Monitoring & Evaluation",
        //   path: "project-management/monitoring-and-evaluation",
        // },
      ],
    },
  ],
};

// save open state to local storage
const updateOpenState = (nodeId) => {
  const openNodes = JSON.parse(localStorage.getItem("treeOpenState")) || [];
  const index = openNodes.indexOf(nodeId);
  if (index === -1) {
    openNodes.push(nodeId);
  } else {
    openNodes.splice(index, 1);
  }
  localStorage.setItem("treeOpenState", JSON.stringify(openNodes));
};

const CustomContent = forwardRef(function CustomContent(props, ref) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
    hasChildren,
    navigate,
  } = props;

  const { disabled, expanded, selected, handleExpansion, handleSelection } =
    useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleExpansionClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    handleExpansion(event);
    updateOpenState(nodeId);
  };

  const handleSelectionClick = (event) => {
    handleSelection(event);
    navigate();
  };

  return (
    <div
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.disabled]: disabled,
      })}
      ref={ref}
    >
      <Typography
        onClick={handleSelectionClick}
        component="div"
        className={classes.label}
      >
        {label}
      </Typography>
      {hasChildren && (
        <div onClick={handleExpansionClick} className={classes.iconContainer}>
          {icon}
        </div>
      )}
    </div>
  );
});

function CustomTreeItem(props) {
  return (
    <TreeItem
      ContentComponent={(compProps) => {
        return (
          <CustomContent
            {...compProps}
            hasChildren={props.hasChildren}
            navigate={props.navigate}
          />
        );
      }}
      {...props}
      children={props.hasChildren ? props.children : null}
      expandIcon={null}
      disabled={props.disabled}
    />
  );
}

const renderTree = (nodes, navigate) => {
  return (
    <CustomTreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.name}
      hasChildren={Array.isArray(nodes.children)}
      navigate={() => navigate(nodes.path)}
      className={nodes.children ? "has-children" : ""}
      disabled={nodes.disabled}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node, navigate))
        : null}
    </CustomTreeItem>
  );
};

const Sidebar = ({ expanded, setExpanded }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.substring(1) || "/";
  const isMobile = useMediaQuery("(max-width:768px)");

  const [initialOpenState] = useState(() => {
    const savedState = localStorage.getItem("treeOpenState");
    return savedState ? JSON.parse(savedState) : [];
  });

  if (isMobile && !expanded) return null;

  return (
    <div className="sidebar">
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={initialOpenState || []}
        selected={[pathsToIds[currentPage]]}
        disableSelection={true}
        sx={{
          minHeight: 110,
          flexGrow: 1,
          maxWidth: isMobile ? "100%" : 300,
          overflowY: "auto",
        }}
      >
        {data.children.map((node) => {
          return renderTree(node, navigate);
        })}
      </TreeView>
    </div>
  );
};

export default Sidebar;
