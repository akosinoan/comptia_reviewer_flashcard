import { useState } from "react";
import { ChevronRight, ChevronsRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import ExplanationPanel from "@/components/shared/ExplanationPanel";

export default function SubnetSolution({ steps, commonMistakes }) {
  const [revealed, setRevealed] = useState(1);

  return (
    <div className="mb-4">
      <ExplanationPanel title="Step-by-Step Solution">
        <div className="space-y-3">
          {steps.slice(0, revealed).map((step, i) => (
            <div key={i}>
              {i > 0 && <div className="border-t border-border/40 mb-3" />}
              <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {step}
              </pre>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {revealed < steps.length && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setRevealed((r) => r + 1)}
              className="gap-1.5"
            >
              <ChevronRight className="h-4 w-4" />
              Next Step
              <span className="text-muted-foreground text-xs">
                ({revealed}/{steps.length})
              </span>
            </Button>
          )}
          {revealed < steps.length && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setRevealed(steps.length)}
              className="gap-1.5"
            >
              <ChevronsRight className="h-4 w-4" />
              Show All
            </Button>
          )}
          {revealed > 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setRevealed(1)}
              className="gap-1.5 ml-auto"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </Button>
          )}
        </div>

        {commonMistakes && revealed === steps.length && (
          <div className="mt-4 pt-3 border-t border-border/40">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
              Common mistake
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {commonMistakes}
            </p>
          </div>
        )}
      </ExplanationPanel>
    </div>
  );
}
