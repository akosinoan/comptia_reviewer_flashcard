import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Eye, Layers } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import ExplanationPanel from "@/components/shared/ExplanationPanel";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import MatchPBQ from "@/components/pbq/MatchPBQ";
import BucketPBQ from "@/components/pbq/BucketPBQ";
import OrderPBQ from "@/components/pbq/OrderPBQ";
import { useSupabaseQuery } from "@/hooks/useSupabaseQuery";
import { getOSIExercises } from "@/services/pbqService";

const TYPE_LABELS = { bucket: "Bucket", match: "Match", order: "Order" };

export default function OSIPage() {
  const { data: exercises, loading, error } = useSupabaseQuery(getOSIExercises, []);

  const [activeIdx, setActiveIdx]             = useState(0);
  const [showAnswer, setShowAnswer]           = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [subKey, setSubKey]                   = useState(0);

  const selectExercise = (idx) => {
    setActiveIdx(idx);
    setShowAnswer(false);
    setShowExplanation(false);
    setSubKey((k) => k + 1);
  };

  if (loading) return <LoadingSpinner message="Loading OSI exercises…" />;
  if (error)   return <LoadingSpinner message="Failed to load exercises. Check your connection." />;

  const list     = exercises ?? [];
  const exercise = list[activeIdx];

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <PageHeader
        title="OSI Model Drills"
        subtitle="Practice OSI layers for CompTIA Network+ (N10-009) — 9 interactive exercises"
      />

      {/* Exercise selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
        {list.map((ex, i) => (
          <button
            key={ex.id}
            onClick={() => selectExercise(i)}
            className={`rounded-lg border p-3 text-left transition-colors ${
              activeIdx === i
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card hover:bg-accent"
            }`}
          >
            <span className="text-sm font-medium leading-snug line-clamp-2 block">
              {ex.title}
            </span>
            <span className="text-xs text-muted-foreground mt-1 block">
              {TYPE_LABELS[ex.type]}
            </span>
          </button>
        ))}
      </div>

      {exercise && (
        <>
          {/* Question card */}
          <div className="rounded-lg border bg-muted/20 p-4 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Layers className="h-4 w-4 text-primary shrink-0" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                {exercise.title}
              </span>
              <span className="text-xs text-muted-foreground">· {exercise.domain}</span>
            </div>
            <p className="text-sm leading-relaxed">{exercise.question}</p>
          </div>

          {/* Interactive exercise */}
          <div key={subKey}>
            {exercise.type === "bucket" && <BucketPBQ pbq={exercise} showAnswer={showAnswer} />}
            {exercise.type === "match"  && <MatchPBQ  pbq={exercise} showAnswer={showAnswer} />}
            {exercise.type === "order"  && <OrderPBQ  pbq={exercise} showAnswer={showAnswer} />}
          </div>

          {/* Controls */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAnswer((v) => !v)}
              className="gap-1.5"
            >
              <Eye className="h-4 w-4" />
              {showAnswer ? "Hide" : "Show"} Answer
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowExplanation((v) => !v)}
              className="gap-1.5"
            >
              <BookOpen className="h-4 w-4" />
              {showExplanation ? "Hide" : "Show"} Explanation
            </Button>
          </div>

          {showExplanation && (
            <div className="mt-3">
              <ExplanationPanel>
                <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans">
                  {exercise.explanation}
                </pre>
              </ExplanationPanel>
            </div>
          )}
        </>
      )}
    </div>
  );
}
