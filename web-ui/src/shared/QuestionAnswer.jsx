import React, { useState } from "react";

const QuestionAnswer = ({ question, answer, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="questionAnswer">
      <div
        className="flex between question"
        style={{
          padding: "11px",
          alignItems: "center",
        }}
        onClick={toggleAnswer}
      >
        <span>
          {index + 1}. {question}
        </span>
        <span className="showAnswer">
          {showAnswer ? "Click to Hide Answer" : "Click to Show Answer"}
        </span>
      </div>
      {showAnswer && <p className="answer">{answer}</p>}
    </div>
  );
};

export default QuestionAnswer;
