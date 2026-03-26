import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  BookOpen,
} from "lucide-react";

// ── Helpers ───────────────────────────────────────────────────────────────────

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── PBQ Data ──────────────────────────────────────────────────────────────────

const PBQs = [
  {
    id: 1,
    type: "bucket",
    domain: "Networking",
    title: "OSI Model Classification",
    question:
      "Classify each protocol, device, or technology into its correct OSI model layer. Click an item from the pool, then click the target layer to place it.",
    explanation:
      "Layer 7 (Application) — user-facing protocols like HTTP, FTP, SMTP, DNS.\n" +
      "Layer 6 (Presentation) — data formatting, encryption, compression: SSL/TLS.\n" +
      "Layer 5 (Session) — establishes/manages sessions: NetBIOS.\n" +
      "Layer 4 (Transport) — end-to-end delivery: TCP (reliable) and UDP (best-effort).\n" +
      "Layer 3 (Network) — logical addressing and routing: IP, ICMP, Router.\n" +
      "Layer 2 (Data Link) — MAC addressing and framing: Ethernet, ARP, Switch.\n" +
      "Layer 1 (Physical) — raw bits over a medium: Hub, Repeater, copper/fiber cable.",
    buckets: [
      { id: 7, label: "Layer 7", sublabel: "Application" },
      { id: 6, label: "Layer 6", sublabel: "Presentation" },
      { id: 5, label: "Layer 5", sublabel: "Session" },
      { id: 4, label: "Layer 4", sublabel: "Transport" },
      { id: 3, label: "Layer 3", sublabel: "Network" },
      { id: 2, label: "Layer 2", sublabel: "Data Link" },
      { id: 1, label: "Layer 1", sublabel: "Physical" },
    ],
    items: [
      { id: "http",     label: "HTTP / HTTPS",     bucket: 7 },
      { id: "ftp",      label: "FTP",              bucket: 7 },
      { id: "smtp",     label: "SMTP",             bucket: 7 },
      { id: "dns",      label: "DNS",              bucket: 7 },
      { id: "ssl",      label: "SSL / TLS",        bucket: 6 },
      { id: "netbios",  label: "NetBIOS",          bucket: 5 },
      { id: "tcp",      label: "TCP",              bucket: 4 },
      { id: "udp",      label: "UDP",              bucket: 4 },
      { id: "ip",       label: "IPv4 / IPv6",      bucket: 3 },
      { id: "icmp",     label: "ICMP",             bucket: 3 },
      { id: "router",   label: "Router",           bucket: 3 },
      { id: "arp",      label: "ARP",              bucket: 2 },
      { id: "ethernet", label: "Ethernet (MAC)",   bucket: 2 },
      { id: "switch",   label: "Switch",           bucket: 2 },
      { id: "hub",      label: "Hub / Repeater",   bucket: 1 },
      { id: "cable",    label: "Copper / Fiber",   bucket: 1 },
    ],
  },
  {
    id: 2,
    type: "match",
    domain: "Networking",
    title: "Wireless 802.11 Standards",
    question:
      "Match each 802.11 wireless standard to its maximum theoretical speed and frequency band. Click a standard on the left, then click its spec on the right.",
    explanation:
      "802.11a — 54 Mbps, 5 GHz only (less interference, shorter range).\n" +
      "802.11b — 11 Mbps, 2.4 GHz (first consumer standard, slowest).\n" +
      "802.11g — 54 Mbps, 2.4 GHz (backward compatible with b).\n" +
      "802.11n (Wi-Fi 4) — up to 600 Mbps, dual-band 2.4/5 GHz, introduced MIMO.\n" +
      "802.11ac (Wi-Fi 5) — up to 3.5 Gbps, 5 GHz only, MU-MIMO, beamforming.\n" +
      "802.11ax (Wi-Fi 6/6E) — up to 9.6 Gbps, 2.4/5/6 GHz, OFDMA for dense environments.",
    left: [
      { id: "a",  label: "802.11a" },
      { id: "b",  label: "802.11b" },
      { id: "g",  label: "802.11g" },
      { id: "n",  label: "802.11n  (Wi-Fi 4)" },
      { id: "ac", label: "802.11ac (Wi-Fi 5)" },
      { id: "ax", label: "802.11ax (Wi-Fi 6)" },
    ],
    right: [
      { id: "a",  label: "54 Mbps · 5 GHz" },
      { id: "b",  label: "11 Mbps · 2.4 GHz" },
      { id: "g",  label: "54 Mbps · 2.4 GHz" },
      { id: "n",  label: "600 Mbps · 2.4 / 5 GHz" },
      { id: "ac", label: "3.5 Gbps · 5 GHz" },
      { id: "ax", label: "9.6 Gbps · 2.4 / 5 / 6 GHz" },
    ],
  },
  {
    id: 3,
    type: "bucket",
    domain: "Virtualization & Cloud",
    title: "Cloud Service Models",
    question:
      "Classify each product or service into the correct cloud service model (IaaS, PaaS, or SaaS). Click an item, then click the target category.",
    explanation:
      "IaaS (Infrastructure as a Service) — you manage the OS and up; provider manages hardware. Examples: AWS EC2, Azure VMs, bare-metal cloud servers.\n" +
      "PaaS (Platform as a Service) — you deploy code/apps; provider manages OS, runtime, scaling. Examples: Google App Engine, Heroku, Azure App Service.\n" +
      "SaaS (Software as a Service) — you just use the application; provider manages everything. Examples: Microsoft 365, Gmail, Salesforce, Dropbox.",
    buckets: [
      { id: "iaas", label: "IaaS", sublabel: "Infrastructure as a Service" },
      { id: "paas", label: "PaaS", sublabel: "Platform as a Service" },
      { id: "saas", label: "SaaS", sublabel: "Software as a Service" },
    ],
    items: [
      { id: "ec2",        label: "AWS EC2 (virtual machines)",       bucket: "iaas" },
      { id: "azurevm",    label: "Azure Virtual Machines",           bucket: "iaas" },
      { id: "vnet",       label: "Virtual networking / VPC",        bucket: "iaas" },
      { id: "gae",        label: "Google App Engine",                bucket: "paas" },
      { id: "heroku",     label: "Heroku",                           bucket: "paas" },
      { id: "azuresql",   label: "Azure SQL Database (managed)",    bucket: "paas" },
      { id: "office365",  label: "Microsoft 365",                    bucket: "saas" },
      { id: "gmail",      label: "Gmail / Google Workspace",        bucket: "saas" },
      { id: "salesforce", label: "Salesforce CRM",                  bucket: "saas" },
      { id: "dropbox",    label: "Dropbox",                          bucket: "saas" },
    ],
  },
  {
    id: 4,
    type: "order",
    domain: "Troubleshooting",
    title: "CompTIA Troubleshooting Methodology",
    question:
      "Drag the steps into the correct order following the CompTIA A+ six-step troubleshooting methodology.",
    explanation:
      "The CompTIA A+ troubleshooting methodology (in order):\n" +
      "1. Identify the problem — gather information, question the user, identify symptoms.\n" +
      "2. Establish a theory of probable cause — consider multiple causes (don't overlook the obvious).\n" +
      "3. Test the theory to determine cause — confirm or deny the theory; escalate if needed.\n" +
      "4. Establish a plan of action — determine how to resolve the problem and any side effects.\n" +
      "5. Implement the solution or escalate — apply the fix or escalate if beyond scope.\n" +
      "6. Verify full system functionality — confirm the fix worked and prevent recurrence.\n" +
      "7. Document findings, actions, and outcomes — record everything for future reference.",
    items: [
      { id: 1, label: "Identify the problem" },
      { id: 2, label: "Establish a theory of probable cause" },
      { id: 3, label: "Test the theory to determine cause" },
      { id: 4, label: "Establish a plan of action to resolve the problem" },
      { id: 5, label: "Implement the solution or escalate" },
      { id: 6, label: "Verify full system functionality" },
      { id: 7, label: "Document findings, actions, and outcomes" },
    ],
  },
  {
    id: 5,
    type: "match",
    domain: "Networking / Hardware",
    title: "Network Cable Types",
    question:
      "Match each cable type to its key characteristic or primary use case.",
    explanation:
      "Cat 5e — Gigabit (1 Gbps) up to 100 m, most common budget LAN cable.\n" +
      "Cat 6 — 10 Gbps up to 55 m, better crosstalk rejection than Cat 5e.\n" +
      "Cat 6a — 10 Gbps up to 100 m (augmented), shielded, used in data centers.\n" +
      "Single-mode fiber — long-distance WAN/campus links, single light path, yellow jacket.\n" +
      "Multi-mode fiber — short-distance datacenter links, multiple light paths, orange or aqua jacket.\n" +
      "Coaxial (RG-6) — cable TV and broadband internet distribution to homes.",
    left: [
      { id: "cat5e", label: "Cat 5e" },
      { id: "cat6",  label: "Cat 6" },
      { id: "cat6a", label: "Cat 6a" },
      { id: "smf",   label: "Single-mode fiber" },
      { id: "mmf",   label: "Multi-mode fiber" },
      { id: "coax",  label: "Coaxial (RG-6)" },
    ],
    right: [
      { id: "cat5e", label: "1 Gbps up to 100 m · budget LAN runs" },
      { id: "cat6",  label: "10 Gbps up to 55 m · improved crosstalk rejection" },
      { id: "cat6a", label: "10 Gbps up to 100 m · shielded, augmented" },
      { id: "smf",   label: "Long-distance links · single light path · yellow jacket" },
      { id: "mmf",   label: "Short datacenter links · multiple light paths · orange/aqua" },
      { id: "coax",  label: "Cable TV / broadband internet to homes" },
    ],
  },
  {
    id: 6,
    type: "match",
    domain: "Hardware",
    title: "Storage Interfaces & Technologies",
    question:
      "Match each storage interface or technology to its defining characteristic.",
    explanation:
      "NVMe — uses PCIe bus, up to ~7 GB/s on Gen 4, lowest latency — fastest consumer SSD protocol.\n" +
      "SATA III — 6 Gb/s (~600 MB/s) max, most common interface for 2.5\" and 3.5\" drives.\n" +
      "SAS (Serial Attached SCSI) — enterprise drives, up to 24 Gb/s, hot-swappable, high reliability.\n" +
      "M.2 — a form factor (slot), not a protocol; supports both SATA and NVMe drives.\n" +
      "iSCSI — block-level storage over TCP/IP, used for SANs across existing network infrastructure.\n" +
      "eMMC — soldered NAND flash chip, slower than NVMe/SATA SSD, found in budget tablets and phones.",
    left: [
      { id: "nvme",  label: "NVMe" },
      { id: "sata3", label: "SATA III" },
      { id: "sas",   label: "SAS" },
      { id: "m2",    label: "M.2" },
      { id: "iscsi", label: "iSCSI" },
      { id: "emmc",  label: "eMMC" },
    ],
    right: [
      { id: "nvme",  label: "PCIe bus · up to ~7 GB/s · lowest-latency SSD protocol" },
      { id: "sata3", label: "6 Gb/s max · most common desktop/laptop drive interface" },
      { id: "sas",   label: "Enterprise drives · up to 24 Gb/s · hot-swappable" },
      { id: "m2",    label: "Form factor only · supports both SATA and NVMe" },
      { id: "iscsi", label: "Block-level storage over TCP/IP · SAN protocol" },
      { id: "emmc",  label: "Soldered NAND flash · used in budget tablets and phones" },
    ],
  },
  {
    id: 7,
    type: "match",
    domain: "Hardware",
    title: "Connector Types",
    question:
      "Match each connector to its primary use case or device type.",
    explanation:
      "RJ-45 — 8-pin modular connector used for Ethernet (networking).\n" +
      "RJ-11 — 6-pin modular connector used for telephone/DSL lines.\n" +
      "LC — small form-factor fiber optic connector, common in data centers.\n" +
      "SC — square push-pull fiber optic connector, older enterprise use.\n" +
      "ST — bayonet-style fiber optic connector, older campus networks.\n" +
      "F-type — threaded coaxial connector for cable TV and broadband modems.\n" +
      "DB-9 (RS-232) — legacy serial port for COM devices and console connections.",
    left: [
      { id: "rj45",  label: "RJ-45" },
      { id: "rj11",  label: "RJ-11" },
      { id: "lc",    label: "LC" },
      { id: "sc",    label: "SC" },
      { id: "st",    label: "ST" },
      { id: "ftype", label: "F-type" },
      { id: "db9",   label: "DB-9 (RS-232)" },
    ],
    right: [
      { id: "rj45",  label: "Ethernet networking (8 pins)" },
      { id: "rj11",  label: "Telephone / DSL lines (6 pins)" },
      { id: "lc",    label: "Small form-factor fiber · data centers" },
      { id: "sc",    label: "Square push-pull fiber · older enterprise" },
      { id: "st",    label: "Bayonet fiber · older campus networks" },
      { id: "ftype", label: "Coaxial · cable TV and broadband modems" },
      { id: "db9",   label: "Legacy serial / COM port connections" },
    ],
  },
  {
    id: 8,
    type: "bucket",
    domain: "Hardware",
    title: "Printer Technology Classification",
    question:
      "Classify each characteristic or component into the correct printer technology type.",
    explanation:
      "Laser — uses a photosensitive drum, toner (powder), and a fuser to bond toner to paper with heat. Fast, high-volume, low per-page cost. The fuser assembly is a common failure point.\n" +
      "Inkjet — sprays liquid ink through microscopic nozzles. Better photo quality, lower upfront cost, but higher per-page cost and ink can dry out.\n" +
      "Thermal — uses heat-sensitive paper (direct thermal) or a thermal ribbon (thermal transfer). No ink/toner; common for receipts and shipping labels.\n" +
      "Impact (Dot Matrix) — a print head physically strikes an inked ribbon against paper. Loud, slow, but can print multi-part carbon forms.",
    buckets: [
      { id: "laser",   label: "Laser",   sublabel: "" },
      { id: "inkjet",  label: "Inkjet",  sublabel: "" },
      { id: "thermal", label: "Thermal", sublabel: "" },
      { id: "impact",  label: "Impact",  sublabel: "Dot Matrix" },
    ],
    items: [
      { id: "toner",    label: "Uses toner (powder)",                  bucket: "laser"   },
      { id: "drum",     label: "Photosensitive drum",                  bucket: "laser"   },
      { id: "fuser",    label: "Fuser assembly (heat bonding)",        bucket: "laser"   },
      { id: "liquidink",label: "Liquid ink cartridges",                bucket: "inkjet"  },
      { id: "nozzle",   label: "Microscopic nozzles / printheads",     bucket: "inkjet"  },
      { id: "clog",     label: "Nozzle clog — common maintenance issue",bucket: "inkjet" },
      { id: "heatsens", label: "Heat-sensitive paper (no ink/toner)",  bucket: "thermal" },
      { id: "receipt",  label: "Receipts and shipping labels",         bucket: "thermal" },
      { id: "ribbon",   label: "Inked ribbon struck by print head",    bucket: "impact"  },
      { id: "carbon",   label: "Prints multi-part carbon forms",       bucket: "impact"  },
    ],
  },
];

// ── Match PBQ ─────────────────────────────────────────────────────────────────

function MatchPBQ({ pbq }) {
  const [shuffledRight, setShuffledRight] = useState(() => shuffleArr(pbq.right));
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matched, setMatched] = useState({});
  const [wrong, setWrong] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const matchedCount = Object.keys(matched).length;
  const allMatched = matchedCount === pbq.left.length;

  const handleLeftClick = (id) => {
    if (matched[id] || wrong) return;
    setSelectedLeft(id === selectedLeft ? null : id);
  };

  const handleRightClick = (id) => {
    if (!selectedLeft || matched[id] || wrong) return;
    setAttempts((a) => a + 1);
    if (selectedLeft === id) {
      setMatched((m) => ({ ...m, [id]: true }));
      setSelectedLeft(null);
    } else {
      setWrong({ leftId: selectedLeft, rightId: id });
      setTimeout(() => { setWrong(null); setSelectedLeft(null); }, 700);
    }
  };

  const handleReset = () => {
    setShuffledRight(shuffleArr(pbq.right));
    setSelectedLeft(null);
    setMatched({});
    setWrong(null);
    setAttempts(0);
  };

  return (
    <div className="space-y-4">
      {!selectedLeft && matchedCount === 0 && (
        <p className="text-xs text-muted-foreground">
          Click an item on the left, then click its match on the right.
        </p>
      )}
      <div className="grid grid-cols-2 gap-3">
        {/* Left column */}
        <div className="space-y-2">
          {pbq.left.map(({ id, label }) => {
            const isMatched  = matched[id];
            const isSelected = selectedLeft === id;
            const isWrong    = wrong?.leftId === id;
            return (
              <button
                key={id}
                onClick={() => handleLeftClick(id)}
                disabled={isMatched}
                className={`w-full text-left px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                  isMatched
                    ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                    : isWrong
                    ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                    : isSelected
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-background border-border hover:bg-accent cursor-pointer"
                }`}
              >
                {isMatched ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    {label}
                  </span>
                ) : (
                  label
                )}
              </button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-2">
          {shuffledRight.map(({ id, label }) => {
            const isMatched = matched[id];
            const isWrong   = wrong?.rightId === id;
            return (
              <button
                key={id}
                onClick={() => handleRightClick(id)}
                disabled={isMatched || !selectedLeft}
                className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-all ${
                  isMatched
                    ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                    : isWrong
                    ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                    : selectedLeft
                    ? "bg-background border-border hover:bg-accent cursor-pointer"
                    : "bg-background border-border text-muted-foreground cursor-default"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1.5">
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </Button>
        {allMatched && (
          <span className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" />
            All matched! ({matchedCount}/{attempts} on first try)
          </span>
        )}
      </div>
    </div>
  );
}

// ── Bucket PBQ ────────────────────────────────────────────────────────────────

function BucketPBQ({ pbq }) {
  const [shuffledItems] = useState(() => shuffleArr(pbq.items));
  const [selected, setSelected]       = useState(null);
  const [placements, setPlacements]   = useState({});
  const [checked, setChecked]         = useState(false);

  const placedIds  = new Set(Object.keys(placements));
  const poolItems  = shuffledItems.filter((i) => !placedIds.has(i.id));
  const allPlaced  = poolItems.length === 0;

  const bucketItems = (bucketId) =>
    pbq.items.filter((i) => placements[i.id] === bucketId);

  const isCorrect = (itemId) => {
    const item = pbq.items.find((i) => i.id === itemId);
    return item && placements[itemId] === item.bucket;
  };

  const correctCount = pbq.items.filter((i) => isCorrect(i.id)).length;
  const allCorrect   = checked && correctCount === pbq.items.length;

  const handleItemClick = (id) => {
    if (checked) return;
    setSelected(selected === id ? null : id);
  };

  const handleBucketClick = (bucketId) => {
    if (!selected || checked) return;
    setPlacements((p) => ({ ...p, [selected]: bucketId }));
    setSelected(null);
  };

  const handleRemove = (e, itemId) => {
    e.stopPropagation();
    if (checked) return;
    setPlacements((p) => { const n = { ...p }; delete n[itemId]; return n; });
  };

  const handleReset = () => {
    setPlacements({});
    setSelected(null);
    setChecked(false);
  };

  return (
    <div className="space-y-4">
      {/* Pool */}
      <div>
        <p className="text-xs text-muted-foreground mb-2">
          {poolItems.length === 0
            ? "All items placed — click a placed item to remove it."
            : selected
            ? "Now click a category below to place it."
            : "Click an item to select it, then click a category."}
        </p>
        <div className="flex flex-wrap gap-2 p-3 rounded-lg border border-dashed min-h-12">
          {poolItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`px-3 py-1.5 rounded-md border text-sm transition-colors ${
                selected === item.id
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-background border-border hover:bg-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Buckets */}
      <div className="space-y-2">
        {pbq.buckets.map((bucket) => (
          <div
            key={bucket.id}
            onClick={() => selected && handleBucketClick(bucket.id)}
            className={`rounded-lg border p-3 transition-colors ${
              selected && !checked
                ? "cursor-pointer hover:border-primary hover:bg-primary/5"
                : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-primary">{bucket.label}</span>
              {bucket.sublabel && (
                <span className="text-xs text-muted-foreground">{bucket.sublabel}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 min-h-7">
              {bucketItems(bucket.id).length === 0 ? (
                <span className="text-xs text-muted-foreground italic">empty</span>
              ) : (
                bucketItems(bucket.id).map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => handleRemove(e, item.id)}
                    className={`px-2.5 py-1 rounded-md border text-xs transition-colors ${
                      !checked
                        ? "bg-primary/5 border-primary/30 hover:bg-red-500/10 hover:border-red-500/30"
                        : isCorrect(item.id)
                        ? "bg-green-500/10 border-green-500/40 text-green-700 dark:text-green-400"
                        : "bg-red-500/10 border-red-500/40 text-red-700 dark:text-red-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Button onClick={() => setChecked(true)} disabled={!allPlaced || checked} size="sm">
          Check
        </Button>
        <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1.5">
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </Button>
      </div>

      {checked && (
        <div
          className={`flex items-start gap-2 p-3 rounded-lg border text-sm ${
            allCorrect
              ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400"
              : "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400"
          }`}
        >
          {allCorrect ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
          )}
          {allCorrect
            ? "All items correctly categorized!"
            : `${correctCount} / ${pbq.items.length} correctly placed. Red items are in the wrong category — click them to move.`}
        </div>
      )}
    </div>
  );
}

// ── Order PBQ ─────────────────────────────────────────────────────────────────

function OrderPBQ({ pbq }) {
  const [order, setOrder]     = useState(() => shuffleArr([...pbq.items]));
  const [checked, setChecked] = useState(false);
  const [dragging, setDragging] = useState(null);
  const [dragOver, setDragOver] = useState(null);

  const correctCount = order.filter((item, i) => item.id === pbq.items[i].id).length;
  const allCorrect   = checked && correctCount === pbq.items.length;

  const moveItem = (from, to) => {
    setOrder((prev) => {
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  };

  const handleReset = () => {
    setOrder(shuffleArr([...pbq.items]));
    setChecked(false);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">Drag items to reorder them.</p>
      <div className="space-y-2">
        {order.map((item, i) => {
          const inPlace = checked && item.id === pbq.items[i].id;
          const wrong   = checked && item.id !== pbq.items[i].id;
          return (
            <div
              key={item.id}
              draggable
              onDragStart={() => setDragging(i)}
              onDragOver={(e) => { e.preventDefault(); setDragOver(i); }}
              onDragLeave={() => setDragOver(null)}
              onDrop={() => {
                if (dragging !== null && dragging !== i) {
                  moveItem(dragging, i);
                  setChecked(false);
                }
                setDragging(null);
                setDragOver(null);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm cursor-grab active:cursor-grabbing select-none transition-colors ${
                dragOver === i && dragging !== null && dragging !== i
                  ? "border-primary bg-primary/10"
                  : inPlace
                  ? "border-green-500/40 bg-green-500/10 text-green-700 dark:text-green-400"
                  : wrong
                  ? "border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-400"
                  : "bg-background border-border hover:bg-accent"
              }`}
            >
              <span className="text-xs font-mono text-muted-foreground w-4 shrink-0 text-right">
                {i + 1}
              </span>
              <span className="flex-1">{item.label}</span>
              {inPlace && <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />}
              {wrong && (
                <span className="text-xs text-muted-foreground shrink-0">
                  → step {pbq.items.findIndex((p) => p.id === item.id) + 1}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={() => setChecked(true)} size="sm">
          Check Order
        </Button>
        <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1.5">
          <RotateCcw className="h-3.5 w-3.5" /> Shuffle
        </Button>
        {allCorrect && (
          <span className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" /> Correct order!
          </span>
        )}
      </div>

      {checked && !allCorrect && (
        <div className="flex items-start gap-2 p-3 rounded-lg border bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400 text-sm">
          <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
          {correctCount} / {pbq.items.length} steps in the right position. Items in red show the correct step number.
        </div>
      )}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function PBQPage() {
  const [pbqOrder, setPbqOrder]           = useState(() => PBQs.map((_, i) => i));
  const [pbqIndex, setPbqIndex]           = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [subKey, setSubKey]               = useState(0);

  const pbq = PBQs[pbqOrder[pbqIndex]];

  const goTo = (i) => {
    setPbqIndex(i);
    setShowExplanation(false);
    setSubKey((k) => k + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Performance-Based Questions</h1>
        <p className="text-muted-foreground text-sm">
          Interactive scenarios for CompTIA A+ Core 1 (220-1101)
        </p>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground">
          Question {pbqIndex + 1} / {PBQs.length}
        </span>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setPbqOrder(shuffleArr(PBQs.map((_, i) => i)));
              goTo(0);
            }}
            className="gap-1.5 text-xs"
          >
            <Shuffle className="h-3.5 w-3.5" /> Shuffle
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => goTo(pbqIndex - 1)}
            disabled={pbqIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => goTo(pbqIndex + 1)}
            disabled={pbqIndex === PBQs.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-lg border bg-muted/20 p-4 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            {pbq.title}
          </span>
          <span className="text-xs text-muted-foreground">· {pbq.domain}</span>
        </div>
        <p className="text-sm leading-relaxed">{pbq.question}</p>
      </div>

      {/* Interactive area — re-mounts on navigation to reset state */}
      <div key={subKey}>
        {pbq.type === "match"  && <MatchPBQ  pbq={pbq} />}
        {pbq.type === "bucket" && <BucketPBQ pbq={pbq} />}
        {pbq.type === "order"  && <OrderPBQ  pbq={pbq} />}
      </div>

      {/* Explanation */}
      <div className="mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowExplanation((v) => !v)}
          className="gap-1.5"
        >
          <BookOpen className="h-4 w-4" />
          {showExplanation ? "Hide" : "Show"} Explanation
        </Button>
        {showExplanation && (
          <div className="mt-3 rounded-lg border p-4 bg-muted/20">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Explanation
            </p>
            <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans">
              {pbq.explanation}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
