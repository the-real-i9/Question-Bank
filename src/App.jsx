import { useEffect, useState } from "react";
import QuestionAnswer from "./components/QuestionAnswer";
import questions from "./lib/questAns.json";

function App() {
  const [checkedQuestions, setCheckedQuestions] = useState([]);

  useEffect(() => {
    setCheckedQuestions(
      JSON.parse(
        localStorage.getItem("question-bank__checked-questions") || "[]"
      )
    );
  }, []);

  return (
    <div className="App">
      {questions.map((item) =>
        typeof item === "string" ? (
          <div className="topic text-center font-bold my-2 text-xs text-prim-900">
            {item}
          </div>
        ) : (
          <QuestionAnswer
            key={item.qid}
            qid={item.qid}
            question={item.question}
            answer={item.answer}
            checkedQuestions={checkedQuestions}
            setCheckedQuestions={setCheckedQuestions}
          />
        )
      )}
    </div>
  );
}

export default App;
