import { createContext, useEffect, useState } from "react";

const AllContext = createContext();

export function AllContextProvider(props) {
  const [subjectModalClicked, setSubjectModalClicked] = useState(false);
  const [assessmentAvailable, setAssessmentAvailable] = useState(false);

  const context = {
    subjectModalClicked,
    assessmentAvailable,

    setSubjectModalClicked,
    setAssessmentAvailable,
  };

  useEffect(() => {}, []);

  return (
    <AllContext.Provider value={context}>{props.children}</AllContext.Provider>
  );

  // functions below
}

export default AllContext;
