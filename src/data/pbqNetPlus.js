// Performance-Based Questions for CompTIA Network+ N10-009
export const PBQs_NETPLUS = [
  {
    id: 201,
    type: "bucket",
    domain: "1.0 Networking Concepts",
    title: "OSI Model — Protocol Classification",
    question:
      "Classify each protocol or device into its correct OSI model layer. Click an item from the pool, then click the target layer to place it.",
    explanation:
      "Layer 7 (Application) — user-facing protocols: HTTP, HTTPS, FTP, SMTP, DNS, SNMP, DHCP, Telnet, SSH.\n" +
      "Layer 6 (Presentation) — data format, encryption, compression: SSL/TLS, JPEG, ASCII.\n" +
      "Layer 5 (Session) — session setup/teardown: NetBIOS, RPC, SIP.\n" +
      "Layer 4 (Transport) — end-to-end delivery with port numbers: TCP (reliable), UDP (best-effort).\n" +
      "Layer 3 (Network) — logical addressing and routing: IP, ICMP, OSPF, BGP, Router.\n" +
      "Layer 2 (Data Link) — MAC addressing, framing, error detection: Ethernet, ARP, Switch, 802.11.\n" +
      "Layer 1 (Physical) — bits and signals: Hub, Repeater, NIC, copper/fiber cable.",
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
      { id: "https",    label: "HTTP / HTTPS",      bucket: 7 },
      { id: "smtp",     label: "SMTP / IMAP / POP3",bucket: 7 },
      { id: "dns",      label: "DNS",               bucket: 7 },
      { id: "ssh",      label: "SSH / Telnet",      bucket: 7 },
      { id: "tls",      label: "SSL / TLS",         bucket: 6 },
      { id: "sip",      label: "SIP / NetBIOS",     bucket: 5 },
      { id: "tcp",      label: "TCP",               bucket: 4 },
      { id: "udp",      label: "UDP",               bucket: 4 },
      { id: "ip",       label: "IPv4 / IPv6",       bucket: 3 },
      { id: "icmp",     label: "ICMP",              bucket: 3 },
      { id: "router",   label: "Router",            bucket: 3 },
      { id: "arp",      label: "ARP",               bucket: 2 },
      { id: "switch",   label: "Switch / 802.11",   bucket: 2 },
      { id: "ethernet", label: "Ethernet Frame",    bucket: 2 },
      { id: "hub",      label: "Hub / Repeater",    bucket: 1 },
      { id: "cable",    label: "Copper / Fiber",    bucket: 1 },
    ],
  },

  {
    id: 202,
    type: "match",
    domain: "1.0 Networking Concepts",
    title: "IPv4 Address Classes",
    question:
      "Match each IPv4 address class to its default subnet mask and typical use. Click a class on the left, then click its description on the right.",
    explanation:
      "Class A — /8 (255.0.0.0): 1.0.0.0–126.255.255.255, 16 million hosts per network, used by very large organizations.\n" +
      "Class B — /16 (255.255.0.0): 128.0.0.0–191.255.255.255, 65,534 hosts per network, medium/large orgs.\n" +
      "Class C — /24 (255.255.255.0): 192.0.0.0–223.255.255.255, 254 hosts per network, small networks.\n" +
      "Class D — 224.0.0.0–239.255.255.255: reserved for multicast groups, no subnet mask.\n" +
      "Class E — 240.0.0.0–255.255.255.255: reserved for research/experimental use.",
    left: [
      { id: "classA", label: "Class A" },
      { id: "classB", label: "Class B" },
      { id: "classC", label: "Class C" },
      { id: "classD", label: "Class D" },
      { id: "classE", label: "Class E" },
    ],
    right: [
      { id: "classA", label: "/8 — 1.x.x.x to 126.x.x.x — Very large networks" },
      { id: "classB", label: "/16 — 128.x.x.x to 191.x.x.x — Medium/large networks" },
      { id: "classC", label: "/24 — 192.x.x.x to 223.x.x.x — Small networks" },
      { id: "classD", label: "224–239.x.x.x — Multicast (no subnet mask)" },
      { id: "classE", label: "240–255.x.x.x — Reserved / Experimental" },
    ],
  },

  {
    id: 203,
    type: "bucket",
    domain: "1.0 Networking Concepts",
    title: "TCP vs UDP — Protocol Classification",
    question:
      "Classify each protocol as TCP, UDP, or TCP/UDP. Click an item from the pool, then click the correct bucket.",
    explanation:
      "TCP (reliable, connection-oriented): HTTP/HTTPS (80/443), FTP (20/21), SSH (22), Telnet (23), SMTP (25), POP3 (110), IMAP (143), RDP (3389), BGP (179).\n" +
      "UDP (fast, connectionless): DHCP (67/68), TFTP (69), NTP (123), SNMP (161/162), Syslog (514).\n" +
      "TCP/UDP (uses both): DNS (53), LDAP (389), SIP (5060).",
    buckets: [
      { id: "tcp",     label: "TCP",     sublabel: "Reliable / Connection-Oriented" },
      { id: "udp",     label: "UDP",     sublabel: "Fast / Connectionless" },
      { id: "tcpudp",  label: "TCP/UDP", sublabel: "Uses Both" },
    ],
    items: [
      { id: "http",   label: "HTTP (80)",     bucket: "tcp" },
      { id: "https",  label: "HTTPS (443)",   bucket: "tcp" },
      { id: "ssh",    label: "SSH (22)",       bucket: "tcp" },
      { id: "smtp",   label: "SMTP (25)",      bucket: "tcp" },
      { id: "rdp",    label: "RDP (3389)",     bucket: "tcp" },
      { id: "bgp",    label: "BGP (179)",      bucket: "tcp" },
      { id: "dhcp",   label: "DHCP (67/68)",   bucket: "udp" },
      { id: "tftp",   label: "TFTP (69)",      bucket: "udp" },
      { id: "ntp",    label: "NTP (123)",      bucket: "udp" },
      { id: "snmp",   label: "SNMP (161)",     bucket: "udp" },
      { id: "syslog", label: "Syslog (514)",   bucket: "udp" },
      { id: "dns",    label: "DNS (53)",       bucket: "tcpudp" },
      { id: "ldap",   label: "LDAP (389)",     bucket: "tcpudp" },
      { id: "sip",    label: "SIP (5060)",     bucket: "tcpudp" },
    ],
  },

  {
    id: 204,
    type: "order",
    domain: "5.0 Network Troubleshooting",
    title: "Network Troubleshooting Methodology",
    question:
      "Arrange the CompTIA troubleshooting methodology steps in the correct order from first to last.",
    explanation:
      "1. Identify the problem — gather information, question users, identify symptoms, duplicate if possible, check for changes.\n" +
      "2. Establish a theory of probable cause — consider multiple approaches (OSI bottom-up, top-down, divide-and-conquer).\n" +
      "3. Test the theory to determine the cause — confirm or eliminate; if not confirmed, re-establish a new theory.\n" +
      "4. Establish a plan of action — resolve the problem with minimal impact on the environment.\n" +
      "5. Implement the solution or escalate — make the fix or pass to the appropriate team.\n" +
      "6. Verify full system functionality — confirm the fix and prevent recurrence.\n" +
      "7. Document findings, actions, and outcomes — record everything for future reference.",
    items: [
      { id: "identify",  label: "Identify the problem" },
      { id: "theory",    label: "Establish a theory of probable cause" },
      { id: "test",      label: "Test the theory to determine cause" },
      { id: "plan",      label: "Establish a plan of action" },
      { id: "implement", label: "Implement the solution or escalate" },
      { id: "verify",    label: "Verify full system functionality" },
      { id: "document",  label: "Document findings, actions, and outcomes" },
    ],
  },

  {
    id: 205,
    type: "match",
    domain: "2.0 Network Implementation",
    title: "Wireless 802.11 Standards",
    question:
      "Match each 802.11 wireless standard to its maximum speed and primary frequency band.",
    explanation:
      "802.11a — 54 Mbps, 5 GHz only (less interference, shorter range).\n" +
      "802.11b — 11 Mbps, 2.4 GHz (earliest consumer standard).\n" +
      "802.11g — 54 Mbps, 2.4 GHz (backward compatible with b).\n" +
      "802.11n (Wi-Fi 4) — 600 Mbps, 2.4/5 GHz, introduced MIMO.\n" +
      "802.11ac (Wi-Fi 5) — 3.5 Gbps, 5 GHz, MU-MIMO, beamforming.\n" +
      "802.11ax (Wi-Fi 6/6E) — 9.6 Gbps, 2.4/5/6 GHz, OFDMA for dense environments.",
    left: [
      { id: "a",  label: "802.11a" },
      { id: "b",  label: "802.11b" },
      { id: "g",  label: "802.11g" },
      { id: "n",  label: "802.11n (Wi-Fi 4)" },
      { id: "ac", label: "802.11ac (Wi-Fi 5)" },
      { id: "ax", label: "802.11ax (Wi-Fi 6)" },
    ],
    right: [
      { id: "a",  label: "54 Mbps · 5 GHz only" },
      { id: "b",  label: "11 Mbps · 2.4 GHz" },
      { id: "g",  label: "54 Mbps · 2.4 GHz" },
      { id: "n",  label: "600 Mbps · 2.4 / 5 GHz · MIMO" },
      { id: "ac", label: "3.5 Gbps · 5 GHz · MU-MIMO" },
      { id: "ax", label: "9.6 Gbps · 2.4 / 5 / 6 GHz · OFDMA" },
    ],
  },

  {
    id: 206,
    type: "bucket",
    domain: "4.0 Network Security",
    title: "Security Threat Classification",
    question:
      "Classify each attack or threat into the correct category. Click an item from the pool, then click the target bucket.",
    explanation:
      "On-path (MITM) attacks — attacker intercepts traffic between two parties: ARP poisoning, DNS spoofing, SSL stripping.\n" +
      "Denial of Service — overwhelm a target to make it unavailable: SYN flood, ping flood, DDoS.\n" +
      "Social Engineering — manipulate people rather than technology: phishing, vishing, pretexting.\n" +
      "Reconnaissance — gather information before attacking: port scanning (nmap), ping sweep, packet sniffing.",
    buckets: [
      { id: "onpath", label: "On-Path / MITM",     sublabel: "Interception" },
      { id: "dos",    label: "Denial of Service",   sublabel: "Availability Attack" },
      { id: "social", label: "Social Engineering",  sublabel: "People-Based" },
      { id: "recon",  label: "Reconnaissance",      sublabel: "Information Gathering" },
    ],
    items: [
      { id: "arp",      label: "ARP Poisoning",    bucket: "onpath" },
      { id: "dns-sp",   label: "DNS Spoofing",     bucket: "onpath" },
      { id: "ssl-strip",label: "SSL Stripping",    bucket: "onpath" },
      { id: "syn",      label: "SYN Flood",        bucket: "dos" },
      { id: "ddos",     label: "DDoS Attack",      bucket: "dos" },
      { id: "ping-flood",label: "Ping Flood",      bucket: "dos" },
      { id: "phish",    label: "Phishing Email",   bucket: "social" },
      { id: "vish",     label: "Vishing (Voice)",  bucket: "social" },
      { id: "pretext",  label: "Pretexting",       bucket: "social" },
      { id: "portscan", label: "Port Scanning",    bucket: "recon" },
      { id: "pingsweep",label: "Ping Sweep",       bucket: "recon" },
      { id: "sniff",    label: "Packet Sniffing",  bucket: "recon" },
    ],
  },

  {
    id: 207,
    type: "match",
    domain: "3.0 Network Operations",
    title: "High Availability Metrics",
    question:
      "Match each high-availability or disaster-recovery term to its correct definition.",
    explanation:
      "RTO (Recovery Time Objective) — maximum acceptable time a system can be down after a failure.\n" +
      "RPO (Recovery Point Objective) — maximum acceptable amount of data loss measured in time.\n" +
      "MTBF (Mean Time Between Failures) — average time a device operates between failures; higher = more reliable.\n" +
      "MTTR (Mean Time To Repair) — average time to restore a failed component; lower = faster recovery.\n" +
      "SLA (Service Level Agreement) — contractual guarantee of uptime/performance between provider and customer.",
    left: [
      { id: "rto",  label: "RTO" },
      { id: "rpo",  label: "RPO" },
      { id: "mtbf", label: "MTBF" },
      { id: "mttr", label: "MTTR" },
      { id: "sla",  label: "SLA" },
    ],
    right: [
      { id: "rto",  label: "Max acceptable downtime after a failure" },
      { id: "rpo",  label: "Max acceptable data loss measured in time" },
      { id: "mtbf", label: "Average time between failures (higher = better)" },
      { id: "mttr", label: "Average time to restore a failed system (lower = better)" },
      { id: "sla",  label: "Contractual uptime/performance guarantee" },
    ],
  },

  {
    id: 208,
    type: "order",
    domain: "4.0 Network Security",
    title: "DHCP IP Address Assignment Process",
    question:
      "Arrange the DORA DHCP process steps in the correct order (client requesting a new IP address).",
    explanation:
      "1. Discover — client broadcasts DHCPDISCOVER to find available DHCP servers (UDP 68 → 67).\n" +
      "2. Offer — DHCP server responds with DHCPOFFER containing an available IP, subnet mask, gateway, and lease time.\n" +
      "3. Request — client broadcasts DHCPREQUEST accepting the offer (still broadcast so other servers know).\n" +
      "4. Acknowledge — server sends DHCPACK confirming the lease. Client can now use the IP address.\n" +
      "Remember the mnemonic: DORA — Discover, Offer, Request, Acknowledge.",
    items: [
      { id: "discover", label: "DHCPDISCOVER — Client broadcasts to find servers" },
      { id: "offer",    label: "DHCPOFFER — Server offers an available IP" },
      { id: "request",  label: "DHCPREQUEST — Client accepts the offer" },
      { id: "ack",      label: "DHCPACK — Server confirms the lease" },
    ],
  },

  {
    id: 209,
    type: "bucket",
    domain: "2.0 Network Implementation",
    title: "Cable Type Classification",
    question:
      "Classify each cable or connector type into its correct category. Click an item from the pool, then click the target bucket.",
    explanation:
      "Copper (twisted pair) — UTP/STP Ethernet cables (Cat5e, Cat6, Cat6a) transmit electrical signals over copper. Max distance ~100 m.\n" +
      "Fiber optic — uses light pulses; immune to EMI; longer distances (SMF: km, MMF: ~550 m). Connectors: LC, SC, ST, MT-RJ.\n" +
      "Coaxial — used for cable TV and broadband internet. RG-6 is standard for DOCSIS.\n" +
      "Transceivers/Modules — SFP, QSFP, SFP+ are hot-swappable modules connecting fiber to switching hardware.",
    buckets: [
      { id: "copper", label: "Copper / Twisted Pair", sublabel: "Electrical" },
      { id: "fiber",  label: "Fiber Optic",           sublabel: "Light-based" },
      { id: "coax",   label: "Coaxial",               sublabel: "TV / Broadband" },
      { id: "module", label: "Transceivers",          sublabel: "SFP / QSFP" },
    ],
    items: [
      { id: "cat6",  label: "Cat6 UTP",    bucket: "copper" },
      { id: "cat6a", label: "Cat6a STP",   bucket: "copper" },
      { id: "rj45",  label: "RJ-45",       bucket: "copper" },
      { id: "smf",   label: "Single-Mode Fiber", bucket: "fiber" },
      { id: "mmf",   label: "Multi-Mode Fiber",  bucket: "fiber" },
      { id: "lc",    label: "LC Connector",      bucket: "fiber" },
      { id: "sc",    label: "SC Connector",      bucket: "fiber" },
      { id: "rg6",   label: "RG-6 Coax",   bucket: "coax" },
      { id: "bnc",   label: "BNC Connector",bucket: "coax" },
      { id: "sfp",   label: "SFP Module",   bucket: "module" },
      { id: "qsfp",  label: "QSFP Module",  bucket: "module" },
    ],
  },

  {
    id: 210,
    type: "match",
    domain: "4.0 Network Security",
    title: "VPN Protocol Comparison",
    question:
      "Match each VPN protocol to its key characteristic or use case.",
    explanation:
      "PPTP — Point-to-Point Tunneling Protocol; oldest VPN protocol; port 1723; considered insecure (weak encryption).\n" +
      "L2TP/IPSec — Layer 2 Tunneling Protocol paired with IPSec for encryption; port 1701 (UDP); more secure than PPTP.\n" +
      "SSTP — Secure Socket Tunneling Protocol; uses SSL/TLS (port 443); bypasses most firewalls; Windows-native.\n" +
      "IKEv2/IPSec — fast re-establishment after interruption (MOBIKE); good for mobile devices; port 500/4500.\n" +
      "OpenVPN — open-source; highly configurable; uses SSL/TLS; ports 1194 UDP or 443 TCP.\n" +
      "WireGuard — modern, minimal codebase; very fast; UDP only; default port 51820.",
    left: [
      { id: "pptp",     label: "PPTP" },
      { id: "l2tp",     label: "L2TP/IPSec" },
      { id: "sstp",     label: "SSTP" },
      { id: "ikev2",    label: "IKEv2/IPSec" },
      { id: "openvpn",  label: "OpenVPN" },
      { id: "wg",       label: "WireGuard" },
    ],
    right: [
      { id: "pptp",    label: "Port 1723 — Legacy, weak encryption" },
      { id: "l2tp",    label: "Port 1701 — L2 tunnel + IPSec encryption" },
      { id: "sstp",    label: "Port 443 SSL — Bypasses firewalls, Windows-native" },
      { id: "ikev2",   label: "Port 500/4500 — Best for mobile, fast reconnect" },
      { id: "openvpn", label: "Port 1194/443 — Open-source, SSL/TLS-based" },
      { id: "wg",      label: "Port 51820 UDP — Modern, minimal, very fast" },
    ],
  },
];
