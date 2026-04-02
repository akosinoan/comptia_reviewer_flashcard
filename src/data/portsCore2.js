// Ports relevant to CompTIA A+ Core 2 (220-1202) — sorted ascending by port number
export const PORTS_CORE2 = [
  // ── File Transfer ──────────────────────────────────────────────────────────
  {
    id: 1,
    port: "20/21",
    protocol: "TCP",
    name: "FTP",
    fullName:
      "File Transfer Protocol (port 21 control, port 20 data — unencrypted; use SFTP port 22 or FTPS instead)",
    category: "File Transfer",
  },

  // ── Remote Access ──────────────────────────────────────────────────────────
  {
    id: 2,
    port: "22",
    protocol: "TCP",
    name: "SSH / SFTP",
    fullName: "Secure Shell / Secure File Transfer Protocol",
    category: "Remote Access",
  },
  {
    id: 3,
    port: "23",
    protocol: "TCP",
    name: "Telnet",
    fullName: "Teletype Network (insecure — replaced by SSH)",
    category: "Remote Access",
  },

  // ── Email ──────────────────────────────────────────────────────────────────
  {
    id: 4,
    port: "25",
    protocol: "TCP",
    name: "SMTP",
    fullName: "Simple Mail Transfer Protocol (used by malware for spam)",
    category: "Email",
  },

  // ── Authentication & Directory ─────────────────────────────────────────────
  {
    id: 5,
    port: "49",
    protocol: "TCP",
    name: "TACACS+",
    fullName:
      "Terminal Access Controller Access-Control System Plus (Cisco AAA protocol — encrypts entire payload, unlike RADIUS which only encrypts the password)",
    category: "Authentication & Directory",
  },

  // ── Network Services ───────────────────────────────────────────────────────
  {
    id: 6,
    port: "53",
    protocol: "TCP/UDP",
    name: "DNS",
    fullName:
      "Domain Name System (resolves hostnames to IP addresses — UDP for standard queries, TCP for zone transfers)",
    category: "Network Services",
  },
  {
    id: 7,
    port: "67/68",
    protocol: "UDP",
    name: "DHCP",
    fullName:
      "Dynamic Host Configuration Protocol (server listens on 67, client receives on 68 — auto-assigns IP/subnet/gateway/DNS)",
    category: "Network Services",
  },

  // ── Web ────────────────────────────────────────────────────────────────────
  {
    id: 8,
    port: "80",
    protocol: "TCP",
    name: "HTTP",
    fullName: "Hypertext Transfer Protocol (unencrypted)",
    category: "Web",
  },

  // ── Authentication & Directory (cont.) ────────────────────────────────────
  {
    id: 9,
    port: "88",
    protocol: "TCP/UDP",
    name: "Kerberos",
    fullName: "Kerberos Authentication Protocol",
    category: "Authentication & Directory",
  },

  // ── Email (cont.) ──────────────────────────────────────────────────────────
  {
    id: 10,
    port: "110",
    protocol: "TCP",
    name: "POP3",
    fullName: "Post Office Protocol v3 (unencrypted email retrieval)",
    category: "Email",
  },

  // ── Network Services (cont.) ───────────────────────────────────────────────
  {
    id: 11,
    port: "123",
    protocol: "UDP",
    name: "NTP",
    fullName:
      "Network Time Protocol (synchronizes clocks across devices — Kerberos authentication requires clocks within 5 minutes)",
    category: "Network Services",
  },

  // ── Windows Services ───────────────────────────────────────────────────────
  {
    id: 12,
    port: "135",
    protocol: "TCP",
    name: "RPC",
    fullName: "Microsoft Remote Procedure Call",
    category: "Windows Services",
  },
  {
    id: 13,
    port: "137-139",
    protocol: "TCP/UDP",
    name: "NetBIOS",
    fullName: "Network Basic Input/Output System (legacy Windows file sharing)",
    category: "Windows Services",
  },

  // ── Email (cont.) ──────────────────────────────────────────────────────────
  {
    id: 14,
    port: "143",
    protocol: "TCP",
    name: "IMAP4",
    fullName: "Internet Message Access Protocol v4 (unencrypted)",
    category: "Email",
  },

  // ── Network Services (cont.) ───────────────────────────────────────────────
  {
    id: 15,
    port: "161/162",
    protocol: "UDP",
    name: "SNMP",
    fullName:
      "Simple Network Management Protocol (port 161 for queries/polling, port 162 for traps/alerts from devices)",
    category: "Network Services",
  },

  // ── Authentication & Directory (cont.) ────────────────────────────────────
  {
    id: 16,
    port: "389",
    protocol: "TCP/UDP",
    name: "LDAP",
    fullName: "Lightweight Directory Access Protocol (Active Directory)",
    category: "Authentication & Directory",
  },

  // ── Web (cont.) ────────────────────────────────────────────────────────────
  {
    id: 17,
    port: "443",
    protocol: "TCP",
    name: "HTTPS",
    fullName: "Hypertext Transfer Protocol Secure (SSL/TLS encrypted)",
    category: "Web",
  },

  // ── Windows Services (cont.) ───────────────────────────────────────────────
  {
    id: 18,
    port: "445",
    protocol: "TCP",
    name: "SMB",
    fullName:
      "Server Message Block (Windows file/print sharing — WannaCry vector)",
    category: "Windows Services",
  },

  // ── Network Services (cont.) ───────────────────────────────────────────────
  {
    id: 19,
    port: "514",
    protocol: "UDP",
    name: "Syslog",
    fullName: "System Logging Protocol",
    category: "Network Services",
  },

  // ── Email (cont.) ──────────────────────────────────────────────────────────
  {
    id: 20,
    port: "587",
    protocol: "TCP",
    name: "SMTP (Submission)",
    fullName:
      "SMTP Mail Submission (authenticated email client submission port — preferred over port 25 for outbound mail)",
    category: "Email",
  },

  // ── Authentication & Directory (cont.) ────────────────────────────────────
  {
    id: 21,
    port: "636",
    protocol: "TCP",
    name: "LDAPS",
    fullName: "LDAP over SSL/TLS (secure Active Directory)",
    category: "Authentication & Directory",
  },

  // ── Email (cont.) ──────────────────────────────────────────────────────────
  {
    id: 22,
    port: "993",
    protocol: "TCP",
    name: "IMAPS",
    fullName: "IMAP over SSL/TLS (secure email retrieval)",
    category: "Email",
  },
  {
    id: 23,
    port: "995",
    protocol: "TCP",
    name: "POP3S",
    fullName: "POP3 over SSL/TLS (secure email retrieval)",
    category: "Email",
  },

  // ── Database ───────────────────────────────────────────────────────────────
  {
    id: 24,
    port: "1433",
    protocol: "TCP",
    name: "MS SQL",
    fullName: "Microsoft SQL Server",
    category: "Database",
  },
  {
    id: 25,
    port: "3306",
    protocol: "TCP",
    name: "MySQL",
    fullName:
      "MySQL Database Server (default port for MySQL/MariaDB — should be firewalled and not exposed to internet)",
    category: "Database",
  },

  // ── Remote Access (cont.) ─────────────────────────────────────────────────
  {
    id: 26,
    port: "3389",
    protocol: "TCP",
    name: "RDP",
    fullName: "Remote Desktop Protocol (Windows remote access)",
    category: "Remote Access",
  },
  {
    id: 27,
    port: "5900",
    protocol: "TCP",
    name: "VNC",
    fullName:
      "Virtual Network Computing (graphical remote desktop — insecure by default, should be tunneled via SSH or VPN)",
    category: "Remote Access",
  },

  // ── Web (cont.) ────────────────────────────────────────────────────────────
  {
    id: 28,
    port: "8080",
    protocol: "TCP",
    name: "HTTP (Alternate)",
    fullName:
      "HTTP Alternate Port (used by web proxies, development servers, and some management web interfaces)",
    category: "Web",
  },
];
