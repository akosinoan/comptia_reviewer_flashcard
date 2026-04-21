import { useState, useMemo, useEffect } from "react";
import { useExam } from "@/context/ExamContext";
import { useSupabaseQuery } from "@/hooks/useSupabaseQuery";
import { getCommands } from "@/services/commandsService";

export function useCommandFilter() {
  const { exam } = useExam();
  // Commands only exist for core2 and netplus; core1 falls back to core2
  const dbExam = exam === "netplus" ? "netplus" : "core2";
  const { data, loading, error } = useSupabaseQuery(
    () => getCommands(dbExam),
    [dbExam]
  );

  const activeCommands = data ?? [];

  // Derive category list in first-appearance order
  const activeCategories = [...new Set(activeCommands.map((c) => c.category))];

  const [searchTerm, setSearchTerm]           = useState("");
  const [expandedCategories, setExpandedCategories] = useState(() => new Set());

  // Expand all categories whenever data or exam changes
  useEffect(() => {
    setSearchTerm("");
    setExpandedCategories(new Set(activeCategories));
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return activeCommands;
    return activeCommands.filter(
      (c) =>
        c.windows?.cmd?.toLowerCase().includes(q) ||
        c.windows?.description?.toLowerCase().includes(q) ||
        c.windows?.example?.toLowerCase().includes(q) ||
        c.linux?.cmd?.toLowerCase().includes(q) ||
        c.linux?.description?.toLowerCase().includes(q) ||
        c.linux?.example?.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }, [searchTerm, activeCommands]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const cmd of filtered) {
      if (!map.has(cmd.category)) map.set(cmd.category, []);
      map.get(cmd.category).push(cmd);
    }
    return map;
  }, [filtered]);

  const toggleCategory = (cat) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const allExpanded = expandedCategories.size === grouped.size;

  const toggleAll = () => {
    if (allExpanded) setExpandedCategories(new Set());
    else setExpandedCategories(new Set(grouped.keys()));
  };

  return {
    loading,
    error,
    searchTerm,
    filtered,
    grouped,
    expandedCategories,
    allExpanded,
    setSearchTerm,
    toggleCategory,
    toggleAll,
  };
}
