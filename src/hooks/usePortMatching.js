import { useState, useEffect } from "react";
import { useExam } from "@/context/ExamContext";
import { shuffle } from "@/utils/shuffle";
import { PORTS_CORE2 } from "@/data/portsCore2";
import { PORTS_CORE1 as ALL_PORTS } from "@/data/portsCore1";

export function usePortMatching() {
  const { exam } = useExam();
  const activePorts = exam === "core2" ? PORTS_CORE2 : ALL_PORTS;

  const [shuffledPorts, setShuffledPorts] = useState(() => [...activePorts]);
  const [shuffledNames, setShuffledNames] = useState(() => shuffle(activePorts));
  const [selectedPortId, setSelectedPortId] = useState(null);
  const [matched, setMatched] = useState({});
  const [wrong, setWrong] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [quizMode, setQuizMode] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizOrder, setQuizOrder] = useState(() => [...activePorts]);

  useEffect(() => {
    setShuffledPorts([...activePorts]);
    setShuffledNames(shuffle(activePorts));
    setSelectedPortId(null);
    setMatched({});
    setWrong(null);
    setAttempts(0);
    setQuizAnswers({});
    setQuizOrder([...activePorts]);
  }, [exam]); // eslint-disable-line react-hooks/exhaustive-deps

  const matchedCount = Object.keys(matched).length;
  const allMatched = matchedCount === activePorts.length;
  const accuracy = attempts > 0 ? Math.round((matchedCount / attempts) * 100) : null;

  const reset = () => {
    setShuffledPorts([...activePorts]);
    setShuffledNames(shuffle(activePorts));
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
    setQuizOrder([...activePorts]);
  };

  return {
    exam,
    activePorts,
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
