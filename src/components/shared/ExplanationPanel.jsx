export default function ExplanationPanel({ title = "Explanation", children }) {
  return (
    <div className="rounded-lg border p-4 bg-muted/20">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
        {title}
      </p>
      {children}
    </div>
  );
}
