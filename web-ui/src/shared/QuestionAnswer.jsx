import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionSummary, AccordionDetails } from "./Accordion";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const QuestionAnswer = ({
  question,
  answer,
  index,
  storageKey,
  handleGlobalChange,
  isGloballyChecked,
  timeout = 0,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isAnswered, setIsAnswered] = useState(isGloballyChecked);

  useEffect(() => {
    setIsAnswered(isGloballyChecked);
  }, [isGloballyChecked]);

  useEffect(() => {
    const storedState = localStorage.getItem(`${storageKey}_${index}`);
    if (storedState) {
      setIsAnswered(JSON.parse(storedState));
    }
  }, [index, storageKey]);

  const handleCheckboxChange = (event) => {
    setIsAnswered(event.target.checked);
    localStorage.setItem(`${storageKey}_${index}`, event.target.checked);
    handleGlobalChange(index, event.target.checked);
  };

  return (
    <Accordion
      onChange={() => {
        setExpanded(!expanded);
      }}
      expanded={expanded}
      disableGutters
      slotProps={{ transition: { timeout } }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{
          "& .MuiAccordionSummary-content": {
            margin: 0,
            padding: 0,
            alignItems: "center",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            transform: "rotate(90deg)",
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(0deg)",
          },
        }}
      >
        <Checkbox
          checked={isAnswered}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()} // Prevent Accordion toggle when interacting with the Checkbox
          onFocus={(e) => e.stopPropagation()}
          color="primary"
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "white",
            },
          }}
        />
        <Typography>{question}</Typography>
        <ContentCopyIcon
          sx={{
            marginLeft: "5px",
            fontSize: ".9rem",
            opacity: 0.5,
            cursor: "pointer",
            transition: "all 0.1s",

            "&:hover": {
              opacity: 1,
            },

            "&:active": {
              transform: "translateY(1px)",
            },
          }}
          onClick={(e) => {
            e.stopPropagation();
            const el = document.getElementById(`panel${index}-header`);
            const text = el.textContent;
            navigator.clipboard.writeText(text);
          }}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default QuestionAnswer;
