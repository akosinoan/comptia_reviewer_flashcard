import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";

export default function AcronymSubcategory({
  subcategory,
  items,
  isOpen,
  isSearching,
  isDefHidden,
  quizMode,
  quizAnswers,
  onToggle,
  onToggleRow,
  onQuizAnswerChange,
}) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <button
        onClick={() => !isSearching && onToggle()}
        className={`w-full flex items-center justify-between px-4 py-2 bg-muted/40 text-left text-sm font-semibold transition-colors ${
          isSearching ? "cursor-default" : "hover:bg-muted/70"
        }`}
      >
        <span className="flex items-center gap-2">
          {!isSearching &&
            (isOpen ? (
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
            ))}
          {subcategory}
        </span>
        <span className="text-xs font-normal text-muted-foreground">{items.length}</span>
      </button>

      {isOpen && (
        <table className="w-full text-sm">
          <tbody>
            {items.map((a, i) => {
              const rowKey = `${a.acronym}-${a.category}`;
              const hidden = isDefHidden(rowKey);
              const answer = quizAnswers[rowKey] ?? "";
              const isCorrect = answer.trim().toLowerCase() === a.definition.toLowerCase();

              if (quizMode) {
                return (
                  <tr
                    key={rowKey}
                    className={`border-t ${i % 2 === 0 ? "bg-background" : "bg-muted/10"}`}
                  >
                    <td className="px-4 py-2 font-mono font-semibold text-primary whitespace-nowrap w-28">
                      {a.acronym}
                    </td>
                    <td className="px-3 py-1.5">
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) => onQuizAnswerChange(rowKey, e.target.value)}
                        placeholder="Type the definition…"
                        className={`w-full px-3 py-1.5 rounded-md border text-sm focus:outline-none focus:ring-2 transition-colors ${
                          isCorrect
                            ? "bg-green-500/10 border-green-500/60 text-green-700 dark:text-green-400 focus:ring-green-500/30"
                            : "bg-background border-border focus:ring-primary/30"
                        }`}
                      />
                    </td>
                  </tr>
                );
              }

              return (
                <tr
                  key={rowKey}
                  onClick={() => onToggleRow(rowKey)}
                  className={`border-t cursor-pointer transition-colors ${
                    i % 2 === 0
                      ? "bg-background hover:bg-muted/30"
                      : "bg-muted/10 hover:bg-muted/40"
                  }`}
                >
                  <td className="px-4 py-2 font-mono font-semibold text-primary whitespace-nowrap w-28">
                    {a.acronym}
                  </td>
                  <td className="px-4 py-2 text-foreground">
                    {hidden ? (
                      <span className="text-muted-foreground/40 select-none">••••••••••••</span>
                    ) : (
                      a.definition
                    )}
                  </td>
                  <td className="pr-3 py-2 w-8 text-right">
                    {hidden ? (
                      <Eye className="h-3.5 w-3.5 text-muted-foreground/50" />
                    ) : (
                      <EyeOff className="h-3.5 w-3.5 text-muted-foreground/50" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
