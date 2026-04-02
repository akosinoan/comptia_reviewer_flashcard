// PBQ Scenarios for CompTIA A+ Core 2 (220-1202)
export const PBQs_CORE2 = [
  {
    id: 1,
    type: "bucket",
    domain: "Security",
    title: "Malware Classification",
    question:
      "Classify each malware type or attack into the correct category. Click an item from the pool, then click the target category to place it.",
    explanation:
      "Self-Replicating Malware spreads without user action (worms) or attaches to files needing user action to spread (viruses).\n" +
      "Deceptive Malware disguises itself as legitimate software (trojans) or provides remote unauthorized access (RATs).\n" +
      "Data-Stealing Malware captures keystrokes (keyloggers), monitors user behavior (spyware), or sells user data to advertisers (adware).\n" +
      "Destructive/Extortion Malware encrypts files for ransom (ransomware), hides itself at OS level (rootkits), or hijacks resources (cryptominer).\n" +
      "Network Attack Tools use infected machines for large-scale attacks (botnets/DDoS) or exploit unpatched network vulnerabilities (exploit kits).",
    buckets: [
      { id: 1, label: "Self-Replicating", sublabel: "Spreads automatically" },
      { id: 2, label: "Deceptive", sublabel: "Disguises itself" },
      { id: 3, label: "Data-Stealing", sublabel: "Captures info" },
      {
        id: 4,
        label: "Destructive / Extortion",
        sublabel: "Damages or ransoms",
      },
      {
        id: 5,
        label: "Network Attack",
        sublabel: "Leverages infected machines",
      },
    ],
    items: [
      { id: "worm", label: "Worm", bucket: 1 },
      { id: "virus", label: "Virus", bucket: 1 },
      { id: "trojan", label: "Trojan", bucket: 2 },
      { id: "rat", label: "RAT", bucket: 2 },
      { id: "keylogger", label: "Keylogger", bucket: 3 },
      { id: "spyware", label: "Spyware", bucket: 3 },
      { id: "adware", label: "Adware", bucket: 3 },
      { id: "ransomware", label: "Ransomware", bucket: 4 },
      { id: "rootkit", label: "Rootkit", bucket: 4 },
      { id: "cryptominer", label: "Cryptominer", bucket: 4 },
      { id: "botnet", label: "Botnet / DDoS", bucket: 5 },
      { id: "exploitkit", label: "Exploit Kit", bucket: 5 },
    ],
  },
  {
    id: 2,
    type: "match",
    domain: "Security",
    title: "Social Engineering Attacks",
    question:
      "Match each social engineering attack type to its correct description. Click an attack on the left, then click the matching description on the right.",
    explanation:
      "Phishing — mass email campaign impersonating trusted brands to steal credentials.\n" +
      "Spear Phishing — targeted phishing using personal details about the victim.\n" +
      "Whaling — spear phishing specifically targeting senior executives (CEO, CFO).\n" +
      "Vishing — voice/phone call pretending to be tech support, IRS, or bank.\n" +
      "Smishing — SMS text messages containing malicious links or false urgency.\n" +
      "Tailgating — physically following an authorized person through a secure door.\n" +
      "Shoulder Surfing — visually observing someone entering a password or PIN.\n" +
      "Dumpster Diving — retrieving sensitive documents or devices from trash.",
    left: [
      { id: "phish", label: "Phishing" },
      { id: "spear", label: "Spear Phishing" },
      { id: "whale", label: "Whaling" },
      { id: "vish", label: "Vishing" },
      { id: "smish", label: "Smishing" },
      { id: "tailgate", label: "Tailgating" },
      { id: "shoulder", label: "Shoulder Surfing" },
      { id: "dumpster", label: "Dumpster Diving" },
    ],
    right: [
      { id: "phish", label: "Mass fake email targeting anyone" },
      { id: "spear", label: "Targeted email using victim's personal details" },
      { id: "whale", label: "Targeted email attack on C-level executives" },
      { id: "vish", label: "Fraudulent phone call impersonating trusted org" },
      { id: "smish", label: "Malicious SMS text message attack" },
      {
        id: "tailgate",
        label: "Physically following someone through a secure door",
      },
      { id: "shoulder", label: "Watching someone type credentials" },
      {
        id: "dumpster",
        label: "Searching trash for sensitive data or hardware",
      },
    ],
  },
  {
    id: 3,
    type: "bucket",
    domain: "Operating Systems",
    title: "Windows Troubleshooting Tools",
    question:
      "Classify each Windows tool into the correct category based on its primary purpose. Click an item from the pool, then click the target category.",
    explanation:
      "System Repair Tools fix OS-level corruption and boot problems (SFC, DISM, CHKDSK, System Restore).\n" +
      "Process & Performance Tools monitor and manage running applications and resources (Task Manager, Resource Monitor, Performance Monitor).\n" +
      "Configuration & Settings Tools manage startup, services, and OS configuration (msconfig, regedit, Services.msc, MMC).\n" +
      "Network Diagnostic Tools analyze and troubleshoot network connectivity (ipconfig, netstat, ping, tracert, nslookup).\n" +
      "Event & Log Tools record and display system events, errors, and security audits (Event Viewer, Reliability Monitor).",
    buckets: [
      { id: 1, label: "System Repair", sublabel: "Fix OS corruption" },
      { id: 2, label: "Process & Performance", sublabel: "Monitor resources" },
      { id: 3, label: "Configuration", sublabel: "Manage settings" },
      { id: 4, label: "Network Diagnostics", sublabel: "Troubleshoot network" },
      { id: 5, label: "Event & Logs", sublabel: "View system events" },
    ],
    items: [
      { id: "sfc", label: "SFC /scannow", bucket: 1 },
      { id: "dism", label: "DISM", bucket: 1 },
      { id: "chkdsk", label: "CHKDSK", bucket: 1 },
      { id: "sysrestore", label: "System Restore", bucket: 1 },
      { id: "taskmgr", label: "Task Manager", bucket: 2 },
      { id: "resmon", label: "Resource Monitor", bucket: 2 },
      { id: "perfmon", label: "Performance Monitor", bucket: 2 },
      { id: "msconfig", label: "msconfig", bucket: 3 },
      { id: "regedit", label: "regedit", bucket: 3 },
      { id: "services", label: "Services.msc", bucket: 3 },
      { id: "ipconfig", label: "ipconfig", bucket: 4 },
      { id: "netstat", label: "netstat", bucket: 4 },
      { id: "eventvwr", label: "Event Viewer", bucket: 5 },
      { id: "relmon", label: "Reliability Monitor", bucket: 5 },
    ],
  },
  {
    id: 4,
    type: "bucket",
    domain: "Security",
    title: "Authentication Factor Types",
    question:
      "Classify each authentication method into the correct MFA factor category. Click an item from the pool, then click the target category to place it.",
    explanation:
      "Something you KNOW — knowledge-based factors: password, PIN, security question.\n" +
      "Something you HAVE — possession-based factors: smart card, hardware token (RSA), authenticator app (TOTP), SMS OTP.\n" +
      "Something you ARE — inherence/biometric factors: fingerprint, facial recognition, iris scan, voice recognition.\n" +
      "Somewhere you ARE — location-based factor: GPS location check, IP geolocation.",
    buckets: [
      { id: "know", label: "Something you KNOW", sublabel: "Knowledge factor" },
      {
        id: "have",
        label: "Something you HAVE",
        sublabel: "Possession factor",
      },
      {
        id: "are",
        label: "Something you ARE",
        sublabel: "Biometric / inherence factor",
      },
      { id: "where", label: "Somewhere you ARE", sublabel: "Location factor" },
    ],
    items: [
      { id: "password", label: "Password", bucket: "know" },
      { id: "pin", label: "PIN", bucket: "know" },
      { id: "secq", label: "Security Question", bucket: "know" },
      { id: "smartcard", label: "Smart Card", bucket: "have" },
      { id: "token", label: "Hardware Token (RSA)", bucket: "have" },
      { id: "authapp", label: "Authenticator App (TOTP)", bucket: "have" },
      { id: "smsotp", label: "SMS One-Time Password", bucket: "have" },
      { id: "fingerprint", label: "Fingerprint Scan", bucket: "are" },
      { id: "faceid", label: "Facial Recognition", bucket: "are" },
      { id: "iris", label: "Iris Scan", bucket: "are" },
      { id: "gps", label: "GPS Location Check", bucket: "where" },
    ],
  },
  {
    id: 5,
    type: "match",
    domain: "Operating Systems",
    title: "Windows Command-Line Tools",
    question:
      "Match each Windows command to its primary function. Click a command on the left, then click the matching function on the right.",
    explanation:
      "ipconfig — displays IP address, subnet mask, default gateway, and with /all shows MAC address and DNS servers.\n" +
      "netstat — shows active network connections, listening ports, and with -ano shows owning process IDs.\n" +
      "tasklist — lists all running processes with their PIDs and memory usage.\n" +
      "taskkill — terminates a process by PID (/PID) or name (/IM) — /F forces termination.\n" +
      "sfc /scannow — scans and repairs corrupted Windows system files using cached versions.\n" +
      "chkdsk /f /r — checks disk for file system errors (/f) and bad sectors (/r).\n" +
      "gpupdate /force — immediately applies Group Policy settings without waiting for refresh cycle.\n" +
      "diskpart — disk partitioning utility for creating, deleting, formatting, and assigning drives.",
    left: [
      { id: "ipconfig", label: "ipconfig /all" },
      { id: "netstat", label: "netstat -ano" },
      { id: "tasklist", label: "tasklist" },
      { id: "sfc", label: "sfc /scannow" },
      { id: "chkdsk", label: "chkdsk /f /r" },
      { id: "gpupdate", label: "gpupdate /force" },
    ],
    right: [
      { id: "ipconfig", label: "Show IP, MAC, DNS, and DHCP info" },
      { id: "netstat", label: "Show open ports and process IDs" },
      { id: "tasklist", label: "List all running processes and PIDs" },
      { id: "sfc", label: "Scan and repair Windows system files" },
      { id: "chkdsk", label: "Check disk for errors and bad sectors" },
      { id: "gpupdate", label: "Force immediate Group Policy update" },
    ],
  },
  {
    id: 6,
    type: "bucket",
    domain: "Operational Procedures",
    title: "Backup Strategy Selection",
    question:
      "Classify each characteristic into the correct backup strategy type. Click an item from the pool, then click the target category to place it.",
    explanation:
      "Full backups copy everything and clear the archive bit on all files — largest backup, simplest restore.\n" +
      "Incremental copies only files changed since the last backup of ANY type, clears the archive bit — smallest daily backup but slowest restore (needs full + every incremental).\n" +
      "Differential copies all changes since the last FULL backup only, does NOT clear the archive bit — grows daily but faster restore (needs only full + latest differential).\n" +
      "Synthetic Full assembles a new full backup from existing full + incrementals on the backup server — no load on production systems.",
    buckets: [
      { id: "full",   label: "Full Backup",        sublabel: "" },
      { id: "inc",    label: "Incremental Backup",  sublabel: "" },
      { id: "diff",   label: "Differential Backup", sublabel: "" },
      { id: "synth",  label: "Synthetic Full",      sublabel: "" },
    ],
    items: [
      { id: "full1",  label: "Copies ALL data regardless of changes",                       bucket: "full"  },
      { id: "full2",  label: "Clears the archive bit on ALL files",                         bucket: "full"  },
      { id: "inc1",   label: "Copies only files changed since the last backup of ANY type", bucket: "inc"   },
      { id: "inc2",   label: "Clears the archive bit on changed files only",                bucket: "inc"   },
      { id: "inc3",   label: "Fastest daily backup — minimum storage per session",          bucket: "inc"   },
      { id: "inc4",   label: "Slowest restore — requires full + every incremental",         bucket: "inc"   },
      { id: "diff1",  label: "Copies all changes since the last FULL backup only",          bucket: "diff"  },
      { id: "diff2",  label: "Does NOT clear the archive bit",                              bucket: "diff"  },
      { id: "diff3",  label: "Grows larger each day until the next full backup",            bucket: "diff"  },
      { id: "diff4",  label: "Fast restore — needs only last full + latest differential",   bucket: "diff"  },
      { id: "synth1", label: "Assembled from existing full + incrementals on backup server",bucket: "synth" },
      { id: "synth2", label: "No load on the production system during assembly",            bucket: "synth" },
    ],
  },
  {
    id: 7,
    type: "match",
    domain: "Operating Systems",
    title: "File System Comparison",
    question:
      "Match each file system to its key characteristic. Click a file system on the left, then click the matching description on the right.",
    explanation:
      "NTFS is the Windows default — supports permissions, EFS encryption, journaling, and files up to 16 TB.\n" +
      "FAT32 is universally compatible but limited to 4 GB per file — used on older flash drives and game consoles.\n" +
      "exFAT removes the 4 GB file size limit — ideal for large files on USB drives and SD cards, no journaling.\n" +
      "ext4 is the default Linux file system — journaling, large file support, backward compatible with ext2/ext3.\n" +
      "APFS is the macOS default since 10.13 — native encryption, snapshots, optimized for SSDs.\n" +
      "ReFS is the Windows Server self-healing file system — integrity checksums, no 2 TB partition limit.",
    left: [
      { id: "ntfs",  label: "NTFS"  },
      { id: "fat32", label: "FAT32" },
      { id: "exfat", label: "exFAT" },
      { id: "ext4",  label: "ext4"  },
      { id: "apfs",  label: "APFS"  },
      { id: "refs",  label: "ReFS"  },
    ],
    right: [
      { id: "ntfs",  label: "Windows default — permissions, EFS encryption, journaling, files up to 16 TB" },
      { id: "fat32", label: "Max 4 GB per file — universal compatibility with older devices and consoles" },
      { id: "exfat", label: "No file size limit — large files on flash drives and SD cards, no journaling" },
      { id: "ext4",  label: "Default Linux file system — journaling, large file support, ext2/ext3 compatible" },
      { id: "apfs",  label: "macOS default (10.13+) — native encryption, snapshots, optimized for SSDs" },
      { id: "refs",  label: "Windows Server self-healing file system — checksums, no 2 TB partition limit" },
    ],
  },
  {
    id: 8,
    type: "bucket",
    domain: "Security",
    title: "Security Control Types",
    question:
      "Classify each security control into the correct control type. Click an item from the pool, then click the target category to place it.",
    explanation:
      "Physical controls restrict physical access to facilities and equipment.\n" +
      "Technical (logical) controls are implemented in hardware or software to enforce security policies.\n" +
      "Administrative controls are policies, procedures, and training that govern how people behave.\n" +
      "Detective controls identify and record security incidents after or as they occur.",
    buckets: [
      { id: "physical", label: "Physical",       sublabel: "Restricts physical access" },
      { id: "technical",label: "Technical",      sublabel: "Hardware / software enforcement" },
      { id: "admin",    label: "Administrative", sublabel: "Policies & procedures" },
      { id: "detective",label: "Detective",      sublabel: "Identifies incidents" },
    ],
    items: [
      { id: "mantrap",   label: "Mantrap / access control vestibule", bucket: "physical"  },
      { id: "cablelock", label: "Cable lock on a laptop",             bucket: "physical"  },
      { id: "bollards",  label: "Bollards (vehicle barriers)",        bucket: "physical"  },
      { id: "guard",     label: "Security guard",                     bucket: "physical"  },
      { id: "firewall",  label: "Firewall rules",                     bucket: "technical" },
      { id: "bitlocker", label: "Encryption (BitLocker)",             bucket: "technical" },
      { id: "lockout",   label: "Account lockout policy",             bucket: "technical" },
      { id: "mfa",       label: "MFA requirement",                    bucket: "technical" },
      { id: "aup",       label: "Acceptable Use Policy (AUP)",        bucket: "admin"     },
      { id: "training",  label: "Security awareness training",        bucket: "admin"     },
      { id: "bgcheck",   label: "Background checks for new hires",    bucket: "admin"     },
      { id: "siem",      label: "Audit logs / SIEM alerts",           bucket: "detective" },
      { id: "ids",       label: "IDS (Intrusion Detection System)",   bucket: "detective" },
      { id: "cctv",      label: "CCTV (Closed-Circuit TV)",           bucket: "detective" },
    ],
  },
  {
    id: 9,
    type: "match",
    domain: "Operational Procedures",
    title: "Remote Access Technologies",
    question:
      "Match each remote access technology to its correct description. Click a technology on the left, then click the matching description on the right.",
    explanation:
      "RDP (Remote Desktop Protocol) — Microsoft's graphical remote desktop, TCP port 3389, requires Windows Pro or higher.\n" +
      "SSH (Secure Shell) — encrypted CLI remote access, TCP port 22, used for Linux/Unix and network device management.\n" +
      "VNC — cross-platform graphical remote access, less secure by default, should be tunneled through VPN or SSH.\n" +
      "VPN — encrypted tunnel to the corporate network, grants access to internal resources as if on-site.\n" +
      "TeamViewer / Quick Assist — invitation-based support tool, traverses firewalls without port forwarding.\n" +
      "RMM — IT platform for remotely monitoring, patching, and managing multiple endpoints simultaneously.",
    left: [
      { id: "rdp",  label: "RDP" },
      { id: "ssh",  label: "SSH" },
      { id: "vnc",  label: "VNC" },
      { id: "vpn",  label: "VPN" },
      { id: "tv",   label: "TeamViewer / Quick Assist" },
      { id: "rmm",  label: "RMM" },
    ],
    right: [
      { id: "rdp",  label: "Graphical remote desktop — TCP port 3389, Windows Pro or higher" },
      { id: "ssh",  label: "Encrypted CLI remote access — TCP port 22, Linux/Unix/network devices" },
      { id: "vnc",  label: "Cross-platform graphical access — less secure, tunnel through VPN/SSH" },
      { id: "vpn",  label: "Encrypted tunnel to corporate network — access internal resources remotely" },
      { id: "tv",   label: "Invitation-based support tool — traverses firewalls, no port forwarding needed" },
      { id: "rmm",  label: "IT platform for monitoring, patching, and managing multiple endpoints" },
    ],
  },
];
