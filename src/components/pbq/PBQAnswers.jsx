export function MatchAnswer({ pbq }) {
  return (
    <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/5 p-4">
      <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-3">
        Correct Answers
      </p>
      <div className="space-y-1.5">
        {pbq.left.map(({ id, label }) => {
          const match = pbq.right.find((r) => r.id === id);
          return (
            <div key={id} className="flex items-start gap-2 text-sm">
              <span className="font-medium min-w-0 shrink-0 max-w-[45%] truncate">{label}</span>
              <span className="text-muted-foreground shrink-0">→</span>
              <span className="text-green-700 dark:text-green-400 min-w-0">{match?.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function BucketAnswer({ pbq }) {
  return (
    <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/5 p-4">
      <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-3">
        Correct Answers
      </p>
      <div className="space-y-3">
        {pbq.buckets.map((bucket) => {
          const correctItems = pbq.items.filter((i) => i.bucket === bucket.id);
          return (
            <div key={bucket.id}>
              <p className="text-xs font-bold text-primary mb-1">
                {bucket.label}{bucket.sublabel ? ` — ${bucket.sublabel}` : ""}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {correctItems.map((item) => (
                  <span
                    key={item.id}
                    className="px-2 py-0.5 rounded-md border border-green-500/40 bg-green-500/10 text-green-700 dark:text-green-400 text-xs"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function OrderAnswer({ pbq }) {
  return (
    <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/5 p-4">
      <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-3">
        Correct Order
      </p>
      <ol className="space-y-1.5">
        {pbq.items.map((item, i) => (
          <li key={item.id} className="flex items-center gap-2 text-sm">
            <span className="font-mono text-xs text-muted-foreground w-4 text-right shrink-0">
              {i + 1}.
            </span>
            <span className="text-green-700 dark:text-green-400">{item.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
