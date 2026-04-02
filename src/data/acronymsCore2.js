// Acronyms for CompTIA A+ Core 2 (220-1202)
export const ACRONYMS_CORE2 = [
  // ── Operating System ──────────────────────────────────────────────────────
  // Windows
  {
    acronym: "OS",
    definition: "Operating System",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "GUI",
    definition: "Graphical User Interface",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "CLI",
    definition: "Command-Line Interface",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "BSOD",
    definition: "Blue Screen of Death",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "UAC",
    definition: "User Account Control",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "NTFS",
    definition: "New Technology File System",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "FAT",
    definition: "File Allocation Table",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "exFAT",
    definition: "Extended File Allocation Table",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "EFS",
    definition: "Encrypting File System",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "GPO",
    definition: "Group Policy Object",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "MMC",
    definition: "Microsoft Management Console",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "MSI",
    definition: "Microsoft Installer",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "WMI",
    definition: "Windows Management Instrumentation",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "WinRE",
    definition: "Windows Recovery Environment",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "WinPE",
    definition: "Windows Preinstallation Environment",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "SFC",
    definition: "System File Checker",
    category: "Operating Systems",
    subcategory: "Windows Tools",
  },
  {
    acronym: "DISM",
    definition: "Deployment Image Servicing and Management",
    category: "Operating Systems",
    subcategory: "Windows Tools",
  },
  {
    acronym: "MSCONFIG",
    definition: "Microsoft System Configuration Utility",
    category: "Operating Systems",
    subcategory: "Windows Tools",
  },
  // Boot & Firmware
  {
    acronym: "MBR",
    definition: "Master Boot Record",
    category: "Operating Systems",
    subcategory: "Boot & Firmware",
  },
  {
    acronym: "GPT",
    definition: "GUID Partition Table",
    category: "Operating Systems",
    subcategory: "Boot & Firmware",
  },
  {
    acronym: "UEFI",
    definition: "Unified Extensible Firmware Interface",
    category: "Operating Systems",
    subcategory: "Boot & Firmware",
  },
  {
    acronym: "POST",
    definition: "Power-On Self-Test",
    category: "Operating Systems",
    subcategory: "Boot & Firmware",
  },
  // Virtualization & Cloud
  {
    acronym: "VM",
    definition: "Virtual Machine",
    category: "Operating Systems",
    subcategory: "Virtualization & Cloud",
  },
  {
    acronym: "VDI",
    definition: "Virtual Desktop Infrastructure",
    category: "Operating Systems",
    subcategory: "Virtualization & Cloud",
  },
  {
    acronym: "IaaS",
    definition: "Infrastructure as a Service",
    category: "Operating Systems",
    subcategory: "Virtualization & Cloud",
  },
  {
    acronym: "PaaS",
    definition: "Platform as a Service",
    category: "Operating Systems",
    subcategory: "Virtualization & Cloud",
  },
  {
    acronym: "SaaS",
    definition: "Software as a Service",
    category: "Operating Systems",
    subcategory: "Virtualization & Cloud",
  },

  // ── Security ──────────────────────────────────────────────────────────────
  // Authentication
  {
    acronym: "MFA",
    definition: "Multi-Factor Authentication",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "2FA",
    definition: "Two-Factor Authentication",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "SSO",
    definition: "Single Sign-On",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "TOTP",
    definition: "Time-based One-Time Password",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "LDAP",
    definition: "Lightweight Directory Access Protocol",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "RADIUS",
    definition: "Remote Authentication Dial-In User Service",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "TACACS+",
    definition: "Terminal Access Controller Access Control System Plus",
    category: "Security",
    subcategory: "Authentication",
  },
  // Encryption
  {
    acronym: "AES",
    definition: "Advanced Encryption Standard",
    category: "Security",
    subcategory: "Encryption",
  },
  {
    acronym: "TPM",
    definition: "Trusted Platform Module",
    category: "Security",
    subcategory: "Encryption",
  },
  {
    acronym: "PKI",
    definition: "Public Key Infrastructure",
    category: "Security",
    subcategory: "Encryption",
  },
  {
    acronym: "CA",
    definition: "Certificate Authority",
    category: "Security",
    subcategory: "Encryption",
  },
  {
    acronym: "SSL",
    definition: "Secure Sockets Layer (deprecated, replaced by TLS)",
    category: "Security",
    subcategory: "Encryption",
  },
  {
    acronym: "TLS",
    definition: "Transport Layer Security",
    category: "Security",
    subcategory: "Encryption",
  },
  // Malware & Threats
  {
    acronym: "RAT",
    definition: "Remote Access Trojan",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  {
    acronym: "APT",
    definition: "Advanced Persistent Threat",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  {
    acronym: "C2",
    definition: "Command and Control (malware infrastructure)",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  {
    acronym: "PUA",
    definition: "Potentially Unwanted Application",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  {
    acronym: "DoS",
    definition: "Denial of Service",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  {
    acronym: "DDoS",
    definition: "Distributed Denial of Service",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  {
    acronym: "XSS",
    definition: "Cross-Site Scripting",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  {
    acronym: "SQLi",
    definition: "SQL Injection",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  // Security Controls
  {
    acronym: "AV",
    definition: "Antivirus",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "EDR",
    definition: "Endpoint Detection and Response",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "IDS",
    definition: "Intrusion Detection System",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "IPS",
    definition: "Intrusion Prevention System",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "DLP",
    definition: "Data Loss Prevention",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "ACL",
    definition: "Access Control List",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "RBAC",
    definition: "Role-Based Access Control",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "VPN",
    definition: "Virtual Private Network",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "NAC",
    definition: "Network Access Control",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "SIEM",
    definition: "Security Information and Event Management",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "UTM",
    definition: "Unified Threat Management",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "WAP",
    definition: "Wireless Access Point",
    category: "Security",
    subcategory: "Wireless Security",
  },
  {
    acronym: "WPA",
    definition: "Wi-Fi Protected Access",
    category: "Security",
    subcategory: "Wireless Security",
  },
  {
    acronym: "WPS",
    definition: "Wi-Fi Protected Setup",
    category: "Security",
    subcategory: "Wireless Security",
  },
  {
    acronym: "SSID",
    definition: "Service Set Identifier (Wi-Fi network name)",
    category: "Security",
    subcategory: "Wireless Security",
  },

  // ── Operational Procedures ────────────────────────────────────────────────
  {
    acronym: "SOP",
    definition: "Standard Operating Procedure",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "MTTR",
    definition: "Mean Time to Repair",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "MTBF",
    definition: "Mean Time Between Failures",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "SLA",
    definition: "Service Level Agreement",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "CAB",
    definition: "Change Advisory Board",
    category: "Operational Procedures",
    subcategory: "Change Management",
  },
  {
    acronym: "ITIL",
    definition: "Information Technology Infrastructure Library",
    category: "Operational Procedures",
    subcategory: "Change Management",
  },
  {
    acronym: "SDS",
    definition: "Safety Data Sheet (replaces MSDS)",
    category: "Operational Procedures",
    subcategory: "Safety",
  },
  {
    acronym: "MSDS",
    definition: "Material Safety Data Sheet (superseded by SDS)",
    category: "Operational Procedures",
    subcategory: "Safety",
  },
  {
    acronym: "ESD",
    definition: "Electrostatic Discharge",
    category: "Operational Procedures",
    subcategory: "Safety",
  },
  {
    acronym: "PPE",
    definition: "Personal Protective Equipment",
    category: "Operational Procedures",
    subcategory: "Safety",
  },
  // Scripting & Automation
  {
    acronym: "API",
    definition: "Application Programming Interface",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "JSON",
    definition: "JavaScript Object Notation",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "XML",
    definition: "Extensible Markup Language",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "CSV",
    definition: "Comma-Separated Values",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  // Compliance & Privacy
  {
    acronym: "GDPR",
    definition: "General Data Protection Regulation",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "HIPAA",
    definition: "Health Insurance Portability and Accountability Act",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "PCI-DSS",
    definition: "Payment Card Industry Data Security Standard",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "PHI",
    definition: "Protected Health Information",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "PII",
    definition: "Personally Identifiable Information",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },

  // ── New 220-1202 Terms ───────────────────────────────────────────────────
  // Zero Trust & Modern Security
  {
    acronym: "ZTA",
    definition: "Zero Trust Architecture",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "ZTNA",
    definition: "Zero Trust Network Access",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "SSE",
    definition: "Security Service Edge",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "SASE",
    definition: "Secure Access Service Edge",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "XDR",
    definition: "Extended Detection and Response",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "SOAR",
    definition: "Security Orchestration, Automation, and Response",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "MFA",
    definition: "Multi-Factor Authentication",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "FIDO2",
    definition: "Fast Identity Online 2 (passwordless authentication standard)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "PAM",
    definition: "Privileged Access Management",
    category: "Security",
    subcategory: "Security Controls",
  },
  // Windows 11 & OS
  {
    acronym: "WSL",
    definition: "Windows Subsystem for Linux",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "VBS",
    definition: "Virtualization-Based Security",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "HVCI",
    definition: "Hypervisor-Protected Code Integrity (Memory Integrity)",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "NPU",
    definition: "Neural Processing Unit",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "TOPS",
    definition: "Tera Operations Per Second (AI performance metric)",
    category: "Operating Systems",
    subcategory: "General",
  },
  // Encryption
  {
    acronym: "XTS-AES",
    definition:
      "XEX-based Tweaked CodeBook with Stealing — BitLocker disk encryption mode",
    category: "Security",
    subcategory: "Encryption",
  },
  // Scripting
  {
    acronym: "IaC",
    definition: "Infrastructure as Code",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "CI/CD",
    definition: "Continuous Integration / Continuous Delivery",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "YAML",
    definition: "YAML Ain't Markup Language (configuration file format)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },

  // ── Additional OS Terms ───────────────────────────────────────────────────
  {
    acronym: "ReFS",
    definition:
      "Resilient File System (Windows Server self-healing file system)",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "APFS",
    definition:
      "Apple File System (macOS 10.13+ / iOS default — supports snapshots and encryption)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "HFS+",
    definition:
      "Hierarchical File System Plus (older macOS file system, replaced by APFS)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "BCD",
    definition:
      "Boot Configuration Data (Windows Vista+ boot configuration store)",
    category: "Operating Systems",
    subcategory: "Boot & Firmware",
  },
  {
    acronym: "WinRE",
    definition:
      "Windows Recovery Environment (pre-OS recovery tools including Startup Repair and bootrec)",
    category: "Operating Systems",
    subcategory: "Boot & Firmware",
  },
  {
    acronym: "AVR",
    definition:
      "Automatic Voltage Regulator (in line-interactive UPS — handles brownouts/surges without switching to battery)",
    category: "Operational Procedures",
    subcategory: "Safety",
  },
  {
    acronym: "MOV",
    definition:
      "Metal Oxide Varistor (component in surge suppressors that absorbs voltage spikes)",
    category: "Operational Procedures",
    subcategory: "Safety",
  },
  {
    acronym: "UPS",
    definition:
      "Uninterruptible Power Supply (battery backup device protecting equipment from power outages)",
    category: "Operational Procedures",
    subcategory: "Safety",
  },

  // ── Additional Security Terms ─────────────────────────────────────────────
  {
    acronym: "BEC",
    definition:
      "Business Email Compromise (targeted attack spoofing/hijacking executive email for fraud)",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  {
    acronym: "TOTP",
    definition:
      "Time-based One-Time Password (RFC 6238 — authenticator app MFA code, regenerates every 30 seconds)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "SAML",
    definition:
      "Security Assertion Markup Language (XML standard for SSO between Identity Provider and Service Provider)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "IdP",
    definition:
      "Identity Provider (authenticates users and issues assertions for SSO — e.g., Okta, Azure AD)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "CAC",
    definition:
      "Common Access Card (US military/government smart card for physical and logical access)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "PIV",
    definition:
      "Personal Identity Verification (US federal smart card standard — similar to CAC for civilian agencies)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "DAI",
    definition:
      "Dynamic ARP Inspection (switch feature that validates ARP packets to prevent ARP poisoning attacks)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "CCTV",
    definition:
      "Closed-Circuit Television (surveillance camera system for physical security monitoring)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "JIT",
    definition:
      "Just-In-Time (access provisioning model — grants elevated permissions only for the duration needed)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "IAM",
    definition:
      "Identity and Access Management (framework for managing user identities and access rights)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "MDM",
    definition:
      "Mobile Device Management (software platform for managing, securing, and enforcing policies on mobile devices)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "MAM",
    definition:
      "Mobile Application Management (manages apps only on mobile devices — lighter than full MDM)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "BYOD",
    definition:
      "Bring Your Own Device (policy allowing employees to use personal devices for work)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "DMZ",
    definition:
      "Demilitarized Zone (screened subnet — semi-trusted network zone for public-facing servers between internet and internal LAN)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "UPnP",
    definition:
      "Universal Plug and Play (network protocol that allows devices to automatically open firewall ports — security risk)",
    category: "Security",
    subcategory: "Wireless Security",
  },
  {
    acronym: "DoH",
    definition:
      "DNS-over-HTTPS (encrypts DNS queries inside HTTPS to prevent eavesdropping on domain lookups)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "PUP",
    definition:
      "Potentially Unwanted Program (software installed without clear consent — adware, toolbars, browser hijackers)",
    category: "Security",
    subcategory: "Malware & Threats",
  },
  {
    acronym: "CVE",
    definition:
      "Common Vulnerabilities and Exposures (public database of known security vulnerabilities with unique IDs)",
    category: "Security",
    subcategory: "Malware & Threats",
  },

  // ── Additional Operational Procedures Terms ───────────────────────────────
  {
    acronym: "RFC",
    definition:
      "Request for Change (formal document initiating the IT change management process)",
    category: "Operational Procedures",
    subcategory: "Change Management",
  },
  {
    acronym: "CMDB",
    definition:
      "Configuration Management Database (maps configuration items and their relationships for IT service management)",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "CI",
    definition:
      "Configuration Item (any component tracked in a CMDB — hardware, software, services)",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "NDA",
    definition:
      "Non-Disclosure Agreement (legal contract protecting confidential information from disclosure)",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "AUP",
    definition:
      "Acceptable Use Policy (policy defining permitted use of company IT resources)",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "RTO",
    definition:
      "Recovery Time Objective (maximum acceptable downtime after a disaster — target time to restore service)",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "RPO",
    definition:
      "Recovery Point Objective (maximum acceptable data loss measured in time — how old can restored data be?)",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "GFS",
    definition:
      "Grandfather-Father-Son (tape backup rotation scheme with daily/weekly/monthly retention tiers)",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "RMM",
    definition:
      "Remote Monitoring and Management (IT tool for remotely monitoring, managing, and supporting endpoints)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "RDP",
    definition:
      "Remote Desktop Protocol (Microsoft protocol for graphical remote desktop sessions — TCP port 3389)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "SSH",
    definition:
      "Secure Shell (encrypted CLI protocol for remote access to Linux/Unix systems — TCP port 22)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "VNC",
    definition:
      "Virtual Network Computing (cross-platform graphical remote access protocol)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "NLA",
    definition:
      "Network Level Authentication (RDP security feature requiring authentication before establishing a session)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "APIPA",
    definition:
      "Automatic Private IP Addressing (self-assigns 169.254.x.x when DHCP server is unreachable)",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "WSUS",
    definition:
      "Windows Server Update Services (centralized update management — admins approve/deny patches before deployment)",
    category: "Operating Systems",
    subcategory: "Windows Tools",
  },
  {
    acronym: "WDS",
    definition:
      "Windows Deployment Services (PXE-based OS deployment server for imaging machines over the network)",
    category: "Operating Systems",
    subcategory: "Windows Tools",
  },
  {
    acronym: "MDT",
    definition:
      "Microsoft Deployment Toolkit (free Microsoft tool for automating Windows OS deployments with task sequences)",
    category: "Operating Systems",
    subcategory: "Windows Tools",
  },
  {
    acronym: "OEM",
    definition:
      "Original Equipment Manufacturer (license tied to original hardware — non-transferable, cheaper than Retail)",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "EULA",
    definition:
      "End User License Agreement (legal contract between software vendor and end user defining terms of use)",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "GPL",
    definition:
      "General Public License (open-source software license requiring derivatives to also be open-source — 'copyleft')",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "EOSL",
    definition:
      "End of Service Life (vendor no longer provides security patches or support — high vulnerability risk)",
    category: "Operational Procedures",
    subcategory: "Compliance & Privacy",
  },
  {
    acronym: "WEEE",
    definition:
      "Waste Electrical and Electronic Equipment (EU directive requiring proper e-waste recycling and manufacturer take-back)",
    category: "Operational Procedures",
    subcategory: "Safety",
  },
  {
    acronym: "RoHS",
    definition:
      "Restriction of Hazardous Substances (EU directive limiting lead, mercury, cadmium, and other toxics in electronics)",
    category: "Operational Procedures",
    subcategory: "Safety",
  },
  {
    acronym: "OSHA",
    definition:
      "Occupational Safety and Health Administration (US agency that sets and enforces workplace safety standards)",
    category: "Operational Procedures",
    subcategory: "Safety",
  },
  {
    acronym: "SPF",
    definition:
      "Sender Policy Framework (DNS TXT record listing authorized mail servers for a domain — prevents email spoofing)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "DKIM",
    definition:
      "DomainKeys Identified Mail (adds cryptographic digital signature to email headers for integrity verification)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "DMARC",
    definition:
      "Domain-based Message Authentication, Reporting & Conformance (email policy using SPF+DKIM to quarantine or reject spoofed mail)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "ADB",
    definition:
      "Android Debug Bridge (CLI tool for communicating with Android devices — requires USB Debugging enabled)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "MDR",
    definition:
      "Managed Detection and Response (outsourced 24/7 threat detection and incident response service)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "WAF",
    definition:
      "Web Application Firewall (inspects HTTP/S traffic to block SQL injection, XSS, and other web app attacks)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "HIPS",
    definition:
      "Host-based Intrusion Prevention System (monitors and blocks malicious activity on a single endpoint)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "MOU",
    definition:
      "Memorandum of Understanding (non-binding agreement between organizations outlining intent to cooperate)",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "KPI",
    definition:
      "Key Performance Indicator (measurable metric used to evaluate IT service quality, e.g., ticket resolution time)",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "BIOS",
    definition:
      "Basic Input/Output System (legacy firmware interface that initializes hardware at startup — replaced by UEFI)",
    category: "Operating Systems",
    subcategory: "Boot & Firmware",
  },
  {
    acronym: "PXE",
    definition:
      "Preboot Execution Environment (allows computers to boot from network server — used for OS deployment)",
    category: "Operating Systems",
    subcategory: "Boot & Firmware",
  },
  {
    acronym: "WIM",
    definition:
      "Windows Imaging Format (file-based disk image format used for Windows deployment via WDS/MDT/DISM)",
    category: "Operating Systems",
    subcategory: "Windows Tools",
  },
  {
    acronym: "SID",
    definition:
      "Security Identifier (unique alphanumeric ID assigned to every Windows user account, group, and computer)",
    category: "Operating Systems",
    subcategory: "Windows",
  },
  {
    acronym: "NTLM",
    definition:
      "NT LAN Manager (older Windows challenge-response authentication protocol — replaced by Kerberos in AD domains)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "Kerberos",
    definition:
      "Network Authentication Protocol (ticket-based — Active Directory default: KDC issues TGTs for SSO without transmitting passwords)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "TGT",
    definition:
      "Ticket Granting Ticket (Kerberos token issued by KDC after initial login — used to request service tickets without re-authenticating)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "KDC",
    definition:
      "Key Distribution Center (Kerberos component on a Domain Controller that issues TGTs and service tickets)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "CHAP",
    definition:
      "Challenge Handshake Authentication Protocol (authenticates using a hash, never sends the password — used in PPP/VPN)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "EAP",
    definition:
      "Extensible Authentication Protocol (flexible authentication framework used with WPA2-Enterprise and 802.1X)",
    category: "Security",
    subcategory: "Authentication",
  },
  {
    acronym: "802.1X",
    definition:
      "Port-based Network Access Control (authenticates devices via RADIUS before granting network access — used in WPA2-Enterprise)",
    category: "Security",
    subcategory: "Wireless Security",
  },
  {
    acronym: "SSTP",
    definition:
      "Secure Socket Tunneling Protocol (VPN protocol that uses HTTPS port 443 — bypasses most firewalls)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "L2TP",
    definition:
      "Layer 2 Tunneling Protocol (VPN tunneling protocol — requires IPSec for encryption, uses UDP port 1701)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "IKEv2",
    definition:
      "Internet Key Exchange version 2 (VPN key negotiation protocol — fast reconnect (MOBIKE), ideal for mobile devices)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "IPSec",
    definition:
      "Internet Protocol Security (suite for encrypting and authenticating IP packets — used in VPNs, two modes: Transport and Tunnel)",
    category: "Security",
    subcategory: "Encryption",
  },
  {
    acronym: "SFTP",
    definition:
      "SSH File Transfer Protocol (secure file transfer over SSH — TCP port 22, replaces insecure FTP)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "FTP",
    definition:
      "File Transfer Protocol (unencrypted file transfer — TCP ports 20 (data) / 21 (control); use SFTP or FTPS instead)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "FTPS",
    definition:
      "FTP Secure (FTP with SSL/TLS encryption — explicit FTPS uses port 21, implicit FTPS uses port 990)",
    category: "Operational Procedures",
    subcategory: "Scripting & Automation",
  },
  {
    acronym: "SNMP",
    definition:
      "Simple Network Management Protocol (monitors/manages network devices — UDP port 161 queries, 162 traps)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "NTP",
    definition:
      "Network Time Protocol (synchronizes system clocks over network — UDP port 123; required for Kerberos within 5 min skew)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "DHCP",
    definition:
      "Dynamic Host Configuration Protocol (auto-assigns IP address, subnet mask, default gateway, and DNS to devices)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "DNS",
    definition:
      "Domain Name System (resolves human-readable hostnames to IP addresses — UDP/TCP port 53)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "NAT",
    definition:
      "Network Address Translation (maps private IP addresses to a public IP — enables internet access from private networks)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "PAT",
    definition:
      "Port Address Translation (NAT variant using port numbers to map many private IPs to one public IP — most common form of NAT)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "VLAN",
    definition:
      "Virtual Local Area Network (logical network segmentation at Layer 2 using 802.1Q tagging — isolates broadcast domains)",
    category: "Security",
    subcategory: "Security Controls",
  },
  {
    acronym: "VoIP",
    definition:
      "Voice over IP (transmits voice calls as data packets over IP networks — requires QoS for quality)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "CIDR",
    definition:
      "Classless Inter-Domain Routing (IP address notation using prefix length, e.g., 192.168.1.0/24 = 256 addresses)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "FQDN",
    definition:
      "Fully Qualified Domain Name (complete domain name specifying exact location: hostname.subdomain.domain.tld)",
    category: "Operating Systems",
    subcategory: "General",
  },
  {
    acronym: "UAT",
    definition:
      "User Acceptance Testing (final testing phase where end users validate software meets requirements before production)",
    category: "Operational Procedures",
    subcategory: "Change Management",
  },
  {
    acronym: "BCM",
    definition:
      "Business Continuity Management (framework for maintaining essential operations during and after a disaster or disruption)",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
  {
    acronym: "DR",
    definition:
      "Disaster Recovery (plan and procedures to restore IT systems and data after a major outage or catastrophic event)",
    category: "Operational Procedures",
    subcategory: "Documentation",
  },
];
