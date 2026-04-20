import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Eye } from "lucide-react";
import { useExam } from "@/context/ExamContext";
import PageHeader from "@/components/shared/PageHeader";
import PageNav from "@/components/shared/PageNav";
import ExplanationPanel from "@/components/shared/ExplanationPanel";
import MatchPBQ from "@/components/pbq/MatchPBQ";
import BucketPBQ from "@/components/pbq/BucketPBQ";
import OrderPBQ from "@/components/pbq/OrderPBQ";
import { shuffle } from "@/utils/shuffle";
import { PBQs_CORE2 } from "@/data/pbqCore2";
import { PBQs } from "@/data/pbqCore1";

export default function PBQPage() {
  const { exam } = useExam();
  const activePBQs = exam === "core2" ? PBQs_CORE2 : PBQs;

  const [pbqOrder, setPbqOrder]               = useState(() => activePBQs.map((_, i) => i));
  const [pbqIndex, setPbqIndex]               = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showAnswer, setShowAnswer]           = useState(false);
  const [subKey, setSubKey]                   = useState(0);

  useEffect(() => {
    setPbqOrder(activePBQs.map((_, i) => i));
    setPbqIndex(0);
    setShowExplanation(false);
    setShowAnswer(false);
    setSubKey((k) => k + 1);
  }, [exam]); // eslint-disable-line react-hooks/exhaustive-deps

  const pbq = activePBQs[pbqOrder[pbqIndex]];

  const goTo = (i) => {
    setPbqIndex(i);
    setShowExplanation(false);
    setShowAnswer(false);
    setSubKey((k) => k + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <PageHeader
        title="Performance-Based Questions"
        subtitle={
          exam === "core2"
            ? "Interactive scenarios for CompTIA A+ Core 2 (220-1202)"
            : "Interactive scenarios for CompTIA A+ Core 1 (220-1201)"
        }
      />

      <PageNav
        current={pbqIndex}
        total={activePBQs.length}
        label="Question"
        onPrev={() => goTo(pbqIndex - 1)}
        onNext={() => goTo(pbqIndex + 1)}
        onShuffle={() => {
          setPbqOrder(shuffle(activePBQs.map((_, i) => i)));
          goTo(0);
        }}
      />

      <div className="rounded-lg border bg-muted/20 p-4 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            {pbq.title}
          </span>
          <span className="text-xs text-muted-foreground">· {pbq.domain}</span>
        </div>
        <p className="text-sm leading-relaxed">{pbq.question}</p>
      </div>

      <div key={subKey}>
        {pbq.type === "match"  && <MatchPBQ  pbq={pbq} showAnswer={showAnswer} />}
        {pbq.type === "bucket" && <BucketPBQ pbq={pbq} showAnswer={showAnswer} />}
        {pbq.type === "order"  && <OrderPBQ  pbq={pbq} showAnswer={showAnswer} />}
      </div>

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
              {pbq.explanation}
            </pre>
          </ExplanationPanel>
        </div>
      )}
    </div>
  );
}
