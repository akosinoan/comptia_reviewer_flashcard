// Acronym data for CompTIA A+ Core 1 (220-1201)
export const ACRONYMS = [
  // ── Networking ────────────────────────────────────────────────────────────
  // Area Networks
  {
    acronym: "PAN",
    definition: "Personal Area Network",
    category: "Networking",
    subcategory: "Area Networks",
  },
  {
    acronym: "LAN",
    definition: "Local Area Network",
    category: "Networking",
    subcategory: "Area Networks",
  },
  {
    acronym: "MAN",
    definition: "Metropolitan Area Network",
    category: "Networking",
    subcategory: "Area Networks",
  },
  {
    acronym: "WAN",
    definition: "Wide Area Network",
    category: "Networking",
    subcategory: "Area Networks",
  },
  {
    acronym: "VLAN",
    definition: "Virtual Local Area Network",
    category: "Networking",
    subcategory: "Area Networks",
  },
  {
    acronym: "SAN",
    definition: "Storage Area Network",
    category: "Networking",
    subcategory: "Area Networks",
  },
  {
    acronym: "SOHO",
    definition: "Small Office/Home Office",
    category: "Networking",
    subcategory: "Area Networks",
  },
  // Core Protocols
  {
    acronym: "IP",
    definition: "Internet Protocol",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "TCP",
    definition: "Transmission Control Protocol",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "TCP/IP",
    definition: "Transmission Control Protocol/Internet Protocol",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "UDP",
    definition: "User Datagram Protocol",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "PPP",
    definition: "Point-to-Point Protocol",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "IPSec",
    definition: "Internet Protocol Security",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "ARP",
    definition: "Address Resolution Protocol",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "NAT",
    definition: "Network Address Translation",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "APIPA",
    definition: "Automatic Private Internet Protocol Addressing",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "DHCP",
    definition: "Dynamic Host Configuration Protocol",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  {
    acronym: "DNS",
    definition: "Domain Name System",
    category: "Networking",
    subcategory: "Core Protocols",
  },
  // Web & Security Protocols
  {
    acronym: "HTTP",
    definition: "Hypertext Transfer Protocol",
    category: "Networking",
    subcategory: "Web & Security Protocols",
  },
  {
    acronym: "HTTPS",
    definition: "Hypertext Transfer Protocol Secure",
    category: "Networking",
    subcategory: "Web & Security Protocols",
  },
  {
    acronym: "SSL",
    definition: "Secure Sockets Layer",
    category: "Networking",
    subcategory: "Web & Security Protocols",
  },
  {
    acronym: "TLS",
    definition: "Transport Layer Security",
    category: "Networking",
    subcategory: "Web & Security Protocols",
  },
  // File Transfer
  {
    acronym: "FTP",
    definition: "File Transfer Protocol",
    category: "Networking",
    subcategory: "File Transfer",
  },
  {
    acronym: "SFTP",
    definition: "Secure File Transfer Protocol",
    category: "Networking",
    subcategory: "File Transfer",
  },
  {
    acronym: "TFTP",
    definition: "Trivial File Transfer Protocol",
    category: "Networking",
    subcategory: "File Transfer",
  },
  {
    acronym: "SMB",
    definition: "Server Message Block",
    category: "Networking",
    subcategory: "File Transfer",
  },
  {
    acronym: "CIFS",
    definition: "Common Internet File System",
    category: "Networking",
    subcategory: "File Transfer",
  },
  {
    acronym: "NFS",
    definition: "Network File System",
    category: "Networking",
    subcategory: "File Transfer",
  },
  // Email
  {
    acronym: "SMTP",
    definition: "Simple Mail Transfer Protocol",
    category: "Networking",
    subcategory: "Email",
  },
  {
    acronym: "IMAP",
    definition: "Internet Mail Access Protocol",
    category: "Networking",
    subcategory: "Email",
  },
  {
    acronym: "POP3",
    definition: "Post Office Protocol 3",
    category: "Networking",
    subcategory: "Email",
  },
  {
    acronym: "MX",
    definition: "Mail Exchange",
    category: "Networking",
    subcategory: "Email",
  },
  {
    acronym: "DKIM",
    definition: "DomainKeys Identified Mail",
    category: "Networking",
    subcategory: "Email",
  },
  {
    acronym: "DMARC",
    definition:
      "Domain-based Message Authentication, Reporting, and Conformance",
    category: "Networking",
    subcategory: "Email",
  },
  {
    acronym: "SPF",
    definition: "Sender Policy Framework",
    category: "Networking",
    subcategory: "Email",
  },
  // Remote Access
  {
    acronym: "SSH",
    definition: "Secure Shell",
    category: "Networking",
    subcategory: "Remote Access",
  },
  {
    acronym: "RDP",
    definition: "Remote Desktop Protocol",
    category: "Networking",
    subcategory: "Remote Access",
  },
  {
    acronym: "VNC",
    definition: "Virtual Network Computer",
    category: "Networking",
    subcategory: "Remote Access",
  },
  {
    acronym: "VPN",
    definition: "Virtual Private Network",
    category: "Networking",
    subcategory: "Remote Access",
  },
  {
    acronym: "VoIP",
    definition: "Voice over Internet Protocol",
    category: "Networking",
    subcategory: "Remote Access",
  },
  // Directory & Auth
  {
    acronym: "AAA",
    definition: "Authentication, Authorization, and Accounting",
    category: "Networking",
    subcategory: "Directory & Auth",
  },
  {
    acronym: "LDAP",
    definition: "Lightweight Directory Access Protocol",
    category: "Networking",
    subcategory: "Directory & Auth",
  },
  {
    acronym: "RADIUS",
    definition: "Remote Authentication Dial-in User Service",
    category: "Networking",
    subcategory: "Directory & Auth",
  },
  {
    acronym: "TACACS",
    definition: "Terminal Access Controller Access-Control System",
    category: "Networking",
    subcategory: "Directory & Auth",
  },
  // Network Infrastructure
  {
    acronym: "NIC",
    definition: "Network Interface Card",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "MAC",
    definition: "Media Access Control",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "ISP",
    definition: "Internet Service Provider",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "ONT",
    definition: "Optical Network Terminal",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "DSL",
    definition: "Digital Subscriber Line",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "SDN",
    definition: "Software-defined Networking",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "SNMP",
    definition: "Simple Network Management Protocol",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "SNTP",
    definition: "Simple Network Time Protocol",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "UNC",
    definition: "Universal Naming Convention",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "UPnP",
    definition: "Universal Plug and Play",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "NetBIOS",
    definition: "Networked Basic Input/Output System",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },
  {
    acronym: "NetBT",
    definition: "NetBIOS over TCP/IP",
    category: "Networking",
    subcategory: "Network Infrastructure",
  },

  // ── Wireless & Mobile ─────────────────────────────────────────────────────
  // Wireless Network
  {
    acronym: "AP",
    definition: "Access Point",
    category: "Wireless & Mobile",
    subcategory: "Wireless Network",
  },
  {
    acronym: "SSID",
    definition: "Service Set Identifier",
    category: "Wireless & Mobile",
    subcategory: "Wireless Network",
  },
  {
    acronym: "WLAN",
    definition: "Wireless Local Area Network",
    category: "Wireless & Mobile",
    subcategory: "Wireless Network",
  },
  {
    acronym: "WMN",
    definition: "Wireless Mesh Network",
    category: "Wireless & Mobile",
    subcategory: "Wireless Network",
  },
  {
    acronym: "WISP",
    definition: "Wireless Internet Service Provider",
    category: "Wireless & Mobile",
    subcategory: "Wireless Network",
  },
  // Wireless Security
  {
    acronym: "WEP",
    definition: "Wired Equivalent Privacy",
    category: "Wireless & Mobile",
    subcategory: "Wireless Security",
  },
  {
    acronym: "WPA",
    definition: "WiFi Protected Access",
    category: "Wireless & Mobile",
    subcategory: "Wireless Security",
  },
  {
    acronym: "TKIP",
    definition: "Temporal Key Integrity Protocol",
    category: "Wireless & Mobile",
    subcategory: "Wireless Security",
  },
  // Cellular
  {
    acronym: "GSM",
    definition: "Global System for Mobile Communications",
    category: "Wireless & Mobile",
    subcategory: "Cellular",
  },
  {
    acronym: "CDMA",
    definition: "Code-Division Multiple Access",
    category: "Wireless & Mobile",
    subcategory: "Cellular",
  },
  {
    acronym: "WWAN",
    definition: "Wireless Wide Area Network",
    category: "Wireless & Mobile",
    subcategory: "Cellular",
  },
  {
    acronym: "SIM",
    definition: "Subscriber Identity Module",
    category: "Wireless & Mobile",
    subcategory: "Cellular",
  },
  {
    acronym: "SMS",
    definition: "Short Message Service",
    category: "Wireless & Mobile",
    subcategory: "Cellular",
  },
  {
    acronym: "PRL",
    definition: "Preferred Roaming List",
    category: "Wireless & Mobile",
    subcategory: "Cellular",
  },
  // Short-Range
  {
    acronym: "NFC",
    definition: "Near-field Communication",
    category: "Wireless & Mobile",
    subcategory: "Short-Range",
  },
  {
    acronym: "IR",
    definition: "Infrared",
    category: "Wireless & Mobile",
    subcategory: "Short-Range",
  },
  {
    acronym: "IrDA",
    definition: "Infrared Data Association",
    category: "Wireless & Mobile",
    subcategory: "Short-Range",
  },
  {
    acronym: "RF",
    definition: "Radio Frequency",
    category: "Wireless & Mobile",
    subcategory: "Short-Range",
  },
  {
    acronym: "RFI",
    definition: "Radio Frequency Interference",
    category: "Wireless & Mobile",
    subcategory: "Short-Range",
  },
  {
    acronym: "RFID",
    definition: "Radio Frequency Identification",
    category: "Wireless & Mobile",
    subcategory: "Short-Range",
  },
  // Mobile Management
  {
    acronym: "MDM",
    definition: "Mobile Device Management",
    category: "Wireless & Mobile",
    subcategory: "Mobile Management",
  },
  {
    acronym: "MAM",
    definition: "Mobile Application Management",
    category: "Wireless & Mobile",
    subcategory: "Mobile Management",
  },
  {
    acronym: "BYOD",
    definition: "Bring Your Own Device",
    category: "Wireless & Mobile",
    subcategory: "Mobile Management",
  },
  {
    acronym: "APK",
    definition: "Android Package",
    category: "Wireless & Mobile",
    subcategory: "Mobile Management",
  },
  {
    acronym: "GPS",
    definition: "Global Positioning System",
    category: "Wireless & Mobile",
    subcategory: "Mobile Management",
  },
  {
    acronym: "IoT",
    definition: "Internet of Things",
    category: "Wireless & Mobile",
    subcategory: "Mobile Management",
  },

  // ── Security ──────────────────────────────────────────────────────────────
  // Authentication & Identity
  {
    acronym: "MFA",
    definition: "Multifactor Authentication",
    category: "Security",
    subcategory: "Authentication & Identity",
  },
  {
    acronym: "SSO",
    definition: "Single Sign-on",
    category: "Security",
    subcategory: "Authentication & Identity",
  },
  {
    acronym: "PIN",
    definition: "Personal Identification Number",
    category: "Security",
    subcategory: "Authentication & Identity",
  },
  {
    acronym: "PKI",
    definition: "Public Key Infrastructure",
    category: "Security",
    subcategory: "Authentication & Identity",
  },
  {
    acronym: "TPM",
    definition: "Trusted Platform Module",
    category: "Security",
    subcategory: "Authentication & Identity",
  },
  {
    acronym: "CRL",
    definition: "Certificate Revocation List",
    category: "Security",
    subcategory: "Authentication & Identity",
  },
  {
    acronym: "HSM",
    definition: "Hardware Security Module",
    category: "Security",
    subcategory: "Authentication & Identity",
  },
  // Threats & Attacks
  {
    acronym: "DoS",
    definition: "Denial of Service",
    category: "Security",
    subcategory: "Threats & Attacks",
  },
  {
    acronym: "DDoS",
    definition: "Distributed Denial of Service",
    category: "Security",
    subcategory: "Threats & Attacks",
  },
  {
    acronym: "IDS",
    definition: "Intrusion Detection System",
    category: "Security",
    subcategory: "Threats & Attacks",
  },
  {
    acronym: "IPS",
    definition: "Intrusion Prevention System",
    category: "Security",
    subcategory: "Threats & Attacks",
  },
  {
    acronym: "XSS",
    definition: "Cross-site Scripting",
    category: "Security",
    subcategory: "Threats & Attacks",
  },
  {
    acronym: "SCADA",
    definition: "Supervisory Control and Data Acquisition",
    category: "Security",
    subcategory: "Threats & Attacks",
  },
  {
    acronym: "ESD",
    definition: "Electrostatic Discharge",
    category: "Security",
    subcategory: "Threats & Attacks",
  },
  // Encryption
  {
    acronym: "AES",
    definition: "Advanced Encryption Standard",
    category: "Security",
    subcategory: "Encryption",
  },
  {
    acronym: "SCP",
    definition: "Secure Copy Protection",
    category: "Security",
    subcategory: "Encryption",
  },
  {
    acronym: "ACL",
    definition: "Access Control List",
    category: "Security",
    subcategory: "Encryption",
  },
  // Policies & Compliance
  {
    acronym: "AUP",
    definition: "Acceptable Use Policy",
    category: "Security",
    subcategory: "Policies & Compliance",
  },
  {
    acronym: "EULA",
    definition: "End-User License Agreement",
    category: "Security",
    subcategory: "Policies & Compliance",
  },
  {
    acronym: "NDA",
    definition: "Non-disclosure Agreement",
    category: "Security",
    subcategory: "Policies & Compliance",
  },
  {
    acronym: "MOU",
    definition: "Memorandum of Understanding",
    category: "Security",
    subcategory: "Policies & Compliance",
  },
  {
    acronym: "PII",
    definition: "Personally Identifiable Information",
    category: "Security",
    subcategory: "Policies & Compliance",
  },
  // Incident Management
  {
    acronym: "CERT",
    definition: "Computer Emergency Response Team",
    category: "Security",
    subcategory: "Incident Management",
  },
  {
    acronym: "IRP",
    definition: "Incident Response Plan",
    category: "Security",
    subcategory: "Incident Management",
  },
  {
    acronym: "UTM",
    definition: "Unified Threat Management",
    category: "Security",
    subcategory: "Incident Management",
  },
  {
    acronym: "UAC",
    definition: "User Account Control",
    category: "Security",
    subcategory: "Incident Management",
  },
  {
    acronym: "CAPTCHA",
    definition:
      "Completely Automated Public Turing Test to Tell Computers and Humans Apart",
    category: "Security",
    subcategory: "Incident Management",
  },

  // ── Hardware ──────────────────────────────────────────────────────────────
  // Memory
  {
    acronym: "RAM",
    definition: "Random-access Memory",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "DRAM",
    definition: "Dynamic Random-Access Memory",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "SRAM",
    definition: "Static Random-access Memory",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "VRAM",
    definition: "Video Random-access Memory",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "DDR",
    definition: "Double Data Rate",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "DIMM",
    definition: "Dual Inline Memory Module",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "SODIMM",
    definition: "Small Outline Dual Inline Memory Module",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "SIMM",
    definition: "Single Inline Memory Module",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "ECC",
    definition: "Error Correcting Code",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "DMA",
    definition: "Direct Memory Access",
    category: "Hardware",
    subcategory: "Memory",
  },
  // Storage
  {
    acronym: "HDD",
    definition: "Hard Disk Drive",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "SSD",
    definition: "Solid-State Drive",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "NVMe",
    definition: "Non-volatile Memory Express",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "SATA",
    definition: "Serial Advanced Technology Attachment",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "eSATA",
    definition: "External Serial Advanced Technology Attachment",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "SAS",
    definition: "Serial Attached SCSI [Small Computer System Interface]",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "SCSI",
    definition: "Small Computer System Interface",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "ATA",
    definition: "Advanced Technology Attachment",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "IDE",
    definition: "Integrated Drive Electronics",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "RAID",
    definition: "Redundant Array of Independent (or Inexpensive) Disks",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "MBR",
    definition: "Master Boot Record",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "GPT",
    definition: "GUID [Globally Unique Identifier] Partition Table",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "S.M.A.R.T.",
    definition: "Self-monitoring Analysis and Reporting Technology",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "CD",
    definition: "Compact Disc",
    category: "Hardware",
    subcategory: "Storage",
  },
  // Processor & Motherboard
  {
    acronym: "CPU",
    definition: "Central Processing Unit",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "GPU",
    definition: "Graphics Processing Unit",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "ARM",
    definition: "Advanced RISC [Reduced Instruction Set Computer] Machine",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "BIOS",
    definition: "Basic Input/Output System",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "UEFI",
    definition: "Unified Extensible Firmware Interface",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "CMOS",
    definition: "Complementary Metal-Oxide Semiconductor",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "POST",
    definition: "Power-on Self-Test",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "FSB",
    definition: "Front-Side Bus",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "PCIe",
    definition: "Peripheral Component Interconnect Express",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "ATX",
    definition: "Advanced Technology Extended",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "ITX",
    definition: "Information Technology eXtended",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  {
    acronym: "HAL",
    definition: "Hardware Abstraction Layer",
    category: "Hardware",
    subcategory: "Processor & Motherboard",
  },
  // Cables & Connectors
  {
    acronym: "USB",
    definition: "Universal Serial Bus",
    category: "Hardware",
    subcategory: "Cables & Connectors",
  },
  {
    acronym: "RJ11",
    definition: "Registered Jack Function 11",
    category: "Hardware",
    subcategory: "Cables & Connectors",
  },
  {
    acronym: "RJ45",
    definition: "Registered Jack Function 45",
    category: "Hardware",
    subcategory: "Cables & Connectors",
  },
  {
    acronym: "SC",
    definition: "Subscriber Connector",
    category: "Hardware",
    subcategory: "Cables & Connectors",
  },
  {
    acronym: "ST",
    definition: "Straight Tip",
    category: "Hardware",
    subcategory: "Cables & Connectors",
  },
  {
    acronym: "LC",
    definition: "Lucent Connector",
    category: "Hardware",
    subcategory: "Cables & Connectors",
  },
  {
    acronym: "STP",
    definition: "Shielded Twisted Pair",
    category: "Hardware",
    subcategory: "Cables & Connectors",
  },
  {
    acronym: "UTP",
    definition: "Unshielded Twisted Pair",
    category: "Hardware",
    subcategory: "Cables & Connectors",
  },
  // General Hardware
  {
    acronym: "I/O",
    definition: "Input/Output",
    category: "Hardware",
    subcategory: "General Hardware",
  },
  {
    acronym: "KVM",
    definition: "Keyboard-Video-Mouse",
    category: "Hardware",
    subcategory: "General Hardware",
  },
  {
    acronym: "EMI",
    definition: "Electromagnetic Interference",
    category: "Hardware",
    subcategory: "General Hardware",
  },
  {
    acronym: "HCL",
    definition: "Hardware Compatibility List",
    category: "Hardware",
    subcategory: "General Hardware",
  },
  {
    acronym: "MSDS",
    definition: "Material Safety Data Sheet",
    category: "Hardware",
    subcategory: "General Hardware",
  },

  // ── Display & Video ───────────────────────────────────────────────────────
  // Panel Technologies
  {
    acronym: "LCD",
    definition: "Liquid Crystal Display",
    category: "Display & Video",
    subcategory: "Panel Technologies",
  },
  {
    acronym: "LED",
    definition: "Light-emitting Diode",
    category: "Display & Video",
    subcategory: "Panel Technologies",
  },
  {
    acronym: "OLED",
    definition: "Organic Light-emitting Diode",
    category: "Display & Video",
    subcategory: "Panel Technologies",
  },
  {
    acronym: "TN",
    definition: "Twisted Nematic",
    category: "Display & Video",
    subcategory: "Panel Technologies",
  },
  {
    acronym: "VA",
    definition: "Vertical Alignment",
    category: "Display & Video",
    subcategory: "Panel Technologies",
  },
  {
    acronym: "IPS",
    definition: "In-plane Switching",
    category: "Display & Video",
    subcategory: "Panel Technologies",
  },
  // Video Interfaces
  {
    acronym: "HDMI",
    definition: "High-Definition Multimedia Interface",
    category: "Display & Video",
    subcategory: "Video Interfaces",
  },
  {
    acronym: "DVI",
    definition: "Digital Visual Interface",
    category: "Display & Video",
    subcategory: "Video Interfaces",
  },
  {
    acronym: "DVI-D",
    definition: "Digital Visual Interface-Digital",
    category: "Display & Video",
    subcategory: "Video Interfaces",
  },
  {
    acronym: "VGA",
    definition: "Video Graphics Array",
    category: "Display & Video",
    subcategory: "Video Interfaces",
  },
  {
    acronym: "HDCP",
    definition: "High-bandwidth Digital Content Protection",
    category: "Display & Video",
    subcategory: "Video Interfaces",
  },

  // ── File Systems & OS ─────────────────────────────────────────────────────
  // Windows File Systems
  {
    acronym: "NTFS",
    definition: "New Technology File System",
    category: "File Systems & OS",
    subcategory: "Windows File Systems",
  },
  {
    acronym: "FAT",
    definition: "File Allocation Table",
    category: "File Systems & OS",
    subcategory: "Windows File Systems",
  },
  {
    acronym: "FAT12",
    definition: "12-bit File Allocation Table",
    category: "File Systems & OS",
    subcategory: "Windows File Systems",
  },
  {
    acronym: "FAT16",
    definition: "16-bit File Allocation Table",
    category: "File Systems & OS",
    subcategory: "Windows File Systems",
  },
  {
    acronym: "FAT32",
    definition: "32-bit File Allocation Table",
    category: "File Systems & OS",
    subcategory: "Windows File Systems",
  },
  {
    acronym: "exFAT",
    definition: "Extensible File Allocation Table",
    category: "File Systems & OS",
    subcategory: "Windows File Systems",
  },
  {
    acronym: "EFS",
    definition: "Encrypting File System",
    category: "File Systems & OS",
    subcategory: "Windows File Systems",
  },
  // Cross-Platform / Linux / Mac
  {
    acronym: "ext",
    definition: "Extended File System",
    category: "File Systems & OS",
    subcategory: "Linux / Mac",
  },
  {
    acronym: "APFS",
    definition: "Apple File System",
    category: "File Systems & OS",
    subcategory: "Linux / Mac",
  },
  {
    acronym: "CDFS",
    definition: "Compact Disc File System",
    category: "File Systems & OS",
    subcategory: "Linux / Mac",
  },
  // Backup & General
  {
    acronym: "GFS",
    definition: "Grandfather-Father-Son",
    category: "File Systems & OS",
    subcategory: "Backup & General",
  },
  {
    acronym: "OS",
    definition: "Operating System",
    category: "File Systems & OS",
    subcategory: "Backup & General",
  },

  // ── Cloud & Virtualization ────────────────────────────────────────────────
  // Service Models
  {
    acronym: "IaaS",
    definition: "Infrastructure as a Service",
    category: "Cloud & Virtualization",
    subcategory: "Service Models",
  },
  {
    acronym: "PaaS",
    definition: "Platform as a Service",
    category: "Cloud & Virtualization",
    subcategory: "Service Models",
  },
  {
    acronym: "SaaS",
    definition: "Software as a Service",
    category: "Cloud & Virtualization",
    subcategory: "Service Models",
  },
  // Virtualization
  {
    acronym: "VM",
    definition: "Virtual Machine",
    category: "Cloud & Virtualization",
    subcategory: "Virtualization",
  },
  {
    acronym: "VDI",
    definition: "Virtual Desktop Infrastructure",
    category: "Cloud & Virtualization",
    subcategory: "Virtualization",
  },
  {
    acronym: "HAV",
    definition: "Hardware-assisted Virtualization",
    category: "Cloud & Virtualization",
    subcategory: "Virtualization",
  },
  {
    acronym: "IOPS",
    definition: "Input/Output Operations Per Second",
    category: "Cloud & Virtualization",
    subcategory: "Virtualization",
  },

  // ── Printing ──────────────────────────────────────────────────────────────
  // Devices
  {
    acronym: "MFD",
    definition: "Multifunction Device",
    category: "Printing",
    subcategory: "Devices",
  },
  {
    acronym: "MFP",
    definition: "Multifunction Printer",
    category: "Printing",
    subcategory: "Devices",
  },
  {
    acronym: "ADF",
    definition: "Automatic Document Feeder",
    category: "Printing",
    subcategory: "Devices",
  },
  // Recognition & Language
  {
    acronym: "OCR",
    definition: "Optical Character Recognition",
    category: "Printing",
    subcategory: "Recognition & Language",
  },
  {
    acronym: "ICR",
    definition: "Intelligent Character Recognition",
    category: "Printing",
    subcategory: "Recognition & Language",
  },
  {
    acronym: "PCL",
    definition: "Printer Command Language",
    category: "Printing",
    subcategory: "Recognition & Language",
  },

  // ── Power & Electrical ────────────────────────────────────────────────────
  // Current Types
  {
    acronym: "AC",
    definition: "Alternating Current",
    category: "Power & Electrical",
    subcategory: "Current Types",
  },
  {
    acronym: "DC",
    definition: "Direct Current",
    category: "Power & Electrical",
    subcategory: "Current Types",
  },
  // Power Devices
  {
    acronym: "UPS",
    definition: "Uninterruptible Power Supply",
    category: "Power & Electrical",
    subcategory: "Power Devices",
  },
  {
    acronym: "PSU",
    definition: "Power Supply Unit",
    category: "Power & Electrical",
    subcategory: "Power Devices",
  },
  {
    acronym: "PoE",
    definition: "Power over Ethernet",
    category: "Power & Electrical",
    subcategory: "Power Devices",
  },

  // ── General IT ────────────────────────────────────────────────────────────
  // Boot & Deployment
  {
    acronym: "PXE",
    definition: "Preboot Execution Environment",
    category: "General IT",
    subcategory: "Boot & Deployment",
  },
  {
    acronym: "PE",
    definition: "Preinstallation Environment",
    category: "General IT",
    subcategory: "Boot & Deployment",
  },
  // Standards & Organizations
  {
    acronym: "IEEE",
    definition: "Institute of Electrical and Electronics Engineers",
    category: "General IT",
    subcategory: "Standards & Organizations",
  },
  {
    acronym: "ISO",
    definition: "International Organization for Standardization",
    category: "General IT",
    subcategory: "Standards & Organizations",
  },
  {
    acronym: "GUID",
    definition: "Globally Unique Identifier",
    category: "General IT",
    subcategory: "Standards & Organizations",
  },
  // Tools & Interface
  {
    acronym: "GUI",
    definition: "Graphical User Interface",
    category: "General IT",
    subcategory: "Tools & Interface",
  },
  {
    acronym: "CMD",
    definition: "Command Prompt",
    category: "General IT",
    subcategory: "Tools & Interface",
  },
  {
    acronym: "MMC",
    definition: "Microsoft Management Console",
    category: "General IT",
    subcategory: "Tools & Interface",
  },
  {
    acronym: "MSRA",
    definition: "Microsoft Remote Assistance",
    category: "General IT",
    subcategory: "Tools & Interface",
  },
  {
    acronym: "CAD",
    definition: "Computer-aided Design",
    category: "General IT",
    subcategory: "Tools & Interface",
  },
  {
    acronym: "HTML",
    definition: "Hypertext Markup Language",
    category: "General IT",
    subcategory: "Tools & Interface",
  },
  {
    acronym: "SQL",
    definition: "Structured Query Language",
    category: "General IT",
    subcategory: "Tools & Interface",
  },
  // IT Management
  {
    acronym: "RMM",
    definition: "Remote Monitoring and Management",
    category: "General IT",
    subcategory: "IT Management",
  },
  {
    acronym: "RTO",
    definition: "Recovery Time Objective",
    category: "General IT",
    subcategory: "IT Management",
  },
  {
    acronym: "KB",
    definition: "Knowledge Base",
    category: "General IT",
    subcategory: "IT Management",
  },
  {
    acronym: "EOL",
    definition: "End-of-Life",
    category: "General IT",
    subcategory: "IT Management",
  },
  {
    acronym: "DRM",
    definition: "Digital Rights Management",
    category: "General IT",
    subcategory: "IT Management",
  },
  // Misc
  {
    acronym: "PC",
    definition: "Personal Computer",
    category: "General IT",
    subcategory: "Misc",
  },
  {
    acronym: "BSOD",
    definition: "Blue Screen of Death",
    category: "General IT",
    subcategory: "Misc",
  },

  // ── New 220-1201 Terms ───────────────────────────────────────────────────
  // USB & Connectivity
  {
    acronym: "USB4",
    definition: "Universal Serial Bus 4 — up to 40 Gbps, USB-C only, Thunderbolt 3 protocol",
    category: "Hardware",
    subcategory: "Connectors & Cables",
  },
  {
    acronym: "TB5",
    definition: "Thunderbolt 5 — 80/120 Gbps, USB-C, PCIe 5.0 tunneling",
    category: "Hardware",
    subcategory: "Connectors & Cables",
  },
  {
    acronym: "DP",
    definition: "DisplayPort — packetized digital audio/video interface",
    category: "Hardware",
    subcategory: "Connectors & Cables",
  },
  // Memory & Storage
  {
    acronym: "LPDDR5",
    definition: "Low Power DDR5 — soldered mobile/laptop RAM, more efficient than LPDDR4X",
    category: "Hardware",
    subcategory: "Memory",
  },
  {
    acronym: "NVMe",
    definition: "Non-Volatile Memory Express — PCIe-based SSD protocol, faster than AHCI/SATA",
    category: "Hardware",
    subcategory: "Storage",
  },
  {
    acronym: "ZNS",
    definition: "Zoned Namespace — NVMe 2.0 feature for managed SSD write zones",
    category: "Hardware",
    subcategory: "Storage",
  },
  // Processors & AI
  {
    acronym: "NPU",
    definition: "Neural Processing Unit — dedicated AI/ML inference accelerator on SoC",
    category: "Hardware",
    subcategory: "CPU & Processing",
  },
  {
    acronym: "TOPS",
    definition: "Tera Operations Per Second — AI processing performance metric (Copilot+ needs 40+)",
    category: "Hardware",
    subcategory: "CPU & Processing",
  },
  {
    acronym: "SoC",
    definition: "System on a Chip — CPU, GPU, NPU, memory controller integrated in one die",
    category: "Hardware",
    subcategory: "CPU & Processing",
  },
  // Networking
  {
    acronym: "MLO",
    definition: "Multi-Link Operation — Wi-Fi 7 feature using multiple bands simultaneously",
    category: "Networking",
    subcategory: "Wireless",
  },
  {
    acronym: "OFDMA",
    definition: "Orthogonal Frequency Division Multiple Access — Wi-Fi 6/7 channel sharing",
    category: "Networking",
    subcategory: "Wireless",
  },
  // Cloud & Virtualization
  {
    acronym: "IaC",
    definition: "Infrastructure as Code — managing infrastructure via scripts/config files",
    category: "Virtualization & Cloud",
    subcategory: "Cloud",
  },
  {
    acronym: "K8s",
    definition: "Kubernetes — container orchestration platform",
    category: "Virtualization & Cloud",
    subcategory: "Cloud",
  },
];
