export default function CategoryPills({ categories, selected, onSelect, size = "sm" }) {
  const textSize = size === "xs" ? "text-xs" : "text-sm";
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(({ label, count }) => (
        <button
          key={label}
          onClick={() => onSelect(label)}
          className={`px-3 py-1 rounded-full ${textSize} font-medium border transition-colors ${
            selected === label
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background text-foreground border-border hover:bg-accent"
          }`}
        >
          {label} ({count})
        </button>
      ))}
    </div>
  );
}
