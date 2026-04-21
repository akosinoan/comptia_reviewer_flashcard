import { CHEAT_SHEET_ROWS } from "@/data/subnetData";

/**
 * Collapsible subnet quick-reference table (/8 → /30).
 * Uses a native <details> element — no extra state required.
 */
export default function SubnetCheatSheet() {
  return (
    <details className="rounded-lg border">
      <summary className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide cursor-pointer hover:bg-accent/50 rounded-lg transition-colors select-none">
        Quick Reference — Subnet Cheat Sheet
      </summary>
      <div className="px-4 pb-4 pt-1 overflow-x-auto">
        <table className="text-xs w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-1.5 pr-4 font-semibold">CIDR</th>
              <th className="text-left py-1.5 pr-4 font-semibold">Mask</th>
              <th className="text-right py-1.5 pr-4 font-semibold">Usable hosts</th>
              <th className="text-right py-1.5 font-semibold">Block size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {CHEAT_SHEET_ROWS.map(([cidr, mask, hosts, block]) => (
              <tr key={cidr} className="hover:bg-accent/30 transition-colors">
                <td className="py-1.5 pr-4 font-mono font-semibold text-primary">{cidr}</td>
                <td className="py-1.5 pr-4 font-mono text-muted-foreground">{mask}</td>
                <td className="py-1.5 pr-4 text-right font-mono">{hosts}</td>
                <td className="py-1.5 text-right font-mono text-muted-foreground">{block}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}
