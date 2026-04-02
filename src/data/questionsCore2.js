// Questions for CompTIA A+ Core 2 (220-1202)
export const questionsCore2 = [

  // ─────────────────────────────────────────────
  // 1.0 OPERATING SYSTEMS - Windows Editions
  // ─────────────────────────────────────────────
  {
    id: 201,
    category: "1.0 Operating Systems",
    topic: "1.1 Windows Editions",
    question: "What are the four main Windows 10/11 editions and their primary use cases?",
    answer: "Home (consumers), Pro (business/power users), Enterprise (large organizations), Education (schools/universities)",
    explanation: "Windows Home targets everyday consumers with basic features. Pro adds BitLocker, domain join, Remote Desktop, and Hyper-V. Enterprise includes all Pro features plus advanced security tools (AppLocker, DirectAccess). Education mirrors Enterprise but is licensed for academic institutions. Only Pro and above support joining a domain."
  },
  {
    id: 202,
    category: "1.0 Operating Systems",
    topic: "1.1 Windows Editions",
    question: "What are the minimum hardware requirements for Windows 11, and what is Copilot+ PC?",
    answer: "Windows 11: TPM 2.0, UEFI Secure Boot, 2-core 64-bit CPU at 1 GHz+, 4 GB RAM, 64 GB storage, DirectX 12. Copilot+ PC adds: 40+ TOPS NPU, 16 GB RAM, 256 GB SSD",
    explanation: "Windows 11 base requirements: TPM 2.0, UEFI with Secure Boot, 64-bit CPU (2+ cores, ≥1 GHz), 4 GB RAM, 64 GB storage, DirectX 12 compatible GPU. Copilot+ PC is a new hardware tier (2024+) enabling AI-powered features: requires a neural processing unit (NPU) delivering 40+ TOPS, 16 GB RAM minimum, and 256 GB SSD. Copilot+ features include Recall (AI-searchable activity history), Live Captions with real-time translation, and Windows Studio Effects — all processed locally without cloud dependency."
  },
  {
    id: 203,
    category: "1.0 Operating Systems",
    topic: "1.1 Windows Editions",
    question: "Which Windows editions support BitLocker full-disk encryption?",
    answer: "Windows Pro, Enterprise, and Education — NOT Windows Home",
    explanation: "BitLocker is a full-disk encryption feature built into Windows that requires a TPM chip. It is available on Windows Pro, Enterprise, and Education editions. Windows Home users can use Device Encryption (a simplified version) if their hardware supports it, but the full BitLocker management interface is only in Pro and above."
  },
  {
    id: 204,
    category: "1.0 Operating Systems",
    topic: "1.2 Windows Command Line",
    question: "What does the 'sfc /scannow' command do?",
    answer: "System File Checker — scans and repairs corrupted or missing Windows system files",
    explanation: "SFC (System File Checker) scans all protected Windows system files and replaces corrupted or missing files with cached versions. Run from an elevated command prompt. If SFC cannot repair files, run 'DISM /Online /Cleanup-Image /RestoreHealth' first to repair the Windows image, then re-run sfc /scannow."
  },
  {
    id: 205,
    category: "1.0 Operating Systems",
    topic: "1.2 Windows Command Line",
    question: "What is the purpose of DISM and when should you use it?",
    answer: "Deployment Image Servicing and Management — repairs the Windows image itself; use before SFC when the system image is corrupted",
    explanation: "DISM (Deployment Image Servicing and Management) can repair the Windows component store (WinSxS). The key command is: DISM /Online /Cleanup-Image /RestoreHealth. Use it when SFC /scannow reports errors it cannot fix — DISM downloads correct files from Windows Update to repair the local image. Always run DISM first, then SFC."
  },
  {
    id: 206,
    category: "1.0 Operating Systems",
    topic: "1.2 Windows Command Line",
    question: "What does 'chkdsk /f /r' do and when should you run it?",
    answer: "/f fixes file system errors; /r locates bad sectors and recovers data — run when a drive has errors or before decommissioning",
    explanation: "CHKDSK (Check Disk) scans the file system for errors. /f fixes detected file system errors. /r locates bad sectors and attempts to recover readable data. On a system drive, it schedules the scan for next reboot since the drive is in use. Run it when seeing disk errors in Event Viewer, after improper shutdowns, or when a drive reports errors."
  },
  {
    id: 207,
    category: "1.0 Operating Systems",
    topic: "1.2 Windows Command Line",
    question: "What does 'ipconfig /all' display compared to just 'ipconfig'?",
    answer: "ipconfig shows IP, subnet, gateway; /all adds MAC address, DHCP server, DNS servers, lease times, and adapter description",
    explanation: "ipconfig displays basic IP configuration (IP address, subnet mask, default gateway). The /all switch adds: physical (MAC) address, DHCP enabled/disabled, DHCP server IP, DNS servers, lease obtained/expires dates, and adapter description. Other useful variants: ipconfig /release (release DHCP lease), /renew (get new IP), /flushdns (clear DNS cache), /displaydns (show cached DNS)."
  },
  {
    id: 208,
    category: "1.0 Operating Systems",
    topic: "1.2 Windows Command Line",
    question: "What command shows active network connections, listening ports, and associated processes?",
    answer: "netstat -ano — shows all connections, port numbers, and process IDs",
    explanation: "netstat (network statistics) displays network connections. Key flags: -a (all connections and listening ports), -n (numeric addresses instead of names, faster), -o (owning process ID). Combine as 'netstat -ano'. You can then cross-reference PIDs with Task Manager or 'tasklist' to identify which process is using a specific port — useful for detecting malware using network connections."
  },
  {
    id: 209,
    category: "1.0 Operating Systems",
    topic: "1.2 Windows Command Line",
    question: "What is the difference between 'tasklist' and 'taskkill'?",
    answer: "tasklist displays running processes; taskkill terminates them — taskkill /PID [id] or /IM [name] /F forces termination",
    explanation: "tasklist shows all running processes with their PID, memory usage, and image name — similar to Task Manager's Processes tab. taskkill ends processes: 'taskkill /PID 1234' kills by process ID, 'taskkill /IM notepad.exe' kills by name, adding /F forces termination of unresponsive processes. Useful for scripting automated process management."
  },
  {
    id: 210,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows Settings & Tools",
    question: "What is msconfig used for?",
    answer: "System Configuration — manages startup programs, boot options, services, and can enable Safe Mode for next boot",
    explanation: "msconfig (System Configuration) provides access to: General (normal/diagnostic/selective startup), Boot (Safe Mode options, boot timeout, OS selection), Services (enable/disable non-Microsoft services), Startup (link to Task Manager), Tools (shortcuts to common admin tools). It is commonly used for troubleshooting — disabling startup items and services to isolate issues. Setting Safe Mode here requires a reboot to clear it afterward."
  },
  {
    id: 211,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows Settings & Tools",
    question: "What information can you find in Windows Event Viewer?",
    answer: "Application, security, system event logs with errors, warnings, and informational events — useful for diagnosing crashes, login failures, service errors",
    explanation: "Event Viewer (eventvwr.msc) organizes logs by: Windows Logs (Application, Security, System, Setup, Forwarded Events) and Applications and Services Logs. Security log records logon events, account management, and policy changes. System log records hardware/driver events and service failures. Application log records program crashes. Critical/Error/Warning/Information/Verbose are the severity levels."
  },
  {
    id: 212,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows Settings & Tools",
    question: "What are the NTFS permissions and their access levels, and how do they interact with share permissions?",
    answer: "NTFS: Full Control, Modify, Read & Execute, List Folder Contents, Read, Write — local access. Share: Full Control, Change, Read — network access. When both apply, the MORE RESTRICTIVE permission wins.",
    explanation: "NTFS permissions control access whether local or network. Full Control allows all actions including changing permissions. Modify allows read/write/delete but not permission changes. Read & Execute allows running files and reading. Write allows creating/modifying. Share permissions only apply when accessing over the network via SMB. When both NTFS and share permissions are set, the effective permission is the most restrictive combination. Best practice: set share permission to Full Control for authenticated users; use NTFS permissions for granular control."
  },
  {
    id: 213,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows Settings & Tools",
    question: "What is the Windows Registry and what are its five root keys?",
    answer: "HKLM (Local Machine), HKCU (Current User), HKCR (Classes Root), HKU (Users), HKCC (Current Config)",
    explanation: "The Windows Registry is a hierarchical database storing OS and application configuration. HKLM contains system-wide settings. HKCU stores per-user preferences. HKCR has file associations and COM object registrations. HKU contains all user profiles. HKCC is a link to the current hardware profile. Edit with regedit.exe — always back up before changes. Malware often runs from HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run."
  },
  {
    id: 214,
    category: "1.0 Operating Systems",
    topic: "1.4 Linux & macOS",
    question: "What are the essential Linux command-line tools a technician should know?",
    answer: "ls (list), cd (change dir), pwd (print working dir), cp/mv/rm (copy/move/delete), chmod (permissions), grep (search), ps/top (processes), sudo (elevated), apt/yum (package manager)",
    explanation: "Key Linux commands: ls -la (detailed list with hidden files), cd /path (navigate), pwd (current directory), cp src dst (copy), mv src dst (move/rename), rm -rf dir (force delete), chmod 755 file (set permissions), grep -r 'text' /path (recursive search), ps aux (all processes), top (live process monitor), sudo command (run as root), apt install/remove (Debian/Ubuntu), yum install (RHEL/CentOS)."
  },
  {
    id: 215,
    category: "1.0 Operating Systems",
    topic: "1.4 Linux & macOS",
    question: "What is virtualization and what are the two types of hypervisors?",
    answer: "Type 1 (bare-metal) runs directly on hardware — VMware ESXi, Hyper-V; Type 2 (hosted) runs on top of an OS — VirtualBox, VMware Workstation",
    explanation: "Virtualization allows multiple virtual machines to share physical hardware resources. Type 1 hypervisors install directly on hardware and are used in enterprise/server environments (VMware ESXi, Microsoft Hyper-V, Citrix XenServer). Type 2 hypervisors run within a host OS on a desktop/laptop (Oracle VirtualBox, VMware Workstation, Parallels on Mac). Type 1 offers better performance; Type 2 is easier to set up for testing."
  },

  // ─────────────────────────────────────────────
  // 2.0 SECURITY - Malware & Threats
  // ─────────────────────────────────────────────
  {
    id: 216,
    category: "2.0 Security",
    topic: "2.1 Malware Types",
    question: "What is the difference between a virus, a worm, and a trojan?",
    answer: "Virus: attaches to files, requires user action to spread; Worm: self-replicates across networks without user action; Trojan: masquerades as legitimate software",
    explanation: "A virus requires a host file and user interaction (opening a file) to spread and execute. A worm self-replicates and spreads automatically across networks by exploiting vulnerabilities — no user action needed (e.g., WannaCry). A Trojan disguises itself as useful software but performs malicious actions when run. Unlike viruses/worms, Trojans typically do not self-replicate. Trojans often install backdoors or RATs (Remote Access Trojans)."
  },
  {
    id: 217,
    category: "2.0 Security",
    topic: "2.1 Malware Types",
    question: "What is ransomware and what is the recommended response?",
    answer: "Malware that encrypts files and demands payment for decryption key — response: isolate, report, restore from clean backup (do NOT pay ransom)",
    explanation: "Ransomware encrypts user/system files and demands a ransom (usually cryptocurrency) for the decryption key. Famous examples: WannaCry, CryptoLocker, Ryuk. Response steps: 1) Immediately disconnect from the network to prevent spread, 2) Document/photograph the ransom screen, 3) Report to management and potentially law enforcement, 4) Wipe and restore from a known-good backup. Paying the ransom is discouraged — no guarantee of key delivery and funds criminal activity."
  },
  {
    id: 218,
    category: "2.0 Security",
    topic: "2.1 Malware Types",
    question: "What is a rootkit and why is it particularly dangerous?",
    answer: "Malware that hides itself and other malware at the OS/kernel level — evades standard antivirus detection; requires bootable scanner to remove",
    explanation: "A rootkit modifies the operating system at a deep level (kernel, boot sector, firmware) to hide its presence and the presence of other malware. Because it runs below the OS, standard antivirus running within Windows cannot reliably detect it. Removal typically requires booting from external media (Windows PE, Linux live USB) and scanning the drive offline. In severe cases, a full OS reinstall is required. Rootkits can persist across OS reinstalls if in the firmware (UEFI rootkit)."
  },
  {
    id: 219,
    category: "2.0 Security",
    topic: "2.1 Malware Types",
    question: "What are spyware, adware, and keyloggers?",
    answer: "Spyware: monitors user activity and transmits data; Adware: displays unwanted ads; Keylogger: records keystrokes to capture passwords",
    explanation: "Spyware silently monitors browsing habits, collects personal information, and transmits it to a remote attacker. Adware displays unwanted advertisements, often injecting ads into browsers, and may be bundled with free software. A keylogger records every keystroke — capturing usernames, passwords, credit card numbers, and messages — and sends them to an attacker. Keyloggers can be software (runs on OS) or hardware (physical device plugged between keyboard and computer)."
  },
  {
    id: 220,
    category: "2.0 Security",
    topic: "2.1 Malware Types",
    question: "What is a botnet and how is it used by attackers?",
    answer: "A network of infected computers (bots/zombies) controlled by a command-and-control (C2) server — used for DDoS attacks, spam, credential stuffing, cryptomining",
    explanation: "A botnet is a collection of internet-connected devices infected with malware and controlled remotely by an attacker (bot herder) through a Command-and-Control (C2) server. Botnets are used for: DDoS attacks (flooding targets with traffic), sending spam emails, credential stuffing attacks, cryptocurrency mining, and spreading more malware. Individual infected machines are called 'bots' or 'zombies.' The owner typically doesn't know their device is part of a botnet."
  },
  {
    id: 221,
    category: "2.0 Security",
    topic: "2.2 Social Engineering",
    question: "What is phishing and how does it differ from spear phishing and whaling?",
    answer: "Phishing: mass email attacks targeting anyone; Spear phishing: targeted at specific individuals/org; Whaling: targets high-level executives (CEO, CFO)",
    explanation: "Phishing sends fraudulent emails en masse impersonating trusted organizations (banks, Microsoft) to steal credentials. Spear phishing is tailored to a specific individual or organization, including personal details to appear legitimate — much harder to detect. Whaling specifically targets high-value executives whose credentials or authorization can yield large financial or data gains. Vishing is voice/phone phishing. Smishing is SMS text message phishing."
  },
  {
    id: 222,
    category: "2.0 Security",
    topic: "2.2 Social Engineering",
    question: "What are tailgating and piggybacking in physical security?",
    answer: "Tailgating: following an authorized person through a secure door without their knowledge; Piggybacking: entering with the person's consent but without proper authorization",
    explanation: "Tailgating (also called tailgating) occurs when an unauthorized person follows an authorized employee through a secured door without the employee noticing. Piggybacking is similar but the authorized person is aware and holds the door — often out of politeness. Both bypass physical access controls like badge readers. Countermeasures: security awareness training, mantraps (double-door airlocks), security cameras, and policies against holding doors for others."
  },
  {
    id: 223,
    category: "2.0 Security",
    topic: "2.2 Social Engineering",
    question: "What is shoulder surfing and dumpster diving?",
    answer: "Shoulder surfing: visually stealing information by watching someone type; Dumpster diving: retrieving sensitive information from discarded documents/hardware",
    explanation: "Shoulder surfing involves looking over someone's shoulder to observe passwords, PINs, or sensitive data being entered or displayed. Countermeasure: privacy screens, positioning awareness. Dumpster diving involves searching through trash for discarded documents, old drives, or equipment containing sensitive information. Countermeasures: cross-cut shredders for documents, proper drive destruction/degaussing before disposal, clear desk policies. Both are low-tech but effective attack vectors."
  },
  {
    id: 224,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is multi-factor authentication (MFA) and what are the three factors?",
    answer: "Something you know (password/PIN), something you have (smart card/token/phone), something you are (biometric — fingerprint, face, iris)",
    explanation: "MFA requires two or more different authentication factors. Combining factors from different categories significantly increases security — even if an attacker obtains your password, they still need the physical token or biometric. Common MFA implementations: password + SMS code, password + authenticator app TOTP, smart card + PIN. Two-factor authentication (2FA) is a subset of MFA using exactly two factors. Location and behavior can also serve as factors in advanced systems."
  },
  {
    id: 225,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is the principle of least privilege?",
    answer: "Users and processes should have only the minimum permissions needed to perform their job — nothing more",
    explanation: "Least privilege limits damage from accidents, errors, and malicious attacks. Examples: a receptionist should not have admin rights; a web server process shouldn't run as SYSTEM/root; a developer's test account shouldn't access production databases. Implementation: use standard user accounts for daily tasks, only elevate when necessary (UAC in Windows), use role-based access control (RBAC), and regularly audit permissions. This limits the blast radius of a compromised account."
  },
  {
    id: 226,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is BitLocker and what does it protect against?",
    answer: "Windows full-disk encryption that protects data if a device is lost or stolen — requires TPM chip; protected partition cannot be read without authentication",
    explanation: "BitLocker encrypts entire drive volumes using AES encryption. It uses the TPM chip to store encryption keys and verify system integrity at boot. BitLocker protects against: physical theft of a drive (data unreadable without key), offline attacks (booting from external media to access files). BitLocker can require a PIN at boot for additional security. Recovery keys should be stored in Active Directory or Microsoft account. BitLocker To Go encrypts removable drives."
  },
  {
    id: 227,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What are the steps to remove malware from a Windows system?",
    answer: "1) Identify symptoms, 2) Quarantine/isolate, 3) Disable System Restore, 4) Boot to safe mode/offline scanner, 5) Run malware scans, 6) Remove/quarantine malware, 7) Re-enable protections, 8) Patch system, 9) Document",
    explanation: "CompTIA's malware removal process: 1) Investigate and identify malware type. 2) Quarantine infected system from the network. 3) Disable System Restore to prevent restoring malware from restore points. 4) Boot into Safe Mode or use an offline bootable scanner (outside the OS). 5-6) Run multiple anti-malware tools, remove threats. 7) Re-enable System Restore, update definitions, schedule scans. 8) Apply OS/application patches that were exploited. 9) Document findings for future reference."
  },
  {
    id: 228,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is a firewall and what is the difference between hardware and software firewalls?",
    answer: "Hardware firewall: network-level device protecting entire network; Software firewall: host-based, runs on individual computer (Windows Defender Firewall)",
    explanation: "A firewall controls network traffic based on rules. Hardware firewalls (routers, UTM appliances) sit at the network perimeter and protect all devices on the network — filtering inbound/outbound traffic. Software firewalls run on individual hosts and control traffic to/from that specific device. Windows Defender Firewall is a software firewall built into Windows. Best practice is to use both: hardware firewall at the perimeter and host-based firewall on each device for defense in depth."
  },
  {
    id: 229,
    category: "2.0 Security",
    topic: "2.4 Data Destruction",
    question: "What are the approved methods for securely destroying data on storage devices?",
    answer: "Degaussing (magnetic fields destroy magnetic drives), Secure erase/overwrite (software wiping), Shredding/destruction (physical), Encryption then deletion",
    explanation: "Standard deletion or formatting only removes file system pointers — data recovery is possible. Secure methods: Degaussing uses strong magnetic fields to scramble data on magnetic HDDs and tapes (does not work on SSDs). Overwriting replaces data with zeros/random patterns (DoD 5220.22-M standard uses multiple passes). Physical destruction: shredding, drilling holes, incineration. For SSDs, manufacturer secure erase commands or physical destruction are recommended since degaussing is ineffective. Encryption before disposal is an additional layer."
  },
  {
    id: 230,
    category: "2.0 Security",
    topic: "2.4 Data Destruction",
    question: "What is the difference between data wiping, low-level formatting, and standard formatting?",
    answer: "Data wiping: overwrites all sectors with zeros/random data; Low-level formatting: initializes physical sectors on drive; Standard (high-level) format: only clears file system index, data remains recoverable",
    explanation: "A standard quick format only erases the master file table or FAT — the actual data blocks remain and are easily recovered with forensic tools. A full format in Windows does overwrite data in Windows Vista and later. Low-level formatting (from BIOS/drive utility) initializes physical track and sector markings — rarely needed on modern drives. Data wiping tools (DBAN, Eraser) overwrite all sectors with patterns. For maximum security: wipe + physical destruction."
  },

  // ─────────────────────────────────────────────
  // 3.0 SOFTWARE TROUBLESHOOTING
  // ─────────────────────────────────────────────
  {
    id: 231,
    category: "3.0 Software Troubleshooting",
    topic: "3.1 Windows Troubleshooting",
    question: "What causes a Blue Screen of Death (BSOD) and how do you begin troubleshooting?",
    answer: "Hardware failure, driver issues, or OS corruption — check Event Viewer, minidump files in C:\\Windows\\Minidump, use WinDbg to analyze crash dump",
    explanation: "BSOD (Stop Error) indicates a fatal system error forcing Windows to halt to prevent data corruption. Common causes: bad RAM, faulty drivers (especially graphics/storage), failing hardware, overheating, or rootkits. Troubleshooting: 1) Note the STOP error code and offending file. 2) Check Event Viewer > Windows Logs > System for errors before the crash. 3) Analyze minidump files with WinDbg or WhoCrashed. 4) Boot Safe Mode to test with minimal drivers. 5) Run memory diagnostics (Windows Memory Diagnostic / MemTest86)."
  },
  {
    id: 232,
    category: "3.0 Software Troubleshooting",
    topic: "3.1 Windows Troubleshooting",
    question: "What is the Windows Recovery Environment (WinRE) and what tools does it provide?",
    answer: "Pre-boot repair environment — Startup Repair, System Restore, System Image Recovery, Command Prompt, and Reset this PC",
    explanation: "WinRE (Windows Recovery Environment) is accessible by pressing F8 at boot, holding Shift while clicking Restart, or booting from Windows installation media. It provides: Startup Repair (automatically fixes boot issues), System Restore (rolls back to restore point), System Image Recovery (restores full backup image), Command Prompt (advanced manual repairs with bcdedit, diskpart, sfc), Reset this PC (reinstall Windows keeping/removing files), and Go back to previous version."
  },
  {
    id: 233,
    category: "3.0 Software Troubleshooting",
    topic: "3.1 Windows Troubleshooting",
    question: "What is Safe Mode and when do you use it?",
    answer: "Minimal startup mode loading only essential drivers — use to diagnose driver/software issues, remove malware, or run repairs when normal boot fails",
    explanation: "Safe Mode starts Windows with a minimal set of drivers and services. Safe Mode types: Safe Mode (basic VGA, no network), Safe Mode with Networking (adds network drivers for internet access), Safe Mode with Command Prompt (for advanced users). Boot into Safe Mode via msconfig, WinRE, or Shift+Restart. Use it to: uninstall problematic software/drivers, run malware scans away from startup items, diagnose if a clean boot resolves issues, access an otherwise unbootable system."
  },
  {
    id: 234,
    category: "3.0 Software Troubleshooting",
    topic: "3.1 Windows Troubleshooting",
    question: "What does System Restore do and what does it NOT protect?",
    answer: "Rolls back OS registry and system files to a restore point — does NOT protect personal files (documents, photos) or user data",
    explanation: "System Restore creates snapshots of Windows system files, installed programs, and registry settings. It can undo driver installs, Windows updates, or software changes that caused instability. Important: System Restore does NOT affect personal documents, pictures, or email — these will not be restored. It also does not remove viruses if they infected system files before the restore point was created. Disable System Restore when removing malware to prevent restoring infected files from restore points."
  },
  {
    id: 235,
    category: "3.0 Software Troubleshooting",
    topic: "3.2 Application Troubleshooting",
    question: "A user reports applications are crashing randomly. What is your diagnostic approach?",
    answer: "Check Event Viewer application logs, verify system resources (RAM/disk), check for OS/application updates, test in Clean Boot, run SFC, check for malware",
    explanation: "Systematic troubleshooting: 1) Event Viewer > Application log for crash details and error codes. 2) Check RAM with Windows Memory Diagnostic (mdsched.exe). 3) Check disk health with chkdsk. 4) Verify adequate free disk space (low space causes crashes). 5) Update application and Windows — patches fix known crash bugs. 6) Clean Boot (msconfig) isolates third-party software conflicts. 7) SFC /scannow for corrupted system files. 8) Scan for malware. 9) Reinstall application as last resort."
  },

  // ─────────────────────────────────────────────
  // 4.0 OPERATIONAL PROCEDURES
  // ─────────────────────────────────────────────
  {
    id: 236,
    category: "4.0 Operational Procedures",
    topic: "4.1 Documentation",
    question: "What are the key types of documentation a technician should maintain?",
    answer: "Network diagrams, asset inventory, knowledge base articles, incident reports, change documentation, standard operating procedures (SOPs)",
    explanation: "Documentation types: Network diagrams (logical and physical maps of network topology). Asset inventory (hardware/software inventory with serial numbers, licenses). Knowledge base (solutions to known issues for future reference). Incident reports (document security incidents: what happened, impact, response). Change documentation (records of changes made to systems). SOPs (step-by-step procedures for common tasks). Good documentation reduces mean time to repair (MTTR) and supports compliance requirements."
  },
  {
    id: 237,
    category: "4.0 Operational Procedures",
    topic: "4.1 Documentation",
    question: "What is change management and why is it important?",
    answer: "A formal process for requesting, reviewing, approving, testing, and documenting changes to IT systems — prevents uncontrolled changes that cause outages",
    explanation: "Change management ensures that changes are: Requested (change request submitted with details), Reviewed (assessed for risk and impact), Approved by change advisory board (CAB), Tested in non-production first, Implemented during a maintenance window, Verified after implementation, and Documented. A rollback plan must exist before any change. Prevents 'change-related incidents' — the most common cause of outages in IT environments. CompTIA emphasizes: document everything before, during, and after changes."
  },
  {
    id: 238,
    category: "4.0 Operational Procedures",
    topic: "4.2 Scripting Basics",
    question: "What are the common scripting languages a CompTIA A+ technician should know?",
    answer: "Batch (.bat/.cmd) for basic Windows automation, PowerShell (.ps1) for advanced Windows administration, Python (.py) for cross-platform automation, Shell/Bash for Linux/macOS",
    explanation: "Batch scripts use CMD commands for simple Windows automation (net user, robocopy, scheduled tasks). PowerShell is the modern Windows scripting environment with full .NET access — can manage Active Directory, registry, services. Python is versatile for cross-platform scripts, file processing, and API interactions. Bash is standard for Linux/macOS automation. File extensions: .bat/.cmd (batch), .ps1 (PowerShell), .py (Python), .sh (shell). PowerShell execution policy may need to be set to allow scripts: Set-ExecutionPolicy RemoteSigned."
  },
  {
    id: 239,
    category: "4.0 Operational Procedures",
    topic: "4.2 Scripting Basics",
    question: "What does a PowerShell execution policy control and how do you change it?",
    answer: "Controls which scripts can run: Restricted (no scripts), RemoteSigned (local scripts ok, downloaded must be signed), Unrestricted (all scripts) — change with Set-ExecutionPolicy",
    explanation: "PowerShell execution policies prevent accidental execution of malicious scripts. Policies: Restricted (default, no scripts allowed), AllSigned (all scripts must be digitally signed), RemoteSigned (local scripts run freely, downloaded scripts require a digital signature), Unrestricted (all scripts run, downloaded scripts warn). Change with: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser. Check current policy: Get-ExecutionPolicy. This is a common item on the A+ exam and real-world administration."
  },
  {
    id: 240,
    category: "4.0 Operational Procedures",
    topic: "4.3 Environmental & Safety",
    question: "What is the proper procedure for handling electrostatic discharge (ESD) when working with computer components?",
    answer: "Wear an anti-static wrist strap connected to ground, work on anti-static mat, handle components by edges, avoid carpet areas, keep components in anti-static bags",
    explanation: "ESD can damage or destroy electronic components with discharge invisible to humans (as little as 30V can damage ICs, while humans feel static at ~3000V). Preventions: Anti-static wrist strap (grounds you to the case). Anti-static mat (safe work surface). Touch bare metal on the case before touching components. Handle PCBs by edges, never touching ICs or traces. Store components in anti-static bags (silvery/pink). Avoid working in carpeted areas. Humidity above 50% reduces static buildup."
  },
  {
    id: 241,
    category: "4.0 Operational Procedures",
    topic: "4.3 Environmental & Safety",
    question: "What is a Material Safety Data Sheet (MSDS/SDS) and when is it required?",
    answer: "Document describing chemical hazards, safe handling, storage, disposal, and emergency response for a hazardous material — required for toner, cleaning solvents, batteries",
    explanation: "MSDS (now called SDS - Safety Data Sheet per GHS standard) documents: chemical composition, physical and chemical properties, health hazards, safe handling and storage, PPE requirements, first aid measures, fire and explosion data, spill cleanup, and disposal procedures. Required by OSHA for all hazardous materials in the workplace. Technicians encounter SDS for laser toner cartridges (fine powder is a respiratory hazard), cleaning solvents, thermal paste, and battery acid. Always review SDS before handling unfamiliar chemicals."
  },
  {
    id: 242,
    category: "4.0 Operational Procedures",
    topic: "4.4 Incident Response",
    question: "What are the steps in a basic incident response process?",
    answer: "1) Identify/detect, 2) Contain/isolate, 3) Eradicate (remove threat), 4) Recover (restore systems), 5) Lessons learned/report",
    explanation: "Incident response (based on NIST SP 800-61): Preparation (policies, tools, training before an incident). Identification (detect and confirm an incident occurred). Containment (limit damage — isolate affected systems from network). Eradication (remove malware, close vulnerabilities). Recovery (restore from backup, verify system integrity, monitor for recurrence). Lessons learned (document incident timeline, impact, response, and improvements). Chain of custody must be maintained for forensic evidence — document everything."
  },
  {
    id: 243,
    category: "4.0 Operational Procedures",
    topic: "4.4 Incident Response",
    question: "What is chain of custody in IT security and why does it matter?",
    answer: "Documentation tracking evidence handling from collection to court — records who collected it, when, where, and who had access — ensures evidence is admissible in legal proceedings",
    explanation: "Chain of custody is a legal concept ensuring digital evidence integrity. Proper procedure: 1) Document the system state before touching it (photos, hashes). 2) Use write blockers when making forensic copies. 3) Create a cryptographic hash (MD5/SHA-256) of evidence. 4) Seal evidence with tamper-evident measures. 5) Log every person who accesses the evidence with timestamps. 6) Verify hash matches when re-examining. Broken chain of custody can make evidence inadmissible in court. Always preserve original evidence — work from copies."
  },
  {
    id: 244,
    category: "2.0 Security",
    topic: "2.5 Wireless Security",
    question: "What are WEP, WPA, WPA2, and WPA3 and which should be used?",
    answer: "WEP: deprecated/broken (never use); WPA: deprecated; WPA2-AES (CCMP): current standard; WPA3: latest with SAE and enhanced protections",
    explanation: "WEP (Wired Equivalent Privacy) uses RC4 and can be cracked in minutes — never use. WPA (Wi-Fi Protected Access) improved over WEP but also deprecated. WPA2-Personal uses Pre-Shared Key (PSK) with AES-CCMP encryption — still widely used. WPA2-Enterprise uses 802.1X/RADIUS for per-user authentication. WPA3 replaces PSK with SAE (Simultaneous Authentication of Equals), provides forward secrecy, protects against offline dictionary attacks, and is required on new Wi-Fi 6 devices. Always use WPA2 or WPA3 minimum."
  },
  {
    id: 245,
    category: "2.0 Security",
    topic: "2.5 Wireless Security",
    question: "What security measures should be configured on a SOHO wireless router?",
    answer: "Change default admin password, use WPA2/WPA3, disable WPS, change SSID, enable firewall, disable remote management, update firmware, use guest network",
    explanation: "SOHO router hardening: 1) Change default admin credentials (admin/admin is exploitable). 2) Use WPA2-AES or WPA3 with a strong passphrase. 3) Disable WPS (Wi-Fi Protected Setup) — vulnerable to brute-force PIN attacks. 4) Change default SSID (reveals router model). 5) Enable built-in firewall. 6) Disable remote management from WAN unless needed. 7) Update firmware to patch vulnerabilities. 8) Use guest network for visitors to isolate from main network. 9) Disable UPnP if not needed."
  },
  {
    id: 246,
    category: "1.0 Operating Systems",
    topic: "1.5 Cloud Computing",
    question: "What are the three main cloud service models and what does each provide?",
    answer: "IaaS (VMs/networking), PaaS (development platform), SaaS (complete applications) — responsibility shifts from provider to customer as you move from SaaS to IaaS",
    explanation: "IaaS (Infrastructure as a Service): Provider manages physical hardware, hypervisor. Customer manages OS, middleware, apps. Examples: AWS EC2, Azure VMs. PaaS (Platform as a Service): Provider manages OS and runtime. Customer manages only the application and data. Examples: Azure App Service, Heroku, Google App Engine. SaaS (Software as a Service): Provider manages everything. Customer only uses the software. Examples: Microsoft 365, Salesforce, Google Workspace. The shared responsibility model defines security obligations for each party."
  },
  {
    id: 247,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is a VPN and what protocols are commonly used?",
    answer: "Virtual Private Network — encrypts traffic between client and corporate network over public internet; protocols: OpenVPN, IPSec/IKEv2, L2TP/IPSec, PPTP (deprecated), SSL/TLS VPN",
    explanation: "A VPN creates an encrypted tunnel over a public network (internet) to securely connect remote users or sites to a private network. Split tunneling sends only corporate traffic through VPN while other traffic goes directly to internet. Always-on VPN automatically connects. Common protocols: IPSec/IKEv2 (fast, mobile-friendly), OpenVPN (open-source, flexible), L2TP/IPSec (common, uses double encapsulation), WireGuard (modern, fast). PPTP is insecure — never use. SSL VPNs use port 443 and work through most firewalls."
  },
  {
    id: 248,
    category: "3.0 Software Troubleshooting",
    topic: "3.3 Mobile OS Troubleshooting",
    question: "What are common troubleshooting steps for a slow or unresponsive mobile device?",
    answer: "Soft reset/restart, close background apps, clear app cache, check storage space, update OS/apps, factory reset as last resort — also check for malware",
    explanation: "Mobile device troubleshooting: 1) Soft reset (restart) clears RAM and resolves most temporary issues. 2) Close background apps consuming CPU/RAM. 3) Clear app cache: Settings > Apps > [App] > Clear Cache. 4) Free up storage (devices slow at >90% full). 5) Update OS and apps — fixes bugs and security issues. 6) Check battery health (degraded batteries throttle CPU). 7) Scan for malware/unauthorized apps. 8) Factory reset removes all data but resolves software issues — back up first. 9) For iOS: check iCloud Backup, use iTunes/Finder for restoration."
  },
  {
    id: 249,
    category: "2.0 Security",
    topic: "2.6 Mobile Device Security",
    question: "What is mobile device management (MDM) and what can it control?",
    answer: "Software platform to remotely manage mobile devices — can enforce encryption, passcodes, app control, remote wipe, and compliance policies",
    explanation: "MDM solutions (Microsoft Intune, Jamf, VMware Workspace ONE) allow IT administrators to: enforce screen lock and PIN/password complexity, enable full-device encryption, control which apps can be installed, push certificates and Wi-Fi/VPN profiles, monitor compliance status, remotely lock a lost device, and remotely wipe all data from a lost/stolen device. BYOD (Bring Your Own Device) environments often use MAM (Mobile Application Management) to control only corporate apps without full device control."
  },
  {
    id: 250,
    category: "4.0 Operational Procedures",
    topic: "4.5 Professionalism",
    question: "What should a technician do when they encounter sensitive personal data during repairs?",
    answer: "Maintain confidentiality — do not read/copy/share personal data; inform management if discovering illegal content; follow organizational privacy policies; document actions",
    explanation: "Technicians often access customer files during repairs. Professional obligations: Do not read personal emails, documents, or photos unless absolutely necessary for the repair. Do not copy, share, or discuss customer data. If you discover what appears to be illegal content (CSAM, etc.): do not delete it (preserve evidence), do not access further, immediately report to management and follow their guidance for law enforcement reporting. Privacy laws (GDPR, HIPAA, CCPA) impose legal obligations on organizations handling personal data. Maintaining customer trust is paramount."
  },

  // ─────────────────────────────────────────────
  // NEW 220-1202 OBJECTIVES
  // ─────────────────────────────────────────────
  {
    id: 251,
    category: "1.0 Operating Systems",
    topic: "1.1 Windows Features",
    question: "What is Windows Subsystem for Linux (WSL2) and how does it differ from WSL1?",
    answer: "WSL2 runs a real Linux kernel in a lightweight Hyper-V VM — full syscall compatibility, better file I/O performance, supports Docker natively. WSL1 used translation layer.",
    explanation: "WSL (Windows Subsystem for Linux) allows running Linux distributions natively on Windows. WSL1 translated Linux syscalls to Windows equivalents — fast but not fully compatible. WSL2 runs an actual Linux kernel inside a lightweight Hyper-V virtual machine, providing full Linux binary compatibility, Docker support, and significantly better I/O performance with Linux file systems. Install with: 'wsl --install'. WSL2 is testable on 220-1202 as a key Windows OS feature for developers and power users."
  },
  {
    id: 252,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is Zero Trust security and how does it differ from traditional perimeter security?",
    answer: "Never trust, always verify — every user, device, and network request is authenticated and authorized regardless of location; replaces the 'trusted internal network' model",
    explanation: "Traditional perimeter security assumes everything inside the network is trusted (castle-and-moat model). Zero Trust assumes breach and requires: continuous verification of identity (MFA), device health checks (MDM compliance), least-privilege access, micro-segmentation of networks, and encrypted communication even internally. Key principles: verify explicitly, use least privilege access, assume breach. Technologies: Azure AD Conditional Access, Microsoft Intune, identity-based access policies. Driven by remote work, cloud adoption, and the realization that insider threats and lateral movement are major risks."
  },
  {
    id: 253,
    category: "2.0 Security",
    topic: "2.2 Social Engineering",
    question: "What are AI-enhanced social engineering threats and how should organizations defend against them?",
    answer: "AI-generated phishing emails (no typos, personalized), deepfake voice/video impersonation, AI-powered credential stuffing — defend with MFA, verification procedures, and security awareness training",
    explanation: "AI is enabling more sophisticated attacks: AI-written phishing emails are grammatically perfect and highly personalized using OSINT. Voice cloning can impersonate executives (CEO fraud/vishing). Deepfake video can be used in video calls for impersonation. AI-powered tools automate credential stuffing and password spraying at massive scale. Defenses: MFA (renders stolen passwords useless), out-of-band verification for unusual requests (call back on a known number), security awareness training that includes AI threat scenarios, and behavioral analytics to detect anomalies."
  },
  {
    id: 254,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is Windows Hello for Business and how does it replace passwords?",
    answer: "Enterprise passwordless authentication using biometrics (face/fingerprint) or PIN — backed by TPM-protected cryptographic keys, not transmitted over network",
    explanation: "Windows Hello for Business replaces passwords with asymmetric key-based authentication. When set up: a private key is stored in the device's TPM chip, a public key is registered with Azure AD or Active Directory. At login, the user proves possession of the private key via biometric (face, fingerprint) or PIN — the PIN is local and never transmitted. Because the private key never leaves the TPM, there is nothing to steal from a server breach. Requires: TPM 2.0, Windows 11 Pro/Enterprise, Azure AD or hybrid AD join. Recommended for 220-1202 as it relates to MFA and passwordless identity."
  },
  {
    id: 255,
    category: "4.0 Operational Procedures",
    topic: "4.2 Scripting Basics",
    question: "What are key improvements in PowerShell 7 compared to Windows PowerShell 5.1?",
    answer: "Cross-platform (Windows/Linux/macOS), open-source (.NET Core), parallel execution (ForEach-Object -Parallel), updated operators, better error handling, side-by-side installation",
    explanation: "PowerShell 7 (based on .NET Core/5+) is cross-platform and open-source, unlike Windows PowerShell 5.1 (Windows-only, closed-source .NET Framework). Key additions: ForEach-Object -Parallel for concurrent execution, null conditional operators (?. and ??=), ternary operator (condition ? true : false), improved error handling with Get-Error, Pipeline Chain Operators (&& and ||). PowerShell 7 installs side-by-side with Windows PowerShell 5.1 — they coexist. The pwsh command launches PowerShell 7; powershell launches 5.1."
  },
  {
    id: 256,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows Settings & Tools",
    question: "What are Windows 11's new security features compared to Windows 10?",
    answer: "Mandatory TPM 2.0, Secure Boot required, Virtualization-Based Security (VBS) on by default, Memory Integrity (HVCI), Smart App Control, Credential Guard enhanced",
    explanation: "Windows 11 security improvements: TPM 2.0 is mandatory (not optional). Secure Boot required. VBS (Virtualization-Based Security) is enabled by default — uses Hyper-V to isolate critical OS components. HVCI (Hypervisor-Protected Code Integrity / Memory Integrity) prevents injection of malicious code into kernel. Smart App Control uses AI/ML to block untrusted apps. Credential Guard protects NTLM hashes and Kerberos tickets in a VBS-isolated environment. These are testable 220-1202 objectives added to reflect Windows 11's security-by-default design."
  },
  {
    id: 257,
    category: "3.0 Software Troubleshooting",
    topic: "3.1 Windows Troubleshooting",
    question: "What is the Windows Reliability Monitor and how does it differ from Event Viewer?",
    answer: "Reliability Monitor (perfmon /rel) shows a visual timeline of stability and crash events — easier to correlate events vs Event Viewer's raw log format",
    explanation: "Reliability Monitor (perfmon /rel or search 'reliability') shows a graphical 1–10 stability index over time, plotting hardware failures, software crashes, Windows failures, and miscellaneous failures. Easy to spot: 'it started crashing after this date' by correlating with software installs. Event Viewer provides raw, detailed event logs with thousands of entries — more powerful but harder to navigate. For 220-1202, Reliability Monitor is often the first tool to check when investigating intermittent crashes or system instability over time."
  },
  {
    id: 258,
    category: "2.0 Security",
    topic: "2.4 Data Destruction",
    question: "What is BitLocker XTS-AES and how does it improve over the older CBC mode?",
    answer: "XTS-AES (XEX-based Tweaked CodeBook with ciphertext Stealing) — sector-level encryption with better diffusion, prevents pattern attacks on fixed-length disk sectors; default on Windows 11",
    explanation: "BitLocker uses AES encryption. In older Windows versions, CBC (Cipher Block Chaining) mode was used — vulnerable to pattern attacks on fixed-size disk sectors. XTS-AES (default in Windows 10 1511+ for new drives, standard in Windows 11) uses sector-based tweaking that prevents identical plaintext sectors from producing identical ciphertext — defeating attacks that exploit sector-level patterns. BitLocker supports 128-bit or 256-bit AES. For 220-1202, know that XTS-AES is the current BitLocker encryption mode and why it is preferred over CBC for disk encryption."
  },

  // ── 1.0 Operating Systems — File Systems & Storage ─────────────────────────
  {
    id: 259,
    category: "1.0 Operating Systems",
    topic: "1.1 File Systems",
    question: "Compare NTFS, FAT32, exFAT, and ReFS — what are the key differences for the A+ exam?",
    answer: "NTFS: max 16 TB file, journaling, permissions, encryption (Windows default). FAT32: max 4 GB file, universal compatibility. exFAT: large files on flash/USB, no journaling. ReFS: max 35 PB, self-healing, no BitLocker encryption drive support",
    explanation: "NTFS (New Technology File System) is the default for Windows drives — supports file/folder permissions, EFS encryption, quotas, journaling (crash recovery), and files up to 16 TB. FAT32 is limited to 4 GB per file and 8 TB partition; used for older flash drives and compatibility. exFAT (Extended FAT) removes the 4 GB file limit — ideal for large video files on USB drives and SD cards; no journaling. ReFS (Resilient File System) is used in Windows Server/Storage Spaces for very large volumes with self-healing checksums — not all Windows features (like BitLocker) are supported on ReFS. For 220-1202 know which file system to choose based on file size, OS, and use case."
  },
  {
    id: 260,
    category: "1.0 Operating Systems",
    topic: "1.1 File Systems",
    question: "What are ext4, APFS, and HFS+ and on which operating systems are they used?",
    answer: "ext4 = Linux default (journaling, large files). APFS (Apple File System) = macOS 10.13+/iOS default (snapshots, cloning, encryption). HFS+ = older Macs (macOS 10.12 and earlier)",
    explanation: "ext4 (Fourth Extended Filesystem) is the standard Linux file system — supports journaling, files up to 16 TB, volumes up to 1 EB; backwards compatible with ext2/ext3. APFS (Apple File System) replaced HFS+ starting with macOS High Sierra (10.13) — designed for SSDs with native encryption, snapshots (used by Time Machine), space sharing, and fast cloning without copying data. HFS+ (Mac OS Extended) was the Apple standard before APFS; still used on spinning HDDs and compatible with older macOS. For 220-1202 know: Linux uses ext4, modern Macs use APFS, older Macs used HFS+."
  },
  {
    id: 261,
    category: "1.0 Operating Systems",
    topic: "1.1 Disk Partitioning",
    question: "What is the difference between MBR and GPT partition styles?",
    answer: "MBR: max 2 TB disk, 4 primary partitions, legacy BIOS. GPT: max 9.4 ZB, 128 partitions, requires UEFI, includes redundant partition table backup",
    explanation: "MBR (Master Boot Record) stores the partition table in the first 512-byte sector — limited to 2 TB per disk and 4 primary partitions (or 3 primary + 1 extended with logical partitions inside). It works with legacy BIOS systems. GPT (GUID Partition Table) is part of the UEFI specification — supports disks over 2 TB, up to 128 partitions on Windows, and stores a backup copy of the partition table at the end of the disk for redundancy. Modern Windows installations on drives over 2 TB require GPT. For 220-1202: UEFI = GPT, legacy BIOS = MBR."
  },
  {
    id: 262,
    category: "1.0 Operating Systems",
    topic: "1.2 OS Installation",
    question: "What are the Windows OS upgrade vs. clean install vs. in-place upgrade differences?",
    answer: "Upgrade: keeps files/settings/apps. Clean install: wipes drive, fresh OS. In-place upgrade/repair install: reinstalls Windows over itself to fix OS corruption while keeping files and apps",
    explanation: "Windows installation types: (1) Upgrade — migrates existing files, settings, and applications to the new OS version; requires compatible existing OS. (2) Clean install — formats the target partition and installs fresh; removes all existing data. (3) In-place upgrade (repair install) — reinstalls the same or newer version of Windows over itself to fix system file corruption without removing user data or applications; useful when SFC/DISM can't fix corruption. (4) Image deployment — applies a pre-configured disk image (Sysprep + WIM/ISO) for multiple identical installations. For 220-1202 know when each method is appropriate."
  },
  {
    id: 263,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows Tools",
    question: "What do the following .msc commands open: compmgmt.msc, diskmgmt.msc, devmgmt.msc, eventvwr.msc, gpedit.msc, lusrmgr.msc?",
    answer: "compmgmt.msc = Computer Management. diskmgmt.msc = Disk Management. devmgmt.msc = Device Manager. eventvwr.msc = Event Viewer. gpedit.msc = Local Group Policy Editor. lusrmgr.msc = Local Users and Groups",
    explanation: "MMC (Microsoft Management Console) snap-ins accessed via Run dialog: compmgmt.msc opens Computer Management (hub for Device Manager, Disk Management, Services, etc.). diskmgmt.msc opens Disk Management for partition/volume tasks. devmgmt.msc opens Device Manager to manage hardware and drivers. eventvwr.msc opens Event Viewer for system/application/security logs. gpedit.msc opens Local Group Policy Editor (not available on Home editions). lusrmgr.msc opens Local Users and Groups to manage accounts and group membership. For 220-1202 memorize these shortcuts — they appear frequently in troubleshooting scenarios."
  },
  {
    id: 264,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows Tools",
    question: "What are the purposes of msinfo32, resmon, cleanmgr, and defrag in Windows?",
    answer: "msinfo32 = System Information (hardware summary). resmon = Resource Monitor (real-time CPU/RAM/disk/network per process). cleanmgr = Disk Cleanup (free space by removing temp files). defrag = Disk Defragmenter/Optimizer (reorganize HDD; TRIM for SSD)",
    explanation: "msinfo32 (System Information) provides a comprehensive summary: OS version, hardware resources, components, and software environment — useful for quick hardware inventory. resmon (Resource Monitor) extends Task Manager with per-process detail on CPU, memory, disk I/O, and network activity in real time. cleanmgr (Disk Cleanup) removes temporary files, Recycle Bin contents, Windows Update leftovers, and more — can recover gigabytes on older systems. defrag (Disk Defragmenter/Optimizer) reorganizes fragmented files on HDDs for faster access; on SSDs it runs TRIM (mark deleted blocks) instead of defragmenting. For 220-1202, know which tool to use for which diagnostic or maintenance task."
  },
  {
    id: 265,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows CLI",
    question: "What does diskpart do and what are its key subcommands?",
    answer: "diskpart is a CLI disk partitioning tool; key subcommands: list disk, select disk #, list partition, create partition primary, format fs=ntfs quick, assign letter=X, clean (wipes all data)",
    explanation: "diskpart is a powerful command-line disk management utility (must run as Administrator). Workflow: open diskpart → 'list disk' to see all disks → 'select disk 0' → 'list partition' → 'select partition 1' → then perform actions. 'create partition primary' creates a new primary partition. 'format fs=ntfs quick' does a quick format. 'assign letter=D' assigns a drive letter. 'clean' removes all partition and volume information from the disk (destructive — used for secure wiping). 'extend' and 'shrink' resize volumes. For 220-1202, diskpart is the CLI equivalent of Disk Management and is heavily tested for drive configuration tasks."
  },
  {
    id: 266,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows CLI",
    question: "What are robocopy and xcopy, and when is robocopy preferred?",
    answer: "robocopy (Robust File Copy): advanced file/folder copy with resume on interruption, mirror mode (/MIR), multi-threading, preserves timestamps/ACLs. xcopy: older copy tool, no resume; robocopy is preferred for large or networked transfers",
    explanation: "xcopy copies files and directory trees but lacks reliability features — it doesn't resume interrupted transfers. robocopy (Robust File Copy, built into Windows Vista+) is a much more powerful copy tool: supports /MIR (mirror source to destination, deleting extras), /MT (multi-threaded), /Z (restartable mode), /COPYALL (copies all file attributes including ACLs and timestamps), and /LOG (writes output to a log file). robocopy is the standard for backing up data, migrating profiles, or syncing directories. For 220-1202, know that robocopy is preferred over xcopy for any large-scale or mission-critical file copy operation."
  },
  {
    id: 267,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows CLI",
    question: "What do gpupdate and gpresult do?",
    answer: "gpupdate /force = immediately re-applies Group Policy settings. gpresult /r = displays the Resultant Set of Policy (RSoP) — which GPOs are applied to the current user/computer",
    explanation: "Group Policy is applied at logon and at periodic intervals (default ~90 minutes). gpupdate /force forces an immediate refresh of both computer and user policies without waiting for the next cycle. gpresult generates a Group Policy results report: gpresult /r shows a text summary of applied GPOs; gpresult /H report.html creates a detailed HTML report showing all applied and denied policies and the reason. These tools are critical for troubleshooting Group Policy issues — e.g., confirming that a password policy or software restriction policy is actually applied to a machine. For 220-1202 know both commands and their common switches."
  },
  {
    id: 268,
    category: "1.0 Operating Systems",
    topic: "1.3 Windows CLI",
    question: "What do tracert, pathping, and nslookup do?",
    answer: "tracert: traces route (hops) to a destination showing latency per hop. pathping: combines ping + tracert with packet loss stats per hop. nslookup: queries DNS to resolve hostnames to IP addresses (and reverse)",
    explanation: "tracert (trace route) sends ICMP packets with increasing TTL values to map each router hop to a destination — shows IP/hostname and round-trip latency per hop. Useful for identifying where in the network path delays or failures occur. pathping runs like tracert but then sends 100 packets to each hop and reports packet loss percentage — better for identifying unreliable links. nslookup queries DNS servers interactively: 'nslookup google.com' returns the IP; 'nslookup' then 'server 8.8.8.8' lets you query a specific DNS server. For 220-1202 know when to use each tool in network troubleshooting."
  },
  {
    id: 269,
    category: "1.0 Operating Systems",
    topic: "1.4 Windows Network",
    question: "What is the difference between a workgroup and a domain in Windows?",
    answer: "Workgroup: peer-to-peer, local accounts only, no central management, max ~10-20 PCs practical. Domain: centrally managed by Active Directory Domain Controller, domain accounts, Group Policy, single sign-on across resources",
    explanation: "Workgroups are decentralized — each PC manages its own user accounts. There is no central authentication: if you want to access a shared folder on another PC, you need a matching local account on that machine. Suitable for small home/office networks. Domains use Active Directory on a Windows Server Domain Controller — user accounts are stored centrally, Group Policy enforces settings across all machines, and users can log in to any domain-joined PC with a single domain account (SSO). IT administrators can manage software deployment, password policies, and access controls from one place. For 220-1202: domains are the enterprise standard; workgroups are for small/home environments."
  },
  {
    id: 270,
    category: "1.0 Operating Systems",
    topic: "1.5 macOS Features",
    question: "What are FileVault, Time Machine, Keychain, and Spotlight in macOS?",
    answer: "FileVault: full-disk encryption (XTS-AES-128). Time Machine: automatic incremental backup to external/network drive. Keychain: password/certificate manager. Spotlight: system-wide search (Cmd+Space)",
    explanation: "FileVault 2 encrypts the entire macOS startup disk using XTS-AES-128 encryption — similar to BitLocker on Windows. Time Machine automatically backs up the entire Mac to an external drive or Time Capsule/NAS, keeping hourly backups for 24 hours, daily for a month, and weekly for all previous months. Keychain Access stores Wi-Fi passwords, website logins, certificates, and secure notes — the macOS equivalent of Windows Credential Manager. Spotlight (Cmd+Space) is a universal search tool that indexes and searches files, emails, contacts, apps, and can do calculations and conversions. For 220-1202 know each macOS feature and its Windows equivalent."
  },
  {
    id: 271,
    category: "1.0 Operating Systems",
    topic: "1.5 macOS Features",
    question: "What is the macOS Terminal and what common commands does it share with Linux?",
    answer: "macOS Terminal provides a bash/zsh shell with Unix commands: ls, cd, pwd, cp, mv, rm, chmod, sudo, grep, man, top, ps, kill, brew (Homebrew package manager)",
    explanation: "macOS is built on Darwin (BSD Unix), so the Terminal gives access to Unix/POSIX command-line tools. Common commands: ls (list files), cd (change directory), pwd (print working directory), cp/mv/rm (copy/move/delete), chmod (change permissions), sudo (run as root), grep (search text), man (manual pages), top/ps (process monitoring), kill (terminate process). Homebrew (brew) is the popular package manager for macOS — similar to apt on Debian/Ubuntu. For 220-1202 know that macOS and Linux share many CLI commands and that the Terminal is the gateway to macOS system administration."
  },
  {
    id: 272,
    category: "1.0 Operating Systems",
    topic: "1.6 Linux Basics",
    question: "What are /etc/passwd, /etc/shadow, /etc/fstab, and /var/log in Linux?",
    answer: "/etc/passwd: user account info (username, UID, shell). /etc/shadow: hashed passwords (root-only). /etc/fstab: file systems to auto-mount at boot. /var/log: system log directory (syslog, auth.log, kern.log)",
    explanation: "Key Linux configuration files: /etc/passwd stores user account metadata — one line per user with fields: username:password-placeholder:UID:GID:comment:home:shell (passwords moved to /etc/shadow). /etc/shadow stores hashed passwords readable only by root — separates credential storage from account info for security. /etc/fstab (file systems table) defines which partitions/network shares mount automatically at boot, with options like read-only or noexec. /var/log contains system log files: /var/log/syslog or /var/log/messages for general logs, /var/log/auth.log for authentication events, /var/log/kern.log for kernel messages. For 220-1202 know the purpose of each file."
  },
  {
    id: 273,
    category: "1.0 Operating Systems",
    topic: "1.6 Linux Basics",
    question: "How does Linux file permission (chmod) work in octal notation?",
    answer: "Permissions: rwx = 4+2+1. Octal 755 = rwxr-xr-x (owner: all; group/others: read+execute). 644 = rw-r--r-- (owner: read+write; others: read only). chmod 755 file.sh",
    explanation: "Linux file permissions use a 3×3 grid: owner, group, others — each with read (r=4), write (w=2), execute (x=1). Octal values: 7=rwx, 6=rw-, 5=r-x, 4=r--, 0=---. chmod 755 file.sh sets owner=rwx(7), group=r-x(5), others=r-x(5) — typical for executable scripts. chmod 644 file.txt sets owner=rw-(6), group=r--(4), others=r--(4) — typical for config files. chmod 600 id_rsa sets owner=rw-, group/others=--- — required for SSH private keys. chown changes ownership: 'chown user:group file'. For 220-1202 know how to read and set octal permissions."
  },
  {
    id: 274,
    category: "1.0 Operating Systems",
    topic: "1.6 Linux Basics",
    question: "What is the difference between apt and dnf/yum package managers in Linux?",
    answer: "apt (Advanced Package Tool): Debian/Ubuntu-based distros. dnf (Dandified YUM) / yum: Red Hat/Fedora/CentOS-based distros. Both install, remove, and update packages from repositories",
    explanation: "Linux package managers handle software installation and updates: apt (apt-get/apt) is used on Debian, Ubuntu, Linux Mint, and derivatives — commands: 'apt update' (refresh repo index), 'apt upgrade' (update installed packages), 'apt install <pkg>', 'apt remove <pkg>'. yum (Yellowdog Updater Modified) was used on older RHEL/CentOS systems; dnf replaced yum starting with Fedora 18 and RHEL 8 — commands are similar: 'dnf install <pkg>', 'dnf update'. Both use package repositories. pacman is used on Arch Linux. For 220-1202 know which distro family uses which package manager."
  },

  // ── 2.0 Security — Physical Security ────────────────────────────────────────
  {
    id: 275,
    category: "2.0 Security",
    topic: "2.1 Physical Security",
    question: "What is a mantrap (access control vestibule) and what physical security controls complement it?",
    answer: "Mantrap/vestibule: two-door entry where the first door must close before the second opens — prevents tailgating. Complemented by: badge readers, biometrics, CCTV, bollards, cable locks, key fobs, smart cards",
    explanation: "A mantrap (also called an access control vestibule) uses two interlocked doors to create an airlock-style entry — only one door can be open at a time, preventing unauthorized tailgating. Physical security layers: badge readers (proximity cards/RFID) grant access to authorized personnel; key fobs are small RFID tokens; smart cards embed a microchip (CAC/PIV — used by US government/military); biometrics use fingerprint/retinal/facial recognition. CCTV (Closed-Circuit TV) provides surveillance and forensic evidence. Bollards (short metal posts) prevent vehicle ramming attacks. Cable locks physically secure laptops to desks. For 220-1202 know all physical security controls and the threats they mitigate."
  },
  {
    id: 276,
    category: "2.0 Security",
    topic: "2.1 Authentication",
    question: "How does TOTP (Time-based One-Time Password) work and what are its use cases?",
    answer: "TOTP generates a 6-digit code every 30 seconds using a shared secret + current time (RFC 6238); used in authenticator apps (Google Authenticator, Authy) as an MFA second factor",
    explanation: "TOTP is an algorithm (RFC 6238) that combines a shared secret key (provisioned via QR code during enrollment) with the current Unix timestamp divided into 30-second intervals — HMAC-SHA1 produces a 6-digit code. Both the server and the authenticator app calculate the same code independently — no network connection needed during code generation. TOTP is the standard behind most authenticator apps. It's a 'something you have' factor for MFA. HOTP (HMAC-based OTP) is similar but counter-based instead of time-based. For 220-1202 know TOTP as the mechanism behind authenticator app MFA and how it differs from SMS-based OTP (SMS is less secure due to SIM swapping)."
  },
  {
    id: 277,
    category: "2.0 Security",
    topic: "2.1 Authentication",
    question: "What is SAML and how does it enable Single Sign-On (SSO)?",
    answer: "SAML (Security Assertion Markup Language): XML-based standard for exchanging authentication/authorization data between an Identity Provider (IdP) and Service Provider (SP) — allows one login to access multiple apps",
    explanation: "SAML enables SSO in enterprise environments: the Identity Provider (IdP, e.g., Okta, Azure AD, ADFS) authenticates the user once; when the user accesses a Service Provider (SP, e.g., Salesforce, Office 365), the SP redirects to the IdP, which issues a SAML assertion (XML token) confirming the user's identity. The SP trusts this assertion and grants access — no second login needed. SAML is the backbone of enterprise SSO and federated identity. OAuth 2.0 and OpenID Connect (OIDC) are modern alternatives more suited to mobile/API scenarios. For 220-1202 know SAML as the SSO standard and the IdP/SP roles."
  },
  {
    id: 278,
    category: "2.0 Security",
    topic: "2.1 Authentication",
    question: "What is the difference between RADIUS, TACACS+, and Kerberos for network authentication?",
    answer: "RADIUS: UDP, encrypts only password, used for network access (Wi-Fi/VPN). TACACS+: TCP, encrypts entire payload, granular authorization per command (Cisco devices). Kerberos: ticket-based, Windows AD authentication, mutual authentication",
    explanation: "RADIUS (Remote Authentication Dial-In User Service): uses UDP ports 1812/1813, primarily for network access authentication (802.1X Wi-Fi, VPN). Only the password is encrypted in the packet — rest of the attributes are in cleartext. Common with ISP/enterprise Wi-Fi. TACACS+ (Terminal Access Controller Access-Control System Plus): TCP port 49, Cisco proprietary, encrypts the entire packet body, separates authentication/authorization/accounting (AAA), allows per-command authorization — preferred for managing network devices. Kerberos: Windows Active Directory's native authentication protocol — uses tickets (TGT from KDC) for mutual authentication without sending passwords over the network. For 220-1202 know use cases for each."
  },
  {
    id: 279,
    category: "2.0 Security",
    topic: "2.2 Attacks",
    question: "What is an on-path (man-in-the-middle) attack and how does ARP poisoning enable it?",
    answer: "On-path attack: attacker inserts themselves between two communicating hosts to intercept/modify traffic. ARP poisoning: attacker sends fake ARP replies mapping their MAC to another host's IP — redirecting traffic through the attacker",
    explanation: "An on-path (formerly 'man-in-the-middle') attack intercepts communication between two parties. ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on a local network — it is stateless and has no authentication, so attackers can send unsolicited ARP replies ('ARP poisoning' or 'ARP spoofing') that tell other hosts: 'the default gateway IP is at my MAC address.' Traffic destined for the gateway is then sent to the attacker, who forwards it (becoming transparent). Defenses: Dynamic ARP Inspection (DAI) on managed switches, static ARP entries, encrypted protocols (TLS/HTTPS). For 220-1202 know ARP poisoning as the enabling mechanism for on-path attacks on local networks."
  },
  {
    id: 280,
    category: "2.0 Security",
    topic: "2.2 Attacks",
    question: "What are brute force vs. dictionary vs. rainbow table attacks on passwords?",
    answer: "Brute force: try every possible combination. Dictionary: try words from a wordlist. Rainbow table: precomputed hash-to-password lookup table (defeated by salting)",
    explanation: "Brute force attacks try every possible character combination — guaranteed to find the password eventually but impractical for long passwords. Dictionary attacks use a wordlist of common passwords and words — much faster than brute force but fails on truly random passwords. Rainbow table attacks use precomputed tables of hash values to instantly reverse hash-to-password lookups — extremely fast but require huge storage. Defense against rainbow tables: salting — adding a random value (salt) to each password before hashing means the same password produces different hashes, making precomputed tables useless. For 220-1202: salt + bcrypt/Argon2 defeats rainbow tables; account lockout + CAPTCHA defeats brute force."
  },
  {
    id: 281,
    category: "2.0 Security",
    topic: "2.2 Attacks",
    question: "What are Business Email Compromise (BEC) and supply chain attacks?",
    answer: "BEC: attacker spoofs/hijacks executive email to trick employees into wire transfers or credential disclosure. Supply chain attack: compromising software/hardware before it reaches the end user (e.g., malicious update, tainted hardware component)",
    explanation: "Business Email Compromise (BEC) is a targeted social engineering attack — the attacker either spoofs a CEO/CFO email address or gains access to their actual account, then sends urgent wire transfer requests or credential phishing to finance/HR employees. BEC causes billions in losses annually (FBI IC3 top cybercrime by dollar value). Supply chain attacks compromise a trusted software update or hardware component to deliver malware to end users at scale — examples: SolarWinds (malicious update), compromised USB drives in manufacturing. Defenses: email authentication (DMARC/DKIM/SPF), out-of-band verification for wire transfers, vendor security assessments. For 220-1202 recognize these attack types and their defenses."
  },
  {
    id: 282,
    category: "2.0 Security",
    topic: "2.2 Attacks",
    question: "What are zero-day vulnerabilities and how do they differ from unpatched vulnerabilities?",
    answer: "Zero-day: vulnerability unknown to the vendor — no patch exists. Unpatched: vulnerability is known with an available patch that hasn't been applied. Zero-days are more dangerous because there is no defense other than mitigating controls",
    explanation: "A zero-day (0-day) vulnerability is one that is unknown to the software vendor — it has been 'zero days' since the vendor became aware of it, so no patch exists. Attackers who discover zero-days can exploit them with no official fix available. Detection relies on behavioral analysis (EDR/XDR), network anomaly detection, and exploit prevention features. Once disclosed (responsibly or publicly), the vendor races to issue a patch. An unpatched vulnerability has a known CVE and an available patch — applying Patch Tuesday updates (Windows), keeping software current, and vulnerability scanning addresses these. For 220-1202 know the difference and why zero-days require layered defenses beyond patch management."
  },
  {
    id: 283,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is Active Directory and what are its core components: domains, OUs, and Group Policy?",
    answer: "Active Directory (AD): Microsoft's LDAP/Kerberos-based directory service. Domain: administrative boundary. OU (Organizational Unit): container for organizing objects (users/computers/groups). GPO (Group Policy Object): settings applied to OUs/domains",
    explanation: "Active Directory Domain Services (AD DS) is the central identity management service in Windows enterprise environments. A domain is an administrative and security boundary — all computers and users share a common database on the Domain Controller (DC). OUs (Organizational Units) are like folders within the domain — you can organize users and computers into OUs (by department, location, role) and apply different GPOs to each OU. GPOs define security settings, software installation, desktop restrictions, and hundreds of other policies — they are linked to sites, domains, or OUs and applied via Group Policy. For 220-1202 know the AD hierarchy: Forest → Domain → OU → Objects, and how GPOs flow downward."
  },
  {
    id: 284,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is DLP (Data Loss Prevention) and how does it work?",
    answer: "DLP: monitors and blocks unauthorized transfer of sensitive data (PII, PHI, credit card numbers) via email, USB, web upload, or printing — uses content inspection and policy rules",
    explanation: "Data Loss Prevention (DLP) solutions prevent sensitive data from leaving the organization through unauthorized channels. DLP agents inspect content in motion (network traffic — emails, web uploads), in use (endpoint activity — copy to USB, printing), and at rest (stored data scanning). DLP policies define what counts as sensitive: credit card patterns (PCI), SSNs (PII), health records (PHI/HIPAA), source code, etc. When a policy match is detected, DLP can block, quarantine, encrypt, or alert. Examples: blocking emailing a document with 10+ credit card numbers, preventing USB copy of files tagged 'Confidential'. For 220-1202 know DLP as a control for data exfiltration prevention."
  },
  {
    id: 285,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is Privileged Access Management (PAM) and just-in-time access?",
    answer: "PAM: secures, monitors, and controls access to privileged accounts (admin/root). Just-in-time (JIT) access: grants elevated permissions only for the duration needed, then auto-revokes — reduces standing privilege exposure",
    explanation: "Privileged Access Management (PAM) solutions vault privileged credentials (local admin, service accounts, root), enforce MFA for privilege use, record privileged sessions, and provide audit trails. Just-in-time (JIT) access (also called zero standing privileges) means users have no persistent admin rights — they request elevated access for a task, receive it for a limited time window, and it's automatically revoked. This minimizes the attack surface: even if credentials are compromised, there are no persistent admin accounts to abuse. Examples: Microsoft PIM (Privileged Identity Management) in Azure AD, CyberArk, BeyondTrust. For 220-1202 know PAM as the solution for controlling privileged account risk."
  },
  {
    id: 286,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What are the key elements of a Windows password policy and account lockout policy?",
    answer: "Password policy: minimum length (12+ chars), complexity (upper/lower/number/symbol), max age (90 days), history (24 passwords). Account lockout: threshold (5 attempts), duration (30 min), reset counter (30 min)",
    explanation: "Windows password policy (via Group Policy → Computer Configuration → Windows Settings → Security Settings → Account Policies): Minimum password length: 8+ characters (NIST recommends 12+). Password complexity: enforces mix of character types. Maximum password age: how long before forced change (NIST now discourages routine expiration without compromise indication). Password history: prevents reusing recent passwords. Account lockout policy: Lockout threshold: number of failed attempts before lockout (e.g., 5). Lockout duration: how long the account stays locked. Reset counter: time window for counting failed attempts. For 220-1202 know these settings and where they are configured."
  },
  {
    id: 287,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is a screened subnet (DMZ) and how does it differ from a standard network segmentation?",
    answer: "Screened subnet (DMZ): semi-trusted network zone between the internet and the internal LAN — hosts public-facing servers (web, email, DNS). Traffic flows: Internet → DMZ → (filtered) → Internal LAN. Prevents direct internet access to internal resources",
    explanation: "A screened subnet (traditionally called a DMZ — Demilitarized Zone) is created using two firewalls or a three-interface firewall: the outer firewall allows internet traffic to the DMZ; the inner firewall restricts what DMZ servers can access on the internal LAN. Public-facing services (web servers, email gateways, DNS) live in the DMZ — if compromised, attackers can't directly reach internal systems. SOHO routers implement a simpler version: port forwarding exposes specific services without a full DMZ. For 220-1202 know the screened subnet architecture and why separating public-facing servers from the internal network reduces attack surface."
  },
  {
    id: 288,
    category: "2.0 Security",
    topic: "2.3 SOHO Security",
    question: "What SOHO router security settings should always be configured?",
    answer: "Change default admin credentials, disable WPS, use WPA3/WPA2-AES, disable remote management, enable firewall, disable UPnP, set up guest network for IoT/visitors, update firmware",
    explanation: "SOHO (Small Office/Home Office) router hardening checklist: (1) Change default username/password — default credentials are publicly known. (2) Disable WPS (Wi-Fi Protected Setup) — vulnerable to PIN brute force attacks. (3) Use WPA3 (or WPA2-AES at minimum) — avoid WEP and TKIP. (4) Disable remote management — prevents internet-accessible admin panel. (5) Enable the built-in SPI firewall. (6) Disable UPnP (Universal Plug and Play) — automatically opens ports, creating security holes. (7) Create a separate guest network for IoT devices and visitors — isolates them from the main LAN. (8) Keep firmware updated. For 220-1202 know all of these hardening steps."
  },
  {
    id: 289,
    category: "2.0 Security",
    topic: "2.3 Browser Security",
    question: "What browser security features should technicians configure for end-user protection?",
    answer: "Enable: automatic updates, pop-up blocker, HTTPS-only mode, DNS-over-HTTPS (DoH). Audit: extensions (remove untrusted ones). Use: private/incognito mode for sensitive browsing. Set: browser proxy settings for corporate environments",
    explanation: "Browser security configuration for end users: Keep browsers updated — most exploits target unpatched browsers. Pop-up blocker prevents malvertising. HTTPS-only mode forces encrypted connections — warns on HTTP sites. DNS-over-HTTPS (DoH) encrypts DNS queries so ISPs and eavesdroppers can't see which domains you're resolving. Extensions are a major attack vector — malicious browser extensions can steal credentials and inject ads; audit and remove unnecessary ones. Private/incognito mode doesn't save history, cookies, or form data locally (but doesn't hide traffic from ISP/employer). Corporate proxy settings route traffic through a filtering proxy for content inspection. For 220-1202 know these settings in context of user support."
  },
  {
    id: 290,
    category: "2.0 Security",
    topic: "2.3 Mobile Security",
    question: "What is MDM (Mobile Device Management) and what can it enforce on managed devices?",
    answer: "MDM: centrally manages mobile devices. Can enforce: screen lock/PIN, full-device encryption, remote wipe, app allowlist/blocklist, VPN profiles, certificate deployment, container separation (BYOD), jailbreak/root detection",
    explanation: "MDM (Mobile Device Management) solutions (e.g., Microsoft Intune, Jamf, VMware Workspace ONE) enroll devices and push configuration profiles. Key MDM capabilities: screen lock enforcement (PIN/biometric required), minimum passcode complexity, full device encryption, remote wipe (full or selective), push app installs/removals, VPN/Wi-Fi/email profile configuration, certificate distribution, containerization (separates work data from personal on BYOD devices), jailbreak/root detection and compliance policy (can quarantine non-compliant devices). MAM (Mobile Application Management) manages only apps without full device control. For 220-1202 know MDM as the enterprise solution for mobile device security."
  },
  {
    id: 291,
    category: "2.0 Security",
    topic: "2.4 Malware Removal",
    question: "What are the 10 steps of the CompTIA malware removal process?",
    answer: "1. Investigate/identify symptoms. 2. Quarantine infected system. 3. Disable System Restore. 4. Remediate (remove malware in safe mode). 5. Schedule scans/update AV. 6. Enable System Restore + create restore point. 7. Re-enable network. 8. Educate end user. 9. Document findings. 10. Verify system functionality",
    explanation: "CompTIA's official malware removal procedure: (1) Identify symptoms and research malware type. (2) Quarantine — disconnect from network to prevent spread/C2 communication. (3) Disable System Restore — prevents malware from hiding in restore points. (4) Remediate — boot to safe mode or WinPE, run updated AV/anti-malware scanners, manually remove if needed. (5) Schedule follow-up scans; ensure AV definitions are current. (6) Re-enable System Restore; create a clean restore point. (7) Reconnect to network. (8) Educate the user on how the infection occurred. (9) Document all findings, actions, and tools used. (10) Verify all applications and network resources function normally. For 220-1202 know this sequence in order."
  },
  {
    id: 292,
    category: "2.0 Security",
    topic: "2.3 Security Controls",
    question: "What is AutoRun vs. AutoPlay and why should AutoRun be disabled?",
    answer: "AutoRun: automatically executes a program from removable media when connected (security risk — can auto-run malware). AutoPlay: prompts the user to choose an action. AutoRun should be disabled via Group Policy; AutoPlay is acceptable with user control",
    explanation: "AutoRun reads autorun.inf from removable media (USB, CD) and automatically launches the specified executable — historically a major malware vector (Conficker worm spread via AutoRun). Microsoft disabled AutoRun for USB drives by default starting in Windows 7 SP1 and released patches for earlier versions. AutoPlay still prompts the user with action choices (open files, play media) but does not auto-execute programs — it's safer but should still be configured appropriately. Group Policy: 'Turn off AutoPlay' / 'Prevent AutoRun' under Computer Configuration → Administrative Templates → Windows Components. For 220-1202 know the security distinction and that AutoRun should be disabled."
  },

  // ── 3.0 Software Troubleshooting ────────────────────────────────────────────
  {
    id: 293,
    category: "3.0 Software Troubleshooting",
    topic: "3.1 Windows Boot Errors",
    question: "What causes 'NTLDR is missing' and 'Bootmgr is missing' errors and how are they fixed?",
    answer: "NTLDR missing = Windows XP boot loader error (wrong partition active or corrupt boot files). Bootmgr missing = Windows Vista/7/8/10/11 error. Fix: boot from Windows media → Startup Repair or bootrec /fixmbr, /fixboot, /rebuildbcd",
    explanation: "NTLDR (NT Loader) is the Windows XP boot loader — 'NTLDR is missing' appears when the active partition is wrong, the drive boot order has changed, or NTLDR/boot.ini are missing/corrupt. Fix: set correct active partition in Recovery Console, copy NTLDR from install media. Bootmgr is Windows Vista+ boot manager — 'Bootmgr is missing' has similar causes. Fix using bootrec from Windows Recovery Environment (WinRE): 'bootrec /fixmbr' (rewrites MBR), 'bootrec /fixboot' (rewrites boot sector), 'bootrec /rebuildbcd' (rebuilds Boot Configuration Data store). Also 'bootrec /scanos' scans for Windows installations to add to BCD. For 220-1202 know these commands and their order."
  },
  {
    id: 294,
    category: "3.0 Software Troubleshooting",
    topic: "3.1 Windows Troubleshooting",
    question: "What causes a 'slow roaming profile' or 'temporary profile' issue and how is it resolved?",
    answer: "Slow roaming profile: large profile size (too many files in Documents/Desktop syncing over slow WAN). Temporary profile: corrupted or locked profile causes Windows to create a temp profile at logon. Fix: clean up profile size, check profile path, delete/rename corrupt profile key in registry (HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList)",
    explanation: "Roaming profiles store user data on a network share and sync at logon/logoff — slow performance usually means the profile is too large (videos, large Outlook PST files) or the network connection is slow. Solutions: redirect Documents/Desktop to a separate share (Folder Redirection), set profile size limits via Group Policy. Temporary profile at logon: Windows creates a temp profile (TEMP) when it cannot load the actual profile — caused by locked/in-use profile files, permission issues, or corruption. Check: Event Viewer for profile service errors, Registry: HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList — look for a .bak entry or SID with wrong path. Delete or rename the corrupt entry and re-log. For 220-1202 know both issues and their fixes."
  },
  {
    id: 295,
    category: "3.0 Software Troubleshooting",
    topic: "3.2 Mobile Troubleshooting",
    question: "What troubleshooting steps address mobile app crashes and failed app installs?",
    answer: "App crash: force stop → clear cache → clear app data → uninstall/reinstall → check OS version compatibility. Failed install: check storage space, check app permissions, re-download, check for sideloading restrictions, verify app store account",
    explanation: "Mobile app troubleshooting approach: For crashes — Force Stop the app (Settings → Apps), then clear cache (removes temporary files, often fixes crashes without data loss), clear app data (resets app to fresh state — loses settings/login), uninstall and reinstall, check if the app requires a newer OS version. For failed installs — verify sufficient storage (apps often need 2× their size for installation), check that downloads can proceed (network/Wi-Fi), ensure the app store account is signed in, check for enterprise restrictions (MDM may block certain apps), verify the device is not in low-storage mode. Sideloading (installing APKs outside the Play Store on Android) requires enabling 'Install unknown apps' — a security risk. For 220-1202 know this systematic approach."
  },
  {
    id: 296,
    category: "3.0 Software Troubleshooting",
    topic: "3.2 Mobile Troubleshooting",
    question: "What are jailbreaking (iOS) and rooting (Android), and what security risks do they introduce?",
    answer: "Jailbreaking: removes iOS sandbox restrictions to install unsigned apps and system tweaks. Rooting: grants root/superuser access on Android. Both bypass OS security model — risks: malware, loss of warranty, no OTA updates, MDM non-compliance",
    explanation: "Jailbreaking exploits iOS vulnerabilities to remove Apple's code signing enforcement — allows installing apps from unofficial stores (Cydia), system-level tweaks, and custom themes. Rooting Android gives superuser (root) access — allows full control over the OS, custom ROMs, and unrestricted app permissions. Security risks of both: (1) Malware can be installed without OS-level sandboxing restrictions. (2) Official updates may break the jailbreak/root or be blocked by the user. (3) Device warranty is voided. (4) MDM policies detect jailbreak/root status and can block corporate access or wipe the device. (5) Banking and payment apps often refuse to run on jailbroken/rooted devices. For 220-1202 recognize these as security risks in mobile device management."
  },
  {
    id: 297,
    category: "3.0 Software Troubleshooting",
    topic: "3.3 Malware Symptoms",
    question: "What are browser hijacking symptoms and how is it removed?",
    answer: "Symptoms: changed homepage/search engine, unwanted toolbars, pop-up ads, redirects to unknown sites. Removal: uninstall suspicious browser extensions, reset browser settings, run anti-malware scan, check startup entries (msconfig/Task Scheduler), remove suspicious programs from Add/Remove Programs",
    explanation: "Browser hijacking is a type of malware/PUP (Potentially Unwanted Program) that modifies browser settings without permission. Symptoms: home page changed to unknown site, search results redirected through a different search engine injecting ads, unwanted toolbars, constant pop-ups, or browser opening tabs to ad sites. Removal steps: (1) Remove suspicious extensions in browser settings. (2) Reset browser to default settings. (3) Run anti-malware (Malwarebytes is effective for PUPs). (4) Check msconfig/Task Scheduler for persistent startup entries. (5) Uninstall suspicious programs via Control Panel. (6) Check browser shortcut target — malware sometimes adds a URL to the desktop shortcut's target field. For 220-1202 know these symptoms and removal steps."
  },
  {
    id: 298,
    category: "3.0 Software Troubleshooting",
    topic: "3.3 Malware Symptoms",
    question: "What is a false positive in antivirus software and why is it a problem?",
    answer: "False positive: AV software flags a legitimate file as malware. Problem: can quarantine/delete critical system files, block legitimate applications, disrupt operations — IT must whitelist/exclude the file and report to AV vendor",
    explanation: "Antivirus false positives occur when legitimate software triggers a malware signature — usually due to code patterns that resemble known malware, or overly aggressive heuristic detection. Famous examples: AV products quarantining their own update files, or flagging custom in-house software. Impact: quarantined system files can cause application crashes or even prevent Windows from booting; business applications blocked can halt operations. Response: add the file/path to the AV exclusion list (whitelist) in the AV management console, restore the quarantined file if safe, report the false positive to the AV vendor. For 220-1202 know false positives as a legitimate AV problem requiring exclusion management — distinct from actual malware."
  },
  {
    id: 299,
    category: "3.0 Software Troubleshooting",
    topic: "3.1 Windows Troubleshooting",
    question: "What tools and steps fix a failed Windows Update?",
    answer: "Steps: run Windows Update Troubleshooter, clear SoftwareDistribution folder, run 'net stop wuauserv', DISM /Online /Cleanup-Image /RestoreHealth, SFC /scannow, check Windows Update logs (%windir%\\Logs\\WindowsUpdate)",
    explanation: "Windows Update failures are often caused by corrupted update cache or damaged system files. Fix steps: (1) Run the built-in Windows Update Troubleshooter (Settings → Troubleshoot). (2) Stop Windows Update service: 'net stop wuauserv', then delete the contents of C:\\Windows\\SoftwareDistribution\\Download (the update cache), then restart: 'net start wuauserv'. (3) Run 'DISM /Online /Cleanup-Image /RestoreHealth' to repair the Windows image from Windows Update servers. (4) Run 'SFC /scannow' to fix protected system files. (5) Check %windir%\\Logs\\WindowsUpdate for specific error codes. Common error codes: 0x80070057 (invalid parameter), 0x800F0922 (cannot connect), 0x80073712 (missing file). For 220-1202 know this troubleshooting sequence."
  },

  // ── 4.0 Operational Procedures ──────────────────────────────────────────────
  {
    id: 300,
    category: "4.0 Operational Procedures",
    topic: "4.1 Documentation",
    question: "What is a ticketing system and what information should every support ticket contain?",
    answer: "Ticketing system (e.g., ServiceNow, Jira, Zendesk): tracks IT incidents/requests. Every ticket should include: user/device info, problem description, date/time, priority/severity, assigned technician, steps taken, resolution, closure date",
    explanation: "A ticketing (ITSM) system is central to IT service management — it creates a documented, trackable record of every incident, service request, and change. Key ticket fields: User name and contact info, Device/asset ID, Detailed problem description, Date and time reported, Priority/severity level (P1 critical to P4 informational), Assigned technician, All troubleshooting steps performed, Resolution description, Root cause (if identified), Time to resolution, Closure confirmation from user. Good documentation enables: trend analysis (recurring issues), SLA compliance tracking, knowledge base building, audit trails, and handoff between technicians. For 220-1202 know ticketing as a required operational procedure."
  },
  {
    id: 301,
    category: "4.0 Operational Procedures",
    topic: "4.1 Asset Management",
    question: "What is an asset management system / CMDB and why is it important for IT operations?",
    answer: "Asset management tracks all IT assets (hardware/software/licenses). CMDB (Configuration Management Database): maps CIs (Configuration Items) and their relationships — supports change management, incident response, and compliance auditing",
    explanation: "Asset management maintains an inventory of all IT assets: hardware (computers, servers, printers, network devices), software licenses, and cloud subscriptions. Key data: asset tag/serial number, purchase date, warranty expiry, assigned user/location, software versions, and license counts. A CMDB (Configuration Management Database) extends this to map the relationships between Configuration Items (CIs) — e.g., which applications run on which servers, which servers support which business services. CMDBs are critical for: change impact analysis (what breaks if I update this server?), incident resolution (what changed recently?), compliance (are all assets licensed?), and disaster recovery planning. For 220-1202 know asset management and CMDB as core ITSM components."
  },
  {
    id: 302,
    category: "4.0 Operational Procedures",
    topic: "4.2 Change Management",
    question: "What is the IT change management process and what are the key document types involved?",
    answer: "Process: request change → document RFC → risk assessment → CAB approval → sandbox testing → implement → verify → document. Key docs: RFC (Request for Change), change log, rollback plan. Change types: standard (pre-approved), normal (CAB review), emergency (expedited CAB)",
    explanation: "Change management ensures changes to IT systems are planned, tested, and documented to minimize risk. Process flow: (1) Submit RFC (Request for Change) detailing what, why, when, and risk. (2) Risk assessment — what could go wrong? Impact on users/business? (3) CAB (Change Advisory Board) reviews and approves/denies normal changes. (4) Test in sandbox/staging environment. (5) Schedule maintenance window. (6) Implement change. (7) Verify functionality. (8) Document outcomes and update CMDB. Rollback plan: every change must have a documented plan to reverse it if things go wrong. Standard changes are pre-approved (e.g., routine patch application). Emergency changes skip full CAB but require retrospective documentation. For 220-1202 know this process."
  },
  {
    id: 303,
    category: "4.0 Operational Procedures",
    topic: "4.2 Backup Types",
    question: "What are full, incremental, differential, and synthetic full backups?",
    answer: "Full: copies all data, clears archive bit. Incremental: copies only changed data since last backup (any type), clears archive bit — fast backup, slow restore. Differential: copies all changes since last full, does NOT clear archive bit — slower backup, faster restore. Synthetic full: combines last full + all incrementals into a new full without re-reading source data",
    explanation: "Backup strategies use the archive bit (a file attribute set when a file changes): Full backup: copies everything, clears archive bit for all files. Incremental: copies only files changed since last full OR incremental, clears archive bit — minimum daily backup size, but restore requires the last full + every incremental since. Differential: copies all files changed since the last full backup (doesn't clear archive bit) — grows over time but restore needs only the last full + the latest differential. Synthetic full: backup software assembles a new full backup from existing full + incrementals on the backup server — no load on the production system. For 220-1202 know restore time vs backup time tradeoffs for each type."
  },
  {
    id: 304,
    category: "4.0 Operational Procedures",
    topic: "4.2 Backup Strategy",
    question: "What is the 3-2-1 backup rule and the GFS (Grandfather-Father-Son) rotation scheme?",
    answer: "3-2-1 rule: 3 copies of data, on 2 different media types, with 1 copy offsite. GFS rotation: daily (Son) backups, weekly (Father) full backups, monthly (Grandfather) full backups — provides tiered retention",
    explanation: "The 3-2-1 backup rule is the gold standard for backup strategy: 3 total copies of data (1 original + 2 backups), stored on 2 different media types (e.g., local NAS + tape/cloud), with 1 copy offsite (protects against site-level disasters like fire/flood). GFS (Grandfather-Father-Son) tape rotation maximizes media reuse while providing tiered retention: Son = daily incremental/differential backups (kept 1 week). Father = weekly full backups (kept 1 month). Grandfather = monthly full backups (kept 1 year or longer). A newer extension is 3-2-1-1-0: adds 1 offline/immutable copy and 0 errors verified by restore testing. For 220-1202 know both the 3-2-1 rule and GFS rotation."
  },
  {
    id: 305,
    category: "4.0 Operational Procedures",
    topic: "4.2 Power Management",
    question: "What are the different types of UPS (Uninterruptible Power Supply) and a surge suppressor?",
    answer: "Standby UPS: switches to battery on power loss (small gap). Line-interactive UPS: regulates voltage sags/surges + battery backup. Online/double-conversion UPS: always runs on battery (best protection, no transfer gap). Surge suppressor: protects against voltage spikes only — no battery",
    explanation: "UPS types for 220-1202: Standby (offline) UPS: monitors power and switches to battery in ~10ms on failure — basic protection for small office devices. Line-interactive UPS: adds an AVR (Automatic Voltage Regulator) that handles brownouts/surges without switching to battery — better for areas with fluctuating power. Online (double-conversion) UPS: AC input is always converted to DC to charge the battery, then back to clean AC for the load — zero transfer time, completely isolated from power issues — required for servers and sensitive equipment. Surge suppressor: MOV (Metal Oxide Varistor) components absorb voltage spikes but provide NO battery backup — only protects against surges, not outages. For 220-1202 match each type to its use case."
  },
  {
    id: 306,
    category: "4.0 Operational Procedures",
    topic: "4.3 Incident Response",
    question: "What is the order of volatility in digital forensics and why does it matter?",
    answer: "Most volatile → least volatile: CPU registers/cache → RAM → network state/connections → running processes → disk (HDD/SSD) → optical/removable media → backups/logs/archives. Collect most volatile data first before it's lost",
    explanation: "Order of volatility guides first responders in digital forensics — collect evidence from most volatile (lost quickly) to least volatile (persists longest): (1) CPU registers, cache, and RAM — lost when powered off; contains encryption keys, passwords, running processes. (2) Network connections — ARP tables, routing tables, open sockets — change rapidly. (3) Running processes — process list, open handles. (4) Hard disk contents — non-volatile but can be modified. (5) Optical/removable media — CDs, USB drives. (6) Backups, logs, archives — most persistent. For 220-1202 know this order. Also: before touching a potentially compromised system, document its current state, preserve RAM (live forensics if possible), and never run tools that modify the disk."
  },
  {
    id: 307,
    category: "4.0 Operational Procedures",
    topic: "4.3 Incident Response",
    question: "What are the key steps in the CompTIA incident response process?",
    answer: "1. Identify (detect incident). 2. Contain (limit damage — quarantine). 3. Eradicate (remove threat). 4. Recover (restore systems). 5. Lessons learned (post-mortem, documentation). Chain of custody: document evidence handling throughout",
    explanation: "CompTIA's incident response process aligns with NIST SP 800-61: (1) Identification — detect the incident through alerts, user reports, or monitoring tools. (2) Containment — short-term: isolate affected systems; long-term: patch/fix root cause without destroying evidence. (3) Eradication — remove malware, close vulnerabilities, reset compromised credentials. (4) Recovery — restore systems from clean backups, verify functionality, monitor closely. (5) Post-incident activity (Lessons Learned) — document timeline, impact, what worked, what didn't, process improvements. Chain of custody: every piece of evidence must be documented — who collected it, when, how it was stored, who had access — to maintain legal admissibility. For 220-1202 know this sequence."
  },
  {
    id: 308,
    category: "4.0 Operational Procedures",
    topic: "4.3 Regulatory Compliance",
    question: "What are HIPAA, PCI DSS, GDPR, and SOX — and what data do they protect?",
    answer: "HIPAA: US law protecting PHI (patient health info) — healthcare providers/insurers. PCI DSS: payment card data security standard — any entity processing credit cards. GDPR: EU regulation protecting EU residents' personal data. SOX: US law requiring financial record integrity — public companies",
    explanation: "Key compliance frameworks for 220-1202: HIPAA (Health Insurance Portability and Accountability Act): US federal law — protects PHI (Protected Health Information), requires safeguards for medical records, breach notification within 60 days. PCI DSS (Payment Card Industry Data Security Standard): industry standard (Visa/Mastercard) — 12 requirements for securing cardholder data, mandatory for merchants/processors. GDPR (General Data Protection Regulation): EU law — right to access, right to erasure ('right to be forgotten'), data breach notification within 72 hours, privacy by design; applies to any organization handling EU residents' data regardless of location. SOX (Sarbanes-Oxley): US law for public companies — financial reporting integrity, IT controls for financial systems. Know which data type each regulation covers."
  },
  {
    id: 309,
    category: "4.0 Operational Procedures",
    topic: "4.3 Regulatory Compliance",
    question: "What are NDA, AUP, and data retention policies in IT operations?",
    answer: "NDA (Non-Disclosure Agreement): legal contract preventing disclosure of confidential information. AUP (Acceptable Use Policy): defines permitted use of company IT resources. Data retention policy: specifies how long data must be kept before disposal (driven by legal/regulatory requirements)",
    explanation: "NDA (Non-Disclosure Agreement): employees and contractors sign NDAs to protect trade secrets, client data, and proprietary information — violations can result in legal liability. AUP (Acceptable Use Policy): defines what employees may and may not do with company computers, networks, and internet access — covers personal use, prohibited content, social media, etc.; must be signed during onboarding. Data retention policy: legal and regulatory requirements dictate minimum retention periods: HIPAA medical records: 6 years. GDPR: only as long as necessary for stated purpose. Financial records (SOX): 7 years. After the retention period, data must be securely destroyed per the data destruction policy. For 220-1202 know these policies and their purposes."
  },
  {
    id: 310,
    category: "4.0 Operational Procedures",
    topic: "4.4 Scripting",
    question: "What are common use cases for scripting in IT operations (CompTIA A+ 220-1202)?",
    answer: "Scripting use cases: automated user onboarding/offboarding, batch file operations, automated backups, log parsing, system health checks, software deployment, network configuration, scheduled maintenance tasks",
    explanation: "The 220-1202 exam tests understanding of when and why to use scripts, not deep coding skills. Common scripting use cases: (1) Automated user onboarding/offboarding — create/disable AD accounts, set permissions, send welcome emails. (2) Batch file operations — rename/move/copy files in bulk, process reports. (3) Automated backups — schedule robocopy or rsync to run nightly. (4) Log parsing — filter event logs for security events, extract error codes. (5) System health checks — check disk space, CPU usage, service status across multiple machines. (6) Software deployment — push MSI packages silently. (7) Network configuration — configure IP settings on multiple devices. PowerShell is the preferred tool for Windows automation; bash/Python for Linux/macOS. Know use cases over syntax."
  },
  {
    id: 311,
    category: "4.0 Operational Procedures",
    topic: "4.4 Remote Access",
    question: "What remote access technologies does the 220-1202 exam cover?",
    answer: "RDP (Remote Desktop Protocol, port 3389): Windows graphical remote desktop. SSH (port 22): secure CLI remote access (Linux/network devices). VNC: graphical remote access (cross-platform). VPN: encrypted tunnel to private network. Screen sharing/remote support tools: RMM (Remote Monitoring & Management), TeamViewer, Remote Assistance",
    explanation: "Remote access technologies for 220-1202: RDP (Remote Desktop Protocol): Microsoft's protocol for full graphical remote desktop sessions to Windows machines — port 3389 TCP, requires Network Level Authentication (NLA) for security. SSH (Secure Shell): encrypted CLI access to Linux/Unix systems and network equipment — port 22; use SSH keys instead of passwords for better security. VNC (Virtual Network Computing): cross-platform graphical remote access; less secure than RDP, should be tunneled through SSH or VPN. VPN creates an encrypted tunnel between the client and corporate network — allows remote workers to access internal resources as if on-site. RMM (Remote Monitoring and Management) tools: allow IT teams to remotely manage, monitor, and support multiple endpoints simultaneously. Windows Remote Assistance (Quick Assist): invite-based support session."
  },
  {
    id: 312,
    category: "4.0 Operational Procedures",
    topic: "4.1 Onboarding/Offboarding",
    question: "What are the key IT tasks in employee onboarding and offboarding?",
    answer: "Onboarding: create AD account, assign equipment, set up email/MFA/VPN, provide AUP/NDA to sign, install needed software, grant least-privilege access. Offboarding: disable account immediately, revoke tokens/MFA, retrieve equipment, preserve/transfer data, document access removed",
    explanation: "Onboarding IT checklist: (1) Create user account (AD/Azure AD) with appropriate group memberships. (2) Provision and configure device (image, join domain, encrypt). (3) Set up email, MFA, and VPN. (4) Have user sign AUP, NDA, and security policy. (5) Install role-specific software. (6) Apply least-privilege principle — grant only needed access. Offboarding IT checklist (security-critical — must happen on last day or before): (1) Disable the AD account immediately — do not delete right away (preserve audit trail). (2) Revoke MFA tokens and session tokens. (3) Remove from all security groups. (4) Retrieve corporate devices. (5) Preserve/transfer critical data per legal hold requirements. (6) Revoke VPN certificates, remote access, and cloud app access. For 220-1202 know both processes."
  },
  {
    id: 313,
    category: "4.0 Operational Procedures",
    topic: "4.4 AI Management",
    question: "What considerations apply to managing AI tools in enterprise IT environments (220-1202)?",
    answer: "Key concerns: data privacy (don't input PII/PHI/trade secrets into public AI), output accuracy (verify AI-generated content), bias/fairness, regulatory compliance, acceptable use policy for AI tools, Shadow AI (employees using unapproved AI services)",
    explanation: "The 220-1202 exam includes AI management as a new topic area. Enterprise IT considerations for AI: (1) Data privacy — employees must not enter PII, PHI, financial data, or trade secrets into public AI services (ChatGPT, Copilot) that may retain or train on that data; update the AUP to explicitly address AI tool use. (2) Output accuracy — AI can hallucinate (generate plausible but wrong information); all AI outputs must be verified before use in decisions. (3) Shadow AI — employees using unapproved AI tools bypass corporate data controls; IT should inventory and govern AI tool use. (4) Compliance — GDPR, HIPAA, and other regulations may restrict how data is processed by third-party AI. (5) Acceptable use — define approved AI tools and use cases in policy. For 220-1202 recognize these as real-world IT governance concerns."
  },
  {
    id: 314,
    category: "4.0 Operational Procedures",
    topic: "4.2 Backup Strategy",
    question: "What is cloud backup vs. local backup vs. hybrid backup, and when is each used?",
    answer: "Local backup: fast backup/restore, no internet needed, vulnerable to site disasters. Cloud backup: offsite protection, accessible anywhere, slower restore, ongoing cost. Hybrid: local for speed + cloud for offsite — best of both (implements 3-2-1 rule)",
    explanation: "Local backup (NAS, external drives, tape): fastest backup and restore speeds, no bandwidth dependency, low ongoing cost — but vulnerable to fire, flood, theft, or ransomware that spreads to attached backup drives. Cloud backup (AWS S3, Azure Backup, Backblaze): automatically offsite, scalable, accessible from anywhere — but restore speed depends on internet bandwidth, and large restores can take hours or days. Also ongoing subscription cost. Hybrid backup: combines a local backup target (fast daily restore) with cloud replication (offsite for DR scenarios) — this naturally implements the 3-2-1 rule. For 220-1202 know that hybrid backup is generally recommended for businesses as it balances RTO (Recovery Time Objective) and RPO (Recovery Point Objective) with offsite protection."
  },
  {
    id: 315,
    category: "2.0 Security",
    topic: "2.3 EOL/EOSL",
    question: "What is the difference between EOL (End of Life) and EOSL (End of Service Life) for software/hardware, and why do they matter for security?",
    answer: "EOL: vendor stops selling/developing. EOSL (End of Service Life): vendor stops ALL support including security patches. Running EOSL software is a major security risk — no patches for newly discovered vulnerabilities. Example: Windows 7 EOSL January 2020",
    explanation: "EOL (End of Life) means the vendor has stopped active development and new feature releases for the product — it may still receive critical security patches. EOSL (End of Service Life, also called End of Support) means ALL vendor support has ended, including security patches — any new vulnerabilities discovered will never be fixed. Running EOSL systems: security risk (unpatched CVEs accumulate), compliance violation (PCI DSS, HIPAA require current/supported software), and vendor will not provide assistance. Mitigation if EOSL systems can't be immediately replaced: network isolation, additional firewall controls, and accelerated upgrade planning. Microsoft's update lifecycle: Mainstream Support (new features + security) → Extended Support (security only) → End of Support. For 220-1202 know the risk and policy implications of running EOSL software."
  },
  {
    id: 316,
    category: "2.0 Security",
    topic: "2.3 BYOD",
    question: "What is BYOD (Bring Your Own Device) and what security challenges does it present?",
    answer: "BYOD: employees use personal devices for work. Challenges: device not managed by IT, mixing personal/corporate data, MDM enrollment friction, patching compliance, remote wipe conflicts (wiping personal data), legal/privacy issues",
    explanation: "BYOD policies allow employees to use their personal smartphones, laptops, and tablets for work — reduces hardware costs but creates security challenges: (1) IT doesn't control the device baseline — personal devices may run outdated OS or have malware. (2) Corporate data mixes with personal data — sensitive emails/files on unmanaged devices. (3) Remote wipe: MDM full-device wipe removes ALL data including personal photos/apps — creates employee pushback; selective wipe (remove only corporate container) is preferred. (4) Legal/privacy: IT monitoring personal devices raises privacy concerns. (5) Patch compliance: IT cannot mandate updates on personal devices. Solutions: MDM containerization, MAM-only (manage apps, not device), clear BYOD policy in AUP, VPN for corporate access. For 220-1202 know BYOD risks and mitigation strategies."
  },
  {
    id: 317,
    category: "1.0 Operating Systems",
    topic: "1.3 Task Manager",
    question: "What are the key tabs in Windows Task Manager and what does each show?",
    answer: "Processes: running apps and background processes with CPU/RAM/disk/network usage. Performance: real-time graphs for CPU/RAM/disk/network/GPU. App history: resource usage over time. Startup: programs that launch at boot. Users: per-user resource usage. Details: advanced process info (PID, threads). Services: running Windows services",
    explanation: "Windows Task Manager (Ctrl+Shift+Esc or Ctrl+Alt+Del) tabs: Processes tab: all running processes grouped as Apps, Background processes, and Windows processes — shows CPU, memory, disk, and network consumption per process; right-click to End Task or Go to Details. Performance tab: live graphs for all system resources; 'Open Resource Monitor' link for deeper detail. App history: resource consumption by Store apps over time. Startup tab: lists programs configured to start with Windows and their startup impact (High/Medium/Low/None) — disable unnecessary items here. Users tab: shows all logged-on users and their resource usage. Details tab: advanced view with PID, thread count, handles — used for troubleshooting. Services tab: view and start/stop Windows services. For 220-1202 know which tab to use for which diagnostic task."
  },
  {
    id: 318,
    category: "1.0 Operating Systems",
    topic: "1.6 Linux Basics",
    question: "What is systemd and what are the systemctl commands for managing services?",
    answer: "systemd: init system and service manager used by most modern Linux distros (replaces SysVinit). Key commands: systemctl start/stop/restart/status <service>, systemctl enable/disable <service> (persist across reboots), systemctl list-units --type=service",
    explanation: "systemd is the standard initialization system for modern Linux distributions (Ubuntu 15+, CentOS 7+, Fedora, Debian 8+). It replaces SysVinit and manages system startup, services, and dependencies. Key systemctl commands: 'systemctl start nginx' — start a service. 'systemctl stop nginx' — stop a service. 'systemctl restart nginx' — stop then start. 'systemctl status nginx' — show running status, recent logs, and PID. 'systemctl enable nginx' — configure to start automatically at boot (creates symlink). 'systemctl disable nginx' — remove from autostart. 'systemctl list-units --type=service' — list all service units. 'journalctl -u nginx' — view service logs. For 220-1202 know systemctl as the Linux service management tool."
  },
  {
    id: 319,
    category: "1.0 Operating Systems",
    topic: "1.4 Cloud Concepts",
    question: "What is cloud identity synchronization and how does Azure AD Connect work?",
    answer: "Cloud identity sync: replicates on-premises AD accounts to cloud identity providers (Azure AD/Entra ID). Azure AD Connect: Microsoft tool that syncs on-prem AD users, groups, and passwords to Azure AD — enables hybrid identity (same credentials for on-prem and cloud resources)",
    explanation: "In hybrid environments, organizations maintain on-premises Active Directory while also using cloud services (Microsoft 365, Azure). Azure AD Connect (now called Microsoft Entra Connect) runs on a Windows Server and synchronizes: user accounts, group memberships, and (optionally) password hashes or authentication tokens to Azure AD/Entra ID. Users then have the same username and password for both on-prem resources (file shares, printers) and cloud services (SharePoint Online, Teams). Password Hash Synchronization (PHS) copies hashed passwords to the cloud. Pass-through Authentication (PTA) validates passwords against on-prem AD in real time. Federated Identity (ADFS) redirects authentication to on-prem infrastructure. For 220-1202 understand that cloud identity sync enables seamless hybrid authentication."
  },
  {
    id: 320,
    category: "2.0 Security",
    topic: "2.2 Social Engineering",
    question: "What are the key social engineering techniques tested on CompTIA A+ 220-1202?",
    answer: "Phishing (email), vishing (voice/phone), smishing (SMS), whaling (targeting executives), spear phishing (targeted), impersonation, tailgating, shoulder surfing, dumpster diving, pretexting (fabricated scenario to extract info)",
    explanation: "Social engineering manipulates humans rather than exploiting technical vulnerabilities. Key types: Phishing: bulk deceptive emails impersonating trusted entities to steal credentials. Spear phishing: targeted phishing using personal details about the victim. Whaling: spear phishing targeting high-value executives (CEO, CFO). Vishing: phone-based social engineering ('your IT department calling — need your password to fix an issue'). Smishing: SMS-based phishing with malicious links. Impersonation: posing as IT support, a vendor, or an authority figure in person. Tailgating: following an authorized person through a secure door without authenticating. Shoulder surfing: observing someone's screen or keyboard to steal credentials. Dumpster diving: searching discarded documents for sensitive information. Pretexting: fabricating an elaborate scenario to gain trust and extract information. For 220-1202 recognize all these attack types."
  },
,
{
    id: 321,
    category: "1.0 Operating Systems",
    topic: "1.8 iOS and Android Features",
    question: "A user wants to install an app that is not available in the official app store on their Android device. What is this process called, and what must be enabled?",
    answer: "Sideloading; enable 'Install unknown apps' (or 'Unknown sources') in Settings.",
    explanation: "Sideloading installs APK files directly, bypassing the Google Play Store. On Android 8+, you enable per-app permission under Settings > Apps > Special App Access. It increases malware risk since apps aren't Play Protect-vetted. iOS does not allow sideloading on non-jailbroken devices without Enterprise or TestFlight provisioning. For 220-1202 know that sideloading is Android-specific and is a security concern requiring policy control via MDM."
  },
  {
    id: 322,
    category: "1.0 Operating Systems",
    topic: "1.8 iOS and Android Features",
    question: "What is ADB and what is it primarily used for?",
    answer: "Android Debug Bridge — a command-line tool for communicating with an Android device from a PC.",
    explanation: "ADB allows technicians to install/uninstall apps, access a shell, transfer files, and capture logs on an Android device. USB debugging must be enabled in Developer Options. ADB is commonly used for troubleshooting, sideloading apps, and unlocking bootloaders. It is part of the Android SDK Platform Tools. For 220-1202 know that ADB requires USB Debugging enabled and is the primary CLI tool for Android device management."
  },
  {
    id: 323,
    category: "1.0 Operating Systems",
    topic: "1.9 Chrome OS Features",
    question: "A user's Chromebook is having persistent software issues. What is the Chrome OS equivalent of a factory reset, and what does it do?",
    answer: "Powerwash — erases all local data and returns the Chromebook to factory state.",
    explanation: "Powerwash is accessed via Settings > Advanced > Reset Settings. It removes all local accounts, files, and settings but does not affect cloud-stored Google data. Because Chrome OS is cloud-centric, most data is safe in Google Drive. Powerwash is recommended before selling a device or after a serious software issue. For 220-1202 know that Powerwash is the Chrome OS factory reset and that Chromebooks are designed to store data in the cloud."
  },
  {
    id: 324,
    category: "1.0 Operating Systems",
    topic: "1.9 Chrome OS Features",
    question: "What feature allows Chromebook users to run full Linux applications, and what is it called internally?",
    answer: "Linux (Beta) / Crostini — runs a Debian Linux container allowing native Linux app installation.",
    explanation: "Crostini uses a virtual machine (Termina) running a Linux container, providing an isolated environment for Linux apps. Users can install .deb packages and use apt. It is enabled under Settings > Advanced > Developers > Linux development environment. This is separate from Android app support (via Google Play on compatible Chromebooks). For 220-1202 know that Chrome OS supports Linux apps via Crostini containers and is cloud-focused by design."
  },
  {
    id: 325,
    category: "1.0 Operating Systems",
    topic: "1.3 Application Compatibility",
    question: "On a 64-bit Windows system, where are 32-bit applications installed by default?",
    answer: "C:\\Program Files (x86)",
    explanation: "64-bit applications install to C:\\Program Files, while 32-bit apps go to C:\\Program Files (x86). This separation prevents DLL conflicts between 32-bit and 64-bit libraries. The WOW64 subsystem (Windows 32-bit on Windows 64-bit) allows 32-bit apps to run on 64-bit Windows. A 32-bit app cannot directly call a 64-bit DLL and vice versa. For 220-1202 know the directory distinction and that WOW64 enables 32-bit app compatibility on 64-bit Windows."
  },
  {
    id: 326,
    category: "1.0 Operating Systems",
    topic: "1.3 Application Compatibility",
    question: "A legacy application only runs on Windows XP. How can you attempt to run it on Windows 10 without a virtual machine?",
    answer: "Right-click the executable > Properties > Compatibility tab > Run this program in compatibility mode.",
    explanation: "Compatibility mode makes Windows present itself to the application as an older OS version. You can also adjust DPI settings, run as administrator, and disable visual themes from the same tab. It works for many older applications but not all — some require actual legacy OS environments. For 220-1202 know that compatibility mode is found in the exe properties and supports modes back to Windows XP SP3."
  },
  {
    id: 327,
    category: "1.0 Operating Systems",
    topic: "1.4 Windows Printer Setup",
    question: "A user cannot print after connecting a new USB printer. What is the correct sequence to install the printer driver in Windows?",
    answer: "Connect printer, Windows installs driver automatically or use Add Printer wizard; install manufacturer driver if needed.",
    explanation: "Windows first attempts to find the driver via Windows Update or driver store. If not found, use Settings > Bluetooth & devices > Printers & scanners > Add a printer/scanner. For network printers, provide the IP or hostname. If automatic detection fails, choose 'The printer I want isn't listed' for manual options. Always install the manufacturer driver for full feature support. For 220-1202 know the Add Printer wizard path and that the Print Spooler service (spoolsv.exe) must be running."
  },
  {
    id: 328,
    category: "1.0 Operating Systems",
    topic: "1.4 Windows Printer Setup",
    question: "Print jobs are stuck in the queue and no documents are printing. What service should you restart, and how?",
    answer: "Print Spooler service (spoolsv.exe) — restart via services.msc or 'net stop/start spooler'.",
    explanation: "The Print Spooler queues print jobs and communicates with the printer driver. Stuck jobs can be cleared by stopping the spooler, deleting files from C:\\Windows\\System32\\spool\\PRINTERS, then restarting the service. You can also manage it from services.msc or Task Manager. A corrupted spool file is a common cause of printer queues freezing. For 220-1202 know that clearing the spool folder requires stopping the Print Spooler service first."
  },
  {
    id: 329,
    category: "1.0 Operating Systems",
    topic: "1.5 Device Manager",
    question: "In Device Manager, what does a yellow exclamation mark on a device indicate?",
    answer: "The device has a problem — usually a missing, corrupted, or incompatible driver.",
    explanation: "A yellow exclamation mark means the device is recognized but not functioning properly. A yellow question mark means the device is unknown (no driver installed). A down arrow means the device is disabled. Right-clicking and selecting Properties shows the error code (e.g., Code 43 = device failure). For 220-1202 know the difference between the exclamation mark (driver problem) and question mark (unknown/no driver) symbols in Device Manager."
  },
  {
    id: 330,
    category: "1.0 Operating Systems",
    topic: "1.5 Device Manager",
    question: "After a Windows Update, a sound card stops working. What Device Manager action should you try first?",
    answer: "Roll back the driver — Device Manager > device Properties > Driver tab > Roll Back Driver.",
    explanation: "Driver rollback reverts to the previously installed driver version, which is useful when a new driver causes instability. The Roll Back Driver button is only available if a previous driver exists. If rollback is not available, uninstall the driver and reinstall the older version manually. Windows Update can sometimes push bad driver updates for third-party hardware. For 220-1202 know that driver rollback is under the Driver tab in Device Manager properties and requires a previous driver to exist."
  },
  {
    id: 331,
    category: "1.0 Operating Systems",
    topic: "1.6 Windows Activation",
    question: "A Windows 10 installation shows error 0xC004F213 after a hardware change. What does this mean?",
    answer: "The digital license cannot be matched to the hardware — hardware change broke the digital activation link.",
    explanation: "Windows 10/11 digital licenses are tied to the motherboard's hardware hash. A major hardware change (e.g., motherboard replacement) can invalidate a digital license, especially OEM licenses. Retail licenses can be reactivated via phone or the activation troubleshooter. OEM licenses are non-transferable. Error 0xC004F213 specifically means hardware mismatch. For 220-1202 know that OEM licenses are tied to the original hardware and cannot be transferred, while Retail licenses can be moved."
  },
  {
    id: 332,
    category: "1.0 Operating Systems",
    topic: "1.6 Windows Activation",
    question: "What is the difference between an OEM Windows license and a Retail Windows license?",
    answer: "OEM is tied to original hardware (non-transferable); Retail can be moved to a new computer.",
    explanation: "OEM licenses are sold with PCs by manufacturers and cannot be transferred if the PC is replaced. They are cheaper but bound to the motherboard. Retail (Full Packaged Product) licenses are purchased independently and can be deactivated on one machine and activated on another. Volume licenses are used by organizations and managed through KMS or MAK. For 220-1202 know that OEM = non-transferable/hardware-bound, Retail = transferable, Volume = enterprise/KMS-managed."
  },
  {
    id: 333,
    category: "2.0 Networking",
    topic: "2.6 APIPA",
    question: "A workstation has the IP address 169.254.45.12. What does this indicate, and what is the likely cause?",
    answer: "APIPA address — the device could not reach a DHCP server and self-assigned a link-local address.",
    explanation: "APIPA (Automatic Private IP Addressing) assigns addresses in the 169.254.0.0/16 range when DHCP fails. The device can communicate with other APIPA hosts on the same subnet but cannot reach the internet or other subnets. To fix: check the DHCP server, network connectivity, and IP configuration. Run 'ipconfig /release' then 'ipconfig /renew' to retry DHCP. For 220-1202 know that 169.254.x.x always means DHCP failure and the device has an APIPA address."
  },
  {
    id: 334,
    category: "2.0 Networking",
    topic: "2.7 Network Adapter Troubleshooting",
    question: "A user cannot access the network. ipconfig shows the correct IP. What should you check next?",
    answer: "Check default gateway, DNS settings, physical connection, and whether the adapter is enabled.",
    explanation: "Correct IP but no connectivity suggests gateway or DNS misconfiguration. Run 'ping' to the gateway to test Layer 3 connectivity, then 'ping 8.8.8.8' to test internet routing, then 'nslookup google.com' to test DNS resolution. Also check for a disabled adapter in Network Connections. 'ipconfig /flushdns' clears the DNS cache. For 220-1202 know the structured troubleshooting: IP > Gateway ping > External IP ping > DNS test."
  },
  {
    id: 335,
    category: "2.0 Networking",
    topic: "2.7 Network Adapter Troubleshooting",
    question: "What commands release and renew a DHCP lease in Windows?",
    answer: "'ipconfig /release' releases the current lease; 'ipconfig /renew' requests a new IP from DHCP.",
    explanation: "These commands are essential for DHCP troubleshooting. /release sends a DHCP Release message to the server; /renew sends a Discover/Request to obtain a new lease. If /renew returns an APIPA address, the DHCP server is unreachable. 'ipconfig /flushdns' clears the local DNS resolver cache. 'ipconfig /registerdns' re-registers the host with DNS. For 220-1202 know all four ipconfig switches: /release, /renew, /flushdns, /registerdns."
  },
  {
    id: 336,
    category: "2.0 Networking",
    topic: "2.8 Windows Remote Desktop",
    question: "A technician tries to RDP to a Windows 10 Home machine but cannot connect. Why?",
    answer: "Remote Desktop (RDP) is only available on Windows 10/11 Pro, Enterprise, and Education — not Home.",
    explanation: "Windows Home editions cannot act as an RDP host (server). They can use RDP as a client to connect to other machines. The workaround is to upgrade to Pro or use a third-party tool like VNC or TeamViewer. RDP uses TCP port 3389 and requires the Remote Desktop service to be running. NLA (Network Level Authentication) authenticates users before the full desktop loads, providing extra security. For 220-1202 know that RDP hosting requires Pro/Enterprise and runs on TCP 3389."
  },
  {
    id: 337,
    category: "2.0 Networking",
    topic: "2.8 Windows Remote Desktop",
    question: "What is the difference between Remote Desktop and Remote Assistance in Windows?",
    answer: "Remote Desktop gives full control of an unattended session; Remote Assistance requires the user to invite a helper and can be view-only.",
    explanation: "Remote Desktop (RDP) creates a separate session and locks the local screen — used for remote administration. Remote Assistance (or Quick Assist) requires the local user to send an invitation and can be configured for view-only or full control. Remote Assistance is typically used for help desk support. Both use TCP port 3389 but serve different use cases. For 220-1202 know that Remote Desktop = unattended admin access; Remote Assistance = user-initiated help desk tool."
  },
  {
    id: 338,
    category: "4.0 Security",
    topic: "4.6 Windows Defender Firewall",
    question: "A newly installed application cannot communicate over the network. What should you check in Windows Defender Firewall?",
    answer: "Check inbound/outbound rules — add an Allow rule for the application or its port in Windows Defender Firewall.",
    explanation: "Windows Defender Firewall has three profiles: Domain (on corporate network), Private (trusted home/work), and Public (untrusted networks). Applications can be allowed through the firewall via 'Allow an app or feature.' For granular control, use Advanced Settings to create inbound/outbound rules by port, program, or protocol. Block rules take precedence over allow rules. For 220-1202 know the three firewall profiles and that Advanced Settings allows port/program-based rules."
  },
  {
    id: 339,
    category: "4.0 Security",
    topic: "4.3 Certificate Types",
    question: "A browser shows 'Your connection is not private' with a certificate error. What are two common causes?",
    answer: "Expired certificate, or certificate CN/SAN does not match the website domain (hostname mismatch).",
    explanation: "Certificate errors indicate the site's TLS certificate cannot be validated. Common causes: expired certificate, self-signed certificate not trusted by the browser's CA store, hostname mismatch, or the CA is not trusted. Self-signed certificates are created without a CA and must be manually trusted. Browsers show ERR_CERT_DATE_INVALID for expired certs and ERR_CERT_COMMON_NAME_INVALID for hostname mismatches. For 220-1202 know the difference between self-signed (no CA trust) and CA-signed (trusted chain) certificates."
  },
  {
    id: 340,
    category: "4.0 Security",
    topic: "4.4 Email Security (SPF, DKIM, DMARC)",
    question: "What does SPF protect against, and where is it configured?",
    answer: "SPF prevents email spoofing by specifying authorized mail servers in a DNS TXT record for the domain.",
    explanation: "Sender Policy Framework (SPF) is a DNS TXT record listing IP addresses/servers permitted to send email for a domain. Receiving mail servers check SPF to verify the sending server is authorized. DKIM adds a cryptographic signature to email headers for integrity verification. DMARC uses SPF and DKIM results to define a policy (none/quarantine/reject) for failing messages. For 220-1202 know: SPF = authorized senders (DNS), DKIM = digital signature (integrity), DMARC = policy enforcement combining both."
  },
  {
    id: 341,
    category: "4.0 Security",
    topic: "4.4 Email Security (SPF, DKIM, DMARC)",
    question: "An organization wants to ensure that emails failing SPF or DKIM checks are quarantined. Which email security standard handles this enforcement?",
    answer: "DMARC (Domain-based Message Authentication, Reporting & Conformance).",
    explanation: "DMARC builds on SPF and DKIM by specifying a policy for what to do when checks fail: p=none (monitor only), p=quarantine (send to spam), or p=reject (block delivery). DMARC also provides aggregate reports to the domain owner. It requires at least SPF or DKIM alignment to pass. Without DMARC, SPF/DKIM failures are handled inconsistently by receivers. For 220-1202 know that DMARC = policy layer that uses SPF+DKIM results to quarantine or reject spoofed email."
  },
  {
    id: 342,
    category: "4.0 Security",
    topic: "4.2 Honeypots and Honeynets",
    question: "What is the purpose of a honeypot in a network security strategy?",
    answer: "A honeypot is a decoy system designed to attract and detect attackers, diverting them from real assets.",
    explanation: "Honeypots appear to be legitimate, valuable targets (e.g., a fake database server) but are closely monitored. Any interaction with a honeypot is inherently suspicious since legitimate users have no reason to access it. A honeynet is a network of multiple honeypots simulating a full environment. They help gather threat intelligence about attacker methods and tools without risking real systems. For 220-1202 know that honeypot = single decoy system; honeynet = network of honeypots; both are deception-based detection tools."
  },
  {
    id: 343,
    category: "4.0 Security",
    topic: "4.7 AppLocker and Software Restriction Policies",
    question: "A company wants to prevent users from running any executable not on an approved list. Which Windows feature should be used?",
    answer: "AppLocker — a Windows feature that allows or blocks applications based on rules (path, publisher, hash).",
    explanation: "AppLocker is available on Windows Enterprise and Education editions and is configured via Group Policy. It supports four rule collections: Executable, Windows Installer, Script, and Packaged Apps. Rules can use publisher (digital signature), path, or file hash conditions. Software Restriction Policies (SRP) is the older predecessor, available on all editions. AppLocker provides better logging and enforcement granularity. For 220-1202 know that AppLocker = application whitelisting via GPO, requires Enterprise, and uses publisher/path/hash rules."
  },
  {
    id: 344,
    category: "4.0 Security",
    topic: "4.5 Windows Defender Antivirus",
    question: "Windows Defender real-time protection keeps turning off automatically. What is a likely cause?",
    answer: "A third-party antivirus is installed, which disables Defender's real-time protection to avoid conflicts.",
    explanation: "Windows Defender AV automatically disables real-time protection when another registered AV product is detected via Windows Security Center. If no other AV is present and Defender keeps disabling, check Group Policy (gpedit.msc) or registry settings. Definition updates are delivered via Windows Update and can also be updated manually. Exclusions should be used sparingly (e.g., for known false positives). For 220-1202 know that Defender and third-party AV coexist in limited passive mode, and Defender manages definitions through Windows Update."
  },
  {
    id: 345,
    category: "5.0 Operational Procedures",
    topic: "5.5 Slow System Performance Troubleshooting",
    question: "A user reports their PC is running slowly. What are the first tools and checks you should use?",
    answer: "Task Manager (CPU/RAM/disk usage), Resource Monitor, check for malware, check startup programs.",
    explanation: "Open Task Manager (Ctrl+Shift+Esc) to identify high CPU, RAM, or disk usage. Resource Monitor (resmon.exe) provides more detail. High disk usage (often 100%) may indicate an HDD bottleneck, Windows Search indexing, or malware. Use Autoruns or Task Manager's Startup tab to disable unnecessary startup items. Check for malware with Defender or another scanner. For 220-1202 know Task Manager columns (CPU/Memory/Disk/Network), Resource Monitor for granular detail, and Event Viewer for application errors causing slowdowns."
  },
  {
    id: 346,
    category: "5.0 Operational Procedures",
    topic: "5.5 Application Not Responding",
    question: "An application becomes unresponsive. After force-closing it, the issue recurs daily at the same time. Where would you look for the root cause?",
    answer: "Event Viewer > Windows Logs > Application log — look for errors/warnings near the time of the crash.",
    explanation: "Event Viewer records application errors, crashes, and warnings with timestamps. The Application log shows events from user-mode programs; the System log shows OS and driver events. Look for Error level events with the application name as the source. A recurring crash may indicate a memory leak, corrupt file, or conflicting scheduled task. For 220-1202 know that application crashes are logged in Event Viewer > Windows Logs > Application, and a memory leak causes gradual performance degradation over time."
  },
  {
    id: 347,
    category: "5.0 Operational Procedures",
    topic: "5.5 Cannot Access Network Share",
    question: "A user cannot access a network share that others can reach. What are the first three things to verify?",
    answer: "Verify the user has share/NTFS permissions, check firewall (port 445/SMB), and confirm correct credentials.",
    explanation: "Network share access requires both Share permissions AND NTFS permissions — the more restrictive applies. SMB uses TCP port 445; verify Windows Firewall or network firewall is not blocking it. Credential prompts may indicate the user's cached credentials are wrong — use Credential Manager to clear them. Also verify Network Discovery and File and Printer Sharing are enabled. For 220-1202 know that SMB = port 445, both share and NTFS permissions must allow access, and the more restrictive permission wins."
  },
  {
    id: 348,
    category: "5.0 Operational Procedures",
    topic: "5.5 Missing DLL Errors",
    question: "A user gets a 'missing .dll file' error when launching an application. What are the steps to resolve it?",
    answer: "Reinstall the application, run SFC /scannow, or register the DLL with 'regsvr32 filename.dll'.",
    explanation: "DLL (Dynamic Link Library) errors occur when a required library is deleted, corrupted, or misregistered. Reinstalling the application usually restores the DLL. SFC (System File Checker) repairs missing or corrupted Windows system DLLs. 'regsvr32 filename.dll' registers a COM DLL with the Windows Registry. Never download DLLs from random websites — malware is commonly distributed this way. For 220-1202 know: reinstall app first, then SFC /scannow for system DLLs, and regsvr32 for registering COM components."
  },
  {
    id: 349,
    category: "5.0 Operational Procedures",
    topic: "5.7 Environmental Controls",
    question: "What are the ideal temperature and humidity ranges for a data center or server room?",
    answer: "Temperature: 68–77°F (20–25°C); Relative humidity: 45–55%.",
    explanation: "Too much heat causes component failure and throttling; too little humidity causes ESD (electrostatic discharge); too much humidity causes condensation and corrosion. Hot/cold aisle containment alternates server rack orientations so cold air intakes face the cold aisle and hot exhausts face the hot aisle. ASHRAE provides data center temperature guidelines. ESD is a risk below ~35% humidity. For 220-1202 know the optimal ranges, that low humidity increases ESD risk, and that hot/cold aisle design improves cooling efficiency."
  },
  {
    id: 350,
    category: "5.0 Operational Procedures",
    topic: "5.8 E-Waste Disposal",
    question: "A company needs to dispose of old computers, monitors, and batteries. What is the correct disposal method?",
    answer: "Use certified e-waste recycling centers, manufacturer take-back programs, or certified recyclers — never landfill.",
    explanation: "Electronics contain hazardous materials (lead, mercury, cadmium) that contaminate soil and water if landfilled. The EU WEEE Directive requires manufacturers to provide take-back programs. In the US, many states have e-waste laws. Batteries must be recycled separately — lithium batteries are a fire hazard in regular waste streams. Hard drives should be wiped or shredded before recycling. For 220-1202 know that e-waste must go to certified recyclers, WEEE is the EU regulation, and data destruction must precede hardware disposal."
  },
  {
    id: 351,
    category: "5.0 Operational Procedures",
    topic: "5.6 Software Licensing",
    question: "A company purchases software where one license covers all employees. What type of license is this?",
    answer: "Volume license (also called enterprise license) — covers multiple users/devices under one agreement.",
    explanation: "Volume licensing allows organizations to deploy software to many machines without individual product keys. Microsoft uses Volume License Service Center (VLSC) and KMS/MAK activation. OEM licenses are pre-installed and tied to hardware. Retail licenses are transferable. Subscription/SaaS licenses (e.g., Microsoft 365) require ongoing payments and are cloud-delivered. Open-source software is freely distributed with source code under licenses like GPL or MIT. For 220-1202 know all license types: OEM, Retail, Volume, Subscription (SaaS), Freeware, Open-source."
  },
  {
    id: 352,
    category: "5.0 Operational Procedures",
    topic: "5.3 IT Professionalism",
    question: "A user calls frustrated because their issue has not been resolved after two days. How should a professional technician handle this?",
    answer: "Acknowledge frustration empathetically, provide a realistic status update, set a clear timeline, and follow up proactively.",
    explanation: "IT professionalism includes active listening, avoiding technical jargon with non-technical users, setting realistic expectations, and following through on commitments. Never promise what you cannot deliver. If an issue is delayed, proactive communication prevents escalations. Maintain confidentiality about other users' information. For 220-1202 know that professionalism includes: empathy, avoiding jargon, setting expectations, follow-up, confidentiality, and never discussing other users' personal information."
  },
  {
    id: 353,
    category: "5.0 Operational Procedures",
    topic: "5.4 Prohibited Content Discovery",
    question: "While servicing a user's PC, a technician discovers what appears to be illegal content. What is the correct response?",
    answer: "Stop accessing the content immediately, do not alter or delete anything, report to management, and preserve evidence.",
    explanation: "Accessing illegal content further could implicate the technician legally. The chain of custody must be preserved — do not delete, move, or copy the content. Report to direct management, who will involve legal and potentially law enforcement. Document what was observed, when, and how it was discovered without disturbing the evidence. For 220-1202 know the correct sequence: stop > do not alter > report to management > preserve evidence > law enforcement if required by policy."
  },
  {
    id: 354,
    category: "1.0 Operating Systems",
    topic: "1.11 Thin Clients and VDI",
    question: "What is a thin client, and how does it differ from a traditional desktop PC in a VDI environment?",
    answer: "A thin client is a minimal endpoint device that connects to a centralized server for all processing; it has no local OS/apps.",
    explanation: "In a VDI (Virtual Desktop Infrastructure) environment, virtual machines run on centralized servers and users access them via thin clients over RDP or similar protocols. Thin clients reduce cost, power consumption, and maintenance since software and data reside on the server. Security is improved because data never leaves the data center. Management is centralized — updates and patches apply once on the server. For 220-1202 know that VDI = virtual desktops on servers accessed by thin clients, and benefits include centralized management, security, and easy provisioning."
  },
  {
    id: 355,
    category: "2.0 Networking",
    topic: "2.9 VLAN Security Segmentation",
    question: "Why would a network administrator configure IoT devices on a separate VLAN from workstations?",
    answer: "To isolate IoT devices so a compromised device cannot access workstations or sensitive network resources.",
    explanation: "VLANs (Virtual LANs) segment a physical network into logical networks at Layer 2 of the OSI model. Traffic between VLANs requires a Layer 3 device (router or Layer 3 switch) with ACLs controlling what can cross. IoT devices often lack security updates, making them easy targets; a guest/IoT VLAN limits blast radius. VLAN tagging uses IEEE 802.1Q. For 220-1202 know that VLANs provide logical segmentation, inter-VLAN routing requires a router, and guest/IoT VLANs reduce attack surface."
  },
  {
    id: 356,
    category: "1.0 Operating Systems",
    topic: "1.7 WSUS",
    question: "What is WSUS and what problem does it solve for enterprise environments?",
    answer: "Windows Server Update Services — centralizes Windows update management, allowing admins to approve/deny updates before deployment.",
    explanation: "Without WSUS, each client downloads updates directly from Microsoft, consuming internet bandwidth. WSUS acts as an internal update server; clients check WSUS instead of Windows Update. Admins can approve updates, schedule deployment, and target specific computer groups. Failed updates and compliance reports are visible in the WSUS console. WSUS is configured via Group Policy (GPUPDATE). For 220-1202 know that WSUS = centralized update management for enterprises, reduces bandwidth, and allows staged rollouts with approval control."
  },
  {
    id: 357,
    category: "4.0 Security",
    topic: "4.1 Separation of Duties",
    question: "What is separation of duties and why is it important in IT security?",
    answer: "No single person can complete a sensitive process alone — tasks are divided to prevent fraud, errors, and insider threats.",
    explanation: "Separation of duties (SoD) ensures that completing a critical action requires cooperation of multiple people. Examples: one admin can create accounts but another must approve them; a developer cannot deploy their own code to production. This prevents a single malicious insider from causing unchecked damage. Audit trails ensure accountability. Related concepts: least privilege and need-to-know. For 220-1202 know that SoD prevents single points of abuse, requires multiple people for sensitive tasks, and is enforced through role-based access controls and audit logs."
  },
  {
    id: 358,
    category: "4.0 Security",
    topic: "4.8 Input Validation and Injection Attacks",
    question: "A web application allows users to enter a name field which is used in a database query. An attacker enters SQL code and retrieves all records. What attack is this, and how is it prevented?",
    answer: "SQL injection — prevented by input validation, parameterized queries (prepared statements), and least-privilege DB accounts.",
    explanation: "SQL injection occurs when user-supplied input is inserted into a SQL query without sanitization. Attackers can retrieve, modify, or delete data. Prevention: use parameterized queries/prepared statements (separates code from data), validate and sanitize all inputs, use WAF, and run the database with minimal privileges. XSS (Cross-Site Scripting) is a similar injection attack targeting browsers by injecting malicious scripts. For 220-1202 know SQLi = database injection, XSS = browser script injection, both prevented by input validation."
  },
  {
    id: 359,
    category: "3.0 Mobile Devices",
    topic: "3.5 Mobile Device Synchronization",
    question: "A user's iPhone contacts, calendars, and photos are not syncing to their new iPhone. What should be checked first?",
    answer: "Verify iCloud sync is enabled for those data types under Settings > [Name] > iCloud on both devices.",
    explanation: "iOS uses iCloud for cloud-based synchronization of contacts, calendars, photos, notes, and more. Each data category can be toggled individually in iCloud settings. The Apple ID must be the same on both devices. Google accounts sync Android data via Google Account sync settings. For enterprise email, ActiveSync (Exchange ActiveSync / EAS) syncs email, contacts, and calendars to corporate servers. For 220-1202 know: iOS sync = iCloud, Android sync = Google Account, corporate email/calendar sync = ActiveSync/EAS."
  },
  {
    id: 360,
    category: "1.0 Operating Systems",
    topic: "1.10 macOS Disk Utility",
    question: "A Mac user reports disk errors and slow performance. What built-in macOS tool is equivalent to Windows CHKDSK?",
    answer: "Disk Utility > First Aid — checks and repairs disk errors and directory structure on macOS.",
    explanation: "Disk Utility's First Aid function verifies and repairs the disk directory, similar to CHKDSK /f on Windows. It can repair permissions on HFS+ volumes (less relevant on APFS where permissions are handled differently). For drives that cannot be repaired while mounted, boot from macOS Recovery (Cmd+R) and run First Aid from there. 'diskutil' is the CLI equivalent. For 220-1202 know that macOS uses Disk Utility First Aid for disk repair, and macOS Recovery (Cmd+R at startup) is the macOS equivalent of WinRE."
  },
  {
    id: 361,
    category: "1.0 Operating Systems",
    topic: "1.12 Linux Editors",
    question: "A Linux technician opens a file with vi and needs to save and exit. What is the correct command sequence?",
    answer: "Press Esc, then type ':wq' and press Enter to write (save) and quit.",
    explanation: "vi has two modes: command mode (navigate, delete) and insert mode (type text). Press 'i' to enter insert mode, Esc to return to command mode. ':w' saves without quitting, ':q' quits, ':wq' saves and quits, ':q!' force-quits without saving. nano is simpler: Ctrl+O saves, Ctrl+X exits. nano displays shortcuts at the bottom of the screen. For 220-1202 know vi mode switching (i = insert, Esc = command), :wq to save/exit, and that nano is more beginner-friendly with on-screen shortcuts."
  },
  {
    id: 362,
    category: "1.0 Operating Systems",
    topic: "1.2 Windows Settings vs Control Panel",
    question: "In Windows 10/11, where would you go to change the display resolution and join a domain, respectively?",
    answer: "Display resolution: Settings > System > Display. Domain join: Control Panel > System (or Settings > System > About > Advanced system settings).",
    explanation: "Microsoft is gradually migrating functionality from Control Panel to the Settings app in Windows 10/11. Display, sound, network, and privacy settings are primarily in Settings. Some legacy tasks still require Control Panel: advanced sharing settings, Device Manager (also in Settings), user profiles, and administrative tools. Domain join is still accessible via both paths but Control Panel's System applet remains commonly used. For 220-1202 know that Settings is the modern interface, Control Panel is legacy, and some functions (like certain admin tools) still require Control Panel."
  },
  {
    id: 363,
    category: "1.0 Operating Systems",
    topic: "1.5 Startup Repair and Recovery",
    question: "A Windows 10 PC fails to boot twice in a row. What happens automatically, and where does it take the user?",
    answer: "Windows automatically launches Startup Repair from WinRE (Windows Recovery Environment) after repeated boot failures.",
    explanation: "After two consecutive boot failures, Windows 10/11 automatically enters the WinRE and offers Startup Repair. Startup Repair fixes issues like corrupted BCD (Boot Configuration Data), missing boot files, and driver problems. It can be manually triggered by booting from Windows installation media or pressing F8/Shift+F8 for advanced options. Startup Repair does NOT fix hardware failures or missing Windows installations. For 220-1202 know that WinRE launches automatically after failed boots, and Startup Repair fixes BCD/boot file corruption but not hardware issues."
  },
  {
    id: 364,
    category: "1.0 Operating Systems",
    topic: "1.6 Group Policy Software Deployment",
    question: "An administrator wants to automatically install an MSI application on all computers in an OU when they start up. Which GPO configuration is used?",
    answer: "Computer Configuration > Software Settings > Software Installation — assign the MSI package.",
    explanation: "Group Policy software deployment supports MSI packages. 'Assigned' software installs automatically at computer startup (Computer Config) or user logon (User Config). 'Published' software (User Config only) appears in Add/Remove Programs for optional installation. Computer Configuration settings apply regardless of which user logs in. User Configuration settings follow the user to any machine. For 220-1202 know: Computer Config = applies at startup/to all users on that machine; User Config = follows the user; Assigned = mandatory; Published = optional (user config only)."
  },
  {
    id: 365,
    category: "2.0 Networking",
    topic: "2.5 Network Troubleshooting Tools",
    question: "A technician runs 'ipconfig /all' and sees the DNS server is set to 192.168.1.1 but name resolution fails. What should be tested next?",
    answer: "Test if the DNS server is responsive using 'nslookup' or 'ping 192.168.1.1', then try an alternate DNS (e.g., 8.8.8.8).",
    explanation: "If the default gateway/router is the DNS server, it may be down or its DNS relay may be failing. Use 'nslookup google.com 8.8.8.8' to test resolution against a known public DNS server. If that works, the local DNS server is the problem. 'nslookup' with no arguments enters interactive mode. 'ipconfig /flushdns' clears cached bad DNS entries. For 220-1202 know nslookup syntax, that you can specify an alternate DNS server to isolate DNS server vs. connectivity issues, and that /flushdns resolves stale cache problems."
  },
];

export const categoriesCore2 = [
  "1.0 Operating Systems",
  "2.0 Security",
  "3.0 Software Troubleshooting",
  "4.0 Operational Procedures",
];
