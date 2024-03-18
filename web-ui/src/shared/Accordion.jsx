import { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "&::before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const MaterialAccordionItem = ({
  title,
  description,
  expanded,
  onChange,
  timeout,
}) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      slotProps={{ transition: { unmountOnExit: true, timeout } }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const MaterialHondaAccordion = ({ items, timeout, openedByDefault }) => {
  // Use initialOpenPanel to set the initially expanded panel
  // Assuming initialOpenPanel is an index, convert it to the panelId format
  const initialPanelId = `panel${openedByDefault}`;
  const [expandedPanel, setExpandedPanel] = useState(initialPanelId);

  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "6px",
        border: `1px solid #333`,
      }}
    >
      {items.map((item, index) => {
        const panelId = `panel${index}`;
        return (
          <MaterialAccordionItem
            key={index}
            title={item.title}
            description={item.description}
            expanded={expandedPanel === panelId}
            onChange={() => {
              setExpandedPanel(expandedPanel === panelId ? false : panelId);
            }}
            timeout={timeout}
          />
        );
      })}
    </div>
  );
};

export default MaterialHondaAccordion;
