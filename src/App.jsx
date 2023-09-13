import { useEffect, useState } from "react";
import QuestionAnswer from "./components/QuestionAnswer";
import useSelectiveQuestionsImport from "./hooks/useSelectiveQuestionsImport";

function App() {
  const [checkedQuestions, setCheckedQuestions] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("HTTP");
  const [showSubjectsModal, setShowSubjectsModal] = useState(false);
  const [subjectQuestions, setSubjectQuestions] = useState([]);

  useEffect(() => {
    setSelectedSubject(
      localStorage.getItem("question-bank__selected-subject") ||
        "HTTP"
    );
    setCheckedQuestions(
      JSON.parse(
        localStorage.getItem("question-bank__checked-questions") || "[]"
      )
    );
  }, []);

  const subjects = [
    "Operating Systems",
    "Databases",
    "Comp. Networking",
    "HTTP",
    "Security",
    "Caching",
    "Interview",
  ];

  useSelectiveQuestionsImport(selectedSubject, setSubjectQuestions);

  return (
    <div className="App relative h-full">
      <div className="flex justify-between p-2">
        <div className="logo font-bold text-xl">
          <span className="text-prim-500">Q</span>B
        </div>
        <button
          onClick={() => setShowSubjectsModal((prev) => !prev)}
          type="button"
          className="show-subjects text-sm px-2 rounded-lg bg-prim-700 font-semibold text-white"
        >
          Subjects
        </button>
      </div>
      <div className="subject text-center font-bold my-2 text-prim-900">
        {selectedSubject}
      </div>
      {subjectQuestions.map((item) =>
        typeof item === "string" ? (
          <div
            key={item}
            className="topic text-center font-bold my-2 text-xs text-prim-900"
          >
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
      {showSubjectsModal && (
        <div className="subjects-modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-60 bg-white shadow rounded-xl">
          <div className="title text-center mb-3 mt-1 font-bold">Subjects</div>
          <div className="subject-list grid grid-cols-4 gap-2 gap-x-4 w-full px-3">
            {subjects.map((subName) => (
              <button
                onClick={() => {
                  setSelectedSubject(subName);
                  localStorage.setItem(
                    "question-bank__selected-subject",
                    subName
                  );
                  setShowSubjectsModal(false);
                }}
                key={subName}
                type="button"
                className="text-xs text-prim-600 py-0.5"
              >
                {subName}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
