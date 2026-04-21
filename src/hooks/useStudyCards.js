import { useState, useCallback, useEffect } from "react";
import { useExam } from "@/context/ExamContext";
import { useSupabaseQuery } from "@/hooks/useSupabaseQuery";
import { getQuestions } from "@/services/questionsService";

export function useStudyCards() {
  const { exam } = useExam();
  const { data: activeQuestions, loading, error } = useSupabaseQuery(
    () => getQuestions(exam),
    [exam]
  );

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showBothSides, setShowBothSides]         = useState(false);
  const [currentIndex, setCurrentIndex]           = useState(0);
  const [cardKey, setCardKey]                     = useState(0);

  useEffect(() => {
    setSelectedCategory("All");
    setCurrentIndex(0);
    setCardKey((k) => k + 1);
  }, [exam]);

  const questions = activeQuestions ?? [];

  const filteredCards =
    selectedCategory === "All"
      ? questions
      : questions.filter((q) => q.category === selectedCategory);

  const currentCard = filteredCards[currentIndex];
  const progress =
    filteredCards.length > 0 ? ((currentIndex + 1) / filteredCards.length) * 100 : 0;

  const bumpKey = () => setCardKey((k) => k + 1);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, filteredCards.length - 1));
    setCardKey((k) => k + 1);
  }, [filteredCards.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
    setCardKey((k) => k + 1);
  }, []);

  const handleShuffle = () => {
    setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
    bumpKey();
  };

  const handleReset = () => {
    setCurrentIndex(0);
    bumpKey();
  };

  const handleCategoryFilter = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    bumpKey();
  };

  // Derive categories in first-appearance order — same logic as the old static export
  const uniqueCategories = [...new Set(questions.map((q) => q.category))];
  const pillCategories = [
    { label: "All", count: questions.length },
    ...uniqueCategories.map((cat) => ({
      label: cat,
      count: questions.filter((q) => q.category === cat).length,
    })),
  ];

  return {
    exam,
    loading,
    error,
    filteredCards,
    currentCard,
    currentIndex,
    cardKey,
    progress,
    selectedCategory,
    showBothSides,
    pillCategories,
    setCurrentIndex,
    setCardKey,
    setShowBothSides,
    goNext,
    goPrev,
    handleShuffle,
    handleReset,
    handleCategoryFilter,
  };
}
