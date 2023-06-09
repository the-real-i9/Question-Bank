import { useEffect } from "react";

function useSelectiveQuestionsImport(selectedSubject, setSubjectQuestions) {
  useEffect(() => {
    (async () => {
      let subjectQuestionsList = null;

      switch (selectedSubject) {
        case "Operating Systems":
          subjectQuestionsList = await import(
            "../lib/questions/operating-systems.json"
          );
          break;
        case "Databases":
          subjectQuestionsList = await import(
            "../lib/questions/databases.json"
          );
          break;
        case "Comp. Networking":
          subjectQuestionsList = await import(
            "../lib/questions/comp-networking.json"
          );
          break;
        case "HTTP":
          subjectQuestionsList = await import("../lib/questions/http.json");
          break;
        case "Security":
          subjectQuestionsList = await import("../lib/questions/security.json");
          break;
        case "Caching":
          subjectQuestionsList = await import("../lib/questions/caching.json");
          break;
        case "Interview":
          subjectQuestionsList = await import(
            "../lib/questions/interview.json"
          );
          break;
        default:
      }

      setSubjectQuestions(subjectQuestionsList.default);
    })();
  }, [selectedSubject, setSubjectQuestions]);
}

export default useSelectiveQuestionsImport;
