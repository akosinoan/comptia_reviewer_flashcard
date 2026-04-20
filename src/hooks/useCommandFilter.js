import { useState, useMemo } from "react";
import { COMMANDS_CORE2, COMMAND_CATEGORIES } from "@/data/commandsCore2";

export function useCommandFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState(
    () => new Set(COMMAND_CATEGORIES)
  );

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return COMMANDS_CORE2;
    return COMMANDS_CORE2.filter(
      (c) =>
        c.windows.cmd.toLowerCase().includes(q) ||
        c.windows.description.toLowerCase().includes(q) ||
        c.windows.example.toLowerCase().includes(q) ||
        c.linux.cmd.toLowerCase().includes(q) ||
        c.linux.description.toLowerCase().includes(q) ||
        c.linux.example.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }, [searchTerm]);

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
