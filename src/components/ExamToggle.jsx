import { useEffect } from "react";
import { useExam } from "@/context/ExamContext";

export default function ExamToggle({ showSecPlus = false }) {
  const { exam, setExam } = useExam();

  // Security+ is only available where showSecPlus is set (e.g. Acronyms).
  // If the user picked it there and navigated to a page without it, fall
  // back to Core 1 so we never leave the toggle on a hidden/unsupported exam.
  useEffect(() => {
    if (!showSecPlus && exam === "secplus") {
      setExam("core1");
    }
  }, [showSecPlus, exam, setExam]);

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
      <button
        onClick={() => setExam("netplus")}
        className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${
          exam === "netplus"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Network+
        <span className="ml-1.5 text-xs opacity-70">N10-009</span>
      </button>
      {showSecPlus && (
        <button
          onClick={() => setExam("secplus")}
          className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${
            exam === "secplus"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Security+
          <span className="ml-1.5 text-xs opacity-70">SY0-701</span>
        </button>
      )}
    </div>
  );
}
