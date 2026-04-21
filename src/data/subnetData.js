// Static data for the Subnetting Practice feature

// ── Difficulty prefix pools ───────────────────────────────────────────────────
export const DIFFICULTY_PREFIXES = {
  easy:   [8, 16, 24],
  medium: [25, 26, 27, 28],
  hard:   [9, 10, 11, 12, 17, 18, 19, 20, 21, 22, 23, 29, 30],
};

// ── Question types ────────────────────────────────────────────────────────────
export const QUESTION_TYPES = [
  "network_address",
  "broadcast",
  "first_host",
  "last_host",
  "host_count",
  "subnet_id",
];

export const TYPE_LABELS = {
  network_address: "Network Address",
  broadcast:       "Broadcast Address",
  first_host:      "First Usable Host",
  last_host:       "Last Usable Host",
  host_count:      "Host Count",
  subnet_id:       "Subnet Identification",
};

// ── Per-type hints and common mistakes ───────────────────────────────────────
export const HINTS = {
  network_address: "AND the IP with the subnet mask — where the mask bit is 0, the result bit is 0.",
  broadcast:       "Start from the network address, then OR it with the wildcard mask (inverted subnet mask).",
  first_host:      "The first usable host is the network address plus one.",
  last_host:       "The last usable host is the broadcast address minus one.",
  host_count:      "Formula: 2^(host bits) − 2. Count host bits as 32 minus the prefix length.",
  subnet_id:       "Apply the same mask to both IPs. If the resulting network addresses match, they share a subnet.",
};

export const MISTAKES = {
  network_address: "Forgetting to apply the mask — octet boundaries only align cleanly at /8, /16, and /24.",
  broadcast:       "ORing with the subnet mask instead of the wildcard mask. You must invert the mask first.",
  first_host:      "Treating the network address itself as the first host — it is reserved.",
  last_host:       "Using the broadcast address as the last host — it too is reserved.",
  host_count:      "Using 2^n instead of 2^n − 2, or forgetting that /30 has only 2 usable hosts.",
  subnet_id:       "Comparing raw IP addresses instead of masking them first to find their network addresses.",
};

// ── Visual walkthrough frame tab definitions ──────────────────────────────────
export const VISUAL_FRAMES = [
  { label: "1. Binary",    key: "binary" },
  { label: "2. N/H Roles", key: "roles" },
  { label: "3. Network",   key: "network" },
  { label: "4. Broadcast", key: "broadcast" },
  { label: "5. Summary",   key: "summary" },
];

// ── Difficulty Tailwind class maps ────────────────────────────────────────────
export const DIFFICULTY_STYLES = {
  active: {
    easy:   "bg-green-600  border-green-600  text-white",
    medium: "bg-yellow-500 border-yellow-500 text-white",
    hard:   "bg-red-600    border-red-600    text-white",
  },
  badge: {
    easy:   "bg-green-500/15  text-green-700  dark:text-green-400",
    medium: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400",
    hard:   "bg-red-500/15    text-red-700    dark:text-red-400",
  },
};

// ── Cheat sheet reference table rows ─────────────────────────────────────────
// [cidr, mask, usable hosts, block size]
export const CHEAT_SHEET_ROWS = [
  ["/8",  "255.0.0.0",       "16,777,214", "16M"],
  ["/16", "255.255.0.0",     "65,534",     "65K"],
  ["/24", "255.255.255.0",   "254",        "256"],
  ["/25", "255.255.255.128", "126",        "128"],
  ["/26", "255.255.255.192", "62",         "64"],
  ["/27", "255.255.255.224", "30",         "32"],
  ["/28", "255.255.255.240", "14",         "16"],
  ["/29", "255.255.255.248", "6",          "8"],
  ["/30", "255.255.255.252", "2",          "4"],
];

// ── Answer input placeholders per question type ───────────────────────────────
export const INPUT_PLACEHOLDERS = {
  host_count: "Number (e.g. 254)",
  subnet_id:  "Yes or No",
};
export const DEFAULT_INPUT_PLACEHOLDER = "Dotted decimal (e.g. 192.168.1.0)";
