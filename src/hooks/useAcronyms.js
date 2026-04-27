import { useState, useMemo, useEffect } from "react";
import { useExam } from "@/context/ExamContext";
import { useSupabaseQuery } from "@/hooks/useSupabaseQuery";
import { getAcronymsWithConcepts } from "@/services/acronymsService";

function groupData(items) {
  const result = {};
  for (const item of items) {
    if (!result[item.category]) result[item.category] = {};
    if (!result[item.category][item.subcategory])
      result[item.category][item.subcategory] = [];
    result[item.category][item.subcategory].push(item);
  }
  return result;
}

export function useAcronyms() {
  const { exam } = useExam();
  const { data, loading, error } = useSupabaseQuery(
    () => getAcronymsWithConcepts(exam),
    [exam]
  );

  const activeAcronyms = data ?? [];

  const [search, setSearch]                   = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [collapsed, setCollapsed]             = useState({});
  const [hideAllDefs, setHideAllDefs]         = useState(false);
  const [hiddenRows, setHiddenRows]           = useState({});
  const [expandedRows, setExpandedRows]       = useState({});
  const [quizMode, setQuizMode]               = useState(false);
  const [quizAnswers, setQuizAnswers]         = useState({});

  useEffect(() => {
    setSelectedCategory("All");
    setSearch("");
    setQuizAnswers({});
    setQuizMode(false);
  }, [exam]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return activeAcronyms.filter((a) => {
      const matchesCategory =
        selectedCategory === "All" || a.category === selectedCategory;
      if (!q) return matchesCategory;
      const haystack = [
        a.acronym,
        a.definition,
        a.whatItDoes,
        a.whyInvented,
        a.problemSolved,
        a.analogy,
        a.examUseCase,
        a.trigger,
        a.answer,
        a.examTrap,
        ...(Array.isArray(a.compare)
          ? a.compare.flatMap((c) => [c.term, c.fullName, c.keyIdea, c.useCases, c.analogy])
          : []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return matchesCategory && haystack.includes(q);
    });
  }, [search, selectedCategory, activeAcronyms]);

  const grouped = useMemo(() => groupData(filtered), [filtered]);
  const isSearching = search.trim().length > 0;

  const toggleSubcategory = (key) =>
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleRow = (key) =>
    setHiddenRows((prev) => ({
      ...prev,
      [key]: !(prev[key] !== undefined ? prev[key] : hideAllDefs),
    }));

  const isDefHidden = (key) =>
    hiddenRows[key] !== undefined ? hiddenRows[key] : hideAllDefs;

  const toggleHideAll = () => {
    setHideAllDefs((v) => !v);
    setHiddenRows({});
  };

  const toggleQuizMode = () => {
    setQuizMode((v) => !v);
    setQuizAnswers({});
  };

  const toggleExpanded = (key) =>
    setExpandedRows((prev) => ({ ...prev, [key]: !prev[key] }));

  const isExpanded = (key) => !!expandedRows[key];

  const setQuizAnswer = (rowKey, value) =>
    setQuizAnswers((prev) => ({ ...prev, [rowKey]: value }));

  const uniqueCategories = ["All", ...new Set(activeAcronyms.map((a) => a.category))];
  const pillCategories = uniqueCategories.map((cat) => ({
    label: cat,
    count:
      cat === "All"
        ? activeAcronyms.length
        : activeAcronyms.filter((a) => a.category === cat).length,
  }));

  return {
    exam,
    loading,
    error,
    activeAcronyms,
    filtered,
    grouped,
    isSearching,
    search,
    selectedCategory,
    collapsed,
    hideAllDefs,
    hiddenRows,
    quizMode,
    quizAnswers,
    pillCategories,
    setSearch,
    setSelectedCategory,
    setQuizAnswer,
    toggleSubcategory,
    toggleRow,
    isDefHidden,
    toggleHideAll,
    toggleQuizMode,
    toggleExpanded,
    isExpanded,
  };
}
