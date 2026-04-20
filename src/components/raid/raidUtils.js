export function getBayLabel(raidLevel, index, total) {
  switch (raidLevel) {
    case "RAID 0":  return "Data";
    case "RAID 1":  return index === 0 ? "Primary" : "Mirror";
    case "RAID 5":  return index === total - 1 ? "Parity" : "Data";
    case "RAID 6":  return index >= total - 2 ? "Parity" : "Data";
    case "RAID 10": {
      const pair = Math.floor(index / 2) + 1;
      return index % 2 === 0 ? `Pair ${pair} Primary` : `Pair ${pair} Mirror`;
    }
    default: return `Bay ${index + 1}`;
  }
}

export function getBayAccent(label, driveState) {
  if (driveState === "wrong")   return "border-red-500/70 bg-red-500/10";
  if (driveState === "correct") return "border-green-500/70 bg-green-500/10";
  if (label === "Parity")        return "border-yellow-500/50 bg-yellow-500/5";
  if (label.includes("Mirror"))  return "border-blue-500/50 bg-blue-500/5";
  if (label.includes("Primary")) return "border-purple-500/50 bg-purple-500/5";
  return "border-border/60";
}

export function getLabelColor(label) {
  if (label === "Parity")        return "text-yellow-600 dark:text-yellow-400";
  if (label.includes("Mirror"))  return "text-blue-600 dark:text-blue-400";
  if (label.includes("Primary")) return "text-purple-600 dark:text-purple-400";
  return "text-muted-foreground";
}

export function getIfaceStyle(iface) {
  if (iface === "NVMe")     return "text-blue-600 dark:text-blue-400";
  if (iface === "SATA SSD") return "text-green-600 dark:text-green-400";
  if (iface === "SATA HDD") return "text-amber-600 dark:text-amber-400";
  return "text-muted-foreground";
}
