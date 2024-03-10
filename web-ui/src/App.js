import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "highlight.js/styles/stackoverflow-dark.css"; // Import the CSS file
import "./App.scss";

const Home = lazy(() => import("./pages/Home"));
const DomApi = lazy(() => import("./pages/DomApi"));
const GeneralProgramming = lazy(() => import("./pages/GeneralProgramming"));
const React = lazy(() => import("./pages/React"));
const CSS = lazy(() => import("./pages/CSS"));
const JavaScript = lazy(() => import("./pages/Javascript"));
const Layout = lazy(() => import("./shared/Layout"));
const Array = lazy(() => import("./pages/Array"));
const Backtracking = lazy(() => import("./pages/Backtracking"));
const BFS = lazy(() => import("./pages/BFS"));
const BinarySearch = lazy(() => import("./pages/BinarySearch"));
const BinaryTree = lazy(() => import("./pages/BinaryTree"));
const DFS = lazy(() => import("./pages/DFS"));
const Graph = lazy(() => import("./pages/Graph"));
const Heap = lazy(() => import("./pages/Heap"));
const HowToApproach = lazy(() => import("./pages/HowToApproach"));
const LinkedList = lazy(() => import("./pages/LinkedList"));
const DSAndAlgos = lazy(() => import("./pages/DSAndAlgos"));
const Map = lazy(() => import("./pages/Map"));
const Queue = lazy(() => import("./pages/Queue"));
const Recursion = lazy(() => import("./pages/Recursion"));
const Set = lazy(() => import("./pages/Set"));
const Stack = lazy(() => import("./pages/Stack"));
const String = lazy(() => import("./pages/String"));
const Trie = lazy(() => import("./pages/Trie"));
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

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/topic" element={<Layout />}>
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
            <Route path="css-questions" element={<CSS />} />
            <Route path="javascript-questions" element={<JavaScript />} />
            <Route path="react-questions" element={<React />} />
            <Route
              path="general-programming"
              element={<GeneralProgramming />}
            />

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
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;