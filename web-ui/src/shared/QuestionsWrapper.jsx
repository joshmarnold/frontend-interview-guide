import QuestionAnswer from "./QuestionAnswer";

const QuestionsWrapper = ({ questions, storageKey }) => {
  return (
    <div className="questions-wrapper">
      {questions.map((qa, index) => (
        <QuestionAnswer
          key={index}
          question={qa.question}
          answer={qa.answer}
          index={index}
          storageKey={storageKey}
        />
      ))}
    </div>
  );
};

export default QuestionsWrapper;
