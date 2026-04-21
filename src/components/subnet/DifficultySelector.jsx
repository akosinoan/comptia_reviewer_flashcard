import { DIFFICULTY_STYLES } from "@/data/subnetData";

const DIFFICULTIES = ["easy", "medium", "hard"];

/**
 * Colored difficulty pill buttons (Easy / Medium / Hard).
 *
 * Props:
 *   selected   string  — currently active difficulty
 *   onChange   fn(difficulty: string) => void
 */
export default function DifficultySelector({ selected, onChange }) {
  return (
    <div className="flex gap-2">
      {DIFFICULTIES.map((d) => (
        <button
          key={d}
          onClick={() => onChange(d)}
          className={`px-3 py-1.5 rounded-lg border text-sm font-medium capitalize transition-colors ${
            selected === d
              ? DIFFICULTY_STYLES.active[d]
              : "bg-background border-border hover:bg-accent"
          }`}
        >
          {d}
        </button>
      ))}
    </div>
  );
}
