import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { shuffle } from "@/utils/shuffle";
import { OrderAnswer } from "./PBQAnswers";

export default function OrderPBQ({ pbq, showAnswer }) {
  const [order, setOrder]       = useState(() => shuffle([...pbq.items]));
  const [checked, setChecked]   = useState(false);
  const [dragging, setDragging] = useState(null);
  const [dragOver, setDragOver] = useState(null);

  const correctCount = order.filter((item, i) => item.id === pbq.items[i].id).length;
  const allCorrect   = checked && correctCount === pbq.items.length;

  const moveItem = (from, to) => {
    setOrder((prev) => {
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  };

  const handleReset = () => {
    setOrder(shuffle([...pbq.items]));
    setChecked(false);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Drag items to reorder them.</p>
      <div className="space-y-2">
        {order.map((item, i) => {
          const inPlace = checked && item.id === pbq.items[i].id;
          const wrong   = checked && item.id !== pbq.items[i].id;
          return (
            <div
              key={item.id}
              draggable
              onDragStart={() => setDragging(i)}
              onDragOver={(e) => { e.preventDefault(); setDragOver(i); }}
              onDragLeave={() => setDragOver(null)}
              onDrop={() => {
                if (dragging !== null && dragging !== i) {
                  moveItem(dragging, i);
                  setChecked(false);
                }
                setDragging(null);
                setDragOver(null);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm cursor-grab active:cursor-grabbing select-none transition-colors ${
                dragOver === i && dragging !== null && dragging !== i
                  ? "border-primary bg-primary/10"
                  : inPlace
                  ? "border-green-500/40 bg-green-500/10 text-green-700 dark:text-green-400"
                  : wrong
                  ? "border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-400"
                  : "bg-background border-border hover:bg-accent"
              }`}
            >
              <span className="text-xs font-mono text-muted-foreground w-4 shrink-0 text-right">
                {i + 1}
              </span>
              <span className="flex-1">{item.label}</span>
              {inPlace && <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />}
              {wrong && (
                <span className="text-xs text-muted-foreground shrink-0">
                  → step {pbq.items.findIndex((p) => p.id === item.id) + 1}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={() => setChecked(true)} size="sm">
          Check Order
        </Button>
        <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1.5">
          <RotateCcw className="h-3.5 w-3.5" /> Shuffle
        </Button>
        {allCorrect && (
          <span className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" /> Correct order!
          </span>
        )}
      </div>

      {checked && !allCorrect && (
        <div className="flex items-start gap-2 p-3 rounded-lg border bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400 text-sm">
          <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
          {correctCount} / {pbq.items.length} steps in the right position. Items in red show the correct step number.
        </div>
      )}

      {showAnswer && <OrderAnswer pbq={pbq} />}
    </div>
  );
}
