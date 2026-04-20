// Performance-Based Question data for CompTIA A+ Core 1 (220-1201)
export const PBQs = [
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
  {
    id: 9,
    type: "match",
    domain: "Hardware",
    title: "USB & High-Speed Interface Speeds",
    question:
      "Match each interface standard to its maximum theoretical transfer speed. Click a standard on the left, then click the matching speed on the right.",
    explanation:
      "USB 2.0 — 480 Mbps (High Speed). Still used for keyboards, mice, and low-bandwidth peripherals.\n" +
      "USB 3.2 Gen 1 — 5 Gbps (SuperSpeed). Formerly USB 3.0; the blue port standard.\n" +
      "USB 3.2 Gen 2 — 10 Gbps (SuperSpeed+). Formerly USB 3.1.\n" +
      "USB 3.2 Gen 2×2 — 20 Gbps. Requires USB-C; two 10 Gbps lanes bonded.\n" +
      "USB4 Gen 3×2 — 40 Gbps. Same speed as Thunderbolt 3/4; requires USB-C.\n" +
      "Thunderbolt 4 — 40 Gbps. USB-C connector; mandatory PCIe 4.0 tunneling, dual 4K.\n" +
      "Thunderbolt 5 — 120 Gbps burst / 80 Gbps base. USB-C; PCIe 5.0 tunneling.\n" +
      "SATA 3.0 — 6 Gbps. Standard connection for 2.5\" SSDs and HDDs.",
    left: [
      { id: "usb2",   label: "USB 2.0" },
      { id: "usb31",  label: "USB 3.2 Gen 1" },
      { id: "usb32",  label: "USB 3.2 Gen 2×2" },
      { id: "usb4",   label: "USB4 Gen 3×2" },
      { id: "tb4",    label: "Thunderbolt 4" },
      { id: "tb5",    label: "Thunderbolt 5" },
    ],
    right: [
      { id: "usb2",   label: "480 Mbps" },
      { id: "usb31",  label: "5 Gbps" },
      { id: "usb32",  label: "20 Gbps (USB-C only)" },
      { id: "usb4",   label: "40 Gbps (USB-C)" },
      { id: "tb4",    label: "40 Gbps (USB-C, PCIe 4.0)" },
      { id: "tb5",    label: "80–120 Gbps (USB-C, PCIe 5.0)" },
    ],
  },
  {
    id: 10,
    type: "bucket",
    domain: "Hardware",
    title: "Modern CPU Features Classification",
    question:
      "Classify each processor feature or characteristic into the correct CPU architecture or feature category.",
    explanation:
      "x86-64 (AMD64/Intel 64) — the dominant desktop/server architecture; CISC-based; runs all legacy Windows software natively.\n" +
      "ARM64 (AArch64) — RISC-based; used in Apple Silicon (M-series), Qualcomm Snapdragon X, mobile SoCs; low power, high efficiency.\n" +
      "NPU / AI Acceleration — dedicated neural processing units for ML inference; required for Copilot+ PC (40+ TOPS); found in Intel Core Ultra, AMD Ryzen AI, Apple M-series, Snapdragon X.\n" +
      "PCIe & Platform — CPU-level connectivity specs: PCIe lanes, integrated memory controllers, chipset communication.",
    buckets: [
      { id: "x86",  label: "x86-64",    sublabel: "CISC · Desktop/Server" },
      { id: "arm",  label: "ARM64",     sublabel: "RISC · Mobile/Efficient" },
      { id: "npu",  label: "NPU / AI",  sublabel: "ML Inference" },
      { id: "pcie", label: "PCIe Platform", sublabel: "Connectivity" },
    ],
    items: [
      { id: "intel-cisc",  label: "Intel Core Ultra (CISC, x64 native)",    bucket: "x86"  },
      { id: "amd-cisc",    label: "AMD Ryzen (x64, backward compatible)",    bucket: "x86"  },
      { id: "legacy-win",  label: "Runs all legacy Windows 64-bit apps natively", bucket: "x86" },
      { id: "apple-m",     label: "Apple M-series (macOS/iOS)",              bucket: "arm"  },
      { id: "snapdragon",  label: "Qualcomm Snapdragon X Elite",             bucket: "arm"  },
      { id: "arm-emul",    label: "Runs x64 via emulation on Windows",       bucket: "arm"  },
      { id: "copilot-req", label: "40+ TOPS required for Copilot+ PC",       bucket: "npu"  },
      { id: "local-ai",    label: "Enables local AI (no cloud) features",    bucket: "npu"  },
      { id: "studio-fx",   label: "Windows Studio Effects processing",       bucket: "npu"  },
      { id: "pcie5",       label: "PCIe 5.0 lanes (x16 = 64 GB/s)",         bucket: "pcie" },
      { id: "pcie4",       label: "PCIe 4.0 NVMe M.2 slot",                 bucket: "pcie" },
    ],
  },
];
