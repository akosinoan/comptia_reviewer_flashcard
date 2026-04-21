import { Eye, EyeOff, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import CategoryPills from "@/components/shared/CategoryPills";
import AcronymSubcategory from "@/components/acronyms/AcronymSubcategory";
import { useAcronyms } from "@/hooks/useAcronyms";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function AcronymsPage() {
  const {
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
  } = useAcronyms();

  if (loading) return <LoadingSpinner message="Loading acronyms…" />;
  if (error) return <LoadingSpinner message="Failed to load acronyms. Check your connection." />;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader
        title="Acronym List"
        subtitle={
          exam === "core2"
            ? `CompTIA A+ Core 2 (220-1202) — ${activeAcronyms.length} acronyms`
            : exam === "netplus"
            ? `CompTIA Network+ (N10-009) — ${activeAcronyms.length} acronyms`
            : `CompTIA A+ Core 1 (220-1201) — ${activeAcronyms.length} acronyms`
        }
      />

      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search acronym or definition…"
        className="rounded-lg focus:ring-primary/50 mb-4"
      />

      <div className="mb-6">
        <CategoryPills
          categories={pillCategories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          size="xs"
        />
      </div>

      <div className="flex justify-start gap-2 mb-3">
        <Button
          variant="outline"
          size="sm"
          disabled={quizMode}
          onClick={toggleHideAll}
          className="gap-1.5"
        >
          {hideAllDefs ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
          {hideAllDefs ? "Show All Definitions" : "Hide All Definitions"}
        </Button>
        <Button
          variant={quizMode ? "default" : "outline"}
          size="sm"
          onClick={toggleQuizMode}
          className="gap-1.5"
        >
          <PenLine className="h-4 w-4" />
          {quizMode ? "Exit Quiz" : "Quiz Mode"}
        </Button>
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-16 text-muted-foreground text-sm">
          No acronyms found.
        </p>
      )}

      <div className="space-y-6">
        {Object.entries(grouped).map(([category, subcategories]) => (
          <div key={category}>
            {selectedCategory === "All" && (
              <h2 className="text-base font-bold mb-3 pb-1 border-b">{category}</h2>
            )}
            <div className="space-y-2">
              {Object.entries(subcategories).map(([subcategory, items]) => {
                const key = `${category}::${subcategory}`;
                const isOpen = isSearching || !collapsed[key];
                return (
                  <AcronymSubcategory
                    key={key}
                    subcategory={subcategory}
                    items={items}
                    isOpen={isOpen}
                    isSearching={isSearching}
                    isDefHidden={isDefHidden}
                    quizMode={quizMode}
                    quizAnswers={quizAnswers}
                    onToggle={() => toggleSubcategory(key)}
                    onToggleRow={toggleRow}
                    onQuizAnswerChange={setQuizAnswer}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-right">
        Showing {filtered.length} of {activeAcronyms.length}
      </p>
    </div>
  );
}
