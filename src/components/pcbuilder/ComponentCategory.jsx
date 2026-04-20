import { CheckCircle2, XCircle } from "lucide-react";

function getOptionStyle(selected, isSubmitted, optId, correctId) {
  if (!isSubmitted) {
    return selected
      ? "bg-primary/10 border-primary"
      : "bg-background border-border hover:bg-accent";
  }

  const isCorrect = optId === correctId;

  if (selected && isCorrect)  return "bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-400";
  if (selected && !isCorrect) return "bg-red-500/10 border-red-500/50 text-red-700 dark:text-red-400";
  if (!selected && isCorrect) return "bg-green-500/5 border-green-500/30 text-green-600 dark:text-green-400";
  return "bg-background border-border opacity-50";
}

export default function ComponentCategory({ cat, selectedId, isSubmitted, onSelect }) {
  const isCorrect  = selectedId === cat.correct;
  const showResult = isSubmitted && selectedId;

  return (
    <div
      className={`rounded-lg border p-4 transition-colors ${
        showResult
          ? isCorrect
            ? "border-green-500/40 bg-green-500/5"
            : "border-red-500/40 bg-red-500/5"
          : "border-border bg-card"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold">{cat.label}</p>
        {showResult && (
          isCorrect ? (
            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
          ) : (
            <XCircle className="h-4 w-4 text-red-500 shrink-0" />
          )
        )}
      </div>

      <div className="space-y-2">
        {cat.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(cat.id, opt.id)}
            disabled={isSubmitted}
            className={`w-full text-left px-3 py-2.5 rounded-lg border transition-colors ${getOptionStyle(
              selectedId === opt.id,
              isSubmitted,
              opt.id,
              cat.correct
            )}`}
          >
            <p className="text-sm font-medium leading-snug">{opt.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{opt.detail}</p>
          </button>
        ))}
      </div>

      {isSubmitted && (
        <div className="mt-3 p-3 rounded-md bg-muted/40 border border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
            Explanation
          </p>
          <p className="text-xs leading-relaxed">{cat.reason}</p>
        </div>
      )}
    </div>
  );
}
