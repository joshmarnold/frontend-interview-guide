import { Suspense, lazy } from "react";
import Accordion from "../../shared/Accordion";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import { IconExternalLink } from "@tabler/icons-react";

const ThisSection = lazy(() => import("./ThisSection"));
const PrototypeSection = lazy(() => import("./PrototypeSection"));
const ModulesSection = lazy(() => import("./ModulesSection"));

const Resources = () => {
  const handleChipClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <h3>Resources</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <Chip
          label="Hoisting / Execution Context / Call Stack"
          onClick={() =>
            handleChipClick(
              "https://www.youtube.com/watch?v=-G9c4CMMUKc&list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB&index=1"
            )
          }
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="Event Loop"
          onClick={() =>
            handleChipClick(
              "https://www.youtube.com/watch?v=28AXSTCpsyU&list=PLillGF-Rfqbars4vKNtpcWVDUpVOVTlgB&index=3"
            )
          }
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="this, call, apply, bind"
          onClick={() =>
            handleChipClick("https://www.youtube.com/watch?v=fVXp7ZWjlO4")
          }
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="Prototype"
          onClick={() =>
            handleChipClick("https://www.youtube.com/watch?v=GhJTy5-X3kA")
          }
          icon={<IconExternalLink size={"1.2rem"} />}
        />
        <Chip
          label="Block scope and shadow DOM"
          onClick={() =>
            handleChipClick("https://youtu.be/lW_erSjyMeM?si=_PqotoCBcdXX40_0")
          }
          icon={<IconExternalLink size={"1.2rem"} />}
        />
      </div>
    </>
  );
};

const Wrapper = ({ children }) => {
  return <Suspense fallback={<CircularProgress />}>{children}</Suspense>;
};

const sections = [
  {
    title: "this, call, apply, bind",
    description: (
      <Wrapper>
        <ThisSection />
      </Wrapper>
    ),
  },
  {
    title: "Prototypal Inheritance",
    description: (
      <Wrapper>
        <PrototypeSection />
      </Wrapper>
    ),
  },
  {
    title: "Module Evolution",
    description: (
      <Wrapper>
        <ModulesSection />
      </Wrapper>
    ),
  },
];

const Learn = () => {
  return (
    <>
      <Accordion items={sections} timeout={0} />
      <Resources />
    </>
  );
};

export default Learn;
