import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  HardDrive,
  CheckCircle2,
  XCircle,
  BookOpen,
  RotateCcw,
} from "lucide-react";
import { useExam } from "@/context/ExamContext";
import PageHeader from "@/components/shared/PageHeader";
import PageNav from "@/components/shared/PageNav";
import ExplanationPanel from "@/components/shared/ExplanationPanel";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import DriveCard from "@/components/raid/DriveCard";
import RAIDDiagram from "@/components/raid/RAIDDiagram";
import { getBayLabel, getBayAccent, getLabelColor, getIfaceStyle } from "@/components/raid/raidUtils";
import { shuffle } from "@/utils/shuffle";
import { RAID_OPTIONS } from "@/data/raidCore1";
import { useSupabaseQuery } from "@/hooks/useSupabaseQuery";
import { getRaidScenarios } from "@/services/raidService";

export default function RAIDPage() {
  const { exam } = useExam();
  const { data: scenarios, loading, error } = useSupabaseQuery(getRaidScenarios, []);

  const [order, setOrder]               = useState([]);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedRaid, setSelectedRaid] = useState(null);
  const [bays, setBays]                 = useState([]);
  const [dragging, setDragging]         = useState(null);
  const [dragOverBay, setDragOverBay]   = useState(null);
  const [checked, setChecked]           = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Initialise order once data arrives
  useEffect(() => {
    if (!scenarios) return;
    setOrder(shuffle(scenarios.map((_, i) => i)));
    setScenarioIndex(0);
  }, [scenarios]);

  if (loading) return <LoadingSpinner message="Loading RAID scenarios…" />;
  if (error)   return <LoadingSpinner message="Failed to load scenarios. Check your connection." />;

  const SCENARIOS = scenarios ?? [];
  const scenario  = SCENARIOS[order[scenarioIndex]];
  if (!scenario)  return null;

  const placedIds  = new Set(bays.filter(Boolean));
  const poolDrives = scenario.drives.filter((d) => !placedIds.has(d.id));
  const allBaysFilled = bays.length > 0 && bays.every((b) => b !== null);

  const getBayDrive = (driveId) => scenario.drives.find((d) => d.id === driveId);

  const wrongDrivesInBays = bays
    .filter(Boolean)
    .map(getBayDrive)
    .filter((d) => d && !d.correct);

  const isCorrect =
    selectedRaid === scenario.correctRaid &&
    allBaysFilled &&
    wrongDrivesInBays.length === 0;

  const handleRaidSelect = (opt) => {
    setSelectedRaid(opt.level);
    setBays(Array(opt.minDrives).fill(null));
    setChecked(false);
    setShowExplanation(false);
  };

  const handleDragStartPool = (driveId) => setDragging({ type: "pool", driveId });
  const handleDragStartBay  = (bayIndex) => {
    if (bays[bayIndex] == null) return;
    setDragging({ type: "bay", driveId: bays[bayIndex], bayIndex });
  };

  const handleDropOnBay = (targetIndex) => {
    if (!dragging) return;
    setBays((prev) => {
      const next = [...prev];
      if (dragging.type === "pool") {
        next[targetIndex] = dragging.driveId;
      } else {
        const temp = next[targetIndex];
        next[targetIndex] = next[dragging.bayIndex];
        next[dragging.bayIndex] = temp;
      }
      return next;
    });
    setDragging(null);
    setDragOverBay(null);
    setChecked(false);
  };

  const handleDropOnPool = (e) => {
    e.preventDefault();
    if (dragging?.type === "bay") {
      setBays((prev) => {
        const n = [...prev];
        n[dragging.bayIndex] = null;
        return n;
      });
    }
    setDragging(null);
    setChecked(false);
  };

  const handleRemoveFromBay = (bayIndex) => {
    setBays((prev) => {
      const n = [...prev];
      n[bayIndex] = null;
      return n;
    });
    setChecked(false);
  };

  const reset = () => {
    setSelectedRaid(null);
    setBays([]);
    setDragging(null);
    setDragOverBay(null);
    setChecked(false);
    setShowExplanation(false);
  };

  const goTo = (i) => {
    reset();
    setScenarioIndex(i);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <PageHeader
        title="RAID Configuration"
        subtitle={
          exam === "core2"
            ? "Core 1 topic shown — RAID is covered in 220-1201 Hardware domain"
            : "Read the requirement, select the correct RAID level, and drag the matching drives into the bays"
        }
      />

      {(exam === "core2" || exam === "netplus") && (
        <div className="mb-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-sm text-amber-700 dark:text-amber-400">
          RAID configuration is a <strong>Core 1 (220-1201)</strong> topic under Hardware. It is
          not directly tested on {exam === "netplus" ? "Network+" : "Core 2"}, but practicing it
          reinforces your overall knowledge.
        </div>
      )}

      <PageNav
        current={scenarioIndex}
        total={SCENARIOS.length}
        label="Scenario"
        onPrev={() => goTo(scenarioIndex - 1)}
        onNext={() => goTo(scenarioIndex + 1)}
        onShuffle={() => {
          reset();
          setOrder(shuffle(SCENARIOS.map((_, i) => i)));
          setScenarioIndex(0);
        }}
      />

      <div className="rounded-lg border bg-muted/20 p-4 mb-6">
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
          {scenario.title}
        </p>
        <p className="text-sm leading-relaxed mb-3">{scenario.requirement}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs border-t pt-2">
          <span>
            Interface:{" "}
            <strong className={getIfaceStyle(scenario.requiredInterface)}>
              {scenario.requiredInterface}
            </strong>
          </span>
          <span>
            Total usable storage:{" "}
            <strong className="text-foreground">{scenario.totalUsable}</strong>
          </span>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          1. Select RAID Level
        </p>
        <div className="flex flex-wrap gap-2">
          {RAID_OPTIONS.map((opt) => (
            <button
              key={opt.level}
              onClick={() => handleRaidSelect(opt)}
              className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${
                selectedRaid === opt.level
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:bg-accent"
              }`}
            >
              <span className="font-bold">{opt.level}</span>
              <span className="text-xs ml-1.5 opacity-70">· {opt.name}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedRaid && (
        <>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            2. Drag Matching Drives into Bays
          </p>

          <div
            className="flex flex-wrap gap-2 p-3 rounded-lg border border-dashed min-h-16 mb-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDropOnPool}
          >
            {poolDrives.length === 0 ? (
              <p className="text-xs text-muted-foreground self-center">
                All drives placed — drag back here to return a drive
              </p>
            ) : (
              poolDrives.map((drive) => (
                <DriveCard
                  key={drive.id}
                  drive={drive}
                  draggable
                  onDragStart={() => handleDragStartPool(drive.id)}
                />
              ))
            )}
          </div>

          <div className="flex flex-wrap gap-3 mb-2">
            {Array.from({ length: 6 }, (_, i) => {
              const active   = i < bays.length;
              const driveId  = active ? bays[i] : null;
              const label    = getBayLabel(selectedRaid, i, bays.length);
              const bayDrive = driveId ? getBayDrive(driveId) : null;
              const driveState =
                !checked || !driveId ? null : bayDrive?.correct ? "correct" : "wrong";
              const accent = active
                ? dragOverBay === i && dragging
                  ? "border-primary bg-primary/10"
                  : getBayAccent(label, driveState)
                : "border-border/30 bg-muted/10 opacity-30";

              return (
                <div
                  key={i}
                  onDragOver={(e) => {
                    if (active) {
                      e.preventDefault();
                      setDragOverBay(i);
                    }
                  }}
                  onDragLeave={() => setDragOverBay(null)}
                  onDrop={() => { if (active) handleDropOnBay(i); }}
                  className={`flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg border-2 w-28 min-h-28 justify-center transition-colors ${accent}`}
                >
                  <span
                    className={`text-xs font-semibold text-center ${
                      active && checked ? getLabelColor(label) : "text-muted-foreground"
                    }`}
                  >
                    {active && checked ? label : `Bay ${i + 1}`}
                  </span>
                  {active && driveId && bayDrive ? (
                    <DriveCard
                      drive={bayDrive}
                      draggable
                      driveState={driveState}
                      onDragStart={() => handleDragStartBay(i)}
                      onClick={() => handleRemoveFromBay(i)}
                    />
                  ) : active ? (
                    <div className="flex flex-col items-center gap-1 opacity-25 pointer-events-none">
                      <HardDrive className="h-6 w-6" />
                      <span className="text-xs">empty</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1 pointer-events-none">
                      <HardDrive className="h-6 w-6" />
                      <span className="text-xs">—</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mb-6">
            Click a placed drive to return it to the pool
          </p>
        </>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        <Button onClick={() => setChecked(true)} disabled={!allBaysFilled}>
          Check Configuration
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const correctDrives = scenario.drives.filter((d) => d.correct).map((d) => d.id);
            setSelectedRaid(scenario.correctRaid);
            setBays(correctDrives);
            setChecked(true);
            setShowExplanation(false);
          }}
        >
          Show Correct Config
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowExplanation((v) => !v)}
          className="gap-1.5"
        >
          <BookOpen className="h-4 w-4" />
          {showExplanation ? "Hide" : "Show"} Explanation
        </Button>
        <Button variant="ghost" size="sm" onClick={reset} className="gap-1.5 ml-auto">
          <RotateCcw className="h-4 w-4" /> Reset
        </Button>
      </div>

      {checked && (
        <div
          className={`flex items-start gap-2 p-3 rounded-lg border mb-4 text-sm ${
            isCorrect
              ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400"
              : "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400"
          }`}
        >
          {isCorrect ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
          )}
          {isCorrect ? (
            <span>
              <strong>Correct!</strong> {scenario.correctRaid} with {scenario.requiredCapacity}{" "}
              {scenario.requiredInterface} drives is the right configuration.
            </span>
          ) : (
            <div className="space-y-0.5">
              <p>
                <strong>Not quite.</strong>
              </p>
              {selectedRaid !== scenario.correctRaid && (
                <p>
                  {selectedRaid} doesn't meet the requirements — think about what the customer
                  needs most.
                </p>
              )}
              {wrongDrivesInBays.length > 0 && (
                <p>
                  {wrongDrivesInBays.length} drive
                  {wrongDrivesInBays.length > 1 ? "s" : ""} in the array{" "}
                  {wrongDrivesInBays.length > 1 ? "don't" : "doesn't"} match the required{" "}
                  {scenario.requiredCapacity} {scenario.requiredInterface} specification
                  (highlighted in red).
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {showExplanation && (
        <ExplanationPanel title={`Explanation — ${scenario.correctRaid}`}>
          <p className="text-sm leading-relaxed mb-3">{scenario.explanation}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs mb-1">
            <span>
              <span className="font-semibold">Required drives:</span>{" "}
              {RAID_OPTIONS.find((r) => r.level === scenario.correctRaid)?.minDrives} ×{" "}
              {scenario.requiredCapacity} {scenario.requiredInterface}
            </span>
            <span>
              <span className="font-semibold">Storage efficiency:</span>{" "}
              {scenario.storageEfficiency} → {scenario.totalUsable} usable
            </span>
            <span>
              <span className="font-semibold">Fault tolerance:</span> {scenario.faultTolerance}
            </span>
          </div>
          <RAIDDiagram raidLevel={scenario.correctRaid} />
        </ExplanationPanel>
      )}
    </div>
  );
}
