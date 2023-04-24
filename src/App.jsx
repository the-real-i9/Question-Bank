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
      {questions.map(({ qid, question, answer }) => (
        <QuestionAnswer
          key={qid}
          qid={qid}
          question={question}
          answer={answer}
          checkedQuestions={checkedQuestions}
          setCheckedQuestions={setCheckedQuestions}
        />
      ))}
    </div>
  );
}

export default App;
