// Security Configuration Scenarios for CompTIA A+ Core 2 (220-1202)
// Repurposed PC Builder component as "Security Setup Advisor"
export const SCENARIOS_CORE2 = [
  {
    id: "corp-laptop",
    title: "Corporate Laptop — Security Hardening",
    badge: "Enterprise",
    badgeColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-500/30",
    requirements: [
      "Must protect data if laptop is lost or stolen",
      "Remote employees need secure access to company resources",
      "Strong login authentication required beyond just a password",
      "Must meet company compliance requirements",
      "Windows 11 — users are standard (non-admin) accounts",
    ],
    categories: [
      {
        id: "encryption",
        label: "Full-Disk Encryption",
        correct: "bitlocker",
        reason:
          "BitLocker (Windows Pro/Enterprise) encrypts the entire drive using AES and ties to the TPM chip. If the drive is removed and placed in another machine, data is unreadable without the recovery key. EFS only encrypts individual files and doesn't protect the full OS volume.",
        options: [
          { id: "none",      label: "No encryption",                detail: "Data readable if drive removed" },
          { id: "efs",       label: "EFS (Encrypting File System)", detail: "Per-file/folder · tied to user account" },
          { id: "bitlocker", label: "BitLocker",                    detail: "Full-volume · AES · TPM-backed · laptop protection" },
          { id: "veracrypt", label: "VeraCrypt (3rd party)",        detail: "Open-source · cross-platform · not MDM-managed" },
        ],
      },
      {
        id: "authentication",
        label: "Login Authentication",
        correct: "mfa",
        reason:
          "MFA (password + authenticator app or smart card) ensures that a stolen password alone cannot grant access. A PIN alone is a single factor. Biometrics alone can be spoofed in low-security implementations. Combining factors dramatically reduces unauthorized access risk.",
        options: [
          { id: "pin",  label: "PIN only",                       detail: "Single factor · convenient · not strong enough" },
          { id: "pass", label: "Complex password only",          detail: "Single factor · can be stolen via phishing" },
          { id: "bio",  label: "Biometric (fingerprint) only",   detail: "Single factor · convenient but can fail" },
          { id: "mfa",  label: "MFA (password + authenticator)", detail: "Two factors · highly resistant to compromise" },
        ],
      },
      {
        id: "remote-access",
        label: "Remote Network Access",
        correct: "vpn",
        reason:
          "A VPN creates an encrypted tunnel between the remote laptop and corporate network, protecting data in transit over public internet. RDP without VPN exposes RDP port 3389 to the internet — a major attack surface. Direct internet access bypasses corporate security controls.",
        options: [
          { id: "direct", label: "Direct internet connection",  detail: "No encryption · corporate resources exposed" },
          { id: "rdp",    label: "RDP directly to office PC",   detail: "Port 3389 exposed · brute-force risk" },
          { id: "vpn",    label: "Always-on VPN (IPSec/SSL)",   detail: "Encrypted tunnel · all traffic secured" },
          { id: "proxy",  label: "Web proxy only",              detail: "Filters HTTP/S only · not full network access" },
        ],
      },
      {
        id: "endpoint-security",
        label: "Endpoint Protection",
        correct: "edr",
        reason:
          "EDR (Endpoint Detection and Response) goes beyond traditional antivirus — it monitors behavior, detects zero-day threats, and enables incident response. Traditional signature-based AV only catches known malware. Microsoft Defender Antivirus is the baseline; an enterprise EDR adds behavioral analysis.",
        options: [
          { id: "none",    label: "No antivirus",                  detail: "Zero protection · never acceptable" },
          { id: "free-av", label: "Free consumer antivirus",       detail: "Signature-based · no enterprise management" },
          { id: "defender",label: "Microsoft Defender Antivirus", detail: "Built-in · adequate baseline · signature-based" },
          { id: "edr",     label: "Enterprise EDR solution",       detail: "Behavioral detection · incident response · centrally managed" },
        ],
      },
      {
        id: "windows-edition",
        label: "Windows Edition",
        correct: "pro",
        reason:
          "Windows Pro (or Enterprise) is required for domain join, Group Policy enforcement, BitLocker, and Remote Desktop. Windows Home lacks these enterprise features. Windows Enterprise adds additional controls but is typically licensed separately through volume licensing.",
        options: [
          { id: "home",       label: "Windows 11 Home",       detail: "No BitLocker · no domain join · no Group Policy" },
          { id: "pro",        label: "Windows 11 Pro",        detail: "BitLocker · domain join · Group Policy · RDP" },
          { id: "enterprise", label: "Windows 11 Enterprise", detail: "All Pro features + AppLocker · DirectAccess · volume licensing" },
          { id: "edu",        label: "Windows 11 Education",  detail: "Similar to Enterprise · academic licensing only" },
        ],
      },
    ],
  },
  {
    id: "soho-security",
    title: "SOHO Network — Wireless Security Setup",
    badge: "SOHO",
    badgeColor: "text-green-600 dark:text-green-400",
    borderColor: "border-green-500/30",
    requirements: [
      "Small office with 10 employees plus occasional visitors",
      "Protect business data from unauthorized access",
      "Employees should not access each other's devices",
      "Visitors should have internet access but not see business resources",
      "Prevent unauthorized devices from joining the network",
    ],
    categories: [
      {
        id: "wifi-security",
        label: "Wireless Security Protocol",
        correct: "wpa3",
        reason:
          "WPA3 is the current recommended standard using SAE (Simultaneous Authentication of Equals) instead of PSK, protecting against offline dictionary attacks. WPA2-AES is also acceptable if WPA3 is unavailable. WEP and WPA are broken and must never be used. Open networks have no encryption.",
        options: [
          { id: "open",  label: "Open (no security)",   detail: "No password · all traffic visible · never use" },
          { id: "wep",   label: "WEP",                  detail: "Broken · crackable in minutes · never use" },
          { id: "wpa2",  label: "WPA2-AES (CCMP)",      detail: "Strong · widely supported · still acceptable" },
          { id: "wpa3",  label: "WPA3",                 detail: "Current best · SAE · forward secrecy · use this" },
        ],
      },
      {
        id: "guest-network",
        label: "Visitor Internet Access",
        correct: "guest-vlan",
        reason:
          "A guest VLAN/network isolates visitor traffic from the business LAN. Guests get internet access but cannot see or reach internal servers, printers, or employee devices. Sharing the business Wi-Fi password gives visitors full LAN access. A separate hotspot is an option but adds cost and complexity.",
        options: [
          { id: "share-pass",  label: "Share main Wi-Fi password",    detail: "Visitors on same LAN as business — risky" },
          { id: "no-access",   label: "No internet for visitors",     detail: "Inconvenient · poor customer experience" },
          { id: "guest-vlan",  label: "Separate guest VLAN/network",  detail: "Isolated · internet only · best practice" },
          { id: "hotspot",     label: "Mobile hotspot for visitors",  label: "Completely separate · extra cost" },
        ],
      },
      {
        id: "mac-filtering",
        label: "Device Access Control",
        correct: "mac-filter-plus",
        reason:
          "MAC filtering alone is weak (MAC addresses can be spoofed) but adds a layer of difficulty for casual attackers. Combined with a strong WPA3 passphrase, it is a reasonable SOHO control. 802.1X (RADIUS) is the enterprise standard but complex to set up in a SOHO environment.",
        options: [
          { id: "none",            label: "No additional controls",     detail: "Password only · any device with password joins" },
          { id: "mac-filter-plus", label: "MAC filtering + strong WPA3", detail: "Layered defense · reasonable for SOHO" },
          { id: "radius",          label: "802.1X / RADIUS authentication", detail: "Enterprise-grade · per-user certs · complex for SOHO" },
          { id: "hide-ssid",       label: "Hidden SSID only",           detail: "Security through obscurity · easily defeated" },
        ],
      },
      {
        id: "router-hardening",
        label: "Router Administration Security",
        correct: "hardened",
        reason:
          "Default router credentials (admin/admin or admin/password) are published online and exploited within minutes of connection. Disabling WPS prevents PIN brute-force attacks. Disabling remote management prevents external attackers from accessing the admin interface. Firmware updates patch known vulnerabilities.",
        options: [
          { id: "default",   label: "Keep default settings",                        detail: "Default creds + WPS enabled · immediately exploitable" },
          { id: "just-pass", label: "Change admin password only",                   detail: "Partial improvement · WPS still vulnerable" },
          { id: "hardened",  label: "Change creds, disable WPS, update firmware",   detail: "Full hardening · best practice" },
          { id: "remote",    label: "Enable remote management for convenience",     detail: "Exposes admin to internet — avoid" },
        ],
      },
    ],
  },
  {
    id: "malware-response",
    title: "Malware Incident Response Workstation",
    badge: "Incident Response",
    badgeColor: "text-red-600 dark:text-red-400",
    borderColor: "border-red-500/30",
    requirements: [
      "User reports browser redirects and pop-up ads appearing constantly",
      "Antivirus has been disabled and won't re-enable",
      "New toolbar appeared in browser without user installing it",
      "System is very slow; unknown processes visible in Task Manager",
      "User needs the system back ASAP with data preserved",
    ],
    categories: [
      {
        id: "first-step",
        label: "First Response Action",
        correct: "isolate",
        reason:
          "Immediately isolating the infected machine from the network prevents malware from spreading to other systems, communicating with its C2 server, or exfiltrating data. This is always the first step — before scanning or attempting repair. Disconnect ethernet and disable Wi-Fi.",
        options: [
          { id: "scan-online",  label: "Run antivirus scan immediately",          detail: "AV may be disabled · network still connected" },
          { id: "isolate",      label: "Disconnect from network (isolate)",        detail: "FIRST STEP — stops spread and C2 communication" },
          { id: "reboot",       label: "Reboot the system",                        detail: "May re-run malware at startup" },
          { id: "backup-now",   label: "Backup files immediately",                 detail: "May copy infected files to backup" },
        ],
      },
      {
        id: "scan-method",
        label: "Malware Scanning Approach",
        correct: "offline-scan",
        reason:
          "Scanning offline (booting from external media or using Windows PE) bypasses rootkits and malware that hook into the running OS to hide themselves. In-OS scans miss malware that disables AV or hides from the running OS. Safe Mode partially helps but is not as thorough as fully offline scanning.",
        options: [
          { id: "in-os",       label: "Normal Windows scan",                     detail: "Rootkits can hide from scans within running OS" },
          { id: "safe-mode",   label: "Safe Mode scan",                          detail: "Better · minimal drivers · but OS still running" },
          { id: "offline-scan",label: "Bootable offline scanner (outside OS)",   detail: "BEST — malware cannot hide from external scanner" },
          { id: "online-scan", label: "Web-based online scan",                   detail: "Requires internet · limited to browser analysis" },
        ],
      },
      {
        id: "system-restore",
        label: "System Restore Before Scanning",
        correct: "disable-sr",
        reason:
          "System Restore must be disabled before removing malware because restore points may contain copies of the malware. If you remove malware but leave infected restore points, the user could inadvertently restore the malware. After cleaning is complete, re-enable System Restore and create a new clean restore point.",
        options: [
          { id: "leave-sr",    label: "Leave System Restore enabled",             detail: "Malware copies survive in restore points" },
          { id: "disable-sr",  label: "Disable System Restore before cleaning",   detail: "CORRECT — prevents restoring malware from restore points" },
          { id: "restore-now", label: "Restore to previous point immediately",    detail: "May restore malware that was already present" },
          { id: "delete-all",  label: "Delete all restore points first",          detail: "Same as disabling · but disable is the standard step" },
        ],
      },
      {
        id: "post-removal",
        label: "After Malware Removal",
        correct: "patch-monitor",
        reason:
          "After removal: re-enable System Restore and create a fresh restore point, apply all OS and application patches to close exploited vulnerabilities, update antivirus definitions, schedule regular scans, and monitor for recurrence. Simply removing malware without patching leaves the same vulnerability for re-infection.",
        options: [
          { id: "done",         label: "Declare clean — no further steps",         detail: "Vulnerability still open · re-infection likely" },
          { id: "patch-monitor",label: "Patch OS, update AV, re-enable SR, monitor", detail: "CORRECT — closes vulnerability and prevents recurrence" },
          { id: "reinstall-os", label: "Reinstall OS immediately",                 detail: "Nuclear option · data loss risk · not always necessary" },
          { id: "just-av",      label: "Only update antivirus definitions",        detail: "Partial — OS patches and monitoring still needed" },
        ],
      },
    ],
  },
  {
    id: "windows-deploy",
    title: "Windows Deployment Scenario",
    badge: "OS Setup",
    badgeColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/30",
    requirements: [
      "Deploy Windows 11 to 50 new corporate laptops",
      "Each laptop must join the company Active Directory domain",
      "Standard corporate applications pre-installed",
      "BitLocker must be enabled on all drives",
      "Time-efficient — avoid manual setup on each machine",
    ],
    categories: [
      {
        id: "deploy-method",
        label: "Deployment Method",
        correct: "pxe-wds",
        reason:
          "PXE (Preboot Execution Environment) with WDS (Windows Deployment Services) allows mass deployment over the network — machines boot from the network and receive an automated OS image. USB/DVD requires physical media per machine. Manual install is impractical at scale. MDM (Autopilot) is modern but requires Azure AD.",
        options: [
          { id: "manual",   label: "Manual install on each laptop",           detail: "Time-consuming · 50 laptops · impractical" },
          { id: "usb",      label: "Bootable USB drive per machine",          detail: "Faster than manual · still requires hands-on each machine" },
          { id: "pxe-wds",  label: "PXE boot + WDS network deployment",       detail: "Network image push · scalable · automated · best choice" },
          { id: "autopilot",label: "Windows Autopilot (Azure AD)",            detail: "Modern · cloud-based · requires Azure licensing" },
        ],
      },
      {
        id: "partition",
        label: "Disk Partition Style",
        correct: "gpt-uefi",
        reason:
          "GPT (GUID Partition Table) with UEFI is required for Windows 11 and supports drives larger than 2 TB. MBR with BIOS is limited to 2 TB and 4 primary partitions — a legacy standard. Windows 11 requires UEFI and Secure Boot, which requires GPT. GPT also supports more partitions and is more resilient.",
        options: [
          { id: "mbr-bios",  label: "MBR + Legacy BIOS",   detail: "Legacy · 2 TB limit · 4 partitions · no Secure Boot" },
          { id: "mbr-uefi",  label: "MBR + UEFI",          detail: "Partial · UEFI without Secure Boot benefits" },
          { id: "gpt-uefi",  label: "GPT + UEFI",          detail: "Required for Windows 11 · Secure Boot · modern standard" },
          { id: "dynamic",   label: "Dynamic disk",        detail: "Flexible volumes but not needed for boot drives" },
        ],
      },
      {
        id: "file-system",
        label: "File System for System Drive",
        correct: "ntfs",
        reason:
          "NTFS is required for a Windows system drive. It supports permissions, encryption (EFS), journaling, large files, and is required for BitLocker. FAT32 has a 4 GB file size limit and no security features. exFAT is designed for removable drives. ReFS is a newer Microsoft file system for storage pools but not for OS boot drives.",
        options: [
          { id: "fat32",  label: "FAT32",   detail: "4 GB file limit · no permissions · for USB drives" },
          { id: "exfat",  label: "exFAT",   detail: "For flash drives · no permissions or journaling" },
          { id: "ntfs",   label: "NTFS",    detail: "Required for Windows · permissions · BitLocker · journaling" },
          { id: "refs",   label: "ReFS",    detail: "Modern resilient FS · for storage pools · not for OS boot" },
        ],
      },
      {
        id: "activation",
        label: "Windows Activation Method",
        correct: "kms",
        reason:
          "KMS (Key Management Service) is the standard volume activation method for enterprise deployments. A local KMS server activates all corporate machines without each needing individual product keys or internet access. Retail keys are for individual consumer purchases. MAK (Multiple Activation Key) is a one-time volume key but doesn't auto-renew. Windows Autopilot handles modern cloud activation.",
        options: [
          { id: "retail",     label: "Individual retail product key each", detail: "50 separate keys · unmanageable at scale" },
          { id: "kms",        label: "KMS (Key Management Service)",        detail: "Corporate volume activation · automatic · scalable" },
          { id: "mak",        label: "MAK (Multiple Activation Key)",       detail: "Volume key · fixed activations · no auto-renewal" },
          { id: "no-activate",label: "Skip activation",                     detail: "Watermark · restricted features · non-compliant" },
        ],
      },
    ],
  },
];
