import { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Analytics } from "@vercel/analytics/react";

// import "highlight.js/styles/agate.css";
// import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/styles/vs2015.css";
import "./App.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home = lazy(() => import("./pages/Home"));
const DomApi = lazy(() => import("./pages/dom-api/DomApi"));
const GeneralProgramming = lazy(() => import("./pages/GeneralProgramming"));
const React = lazy(() => import("./pages/React"));
const CSS = lazy(() => import("./pages/CSS/CSS"));
const JavaScript = lazy(() => import("./pages/javascript/Javascript"));
const Layout = lazy(() => import("./shared/Layout"));
const Array = lazy(() => import("./pages/algorithms-data-structures/Array"));
const Backtracking = lazy(() =>
  import("./pages/algorithms-data-structures/Backtracking")
);
const BFS = lazy(() => import("./pages/algorithms-data-structures/BFS"));
const BinarySearch = lazy(() =>
  import("./pages/algorithms-data-structures/BinarySearch")
);
const BinaryTree = lazy(() =>
  import("./pages/algorithms-data-structures/BinaryTree")
);
const DFS = lazy(() => import("./pages/algorithms-data-structures/DFS"));
const Graph = lazy(() => import("./pages/algorithms-data-structures/Graph"));
const Heap = lazy(() => import("./pages/algorithms-data-structures/Heap"));
const HowToApproach = lazy(() =>
  import("./pages/algorithms-data-structures/HowToApproach")
);
const LinkedList = lazy(() =>
  import("./pages/algorithms-data-structures/LinkedList")
);
const DSAndAlgos = lazy(() =>
  import("./pages/algorithms-data-structures/DSAndAlgos")
);
const Map = lazy(() => import("./pages/algorithms-data-structures/Map"));
const Queue = lazy(() => import("./pages/algorithms-data-structures/Queue"));
const Recursion = lazy(() =>
  import("./pages/algorithms-data-structures/Recursion")
);
const Set = lazy(() => import("./pages/algorithms-data-structures/Set"));
const Stack = lazy(() => import("./pages/algorithms-data-structures/Stack"));
const String = lazy(() => import("./pages/algorithms-data-structures/String"));
const Trie = lazy(() => import("./pages/algorithms-data-structures/Trie"));
const SystemDesignDocs = lazy(() =>
  import("./pages/system-design/SystemDesign")
);
const Requirements = lazy(() => import("./pages/system-design/Requirements"));
const Architecture = lazy(() => import("./pages/system-design/Architecture"));
const WebDev = lazy(() => import("./pages/web-dev/WebDev"));
const A11y = lazy(() => import("./pages/web-dev/A11y"));
const I18n = lazy(() => import("./pages/web-dev/I18n"));
const API = lazy(() => import("./pages/web-dev/API"));
const Caching = lazy(() => import("./pages/web-dev/Caching"));
const Database = lazy(() => import("./pages/web-dev/Database"));
const Devtools = lazy(() => import("./pages/web-dev/Devtools"));
const Networking = lazy(() => import("./pages/web-dev/Networking"));
const PerformanceAndMetrics = lazy(() =>
  import("./pages/web-dev/PerformanceAndMetrics")
);
const Security = lazy(() => import("./pages/web-dev/Security"));
const InterviewPrep = lazy(() =>
  import("./pages/interview-prep/InterviewPrep")
);
const QuestionsForInterviewer = lazy(() =>
  import("./pages/interview-prep/QuestionsForInterviewer")
);
const HandlingCodingExercises = lazy(() =>
  import("./pages/interview-prep/HandlingCodingExercises")
);
const HTML = lazy(() => import("./pages/HTML"));
// project mgmt
const ProjectManagement = lazy(() =>
  import("./pages/project-management/ProjectManagement")
);
const Frameworks = lazy(() => import("./pages/project-management/Frameworks"));
const Methodologies = lazy(() =>
  import("./pages/project-management/Methodologies")
);
const Behavioral = lazy(() => import("./pages/Behavioral"));

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {window.location.hostname !== "localhost" && <Analytics />}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* algorithsm and data structures */}
            <Route path="ds-algos" element={<DSAndAlgos />} />
            <Route path="ds-algos/string" element={<String />} />
            <Route path="ds-algos/array" element={<Array />} />
            <Route path="ds-algos/backtracking" element={<Backtracking />} />
            <Route path="ds-algos/bfs" element={<BFS />} />
            <Route path="ds-algos/binary-search" element={<BinarySearch />} />
            <Route path="ds-algos/binary-tree" element={<BinaryTree />} />
            <Route path="ds-algos/dfs" element={<DFS />} />
            <Route path="ds-algos/graph" element={<Graph />} />
            <Route path="ds-algos/heap" element={<Heap />} />
            <Route
              path="ds-algos/how-to-approach"
              element={<HowToApproach />}
            />
            <Route path="ds-algos/linked-list" element={<LinkedList />} />
            <Route path="ds-algos/map" element={<Map />} />
            <Route path="ds-algos/queue" element={<Queue />} />
            <Route path="ds-algos/recursion" element={<Recursion />} />
            <Route path="ds-algos/set" element={<Set />} />
            <Route path="ds-algos/stack" element={<Stack />} />
            <Route path="ds-algos/string" element={<String />} />
            <Route path="ds-algos/trie" element={<Trie />} />

            {/* web dev */}
            <Route path="web-dev" element={<WebDev />} />
            <Route path="web-dev/a11y" element={<A11y />} />
            <Route path="web-dev/i18n" element={<I18n />} />
            <Route path="web-dev/api" element={<API />} />
            <Route path="web-dev/caching" element={<Caching />} />
            <Route path="web-dev/database" element={<Database />} />
            <Route path="web-dev/devtools" element={<Devtools />} />
            <Route path="web-dev/networking" element={<Networking />} />
            <Route
              path="web-dev/performance-and-metrics"
              element={<PerformanceAndMetrics />}
            />
            <Route path="web-dev/security" element={<Security />} />

            {/* other */}
            <Route path="dom-api" element={<DomApi />} />
            <Route path="css" element={<CSS />} />
            <Route path="javascript" element={<JavaScript />} />
            <Route path="react" element={<React />} />
            <Route
              path="general-programming"
              element={<GeneralProgramming />}
            />
            <Route path="behavioral" element={<Behavioral />} />
            <Route path="interview-prep" element={<InterviewPrep />} />
            <Route
              path="interview-prep/questions-for-interviewer"
              element={<QuestionsForInterviewer />}
            />
            <Route
              path="interview-prep/handling-coding-exercises"
              element={<HandlingCodingExercises />}
            />

            <Route path="html" element={<HTML />} />

            {/* system design */}
            <Route
              path="frontend-system-design"
              element={<SystemDesignDocs />}
            />
            <Route
              path="frontend-system-design/requirements"
              element={<Requirements />}
            />
            <Route
              path="frontend-system-design/architecture"
              element={<Architecture />}
            />

            {/* project management */}
            <Route path="project-management" element={<ProjectManagement />} />
            {/* <Route
              path="project-management/initiation"
              element={<Initiation />}
            /> */}
            {/* <Route path="project-management/planning" element={<Planning />} />
            <Route
              path="project-management/execution-and-control"
              element={<ExecutionAndControl />}
            />
            <Route
              path="project-management/monitoring-and-evaluation"
              element={<MonitoringAndEvaluation />}
            /> */}
            <Route
              path="project-management/methodologies"
              element={<Methodologies />}
            />
            <Route
              path="project-management/frameworks"
              element={<Frameworks />}
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
