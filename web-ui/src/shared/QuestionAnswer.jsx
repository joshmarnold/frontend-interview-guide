import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";

const QuestionAnswer = ({
  question,
  answer,
  index,
  storageKey,
  handleGlobalChange,
  isGloballyChecked,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
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

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleCheckboxChange = (event) => {
    setIsAnswered(event.target.checked);
    localStorage.setItem(`${storageKey}_${index}`, event.target.checked);
    handleGlobalChange(index, event.target.checked);
  };

  return (
    <div className="questionAnswer">
      <div
        className="flex between question"
        style={{ padding: "0px", alignItems: "center" }}
        onClick={toggleAnswer}
      >
        <div className="flex center">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Checkbox
              checked={isAnswered}
              onChange={handleCheckboxChange}
              color="primary"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
          </div>
          <span>{question}</span>
        </div>
        <span className="showAnswer">
          {showAnswer ? (
            <ExpandMore style={{ fontSize: "20px" }} />
          ) : (
            <ChevronRightIcon style={{ fontSize: "20px" }} />
          )}
        </span>
      </div>
      {showAnswer && <p className="answer">{answer}</p>}
    </div>
  );
};

export default QuestionAnswer;
