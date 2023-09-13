import { useEffect } from "react";

export default function useSelectiveQuestionsImport(selectedSubject, setSubjectQuestions) {
  useEffect(() => {
    (async () => {
      let subjectQuestionsList = null;

      switch (selectedSubject) {
        case "Operating Systems":
          subjectQuestionsList = await import(
            "../lib/questions/operating-systems.js"
          );
          break;
        case "Databases":
          subjectQuestionsList = await import(
            "../lib/questions/databases.js"
          );
          break;
        case "Comp. Networking":
          subjectQuestionsList = await import(
            "../lib/questions/comp-networking.js"
          );
          break;
        case "HTTP":
          subjectQuestionsList = await import("../lib/questions/http.js");
          break;
        case "Security":
          subjectQuestionsList = await import("../lib/questions/security.js");
          break;
        case "Caching":
          subjectQuestionsList = await import("../lib/questions/caching.js");
          break;
        case "Interview":
          subjectQuestionsList = await import(
            "../lib/questions/interview.js"
          );
          break;
        default:
      }

      setSubjectQuestions(subjectQuestionsList.default);
    })();
  }, [selectedSubject, setSubjectQuestions]);
}
