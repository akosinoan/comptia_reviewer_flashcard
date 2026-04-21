import { useState, useMemo, useEffect } from "react";
import { useExam } from "@/context/ExamContext";
import { COMMANDS_CORE2, COMMAND_CATEGORIES } from "@/data/commandsCore2";
import { COMMANDS_NETPLUS, COMMAND_CATEGORIES_NETPLUS } from "@/data/commandsNetPlus";

export function useCommandFilter() {
  const { exam } = useExam();
  const activeCommands = exam === "netplus" ? COMMANDS_NETPLUS : COMMANDS_CORE2;
  const activeCategories = exam === "netplus" ? COMMAND_CATEGORIES_NETPLUS : COMMAND_CATEGORIES;

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState(
    () => new Set(activeCategories)
  );

  useEffect(() => {
    setSearchTerm("");
    setExpandedCategories(new Set(activeCategories));
  }, [exam]); // eslint-disable-line react-hooks/exhaustive-deps

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return activeCommands;
    return activeCommands.filter(
      (c) =>
        c.windows.cmd.toLowerCase().includes(q) ||
        c.windows.description.toLowerCase().includes(q) ||
        c.windows.example.toLowerCase().includes(q) ||
        c.linux.cmd.toLowerCase().includes(q) ||
        c.linux.description.toLowerCase().includes(q) ||
        c.linux.example.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }, [searchTerm, activeCommands]); // eslint-disable-line react-hooks/exhaustive-deps

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
