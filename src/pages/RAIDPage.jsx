import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  HardDrive,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  RotateCcw,
  Shuffle,
} from "lucide-react";

// ── Scenarios ─────────────────────────────────────────────────────────────────
const SCENARIOS = [
  {
    id: 1,
    title: "Video Editing Workstation",
    requirement:
      "A video production company needs the fastest possible read/write speeds for 4K footage editing. They maintain offsite backups so hardware data loss is acceptable.",
    requiredCapacity: "1 TB",
    requiredInterface: "NVMe",
    correctRaid: "RAID 0",
    storageEfficiency: "100%",
    totalUsable: "2 TB",
    faultTolerance: "None",
    explanation:
      "RAID 0 stripes data across both drives — blocks alternate between drives so reads and writes happen to both simultaneously, doubling throughput. NVMe drives are required for maximum speed (PCIe bus vs. SATA). Drives must match in capacity and interface; mixing sizes wastes space, mixing interfaces causes bottlenecks.",
    drives: [
      { id: 1, capacity: "1 TB",   iface: "NVMe",     correct: true  },
      { id: 2, capacity: "1 TB",   iface: "NVMe",     correct: true  },
      { id: 3, capacity: "2 TB",   iface: "NVMe",     correct: false },
      { id: 4, capacity: "1 TB",   iface: "SATA SSD", correct: false },
      { id: 5, capacity: "512 GB", iface: "NVMe",     correct: false },
      { id: 6, capacity: "1 TB",   iface: "SATA HDD", correct: false },
      { id: 7, capacity: "256 GB", iface: "NVMe",     correct: false },
      { id: 8, capacity: "2 TB",   iface: "SATA SSD", correct: false },
      { id: 9, capacity: "4 TB",   iface: "NVMe",     correct: false },
    ],
  },
  {
    id: 2,
    title: "Small Business File Server",
    requirement:
      "A small accounting firm needs their file server to survive a single hard drive failure without data loss. Reliability matters more than peak speed.",
    requiredCapacity: "2 TB",
    requiredInterface: "SATA SSD",
    correctRaid: "RAID 1",
    storageEfficiency: "50%",
    totalUsable: "2 TB",
    faultTolerance: "1 drive",
    explanation:
      "RAID 1 mirrors data identically across both drives. If one fails, the other holds a complete copy and the server keeps running. SATA SSD strikes the right balance of cost, reliability, and performance for a file server. Drives must match in capacity — a mismatch would limit usable space to the smaller drive.",
    drives: [
      { id: 1,  capacity: "2 TB",   iface: "SATA SSD", correct: true  },
      { id: 2,  capacity: "2 TB",   iface: "SATA SSD", correct: true  },
      { id: 3,  capacity: "1 TB",   iface: "SATA SSD", correct: false },
      { id: 4,  capacity: "2 TB",   iface: "SATA HDD", correct: false },
      { id: 5,  capacity: "4 TB",   iface: "SATA SSD", correct: false },
      { id: 6,  capacity: "2 TB",   iface: "NVMe",     correct: false },
      { id: 7,  capacity: "500 GB", iface: "SATA SSD", correct: false },
      { id: 8,  capacity: "1 TB",   iface: "SATA HDD", correct: false },
      { id: 9,  capacity: "8 TB",   iface: "SATA SSD", correct: false },
    ],
  },
  {
    id: 3,
    title: "Web Application Server",
    requirement:
      "A startup needs balanced read performance, storage efficiency, and single-drive fault tolerance for their web server. Budget-conscious — cost-effective drives preferred.",
    requiredCapacity: "2 TB",
    requiredInterface: "SATA SSD",
    correctRaid: "RAID 5",
    storageEfficiency: "67%",
    totalUsable: "4 TB",
    faultTolerance: "1 drive",
    explanation:
      "RAID 5 stripes data with distributed parity across all 3 drives. Any single drive can fail and its data is rebuilt from the remaining two. Using identical 2 TB SATA SSDs ensures consistent performance and no wasted capacity. Mixing different capacities would force the array to use the smallest drive's capacity for each.",
    drives: [
      { id: 1, capacity: "2 TB",  iface: "SATA SSD", correct: true  },
      { id: 2, capacity: "2 TB",  iface: "SATA SSD", correct: true  },
      { id: 3, capacity: "2 TB",  iface: "SATA SSD", correct: true  },
      { id: 4, capacity: "1 TB",   iface: "SATA SSD", correct: false },
      { id: 5, capacity: "2 TB",   iface: "NVMe",     correct: false },
      { id: 6, capacity: "4 TB",   iface: "SATA SSD", correct: false },
      { id: 7, capacity: "2 TB",   iface: "SATA HDD", correct: false },
      { id: 8, capacity: "500 GB", iface: "SATA SSD", correct: false },
      { id: 9, capacity: "2 TB",   iface: "NVMe",     correct: false },
    ],
  },
  {
    id: 4,
    title: "Financial Database Server",
    requirement:
      "A bank's transaction database must survive two simultaneous drive failures. High-capacity drives are required to handle IOPS-intensive workloads.",
    requiredCapacity: "4 TB",
    requiredInterface: "NVMe",
    correctRaid: "RAID 6",
    storageEfficiency: "50%",
    totalUsable: "8 TB",
    faultTolerance: "2 drives",
    explanation:
      "RAID 6 uses two independent parity blocks per stripe — any two drives can fail simultaneously without data loss, critical for financial systems. NVMe is required to sustain high IOPS under heavy transaction loads. All four drives must be identical 4 TB NVMe; mismatched capacities reduce usable space, mismatched interfaces create bottlenecks at the slower drive.",
    drives: [
      { id: 1, capacity: "4 TB",  iface: "NVMe",     correct: true  },
      { id: 2, capacity: "4 TB",  iface: "NVMe",     correct: true  },
      { id: 3, capacity: "4 TB",  iface: "NVMe",     correct: true  },
      { id: 4, capacity: "4 TB",  iface: "NVMe",     correct: true  },
      { id: 5, capacity: "2 TB",   iface: "NVMe",     correct: false },
      { id: 6, capacity: "4 TB",   iface: "SATA SSD", correct: false },
      { id: 7, capacity: "8 TB",   iface: "NVMe",     correct: false },
      { id: 8, capacity: "4 TB",   iface: "SATA HDD", correct: false },
      { id: 9, capacity: "1 TB",   iface: "NVMe",     correct: false },
      { id: 10, capacity: "512 GB", iface: "NVMe",    correct: false },
    ],
  },
  {
    id: 5,
    title: "Mission-Critical E-Commerce Platform",
    requirement:
      "An online retailer needs high throughput and redundancy for 24/7 uptime. The array must survive at least one failure per mirrored pair.",
    requiredCapacity: "1 TB",
    requiredInterface: "NVMe",
    correctRaid: "RAID 10",
    storageEfficiency: "50%",
    totalUsable: "2 TB",
    faultTolerance: "1 per mirror pair",
    explanation:
      "RAID 10 stripes across two mirrored NVMe pairs — delivering both read/write speed and redundancy. NVMe is essential for e-commerce peak-load performance. All four drives must be identical 1 TB NVMe; using different capacities would waste space on the larger drives, and mixing interfaces would limit the array to the slowest drive's throughput.",
    drives: [
      { id: 1, capacity: "1 TB",   iface: "NVMe",     correct: true  },
      { id: 2, capacity: "1 TB",   iface: "NVMe",     correct: true  },
      { id: 3, capacity: "1 TB",   iface: "NVMe",     correct: true  },
      { id: 4, capacity: "1 TB",   iface: "NVMe",     correct: true  },
      { id: 5, capacity: "2 TB",   iface: "NVMe",     correct: false },
      { id: 6, capacity: "1 TB",   iface: "SATA SSD", correct: false },
      { id: 7, capacity: "512 GB", iface: "NVMe",     correct: false },
      { id: 8, capacity: "1 TB",   iface: "SATA HDD", correct: false },
      { id: 9, capacity: "4 TB",   iface: "NVMe",     correct: false },
      { id: 10, capacity: "256 GB", iface: "NVMe",     correct: false },
    ],
  },
];

// ── RAID options ──────────────────────────────────────────────────────────────
const RAID_OPTIONS = [
  { level: "RAID 0",  name: "Striping",                    minDrives: 2 },
  { level: "RAID 1",  name: "Mirroring",                   minDrives: 2 },
  { level: "RAID 5",  name: "Striping with Parity",        minDrives: 3 },
  { level: "RAID 6",  name: "Striping with Double Parity", minDrives: 4 },
  { level: "RAID 10", name: "Stripe of Mirrors",           minDrives: 4 },
];

function getBayLabel(raidLevel, index, total) {
  switch (raidLevel) {
    case "RAID 0":  return "Data";
    case "RAID 1":  return index === 0 ? "Primary" : "Mirror";
    case "RAID 5":  return index === total - 1 ? "Parity" : "Data";
    case "RAID 6":  return index >= total - 2 ? "Parity" : "Data";
    case "RAID 10": {
      const pair = Math.floor(index / 2) + 1;
      return index % 2 === 0 ? `Pair ${pair} Primary` : `Pair ${pair} Mirror`;
    }
    default: return `Bay ${index + 1}`;
  }
}

function getBayAccent(label, driveState) {
  if (driveState === "wrong")   return "border-red-500/70 bg-red-500/10";
  if (driveState === "correct") return "border-green-500/70 bg-green-500/10";
  if (label === "Parity")        return "border-yellow-500/50 bg-yellow-500/5";
  if (label.includes("Mirror"))  return "border-blue-500/50 bg-blue-500/5";
  if (label.includes("Primary")) return "border-purple-500/50 bg-purple-500/5";
  return "border-border/60";
}

function getLabelColor(label) {
  if (label === "Parity")        return "text-yellow-600 dark:text-yellow-400";
  if (label.includes("Mirror"))  return "text-blue-600 dark:text-blue-400";
  if (label.includes("Primary")) return "text-purple-600 dark:text-purple-400";
  return "text-muted-foreground";
}

function getIfaceStyle(iface) {
  if (iface === "NVMe")     return "text-blue-600 dark:text-blue-400";
  if (iface === "SATA SSD") return "text-green-600 dark:text-green-400";
  if (iface === "SATA HDD") return "text-amber-600 dark:text-amber-400";
  return "text-muted-foreground";
}

// ── RAID Diagram ──────────────────────────────────────────────────────────────
function RAIDDiagram({ raidLevel }) {
  const diagrams = {
    "RAID 0": {
      rows: [
        { label: "Drive 1", cells: ["A1", "A3", "A5", "A7"] },
        { label: "Drive 2", cells: ["A2", "A4", "A6", "A8"] },
      ],
      note: "Blocks alternate between drives — both drives read/write simultaneously for maximum throughput",
    },
    "RAID 1": {
      rows: [
        { label: "Drive 1 (Primary)", cells: ["A1", "A2", "A3", "A4"] },
        { label: "Drive 2 (Mirror)",  cells: ["A1", "A2", "A3", "A4"] },
      ],
      note: "Identical data written to both drives at all times — either drive can serve reads",
    },
    "RAID 5": {
      rows: [
        { label: "Drive 1", cells: ["A1", "A2", "P"]  },
        { label: "Drive 2", cells: ["A3", "P",  "A4"] },
        { label: "Drive 3", cells: ["P",  "A5", "A6"] },
      ],
      note: "Parity (P) rotates across all drives — any one drive can be rebuilt from the remaining two",
    },
    "RAID 6": {
      rows: [
        { label: "Drive 1", cells: ["A1", "P1", "P2"] },
        { label: "Drive 2", cells: ["P1", "A2", "P2"] },
        { label: "Drive 3", cells: ["P2", "P1", "A3"] },
        { label: "Drive 4", cells: ["A4", "A5", "A6"] },
      ],
      note: "Two independent parity sets (P1, P2) per stripe — any two simultaneous drive failures are survived",
    },
    "RAID 10": {
      rows: [
        { label: "Drive 1 (Pair A · Primary)", cells: ["A1", "A3", "A5"] },
        { label: "Drive 2 (Pair A · Mirror)",  cells: ["A1", "A3", "A5"] },
        { label: "Drive 3 (Pair B · Primary)", cells: ["A2", "A4", "A6"] },
        { label: "Drive 4 (Pair B · Mirror)",  cells: ["A2", "A4", "A6"] },
      ],
      note: "Pairs A & B each mirror internally (RAID 1); data is striped across both pairs (RAID 0)",
    },
  };

  const d = diagrams[raidLevel];
  if (!d) return null;

  return (
    <div className="mt-3">
      <div className="overflow-x-auto">
        <table className="text-xs border-collapse">
          <tbody>
            {d.rows.map((row, ri) => (
              <tr key={ri}>
                <td className="pr-3 py-0.5 text-muted-foreground whitespace-nowrap text-right">
                  {row.label}
                </td>
                {row.cells.map((cell, ci) => (
                  <td key={ci} className="px-0.5 py-0.5">
                    <div className={`px-2 py-1 rounded font-mono font-semibold text-center border ${
                      cell.startsWith("P")
                        ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/40"
                        : "bg-primary/10 text-primary border-primary/20"
                    }`}>
                      {cell}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-2 italic">{d.note}</p>
    </div>
  );
}

// ── Drive card ────────────────────────────────────────────────────────────────
function DriveCard({ drive, draggable: isDraggable, onDragStart, onClick, driveState, faded }) {
  return (
    <div
      draggable={isDraggable}
      onDragStart={onDragStart}
      onClick={onClick}
      className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg border text-center select-none transition-colors
        ${isDraggable ? "cursor-grab active:cursor-grabbing hover:bg-accent" : ""}
        ${faded ? "opacity-40 cursor-not-allowed" : ""}
        ${driveState === "wrong"   ? "border-red-500/60 bg-red-500/10" :
          driveState === "correct" ? "border-green-500/60 bg-green-500/10" :
          "bg-background border-border"}
      `}
    >
      <HardDrive className={`h-6 w-6 ${
        driveState === "wrong"   ? "text-red-500" :
        driveState === "correct" ? "text-green-500" :
        "text-primary"
      }`} />
      <span className="text-xs font-mono font-bold mt-0.5">{drive.capacity}</span>
      <span className={`text-xs font-semibold ${getIfaceStyle(drive.iface)}`}>{drive.iface}</span>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RAIDPage() {
  const [order, setOrder] = useState(() => shuffleArr(SCENARIOS.map((_, i) => i)));
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedRaid, setSelectedRaid]   = useState(null);
  const [bays, setBays]                   = useState([]);       // driveId | null
  const [dragging, setDragging]           = useState(null);
  const [dragOverBay, setDragOverBay]     = useState(null);
  const [checked, setChecked]             = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const scenario = SCENARIOS[order[scenarioIndex]];
  const placedIds = new Set(bays.filter(Boolean));
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

  // ── RAID selection ──────────────────────────────────────────────────────────
  const handleRaidSelect = (opt) => {
    setSelectedRaid(opt.level);
    setBays(Array(opt.minDrives).fill(null));
    setChecked(false);
    setShowExplanation(false);
  };

  // ── Drag ───────────────────────────────────────────────────────────────────
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
      setBays((prev) => { const n = [...prev]; n[dragging.bayIndex] = null; return n; });
    }
    setDragging(null);
    setChecked(false);
  };

  const handleRemoveFromBay = (bayIndex) => {
    setBays((prev) => { const n = [...prev]; n[bayIndex] = null; return n; });
    setChecked(false);
  };

  // ── Navigation ─────────────────────────────────────────────────────────────
  const reset = () => {
    setSelectedRaid(null);
    setBays([]);
    setDragging(null);
    setDragOverBay(null);
    setChecked(false);
    setShowExplanation(false);
  };

  const goTo = (i) => { reset(); setScenarioIndex(i); };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">RAID Configuration</h1>
        <p className="text-muted-foreground text-sm">
          Read the requirement, select the correct RAID level, and drag the matching drives into the bays
        </p>
      </div>

      {/* Scenario nav */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground">
          Scenario {scenarioIndex + 1} / {SCENARIOS.length}
        </span>
        <div className="flex gap-1">
          <Button
            variant="ghost" size="sm"
            onClick={() => { reset(); setOrder(shuffleArr(SCENARIOS.map((_, i) => i))); setScenarioIndex(0); }}
            className="gap-1.5 text-xs"
          >
            <Shuffle className="h-3.5 w-3.5" /> Shuffle
          </Button>
          <Button variant="ghost" size="sm" onClick={() => goTo(scenarioIndex - 1)} disabled={scenarioIndex === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => goTo(scenarioIndex + 1)} disabled={scenarioIndex === SCENARIOS.length - 1}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scenario card */}
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

      {/* Step 1 — RAID level */}
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

      {/* Step 2 — Drag drives */}
      {selectedRaid && (
        <>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            2. Drag Matching Drives into Bays
          </p>

          {/* Pool */}
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

          {/* Bays — always render 6 slots */}
          <div className="flex flex-wrap gap-3 mb-2">
            {Array.from({ length: 6 }, (_, i) => {
              const active   = i < bays.length;
              const driveId  = active ? bays[i] : null;
              const label    = getBayLabel(selectedRaid, i, bays.length);
              const bayDrive = driveId ? getBayDrive(driveId) : null;
              const driveState =
                !checked || !driveId ? null :
                bayDrive?.correct ? "correct" : "wrong";
              const accent = active
                ? dragOverBay === i && dragging
                  ? "border-primary bg-primary/10"
                  : getBayAccent(label, driveState)
                : "border-border/30 bg-muted/10 opacity-30";

              return (
                <div
                  key={i}
                  onDragOver={(e) => { if (active) { e.preventDefault(); setDragOverBay(i); } }}
                  onDragLeave={() => setDragOverBay(null)}
                  onDrop={() => { if (active) handleDropOnBay(i); }}
                  className={`flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg border-2 w-28 min-h-28 justify-center transition-colors ${accent}`}
                >
                  <span className={`text-xs font-semibold text-center ${active && checked ? getLabelColor(label) : "text-muted-foreground"}`}>
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

      {/* Actions */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button onClick={() => setChecked(true)} disabled={!allBaysFilled}>
          Check Configuration
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const correctDrives = scenario.drives.filter(d => d.correct).map(d => d.id);
            setSelectedRaid(scenario.correctRaid);
            setBays(correctDrives);
            setChecked(true);
            setShowExplanation(false);
          }}
          className="gap-1.5"
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

      {/* Result feedback */}
      {checked && (
        <div className={`flex items-start gap-2 p-3 rounded-lg border mb-4 text-sm ${
          isCorrect
            ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400"
            : "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400"
        }`}>
          {isCorrect
            ? <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
            : <XCircle className="h-4 w-4 shrink-0 mt-0.5" />}
          {isCorrect ? (
            <span>
              <strong>Correct!</strong> {scenario.correctRaid} with {scenario.requiredCapacity}{" "}
              {scenario.requiredInterface} drives is the right configuration.
            </span>
          ) : (
            <div className="space-y-0.5">
              <p><strong>Not quite.</strong></p>
              {selectedRaid !== scenario.correctRaid && (
                <p>{selectedRaid} doesn't meet the requirements — think about what the customer needs most.</p>
              )}
              {wrongDrivesInBays.length > 0 && (
                <p>
                  {wrongDrivesInBays.length} drive{wrongDrivesInBays.length > 1 ? "s" : ""} in the array{" "}
                  {wrongDrivesInBays.length > 1 ? "don't" : "doesn't"} match the required{" "}
                  {scenario.requiredCapacity} {scenario.requiredInterface} specification (highlighted in red).
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Explanation */}
      {showExplanation && (
        <div className="rounded-lg border p-4 bg-muted/20">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Explanation — {scenario.correctRaid}
          </p>
          <p className="text-sm leading-relaxed mb-3">{scenario.explanation}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs mb-1">
            <span><span className="font-semibold">Required drives:</span>{" "}
              {RAID_OPTIONS.find(r => r.level === scenario.correctRaid)?.minDrives} × {scenario.requiredCapacity} {scenario.requiredInterface}
            </span>
            <span><span className="font-semibold">Storage efficiency:</span> {scenario.storageEfficiency} → {scenario.totalUsable} usable</span>
            <span><span className="font-semibold">Fault tolerance:</span> {scenario.faultTolerance}</span>
          </div>
          <RAIDDiagram raidLevel={scenario.correctRaid} />
        </div>
      )}
    </div>
  );
}
