// CompTIA A+ Core 2 (220-1202) — CLI Commands
// Each entry: { category, windows, linux }
// windows/linux: { cmd, description, example } — linux may be null if no equivalent

export const COMMANDS_CORE2 = [
  // ── Network Diagnostics ──────────────────────────────────────────────────
  {
    category: "Network Diagnostics",
    windows: {
      cmd: "ipconfig",
      description: "Displays IP address, subnet mask, and default gateway for all network adapters. Use /all for full details.",
      example: "ipconfig /all",
    },
    linux: {
      cmd: "ip addr  /  ifconfig",
      description: "Displays or configures network interface addresses. ip addr is the modern replacement for ifconfig.",
      example: "ip addr show  /  ifconfig -a",
    },
  },
  {
    category: "Network Diagnostics",
    windows: {
      cmd: "ping",
      description: "Tests connectivity to a host by sending ICMP echo requests. Useful to verify a device is reachable.",
      example: "ping 8.8.8.8",
    },
    linux: {
      cmd: "ping",
      description: "Same as Windows but runs continuously by default. Use -c to limit count.",
      example: "ping -c 4 8.8.8.8",
    },
  },
  {
    category: "Network Diagnostics",
    windows: {
      cmd: "tracert",
      description: "Traces the route packets take to a destination, showing each hop and latency. Helps pinpoint where a connection fails.",
      example: "tracert google.com",
    },
    linux: {
      cmd: "traceroute",
      description: "Same purpose as tracert. Some distros use tracepath as a no-root alternative.",
      example: "traceroute google.com",
    },
  },
  {
    category: "Network Diagnostics",
    windows: {
      cmd: "pathping",
      description: "Combines ping and tracert — sends packets to each hop over time and reports latency and packet loss per hop.",
      example: "pathping google.com",
    },
    linux: {
      cmd: "mtr",
      description: "Real-time combination of ping and traceroute. Continuously updates hop statistics.",
      example: "mtr google.com",
    },
  },
  {
    category: "Network Diagnostics",
    windows: {
      cmd: "nslookup",
      description: "Queries DNS servers to resolve hostnames to IP addresses or look up DNS records.",
      example: "nslookup google.com",
    },
    linux: {
      cmd: "nslookup  /  dig",
      description: "nslookup works the same. dig is more powerful for detailed DNS record lookups.",
      example: "dig google.com A",
    },
  },
  {
    category: "Network Diagnostics",
    windows: {
      cmd: "netstat",
      description: "Displays active TCP connections, listening ports, and network statistics. Use -an to show all connections numerically.",
      example: "netstat -an",
    },
    linux: {
      cmd: "netstat  /  ss",
      description: "netstat works the same. ss is the modern replacement with faster output.",
      example: "ss -tuln",
    },
  },
  {
    category: "Network Diagnostics",
    windows: {
      cmd: "arp",
      description: "Displays and modifies the ARP cache — the mapping of IP addresses to MAC addresses on the local network.",
      example: "arp -a",
    },
    linux: {
      cmd: "arp  /  ip neigh",
      description: "arp -n shows the ARP table. ip neigh is the modern equivalent.",
      example: "ip neigh show",
    },
  },
  {
    category: "Network Diagnostics",
    windows: {
      cmd: "hostname",
      description: "Displays the computer's hostname (network name).",
      example: "hostname",
    },
    linux: {
      cmd: "hostname",
      description: "Displays or temporarily sets the system hostname.",
      example: "hostname",
    },
  },
  {
    category: "Network Diagnostics",
    windows: {
      cmd: "nbtstat",
      description: "Displays NetBIOS over TCP/IP statistics and name tables. Useful for troubleshooting older Windows network name resolution.",
      example: "nbtstat -n",
    },
    linux: {
      cmd: "nmblookup",
      description: "Part of Samba — queries NetBIOS names over TCP/IP (rarely needed on modern Linux).",
      example: "nmblookup -A 192.168.1.1",
    },
  },
  // ── File & Directory Management ──────────────────────────────────────────
  {
    category: "File & Directory Management",
    windows: {
      cmd: "dir",
      description: "Lists files and subdirectories in the current or specified directory.",
      example: "dir C:\\Users",
    },
    linux: {
      cmd: "ls",
      description: "Lists directory contents. Use -la for detailed listing including hidden files.",
      example: "ls -la /home",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "cd",
      description: "Changes the current working directory. Use cd .. to go up one level.",
      example: "cd C:\\Users\\Admin",
    },
    linux: {
      cmd: "cd",
      description: "Changes the current directory. cd ~ returns to the home directory.",
      example: "cd /home/user",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "copy  /  xcopy  /  robocopy",
      description: "copy: basic file copy. xcopy: copies directories and attributes. robocopy: robust copy with resume, mirroring, and logging.",
      example: "robocopy C:\\src D:\\dst /E /COPYALL",
    },
    linux: {
      cmd: "cp",
      description: "Copies files and directories. Use -r for recursive directory copy.",
      example: "cp -r /source /destination",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "del  /  erase",
      description: "Deletes one or more files. Does not move to Recycle Bin — deletion is immediate.",
      example: "del C:\\temp\\*.log",
    },
    linux: {
      cmd: "rm",
      description: "Removes files. Use -r to remove directories recursively. Use with caution — no trash by default.",
      example: "rm -r /tmp/oldfiles",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "md  /  mkdir",
      description: "Creates a new directory (folder).",
      example: "mkdir C:\\Projects\\NewApp",
    },
    linux: {
      cmd: "mkdir",
      description: "Creates a new directory. Use -p to create nested directories in one command.",
      example: "mkdir -p /opt/app/logs",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "rd  /  rmdir",
      description: "Removes an empty directory. Use /s to remove directory and all contents.",
      example: "rd /s /q C:\\OldProject",
    },
    linux: {
      cmd: "rmdir  /  rm -r",
      description: "rmdir removes empty directories. rm -r removes directories and their contents.",
      example: "rm -r /var/oldapp",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "ren  /  rename",
      description: "Renames a file or directory.",
      example: "ren oldname.txt newname.txt",
    },
    linux: {
      cmd: "mv",
      description: "Moves or renames files and directories.",
      example: "mv oldname.txt newname.txt",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "move",
      description: "Moves a file from one location to another.",
      example: "move C:\\temp\\file.txt D:\\archive\\",
    },
    linux: {
      cmd: "mv",
      description: "Moves files or directories. Also used to rename.",
      example: "mv /tmp/file.txt /archive/",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "type",
      description: "Displays the contents of a text file directly in the terminal.",
      example: "type C:\\logs\\error.log",
    },
    linux: {
      cmd: "cat",
      description: "Concatenates and displays file contents. Also used to combine files.",
      example: "cat /var/log/syslog",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "cls",
      description: "Clears all text from the command prompt window.",
      example: "cls",
    },
    linux: {
      cmd: "clear",
      description: "Clears the terminal screen. Ctrl+L is the keyboard shortcut.",
      example: "clear",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "attrib",
      description: "Views or changes file attributes: Read-only (R), Hidden (H), System (S), Archive (A).",
      example: "attrib +H +S C:\\boot.ini",
    },
    linux: {
      cmd: "chmod  /  chattr",
      description: "chmod changes file permissions (rwx). chattr changes special file attributes (immutable, append-only).",
      example: "chmod 755 script.sh",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "findstr",
      description: "Searches for text strings in files using literal strings or regular expressions.",
      example: "findstr /i \"error\" C:\\logs\\app.log",
    },
    linux: {
      cmd: "grep",
      description: "Searches for patterns in files. One of the most commonly used Linux commands.",
      example: "grep -i \"error\" /var/log/syslog",
    },
  },
  {
    category: "File & Directory Management",
    windows: {
      cmd: "where",
      description: "Locates and displays the path of a program or file in the system PATH.",
      example: "where python",
    },
    linux: {
      cmd: "which  /  find",
      description: "which shows the path of a command. find searches for files in a directory tree.",
      example: "which python  /  find / -name \"*.conf\"",
    },
  },
  // ── System Information & Processes ──────────────────────────────────────
  {
    category: "System Information & Processes",
    windows: {
      cmd: "systeminfo",
      description: "Displays detailed OS and hardware configuration including OS version, RAM, hotfixes installed, and network adapters.",
      example: "systeminfo",
    },
    linux: {
      cmd: "uname -a  /  hostnamectl",
      description: "uname -a shows kernel and OS info. hostnamectl shows full system and OS details on systemd systems.",
      example: "uname -a",
    },
  },
  {
    category: "System Information & Processes",
    windows: {
      cmd: "winver",
      description: "Opens a GUI dialog showing the exact Windows version and build number.",
      example: "winver",
    },
    linux: {
      cmd: "lsb_release -a  /  cat /etc/os-release",
      description: "Displays the Linux distribution name and version.",
      example: "lsb_release -a",
    },
  },
  {
    category: "System Information & Processes",
    windows: {
      cmd: "tasklist",
      description: "Lists all running processes with PID, memory usage, and status.",
      example: "tasklist",
    },
    linux: {
      cmd: "ps aux  /  top",
      description: "ps aux lists all running processes. top shows a real-time dynamic view of processes.",
      example: "ps aux | grep apache",
    },
  },
  {
    category: "System Information & Processes",
    windows: {
      cmd: "taskkill",
      description: "Terminates a running process by PID or image name. Use /F to force kill.",
      example: "taskkill /PID 1234 /F",
    },
    linux: {
      cmd: "kill  /  killall",
      description: "kill sends a signal to a process by PID (kill -9 for force). killall kills by process name.",
      example: "killall firefox",
    },
  },
  {
    category: "System Information & Processes",
    windows: {
      cmd: "shutdown",
      description: "Shuts down, restarts, or logs off the system. /s=shutdown, /r=restart, /t=delay in seconds.",
      example: "shutdown /r /t 0",
    },
    linux: {
      cmd: "shutdown  /  reboot",
      description: "shutdown -h now halts immediately. reboot restarts. poweroff shuts down.",
      example: "shutdown -r +5 \"Rebooting for updates\"",
    },
  },
  {
    category: "System Information & Processes",
    windows: {
      cmd: "whoami",
      description: "Displays the current logged-in username including domain. Use /priv to see privileges.",
      example: "whoami /priv",
    },
    linux: {
      cmd: "whoami",
      description: "Displays the current effective username.",
      example: "whoami",
    },
  },
  {
    category: "System Information & Processes",
    windows: {
      cmd: "msinfo32",
      description: "Opens the System Information GUI with detailed hardware, software, and component information.",
      example: "msinfo32",
    },
    linux: {
      cmd: "lshw  /  inxi",
      description: "lshw lists hardware configuration. inxi gives a formatted hardware/system summary.",
      example: "lshw -short",
    },
  },
  // ── Disk Management ──────────────────────────────────────────────────────
  {
    category: "Disk Management",
    windows: {
      cmd: "chkdsk",
      description: "Checks a disk for file system errors and bad sectors. Use /f to fix errors, /r to locate bad sectors.",
      example: "chkdsk C: /f /r",
    },
    linux: {
      cmd: "fsck",
      description: "File system check and repair utility. Must be run on unmounted partitions.",
      example: "fsck -y /dev/sda1",
    },
  },
  {
    category: "Disk Management",
    windows: {
      cmd: "diskpart",
      description: "Interactive command-line tool to manage disks, partitions, and volumes. Used for formatting, shrinking, and creating partitions.",
      example: "diskpart  (then: list disk, select disk 0, clean)",
    },
    linux: {
      cmd: "fdisk  /  parted",
      description: "fdisk is the classic partition editor. parted supports GPT and larger disks. gdisk for GPT-specific work.",
      example: "fdisk /dev/sda",
    },
  },
  {
    category: "Disk Management",
    windows: {
      cmd: "format",
      description: "Formats a disk or partition with a specified file system (NTFS, FAT32, exFAT).",
      example: "format D: /FS:NTFS /Q",
    },
    linux: {
      cmd: "mkfs",
      description: "Creates a file system on a partition. Specify type with mkfs.ext4, mkfs.ntfs, mkfs.vfat, etc.",
      example: "mkfs.ext4 /dev/sdb1",
    },
  },
  {
    category: "Disk Management",
    windows: {
      cmd: "sfc",
      description: "System File Checker — scans and repairs corrupted Windows system files using cached copies.",
      example: "sfc /scannow",
    },
    linux: {
      cmd: "debsums  /  rpm -V",
      description: "debsums verifies installed package file integrity on Debian/Ubuntu. rpm -V verifies on RHEL/CentOS.",
      example: "debsums -s",
    },
  },
  {
    category: "Disk Management",
    windows: {
      cmd: "df  (not built-in)",
      description: "Windows does not have a built-in df. Use diskpart or check via File Explorer. PowerShell: Get-PSDrive.",
      example: "Get-PSDrive -PSProvider FileSystem",
    },
    linux: {
      cmd: "df  /  du",
      description: "df shows disk space usage per mount point. du shows disk usage of files and directories.",
      example: "df -h  /  du -sh /var/*",
    },
  },
  // ── User & Security Management ───────────────────────────────────────────
  {
    category: "User & Security Management",
    windows: {
      cmd: "net user",
      description: "Creates, modifies, or deletes local user accounts. Also displays account information.",
      example: "net user john P@ssw0rd /add",
    },
    linux: {
      cmd: "useradd  /  passwd",
      description: "useradd creates a new user. passwd sets or changes the user's password.",
      example: "useradd john && passwd john",
    },
  },
  {
    category: "User & Security Management",
    windows: {
      cmd: "net localgroup",
      description: "Manages local groups — add/remove users from groups like Administrators.",
      example: "net localgroup Administrators john /add",
    },
    linux: {
      cmd: "groupadd  /  usermod",
      description: "groupadd creates groups. usermod -aG adds a user to a group.",
      example: "usermod -aG sudo john",
    },
  },
  {
    category: "User & Security Management",
    windows: {
      cmd: "runas",
      description: "Runs a program as a different user (typically an administrator). Similar to sudo on Linux.",
      example: "runas /user:Administrator cmd",
    },
    linux: {
      cmd: "sudo  /  su",
      description: "sudo runs a single command as root or another user. su switches the active user session.",
      example: "sudo apt update  /  su - admin",
    },
  },
  {
    category: "User & Security Management",
    windows: {
      cmd: "cipher",
      description: "Encrypts or decrypts files/folders using EFS (Encrypting File System). Also used to securely wipe free space.",
      example: "cipher /e C:\\SensitiveFolder",
    },
    linux: {
      cmd: "gpg  /  openssl",
      description: "gpg encrypts files using GNU Privacy Guard. openssl encrypts with various algorithms.",
      example: "gpg -c secret.txt",
    },
  },
  {
    category: "User & Security Management",
    windows: {
      cmd: "icacls",
      description: "Views and modifies NTFS file and folder permissions (ACLs).",
      example: "icacls C:\\folder /grant john:(OI)(CI)F",
    },
    linux: {
      cmd: "chmod  /  chown",
      description: "chmod changes file read/write/execute permissions. chown changes file owner and group.",
      example: "chmod 644 file.txt  /  chown user:group file",
    },
  },
  // ── Services & Remote Management ─────────────────────────────────────────
  {
    category: "Services & Remote Management",
    windows: {
      cmd: "sc",
      description: "Service Control — starts, stops, creates, queries, and configures Windows services from the command line.",
      example: "sc start wuauserv",
    },
    linux: {
      cmd: "systemctl",
      description: "Controls systemd services — start, stop, restart, enable, disable, and check status.",
      example: "systemctl restart apache2",
    },
  },
  {
    category: "Services & Remote Management",
    windows: {
      cmd: "net start  /  net stop",
      description: "Starts or stops a Windows service by display name. Simpler alternative to sc.",
      example: "net stop \"Windows Update\"",
    },
    linux: {
      cmd: "service",
      description: "Legacy interface to start/stop/restart services. Works alongside systemctl on many distros.",
      example: "service ssh restart",
    },
  },
  {
    category: "Services & Remote Management",
    windows: {
      cmd: "mstsc",
      description: "Opens the Remote Desktop Connection client to connect to another Windows machine via RDP (port 3389).",
      example: "mstsc /v:192.168.1.100",
    },
    linux: {
      cmd: "ssh",
      description: "Secure Shell — encrypted remote terminal access to another machine over port 22.",
      example: "ssh user@192.168.1.100",
    },
  },
  {
    category: "Services & Remote Management",
    windows: {
      cmd: "gpupdate",
      description: "Forces an immediate refresh of Group Policy settings on the computer and user.",
      example: "gpupdate /force",
    },
    linux: {
      cmd: "(no direct equivalent)",
      description: "Linux uses configuration files instead of Group Policy. sssd or realmd can apply domain policies in AD environments.",
      example: "realm join domain.local",
    },
  },
  {
    category: "Services & Remote Management",
    windows: {
      cmd: "gpresult",
      description: "Displays the Group Policy settings and Resultant Set of Policy (RSoP) for the current user and computer.",
      example: "gpresult /r",
    },
    linux: {
      cmd: "(no direct equivalent)",
      description: "Domain-joined Linux systems can use sss_cache or adcli to query applied policies.",
      example: "adcli info domain.local",
    },
  },
  // ── Package & Software Management ────────────────────────────────────────
  {
    category: "Package & Software Management",
    windows: {
      cmd: "winget",
      description: "Windows Package Manager CLI — installs, updates, and removes software from the Microsoft Store and web repositories.",
      example: "winget install VLC",
    },
    linux: {
      cmd: "apt  /  yum  /  dnf",
      description: "apt is used on Debian/Ubuntu. yum/dnf on RHEL/CentOS/Fedora. Used to install, update, and remove packages.",
      example: "apt install nmap  /  dnf update",
    },
  },
  {
    category: "Package & Software Management",
    windows: {
      cmd: "msiexec",
      description: "Installs, modifies, or removes Windows Installer (.msi) packages. Used for silent/automated installs.",
      example: "msiexec /i setup.msi /quiet",
    },
    linux: {
      cmd: "dpkg  /  rpm",
      description: "dpkg installs .deb packages on Debian/Ubuntu. rpm installs .rpm packages on RHEL/CentOS.",
      example: "dpkg -i package.deb  /  rpm -ivh pkg.rpm",
    },
  },
  // ── Logs & Troubleshooting ───────────────────────────────────────────────
  {
    category: "Logs & Troubleshooting",
    windows: {
      cmd: "eventvwr",
      description: "Opens the Event Viewer GUI — view System, Application, and Security logs for error and warning events.",
      example: "eventvwr",
    },
    linux: {
      cmd: "journalctl",
      description: "Queries the systemd journal (logs). Use -u for a specific service or -xe for errors.",
      example: "journalctl -u ssh -n 50",
    },
  },
  {
    category: "Logs & Troubleshooting",
    windows: {
      cmd: "sfc /scannow",
      description: "Scans all protected Windows system files and replaces corrupted files from a cached copy.",
      example: "sfc /scannow",
    },
    linux: {
      cmd: "dmesg",
      description: "Prints the kernel ring buffer — useful for hardware errors, driver issues, and boot messages.",
      example: "dmesg | grep -i error",
    },
  },
  {
    category: "Logs & Troubleshooting",
    windows: {
      cmd: "msconfig",
      description: "System Configuration tool — manage startup programs, boot options, and services. Used in Safe Mode troubleshooting.",
      example: "msconfig",
    },
    linux: {
      cmd: "systemctl list-units",
      description: "Lists all active systemd units (services, mounts, etc.). Use --failed to see only failed units.",
      example: "systemctl --failed",
    },
  },
  // ── Registry ─────────────────────────────────────────────────────────────
  {
    category: "Registry & Config Files",
    windows: {
      cmd: "regedit",
      description: "Registry Editor GUI — view and modify the Windows Registry (HKLM, HKCU, etc.). Changes take effect immediately.",
      example: "regedit",
    },
    linux: {
      cmd: "(no equivalent — uses text config files)",
      description: "Linux stores configuration in plain text files under /etc. Common paths: /etc/ssh/sshd_config, /etc/fstab, /etc/hosts.",
      example: "nano /etc/ssh/sshd_config",
    },
  },
  {
    category: "Registry & Config Files",
    windows: {
      cmd: "reg",
      description: "Command-line Registry editor — add, delete, query, export, and import registry keys without opening regedit.",
      example: "reg query HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion",
    },
    linux: {
      cmd: "cat  /  nano  /  vi",
      description: "Linux configuration is text-based. Use any text editor to view or modify config files.",
      example: "nano /etc/hosts",
    },
  },
];

export const COMMAND_CATEGORIES = [...new Set(COMMANDS_CORE2.map((c) => c.category))];
