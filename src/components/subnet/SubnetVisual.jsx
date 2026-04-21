import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ipToBits, formatIp } from "@/utils/subnetGenerator";
import { VISUAL_FRAMES } from "@/data/subnetData";

// ── Primitive display components ──────────────────────────────────────────────

function BitRow({ label, bits, prefix }) {
  return (
    <div className="flex items-center gap-2 py-0.5">
      <span className="text-xs w-24 text-right text-muted-foreground font-medium shrink-0 select-none">
        {label}
      </span>
      <div className="flex overflow-x-auto">
        {bits.map((bit, i) => (
          <span
            key={i}
            className={[
              "font-mono text-xs w-[1.05rem] text-center leading-5 shrink-0",
              i % 8 === 0 && i > 0 ? "ml-1.5" : "",
              i < prefix
                ? "text-blue-600 dark:text-blue-400"
                : "text-amber-500 dark:text-amber-400",
            ].join(" ")}
          >
            {bit}
          </span>
        ))}
      </div>
    </div>
  );
}

function RoleRow({ prefix, hostBits }) {
  const bits = Array.from({ length: 32 }, (_, i) => (i < prefix ? "N" : "H"));
  return (
    <div className="flex items-center gap-2 py-0.5">
      <span className="text-xs w-24 text-right text-muted-foreground font-medium shrink-0 select-none">
        Bit role
      </span>
      <div className="flex overflow-x-auto">
        {bits.map((b, i) => (
          <span
            key={i}
            className={[
              "font-mono text-xs w-[1.05rem] text-center leading-5 font-bold shrink-0",
              i % 8 === 0 && i > 0 ? "ml-1.5" : "",
              b === "N"
                ? "text-blue-600 dark:text-blue-400"
                : "text-amber-500 dark:text-amber-400",
            ].join(" ")}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function OpDivider({ op }) {
  return (
    <div className="flex items-center gap-2 my-0.5">
      <span className="text-xs w-24 text-right text-muted-foreground font-mono shrink-0 select-none">
        {op}
      </span>
      <div className="h-px flex-1 bg-border min-w-0" />
    </div>
  );
}

function SummaryTable({ info, prefix }) {
  const rows = [
    ["Network",      formatIp(info.network)],
    ["First host",   formatIp(info.first)],
    ["Last host",    formatIp(info.last)],
    ["Broadcast",    formatIp(info.broadcast)],
    ["Subnet mask",  formatIp(info.mask)],
    ["Wildcard",     formatIp(info.wildcard)],
    ["CIDR",         `/${prefix}`],
    ["Usable hosts", String(info.totalHosts)],
  ];
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between border-b border-border/30 pb-0.5">
          <span className="text-xs text-muted-foreground">{k}</span>
          <span className="text-xs font-mono font-semibold">{v}</span>
        </div>
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function SubnetVisual({ ip, prefix, info }) {
  const [frame, setFrame] = useState(0);

  const ipBits   = ipToBits(ip);
  const maskBits = ipToBits(info.mask);
  const wcBits   = ipToBits(info.wildcard);
  const netBits  = ipToBits(info.network);
  const bcBits   = ipToBits(info.broadcast);

  return (
    <div className="rounded-lg border p-4 bg-muted/10 mb-4">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
        Visual Walkthrough
      </p>

      {/* Legend */}
      <div className="flex gap-5 text-xs mb-3">
        <span>
          <span className="font-bold text-blue-600 dark:text-blue-400">N</span>
          {" "}= Network bit (fixed)
        </span>
        <span>
          <span className="font-bold text-amber-500 dark:text-amber-400">H</span>
          {" "}= Host bit (variable)
        </span>
      </div>

      {/* Frame tab buttons — sourced from VISUAL_FRAMES data */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {VISUAL_FRAMES.map((f, i) => (
          <button
            key={f.key}
            onClick={() => setFrame(i)}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
              frame === i
                ? "bg-primary text-primary-foreground"
                : "bg-background border border-border hover:bg-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Frame content */}
      <div className="min-h-32">
        {frame === 0 && (
          <div>
            <BitRow label="IP address"  bits={ipBits}   prefix={prefix} />
            <BitRow label="Subnet mask" bits={maskBits}  prefix={prefix} />
            <p className="text-xs text-muted-foreground mt-3">
              {formatIp(ip)} · mask {formatIp(info.mask)} · /{prefix}
            </p>
          </div>
        )}

        {frame === 1 && (
          <div>
            <RoleRow prefix={prefix} hostBits={info.hostBits} />
            <BitRow label="IP address" bits={ipBits} prefix={prefix} />
            <div className="mt-3 space-y-1.5 text-xs">
              <p>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Network portion — {prefix} bits
                </span>
                {" "}— identical for every host in this subnet.
              </p>
              <p>
                <span className="font-semibold text-amber-500 dark:text-amber-400">
                  Host portion — {info.hostBits} bits
                </span>
                {" "}— unique per device.{" "}
                2<sup>{info.hostBits}</sup> − 2 ={" "}
                <strong>{info.totalHosts}</strong> usable addresses.
              </p>
            </div>
          </div>
        )}

        {frame === 2 && (
          <div>
            <BitRow label="IP address"   bits={ipBits}   prefix={prefix} />
            <OpDivider op="AND" />
            <BitRow label="Subnet mask"  bits={maskBits}  prefix={prefix} />
            <OpDivider op="=" />
            <BitRow label="Network addr" bits={netBits}  prefix={prefix} />
            <p className="text-xs font-semibold text-primary mt-3">
              → Network Address: {formatIp(info.network)}
            </p>
          </div>
        )}

        {frame === 3 && (
          <div>
            <BitRow label="Network addr"  bits={netBits} prefix={prefix} />
            <OpDivider op="OR" />
            <BitRow label="Wildcard mask" bits={wcBits}  prefix={prefix} />
            <OpDivider op="=" />
            <BitRow label="Broadcast"     bits={bcBits}  prefix={prefix} />
            <p className="text-xs text-muted-foreground mt-2">
              Wildcard = NOT mask → {formatIp(info.wildcard)}
            </p>
            <p className="text-xs font-semibold text-primary mt-1">
              → Broadcast Address: {formatIp(info.broadcast)}
            </p>
          </div>
        )}

        {frame === 4 && <SummaryTable info={info} prefix={prefix} />}
      </div>

      {/* Prev / Next navigation */}
      <div className="flex items-center justify-between mt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFrame((f) => Math.max(0, f - 1))}
          disabled={frame === 0}
          className="gap-1"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </Button>
        <span className="text-xs text-muted-foreground">
          {frame + 1} / {VISUAL_FRAMES.length}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFrame((f) => Math.min(VISUAL_FRAMES.length - 1, f + 1))}
          disabled={frame === VISUAL_FRAMES.length - 1}
          className="gap-1"
        >
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
