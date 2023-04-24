import { useEffect, useState } from "react";

function QuestionAnswer({
  qid,
  question,
  answer,
  checkedQuestions,
  setCheckedQuestions,
}) {
  const [answerShow, setAnswerShow] = useState(false);
  const [questionCheck, setQuestionCheck] = useState(false);

  useEffect(() => {
    setQuestionCheck(checkedQuestions.includes(qid));
  }, [checkedQuestions, qid]);

  const checkQuestion = () => {
    setQuestionCheck((prev) => !prev);
    setCheckedQuestions((prev) => {
      const updQ = !questionCheck
        ? [...prev, qid]
        : prev.filter((v) => v !== qid);

      localStorage.setItem(
        "question-bank__checked-questions",
        JSON.stringify(updQ)
      );

      return updQ;
    });
  };

  const showAnswer = () => {
    setAnswerShow((prev) => !prev);
  };

  return (
    <div className="border-b border-solid p-2 border-slate-200">
      <div className="question-row flex items-center">
        <div className="question-text flex-1 pr-2 text-slate-800 text-sm">
          {question}
        </div>
        <div className="question-actions flex items-center">
          <button
            onClick={showAnswer}
            type="button"
            className={`toggle-answer-visibility mr-3 text-sm ${
              answerShow ? "bg-slate-900" : "bg-white"
            } text-prim-500 px-4 py-1 rounded-full border border-slate-200`}
          >
            {answerShow ? "Hide" : "Seek"}
          </button>
          <button
            type="button"
            className={`w-6 h-6 p-1 bg-clip-content border border-slate-300 rounded-full ${
              questionCheck ? "bg-prim-600" : "bg-transparent"
            }`}
            id={qid}
            onClick={checkQuestion}
          >
            {" "}
          </button>
        </div>
      </div>
      {answerShow && (
        <div className="answer-body mt-3">
          <p className="font-bold text-lg mb-1 text-slate-800">{question}</p>
          <p className="text-prim-500 text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionAnswer;
