import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { shuffle } from "@/utils/shuffle";
import { BucketAnswer } from "./PBQAnswers";

export default function BucketPBQ({ pbq, showAnswer }) {
  const [shuffledItems] = useState(() => shuffle(pbq.items));
  const [selected, setSelected]     = useState(null);
  const [placements, setPlacements] = useState({});
  const [checked, setChecked]       = useState(false);

  const placedIds  = new Set(Object.keys(placements));
  const poolItems  = shuffledItems.filter((i) => !placedIds.has(i.id));
  const allPlaced  = poolItems.length === 0;

  const bucketItems = (bucketId) =>
    pbq.items.filter((i) => placements[i.id] === bucketId);

  const isCorrect = (itemId) => {
    const item = pbq.items.find((i) => i.id === itemId);
    return item && placements[itemId] === item.bucket;
  };

  const correctCount = pbq.items.filter((i) => isCorrect(i.id)).length;
  const allCorrect   = checked && correctCount === pbq.items.length;

  const handleItemClick = (id) => {
    if (checked) return;
    setSelected(selected === id ? null : id);
  };

  const handleBucketClick = (bucketId) => {
    if (!selected || checked) return;
    setPlacements((p) => ({ ...p, [selected]: bucketId }));
    setSelected(null);
  };

  const handleRemove = (e, itemId) => {
    e.stopPropagation();
    if (checked) return;
    setPlacements((p) => { const n = { ...p }; delete n[itemId]; return n; });
  };

  const handleReset = () => {
    setPlacements({});
    setSelected(null);
    setChecked(false);
  };

  return (
    <div className="space-y-4">
      {/* Pool */}
      <div>
        <p className="text-xs text-muted-foreground mb-2">
          {poolItems.length === 0
            ? "All items placed — click a placed item to remove it."
            : selected
            ? "Now click a category below to place it."
            : "Click an item to select it, then click a category."}
        </p>
        <div className="flex flex-wrap gap-2 p-3 rounded-lg border border-dashed min-h-12">
          {poolItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`px-3 py-1.5 rounded-md border text-sm transition-colors ${
                selected === item.id
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-background border-border hover:bg-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Buckets */}
      <div className="space-y-2">
        {pbq.buckets.map((bucket) => (
          <div
            key={bucket.id}
            onClick={() => selected && handleBucketClick(bucket.id)}
            className={`rounded-lg border p-3 transition-colors ${
              selected && !checked
                ? "cursor-pointer hover:border-primary hover:bg-primary/5"
                : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-primary">{bucket.label}</span>
              {bucket.sublabel && (
                <span className="text-xs text-muted-foreground">{bucket.sublabel}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 min-h-7">
              {bucketItems(bucket.id).length === 0 ? (
                <span className="text-xs text-muted-foreground italic">empty</span>
              ) : (
                bucketItems(bucket.id).map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => handleRemove(e, item.id)}
                    className={`px-2.5 py-1 rounded-md border text-xs transition-colors ${
                      !checked
                        ? "bg-primary/5 border-primary/30 hover:bg-red-500/10 hover:border-red-500/30"
                        : isCorrect(item.id)
                        ? "bg-green-500/10 border-green-500/40 text-green-700 dark:text-green-400"
                        : "bg-red-500/10 border-red-500/40 text-red-700 dark:text-red-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Button onClick={() => setChecked(true)} disabled={!allPlaced || checked} size="sm">
          Check
        </Button>
        <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1.5">
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </Button>
      </div>

      {checked && (
        <div
          className={`flex items-start gap-2 p-3 rounded-lg border text-sm ${
            allCorrect
              ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400"
              : "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400"
          }`}
        >
          {allCorrect ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
          )}
          {allCorrect
            ? "All items correctly categorized!"
            : `${correctCount} / ${pbq.items.length} correctly placed. Red items are in the wrong category — click them to move.`}
        </div>
      )}

      {showAnswer && <BucketAnswer pbq={pbq} />}
    </div>
  );
}
