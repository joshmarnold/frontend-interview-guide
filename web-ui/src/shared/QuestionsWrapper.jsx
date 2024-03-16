import { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import Button from "@mui/material/Button";

const QuestionsWrapper = ({ questions, storageKey }) => {
  const [selectAll, setSelectAll] = useState(false);

  const handleGlobalChange = (index, checked) => {
    // This function can be expanded to handle individual checkbox changes globally if needed
  };

  const toggleSelectAll = () => {
    const newSelectAllStatus = !selectAll;
    setSelectAll(newSelectAllStatus);
    questions.forEach((_, index) => {
      localStorage.setItem(`${storageKey}_${index}`, newSelectAllStatus);
    });
  };

  return (
    <div className="questions-wrapper">
      <span>
        <Button onClick={toggleSelectAll}>
          {selectAll ? "Unselect All" : "Select All"}
        </Button>
      </span>
      {questions.map((qa, index) => (
        <QuestionAnswer
          key={index}
          question={qa.question}
          answer={qa.answer}
          index={index}
          storageKey={storageKey}
          handleGlobalChange={handleGlobalChange}
          isGloballyChecked={selectAll}
        />
      ))}
    </div>
  );
};

export default QuestionsWrapper;
