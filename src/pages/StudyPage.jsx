import { useState, useCallback } from "react";
import { questions, categories } from "@/data/questions";
import FlashCard from "@/components/FlashCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showBothSides, setShowBothSides] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardKey, setCardKey] = useState(0); // force remount on navigation

  const filteredCards =
    selectedCategory === "All"
      ? questions
      : questions.filter((q) => q.category === selectedCategory);

  const currentCard = filteredCards[currentIndex];
  const progress = filteredCards.length > 0 ? ((currentIndex + 1) / filteredCards.length) * 100 : 0;

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, filteredCards.length - 1));
    setCardKey((k) => k + 1);
  }, [filteredCards.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
    setCardKey((k) => k + 1);
  }, []);

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
    setCardKey((k) => k + 1);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setCardKey((k) => k + 1);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setCardKey((k) => k + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Study Flashcards</h1>
        <p className="text-muted-foreground text-sm">
          CompTIA A+ Core 1 (220-1101)
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          Filter by Category
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
              selectedCategory === "All"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-foreground border-border hover:bg-accent"
            }`}
          >
            All ({questions.length})
          </button>
          {categories.map((cat) => {
            const count = questions.filter((q) => q.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:bg-accent"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls */}
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

      {/* Progress Bar */}
      <Progress value={progress} className="h-2 mb-6" />

      {/* Flash Card */}
      {currentCard ? (
        <FlashCard key={cardKey} card={currentCard} showBothSides={showBothSides} />
      ) : (
        <div className="text-center py-20 text-muted-foreground">No cards found.</div>
      )}

      {/* Navigation */}
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
                onClick={() => { setCurrentIndex(i); setCardKey(k => k + 1); }}
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
