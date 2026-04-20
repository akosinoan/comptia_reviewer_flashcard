import { useState, useMemo, useEffect } from "react";
import { useExam } from "@/context/ExamContext";
import { ACRONYMS_CORE2 } from "@/data/acronymsCore2";
import { ACRONYMS } from "@/data/acronymsCore1";

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
  const activeAcronyms = exam === "core2" ? ACRONYMS_CORE2 : ACRONYMS;
  const activeCategories = ["All", ...new Set(activeAcronyms.map((a) => a.category))];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [collapsed, setCollapsed] = useState({});
  const [hideAllDefs, setHideAllDefs] = useState(false);
  const [hiddenRows, setHiddenRows] = useState({});
  const [quizMode, setQuizMode] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});

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
      const matchesSearch =
        !q ||
        a.acronym.toLowerCase().includes(q) ||
        a.definition.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory, exam]); // eslint-disable-line react-hooks/exhaustive-deps

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

  const setQuizAnswer = (rowKey, value) =>
    setQuizAnswers((prev) => ({ ...prev, [rowKey]: value }));

  const pillCategories = activeCategories.map((cat) => ({
    label: cat,
    count:
      cat === "All"
        ? activeAcronyms.length
        : activeAcronyms.filter((a) => a.category === cat).length,
  }));

  return {
    exam,
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
  };
}
