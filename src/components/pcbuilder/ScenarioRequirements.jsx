import { ChevronDown, ChevronUp } from "lucide-react";

export default function ScenarioRequirements({ scenario, showReqs, onToggle }) {
  return (
    <div className={`rounded-lg border mb-6 ${scenario.borderColor}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold uppercase tracking-wide ${scenario.badgeColor}`}>
            {scenario.badge} PC
          </span>
          <span className="text-sm font-medium">{scenario.title}</span>
        </div>
        {showReqs ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {showReqs && (
        <div className="px-4 pb-4 border-t pt-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Requirements
          </p>
          <ul className="space-y-1">
            {scenario.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className={`mt-0.5 shrink-0 ${scenario.badgeColor}`}>•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
