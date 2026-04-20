import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

export default function PageNav({
  current,
  total,
  label = "Question",
  onPrev,
  onNext,
  onShuffle,
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-xs text-muted-foreground">
        {label} {current + 1} / {total}
      </span>
      <div className="flex gap-1">
        {onShuffle && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onShuffle}
            className="gap-1.5 text-xs"
          >
            <Shuffle className="h-3.5 w-3.5" /> Shuffle
          </Button>
        )}
        <Button variant="ghost" size="sm" onClick={onPrev} disabled={current === 0}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={onNext} disabled={current === total - 1}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
