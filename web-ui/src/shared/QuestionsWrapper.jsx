import { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import Button from "@mui/material/Button";

const QuestionsWrapper = ({ questions, storageKey }) => {
  const selectAllKey = `${storageKey}_all`; 
  const [selectAll, setSelectAll] = useState(() => {
    const storedSelectAll = localStorage.getItem(selectAllKey);
    return storedSelectAll ? JSON.parse(storedSelectAll) : false;
  });

  const handleGlobalChange = (index, checked) => {
  };

  const toggleSelectAll = () => {
    const newSelectAllStatus = !selectAll;
    setSelectAll(newSelectAllStatus);
    localStorage.setItem(selectAllKey, newSelectAllStatus); 
    questions.forEach((_, index) => {
      localStorage.setItem(`${storageKey}_${index}`, newSelectAllStatus);
    });

  };

  return (
    <>
      <span>
        <Button onClick={toggleSelectAll}>
          {selectAll ? "Unselect All" : "Select All"}
        </Button>
      </span>
      <div className="questions-wrapper">
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
    </>
  );
};

export default QuestionsWrapper;
