import {
  DIFFICULTY_PREFIXES,
  QUESTION_TYPES,
  HINTS,
  MISTAKES,
} from "@/data/subnetData";

// ── Bit math helpers ──────────────────────────────────────────────────────────

function ipToInt(octets) {
  return ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0;
}

function intToIp(n) {
  return [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff];
}

export function formatIp(octets) {
  return octets.join(".");
}

export function octetToBin(n) {
  return n.toString(2).padStart(8, "0");
}

export function ipToBinaryDotted(octets) {
  return octets.map(octetToBin).join(".");
}

// Returns a 32-element array of 0/1 numbers
export function ipToBits(octets) {
  return octets.flatMap((o) =>
    o.toString(2).padStart(8, "0").split("").map(Number)
  );
}

// ── Subnet calculation ────────────────────────────────────────────────────────

export function calcSubnet(ip, prefix) {
  const ipInt   = ipToInt(ip);
  const maskInt = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  const wcInt   = (~maskInt) >>> 0;
  const netInt  = (ipInt & maskInt) >>> 0;
  const bcInt   = (netInt | wcInt) >>> 0;
  const hBits   = 32 - prefix;
  const total   = hBits >= 2 ? Math.pow(2, hBits) - 2 : hBits === 1 ? 2 : 1;

  return {
    network:    intToIp(netInt),
    broadcast:  intToIp(bcInt),
    first:      hBits >= 2 ? intToIp(netInt + 1) : intToIp(netInt),
    last:       hBits >= 2 ? intToIp(bcInt - 1) : intToIp(bcInt),
    mask:       intToIp(maskInt),
    wildcard:   intToIp(wcInt),
    totalHosts: total,
    hostBits:   hBits,
  };
}

// ── Random generation ─────────────────────────────────────────────────────────

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomIp() {
  const r = rand(0, 2);
  if (r === 0) return [10,  rand(0, 255), rand(0, 255), rand(1, 254)];
  if (r === 1) return [172, rand(16, 31), rand(0, 255), rand(1, 254)];
  return [192, 168, rand(0, 255), rand(1, 254)];
}

// ── Step text builder ─────────────────────────────────────────────────────────

function buildSteps(ip, prefix, info, type) {
  const ipStr  = formatIp(ip);
  const maskStr = formatIp(info.mask);
  const netStr  = formatIp(info.network);
  const bcStr   = formatIp(info.broadcast);
  const wcStr   = formatIp(info.wildcard);
  const hBits   = info.hostBits;
  const total   = info.totalHosts;

  const base = [
    `Step 1 — Note the given IP address and prefix.\n` +
    `  IP Address : ${ipStr}\n` +
    `  CIDR prefix: /${prefix}\n` +
    `  This means ${prefix} bits identify the network and ${hBits} bits identify hosts.`,

    `Step 2 — Convert /${prefix} to a subnet mask.\n` +
    `  Write ${prefix} ones, then ${hBits} zeros (32 bits total):\n` +
    `  Binary : ${"1".repeat(prefix)}${"0".repeat(hBits)}\n` +
    `  Decimal: ${maskStr}`,

    `Step 3 — Find the network address (bitwise AND).\n` +
    `  For every bit position: IP-bit AND mask-bit.\n` +
    `  When mask bit = 1 → keep IP bit. When mask bit = 0 → force 0.\n` +
    `  ${ipStr}  AND  ${maskStr}  =  ${netStr}`,
  ];

  switch (type) {
    case "network_address":
      return [
        ...base,
        `Step 4 — The network address is the result of the AND operation.\n` +
        `  Answer: ${netStr}\n` +
        `  This address represents the entire subnet and cannot be assigned to a host.`,
      ];

    case "broadcast":
      return [
        ...base,
        `Step 4 — Compute the wildcard mask (bitwise NOT of the subnet mask).\n` +
        `  Flip every bit: 1 → 0, 0 → 1.\n` +
        `  Subnet mask : ${maskStr}\n` +
        `  Wildcard    : ${wcStr}`,

        `Step 5 — Broadcast = network address OR wildcard mask.\n` +
        `  ${netStr}  OR  ${wcStr}  =  ${bcStr}\n` +
        `  Setting all host bits to 1 gives the broadcast address.`,

        `Step 6 — Answer: ${bcStr}\n` +
        `  Every device in the subnet receives packets sent here.\n` +
        `  It is the last address in the range and cannot be assigned to a host.`,
      ];

    case "first_host":
      return [
        ...base,
        `Step 4 — The network address (${netStr}) is reserved — it names the subnet.\n` +
        `  It cannot be assigned to any host.`,

        `Step 5 — First usable host = network address + 1.\n` +
        `  ${netStr} + 1 = ${formatIp(info.first)}`,

        `Step 6 — Answer: ${formatIp(info.first)}`,
      ];

    case "last_host":
      return [
        ...base,
        `Step 4 — Find the broadcast address (network OR wildcard).\n` +
        `  ${netStr}  OR  ${wcStr}  =  ${bcStr}`,

        `Step 5 — Last usable host = broadcast address − 1.\n` +
        `  ${bcStr} − 1 = ${formatIp(info.last)}`,

        `Step 6 — Answer: ${formatIp(info.last)}\n` +
        `  The broadcast address itself (${bcStr}) is reserved.`,
      ];

    case "host_count":
      return [
        `Step 1 — Identify the number of host bits.\n` +
        `  Host bits = 32 − prefix = 32 − ${prefix} = ${hBits}`,

        `Step 2 — Calculate total IP addresses in the subnet.\n` +
        `  2^${hBits} = ${Math.pow(2, hBits)} addresses`,

        `Step 3 — Subtract the 2 reserved addresses.\n` +
        `  Network address : ${netStr}  (reserved)\n` +
        `  Broadcast address: ${bcStr}  (reserved)\n` +
        `  ${Math.pow(2, hBits)} − 2 = ${total}`,

        `Step 4 — Answer: ${total} usable host addresses.\n` +
        `  Pattern: /28→14, /27→30, /26→62, /25→126, /24→254.`,
      ];

    case "subnet_id": {
      const ip2     = info._ip2;
      const ip2Str  = formatIp(ip2);
      const net2Str = formatIp(calcSubnet(ip2, prefix).network);
      const same    = net2Str === netStr;
      return [
        `Step 1 — Apply the /${prefix} mask to the first IP.\n` +
        `  ${ipStr}  AND  ${maskStr}  =  ${netStr}  (subnet A)`,

        `Step 2 — Apply the same /${prefix} mask to the second IP.\n` +
        `  ${ip2Str}  AND  ${maskStr}  =  ${net2Str}  (subnet B)`,

        `Step 3 — Compare the two network addresses.\n` +
        `  ${netStr}  ${same ? "===" : "!=="}  ${net2Str}\n` +
        `  ${same ? "They match → same subnet." : "They differ → different subnets."}`,

        `Step 4 — Answer: ${same ? "Yes" : "No"}\n` +
        `  ${same
          ? `Both IPs fall within the ${netStr}/${prefix} subnet.`
          : `${ipStr} is in ${netStr}/${prefix}, but ${ip2Str} is in ${net2Str}/${prefix}.`}`,
      ];
    }

    default:
      return base;
  }
}

// ── ASCII visual walkthrough (for JSON format output) ────────────────────────

function buildVisual(ip, prefix, info) {
  const nBits  = prefix;
  const hBits  = info.hostBits;
  const netStr = formatIp(info.network);
  const bcStr  = formatIp(info.broadcast);

  const roles      = Array.from({ length: 32 }, (_, i) => (i < nBits ? "N" : "H"));
  const roleOctets = [0, 8, 16, 24].map((s) => roles.slice(s, s + 8).join("")).join(".");

  const ipBin  = ipToBinaryDotted(ip);
  const mskBin = ipToBinaryDotted(info.mask);
  const wcBin  = ipToBinaryDotted(info.wildcard);
  const netBin = ipToBinaryDotted(info.network);
  const bcBin  = ipToBinaryDotted(info.broadcast);
  const sep    = "─".repeat(35);

  const pad = (s) => String(s).padEnd(22);

  return [
    [
      "[ Step 1: Binary Representation ]",
      "",
      `  IP Address  : ${formatIp(ip).padEnd(15)} → ${ipBin}`,
      `  Subnet Mask : ${formatIp(info.mask).padEnd(15)} → ${mskBin}`,
    ].join("\n"),

    [
      "[ Step 2: Network (N) vs Host (H) Bit Roles ]",
      "",
      `  Roles : ${roleOctets}`,
      `  IP    : ${ipBin}`,
      "",
      `  ← ${nBits} Network bits (fixed) →← ${hBits} Host bits (variable) →`,
      "",
      `  Network bits : ${nBits}  (from /${prefix})`,
      `  Host bits    : ${hBits}  (32 − ${prefix})`,
      `  Usable hosts : 2^${hBits} − 2 = ${info.totalHosts}`,
    ].join("\n"),

    [
      "[ Step 3: Network Address (IP AND Mask) ]",
      "",
      `  IP  : ${ipBin}`,
      `  AND   ${mskBin}`,
      `        ${sep}`,
      `  NET : ${netBin}`,
      "",
      `  → ${formatIp(ip)} AND ${formatIp(info.mask)} = ${netStr}`,
    ].join("\n"),

    [
      "[ Step 4: Broadcast Address (NET OR Wildcard) ]",
      "",
      `  Wildcard = NOT mask = ${formatIp(info.wildcard)}`,
      "",
      `  NET : ${netBin}`,
      `  OR    ${wcBin}`,
      `        ${sep}`,
      `  BC  : ${bcBin}`,
      "",
      `  → Broadcast: ${bcStr}`,
    ].join("\n"),

    [
      "[ Step 5: Subnet Summary ]",
      "",
      `  ┌─────────────────────────────────────┐`,
      `  │  Network    : ${pad(netStr)}│`,
      `  │  First host : ${pad(formatIp(info.first))}│`,
      `  │  Last host  : ${pad(formatIp(info.last))}│`,
      `  │  Broadcast  : ${pad(bcStr)}│`,
      `  │  Mask       : ${pad(formatIp(info.mask))}│`,
      `  │  CIDR       : ${pad("/" + prefix)}│`,
      `  │  Usable     : ${pad(info.totalHosts)}│`,
      `  └─────────────────────────────────────┘`,
    ].join("\n"),
  ];
}

// ── Subnet-ID question helper ─────────────────────────────────────────────────

function buildSubnetIdQuestion(ip, prefix, info) {
  const netInt  = ipToInt(info.network);
  const wcInt   = ipToInt(info.wildcard);
  const same    = Math.random() < 0.5;
  let ip2;

  if (same) {
    const range = Math.min(wcInt - 1, 100);
    ip2 = range > 0 ? intToIp(netInt + rand(1, range)) : info.first;
  } else {
    const subnetSize = wcInt + 1;
    const skip       = subnetSize * rand(1, 3);
    const altNet     = (netInt + skip) >>> 0;
    ip2 = intToIp(altNet + rand(1, Math.min(wcInt - 1, 10)));
  }

  const sameSubnet =
    formatIp(calcSubnet(ip2, prefix).network) === formatIp(info.network);

  return { ip2, sameSubnet };
}

// ── Public API ────────────────────────────────────────────────────────────────

export function generateProblem(difficulty = "medium") {
  const prefixes = DIFFICULTY_PREFIXES[difficulty];
  const prefix   = prefixes[rand(0, prefixes.length - 1)];
  const ip       = randomIp();
  const info     = calcSubnet(ip, prefix);
  const type     = QUESTION_TYPES[rand(0, QUESTION_TYPES.length - 1)];

  let question, answer;

  if (type === "subnet_id") {
    const { ip2, sameSubnet } = buildSubnetIdQuestion(ip, prefix, info);
    info._ip2 = ip2;
    question  = `Are ${formatIp(ip)} and ${formatIp(ip2)} in the same /${prefix} subnet?`;
    answer    = sameSubnet ? "Yes" : "No";
  } else {
    const qMap = {
      network_address: `What is the network address for ${formatIp(ip)}/${prefix}?`,
      broadcast:       `What is the broadcast address for ${formatIp(ip)}/${prefix}?`,
      first_host:      `What is the first usable host in the ${formatIp(ip)}/${prefix} subnet?`,
      last_host:       `What is the last usable host in the ${formatIp(ip)}/${prefix} subnet?`,
      host_count:      `How many usable hosts does the ${formatIp(ip)}/${prefix} subnet support?`,
    };
    const aMap = {
      network_address: formatIp(info.network),
      broadcast:       formatIp(info.broadcast),
      first_host:      formatIp(info.first),
      last_host:       formatIp(info.last),
      host_count:      String(info.totalHosts),
    };
    question = qMap[type];
    answer   = aMap[type];
  }

  return {
    question,
    difficulty,
    type,
    ip,
    prefix,
    info,
    solution: {
      final_answer:       answer,
      hint:               HINTS[type],
      steps:              buildSteps(ip, prefix, info, type),
      visual_walkthrough: buildVisual(ip, prefix, info),
      common_mistakes:    MISTAKES[type],
    },
  };
}
