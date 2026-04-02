import { useExam } from "@/context/ExamContext";

export default function ExamToggle() {
  const { exam, setExam } = useExam();

  return (
    <div className="inline-flex rounded-lg border border-border bg-muted p-1 gap-1">
      <button
        onClick={() => setExam("core1")}
        className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${
          exam === "core1"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Core 1
        <span className="ml-1.5 text-xs opacity-70">220-1201</span>
      </button>
      <button
        onClick={() => setExam("core2")}
        className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${
          exam === "core2"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Core 2
        <span className="ml-1.5 text-xs opacity-70">220-1202</span>
      </button>
    </div>
  );
}
