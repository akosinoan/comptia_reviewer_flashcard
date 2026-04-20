import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { useExam } from "@/context/ExamContext";
import PageHeader from "@/components/shared/PageHeader";
import ScenarioRequirements from "@/components/pcbuilder/ScenarioRequirements";
import ComponentCategory from "@/components/pcbuilder/ComponentCategory";
import { SCENARIOS_CORE2 } from "@/data/pcBuilderCore2";
import { SCENARIOS } from "@/data/pcBuilderCore1";

export default function PCBuilderPage() {
  const { exam } = useExam();
  const activeScenarios = exam === "core2" ? SCENARIOS_CORE2 : SCENARIOS;

  const [activeTab, setActiveTab]   = useState(activeScenarios[0].id);
  const [selections, setSelections] = useState({});
  const [submitted, setSubmitted]   = useState({});
  const [showReqs, setShowReqs]     = useState(true);

  useEffect(() => {
    setActiveTab(activeScenarios[0].id);
    setSelections({});
    setSubmitted({});
  }, [exam]); // eslint-disable-line react-hooks/exhaustive-deps

  const scenario    = activeScenarios.find((s) => s.id === activeTab) ?? activeScenarios[0];
  const key         = (scenId, catId) => `${scenId}-${catId}`;
  const isSubmitted = submitted[activeTab];

  const allSelected = scenario.categories.every(
    (cat) => selections[key(activeTab, cat.id)]
  );

  const score = isSubmitted
    ? scenario.categories.filter(
        (cat) => selections[key(activeTab, cat.id)] === cat.correct
      ).length
    : null;

  const handleSelect = (catId, optionId) => {
    if (isSubmitted) return;
    setSelections((prev) => ({
      ...prev,
      [key(activeTab, catId)]: optionId,
    }));
  };

  const handleSubmit = () => {
    if (!allSelected) return;
    setSubmitted((prev) => ({ ...prev, [activeTab]: true }));
  };

  const handleReset = () => {
    const keysToRemove = scenario.categories.map((cat) => key(activeTab, cat.id));
    setSelections((prev) => {
      const next = { ...prev };
      keysToRemove.forEach((k) => delete next[k]);
      return next;
    });
    setSubmitted((prev) => ({ ...prev, [activeTab]: false }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PageHeader
        title={exam === "core2" ? "Security & OS Scenarios" : "PC Builder Challenge"}
        subtitle={
          exam === "core2"
            ? "Choose the best security or OS configuration for each scenario."
            : "Select the best component for each category based on the scenario requirements."
        }
      />

      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {activeScenarios.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(s.id)}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
              activeTab === s.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background border-border hover:bg-accent"
            }`}
          >
            <span className={activeTab === s.id ? "" : s.badgeColor}>
              {s.badge}
            </span>
            <span className="hidden sm:inline text-xs ml-1.5 opacity-70">
              · {s.title}
            </span>
          </button>
        ))}
      </div>

      <ScenarioRequirements
        scenario={scenario}
        showReqs={showReqs}
        onToggle={() => setShowReqs((v) => !v)}
      />

      {/* Score badge */}
      {isSubmitted && (
        <div
          className={`flex items-center gap-2 mb-5 px-4 py-2.5 rounded-lg border text-sm font-semibold w-fit ${
            score === scenario.categories.length
              ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400"
              : score >= scenario.categories.length / 2
              ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-700 dark:text-yellow-400"
              : "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400"
          }`}
        >
          {score === scenario.categories.length ? (
            <CheckCircle2 className="h-4 w-4 shrink-0" />
          ) : (
            <XCircle className="h-4 w-4 shrink-0" />
          )}
          {score} / {scenario.categories.length} correct
        </div>
      )}

      {/* Component grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {scenario.categories.map((cat) => (
          <ComponentCategory
            key={cat.id}
            cat={cat}
            selectedId={selections[key(activeTab, cat.id)]}
            isSubmitted={isSubmitted}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleSubmit} disabled={!allSelected || isSubmitted}>
          Submit Answers
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="gap-1.5 ml-auto"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}
