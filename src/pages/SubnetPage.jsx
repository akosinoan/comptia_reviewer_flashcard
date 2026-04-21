import { useState } from "react";
import { RefreshCw, BookOpen, Binary } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import ResultBanner from "@/components/shared/ResultBanner";
import SubnetVisual from "@/components/subnet/SubnetVisual";
import SubnetSolution from "@/components/subnet/SubnetSolution";
import DifficultySelector from "@/components/subnet/DifficultySelector";
import SubnetCheatSheet from "@/components/subnet/SubnetCheatSheet";
import { generateProblem } from "@/utils/subnetGenerator";
import {
  DIFFICULTY_STYLES,
  TYPE_LABELS,
  INPUT_PLACEHOLDERS,
  DEFAULT_INPUT_PLACEHOLDER,
} from "@/data/subnetData";

// ── Helpers ───────────────────────────────────────────────────────────────────

function normalize(s) {
  return s.trim().toLowerCase().replace(/\s+/g, "");
}

function freshState(difficulty) {
  return {
    problem:      generateProblem(difficulty),
    userAnswer:   "",
    checked:      false,
    showSolution: false,
    showVisual:   false,
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SubnetPage() {
  const [difficulty, setDifficulty] = useState("medium");
  const [count, setCount] = useState(1);
  const [state, setState] = useState(() => freshState("medium"));

  function next(diff = difficulty) {
    setState(freshState(diff));
    setCount((c) => c + 1);
  }

  function handleDifficultyChange(d) {
    setDifficulty(d);
    next(d);
  }

  const { problem, userAnswer, checked, showSolution, showVisual } = state;

  const isCorrect =
    checked && normalize(userAnswer) === normalize(problem.solution.final_answer);

  const inputPlaceholder =
    INPUT_PLACEHOLDERS[problem.type] ?? DEFAULT_INPUT_PLACEHOLDER;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <PageHeader
        title="Subnetting Practice"
        subtitle="CompTIA Network+ (N10-009) — IPv4 subnetting drills"
        hideExamToggle
      />

      {/* ── Controls: difficulty selector + new problem button ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <DifficultySelector selected={difficulty} onChange={handleDifficultyChange} />
        <Button onClick={() => next()} variant="outline" className="gap-1.5">
          <RefreshCw className="h-4 w-4" /> New Problem
        </Button>
      </div>

      {/* ── Problem card ── */}
      <div className="rounded-lg border bg-muted/20 p-5 mb-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            Problem #{count}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground">
              {TYPE_LABELS[problem.type]}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${DIFFICULTY_STYLES.badge[difficulty]}`}
            >
              {difficulty}
            </span>
          </div>
        </div>

        <p className="text-base font-medium leading-relaxed mt-3 mb-4">
          {problem.question}
        </p>

        <div className="flex items-start gap-1.5 text-xs text-muted-foreground mb-4">
          <span className="shrink-0 mt-0.5">💡</span>
          <span>{problem.solution.hint}</span>
        </div>

        {/* Answer input row */}
        <div className="flex gap-2">
          <input
            key={`input-${count}`}
            type="text"
            value={userAnswer}
            onChange={(e) =>
              setState((s) => ({ ...s, userAnswer: e.target.value }))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" && !checked && userAnswer.trim())
                setState((s) => ({ ...s, checked: true }));
            }}
            placeholder={inputPlaceholder}
            disabled={checked}
            className="flex-1 px-3 py-2 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono disabled:opacity-60"
          />
          {!checked ? (
            <Button
              onClick={() => setState((s) => ({ ...s, checked: true }))}
              disabled={!userAnswer.trim()}
            >
              Check
            </Button>
          ) : (
            <Button variant="outline" onClick={() => next()} className="gap-1.5">
              <RefreshCw className="h-4 w-4" /> Next
            </Button>
          )}
        </div>
      </div>

      {/* ── Result banner (shared component) ── */}
      {checked && (
        <ResultBanner isCorrect={isCorrect} className="mb-4">
          {isCorrect ? (
            <>
              <strong>Correct!</strong> The answer is{" "}
              <code className="font-mono">{problem.solution.final_answer}</code>.
            </>
          ) : (
            <>
              <strong>Not quite.</strong> The correct answer is{" "}
              <code className="font-mono font-bold">
                {problem.solution.final_answer}
              </code>
              .
            </>
          )}
        </ResultBanner>
      )}

      {/* ── Solution / Visual toggle buttons ── */}
      {checked && (
        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant={showSolution ? "default" : "outline"}
            size="sm"
            onClick={() =>
              setState((s) => ({ ...s, showSolution: !s.showSolution }))
            }
            className="gap-1.5"
          >
            <BookOpen className="h-4 w-4" />
            {showSolution ? "Hide" : "Show"} Steps
          </Button>
          <Button
            variant={showVisual ? "default" : "outline"}
            size="sm"
            onClick={() =>
              setState((s) => ({ ...s, showVisual: !s.showVisual }))
            }
            className="gap-1.5"
          >
            <Binary className="h-4 w-4" />
            {showVisual ? "Hide" : "Show"} Visual
          </Button>
        </div>
      )}

      {/* ── Step-by-step solution ── */}
      {showSolution && (
        <SubnetSolution
          key={`sol-${count}`}
          steps={problem.solution.steps}
          commonMistakes={problem.solution.common_mistakes}
        />
      )}

      {/* ── Interactive bit-level visual ── */}
      {showVisual && (
        <SubnetVisual
          key={`vis-${count}`}
          ip={problem.ip}
          prefix={problem.prefix}
          info={problem.info}
        />
      )}

      {/* ── Cheat sheet reference table (shared subnet component) ── */}
      <div className="mt-6">
        <SubnetCheatSheet />
      </div>
    </div>
  );
}
