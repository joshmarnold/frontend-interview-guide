import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

const TopicsList = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "#444",
          padding: "11px",
        }}
        onClick={() => setShow(!show)}
      >
        <h4 style={{ margin: 0 }}>
          {show ? "Hide " : "Show "}
          list of topics covered
        </h4>
        {show ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
      </div>
      {show && (
        <div style={{ backgroundColor: "#333", padding: "11px" }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default TopicsList;
