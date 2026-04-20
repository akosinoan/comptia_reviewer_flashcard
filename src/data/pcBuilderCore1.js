// PC Builder scenario data for CompTIA A+ Core 1 (220-1201)
export const SCENARIOS = [
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
