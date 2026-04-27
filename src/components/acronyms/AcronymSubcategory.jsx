import { Fragment } from "react";
import { ChevronDown, ChevronRight, Eye, EyeOff, ArrowRight, AlertTriangle } from "lucide-react"; // ChevronDown/Right still used for the subcategory header

const FIELD_LABELS = [
  ["whatItDoes", "What it does"],
  ["whyInvented", "Why invented"],
  ["problemSolved", "Problem solved"],
  ["analogy", "Analogy"],
  ["examUseCase", "Exam use case"],
];

function isRich(item) {
  return Boolean(item.whatItDoes || item.whyInvented || item.analogy);
}

function RichDetailPanel({ item }) {
  return (
    <div className="px-4 py-3 bg-muted/20 border-t text-sm grid gap-2 sm:grid-cols-[max-content_1fr] sm:gap-x-4 sm:gap-y-1.5">
      {FIELD_LABELS.map(([key, label]) =>
        item[key] ? (
          <div key={key} className="contents">
            <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold pt-0.5">
              {label}
            </div>
            <div className="text-foreground">{item[key]}</div>
          </div>
        ) : null
      )}
    </div>
  );
}

function TrapRow({ item }) {
  return (
    <tr className="border-t">
      <td colSpan={3} className="p-0">
        <div className="px-4 py-3 bg-muted/10 space-y-3">
          <div className={`grid gap-3 ${item.compare.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {item.compare.map((c) => (
              <div key={c.term} className="rounded-md border bg-background p-3">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono font-semibold text-primary">{c.term}</span>
                  <span className="text-xs text-muted-foreground">{c.fullName}</span>
                </div>
                <div className="text-sm text-foreground mb-2">{c.keyIdea}</div>
                <div className="text-xs text-muted-foreground space-y-0.5">
                  {c.useCases && <div><span className="font-semibold">Use cases:</span> {c.useCases}</div>}
                  {c.analogy && <div><span className="font-semibold">Analogy:</span> {c.analogy}</div>}
                </div>
              </div>
            ))}
          </div>
          {item.examTrap && (
            <div className="flex items-start gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-900 dark:text-amber-200">
              <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold">Exam trap: </span>
                {item.examTrap}
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

function RuleRow({ item, striped }) {
  return (
    <tr className={`border-t ${striped ? "bg-muted/10" : "bg-background"}`}>
      <td className="px-4 py-2 text-foreground" colSpan={2}>
        {item.trigger}
      </td>
      <td className="px-4 py-2 text-right">
        <span className="inline-flex items-center gap-1 text-primary font-semibold">
          <ArrowRight className="h-3.5 w-3.5" />
          {item.answer}
        </span>
      </td>
    </tr>
  );
}

export default function AcronymSubcategory({
  subcategory,
  items,
  isOpen,
  isSearching,
  isDefHidden,
  quizMode,
  quizAnswers,
  isExpanded,
  onToggle,
  onToggleRow,
  onToggleExpanded,
  onQuizAnswerChange,
}) {
  const visibleItems = quizMode
    ? items.filter((a) => a.kind !== "trap" && a.kind !== "rule")
    : items;

  if (visibleItems.length === 0) return null;

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
        <span className="text-xs font-normal text-muted-foreground">{visibleItems.length}</span>
      </button>

      {isOpen && (
        <table className="w-full text-sm">
          <tbody>
            {visibleItems.map((a, i) => {
              const rowKey = `${a.acronym}-${a.category}-${a.subcategory}`;

              if (a.kind === "trap") {
                return <TrapRow key={rowKey} item={a} />;
              }

              if (a.kind === "rule") {
                return <RuleRow key={rowKey} item={a} striped={i % 2 === 1} />;
              }

              const hidden = isDefHidden(rowKey);
              const answer = quizAnswers[rowKey] ?? "";
              const isCorrect = answer.trim().toLowerCase() === a.definition.toLowerCase();
              const rich = isRich(a);
              const expanded = rich && !quizMode && isExpanded?.(rowKey);
              const stripeBg = i % 2 === 0 ? "bg-background" : "bg-muted/10";

              if (quizMode) {
                return (
                  <tr key={rowKey} className={`border-t ${stripeBg}`}>
                    <td className="px-4 py-2 font-mono font-semibold text-primary whitespace-nowrap w-28">
                      {a.acronym}
                    </td>
                    <td className="px-3 py-1.5" colSpan={2}>
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
                <Fragment key={rowKey}>
                  <tr
                    className={`border-t transition-colors ${stripeBg} ${
                      i % 2 === 0 ? "hover:bg-muted/30" : "hover:bg-muted/40"
                    }`}
                  >
                    <td
                      onClick={() => onToggleRow(rowKey)}
                      className="px-4 py-2 font-mono font-semibold text-primary whitespace-nowrap w-28 cursor-pointer"
                    >
                      {a.acronym}
                    </td>
                    <td
                      onClick={() => onToggleRow(rowKey)}
                      className="px-4 py-2 text-foreground cursor-pointer"
                    >
                      {hidden ? (
                        <span className="text-muted-foreground/40 select-none">••••••••••••</span>
                      ) : (
                        a.definition
                      )}
                    </td>
                    <td className="pr-3 py-2 w-24 text-right whitespace-nowrap">
                      <span
                        onClick={() => onToggleRow(rowKey)}
                        className="inline-flex items-center cursor-pointer mr-2"
                      >
                        {hidden ? (
                          <Eye className="h-3.5 w-3.5 text-muted-foreground/50" />
                        ) : (
                          <EyeOff className="h-3.5 w-3.5 text-muted-foreground/50" />
                        )}
                      </span>
                      {rich && (
                        <button
                          onClick={() => onToggleExpanded?.(rowKey)}
                          aria-label={expanded ? "Hide details" : "Show details"}
                          className={`inline-flex items-center px-2 py-0.5 rounded border text-xs font-medium transition-colors ${
                            expanded
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-foreground hover:bg-muted"
                          }`}
                        >
                          {expanded ? "Hide" : "Details"}
                        </button>
                      )}
                    </td>
                  </tr>
                  {expanded && (
                    <tr className="border-t">
                      <td colSpan={3} className="p-0">
                        <RichDetailPanel item={a} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
