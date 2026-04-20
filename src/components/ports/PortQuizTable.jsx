import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { shuffle } from "@/utils/shuffle";

export default function PortQuizTable({ activePorts, quizOrder, quizAnswers, onShuffle, onChange }) {
  return (
    <div className="rounded-lg border overflow-hidden mb-4">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/40 border-b">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quiz</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onShuffle(shuffle(quizOrder))}
          className="h-6 px-2 gap-1 text-xs"
        >
          <Shuffle className="h-3 w-3" /> Shuffle
        </Button>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 text-muted-foreground text-xs uppercase tracking-wide">
            <th className="text-left px-4 py-2.5 font-semibold">Protocol / Service</th>
            <th className="text-left px-4 py-2.5 font-semibold w-40">Port Number</th>
          </tr>
        </thead>
        <tbody>
          {quizOrder.map(({ id, name, protocol, fullName }, i) => {
            const answer = quizAnswers[id] ?? "";
            const isCorrect = answer.trim() === activePorts.find((p) => p.id === id)?.port;
            return (
              <tr
                key={id}
                className={`border-t ${i % 2 === 0 ? "bg-background" : "bg-muted/10"}`}
              >
                <td className="px-4 py-2">
                  <span className="font-medium">{name}</span>
                  <span className="ml-1.5 text-xs text-muted-foreground">({protocol})</span>
                  <span className="ml-1.5 text-xs text-muted-foreground/60">{fullName}</span>
                </td>
                <td className="px-3 py-1.5">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => onChange(id, e.target.value)}
                    placeholder="Port…"
                    className={`w-full px-3 py-1.5 rounded-md border text-sm font-mono focus:outline-none focus:ring-2 transition-colors ${
                      isCorrect
                        ? "bg-green-500/10 border-green-500/60 text-green-700 dark:text-green-400 focus:ring-green-500/30"
                        : "bg-background border-border focus:ring-primary/30"
                    }`}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
