import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { shuffle } from "@/utils/shuffle";
import { MatchAnswer } from "./PBQAnswers";

export default function MatchPBQ({ pbq, showAnswer }) {
  const [shuffledRight, setShuffledRight] = useState(() => shuffle(pbq.right));
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matched, setMatched] = useState({});
  const [wrong, setWrong] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const matchedCount = Object.keys(matched).length;
  const allMatched = matchedCount === pbq.left.length;

  const handleLeftClick = (id) => {
    if (matched[id] || wrong) return;
    setSelectedLeft(id === selectedLeft ? null : id);
  };

  const handleRightClick = (id) => {
    if (!selectedLeft || matched[id] || wrong) return;
    setAttempts((a) => a + 1);
    if (selectedLeft === id) {
      setMatched((m) => ({ ...m, [id]: true }));
      setSelectedLeft(null);
    } else {
      setWrong({ leftId: selectedLeft, rightId: id });
      setTimeout(() => { setWrong(null); setSelectedLeft(null); }, 700);
    }
  };

  const handleReset = () => {
    setShuffledRight(shuffle(pbq.right));
    setSelectedLeft(null);
    setMatched({});
    setWrong(null);
    setAttempts(0);
  };

  return (
    <div className="space-y-4">
      {!selectedLeft && matchedCount === 0 && (
        <p className="text-xs text-muted-foreground">
          Click an item on the left, then click its match on the right.
        </p>
      )}
      <div className="grid grid-cols-2 gap-3">
        {/* Left column */}
        <div className="space-y-2">
          {pbq.left.map(({ id, label }) => {
            const isMatched  = matched[id];
            const isSelected = selectedLeft === id;
            const isWrong    = wrong?.leftId === id;
            return (
              <button
                key={id}
                onClick={() => handleLeftClick(id)}
                disabled={isMatched}
                className={`w-full text-left px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                  isMatched
                    ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                    : isWrong
                    ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                    : isSelected
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-background border-border hover:bg-accent cursor-pointer"
                }`}
              >
                {isMatched ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    {label}
                  </span>
                ) : (
                  label
                )}
              </button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-2">
          {shuffledRight.map(({ id, label }) => {
            const isMatched = matched[id];
            const isWrong   = wrong?.rightId === id;
            return (
              <button
                key={id}
                onClick={() => handleRightClick(id)}
                disabled={isMatched || !selectedLeft}
                className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-all ${
                  isMatched
                    ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                    : isWrong
                    ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                    : selectedLeft
                    ? "bg-background border-border hover:bg-accent cursor-pointer"
                    : "bg-background border-border text-muted-foreground cursor-default"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1.5">
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </Button>
        {allMatched && (
          <span className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" />
            All matched! ({matchedCount}/{attempts} on first try)
          </span>
        )}
      </div>

      {showAnswer && <MatchAnswer pbq={pbq} />}
    </div>
  );
}
