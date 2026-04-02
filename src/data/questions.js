// Questions sourced from Professor Messer's CompTIA 220-1201 A+ Core 1 Course Notes v1.2
export const questions = [

  // ─────────────────────────────────────────────
  // 1.0 MOBILE DEVICES - Laptop Hardware
  // ─────────────────────────────────────────────
  {
    id: 1,
    category: "1.0 Mobile Devices",
    topic: "1.1 Laptop Hardware",
    question: "What type of battery chemistry is most common in modern laptops and why?",
    answer: "Lithium-Ion (Li-ion) and Lithium-Ion Polymer (LiPo) — no 'memory effect' and high energy density",
    explanation: "Laptop batteries are commonly Li-ion or LiPo. Unlike older NiCad batteries, they have no 'memory effect,' meaning you don't need to fully discharge before recharging. However, repeatedly charging the battery diminishes its overall capacity over time. Battery form factor varies by laptop model."
  },
  {
    id: 2,
    category: "1.0 Mobile Devices",
    topic: "1.1 Laptop Hardware",
    question: "What is a SO-DIMM and where is it used?",
    answer: "Small Outline Dual In-line Memory Module — used in laptops and mobile devices",
    explanation: "SO-DIMMs are about half the width of a standard DIMM and are designed for space-constrained devices like laptops. Some laptop memory is soldered directly to the system board, making it non-upgradeable and requiring a full board replacement if it fails."
  },
  {
    id: 3,
    category: "1.0 Mobile Devices",
    topic: "1.1 Laptop Hardware",
    question: "What are the three common laptop storage form factors?",
    answer: "2.5\" magnetic disk (HDD), 2.5\" SSD, and M.2",
    explanation: "Traditional laptop HDDs use 2.5\" spinning platters. SSDs come in 2.5\" (replacing HDDs directly) and M.2 form factors. M.2 drives are smaller, require no SATA data or power cables, and use a single screw for installation — similar to RAM installation. Desktop HDDs use 3.5\" form factor."
  },
  {
    id: 4,
    category: "1.0 Mobile Devices",
    topic: "1.1 Laptop Hardware",
    question: "What are two ways to migrate from a laptop HDD to an SSD?",
    answer: "Clean install (OS + apps on SSD) or disk imaging/cloning (copy everything from HDD to SSD)",
    explanation: "A clean install means installing the OS fresh on the SSD, then reinstalling applications and moving documents — time-consuming but clean. Disk imaging/cloning copies everything from HDD to SSD exactly, requiring imaging software (sometimes included with the SSD). Drive-to-drive imaging copies directly without an intermediate image file."
  },
  {
    id: 5,
    category: "1.0 Mobile Devices",
    topic: "1.1 Laptop Hardware",
    question: "What is NFC and what is its typical communication range?",
    answer: "Near-Field Communication — approximately 4 centimeters or less",
    explanation: "NFC enables short-range wireless data transfers and authentication. It's common on mobile phones and smartwatches for payments (tap to pay) and is also used in hospital workstations, warehouses, and manufacturing for authentication without typing a password."
  },
  {
    id: 6,
    category: "1.0 Mobile Devices",
    topic: "1.1 Laptop Hardware",
    question: "How are Wi-Fi antennas typically positioned in a laptop?",
    answer: "Antenna wires wrap around the laptop screen frame — placed high for better signal",
    explanation: "Laptops typically have multiple antennas: one for Wi-Fi main, one for Wi-Fi auxiliary, and one for Bluetooth. They are routed around the display panel (screen bezel) to position them as high as possible for better signal reception. This is important to know when replacing a laptop screen."
  },
  {
    id: 7,
    category: "1.0 Mobile Devices",
    topic: "1.2 Connecting Mobile Devices",
    question: "What are the differences between Micro-USB, Mini-USB, and USB-C?",
    answer: "Micro-USB: smallest/most common older Android connector; Mini-USB: slightly larger, older; USB-C: 24-pin double-sided, current standard, reversible",
    explanation: "Micro-USB was the dominant Android standard for many years. Mini-USB preceded it and is slightly larger. USB-C is the current standard — it's a 24-pin double-sided connector that can carry USB 2.0/3.0/3.1/4 signals, DisplayPort, HDMI, and Thunderbolt depending on the device."
  },
  {
    id: 8,
    category: "1.0 Mobile Devices",
    topic: "1.2 Connecting Mobile Devices",
    question: "What is Apple's Lightning connector and what are its advantages over Micro-USB?",
    answer: "Apple proprietary 8-pin digital connector for iPhone/iPad — reversible, higher power output, simpler design",
    explanation: "Lightning uses 8-pin digital signals and is proprietary to Apple's iPhone and iPad devices. Compared to Micro-USB, it offers higher power output for faster charging, can be inserted in either orientation (reversible), and has a simpler, more durable design. It is being replaced by USB-C on newer Apple devices."
  },
  {
    id: 9,
    category: "1.0 Mobile Devices",
    topic: "1.2 Connecting Mobile Devices",
    question: "What is Bluetooth used for on mobile devices?",
    answer: "Short-range PAN (Personal Area Network) for connecting peripherals, tethering, headsets, health monitors, and smart devices",
    explanation: "Bluetooth creates a Personal Area Network for high-speed, short-distance communication. Common uses: smartphones (tethering, headsets), automobile integration, smartwatches, external speakers, health monitors. It operates in the 2.4 GHz ISM band and is designed for connecting nearby personal devices."
  },
  {
    id: 10,
    category: "1.0 Mobile Devices",
    topic: "1.2 Connecting Mobile Devices",
    question: "What signals can a USB-C connector carry besides USB data?",
    answer: "DisplayPort, HDMI, Thunderbolt — USB-C is a physical connector, not a protocol",
    explanation: "USB-C describes only the physical connector shape. The actual signal depends on the device. A single USB-C port can carry USB 2.0/3.x/4 data, video via DisplayPort or HDMI, Thunderbolt 3/4, and power delivery. Always check the device specifications to know which signals are supported."
  },
  {
    id: 11,
    category: "1.0 Mobile Devices",
    topic: "1.2 Mobile Device Accessories",
    question: "What is the difference between a docking station and a port replicator?",
    answer: "Docking station adds functionality and may include expansion card slots; port replicator simply replicates existing ports, typically via USB",
    explanation: "A docking station extends a laptop's interfaces by adding more ports, desktop adapter cards, and additional functionality — avoiding cable issues when at a desk. A port replicator is similar but simpler — it does not commonly have expansion card slots and usually connects via USB."
  },
  {
    id: 12,
    category: "1.0 Mobile Devices",
    topic: "1.2 Mobile Device Accessories",
    question: "What is a digitizer stylus and where is it commonly used?",
    answer: "A pen-like input device that communicates directly with the tablet for precise graphical input — e.g., Apple Pencil on iPad",
    explanation: "A digital stylus is more advanced than a finger for touch input. It communicates directly with the device's digitizer, supporting pressure sensitivity and programmable buttons. Must be compatible with the specific tablet (e.g., Apple Pencil for iPad). Used for drawing, note-taking, and graphic design."
  },
  {
    id: 13,
    category: "1.0 Mobile Devices",
    topic: "1.3 Mobile Device Networks",
    question: "What were the key improvements introduced with 3G cellular technology?",
    answer: "Upgraded data connectivity enabling GPS, mobile TV, video on demand, and video conferencing — typically several megabits per second",
    explanation: "3G (3rd Generation), introduced in 1998, provided incremental data speed improvements over 2G. The bandwidth improvements enabled new functionality: GPS navigation, mobile television, video on demand, and video conferencing. Speeds were usually several megabits per second."
  },
  {
    id: 14,
    category: "1.0 Mobile Devices",
    topic: "1.3 Mobile Device Networks",
    question: "What is LTE and what download speeds does it support?",
    answer: "Long Term Evolution — a '4G' technology based on GSM/EDGE supporting 150 Mbit/s standard, 300 Mbit/s with LTE Advanced",
    explanation: "LTE (Long Term Evolution) is the 4G standard based on GSM and EDGE (Enhanced Data Rates for GSM Evolution). Standard LTE supports download rates of 150 Mbit/s. LTE-A (LTE Advanced) supports up to 300 Mbit/s. LTE is widely deployed worldwide."
  },
  {
    id: 15,
    category: "1.0 Mobile Devices",
    topic: "1.3 Mobile Device Networks",
    question: "What are the key characteristics of 5G networking?",
    answer: "5th generation cellular launched 2020 — higher frequencies, up to 10 Gbps, significant IoT impact with lower latency and larger data transfers",
    explanation: "5G was launched worldwide in 2020. It operates at higher frequencies than 4G, achieving theoretical speeds up to 10 Gbps (slower sub-6 GHz speeds of 100-900 Mbit/s are more typical). It has significant IoT impact: bandwidth is less of a constraint, enabling faster monitoring, larger data transfers, and additional cloud processing."
  },
  {
    id: 16,
    category: "1.0 Mobile Devices",
    topic: "1.3 Mobile Device Networks",
    question: "What is a SIM card and what information does it contain?",
    answer: "Subscriber Identity Module — a unique identifier card containing SIM ID, phone number, carrier info, and storage for contacts/messages",
    explanation: "A SIM (Subscriber Identity Module) is typically a small physical card that uniquely identifies a cellular device. It contains the carrier's network information, the SIM ID, the phone number, and can store contacts and messages. Replacing the SIM gives the phone a new number. eSIM is an embedded version that cannot be physically removed."
  },
  {
    id: 17,
    category: "1.0 Mobile Devices",
    topic: "1.3 Mobile Device Networks",
    question: "What is the Bluetooth pairing process?",
    answer: "Enable Bluetooth on both devices → set to discoverable → select discovered device → enter/confirm PIN → test connectivity",
    explanation: "To pair Bluetooth devices: (1) Enable Bluetooth on both devices (Settings/Bluetooth on Android/iOS), (2) Set both to discoverable mode, (3) Select the discovered device from the list, (4) Enter or confirm the PIN (must match on both), (5) Test that devices can communicate. Future connections should be automatic."
  },
  {
    id: 18,
    category: "1.0 Mobile Devices",
    topic: "1.3 Mobile Device Networks",
    question: "How does GPS determine location and what infrastructure does it require?",
    answer: "Uses timing differences from 30+ orbiting satellites — needs at least 4 satellites to determine longitude, latitude, and altitude",
    explanation: "GPS (Global Positioning System) was created by the U.S. Department of Defense and uses over 30 satellites in orbit. It determines precise location by calculating timing differences from at least 4 satellites to triangulate longitude, latitude, and altitude. Mobile devices also use Wi-Fi positioning and cellular towers to supplement GPS for faster and more accurate indoor location."
  },
  {
    id: 19,
    category: "1.0 Mobile Devices",
    topic: "1.3 Mobile Device Management",
    question: "What is MDM and what can it control on mobile devices?",
    answer: "Mobile Device Management — centralized management of apps, data, camera, remote control, screen locks, corporate email, and two-factor authentication",
    explanation: "MDM allows IT administrators to manage both company-owned and user-owned (BYOD) mobile devices from a central console. It can enforce policies on apps, data, and cameras; configure corporate email automatically; require two-factor authentication; allow or restrict app installation; and force screen locks/PINs."
  },
  {
    id: 20,
    category: "1.0 Mobile Devices",
    topic: "1.3 Mobile Device Management",
    question: "What is the difference between BYOD, COPE, and CYOD?",
    answer: "BYOD: employee-owned device; COPE: company-owned, personally enabled; CYOD: choose your own device (company buys user's choice)",
    explanation: "BYOD (Bring Your Own Device): employee owns the device, must meet company requirements, difficult to secure. COPE (Corporate Owned, Personally Enabled): company buys the device, used for both work and personal — company keeps full control. CYOD (Choose Your Own Device): similar to COPE but the employee chooses the model."
  },

  // ─────────────────────────────────────────────
  // 2.0 NETWORKING
  // ─────────────────────────────────────────────
  {
    id: 21,
    category: "2.0 Networking",
    topic: "2.1 Introduction to IP",
    question: "What are the key differences between TCP and UDP?",
    answer: "TCP: connection-oriented, reliable, flow control, ordered delivery. UDP: connectionless, 'unreliable', no retransmission, used for real-time apps",
    explanation: "TCP (Transmission Control Protocol) establishes a formal connection, guarantees delivery with acknowledgments, manages out-of-order messages, and controls flow. UDP (User Datagram Protocol) is connectionless with no formal open/close, no error recovery or retransmission. UDP is preferred for real-time communication (streaming, gaming, VoIP) where retransmission would be worse than missing data."
  },
  {
    id: 22,
    category: "2.0 Networking",
    topic: "2.1 Introduction to IP",
    question: "What are non-ephemeral vs. ephemeral port numbers?",
    answer: "Non-ephemeral: ports 0–1,023 (permanent server ports); Ephemeral: ports 1,024–65,535 (temporary client ports assigned at runtime)",
    explanation: "Non-ephemeral (well-known) ports 0–1,023 are permanently assigned to server services. Ephemeral ports 1,024–65,535 are temporary port numbers assigned in real-time by client applications. When your browser connects to a web server, it uses an ephemeral port as the source port for the session."
  },
  {
    id: 23,
    category: "2.0 Networking",
    topic: "2.1 Common Ports",
    question: "What port does FTP use and what are its limitations?",
    answer: "tcp/20 (active mode data), tcp/21 (control) — transfers files but sends credentials in plaintext",
    explanation: "FTP (File Transfer Protocol) uses port 21 for control and port 20 for active mode data. It authenticates with a username/password and supports full file management. Limitation: credentials are sent in plaintext — use SFTP or FTPS for secure transfers."
  },
  {
    id: 24,
    category: "2.0 Networking",
    topic: "2.1 Common Ports",
    question: "What are the port numbers for SSH, Telnet, SMTP, and DNS?",
    answer: "SSH: tcp/22 | Telnet: tcp/23 | SMTP: tcp/25 | DNS: udp/53 (also tcp/53)",
    explanation: "SSH (Secure Shell) provides encrypted console access on port 22. Telnet provides unencrypted console access on port 23 — not recommended for production. SMTP (Simple Mail Transfer Protocol) transfers email between servers on port 25. DNS (Domain Name System) resolves names to IPs on UDP port 53."
  },
  {
    id: 25,
    category: "2.0 Networking",
    topic: "2.1 Common Ports",
    question: "What are the ports for HTTP, HTTPS, POP3, and IMAP4?",
    answer: "HTTP: tcp/80 | HTTPS: tcp/443 | POP3: tcp/110 | IMAP4: tcp/143",
    explanation: "HTTP (Hypertext Transfer Protocol) serves web pages on port 80. HTTPS adds TLS/SSL encryption on port 443. POP3 (Post Office Protocol v3) downloads email to a client on port 110. IMAP4 (Internet Message Access Protocol v4) manages email on the server from multiple clients on port 143."
  },
  {
    id: 26,
    category: "2.0 Networking",
    topic: "2.1 Common Ports",
    question: "What are SMB, LDAP, and RDP ports?",
    answer: "SMB: tcp/445 (also NetBIOS udp/137, tcp/139) | LDAP: tcp/389 | RDP: tcp/3389",
    explanation: "SMB (Server Message Block) on tcp/445 handles Windows file/printer sharing. NetBIOS uses udp/137 for name services and tcp/139 for session services. LDAP (Lightweight Directory Access Protocol) on tcp/389 stores/retrieves directory information (Active Directory). RDP (Remote Desktop Protocol) on tcp/3389 provides graphical remote desktop access."
  },
  {
    id: 27,
    category: "2.0 Networking",
    topic: "2.1 Common Ports",
    question: "What port does DHCP use and what is the DORA process?",
    answer: "udp/67 (server), udp/68 (client) — DORA: Discover, Offer, Request, Acknowledge",
    explanation: "DHCP uses UDP port 67 on the server and port 68 on the client. DORA: (1) Discover — client broadcasts to find a DHCP server, (2) Offer — server offers an IP address, (3) Request — client requests the offered address, (4) Acknowledge — server confirms the lease."
  },
  {
    id: 28,
    category: "2.0 Networking",
    topic: "2.2 Wireless Network Technologies",
    question: "What Wi-Fi generation names correspond to 802.11ac, 802.11ax, and 802.11be?",
    answer: "802.11ac = Wi-Fi 5 | 802.11ax = Wi-Fi 6 / Wi-Fi 6E | 802.11be = Wi-Fi 7",
    explanation: "IEEE standards are referenced both by number and generation name. 802.11ac (Wi-Fi 5) operates on 5 GHz. 802.11ax (Wi-Fi 6) operates on 2.4/5 GHz; Wi-Fi 6E extends into the 6 GHz band. 802.11be (Wi-Fi 7) is the newest generation."
  },
  {
    id: 29,
    category: "2.0 Networking",
    topic: "2.2 Wireless Network Technologies",
    question: "What are the three frequency bands used by 802.11 Wi-Fi?",
    answer: "2.4 GHz, 5 GHz, and 6 GHz",
    explanation: "Wi-Fi operates on 2.4 GHz (longer range, more interference), 5 GHz (faster, shorter range, less interference), and 6 GHz (only with Wi-Fi 6E/7, very fast, very short range, much less congestion)."
  },
  {
    id: 30,
    category: "2.0 Networking",
    topic: "2.2 Wireless Network Technologies",
    question: "What is RFID and how does it work?",
    answer: "Radio-Frequency Identification — radar-based technology that powers tags with RF energy; the tag transmits its ID back",
    explanation: "RFID is used everywhere: access badges, inventory/assembly tracking, pet/animal identification, and any item that needs tracking. RF energy is transmitted to the tag; the RF powers the tag and the tag transmits its ID back. Communication can be bidirectional and some tags can be active/powered."
  },
  {
    id: 31,
    category: "2.0 Networking",
    topic: "2.3 Network Services",
    question: "What is a proxy server and what functions does it provide?",
    answer: "Intermediate server that makes requests on behalf of clients — provides access control, caching, URL filtering, and content scanning",
    explanation: "A proxy server sits between clients and servers. The client makes requests to the proxy; the proxy makes the actual request and returns results. This enables access control, caching, URL filtering, and content/malware scanning."
  },
  {
    id: 32,
    category: "2.0 Networking",
    topic: "2.3 Network Services",
    question: "What is an NTP server and why is accurate time important in networking?",
    answer: "Network Time Protocol server on udp/123 — time accuracy is critical for encryption, logins, backups, and log timestamps",
    explanation: "NTP servers listen on UDP port 123 and respond to time requests. Accurate time is critical: encryption certificates, login authentication, backup scheduling, and log timestamps all depend on synchronized clocks. Daily synchronization is common."
  },
  {
    id: 33,
    category: "2.0 Networking",
    topic: "2.3 Network Services",
    question: "What is SCADA/ICS and why does it require network segmentation?",
    answer: "Supervisory Control and Data Acquisition / Industrial Control Systems — manages critical infrastructure; must be isolated from outside access",
    explanation: "SCADA/ICS systems control critical infrastructure: power generation, oil refining, manufacturing, logistics. They require extensive network segmentation and no direct external access because a breach could have catastrophic real-world consequences."
  },
  {
    id: 34,
    category: "2.0 Networking",
    topic: "2.3 Network Services",
    question: "What is a UTM (Unified Threat Management) appliance?",
    answer: "Next-gen firewall combining: URL filter, malware inspection, spam filter, CSU/DSU, router, switch, firewall, IDS/IPS, bandwidth shaper, VPN endpoint",
    explanation: "A UTM (Unified Threat Management) or all-in-one security appliance combines many security functions: URL filtering, content inspection, malware inspection, spam filtering, routing, switching, firewall, IDS/IPS, bandwidth shaping, and VPN endpoint in one device."
  },
  {
    id: 35,
    category: "2.0 Networking",
    topic: "2.4 DNS Configuration",
    question: "What are DNS A records and AAAA records?",
    answer: "A record: maps hostname to IPv4 address | AAAA record: maps hostname to IPv6 address",
    explanation: "DNS A (Address) records are the most common query type — they define the IPv4 address of a host. AAAA (quad-A) records serve the same purpose for IPv6 addresses. Both types can exist on the same DNS server for the same hostname."
  },
  {
    id: 36,
    category: "2.0 Networking",
    topic: "2.4 DNS Configuration",
    question: "What is a CNAME record?",
    answer: "Canonical Name record — an alias pointing one hostname to another hostname (not an IP)",
    explanation: "A CNAME record creates an alias so one hostname points to another. For example, 'ftp.example.com' and 'chat.example.com' can both CNAME to 'mail.example.com'. One physical server can provide multiple services under different names."
  },
  {
    id: 37,
    category: "2.0 Networking",
    topic: "2.4 DNS Configuration",
    question: "What are MX, TXT, SPF, DKIM, and DMARC DNS records used for?",
    answer: "MX: mail server | TXT: text info | SPF: authorized senders | DKIM: digitally signs outgoing mail | DMARC: policy for failed SPF/DKIM validation",
    explanation: "MX (Mail Exchanger) identifies the mail server. TXT stores text info used for verification. SPF lists authorized mail servers to prevent spoofing. DKIM digitally signs outgoing mail, validated by mail servers. DMARC extends SPF/DKIM — defines policy (accept/quarantine/reject) for emails that fail validation and can send compliance reports."
  },
  {
    id: 38,
    category: "2.0 Networking",
    topic: "2.4 DHCP",
    question: "What information does a DHCP scope define?",
    answer: "IP address range, excluded addresses, subnet mask, lease duration, DNS server, default gateway, and optional VOIP servers",
    explanation: "A DHCP scope is configured on the DHCP server and defines a contiguous pool of IP addresses for a subnet. It includes: IP address range with exclusions, subnet mask, lease duration, and optional settings like DNS servers, default gateway, and VOIP servers."
  },
  {
    id: 39,
    category: "2.0 Networking",
    topic: "2.4 DHCP",
    question: "What is DHCP address reservation?",
    answer: "Assigns a specific IP to a device based on its MAC address — also called Static DHCP or IP Reservation",
    explanation: "DHCP address reservation ensures a specific device always gets the same IP address from DHCP by mapping a MAC address to an IP address in the DHCP server. Better than manual static IPs because the address is still managed centrally."
  },
  {
    id: 40,
    category: "2.0 Networking",
    topic: "2.4 VLANs and VPNs",
    question: "What is a VLAN and how does it differ from a physical LAN?",
    answer: "Virtual LAN — a broadcast domain separated logically (not physically) on a switch; one switch can support multiple isolated networks",
    explanation: "A LAN is a group of devices in the same physical broadcast domain. A VLAN creates the same separation but logically via software on a single switch. One physical switch can act as multiple isolated switches, improving security and organization without extra hardware."
  },
  {
    id: 41,
    category: "2.0 Networking",
    topic: "2.4 VLANs and VPNs",
    question: "What is the difference between a client-to-site VPN and a site-to-site VPN?",
    answer: "Client-to-site: remote user connects on-demand via VPN software. Site-to-site: always-on tunnel between two locations via VPN concentrators",
    explanation: "Client-to-site VPN allows individual remote users to securely connect to a corporate network on-demand. Site-to-site VPN connects two entire networks through a permanent encrypted tunnel via VPN concentrators/firewalls — always on."
  },
  {
    id: 42,
    category: "2.0 Networking",
    topic: "2.5 Network Devices",
    question: "What is the difference between an unmanaged switch and a managed switch?",
    answer: "Unmanaged: plug-and-play, no VLANs, no management. Managed: VLANs, traffic prioritization (QoS), STP, port mirroring, SNMP",
    explanation: "Unmanaged switches are simple plug-and-play with fixed configurations — inexpensive. Managed switches support VLANs (via 802.1Q), QoS traffic prioritization, Spanning Tree Protocol (STP) for redundancy, port mirroring for packet capture, and SNMP management."
  },
  {
    id: 43,
    category: "2.0 Networking",
    topic: "2.5 Network Devices",
    question: "What is PoE and what are the power differences between PoE, PoE+, and PoE++?",
    answer: "Power over Ethernet. PoE: 15.4W/350mA | PoE+: 25.5W/600mA | PoE++ Type 3: 51W, Type 4: 71.3W/960mA",
    explanation: "PoE (802.3) provides 15.4W DC, 350mA — for IP phones/cameras. PoE+ provides 25.5W, 600mA — for more power-hungry devices. PoE++ Type 3: 51W, Type 4: 71.3W at 960mA — for laptops and high-power APs. PoE+ cannot power a PoE++ device."
  },
  {
    id: 44,
    category: "2.0 Networking",
    topic: "2.5 Network Devices",
    question: "What is an access point and how does it differ from a wireless router?",
    answer: "Access point is a bridge extending wired network to wireless — a wireless router combines router + access point in one device",
    explanation: "An access point (AP) extends the wired network onto wireless, making forwarding decisions based on MAC addresses. A wireless router combines routing (IP subnets) and an AP. A standalone AP does not route — it simply bridges wired and wireless."
  },
  {
    id: 45,
    category: "2.0 Networking",
    topic: "2.5 Network Devices",
    question: "What is an ONT and what is its purpose?",
    answer: "Optical Network Terminal — connects ISP fiber to premises copper network; demarcation point between ISP and customer",
    explanation: "An ONT connects the ISP's fiber optic network to the customer's copper/Ethernet network. It's typically a box on the side of the building. One side belongs to the ISP; the other side belongs to the customer. It is the demarcation point (demarc) between ISP and customer responsibility."
  },
  {
    id: 46,
    category: "2.0 Networking",
    topic: "2.6 IPv4 and IPv6",
    question: "What are the three RFC 1918 private IPv4 address ranges?",
    answer: "10.0.0.0/8 (16.7M addresses) | 172.16.0.0/12 (1M addresses) | 192.168.0.0/16 (65,536 addresses)",
    explanation: "RFC 1918 private ranges not routable on the public internet: Class A: 10.0.0.0–10.255.255.255, Class B: 172.16.0.0–172.31.255.255, Class C: 192.168.0.0–192.168.255.255. NAT is required to communicate with the internet from these ranges."
  },
  {
    id: 47,
    category: "2.0 Networking",
    topic: "2.6 IPv4 and IPv6",
    question: "How does IPv6 addressing differ from IPv4?",
    answer: "IPv6 is 128-bit (vs IPv4's 32-bit), written in hex groups — 340 undecillion addresses. First 64 bits = network prefix, last 64 bits = host",
    explanation: "IPv4 uses 32-bit addresses (4.29 billion total — not enough). IPv6 uses 128-bit addresses providing 340 undecillion addresses. Written as eight groups of four hex digits separated by colons. The first 64 bits are the network prefix (/64) and the last 64 bits are the host address."
  },
  {
    id: 48,
    category: "2.0 Networking",
    topic: "2.6 Assigning IP Addresses",
    question: "What is APIPA and when does it activate?",
    answer: "Automatic Private IP Addressing — assigns 169.254.x.x when DHCP is unavailable; link-local only (not routable)",
    explanation: "APIPA automatically assigns an IP from 169.254.1.0–169.254.254.255 when no DHCP server responds. APIPA addresses are link-local — routers cannot forward them. Seeing a 169.254.x.x address usually indicates a DHCP problem."
  },
  {
    id: 49,
    category: "2.0 Networking",
    topic: "2.6 Assigning IP Addresses",
    question: "What is NAT (Network Address Translation) and why is it needed?",
    answer: "Translates private IP addresses to a public IP for internet communication — conserves IPv4 addresses and hides internal network structure",
    explanation: "NAT allows many devices with private IP addresses to share a single public IP address. The router replaces the private source IP with the public IP and tracks sessions to return traffic correctly. PAT (Port Address Translation) is the most common form, using port numbers to track individual sessions."
  },
  {
    id: 50,
    category: "2.0 Networking",
    topic: "2.7 Internet Connection Types",
    question: "What are the characteristics of DSL internet?",
    answer: "Digital Subscriber Line over telephone lines — asymmetric (~200 Mbps down / 20 Mbps up), limited to ~10,000 feet from central office",
    explanation: "DSL uses existing telephone lines for broadband internet. It's asymmetric: download is faster than upload. Common speeds ~200 Mbps downstream / 20 Mbps upstream. Has a ~10,000-foot distance limitation from the central office — speeds improve if you're closer to the CO."
  },
  {
    id: 51,
    category: "2.0 Networking",
    topic: "2.7 Internet Connection Types",
    question: "What is satellite internet and what are its limitations?",
    answer: "Non-terrestrial internet via orbiting satellites — ~100 Mbps down / 5 Mbps up, high latency (~250ms traditional, 25-60ms Starlink), rain fade, line-of-sight",
    explanation: "Satellite networking communicates with orbiting satellites. Traditional geostationary satellites have ~250ms latency. Starlink (LEO) advertises 25–60ms latency. Limitations: high cost, high latency, line-of-sight requirement, rain fade, and difficult remote sites."
  },
  {
    id: 52,
    category: "2.0 Networking",
    topic: "2.7 Internet Connection Types",
    question: "What is a WISP (Wireless Internet Service Provider)?",
    answer: "Terrestrial wireless internet for rural/remote areas — uses meshed 802.11, 5G home internet, or proprietary wireless; needs outdoor antenna",
    explanation: "A WISP provides internet access using wireless technology for areas where cable/fiber is unavailable. Technologies: meshed 802.11, 5G home internet, proprietary wireless. Requires an outdoor antenna. Speeds range from ~10 to 1,000 Mbps."
  },
  {
    id: 53,
    category: "2.0 Networking",
    topic: "2.7 Network Types",
    question: "What are LAN, WAN, MAN, PAN, SAN, and WLAN?",
    answer: "LAN: local building | WAN: wide area/globe | MAN: metropolitan/city | PAN: personal (Bluetooth/NFC) | SAN: storage area network | WLAN: wireless LAN (802.11)",
    explanation: "LAN: high-speed in a building. WAN: spans the globe. MAN: covers a city. PAN: your own private network (Bluetooth, NFC). SAN: block-level storage access for high efficiency. WLAN: wireless 802.11 within a building or limited area."
  },
  {
    id: 54,
    category: "2.0 Networking",
    topic: "2.8 Network Tools",
    question: "What is a cable crimper used for?",
    answer: "Attaches modular connectors to cable — metal prongs pushed through insulation; use correct connectors and maintain twists to termination",
    explanation: "A cable crimper permanently attaches a modular connector to a cable. Metal prongs are pushed through insulation and the plug is pressed onto the cable sheath. Best practices: use quality tools, use correct connectors for the wire type, and maintain cable twists as close to the connector as possible."
  },
  {
    id: 55,
    category: "2.0 Networking",
    topic: "2.8 Network Tools",
    question: "What is a tone generator and inductive probe used for?",
    answer: "Traces cable paths — generator puts signal on wire, inductive probe detects tone without touching copper",
    explanation: "A tone generator and probe identifies which cable goes where. The generator puts an analog tone on the wire; the inductive probe detects the tone without touching the copper. Essential for cable tracing in complex environments with many unlabeled cables."
  },
  {
    id: 56,
    category: "2.0 Networking",
    topic: "2.8 Network Tools",
    question: "What does a loopback plug do?",
    answer: "Tests physical ports by looping output back as input — available for Serial/RS-232, Ethernet, T1, and fiber",
    explanation: "A loopback plug connects the output signal back to the input of the same port to verify the port functions correctly. Common types: Serial (DB9/DB25), Ethernet (RJ45), T1, and Fiber. They are NOT crossover cables."
  },

  // ─────────────────────────────────────────────
  // 3.0 HARDWARE
  // ─────────────────────────────────────────────
  {
    id: 57,
    category: "3.0 Hardware",
    topic: "3.1 Display Types",
    question: "What are the differences between TN, IPS, and VA LCD panels?",
    answer: "TN: fastest response (gaming), poor viewing angles. IPS: excellent color/wide angles, more expensive. VA: good color, compromise between TN/IPS, slower response",
    explanation: "TN (Twisted Nematic): fast response times for gaming but poor viewing angles and color shifts. IPS (In Plane Switching): excellent color and wide viewing angles but more expensive. VA (Vertical Alignment): good compromise with good color representation but often slower response times than TN."
  },
  {
    id: 58,
    category: "3.0 Hardware",
    topic: "3.1 Display Types",
    question: "What is OLED and how does it differ from LCD?",
    answer: "Organic Light-Emitting Diode — each pixel emits its own light (no backlight), thinner, flexible, accurate color, used in phones/tablets/smartwatches",
    explanation: "OLED pixels emit their own light via organic compounds — no backlight needed. This makes OLED thinner, lighter, flexible, and provides very accurate colors with deep blacks (pixel turns off completely). Higher cost than LCD. Common in smartphones, tablets, and smartwatches."
  },
  {
    id: 59,
    category: "3.0 Hardware",
    topic: "3.1 Display Attributes",
    question: "What is display refresh rate and why does it matter?",
    answer: "Frames displayed per second (Hz) — movies: 24fps, TV: 30fps, gaming: 60fps+; HDMI 2.1 supports 4K@144Hz",
    explanation: "Refresh rate determines how many images are shown per second. Higher rates reduce motion blur — important for gaming. HDMI 2.1 supports 4K at 144Hz; DisplayPort 2.1 supports dual 4K at 144Hz. The maximum is determined by both the video adapter and the display."
  },
  {
    id: 60,
    category: "3.0 Hardware",
    topic: "3.2 Network Cables",
    question: "What cable categories support 1GbE and 10GbE, and what are the max distances?",
    answer: "1GbE: Cat5/Cat5e at 100m | 10GbE: Cat6 at 55m(UTP)/100m(STP), Cat6A at 100m",
    explanation: "1000BASE-T (1 GbE) requires minimum Cat5 or Cat5e at 100 meters. 10GBASE-T (10 GbE) requires Cat6 (55m unshielded, 100m shielded) or Cat6A/augmented at 100m."
  },
  {
    id: 61,
    category: "3.0 Hardware",
    topic: "3.2 Network Cables",
    question: "What is the difference between UTP and STP cabling?",
    answer: "UTP: no shielding, most common. STP: foil/braided shielding against EMI, requires grounding",
    explanation: "UTP is the most common twisted pair — no additional shielding. STP adds shielding around pairs and/or the entire cable to protect against EMI. STP requires proper grounding. Abbreviations: U=Unshielded, S=Braided shielding, F=Foil shielding."
  },
  {
    id: 62,
    category: "3.0 Hardware",
    topic: "3.2 Network Cables",
    question: "What is plenum-rated cable and when is it required?",
    answer: "Fire-rated cable using FEP or low-smoke PVC — required in air circulation spaces (plenum areas like drop ceilings) per building codes",
    explanation: "Plenum-rated cable uses FEP (Fluorinated Ethylene Polymer) or low-smoke PVC that resists burning and doesn't emit toxic smoke. Required by building codes when running cable through plenum spaces (areas used for air circulation). May be less flexible with a different bend radius."
  },
  {
    id: 63,
    category: "3.0 Hardware",
    topic: "3.2 568A and 568B Colors",
    question: "What are the TIA/EIA 568B pin color assignments?",
    answer: "1:W-Orange, 2:Orange, 3:W-Green, 4:Blue, 5:W-Blue, 6:Green, 7:W-Brown, 8:Brown",
    explanation: "568B (most common in North America): Pin 1: White/Orange, 2: Orange, 3: White/Green, 4: Blue, 5: White/Blue, 6: Green, 7: White/Brown, 8: Brown. 568A swaps orange and green pairs. Both ends must use the same standard — mixing 568A and 568B does NOT create a crossover cable."
  },
  {
    id: 64,
    category: "3.0 Hardware",
    topic: "3.2 Optical Fiber",
    question: "What is the difference between multimode and single-mode fiber?",
    answer: "Multimode: up to 2km, LED, inexpensive. Single-mode: up to 100km, laser, expensive",
    explanation: "Multimode fiber has a larger core, uses an inexpensive LED light source, and is limited to ~2km. Single-mode fiber has a smaller core, uses an expensive laser light source, and supports up to 100km without signal processing. Fiber is immune to radio interference and very difficult to tap."
  },
  {
    id: 65,
    category: "3.0 Hardware",
    topic: "3.2 Fiber Connectors",
    question: "What are the three main fiber optic connector types?",
    answer: "ST: bayonet/push-and-twist | SC: push-to-lock, popular in data centers | LC: smaller/compact, clips in",
    explanation: "ST (Straight Tip): bayonet push-and-turn connector. SC (Subscriber Connector): push-on, pull-to-unlock, very common in data centers. LC (Lucent Connector): smaller and more compact than SC, locks with a clip, press-to-release."
  },
  {
    id: 66,
    category: "3.0 Hardware",
    topic: "3.2 Peripheral Cables",
    question: "What are the USB versions and their maximum speeds?",
    answer: "USB 1.1: 1.5/12 Mbps | USB 2.0: 480 Mbps | USB 3.2 Gen 1: 5 Gbps | USB 3.2 Gen 2: 10 Gbps | USB 3.2 Gen 2×2: 20 Gbps | USB4 Gen 2×2: 20 Gbps | USB4 Gen 3×2: 40 Gbps",
    explanation: "USB 1.1: Low/Full speed (1.5/12 Mbps). USB 2.0: 480 Mbps. USB 3.2 Gen 1 (formerly USB 3.0): 5 Gbps. USB 3.2 Gen 2 (formerly USB 3.1): 10 Gbps. USB 3.2 Gen 2×2: 20 Gbps (USB-C only). USB4 Gen 2×2: 20 Gbps (USB-C, requires TB3/4 controller). USB4 Gen 3×2: 40 Gbps — same speed as Thunderbolt 3/4, requires USB-C. USB-C is a physical connector shape only; check device specs for actual USB version."
  },
  {
    id: 67,
    category: "3.0 Hardware",
    topic: "3.2 Peripheral Cables",
    question: "What is Thunderbolt and how has it evolved through versions 1–5?",
    answer: "High-speed serial connector. TB1/2: Mini DP, 20Gbps | TB3: 40Gbps, USB-C | TB4: 40Gbps, USB-C, stricter requirements | TB5: 120Gbps (80Gbps base), USB-C, PCIe 5.0",
    explanation: "Thunderbolt 1: 20 Gbps, Mini DisplayPort. TB2: 20 Gbps aggregated, Mini DP. TB3: 40 Gbps, USB-C connector, up to 6 daisy-chained devices. TB4: 40 Gbps, USB-C, dual 4K or single 8K display, mandatory PCIe 4.0 tunneling — stricter certification than TB3. TB5 (2024+): 80 Gbps base / 120 Gbps burst, USB-C, PCIe 5.0 tunneling, supports up to 240W power delivery, required for latest eGPU and high-bandwidth displays."
  },
  {
    id: 68,
    category: "3.0 Hardware",
    topic: "3.2 Video Cables",
    question: "What are HDMI, DisplayPort, DVI, and VGA?",
    answer: "HDMI: 19-pin digital audio+video, ~20m | DisplayPort: packetized digital A+V, locking | DVI: digital/analog video, no audio | VGA: DB-15 analog only, degrades 5-10m",
    explanation: "HDMI: 19-pin Type A, carries digital audio and video, ~20m signal range. DisplayPort: packetized A/V, compatible with HDMI/DVI via passive adapter, may have locking mechanism. DVI: single link (3.7 Gbps)/dual link (7.4 Gbps), no audio. VGA: DB-15 blue analog connector, video only, degrades after 5-10m."
  },
  {
    id: 69,
    category: "3.0 Hardware",
    topic: "3.2 Storage Cables",
    question: "What are the SATA revision speeds?",
    answer: "SATA 1.0: 1.5 Gbps | SATA 2.0: 3.0 Gbps | SATA 3.0: 6.0 Gbps | SATA 3.2: 16 Gbps | eSATA: matches version, 2m, different connector",
    explanation: "SATA revisions: 1.0 = 1.5 Gbps, 2.0 = 3.0 Gbps, 3.0 = 6.0 Gbps (most common), 3.2 = 16 Gbps, all with 1-meter cable limit. eSATA (external) matches SATA version speed, uses 2-meter cables, physically different connectors. Each SATA device uses one power and one data cable."
  },
  {
    id: 70,
    category: "3.0 Hardware",
    topic: "3.2 Copper Connectors",
    question: "What are RJ11, RJ45, and F-connectors used for?",
    answer: "RJ11: 6P2C telephone/DSL | RJ45: 8P8C Ethernet | F-connector: RG-6 coax for cable TV/DOCSIS",
    explanation: "RJ11 is a 6-position, 2-conductor modular connector for telephone and DSL. RJ45 is 8-position, 8-conductor for Ethernet. F-connector is threaded coaxial for cable television, cable modems, and DOCSIS."
  },
  {
    id: 71,
    category: "3.0 Hardware",
    topic: "3.2 Copper Connectors",
    question: "What is a Molex connector used for?",
    answer: "4-pin peripheral power connector providing +12V and +5V — powers storage devices, optical drives, fans, and other peripherals inside the PC case",
    explanation: "The Molex connector (from Molex Connector Company, also called AMP MATE-N-LOK) is a 4-pin power connector inside the computer case. It provides +12V and +5V to storage devices, optical drives, fans, and other peripherals."
  },
  {
    id: 72,
    category: "3.0 Hardware",
    topic: "3.2 Adapters and Converters",
    question: "What is the difference between an adapter and a converter?",
    answer: "Adapter: electrically compatible connector change (passive) — e.g., DVI-D to HDMI. Converter: changes signal format (active) — e.g., VGA analog to DVI digital",
    explanation: "An adapter simply changes the physical connector — DVI-D and HDMI are electrically compatible so a passive adapter works. A converter changes the actual signal format, requiring active electronics (e.g., VGA analog to DVI digital conversion)."
  },
  {
    id: 73,
    category: "3.0 Hardware",
    topic: "3.3 Memory Overview",
    question: "What is DRAM and why does it need constant refreshing?",
    answer: "Dynamic Random Access Memory — stores data as charges in capacitors that leak; must be constantly refreshed or data is lost",
    explanation: "DRAM stores data in capacitors that slowly leak charge. The memory controller must constantly refresh every cell or the data disappears. 'Random access' means any storage location can be accessed directly."
  },
  {
    id: 74,
    category: "3.0 Hardware",
    topic: "3.3 Memory Technologies",
    question: "What are the key differences between DDR3, DDR4, and DDR5 RAM?",
    answer: "DDR3: max 16GB/DIMM | DDR4: faster, max 64GB/DIMM | DDR5: fastest, max 64GB/DIMM, on-die ECC, new key position — none are interchangeable",
    explanation: "DDR3 max 16GB/DIMM. DDR4 increases speed and max capacity to 64GB/DIMM. DDR5 provides faster data transfers with 64GB/DIMM max, on-die ECC, and a moved key (notch). Each generation has no backwards compatibility — none are interchangeable."
  },
  {
    id: 75,
    category: "3.0 Hardware",
    topic: "3.3 Memory Technologies",
    question: "What is ECC memory and when is it used?",
    answer: "Error Correcting Code — detects and corrects single-bit errors on-the-fly; used in servers, VMs, and database systems requiring data integrity",
    explanation: "ECC memory adds extra bits to detect and automatically correct single-bit errors. Parity memory only detects errors but cannot correct them. ECC requires motherboard/CPU support and looks identical to non-ECC physically. Used in critical systems where data integrity is paramount."
  },
  {
    id: 76,
    category: "3.0 Hardware",
    topic: "3.3 Memory Technologies",
    question: "What is multi-channel memory and how does it improve performance?",
    answer: "Two or more independent memory buses operating simultaneously — dual-channel doubles bandwidth; modules should be identical pairs in color-coded slots",
    explanation: "Multi-channel memory runs multiple modules in parallel, widening the effective memory bus. Dual-channel uses two 64-bit buses simultaneously (128-bit total), doubling throughput. Modules should be identical (exact matches are best) and installed in color-coded paired slots."
  },
  {
    id: 77,
    category: "3.0 Hardware",
    topic: "3.4 Storage Devices",
    question: "What is NVMe and why is it faster than SATA for SSDs?",
    answer: "Non-Volatile Memory Express — designed for SSDs using PCIe bus; lower latency and higher throughput than SATA's AHCI limit of 600 MB/s",
    explanation: "SATA was designed for HDDs using AHCI, limited to ~600 MB/s. NVMe was designed specifically for SSDs using the PCIe Express bus, supporting much lower latency and higher throughput. Often connects via M.2 interface."
  },
  {
    id: 78,
    category: "3.0 Hardware",
    topic: "3.4 Storage Devices",
    question: "What is the M.2 interface and what are B-key and M-key?",
    answer: "Compact SSD form factor with no separate cables — B-key and M-key are connector notch types; M.2 doesn't guarantee NVMe (may still use AHCI)",
    explanation: "M.2 connects directly to the motherboard with no power or data cables. Can use PCIe (NVMe, 4+ GB/s) or SATA signals. Key type (B-key, M-key, or both) describes the physical connector notch. Important: M.2 does NOT guarantee NVMe — verify with documentation."
  },
  {
    id: 79,
    category: "3.0 Hardware",
    topic: "3.4 RAID",
    question: "What are RAID 0, RAID 1, RAID 5, and RAID 6?",
    answer: "RAID 0: striping (fast, zero redundancy) | RAID 1: mirroring (full redundancy, 2x space) | RAID 5: striping+parity (3+ disks, 1 failure ok) | RAID 6: 2 parity (4+ disks, 2 failures ok)",
    explanation: "RAID 0: high performance, no redundancy — one failure destroys the array. RAID 1: every file duplicated — high redundancy, doubles required disk space. RAID 5: blocks striped with distributed parity across 3+ disks — efficient, survives one failure. RAID 6: adds second parity block, needs 4+ disks, survives two simultaneous failures."
  },
  {
    id: 80,
    category: "3.0 Hardware",
    topic: "3.4 RAID",
    question: "What is RAID 1+0 (RAID 10) and what does it require?",
    answer: "A stripe of mirrors — combines RAID 0 speed with RAID 1 redundancy; requires minimum 4 drives. RAID is NOT backup.",
    explanation: "RAID 10 first creates RAID 1 mirror pairs, then stripes across them (RAID 0), giving both speed and redundancy. Requires 4+ drives. Critical reminder: RAID protects against drive failure only — it does NOT protect against accidental deletion, fire, or ransomware."
  },
  {
    id: 81,
    category: "3.0 Hardware",
    topic: "3.5 Motherboard Form Factors",
    question: "What are ATX, microATX, and ITX motherboard form factors?",
    answer: "ATX: full-size (Intel 1995), 24-pin power | microATX: smaller, fewer slots, backward-compatible | Mini-ITX: low-power, small, fits any ATX case",
    explanation: "ATX (Advanced Technology Extended) is the full-size Intel standard from 1995, 24-pin power. microATX (uATX/M-ATX) is smaller with fewer expansion slots but compatible mounting/power — very popular. Mini-ITX is a low-power small form factor, screw-compatible with ATX, used in media centers and compact systems."
  },
  {
    id: 82,
    category: "3.0 Hardware",
    topic: "3.5 Motherboard Expansion Slots",
    question: "What is PCIe and how do its versions differ?",
    answer: "Peripheral Component Interconnect Express — serial x1/x4/x8/x16 lanes. PCIe 3.0: ~1 GB/s/lane | PCIe 4.0: ~2 GB/s/lane | PCIe 5.0: ~4 GB/s/lane | PCIe 6.0: ~8 GB/s/lane",
    explanation: "PCIe uses independent serial lanes (x1, x4, x8, x16). Version bandwidth per lane: PCIe 3.0 ≈ 1 GB/s (x16 = 16 GB/s), PCIe 4.0 ≈ 2 GB/s (x16 = 32 GB/s), PCIe 5.0 ≈ 4 GB/s (x16 = 64 GB/s), PCIe 6.0 ≈ 8 GB/s. Cards are backward/forward compatible — a PCIe 5.0 NVMe SSD in a PCIe 3.0 slot runs at PCIe 3.0 speed. PCIe 5.0 slots are on current Intel/AMD platforms and used by the latest NVMe SSDs and GPUs."
  },
  {
    id: 83,
    category: "3.0 Hardware",
    topic: "3.5 The BIOS",
    question: "What is the difference between Legacy BIOS and UEFI BIOS?",
    answer: "Legacy BIOS: 25+ years old, 16-bit, limited hardware support. UEFI: modern, graphical+text, Secure Boot, large drive support (GPT), faster boot",
    explanation: "Legacy BIOS initializes hardware, runs POST, finds boot loader — limited modern drivers. UEFI (Unified Extensible Firmware Interface) replaces legacy BIOS, supports graphical interfaces, Secure Boot, GPT drives over 2TB, and faster boot times."
  },
  {
    id: 84,
    category: "3.0 Hardware",
    topic: "3.5 BIOS Settings",
    question: "What is Secure Boot and how does it protect a system?",
    answer: "UEFI feature that digitally signs known-good software — prevents unsigned/malicious bootloaders from running; verifies OS bootloader signature",
    explanation: "Secure Boot is part of UEFI. The BIOS includes the manufacturer's public key, checks digital signatures during updates, and prevents unauthorized flash writes. At boot, it verifies the OS bootloader's digital signature — must be signed with a trusted certificate or manually approved signature."
  },
  {
    id: 85,
    category: "3.0 Hardware",
    topic: "3.5 BIOS Settings",
    question: "What is the CMOS battery and what happens when it fails?",
    answer: "Small 'button' battery maintaining BIOS settings — when it fails, date/time and BIOS config resets every boot",
    explanation: "CMOS memory stores BIOS configuration and is backed by a small battery. When the battery fails, settings are lost on every shutdown — date/time resets, custom BIOS configurations are gone. Replace the battery to fix. Settings can also be reset with a jumper."
  },
  {
    id: 86,
    category: "3.0 Hardware",
    topic: "3.5 HSM and TPM",
    question: "What is a TPM and what security features does it provide?",
    answer: "Trusted Platform Module — cryptographic processor with unique device key, random number generator, enables per-device encryption (BitLocker) and Secure Boot",
    explanation: "TPM is a cryptographic processor on the motherboard. It includes random number generators, key generators, a unique secret key not available outside the device, and persistent/versatile memory. It links encryption to a specific computer — you can't move an encrypted drive to another machine without the TPM key."
  },
  {
    id: 87,
    category: "3.0 Hardware",
    topic: "3.5 HSM and TPM",
    question: "What is an HSM and how does it differ from a TPM?",
    answer: "Hardware Security Module — enterprise-grade crypto hardware for many systems (vs TPM which is per-device); protects CA keys in data centers",
    explanation: "While TPM is used on a single system for device encryption, HSM is used in large environments to secure data across many systems. HSMs are often deployed as plug-in cards or separate hardware in data centers. They perform cryptographic functions for other devices and protect the Certificate Authority key."
  },
  {
    id: 88,
    category: "3.0 Hardware",
    topic: "3.5 CPU Features",
    question: "What is the difference between 32-bit and 64-bit processors?",
    answer: "32-bit: max 4GB RAM (2^32 values). 64-bit: up to 17 billion GB RAM (2^64 values). 64-bit OS runs both 32-bit and 64-bit apps.",
    explanation: "32-bit processors can address only 4GB max RAM. 64-bit processors support 2^64 values — vastly more addressable memory. A 64-bit OS can run both 32-bit (installed to Program Files (x86)) and 64-bit applications. A 32-bit OS cannot run 64-bit apps."
  },
  {
    id: 89,
    category: "3.0 Hardware",
    topic: "3.5 CPU Features",
    question: "What is ARM architecture and where is it used in modern computing?",
    answer: "Advanced RISC Machine — simplified instruction set, low power, low heat; used in mobile, IoT, and now mainstream laptops (Apple M-series, Qualcomm Snapdragon X)",
    explanation: "ARM uses Reduced Instruction Set Computing (RISC): simplified instructions, highly efficient per watt. ARM Ltd. licenses designs to manufacturers. Used in: all smartphones/tablets, IoT devices, Apple Silicon (M1–M4), Qualcomm Snapdragon X Elite for Windows laptops, AWS Graviton servers. ARM64 (AArch64) is the 64-bit instruction set. Key exam point: ARM-based Windows laptops run x64 apps via emulation and native ARM64 apps natively."
  },
  {
    id: 90,
    category: "3.0 Hardware",
    topic: "3.5 Cooling",
    question: "What is thermal paste and how should it be applied?",
    answer: "Thermally conductive adhesive between CPU and heat sink — fills microscopic gaps to improve heat transfer; apply pea-sized amount",
    explanation: "Thermal paste fills microscopic surface imperfections between the CPU heat spreader and heat sink, eliminating insulating air gaps. Apply a pea-sized amount in the center — it spreads when the heat sink is pressed down. Too much can be as problematic as too little."
  },
  {
    id: 91,
    category: "3.0 Hardware",
    topic: "3.6 Computer Power",
    question: "What voltages does a computer power supply output and what uses each?",
    answer: "+12V: PCIe/drives/fans | +5V: motherboard components | +3.3V: M.2/RAM/logic | -12V: legacy LAN/serial | +5VSB: standby power",
    explanation: "+12V: PCIe adapters, drive motors, cooling fans, most modern components. +5V: some motherboard components. +3.3V: M.2 slots, RAM slots, logic circuits. -12V: integrated LAN, older serial ports. +5VSB (standby): maintains power when system is 'off' so the power button works."
  },
  {
    id: 92,
    category: "3.0 Hardware",
    topic: "3.6 Computer Power",
    question: "What is the US vs Europe electrical standard and why does it matter for PSUs?",
    answer: "US/Canada: 120V AC, 60Hz | Europe: 220-240V AC, 50Hz — plugging 120V PSU into 230V will destroy it",
    explanation: "US/Canada uses 110-120 VAC at 60 Hz. Europe uses 220-240 VAC at 50 Hz. Power supplies must match the local voltage. Dual-voltage PSUs switch automatically or manually. NEVER plug a 120V PSU into a 230V outlet."
  },
  {
    id: 93,
    category: "3.0 Hardware",
    topic: "3.6 Computer Power",
    question: "What is a modular power supply?",
    answer: "PSU where cables are added only as needed — fewer unused wires, better airflow, easier cable management; more expensive than fixed PSUs",
    explanation: "Fixed PSUs have all cables permanently attached — may have too many unused cables. Modular PSUs let you connect only needed cables (24-pin, PCIe, SATA, etc.), reducing clutter, improving airflow, and making installation easier. The trade-off is higher cost."
  },
  {
    id: 94,
    category: "3.0 Hardware",
    topic: "3.6 Computer Power",
    question: "What is a redundant power supply and what does hot-swappable mean?",
    answer: "Two+ PSUs each capable of 100% load (normally at 50%) — hot-swappable means replacing a failed PSU without powering down",
    explanation: "Redundant PSUs are used in servers where downtime is unacceptable. Each PSU can handle full load; normally they share (running ~50% each for efficiency). If one fails, the other takes full load. Hot-swappable means pulling and replacing the failed PSU while the server keeps running."
  },
  {
    id: 95,
    category: "3.0 Hardware",
    topic: "3.7 Multifunction Devices",
    question: "What is the difference between PCL and PostScript printer languages?",
    answer: "PCL (Printer Command Language): HP-created, widely used. PostScript: Adobe-created, high-end printers — driver must match printer language",
    explanation: "PCL (Printer Command Language) was created by Hewlett-Packard and is used across the industry. PostScript was created by Adobe and is popular with high-end printers. The driver must match the printer language — mismatched drivers produce garbage output."
  },
  {
    id: 96,
    category: "3.0 Hardware",
    topic: "3.7 Multifunction Devices",
    question: "What printer security features are available on modern MFDs?",
    answer: "User authentication, badging (badge-to-print), audit logs (event viewer), secured prints (passcode held at printer)",
    explanation: "Modern MFD security: Authentication ensures only authorized users manage the printer. Badging holds print jobs until the employee taps a badge — prevents sensitive documents sitting in the tray. Audit logs track usage (cost management, security). Secured prints hold the job until a passcode is entered at the printer."
  },
  {
    id: 97,
    category: "3.0 Hardware",
    topic: "3.8 Laser Printer Maintenance",
    question: "What are the six steps of the laser printing process?",
    answer: "1-Charging (drum negatively charged) → 2-Exposing (laser neutralizes charge) → 3-Developing (toner sticks) → 4-Transferring (toner to paper) → 5-Fusing (heat+pressure) → 6-Cleaning (drum cleaned)",
    explanation: "Laser process: (1) Charging: corona wire/roller gives drum uniform negative charge. (2) Exposing: laser neutralizes charge in image pattern. (3) Developing: negatively charged toner sticks to neutralized areas. (4) Transferring: toner transferred from drum to paper. (5) Fusing: heat and pressure permanently bond toner to paper. (6) Cleaning: drum cleaned for next cycle."
  },
  {
    id: 98,
    category: "3.0 Hardware",
    topic: "3.8 Laser Printer Maintenance",
    question: "What is included in a laser printer maintenance kit and when should it be performed?",
    answer: "Replacement feed rollers, new fuser unit, etc. — based on page counter; power down first (fuser units are HOT); reset page counter after",
    explanation: "Standard maintenance kits replace feed rollers, fuser unit, and other wear items. Check the printer's page counter to know when maintenance is due. Power down before replacing the fuser — it operates at very high temperatures. Reset the page counter after maintenance is complete."
  },
  {
    id: 99,
    category: "3.0 Hardware",
    topic: "3.8 Inkjet Printers",
    question: "What are the advantages and disadvantages of inkjet printers?",
    answer: "Pros: inexpensive, quiet, high-resolution. Cons: expensive proprietary ink, output eventually fades, clogs easily",
    explanation: "Inkjet printers are relatively inexpensive and quiet with high-resolution output. Disadvantages: proprietary ink cartridges are expensive, printed output eventually fades, and tiny nozzles clog easily if not used regularly. Uses CMYK (Cyan, Magenta, Yellow, Key/Black) cartridges."
  },
  {
    id: 100,
    category: "3.0 Hardware",
    topic: "3.8 Thermal Printers",
    question: "How does a thermal printer work and where is it commonly used?",
    answer: "Heat-sensitive thermal paper turns black when heated — no ink needed; used in cash registers and credit card terminals; paper sensitive to light/heat",
    explanation: "Thermal printers use heat to activate specially coated thermal paper — no ink, toner, or ribbons. A full-length heating element (no moving print head) creates the image. Very quiet. Common in cash registers and credit card terminals. Disadvantage: paper is sensitive to light and heat, and output fades over time."
  },
  {
    id: 101,
    category: "3.0 Hardware",
    topic: "3.8 Impact Printers",
    question: "What is a dot-matrix (impact) printer best suited for and what are its characteristics?",
    answer: "Best for carbon/multi-part forms — pins hit ribbon to mark paper; low cost/page, NOISY, poor graphics; uses tractor feed for continuous paper",
    explanation: "Dot-matrix printers use pins pressing against a ribbon to impact multiple sheets — ideal for carbon copies/multipart forms. Advantages: good for carbon copies, low cost per page. Disadvantages: very noisy, poor graphics quality. Uses tractor feed (holes on paper sides) for continuous forms."
  },

  // ─────────────────────────────────────────────
  // 4.0 VIRTUALIZATION AND CLOUD
  // ─────────────────────────────────────────────
  {
    id: 102,
    category: "4.0 Virtualization & Cloud",
    topic: "4.1 Virtualization Concepts",
    question: "What is a sandbox in virtualization?",
    answer: "Isolated virtual environment with no connection to production — safe space for development, testing, and running untrusted code with rollback capability",
    explanation: "A sandbox is an isolated testing environment with no connection to production. Developers can try/break code and roll back to snapshots without consequences. Used for software development, security research, testing application compatibility, and running legacy software."
  },
  {
    id: 103,
    category: "4.0 Virtualization & Cloud",
    topic: "4.1 Virtualization Services",
    question: "What is the difference between a Type 1 and Type 2 hypervisor?",
    answer: "Type 1 (Bare Metal): runs directly on hardware — VMware ESXi, Hyper-V, Xen. Type 2 (Hosted): runs on top of existing OS — VMware Workstation, VirtualBox, Parallels",
    explanation: "Type 1 (Bare Metal): hypervisor installs directly on hardware, best performance, used in enterprise data centers. Type 2 (Hosted): runs as an application on an existing OS (Windows/macOS/Linux), easier for personal/testing use. Examples: VirtualBox, VMware Workstation, Parallels Desktop."
  },
  {
    id: 104,
    category: "4.0 Virtualization & Cloud",
    topic: "4.1 Virtualization Services",
    question: "What CPU technologies support virtualization?",
    answer: "Intel Virtualization Technology (VT) or AMD Virtualization (AMD-V) — must be enabled in BIOS/UEFI",
    explanation: "Hardware virtualization support is required for efficient VM performance. Intel calls it Intel VT; AMD calls it AMD-V. Must be enabled in BIOS/UEFI. Resource requirements: CPU with virtualization support, memory beyond host OS needs, disk space per guest OS, and configurable virtual networking."
  },
  {
    id: 105,
    category: "4.0 Virtualization & Cloud",
    topic: "4.1 Virtualization Services",
    question: "What is VM escaping and why is it a security concern?",
    answer: "Malware in a VM detects virtualization, compromises the hypervisor, and jumps to another guest OS or host — can expose all VMs on the same host",
    explanation: "VM escaping is when malware exploits a hypervisor vulnerability to move from one VM to another or to the host. This is a critical concern in multi-tenant cloud environments where multiple customers share the same physical hardware — malware on one VM could potentially access another customer's data."
  },
  {
    id: 106,
    category: "4.0 Virtualization & Cloud",
    topic: "4.1 Virtualization Services",
    question: "What is VDI (Virtual Desktop Infrastructure)?",
    answer: "Applications run on a remote server (Desktop as a Service) — minimal client hardware; requires strong network connectivity since everything runs across the wire",
    explanation: "VDI runs applications on a remote server. The client only needs to display output (DaaS). Benefits: minimal client hardware requirements, centralized management, easy updates. Drawback: requires reliable network — everything happens across the connection."
  },
  {
    id: 107,
    category: "4.0 Virtualization & Cloud",
    topic: "4.2 Cloud Models",
    question: "What are the four cloud deployment models?",
    answer: "Private: own virtualized data center | Public: over internet (AWS/Azure) | Hybrid: mix of public+private | Community: shared by organizations",
    explanation: "Private: your own virtualized data center — full control, pay everything upfront. Public: available to everyone (AWS, Azure, GCP) — third-party infrastructure, metered or upfront cost. Hybrid: combination of public and private. Community: multiple organizations with common interests share resources."
  },
  {
    id: 108,
    category: "4.0 Virtualization & Cloud",
    topic: "4.2 Cloud Models",
    question: "What are IaaS, PaaS, and SaaS?",
    answer: "IaaS: you manage VMs/OS/apps (AWS EC2) | PaaS: provider manages platform, you develop (SalesForce) | SaaS: fully managed apps (Gmail, Microsoft 365)",
    explanation: "IaaS (Infrastructure as a Service): you outsource hardware but manage OS, apps, and security. PaaS (Platform as a Service): provider manages infrastructure and platform — you handle development only. SaaS (Software as a Service): fully on-demand software, no installation needed (Google Mail, Microsoft 365)."
  },
  {
    id: 109,
    category: "4.0 Virtualization & Cloud",
    topic: "4.2 Cloud Characteristics",
    question: "What are the key characteristics of cloud computing?",
    answer: "Elasticity (scale instantly), Availability (always-on/redundant), File synchronization (multi-location data), Multitenancy (shared infrastructure), Metered or non-metered billing",
    explanation: "Cloud characteristics: Elasticity — scale resources up/down instantly. Availability — redundancy keeps systems always available. File synchronization — data duplicated across cloud locations. Multitenancy — many clients share the same underlying infrastructure. Billing can be metered (pay per use) or non-metered (flat block rate)."
  },

  // ─────────────────────────────────────────────
  // 5.0 TROUBLESHOOTING
  // ─────────────────────────────────────────────
  {
    id: 110,
    category: "5.0 Troubleshooting",
    topic: "5.1 Troubleshooting Hardware",
    question: "What is POST and what does it test?",
    answer: "Power-On Self Test — BIOS tests CPU, CMOS, video, and memory before booting OS; failures signaled by beep codes or LED indicators",
    explanation: "POST runs when the computer is powered on. BIOS tests major system components: CPU, CMOS, video, and memory. Failures noted with beep codes and/or status codes (vary by BIOS manufacturer). A successful POST passes control to the boot loader to start the OS."
  },
  {
    id: 111,
    category: "5.0 Troubleshooting",
    topic: "5.1 Troubleshooting Hardware",
    question: "What does a BSOD indicate and how do you troubleshoot it?",
    answer: "Windows Stop Error — bad hardware/drivers/application; info in event log; try Last Known Good, System Restore, Safe Mode, rollback driver, or run hardware diagnostics",
    explanation: "A BSOD (Blue Screen of Death) indicates a critical system failure. Diagnostic info is also written to the event log. Troubleshooting: Last Known Good Configuration, System Restore, Rollback Driver, Safe Mode. If hardware-related, reseat or remove the hardware. Run manufacturer/BIOS hardware diagnostics."
  },
  {
    id: 112,
    category: "5.0 Troubleshooting",
    topic: "5.1 Troubleshooting Hardware",
    question: "What causes unusual computer noises and what does each indicate?",
    answer: "Rattling: loose components | Scraping: hard drive issues (backup immediately!) | Clicking: fan problems | Popping: blown capacitor",
    explanation: "Computers should hum — any other sound warrants investigation. Rattling: loose components inside. Scraping: hard drive head/platter issues — back up immediately. Clicking: failing fan bearing. Popping: blown capacitor on motherboard or component."
  },
  {
    id: 113,
    category: "5.0 Troubleshooting",
    topic: "5.1 Troubleshooting Hardware",
    question: "What does smoke or a burning smell from a computer indicate?",
    answer: "Electrical problem — disconnect power immediately, locate and replace all damaged components; there should NEVER be a burned odor",
    explanation: "Smoke or burning smell is a serious electrical problem. Immediately disconnect power. Even after cooling, locate and replace all damaged components. Do not attempt to run a system that has emitted smoke."
  },
  {
    id: 114,
    category: "5.0 Troubleshooting",
    topic: "5.1 Troubleshooting Hardware",
    question: "What are the common causes of sluggish computer performance?",
    answer: "High CPU/I/O (check Task Manager), pending Windows updates, low disk space, CPU throttling from power-saving mode, or malware",
    explanation: "Troubleshoot sluggish performance: (1) Task Manager — check CPU/I/O utilization. (2) Install Windows Updates — often include driver fixes. (3) Check disk space. (4) On laptops, check power-saving mode throttling. (5) Run anti-virus/anti-malware scan."
  },
  {
    id: 115,
    category: "5.0 Troubleshooting",
    topic: "5.1 Troubleshooting Hardware",
    question: "What does an inaccurate system date/time at every boot indicate?",
    answer: "Failing CMOS battery on the motherboard — replace the small button-style battery",
    explanation: "If the system date/time resets on every boot, the CMOS battery that maintains BIOS settings is failing. Replace the button-style battery on the motherboard. On older systems this also resets all BIOS configuration; newer computers use a jumper to reset settings."
  },
  {
    id: 116,
    category: "5.0 Troubleshooting",
    topic: "5.2 Troubleshooting Storage Devices",
    question: "What are common symptoms of a failing hard drive?",
    answer: "Clicking/scraping sounds, read errors/data corruption, slow performance (retrying bad sectors), OS can't find drive, S.M.A.R.T. errors",
    explanation: "HDD failure symptoms: clicking or scraping sounds (mechanical failure), read/write errors and data corruption, slow performance as drive retries bad sectors, inability to boot or BIOS can't find the drive, and S.M.A.R.T. (Self-Monitoring Analysis and Reporting Technology) error warnings. Back up immediately at first signs."
  },
  {
    id: 117,
    category: "5.0 Troubleshooting",
    topic: "5.3 Troubleshooting Display Issues",
    question: "What are common display troubleshooting steps for a blank screen?",
    answer: "Check power and signal cable → verify input source → check brightness → swap monitor → test on another computer → try VGA mode (F8) if no video after Windows loads",
    explanation: "Blank screen steps: (1) Check both power and signal cables. (2) Verify correct input source (HDMI, DVI, VGA). (3) Check brightness — may be too dim. (4) Swap with a known-good monitor. (5) Test monitor on another computer. (6) If video works during POST but not Windows, try VGA mode (F8)."
  },
  {
    id: 118,
    category: "5.0 Troubleshooting",
    topic: "5.5 Troubleshooting Networks",
    question: "What does an APIPA address (169.254.x.x) indicate during troubleshooting?",
    answer: "Device could not reach a DHCP server — check network connection, verify DHCP server is running, check VLAN/firewall configuration",
    explanation: "A 169.254.x.x address means Windows assigned APIPA because no DHCP server responded. Troubleshoot: verify cable is connected, check switch port activity, verify DHCP server is running, confirm device can reach DHCP server (check firewall/VLAN config)."
  },
  {
    id: 119,
    category: "5.0 Troubleshooting",
    topic: "5.5 Troubleshooting Networks",
    question: "What are the common network troubleshooting steps when a device has no connectivity?",
    answer: "Physical layer → IP config (ipconfig) → ping 127.0.0.1 → ping gateway → ping external IP → test DNS → check firewall",
    explanation: "Network troubleshooting order: (1) Check physical — cable, port lights, switch. (2) Verify IP config — correct IP, subnet, gateway, DNS. (3) Ping loopback 127.0.0.1 — tests TCP/IP stack. (4) Ping default gateway — tests local network. (5) Ping external IP — tests routing. (6) Test DNS name resolution. (7) Check firewall rules."
  },
  {
    id: 120,
    category: "5.0 Troubleshooting",
    topic: "5.6 Troubleshooting Printers",
    question: "What are common laser printer print quality issues and their causes?",
    answer: "Faded: low toner or calibration. Smearing: fuser issue. Ghost images: drum not cleaning. Vertical streaks: dirty/damaged drum or OPC",
    explanation: "Laser quality issues: Faded output — low toner (not empty) or density calibration needed. Smearing/smudging — fuser unit not applying enough heat/pressure, needs replacement. Ghost images (previous page repeating) — drum not cleaning properly. Vertical streaks — dirty drum, damaged toner cartridge, or scratched OPC drum."
  },
  {
    id: 121,
    category: "5.0 Troubleshooting",
    topic: "5.6 Troubleshooting Printers",
    question: "What is the first step when a printer shows 'no connectivity' on a network?",
    answer: "Print test page to get IP → ping the IP → verify IP is static or DHCP-reserved → check firewall (ports 515/LPD, 631/IPP, 9100/RAW)",
    explanation: "Printer network troubleshooting: (1) Print a test page from front panel to find its IP. (2) Ping the printer's IP. (3) Ensure IP hasn't changed — use DHCP reservation or static IP for printers. (4) Check firewall — allow printing ports (515/LPD, 631/IPP, 9100 RAW)."
  },
  {
    id: 122,
    category: "5.0 Troubleshooting",
    topic: "5.4 Troubleshooting Mobile Devices",
    question: "What are common mobile device troubleshooting techniques?",
    answer: "Soft reset → check OS/app updates → clear app cache → factory reset (last resort — backup first)",
    explanation: "Mobile troubleshooting: soft reset (power cycle) resolves many transient issues. Check OS and app updates — bugs are often patched. Clear app cache for specific app problems. Factory reset is the last resort — it erases all data and returns device to factory state (always back up first)."
  },

  // ─────────────────────────────────────────────
  // Additional Key Concepts
  // ─────────────────────────────────────────────
  {
    id: 123,
    category: "2.0 Networking",
    topic: "2.5 Network Devices",
    question: "What is a patch panel and why is it used?",
    answer: "Combination of punch-down blocks and RJ-45 connectors — permanently punches desk cable runs; patch cables to switch can be easily changed",
    explanation: "A patch panel centralizes cable management. Permanent cable runs from workstations are punched to the back once. The front RJ-45 ports connect to the switch via short patch cables. Changes to workstation-to-switch connections require only replacing a patch cable — no re-running cable through walls."
  },
  {
    id: 124,
    category: "3.0 Hardware",
    topic: "3.2 Network Cables",
    question: "What is coaxial cable (RG-6) and what are its main uses?",
    answer: "Cable with inner conductor, dielectric insulator, metal shielding, and plastic jacket — RG-6 for cable TV, DOCSIS modems, and cable internet up to 1 Gbps+",
    explanation: "Coaxial cable has two conductors sharing a common axis: inner conductor, dielectric insulator, metal shielding, and outer plastic jacket. RG-6 is used for television/digital cable, DOCSIS cable modems, and cable internet. Provides broadband across multiple frequencies."
  },
  {
    id: 125,
    category: "1.0 Mobile Devices",
    topic: "1.2 Connecting Mobile Devices",
    question: "What is mobile hotspot/tethering?",
    answer: "Turns a smartphone into a personal Wi-Fi router — extends cellular data to other devices; may require additional carrier charges",
    explanation: "A mobile hotspot turns your phone into a personal wireless router, extending cellular data to nearby Wi-Fi devices. Also possible via USB or Bluetooth tethering. Dependent on carrier — may require additional charges or limit hotspot data speeds. Uses your cellular data plan."
  },
  {
    id: 126,
    category: "3.0 Hardware",
    topic: "3.5 BIOS Settings",
    question: "What is virtualization support in BIOS and why might you need to enable it?",
    answer: "Intel VT or AMD-V hardware virtualization — must be enabled in BIOS/UEFI for hypervisors to run VMs efficiently (required by Hyper-V, VMware, VirtualBox 64-bit)",
    explanation: "Hardware virtualization allows the hypervisor to run multiple OS instances efficiently. Often disabled by default in BIOS. To enable: enter BIOS/UEFI, find Virtualization/VT-x/AMD-V setting. Required by: Windows Hyper-V, VMware, VirtualBox (64-bit guests), and WSL2."
  },
  {
    id: 127,
    category: "3.0 Hardware",
    topic: "3.8 Inkjet Printer Maintenance",
    question: "What are the key maintenance tasks for an inkjet printer?",
    answer: "Clean print heads (auto or manual), replace CMYK cartridges, calibrate/align nozzles, clear paper jams carefully",
    explanation: "Inkjet maintenance: many printers auto-clean heads daily — streaks indicate clogged heads, run manual cleaning. Replace individual CMYK cartridges. Calibrate nozzles for crisp, non-overlapping colors. For paper jams: remove all loose paper without ripping, check for remaining scraps."
  },
  {
    id: 128,
    category: "3.0 Hardware",
    topic: "3.8 Thermal Printer Maintenance",
    question: "What are the key maintenance tasks for a thermal printer?",
    answer: "Replace thermal paper (cannot substitute other paper), clean heating element with IPA, avoid hot areas that could pre-darken paper",
    explanation: "Thermal maintenance: replace thermal paper when empty (cannot substitute regular paper — keep a list of sizes). Clean heating element with liquid cleaner/IPA, use a cleaning card for head and paper pathways. Thermal paper is sensitive to heat — keep printers away from car dashboards, radiators, and hair dryers."
  },
  {
    id: 129,
    category: "3.0 Hardware",
    topic: "3.4 Storage Devices",
    question: "What are optical drives and what formats do they support?",
    answer: "Laser reads microscopic bumps — formats: CD-ROM (~700MB), DVD-ROM (~4.7GB/8.5GB dual), Blu-ray (~25GB); relatively slow, used for archival/installation",
    explanation: "Optical drives use a laser to read microscopic bumps (binary data) on rotating discs. CD-ROM (~700MB), DVD-ROM (4.7GB single, 8.5GB dual layer), Blu-ray (~25GB). Relatively slow, used as archival media or application installation. Less common today as software distribution shifted to downloads."
  },
  {
    id: 130,
    category: "3.0 Hardware",
    topic: "3.4 Storage Devices",
    question: "What is flash memory and what are its limitations?",
    answer: "EEPROM non-volatile memory — no power to retain data, limited write cycles, not designed for archival storage; always have a backup",
    explanation: "Flash memory (EEPROM — Electrically Erasable Programmable Read-Only Memory) is non-volatile — no power required to retain data. Limited number of write cycles (can still read after writes are exhausted). Not designed for long-term archival storage — easy to lose or damage. Always maintain a backup."
  },

  // ─────────────────────────────────────────────
  // NEW 220-1201 OBJECTIVES
  // ─────────────────────────────────────────────
  {
    id: 131,
    category: "3.0 Hardware",
    topic: "3.2 Peripheral Cables",
    question: "What is USB4 and how does it differ from USB 3.2?",
    answer: "USB4 uses Thunderbolt 3 protocol over USB-C; Gen 2×2: 20 Gbps, Gen 3×2: 40 Gbps — requires USB-C, doubles bandwidth of USB 3.2",
    explanation: "USB4 is based on the Thunderbolt 3 protocol and requires a USB-C connector. USB4 Gen 2×2 reaches 20 Gbps; USB4 Gen 3×2 reaches 40 Gbps — matching Thunderbolt 3/4 speeds. USB4 also supports video output (DisplayPort, HDMI via alt mode) and PCIe tunneling. Always check the device's spec sheet — a USB-C port does NOT guarantee USB4 speed."
  },
  {
    id: 132,
    category: "3.0 Hardware",
    topic: "3.3 Memory Technologies",
    question: "What is LPDDR5 memory and where is it used?",
    answer: "Low Power DDR5 — soldered laptop/mobile RAM running at lower voltage (1.1V vs 1.1V DDR5); faster and more power-efficient than LPDDR4X; used in ultrabooks and ARM laptops",
    explanation: "LPDDR (Low Power Double Data Rate) memory is soldered directly to the motherboard in laptops, tablets, and smartphones to save space and power. LPDDR5 offers speeds up to 6400 MT/s with better power efficiency than LPDDR4X. It is common in Qualcomm Snapdragon X, Apple M-series, and thin-and-light Intel/AMD laptops. Because it is soldered, it cannot be upgraded — capacity is fixed at purchase."
  },
  {
    id: 133,
    category: "3.0 Hardware",
    topic: "3.4 Storage Devices",
    question: "What is NVMe 2.0 and what new features does it add over NVMe 1.x?",
    answer: "NVMe 2.0 (2021+) adds: Zoned Namespace (ZNS) for SSDs, Key Value storage, new command sets for hard drives and optical media, and improved PCIe 5.0 support",
    explanation: "NVMe 2.0 is the updated NVMe specification released in 2021. Key additions: Zoned Namespace (ZNS) command set allows drives to be managed in zones for better SSD longevity and throughput. Key Value (KV) command set optimizes NoSQL-style storage. Command sets for HDDs and Fabrics (NVMe-oF). NVMe 2.0 also officially supports PCIe 5.0, enabling consumer SSDs exceeding 12 GB/s read speeds. Most modern high-end M.2 SSDs are NVMe 2.0 compatible."
  },
  {
    id: 134,
    category: "3.0 Hardware",
    topic: "3.5 CPU Features",
    question: "What is an NPU and why is it included in modern processors?",
    answer: "Neural Processing Unit — dedicated AI/ML inference accelerator built into the CPU/SoC; offloads AI workloads from CPU/GPU for efficiency (Copilot+ PC requirement)",
    explanation: "An NPU (Neural Processing Unit) is a specialized processor core designed to accelerate machine learning inference operations (matrix math, tensor operations). Modern SoCs include NPUs: Apple M-series, Qualcomm Snapdragon X Elite, AMD Ryzen AI, Intel Core Ultra (Meteor Lake+). Microsoft's Copilot+ PC requirement mandates 40+ TOPS (Tera Operations Per Second) NPU performance. NPUs enable local AI features like Windows Studio Effects, real-time translation, and AI image generation without internet connectivity."
  },
  {
    id: 135,
    category: "2.0 Networking",
    topic: "2.2 Wireless Network Technologies",
    question: "What are the key new features of Wi-Fi 7 (802.11be) compared to Wi-Fi 6E?",
    answer: "Multi-Link Operation (MLO): simultaneous use of multiple bands; 320 MHz channels; 4096-QAM; up to 46 Gbps theoretical — major improvement in latency and throughput",
    explanation: "Wi-Fi 7 (802.11be) improvements over Wi-Fi 6/6E: Multi-Link Operation (MLO) allows a device to transmit and receive simultaneously across 2.4, 5, and 6 GHz bands — reducing latency and increasing throughput. 320 MHz channel width (vs 160 MHz in Wi-Fi 6E) doubles bandwidth. 4096-QAM modulation (vs 1024-QAM) increases data density. Up to 16 spatial streams. Theoretical max ~46 Gbps. Key exam point: MLO is the signature feature of Wi-Fi 7."
  },
  {
    id: 136,
    category: "1.0 Mobile Devices",
    topic: "1.1 Laptop Hardware",
    question: "What are the key hardware considerations for ARM-based Windows laptops?",
    answer: "ARM64 apps run natively; x64 apps run via emulation (slower); x86-32 apps supported; no legacy x64 drivers — check hardware compatibility before deployment",
    explanation: "ARM-based Windows laptops (Qualcomm Snapdragon X, Microsoft Surface Pro X) run ARM64 apps natively at full speed. x64 (Intel/AMD) apps run through Rosetta-like emulation — functional but with performance overhead. 32-bit x86 apps also supported via emulation. Critical limitation: x64 kernel drivers (antivirus, hardware tools) may not work — organizations must verify software compatibility. Apple Silicon (M-series) runs macOS natively and Windows via virtualization."
  },
  {
    id: 137,
    category: "4.0 Virtualization & Cloud",
    topic: "4.2 Cloud Models",
    question: "What is Infrastructure as Code (IaC) and why is it important in cloud environments?",
    answer: "Managing infrastructure through code/scripts rather than manual configuration — enables repeatable, version-controlled, automated deployments (Terraform, Ansible, ARM templates)",
    explanation: "Infrastructure as Code (IaC) treats infrastructure configuration as software: written in files, stored in version control (Git), reviewed, and automatically applied. Tools include: Terraform (multi-cloud), Ansible (agentless configuration), AWS CloudFormation, Azure Resource Manager (ARM) templates. IaC ensures environments are consistent (no manual configuration drift), deployments are repeatable, and changes are auditable. Key exam concept: IaC is a foundational practice in DevOps and cloud operations."
  },
  {
    id: 138,
    category: "5.0 Troubleshooting",
    topic: "5.1 Troubleshooting Hardware",
    question: "A system with a modern PCIe 5.0 NVMe SSD installed runs much slower than expected. What are likely causes?",
    answer: "BIOS slot not configured for PCIe 5.0, insufficient cooling (PCIe 5.0 SSDs run very hot), M.2 slot on PCIe 3.0/4.0 lanes, or PCIe bifurcation settings",
    explanation: "PCIe 5.0 NVMe SSDs reach 12+ GB/s but have specific requirements: the M.2 slot must be wired to PCIe 5.0 lanes from the CPU (not chipset lanes which are typically PCIe 4.0 or 3.0). Check BIOS for PCIe bifurcation and generation settings. PCIe 5.0 SSDs generate significant heat — a heatsink or active cooler is often required to sustain peak speeds. Verify the SSD is recognized at its correct PCIe generation in BIOS before OS troubleshooting."
  },
];

export const categories = [...new Set(questions.map(q => q.category))];
export const topics = [...new Set(questions.map(q => q.topic))];
