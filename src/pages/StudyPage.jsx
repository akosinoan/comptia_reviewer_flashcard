import { useStudyCards } from "@/hooks/useStudyCards";
import PageHeader from "@/components/shared/PageHeader";
import CategoryPills from "@/components/shared/CategoryPills";
import FlashCard from "@/components/FlashCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChevronLeft,
  ChevronRight,
  Shuffle,
  RotateCcw,
  Eye,
  EyeOff,
} from "lucide-react";

export default function StudyPage() {
  const {
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
  } = useStudyCards();

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <PageHeader
        title="Study Flashcards"
        subtitle={
          exam === "core2"
            ? "CompTIA A+ Core 2 (220-1202)"
            : exam === "netplus"
            ? "CompTIA Network+ (N10-009)"
            : "CompTIA A+ Core 1 (220-1201)"
        }
      />

      <div className="mb-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          Filter by Category
        </p>
        <CategoryPills
          categories={pillCategories}
          selected={selectedCategory}
          onSelect={handleCategoryFilter}
          size="sm"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowBothSides((s) => !s)}
            className="gap-1.5"
          >
            {showBothSides ? (
              <>
                <EyeOff className="h-4 w-4" /> Flip Mode
              </>
            ) : (
              <>
                <Eye className="h-4 w-4" /> Both Sides
              </>
            )}
          </Button>
          <Button variant="ghost" size="sm" onClick={handleShuffle} className="gap-1.5">
            <Shuffle className="h-4 w-4" /> Shuffle
          </Button>
          <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1.5">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
        </div>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {filteredCards.length}
        </span>
      </div>

      <Progress value={progress} className="h-2 mb-6" />

      {currentCard ? (
        <FlashCard key={cardKey} card={currentCard} showBothSides={showBothSides} />
      ) : (
        <div className="text-center py-20 text-muted-foreground">No cards found.</div>
      )}

      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="gap-1.5"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        <div className="flex gap-1">
          {filteredCards.length <= 20 &&
            filteredCards.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setCardKey((k) => k + 1);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
        </div>
        <Button
          variant="outline"
          onClick={goNext}
          disabled={currentIndex === filteredCards.length - 1}
          className="gap-1.5"
        >
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
