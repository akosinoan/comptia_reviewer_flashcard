import { createContext, useContext, useState, useEffect } from "react";

const ExamContext = createContext(null);

export function ExamProvider({ children }) {
  const [exam, setExam] = useState(() => {
    return localStorage.getItem("selectedExam") || "core1";
  });

  useEffect(() => {
    localStorage.setItem("selectedExam", exam);
  }, [exam]);

  return (
    <ExamContext.Provider value={{ exam, setExam }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  return useContext(ExamContext);
}
