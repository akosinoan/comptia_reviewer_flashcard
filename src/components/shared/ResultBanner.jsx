import { CheckCircle2, XCircle } from "lucide-react";

/**
 * Reusable correct / incorrect result banner.
 *
 * Props:
 *   isCorrect  boolean
 *   children   content shown after the icon — typically the answer text
 *   className  optional extra classes
 */
export default function ResultBanner({ isCorrect, children, className = "" }) {
  return (
    <div
      className={`flex items-start gap-2 p-3 rounded-lg border text-sm ${
        isCorrect
          ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400"
          : "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400"
      } ${className}`}
    >
      {isCorrect ? (
        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
      ) : (
        <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
      )}
      <div>{children}</div>
    </div>
  );
}
