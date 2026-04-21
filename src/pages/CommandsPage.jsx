import { Button } from "@/components/ui/button";
import SearchInput from "@/components/shared/SearchInput";
import CommandCategory from "@/components/commands/CommandCategory";
import { useCommandFilter } from "@/hooks/useCommandFilter";
import { useExam } from "@/context/ExamContext";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function CommandsPage() {
  const { exam } = useExam();
  const {
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
  } = useCommandFilter();

  if (loading) return <LoadingSpinner message="Loading commands…" />;
  if (error) return <LoadingSpinner message="Failed to load commands. Check your connection." />;

  const subtitle =
    exam === "netplus"
      ? "CompTIA Network+ (N10-009) — Networking CLI tools reference"
      : "CompTIA A+ Core 2 (220-1202) — Windows & Linux command-line reference";

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">CLI Commands</h1>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search commands, descriptions, examples..."
          className="rounded-md border-input focus:ring-primary flex-1"
        />
        <Button variant="outline" size="sm" onClick={toggleAll} className="shrink-0">
          {allExpanded ? "Collapse All" : "Expand All"}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mb-4">
        {filtered.length} command{filtered.length !== 1 ? "s" : ""} across{" "}
        {grouped.size} categor{grouped.size !== 1 ? "ies" : "y"}
      </p>

      {grouped.size === 0 ? (
        <p className="text-muted-foreground text-center py-16">
          No commands match your search.
        </p>
      ) : (
        <div className="space-y-4">
          {[...grouped.entries()].map(([category, cmds]) => (
            <CommandCategory
              key={category}
              category={category}
              cmds={cmds}
              isOpen={expandedCategories.has(category)}
              onToggle={() => toggleCategory(category)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
