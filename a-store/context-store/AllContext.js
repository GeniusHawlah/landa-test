import { createContext, useEffect, useState } from "react";
import { clone, cloneDeep } from "lodash";
import secureLocalStorage from "react-secure-storage";
import Router, { useRouter } from "next/router";
const AllContext = createContext();

export function AllContextProvider(props) {
  const router = useRouter();
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
