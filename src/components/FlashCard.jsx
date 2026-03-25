import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { RotateCcw } from "lucide-react";

export default function FlashCard({ card, showBothSides }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!showBothSides) {
      setIsFlipped((prev) => !prev);
    }
  };

  // Reset flip when card changes
  useState(() => {
    setIsFlipped(false);
  }, [card]);

  if (showBothSides) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="rounded-2xl border bg-card shadow-lg overflow-hidden">
          <div className="bg-primary/10 border-b px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{card.category}</Badge>
              <span className="text-xs text-muted-foreground">Both sides visible</span>
            </div>
            <p className="text-lg font-semibold text-foreground leading-relaxed">
              {card.question}
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Answer</p>
            <p className="text-base font-medium text-foreground mb-4">{card.answer}</p>
            <div className="rounded-lg bg-muted p-3">
              <p className="text-sm font-semibold text-muted-foreground mb-1">Explanation</p>
              <p className="text-sm text-foreground leading-relaxed">{card.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flip-card w-full max-w-2xl mx-auto cursor-pointer"
      style={{ height: "320px" }}
      onClick={handleFlip}
      role="button"
      aria-label={isFlipped ? "Click to see question" : "Click to flip and see answer"}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`} style={{ height: "100%" }}>
        {/* Front - Question */}
        <div className="flip-card-front rounded-2xl border bg-card shadow-lg flex flex-col">
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b">
            <Badge variant="secondary">{card.category}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <RotateCcw className="h-3 w-3" /> Tap to flip
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center px-6 py-6">
            <p className="text-xl font-semibold text-center leading-relaxed text-foreground">
              {card.question}
            </p>
          </div>
        </div>

        {/* Back - Answer */}
        <div className="flip-card-back rounded-2xl border bg-primary/5 shadow-lg flex flex-col">
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b">
            <Badge>{card.category}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <RotateCcw className="h-3 w-3" /> Tap to flip back
            </span>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Answer</p>
              <p className="text-base font-semibold text-foreground">{card.answer}</p>
            </div>
            <div className="rounded-lg bg-background/70 p-3 border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Explanation</p>
              <p className="text-sm text-foreground leading-relaxed">{card.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
