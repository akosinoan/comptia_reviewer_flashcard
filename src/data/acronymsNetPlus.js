// Acronym data for CompTIA Network+ N10-009
export const ACRONYMS_NETPLUS = [
  // ── 1.0 Networking Concepts ───────────────────────────────────────────────
  // OSI & TCP/IP Model
  { acronym: "OSI",   definition: "Open Systems Interconnection",          category: "1.0 Networking Concepts", subcategory: "OSI & TCP/IP Model" },
  { acronym: "PDU",   definition: "Protocol Data Unit",                    category: "1.0 Networking Concepts", subcategory: "OSI & TCP/IP Model" },
  { acronym: "MTU",   definition: "Maximum Transmission Unit",             category: "1.0 Networking Concepts", subcategory: "OSI & TCP/IP Model" },
  { acronym: "TTL",   definition: "Time to Live",                          category: "1.0 Networking Concepts", subcategory: "OSI & TCP/IP Model" },
  { acronym: "RTT",   definition: "Round-Trip Time",                       category: "1.0 Networking Concepts", subcategory: "OSI & TCP/IP Model" },

  // IP Addressing
  { acronym: "CIDR",  definition: "Classless Inter-Domain Routing",        category: "1.0 Networking Concepts", subcategory: "IP Addressing" },
  { acronym: "NAT",   definition: "Network Address Translation",           category: "1.0 Networking Concepts", subcategory: "IP Addressing" },
  { acronym: "PAT",   definition: "Port Address Translation",              category: "1.0 Networking Concepts", subcategory: "IP Addressing" },
  { acronym: "APIPA", definition: "Automatic Private IP Addressing",       category: "1.0 Networking Concepts", subcategory: "IP Addressing" },
  { acronym: "DHCP",  definition: "Dynamic Host Configuration Protocol",   category: "1.0 Networking Concepts", subcategory: "IP Addressing" },
  { acronym: "DNS",   definition: "Domain Name System",                    category: "1.0 Networking Concepts", subcategory: "IP Addressing" },
  { acronym: "FQDN",  definition: "Fully Qualified Domain Name",           category: "1.0 Networking Concepts", subcategory: "IP Addressing" },
  { acronym: "EUI",   definition: "Extended Unique Identifier",            category: "1.0 Networking Concepts", subcategory: "IP Addressing" },

  // Network Services
  { acronym: "NTP",   definition: "Network Time Protocol",                 category: "1.0 Networking Concepts", subcategory: "Network Services" },
  { acronym: "SNMP",  definition: "Simple Network Management Protocol",    category: "1.0 Networking Concepts", subcategory: "Network Services" },
  { acronym: "TFTP",  definition: "Trivial File Transfer Protocol",        category: "1.0 Networking Concepts", subcategory: "Network Services" },
  { acronym: "LDAP",  definition: "Lightweight Directory Access Protocol", category: "1.0 Networking Concepts", subcategory: "Network Services" },
  { acronym: "SIP",   definition: "Session Initiation Protocol",           category: "1.0 Networking Concepts", subcategory: "Network Services" },
  { acronym: "RTP",   definition: "Real-Time Transport Protocol",          category: "1.0 Networking Concepts", subcategory: "Network Services" },
  { acronym: "RTSP",  definition: "Real-Time Streaming Protocol",          category: "1.0 Networking Concepts", subcategory: "Network Services" },

  // Routing Protocols
  { acronym: "RIP",   definition: "Routing Information Protocol",          category: "1.0 Networking Concepts", subcategory: "Routing Protocols" },
  { acronym: "OSPF",  definition: "Open Shortest Path First",              category: "1.0 Networking Concepts", subcategory: "Routing Protocols" },
  { acronym: "BGP",   definition: "Border Gateway Protocol",               category: "1.0 Networking Concepts", subcategory: "Routing Protocols" },
  { acronym: "EIGRP", definition: "Enhanced Interior Gateway Routing Protocol", category: "1.0 Networking Concepts", subcategory: "Routing Protocols" },
  { acronym: "IS-IS", definition: "Intermediate System to Intermediate System", category: "1.0 Networking Concepts", subcategory: "Routing Protocols" },
  { acronym: "ECMP",  definition: "Equal-Cost Multi-Path",                 category: "1.0 Networking Concepts", subcategory: "Routing Protocols" },
  { acronym: "IGP",   definition: "Interior Gateway Protocol",             category: "1.0 Networking Concepts", subcategory: "Routing Protocols" },
  { acronym: "EGP",   definition: "Exterior Gateway Protocol",             category: "1.0 Networking Concepts", subcategory: "Routing Protocols" },
  { acronym: "AS",    definition: "Autonomous System",                     category: "1.0 Networking Concepts", subcategory: "Routing Protocols" },

  // ── 2.0 Network Implementation ────────────────────────────────────────────
  // Ethernet & Switching
  { acronym: "CSMA/CD", definition: "Carrier Sense Multiple Access with Collision Detection", category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "PoE",   definition: "Power over Ethernet",                   category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "STP",   definition: "Spanning Tree Protocol",                category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "RSTP",  definition: "Rapid Spanning Tree Protocol",          category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "MSTP",  definition: "Multiple Spanning Tree Protocol",       category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "LACP",  definition: "Link Aggregation Control Protocol",     category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "VLAN",  definition: "Virtual Local Area Network",            category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "VTP",   definition: "VLAN Trunking Protocol",                category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "QoS",   definition: "Quality of Service",                    category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "CoS",   definition: "Class of Service",                      category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "DSCP",  definition: "Differentiated Services Code Point",    category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "ARP",   definition: "Address Resolution Protocol",           category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },
  { acronym: "MAC",   definition: "Media Access Control",                  category: "2.0 Network Implementation", subcategory: "Ethernet & Switching" },

  // Wireless
  { acronym: "SSID",    definition: "Service Set Identifier",              category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "BSS",     definition: "Basic Service Set",                   category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "ESS",     definition: "Extended Service Set",                category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "IBSS",    definition: "Independent Basic Service Set",       category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "WPA2",    definition: "Wi-Fi Protected Access 2",            category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "WPA3",    definition: "Wi-Fi Protected Access 3",            category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "TKIP",    definition: "Temporal Key Integrity Protocol",     category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "CCMP",    definition: "Counter Mode CBC-MAC Protocol",       category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "MU-MIMO", definition: "Multi-User Multiple Input Multiple Output", category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "OFDMA",   definition: "Orthogonal Frequency Division Multiple Access", category: "2.0 Network Implementation", subcategory: "Wireless" },
  { acronym: "MIMO",    definition: "Multiple Input Multiple Output",      category: "2.0 Network Implementation", subcategory: "Wireless" },

  // WAN Technologies
  { acronym: "MPLS",   definition: "Multiprotocol Label Switching",        category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "SD-WAN", definition: "Software-Defined Wide Area Network",   category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "PPP",    definition: "Point-to-Point Protocol",              category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "PPPoE",  definition: "Point-to-Point Protocol over Ethernet",category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "DSL",    definition: "Digital Subscriber Line",              category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "ADSL",   definition: "Asymmetric Digital Subscriber Line",   category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "VDSL",   definition: "Very High Speed Digital Subscriber Line", category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "DOCSIS", definition: "Data Over Cable Service Interface Specification", category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "LTE",    definition: "Long-Term Evolution",                  category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "SONET",  definition: "Synchronous Optical Network",          category: "2.0 Network Implementation", subcategory: "WAN Technologies" },
  { acronym: "SDH",    definition: "Synchronous Digital Hierarchy",        category: "2.0 Network Implementation", subcategory: "WAN Technologies" },

  // ── 3.0 Network Operations ────────────────────────────────────────────────
  // Monitoring & Management
  { acronym: "MIB",    definition: "Management Information Base",          category: "3.0 Network Operations", subcategory: "Monitoring & Management" },
  { acronym: "OID",    definition: "Object Identifier",                    category: "3.0 Network Operations", subcategory: "Monitoring & Management" },
  { acronym: "RMON",   definition: "Remote Network Monitoring",            category: "3.0 Network Operations", subcategory: "Monitoring & Management" },
  { acronym: "NMS",    definition: "Network Management System",            category: "3.0 Network Operations", subcategory: "Monitoring & Management" },
  { acronym: "IPFIX",  definition: "IP Flow Information Export",           category: "3.0 Network Operations", subcategory: "Monitoring & Management" },
  { acronym: "NetFlow",definition: "Cisco Network Flow Monitoring",        category: "3.0 Network Operations", subcategory: "Monitoring & Management" },
  { acronym: "Syslog", definition: "System Logging Protocol",              category: "3.0 Network Operations", subcategory: "Monitoring & Management" },
  { acronym: "CDP",    definition: "Cisco Discovery Protocol",             category: "3.0 Network Operations", subcategory: "Monitoring & Management" },
  { acronym: "LLDP",   definition: "Link Layer Discovery Protocol",        category: "3.0 Network Operations", subcategory: "Monitoring & Management" },

  // High Availability & Performance
  { acronym: "SLA",   definition: "Service Level Agreement",               category: "3.0 Network Operations", subcategory: "High Availability & Performance" },
  { acronym: "RTO",   definition: "Recovery Time Objective",               category: "3.0 Network Operations", subcategory: "High Availability & Performance" },
  { acronym: "RPO",   definition: "Recovery Point Objective",              category: "3.0 Network Operations", subcategory: "High Availability & Performance" },
  { acronym: "MTBF",  definition: "Mean Time Between Failures",            category: "3.0 Network Operations", subcategory: "High Availability & Performance" },
  { acronym: "MTTR",  definition: "Mean Time To Repair",                   category: "3.0 Network Operations", subcategory: "High Availability & Performance" },
  { acronym: "HA",    definition: "High Availability",                     category: "3.0 Network Operations", subcategory: "High Availability & Performance" },
  { acronym: "FHRP",  definition: "First Hop Redundancy Protocol",         category: "3.0 Network Operations", subcategory: "High Availability & Performance" },
  { acronym: "HSRP",  definition: "Hot Standby Router Protocol",           category: "3.0 Network Operations", subcategory: "High Availability & Performance" },
  { acronym: "VRRP",  definition: "Virtual Router Redundancy Protocol",    category: "3.0 Network Operations", subcategory: "High Availability & Performance" },
  { acronym: "GLBP",  definition: "Gateway Load Balancing Protocol",       category: "3.0 Network Operations", subcategory: "High Availability & Performance" },

  // ── 4.0 Network Security ──────────────────────────────────────────────────
  // Authentication & Encryption
  { acronym: "AAA",    definition: "Authentication, Authorization, Accounting", category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "RADIUS", definition: "Remote Authentication Dial-In User Service", category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "TACACS+",definition: "Terminal Access Controller Access-Control System Plus", category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "PKI",    definition: "Public Key Infrastructure",            category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "CA",     definition: "Certificate Authority",                category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "SSL",    definition: "Secure Sockets Layer",                 category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "TLS",    definition: "Transport Layer Security",             category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "IPSec",  definition: "Internet Protocol Security",           category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "AH",     definition: "Authentication Header",                category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "ESP",    definition: "Encapsulating Security Payload",       category: "4.0 Network Security", subcategory: "Authentication & Encryption" },
  { acronym: "IKE",    definition: "Internet Key Exchange",                category: "4.0 Network Security", subcategory: "Authentication & Encryption" },

  // VPN Technologies
  { acronym: "VPN",   definition: "Virtual Private Network",               category: "4.0 Network Security", subcategory: "VPN Technologies" },
  { acronym: "GRE",   definition: "Generic Routing Encapsulation",         category: "4.0 Network Security", subcategory: "VPN Technologies" },
  { acronym: "L2TP",  definition: "Layer 2 Tunneling Protocol",            category: "4.0 Network Security", subcategory: "VPN Technologies" },
  { acronym: "PPTP",  definition: "Point-to-Point Tunneling Protocol",     category: "4.0 Network Security", subcategory: "VPN Technologies" },
  { acronym: "SSTP",  definition: "Secure Socket Tunneling Protocol",      category: "4.0 Network Security", subcategory: "VPN Technologies" },
  { acronym: "SSL VPN",definition: "Secure Sockets Layer Virtual Private Network", category: "4.0 Network Security", subcategory: "VPN Technologies" },

  // Security Devices & Concepts
  { acronym: "IDS",   definition: "Intrusion Detection System",            category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "IPS",   definition: "Intrusion Prevention System",           category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "NGFW",  definition: "Next-Generation Firewall",              category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "WAF",   definition: "Web Application Firewall",              category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "UTM",   definition: "Unified Threat Management",             category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "ACL",   definition: "Access Control List",                   category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "NAC",   definition: "Network Access Control",                category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "SIEM",  definition: "Security Information and Event Management", category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "SOC",   definition: "Security Operations Center",            category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "DMZ",   definition: "Demilitarized Zone",                    category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },
  { acronym: "ZBFW",  definition: "Zone-Based Firewall",                   category: "4.0 Network Security", subcategory: "Security Devices & Concepts" },

  // Threats & Attacks
  { acronym: "DoS",   definition: "Denial of Service",                     category: "4.0 Network Security", subcategory: "Threats & Attacks" },
  { acronym: "DDoS",  definition: "Distributed Denial of Service",         category: "4.0 Network Security", subcategory: "Threats & Attacks" },
  { acronym: "MITM",  definition: "Man-in-the-Middle",                     category: "4.0 Network Security", subcategory: "Threats & Attacks" },
  { acronym: "APT",   definition: "Advanced Persistent Threat",            category: "4.0 Network Security", subcategory: "Threats & Attacks" },
  { acronym: "CVE",   definition: "Common Vulnerabilities and Exposures",  category: "4.0 Network Security", subcategory: "Threats & Attacks" },
  { acronym: "CVSS",  definition: "Common Vulnerability Scoring System",   category: "4.0 Network Security", subcategory: "Threats & Attacks" },

  // ── 5.0 Network Troubleshooting ───────────────────────────────────────────
  // Diagnostic Tools
  { acronym: "ICMP",  definition: "Internet Control Message Protocol",     category: "5.0 Network Troubleshooting", subcategory: "Diagnostic Tools" },
  { acronym: "OTDR",  definition: "Optical Time Domain Reflectometer",     category: "5.0 Network Troubleshooting", subcategory: "Diagnostic Tools" },
  { acronym: "TDR",   definition: "Time Domain Reflectometer",             category: "5.0 Network Troubleshooting", subcategory: "Diagnostic Tools" },
  { acronym: "BERT",  definition: "Bit Error Rate Test",                   category: "5.0 Network Troubleshooting", subcategory: "Diagnostic Tools" },

  // Troubleshooting Concepts
  { acronym: "VLAN",  definition: "Virtual LAN (used in segmentation troubleshooting)", category: "5.0 Network Troubleshooting", subcategory: "Troubleshooting Concepts" },
  { acronym: "STP",   definition: "Spanning Tree Protocol (loops & convergence)", category: "5.0 Network Troubleshooting", subcategory: "Troubleshooting Concepts" },
  { acronym: "BPDU",  definition: "Bridge Protocol Data Unit",             category: "5.0 Network Troubleshooting", subcategory: "Troubleshooting Concepts" },
  { acronym: "CRC",   definition: "Cyclic Redundancy Check",               category: "5.0 Network Troubleshooting", subcategory: "Troubleshooting Concepts" },
  { acronym: "FCS",   definition: "Frame Check Sequence",                  category: "5.0 Network Troubleshooting", subcategory: "Troubleshooting Concepts" },
];
