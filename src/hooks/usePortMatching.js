import { useState, useEffect } from "react";
import { useExam } from "@/context/ExamContext";
import { useSupabaseQuery } from "@/hooks/useSupabaseQuery";
import { shuffle } from "@/utils/shuffle";
import { getPorts } from "@/services/portsService";

export function usePortMatching() {
  const { exam } = useExam();
  const { data: activePorts, loading, error } = useSupabaseQuery(
    () => getPorts(exam),
    [exam]
  );

  const [shuffledPorts, setShuffledPorts]   = useState([]);
  const [shuffledNames, setShuffledNames]   = useState([]);
  const [selectedPortId, setSelectedPortId] = useState(null);
  const [matched, setMatched]               = useState({});
  const [wrong, setWrong]                   = useState(null);
  const [attempts, setAttempts]             = useState(0);
  const [quizMode, setQuizMode]             = useState(false);
  const [quizAnswers, setQuizAnswers]       = useState({});
  const [quizOrder, setQuizOrder]           = useState([]);

  // Reinitialize game state whenever data arrives or exam changes
  useEffect(() => {
    if (!activePorts) return;
    setShuffledPorts([...activePorts]);
    setShuffledNames(shuffle(activePorts));
    setSelectedPortId(null);
    setMatched({});
    setWrong(null);
    setAttempts(0);
    setQuizAnswers({});
    setQuizOrder([...activePorts]);
  }, [activePorts]);

  const ports = activePorts ?? [];
  const matchedCount = Object.keys(matched).length;
  const allMatched   = ports.length > 0 && matchedCount === ports.length;
  const accuracy     = attempts > 0 ? Math.round((matchedCount / attempts) * 100) : null;

  const reset = () => {
    setShuffledPorts([...ports]);
    setShuffledNames(shuffle(ports));
    setSelectedPortId(null);
    setMatched({});
    setWrong(null);
    setAttempts(0);
  };

  const handlePortClick = (id) => {
    if (matched[id] || wrong) return;
    setSelectedPortId(id === selectedPortId ? null : id);
  };

  const handleNameClick = (id) => {
    if (!selectedPortId || matched[id] || wrong) return;
    setAttempts((a) => a + 1);
    if (selectedPortId === id) {
      setMatched((m) => ({ ...m, [id]: true }));
      setSelectedPortId(null);
    } else {
      setWrong({ portId: selectedPortId, nameId: id });
      setTimeout(() => {
        setWrong(null);
        setSelectedPortId(null);
      }, 700);
    }
  };

  const toggleQuizMode = () => {
    setQuizMode((v) => !v);
    setQuizAnswers({});
    setQuizOrder([...ports]);
  };

  return {
    exam,
    loading,
    error,
    activePorts: ports,
    shuffledPorts,
    shuffledNames,
    selectedPortId,
    matched,
    wrong,
    attempts,
    matchedCount,
    allMatched,
    accuracy,
    quizMode,
    quizAnswers,
    quizOrder,
    setShuffledPorts,
    setShuffledNames,
    setQuizAnswers,
    setQuizOrder,
    reset,
    handlePortClick,
    handleNameClick,
    toggleQuizMode,
  };
}
