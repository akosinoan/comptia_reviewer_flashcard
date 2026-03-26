import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  RotateCcw,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────
const SCENARIOS = [
  {
    id: "gaming",
    title: "High-Performance Gaming Workstation",
    badge: "Gaming",
    badgeColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/30",
    requirements: [
      "Exceptional frame rates in AAA games",
      "Rapid load times (under 10 seconds)",
      "Ample storage for large game libraries (100 GB+ per title)",
      "Superior audio for immersive and competitive play",
      "Cost is not a constraint",
      "Must run Windows 11",
    ],
    categories: [
      {
        id: "cpu",
        label: "Processor (CPU)",
        correct: "i9",
        reason:
          "A flagship CPU (i9) handles game engines, physics, AI, and streaming simultaneously without bottlenecking a high-end GPU. The i3 would throttle the GPU; Xeon is server-optimized and lacks iGPU.",
        options: [
          { id: "i3",   label: "Intel Core i3-13100",  detail: "4 cores · budget office tasks" },
          { id: "i7",   label: "Intel Core i7-14700K", detail: "20 cores · high-end gaming" },
          { id: "i9",   label: "Intel Core i9-14900K", detail: "24 cores · flagship gaming & streaming" },
          { id: "xeon", label: "Intel Xeon W-2400",    detail: "Server · ECC · no integrated graphics" },
        ],
      },
      {
        id: "gpu",
        label: "Graphics (GPU)",
        correct: "dgpu",
        reason:
          "Discrete GPUs have dedicated VRAM and thousands of shaders required for modern 3D rendering and ray tracing. Integrated graphics share system RAM and cannot sustain high frame rates in AAA titles.",
        options: [
          { id: "igpu", label: "Integrated Graphics (Intel UHD)", detail: "Shares RAM · suitable for 2D and video" },
          { id: "dgpu", label: "NVIDIA RTX 4080 Super",           detail: "16 GB VRAM · ray tracing · high-FPS gaming" },
        ],
      },
      {
        id: "ram",
        label: "Memory (RAM)",
        correct: "32ddr5",
        reason:
          "Modern AAA games recommend 16 GB minimum; 32 GB leaves headroom for streaming software, background apps, and future titles. DDR5 provides higher bandwidth for the CPU and GPU workloads.",
        options: [
          { id: "8ddr4",  label: "8 GB DDR4",     detail: "Tight for modern games + OS overhead" },
          { id: "16ddr5", label: "16 GB DDR5",     detail: "Recommended baseline for gaming" },
          { id: "32ddr5", label: "32 GB DDR5",     detail: "Optimal · headroom for streaming & future titles" },
          { id: "16ecc",  label: "16 GB DDR5 ECC", detail: "Server error-correction · no gaming benefit" },
        ],
      },
      {
        id: "storage",
        label: "Primary Storage",
        correct: "2tnvme",
        reason:
          "NVMe SSDs cut game load times to seconds vs HDDs. 2 TB accommodates multiple large titles (some exceed 150 GB). 256 GB fills up with 1–2 games; HDDs are too slow.",
        options: [
          { id: "500hdd",  label: "500 GB HDD",      detail: "~120 MB/s · cheap · slow load times" },
          { id: "256ssd",  label: "256 GB SATA SSD", detail: "Fast · too small for game libraries" },
          { id: "1tnvme",  label: "1 TB NVMe SSD",   detail: "Fast · fits ~8–10 large games" },
          { id: "2tnvme",  label: "2 TB NVMe SSD",   detail: "Fast · ample space · best for gaming" },
        ],
      },
      {
        id: "sound",
        label: "Audio",
        correct: "71card",
        reason:
          "A dedicated 7.1 surround sound card provides multi-channel positional audio — critical for competitive gaming (hearing enemy footsteps from direction) and immersive single-player experiences. Onboard audio lacks this fidelity.",
        options: [
          { id: "onboard", label: "Onboard Audio (Realtek)",   detail: "Built-in · adequate for calls and casual media" },
          { id: "71card",  label: "Dedicated 7.1 Sound Card",  detail: "Multi-channel · positional audio · low latency" },
        ],
      },
      {
        id: "peripheral",
        label: "Communication / Peripherals",
        correct: "extmic",
        reason:
          "Streamers and competitive gamers need a dedicated external microphone for clear voice quality during streams and team communication. A headset mic is secondary; standalone condenser mics provide superior audio fidelity.",
        options: [
          { id: "webcam",  label: "Webcam only",       detail: "Video input only · no microphone" },
          { id: "headset", label: "Gaming Headset",     detail: "Convenient · integrated mic · good all-rounder" },
          { id: "extmic",  label: "Standalone USB Mic", detail: "Superior clarity · ideal for streaming & comms" },
        ],
      },
    ],
  },
  {
    id: "family",
    title: "Budget-Friendly Family Workstation",
    badge: "Family",
    badgeColor: "text-green-600 dark:text-green-400",
    borderColor: "border-green-500/30",
    requirements: [
      "Web browsing, word processing, and video conferencing",
      "Light photo viewing and media playback",
      "Low cost — functional over high-performance",
      "Shared by multiple family members",
      "Must run Windows 11",
    ],
    categories: [
      {
        id: "cpu",
        label: "Processor (CPU)",
        correct: "i3",
        reason:
          "An i3 comfortably handles browsing, Office apps, and video calls at a budget price. Higher-tier CPUs add cost with no perceivable benefit for light home tasks.",
        options: [
          { id: "i3",   label: "Intel Core i3-13100",  detail: "4 cores · ideal for everyday tasks · budget" },
          { id: "i5",   label: "Intel Core i5-13400",  detail: "Mid-range · slight overkill for basic use" },
          { id: "i7",   label: "Intel Core i7-14700K", detail: "High-performance · unnecessary cost here" },
          { id: "xeon", label: "Intel Xeon W-2400",    detail: "Server workstation · expensive · overkill" },
        ],
      },
      {
        id: "gpu",
        label: "Graphics (GPU)",
        correct: "igpu",
        reason:
          "Integrated graphics handles web browsing, video playback, and video conferencing without issue. A discrete GPU adds $300+ in unnecessary cost that directly conflicts with the budget requirement.",
        options: [
          { id: "igpu", label: "Integrated Graphics (Intel UHD)", detail: "Free with CPU · handles all non-gaming tasks" },
          { id: "dgpu", label: "Discrete GPU (RTX 3060)",         detail: "Adds $300+ · unnecessary for this use case" },
        ],
      },
      {
        id: "ram",
        label: "Memory (RAM)",
        correct: "8ddr4",
        reason:
          "8 GB DDR4 is comfortable for browsing, Office, and video calls running simultaneously. DDR4 reduces cost vs DDR5. 4 GB is tight with Windows 11 overhead; 16+ GB is wasteful here.",
        options: [
          { id: "4ddr4",  label: "4 GB DDR4",    detail: "Tight with Windows 11 · may lag during multitasking" },
          { id: "8ddr4",  label: "8 GB DDR4",    detail: "Comfortable for everyday tasks · cost-effective" },
          { id: "16ddr5", label: "16 GB DDR5",   detail: "More than needed · higher cost" },
          { id: "32ddr5", label: "32 GB DDR5",   detail: "Overkill · significant unnecessary expense" },
        ],
      },
      {
        id: "storage",
        label: "Primary Storage",
        correct: "500ssd",
        reason:
          "A 500 GB SATA SSD provides fast Windows 11 boot and file access at a budget price. An HDD is too slow; NVMe adds unnecessary cost; 256 GB is tight for a shared family machine.",
        options: [
          { id: "500hdd", label: "500 GB HDD",      detail: "Very cheap · slow boot and response times" },
          { id: "256ssd", label: "256 GB SATA SSD", detail: "Fast · too small for shared family storage" },
          { id: "500ssd", label: "500 GB SATA SSD", detail: "Fast boot · adequate space · budget sweet spot" },
          { id: "1tnvme", label: "1 TB NVMe SSD",   detail: "Fast · overkill · unnecessary extra cost" },
        ],
      },
      {
        id: "sound",
        label: "Audio",
        correct: "onboard",
        reason:
          "Onboard audio handles video calls, music, and media playback without issue. A dedicated sound card is unnecessary expense that goes against the budget requirement.",
        options: [
          { id: "onboard", label: "Onboard Audio (Realtek)",   detail: "Built-in · sufficient for calls and media" },
          { id: "71card",  label: "Dedicated 7.1 Sound Card",  detail: "Unnecessary · adds cost with no benefit here" },
        ],
      },
      {
        id: "peripheral",
        label: "Communication / Peripherals",
        correct: "headset",
        reason:
          "A headset combines microphone and speakers in one device — ideal for video conferencing (Teams/Zoom). A webcam alone lacks audio input; a standalone mic lacks video.",
        options: [
          { id: "webcam",  label: "Webcam only",       detail: "Video only · no microphone · incomplete for calls" },
          { id: "headset", label: "Headset with Mic",  detail: "All-in-one · perfect for video conferencing" },
          { id: "extmic",  label: "Standalone USB Mic", detail: "Audio only · no video · partial solution" },
        ],
      },
    ],
  },
];

// ── Main component ─────────────────────────────────────────────────────────────
export default function PCBuilderPage() {
  const [activeTab, setActiveTab]   = useState("gaming");
  const [selections, setSelections] = useState({});
  const [submitted, setSubmitted]   = useState({});
  const [showReqs, setShowReqs]     = useState(true);

  const scenario    = SCENARIOS.find((s) => s.id === activeTab);
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

  const getOptionStyle = (catId, optId, correctId) => {
    const selected = selections[key(activeTab, catId)] === optId;

    if (!isSubmitted) {
      return selected
        ? "bg-primary/10 border-primary"
        : "bg-background border-border hover:bg-accent";
    }

    const isCorrect = optId === correctId;

    if (selected && isCorrect) {
      return "bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-400";
    }
    if (selected && !isCorrect) {
      return "bg-red-500/10 border-red-500/50 text-red-700 dark:text-red-400";
    }
    if (!selected && isCorrect) {
      return "bg-green-500/5 border-green-500/30 text-green-600 dark:text-green-400";
    }
    return "bg-background border-border opacity-50";
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">PC Builder Challenge</h1>
        <p className="text-muted-foreground text-sm">
          Select the best component for each category based on the scenario requirements, then submit to see your results.
        </p>
      </div>

      {/* Tab buttons */}
      <div className="flex gap-2 mb-6">
        {SCENARIOS.map((s) => (
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

      {/* Requirements panel */}
      <div className={`rounded-lg border mb-6 ${scenario.borderColor}`}>
        <button
          onClick={() => setShowReqs((v) => !v)}
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
        {scenario.categories.map((cat) => {
          const selected   = selections[key(activeTab, cat.id)];
          const isCorrect  = selected === cat.correct;
          const showResult = isSubmitted && selected;

          return (
            <div
              key={cat.id}
              className={`rounded-lg border p-4 transition-colors ${
                showResult
                  ? isCorrect
                    ? "border-green-500/40 bg-green-500/5"
                    : "border-red-500/40 bg-red-500/5"
                  : "border-border bg-card"
              }`}
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold">{cat.label}</p>
                {showResult && (
                  isCorrect ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                  )
                )}
              </div>

              {/* Options */}
              <div className="space-y-2">
                {cat.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(cat.id, opt.id)}
                    disabled={isSubmitted}
                    className={`w-full text-left px-3 py-2.5 rounded-lg border transition-colors ${getOptionStyle(
                      cat.id,
                      opt.id,
                      cat.correct
                    )}`}
                  >
                    <p className="text-sm font-medium leading-snug">{opt.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{opt.detail}</p>
                  </button>
                ))}
              </div>

              {/* Explanation after submit */}
              {isSubmitted && (
                <div className="mt-3 p-3 rounded-md bg-muted/40 border border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Explanation
                  </p>
                  <p className="text-xs leading-relaxed">{cat.reason}</p>
                </div>
              )}
            </div>
          );
        })}
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
