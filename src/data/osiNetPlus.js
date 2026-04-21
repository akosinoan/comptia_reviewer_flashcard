// OSI Model practice exercises for CompTIA Network+ N10-009
export const OSI_EXERCISES = [
  {
    id: "osi-1",
    type: "bucket",
    domain: "1.0 Networking Concepts",
    title: "Protocols & Devices by OSI Layer",
    question:
      "Classify each protocol or device into its correct OSI layer. Drag or click each item into the matching layer bucket.",
    explanation:
      "Layer 7 (Application) — user-facing protocols: HTTP, HTTPS, FTP, SMTP, DNS, SNMP, DHCP, SSH, Telnet.\n" +
      "Layer 6 (Presentation) — data formatting, encryption, compression: SSL/TLS, JPEG, ASCII, MIME.\n" +
      "Layer 5 (Session) — session setup and teardown: NetBIOS, RPC, SIP.\n" +
      "Layer 4 (Transport) — end-to-end delivery with port numbers: TCP (reliable/connection-oriented), UDP (best-effort/connectionless).\n" +
      "Layer 3 (Network) — logical addressing and path selection: IPv4, IPv6, ICMP, OSPF, BGP, Router.\n" +
      "Layer 2 (Data Link) — MAC addressing, framing, error detection: Ethernet, ARP, Switch, 802.11, STP.\n" +
      "Layer 1 (Physical) — raw bits and signals: Hub, Repeater, NIC, copper cable, fiber.",
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
      { id: "http",    label: "HTTP / HTTPS",        bucket: 7 },
      { id: "ftp",     label: "FTP / SFTP",          bucket: 7 },
      { id: "smtp",    label: "SMTP / IMAP / POP3",  bucket: 7 },
      { id: "dns",     label: "DNS",                 bucket: 7 },
      { id: "snmp",    label: "SNMP",                bucket: 7 },
      { id: "tls",     label: "SSL / TLS",           bucket: 6 },
      { id: "jpeg",    label: "JPEG / ASCII / MIME",  bucket: 6 },
      { id: "sip",     label: "SIP / NetBIOS / RPC", bucket: 5 },
      { id: "tcp",     label: "TCP",                 bucket: 4 },
      { id: "udp",     label: "UDP",                 bucket: 4 },
      { id: "ip",      label: "IPv4 / IPv6",         bucket: 3 },
      { id: "icmp",    label: "ICMP",                bucket: 3 },
      { id: "router",  label: "Router",              bucket: 3 },
      { id: "arp",     label: "ARP / RARP",          bucket: 2 },
      { id: "switch",  label: "Switch / Bridge",     bucket: 2 },
      { id: "8021q",   label: "802.11 / Ethernet",   bucket: 2 },
      { id: "hub",     label: "Hub / Repeater",      bucket: 1 },
      { id: "cable",   label: "Copper / Fiber Cable",bucket: 1 },
    ],
  },

  {
    id: "osi-2",
    type: "match",
    domain: "1.0 Networking Concepts",
    title: "PDU Name per OSI Layer",
    question:
      "Match each OSI layer group to the correct Protocol Data Unit (PDU) name. Click a layer on the left, then its PDU on the right.",
    explanation:
      "Layers 5–7 (Session, Presentation, Application) all refer to user data generically as 'Data'.\n" +
      "Layer 4 (Transport) adds port numbers and creates a 'Segment' (TCP) or 'Datagram' (UDP).\n" +
      "Layer 3 (Network) adds IP source/destination addresses to form a 'Packet'.\n" +
      "Layer 2 (Data Link) adds MAC addresses, a header, and a trailer (FCS) to form a 'Frame'.\n" +
      "Layer 1 (Physical) transmits the raw binary as 'Bits' over the medium.\n\n" +
      "Mnemonic for top-down PDUs: Data, Data, Data, Segment, Packet, Frame, Bits.",
    left: [
      { id: "pdu_app",       label: "Layers 5–7 (Session / Presentation / Application)" },
      { id: "pdu_transport", label: "Layer 4 — Transport" },
      { id: "pdu_network",   label: "Layer 3 — Network" },
      { id: "pdu_datalink",  label: "Layer 2 — Data Link" },
      { id: "pdu_physical",  label: "Layer 1 — Physical" },
    ],
    right: [
      { id: "pdu_app",       label: "Data" },
      { id: "pdu_transport", label: "Segment / Datagram" },
      { id: "pdu_network",   label: "Packet" },
      { id: "pdu_datalink",  label: "Frame" },
      { id: "pdu_physical",  label: "Bits (raw bitstream)" },
    ],
  },

  {
    id: "osi-3",
    type: "bucket",
    domain: "1.0 Networking Concepts",
    title: "Network Devices by OSI Layer",
    question:
      "Classify each network device or component into the OSI layer at which it primarily operates.",
    explanation:
      "Layer 1 (Physical) — devices that only deal with electrical/optical signals and raw bits: Hub, Repeater, Modem, NIC (physical layer only), cables and connectors.\n" +
      "Layer 2 (Data Link) — devices that use MAC addresses to forward frames within a LAN segment: Switch, Bridge, Wireless Access Point (when acting as a bridge).\n" +
      "Layer 3 (Network) — devices that use IP addresses to route packets between networks: Router, Layer 3 Switch, Multilayer Switch.\n" +
      "Layer 4 (Transport) — devices that make decisions based on port numbers: Stateful Firewall, Load Balancer (basic TCP/UDP).\n" +
      "Layer 7 (Application) — devices that inspect application payload: Proxy Server, Application-layer Firewall, WAF (Web Application Firewall), Content Filter.",
    buckets: [
      { id: 1, label: "Layer 1", sublabel: "Physical" },
      { id: 2, label: "Layer 2", sublabel: "Data Link" },
      { id: 3, label: "Layer 3", sublabel: "Network" },
      { id: 4, label: "Layer 4", sublabel: "Transport" },
      { id: 7, label: "Layer 7", sublabel: "Application" },
    ],
    items: [
      { id: "hub",       label: "Hub",                      bucket: 1 },
      { id: "repeater",  label: "Repeater",                 bucket: 1 },
      { id: "modem",     label: "Modem",                    bucket: 1 },
      { id: "switch",    label: "Switch",                   bucket: 2 },
      { id: "bridge",    label: "Bridge",                   bucket: 2 },
      { id: "ap",        label: "Wireless AP (bridge mode)",bucket: 2 },
      { id: "router",    label: "Router",                   bucket: 3 },
      { id: "l3switch",  label: "Layer 3 Switch",           bucket: 3 },
      { id: "firewall4", label: "Stateful Firewall",        bucket: 4 },
      { id: "lb",        label: "Load Balancer (L4)",       bucket: 4 },
      { id: "proxy",     label: "Proxy Server",             bucket: 7 },
      { id: "waf",       label: "WAF / Content Filter",     bucket: 7 },
    ],
  },

  {
    id: "osi-4",
    type: "match",
    domain: "1.0 Networking Concepts",
    title: "OSI vs. TCP/IP Layer Mapping",
    question:
      "Match each TCP/IP model layer to the OSI layers it corresponds to. Click a TCP/IP layer on the left, then its OSI equivalent on the right.",
    explanation:
      "The TCP/IP model collapses the 7-layer OSI model into 4 (or sometimes 5) layers:\n\n" +
      "Application (TCP/IP) ← OSI Layers 5, 6, 7: Session setup, data formatting/encryption, and user-facing protocols are all handled by the single Application layer in TCP/IP.\n\n" +
      "Transport (TCP/IP) ← OSI Layer 4: Direct mapping — TCP and UDP live here in both models.\n\n" +
      "Internet (TCP/IP) ← OSI Layer 3: IP, ICMP, and routing protocols. Called 'Network' in OSI.\n\n" +
      "Network Access (TCP/IP) ← OSI Layers 1 & 2: Covers both the physical medium and data-link framing (Ethernet, Wi-Fi). Sometimes split into separate Physical and Data Link layers in the 5-layer variant.",
    left: [
      { id: "tcpip_app",       label: "Application (TCP/IP)" },
      { id: "tcpip_transport", label: "Transport (TCP/IP)" },
      { id: "tcpip_internet",  label: "Internet (TCP/IP)" },
      { id: "tcpip_netaccess", label: "Network Access (TCP/IP)" },
    ],
    right: [
      { id: "tcpip_app",       label: "OSI Layers 5, 6, 7 — Session · Presentation · Application" },
      { id: "tcpip_transport", label: "OSI Layer 4 — Transport" },
      { id: "tcpip_internet",  label: "OSI Layer 3 — Network" },
      { id: "tcpip_netaccess", label: "OSI Layers 1 & 2 — Physical + Data Link" },
    ],
  },

  {
    id: "osi-5",
    type: "bucket",
    domain: "1.0 Networking Concepts",
    title: "Troubleshooting: Which OSI Layer?",
    question:
      "A technician is troubleshooting network issues. Classify each symptom or failure into the OSI layer where the problem most likely originates.",
    explanation:
      "Layer 1 (Physical) — no link light, broken cable, signal attenuation, bad port.\n" +
      "Layer 2 (Data Link) — CRC errors, MAC address conflicts, STP loop, duplex mismatch, incorrect VLAN.\n" +
      "Layer 3 (Network) — wrong subnet mask, routing loop, duplicate IP, DHCP not assigning address, unreachable gateway.\n" +
      "Layer 4 (Transport) — port blocked by firewall, connection timeout (no SYN-ACK), TCP retransmissions.\n" +
      "Layer 5 (Session) — dropped VPN session, RPC call failure, session timeout.\n" +
      "Layer 6 (Presentation) — TLS/SSL handshake failure, certificate error, encoding mismatch.\n" +
      "Layer 7 (Application) — HTTP 404/500 error, DNS name resolution failure, authentication error on a web app.",
    buckets: [
      { id: 1, label: "Layer 1", sublabel: "Physical" },
      { id: 2, label: "Layer 2", sublabel: "Data Link" },
      { id: 3, label: "Layer 3", sublabel: "Network" },
      { id: 4, label: "Layer 4", sublabel: "Transport" },
      { id: 6, label: "Layer 6", sublabel: "Presentation" },
      { id: 7, label: "Layer 7", sublabel: "Application" },
    ],
    items: [
      { id: "nolink",    label: "No link light on NIC",               bucket: 1 },
      { id: "attenu",    label: "Signal attenuation beyond spec",      bucket: 1 },
      { id: "crc",       label: "High CRC / framing error rate",       bucket: 2 },
      { id: "vlan",      label: "Host in wrong VLAN, traffic missing", bucket: 2 },
      { id: "dupip",     label: "Duplicate IP address conflict",       bucket: 3 },
      { id: "noroute",   label: "Cannot reach remote subnet",          bucket: 3 },
      { id: "blocked",   label: "Port 443 blocked, browser times out", bucket: 4 },
      { id: "synack",    label: "SYN sent but no SYN-ACK received",    bucket: 4 },
      { id: "tls",       label: "SSL/TLS certificate handshake error", bucket: 6 },
      { id: "http404",   label: "HTTP 404 / 500 error from server",    bucket: 7 },
      { id: "dnsresolv", label: "Domain name fails to resolve",        bucket: 7 },
    ],
  },

  {
    id: "osi-6",
    type: "order",
    domain: "1.0 Networking Concepts",
    title: "Encapsulation Order (Sender — Top to Bottom)",
    question:
      "Arrange the encapsulation steps in the correct order as data travels from the application down to the physical medium on the sending device.",
    explanation:
      "Encapsulation adds headers (and sometimes trailers) at each layer as data moves down the OSI stack:\n\n" +
      "Step 1 — Application data is generated by the user process (e.g., an HTTP request).\n" +
      "Step 2 — Presentation formats, encrypts, or compresses the data (e.g., TLS encryption).\n" +
      "Step 3 — Session layer manages the dialogue and marks the beginning of a session.\n" +
      "Step 4 — Transport adds a TCP/UDP header with source and destination port numbers → Segment.\n" +
      "Step 5 — Network adds an IP header with source and destination IP addresses → Packet.\n" +
      "Step 6 — Data Link adds a MAC header and FCS trailer → Frame.\n" +
      "Step 7 — Physical converts the frame into bits and transmits them over the medium.\n\n" +
      "De-encapsulation on the receiver happens in reverse order (Physical → Application).",
    items: [
      { id: "enc1", label: "Layer 7 — Application generates user data (e.g., HTTP request)" },
      { id: "enc2", label: "Layer 6 — Presentation formats / encrypts the data" },
      { id: "enc3", label: "Layer 5 — Session establishes and manages the session" },
      { id: "enc4", label: "Layer 4 — Transport adds port numbers → Segment created" },
      { id: "enc5", label: "Layer 3 — Network adds IP addresses → Packet created" },
      { id: "enc6", label: "Layer 2 — Data Link adds MAC addresses + FCS → Frame created" },
      { id: "enc7", label: "Layer 1 — Physical converts frame to bits and transmits" },
    ],
  },

  {
    id: "osi-7",
    type: "match",
    domain: "1.0 Networking Concepts",
    title: "OSI Layer Functions",
    question:
      "Match each OSI layer to its primary responsibility. Click a layer on the left, then its function on the right.",
    explanation:
      "Layer 1 (Physical) — transmits raw bits over the medium; deals with voltage, timing, and connectors.\n" +
      "Layer 2 (Data Link) — provides node-to-node delivery within a LAN using MAC addresses; handles framing and error detection via CRC.\n" +
      "Layer 3 (Network) — provides logical addressing (IP) and determines the best path (routing) across multiple networks.\n" +
      "Layer 4 (Transport) — provides end-to-end communication between applications; TCP adds reliability (sequencing, ACK, flow/congestion control), UDP is best-effort.\n" +
      "Layer 5 (Session) — establishes, manages, and terminates sessions (dialogues) between applications.\n" +
      "Layer 6 (Presentation) — handles data translation, encryption/decryption, and compression so the application receives usable data.\n" +
      "Layer 7 (Application) — provides network services directly to user applications (web browsers, email clients, etc.).",
    left: [
      { id: "fn1", label: "Layer 1 — Physical" },
      { id: "fn2", label: "Layer 2 — Data Link" },
      { id: "fn3", label: "Layer 3 — Network" },
      { id: "fn4", label: "Layer 4 — Transport" },
      { id: "fn5", label: "Layer 5 — Session" },
      { id: "fn6", label: "Layer 6 — Presentation" },
      { id: "fn7", label: "Layer 7 — Application" },
    ],
    right: [
      { id: "fn1", label: "Raw bit transmission over physical medium" },
      { id: "fn2", label: "MAC addressing, framing, and error detection within a LAN" },
      { id: "fn3", label: "Logical (IP) addressing and inter-network routing" },
      { id: "fn4", label: "End-to-end delivery with port numbers; TCP reliability or UDP speed" },
      { id: "fn5", label: "Establishing, maintaining, and terminating application sessions" },
      { id: "fn6", label: "Data translation, encryption/decryption, and compression" },
      { id: "fn7", label: "Network services exposed directly to user applications" },
    ],
  },

  {
    id: "osi-8",
    type: "bucket",
    domain: "1.0 Networking Concepts",
    title: "Security Controls by OSI Layer",
    question:
      "Classify each security control or mechanism into the OSI layer where it primarily operates.",
    explanation:
      "Layer 1 (Physical) — physical security preventing unauthorized access to ports: port locks, cable shielding, Faraday cages.\n" +
      "Layer 2 (Data Link) — MAC-level security: MAC filtering, 802.1X port authentication, WPA3 (operates on 802.11 frames), VLAN segmentation, Dynamic ARP Inspection.\n" +
      "Layer 3 (Network) — IP-level controls: ACLs (Access Control Lists), IPsec (tunnel/transport mode), ingress/egress filtering, packet-filtering firewall.\n" +
      "Layer 4 (Transport) — port-based controls: stateful firewall (tracks TCP sessions), port blocking, TCP SYN flood protection.\n" +
      "Layer 6 (Presentation) — encryption/certificate enforcement: TLS/SSL certificates, certificate pinning, end-to-end encryption.\n" +
      "Layer 7 (Application) — application-aware inspection: WAF (Web Application Firewall), IDS/IPS (deep packet inspection), proxy authentication, URL filtering.",
    buckets: [
      { id: 1, label: "Layer 1", sublabel: "Physical" },
      { id: 2, label: "Layer 2", sublabel: "Data Link" },
      { id: 3, label: "Layer 3", sublabel: "Network" },
      { id: 4, label: "Layer 4", sublabel: "Transport" },
      { id: 6, label: "Layer 6", sublabel: "Presentation" },
      { id: 7, label: "Layer 7", sublabel: "Application" },
    ],
    items: [
      { id: "portlock",  label: "Physical port lock / Faraday cage",      bucket: 1 },
      { id: "macfilter", label: "MAC address filtering",                   bucket: 2 },
      { id: "8021x",     label: "802.1X port-based authentication",        bucket: 2 },
      { id: "dai",       label: "Dynamic ARP Inspection (DAI)",            bucket: 2 },
      { id: "acl",       label: "IP Access Control List (ACL)",            bucket: 3 },
      { id: "ipsec",     label: "IPsec (tunnel mode)",                     bucket: 3 },
      { id: "pfirewall", label: "Packet-filtering firewall",               bucket: 3 },
      { id: "sfirewall", label: "Stateful firewall (TCP session tracking)",bucket: 4 },
      { id: "synprot",   label: "TCP SYN flood protection",                bucket: 4 },
      { id: "tlscert",   label: "TLS/SSL certificate enforcement",         bucket: 6 },
      { id: "waf",       label: "Web Application Firewall (WAF)",          bucket: 7 },
      { id: "ips",       label: "IDS / IPS (deep packet inspection)",      bucket: 7 },
    ],
  },

  {
    id: "osi-9",
    type: "bucket",
    domain: "1.0 Networking Concepts",
    title: "Routing & Network Management Protocols by Layer",
    question:
      "Classify each routing or management protocol into the OSI layer where it primarily operates.",
    explanation:
      "Layer 2 (Data Link) — protocols that manage the LAN segment and frames:\n" +
      "  • STP / RSTP — Spanning Tree Protocol prevents Layer 2 loops\n" +
      "  • VTP — VLAN Trunking Protocol propagates VLAN info between switches\n" +
      "  • CDP / LLDP — device discovery using Layer 2 multicast\n\n" +
      "Layer 3 (Network) — routing protocols that exchange IP reachability:\n" +
      "  • RIP — distance-vector, hop count metric (max 15 hops)\n" +
      "  • OSPF — link-state, uses Dijkstra's algorithm, fast convergence\n" +
      "  • EIGRP — Cisco hybrid, bandwidth + delay metric\n" +
      "  • BGP — path-vector, used between ASes on the Internet\n" +
      "  • ICMP — IP control messages (ping uses ICMP echo)\n\n" +
      "Layer 4 (Transport) — TCP and UDP are L4, but also:\n" +
      "  • SCTP — Stream Control Transmission Protocol (L4, used in VoIP signaling)\n\n" +
      "Layer 7 (Application) — management protocols with application-layer payloads:\n" +
      "  • SNMP — Simple Network Management Protocol (MIB queries/traps)\n" +
      "  • Syslog — log forwarding (UDP 514)\n" +
      "  • NTP — Network Time Protocol\n" +
      "  • DHCP — Dynamic Host Configuration Protocol",
    buckets: [
      { id: 2, label: "Layer 2", sublabel: "Data Link" },
      { id: 3, label: "Layer 3", sublabel: "Network" },
      { id: 4, label: "Layer 4", sublabel: "Transport" },
      { id: 7, label: "Layer 7", sublabel: "Application" },
    ],
    items: [
      { id: "stp",   label: "STP / RSTP (Spanning Tree)",    bucket: 2 },
      { id: "vtp",   label: "VTP (VLAN Trunking Protocol)",  bucket: 2 },
      { id: "lldp",  label: "CDP / LLDP (Link Discovery)",   bucket: 2 },
      { id: "rip",   label: "RIP (distance-vector routing)", bucket: 3 },
      { id: "ospf",  label: "OSPF (link-state routing)",     bucket: 3 },
      { id: "bgp",   label: "BGP (inter-AS path-vector)",    bucket: 3 },
      { id: "icmp",  label: "ICMP (ping / traceroute)",      bucket: 3 },
      { id: "sctp",  label: "SCTP",                          bucket: 4 },
      { id: "snmp",  label: "SNMP",                          bucket: 7 },
      { id: "syslog",label: "Syslog",                        bucket: 7 },
      { id: "ntp",   label: "NTP",                           bucket: 7 },
      { id: "dhcp",  label: "DHCP",                          bucket: 7 },
    ],
  },
];
