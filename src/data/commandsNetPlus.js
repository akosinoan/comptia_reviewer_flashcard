// CLI Commands for CompTIA Network+ N10-009
// Focus: network diagnostics, configuration, and analysis tools
export const COMMANDS_NETPLUS = [
  // ── Connectivity Testing ──────────────────────────────────────────────────
  {
    category: "Connectivity Testing",
    windows: {
      cmd: "ping",
      description: "Sends ICMP echo requests to test reachability and measure round-trip time. Default sends 4 packets. Use -t for continuous ping.",
      example: "ping 8.8.8.8\nping -t 192.168.1.1",
    },
    linux: {
      cmd: "ping",
      description: "Same as Windows but runs continuously by default. Use -c to limit packet count and -i to set interval.",
      example: "ping -c 4 8.8.8.8\nping -c 10 -i 0.5 192.168.1.1",
    },
  },
  {
    category: "Connectivity Testing",
    windows: {
      cmd: "tracert",
      description: "Traces the route to a destination, showing each hop's IP and round-trip time. Uses ICMP. Useful for isolating where connectivity fails.",
      example: "tracert google.com\ntracert -d 10.0.0.1",
    },
    linux: {
      cmd: "traceroute",
      description: "Same as tracert but uses UDP by default. Use -I for ICMP or -T for TCP. mtr combines ping + traceroute in real time.",
      example: "traceroute google.com\nmtr --report google.com",
    },
  },
  {
    category: "Connectivity Testing",
    windows: {
      cmd: "pathping",
      description: "Combines tracert and ping — traces route and measures packet loss and latency at each hop over a period of time.",
      example: "pathping google.com\npathping -n 10.0.0.1",
    },
    linux: {
      cmd: "mtr",
      description: "My Traceroute — combines traceroute and ping, updating results in real time. Shows packet loss per hop.",
      example: "mtr google.com\nmtr --report --report-cycles 10 google.com",
    },
  },

  // ── Address & Interface Configuration ─────────────────────────────────────
  {
    category: "Address & Interface Config",
    windows: {
      cmd: "ipconfig",
      description: "Displays IP address, subnet mask, and default gateway. /all shows DNS servers, MAC address, DHCP server, and lease times.",
      example: "ipconfig /all\nipconfig /release\nipconfig /renew\nipconfig /flushdns",
    },
    linux: {
      cmd: "ip addr / ifconfig",
      description: "ip addr is the modern tool for showing/configuring interface addresses. ifconfig is legacy. ip link shows interface state.",
      example: "ip addr show\nip addr add 192.168.1.10/24 dev eth0\nifconfig -a",
    },
  },
  {
    category: "Address & Interface Config",
    windows: {
      cmd: "arp -a",
      description: "Displays the ARP cache — the table mapping IP addresses to MAC addresses. Useful to verify L2 reachability and spot ARP spoofing.",
      example: "arp -a\narp -d 192.168.1.1",
    },
    linux: {
      cmd: "arp / ip neigh",
      description: "arp -n displays ARP cache. ip neigh show is the modern equivalent and shows neighbor state (REACHABLE, STALE, FAILED).",
      example: "arp -n\nip neigh show\nip neigh flush dev eth0",
    },
  },
  {
    category: "Address & Interface Config",
    windows: {
      cmd: "route print",
      description: "Displays the IP routing table showing destination networks, gateway, interface, and metric. Use route add/delete to modify.",
      example: "route print\nroute add 10.0.0.0 mask 255.0.0.0 192.168.1.1",
    },
    linux: {
      cmd: "ip route / route -n",
      description: "ip route show displays the routing table. ip route add adds a static route. route -n is the legacy command.",
      example: "ip route show\nip route add 10.0.0.0/8 via 192.168.1.1\nroute -n",
    },
  },

  // ── DNS Troubleshooting ───────────────────────────────────────────────────
  {
    category: "DNS Troubleshooting",
    windows: {
      cmd: "nslookup",
      description: "Queries DNS servers to resolve hostnames or IPs. Enter interactive mode with no arguments. Use 'server' to switch DNS servers.",
      example: "nslookup google.com\nnslookup -type=MX google.com\nnslookup 8.8.8.8",
    },
    linux: {
      cmd: "dig",
      description: "Domain Information Groper — more detailed DNS query tool than nslookup. Shows full DNS response including TTL and authority records.",
      example: "dig google.com\ndig @8.8.8.8 google.com MX\ndig +short google.com A",
    },
  },
  {
    category: "DNS Troubleshooting",
    windows: {
      cmd: "ipconfig /flushdns",
      description: "Clears the local DNS resolver cache. Use when stale DNS entries cause name resolution failures after a DNS change.",
      example: "ipconfig /flushdns\nipconfig /displaydns",
    },
    linux: {
      cmd: "systemd-resolve --flush-caches",
      description: "Flushes the systemd-resolved DNS cache. Alternatively restart nscd or use resolvectl flush-caches on newer systems.",
      example: "sudo systemd-resolve --flush-caches\nresolvectl flush-caches\nsudo service nscd restart",
    },
  },

  // ── Port & Connection Analysis ─────────────────────────────────────────────
  {
    category: "Port & Connection Analysis",
    windows: {
      cmd: "netstat",
      description: "Displays active connections, listening ports, and routing tables. -ano shows all connections with PIDs. -b shows the executable.",
      example: "netstat -ano\nnetstat -ano | findstr :443\nnetstat -r",
    },
    linux: {
      cmd: "ss / netstat",
      description: "ss (socket statistics) is the modern replacement for netstat. -tuln shows all TCP/UDP listening ports. netstat -tulnp also works.",
      example: "ss -tuln\nss -antp | grep :80\nnetstat -tulnp",
    },
  },
  {
    category: "Port & Connection Analysis",
    windows: {
      cmd: "telnet",
      description: "Tests TCP connectivity to a specific port on a remote host (telnet client must be enabled). Useful for verifying firewall rules.",
      example: "telnet 192.168.1.1 80\ntelnet smtp.example.com 25",
    },
    linux: {
      cmd: "nc (netcat) / telnet",
      description: "netcat (nc) is more flexible — tests TCP/UDP port connectivity, transfers data, and creates simple servers for testing.",
      example: "nc -zv 192.168.1.1 80\nnc -zv 192.168.1.1 20-25\ntelnet 192.168.1.1 443",
    },
  },
  {
    category: "Port & Connection Analysis",
    windows: {
      cmd: "nmap (third-party)",
      description: "Network mapper — scans hosts and open ports, detects OS and service versions. Not built-in; installed separately. Used in Network+ troubleshooting.",
      example: "nmap 192.168.1.0/24\nnmap -sV -p 1-1024 192.168.1.1\nnmap -O 10.0.0.1",
    },
    linux: {
      cmd: "nmap",
      description: "Same as Windows. Common flags: -sS (SYN scan), -sU (UDP scan), -sV (version detection), -O (OS detection), -A (aggressive scan).",
      example: "nmap -sS 192.168.1.0/24\nnmap -sU -p 53,161 10.0.0.1\nnmap -A 192.168.1.1",
    },
  },

  // ── Packet Capture & Analysis ─────────────────────────────────────────────
  {
    category: "Packet Capture & Analysis",
    windows: {
      cmd: "Wireshark / netsh trace",
      description: "Wireshark is the GUI packet analyzer for Network+. netsh trace start captures natively. Display filters narrow results by protocol, IP, or port.",
      example: "netsh trace start capture=yes\nnetsh trace stop\n# Wireshark display filter:\nip.addr==192.168.1.1 && tcp.port==443",
    },
    linux: {
      cmd: "tcpdump",
      description: "Command-line packet capture tool. Captures traffic on an interface and optionally writes to a .pcap file for analysis in Wireshark.",
      example: "tcpdump -i eth0 -n\ntcpdump -i eth0 port 80 -w capture.pcap\ntcpdump -r capture.pcap",
    },
  },

  // ── Wireless Diagnostics ──────────────────────────────────────────────────
  {
    category: "Wireless Diagnostics",
    windows: {
      cmd: "netsh wlan",
      description: "Manages wireless profiles and shows WLAN interface details. show all displays SSIDs, signal strength, BSSID, channel, and security type.",
      example: "netsh wlan show all\nnetsh wlan show profiles\nnetsh wlan show interfaces",
    },
    linux: {
      cmd: "iwconfig / iw",
      description: "iwconfig shows/configures wireless interface parameters. iw is the modern replacement. iwlist scan scans for nearby access points.",
      example: "iwconfig wlan0\niw dev wlan0 scan | grep -E 'SSID|signal'\niwlist wlan0 scanning",
    },
  },

  // ── Remote Access ──────────────────────────────────────────────────────────
  {
    category: "Remote Access",
    windows: {
      cmd: "ssh",
      description: "Built-in since Windows 10. Establishes encrypted remote shell sessions (port 22). ssh-keygen generates key pairs for key-based auth.",
      example: "ssh admin@192.168.1.1\nssh -p 2222 user@server\nssh -i ~/.ssh/id_rsa user@host",
    },
    linux: {
      cmd: "ssh",
      description: "Same as Windows. Use -L for local port forwarding, -R for remote, -D for SOCKS proxy. scp and sftp transfer files securely.",
      example: "ssh admin@192.168.1.1\nscp file.txt user@host:/tmp/\nsftp user@192.168.1.10",
    },
  },
];

export const COMMAND_CATEGORIES_NETPLUS = [
  "Connectivity Testing",
  "Address & Interface Config",
  "DNS Troubleshooting",
  "Port & Connection Analysis",
  "Packet Capture & Analysis",
  "Wireless Diagnostics",
  "Remote Access",
];
