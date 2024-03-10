import React, { useState } from "react";

const QuestionAnswer = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      className="questionAnswer"
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: "5px",
      }}
    >
      <div
        className="flex between question"
        style={{
          padding: "11px",
          alignItems: "center",
        }}
        onClick={toggleAnswer}
      >
        <span>{question}</span>
        <span className="showAnswer">
          {showAnswer ? "Click to Hide Answer" : "Click to Show Answer"}
        </span>
      </div>
      {showAnswer && <p style={{ padding: "14px" }}>{answer}</p>}
    </div>
  );
};

export default QuestionAnswer;
