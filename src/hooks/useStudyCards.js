import { useState, useCallback, useEffect } from "react";
import { questions, categories } from "@/data/questions";
import { questionsCore2, categoriesCore2 } from "@/data/questionsCore2";
import { questionsNetPlus, categoriesNetPlus } from "@/data/questionsNetPlus";
import { useExam } from "@/context/ExamContext";

export function useStudyCards() {
  const { exam } = useExam();
  const activeQuestions =
    exam === "core2" ? questionsCore2 : exam === "netplus" ? questionsNetPlus : questions;
  const activeCategories =
    exam === "core2" ? categoriesCore2 : exam === "netplus" ? categoriesNetPlus : categories;

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showBothSides, setShowBothSides] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardKey, setCardKey] = useState(0);

  useEffect(() => {
    setSelectedCategory("All");
    setCurrentIndex(0);
    setCardKey((k) => k + 1);
  }, [exam]);

  const filteredCards =
    selectedCategory === "All"
      ? activeQuestions
      : activeQuestions.filter((q) => q.category === selectedCategory);

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

  const pillCategories = [
    { label: "All", count: activeQuestions.length },
    ...activeCategories.map((cat) => ({
      label: cat,
      count: activeQuestions.filter((q) => q.category === cat).length,
    })),
  ];

  return {
    exam,
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
