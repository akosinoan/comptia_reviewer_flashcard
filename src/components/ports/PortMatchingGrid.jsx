import { CheckCircle2, ArrowUpDown, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortMatchingGrid({
  shuffledPorts,
  shuffledNames,
  selected,
  matched,
  wrong,
  onPortClick,
  onNameClick,
  onSortPorts,
  onShufflePorts,
  onShuffleNames,
}) {
  return (
    <div className="space-y-2">
      <div className="grid gap-3" style={{ gridTemplateColumns: "minmax(72px, 110px) 1fr" }}>
        <div className="flex items-center gap-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mr-auto">
            Port
          </p>
          <Button variant="ghost" size="sm" onClick={onSortPorts} className="h-6 px-1.5">
            <ArrowUpDown className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onShufflePorts} className="h-6 px-1.5">
            <Shuffle className="h-3 w-3" />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mr-auto">
            Protocol / Service
          </p>
          <Button variant="ghost" size="sm" onClick={onShuffleNames} className="h-6 px-1.5">
            <Shuffle className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {shuffledPorts.map(({ id: portId, port }, i) => {
        const nameItem    = shuffledNames[i];
        const portMatched = matched[portId];
        const portSelected = selected === portId;
        const portWrong   = wrong?.portId === portId;
        const nameMatched = nameItem && matched[nameItem.id];
        const nameWrong   = nameItem && wrong?.nameId === nameItem.id;

        return (
          <div
            key={portId}
            className="grid gap-3"
            style={{ gridTemplateColumns: "minmax(72px, 110px) 1fr" }}
          >
            <button
              onClick={() => onPortClick(portId)}
              disabled={portMatched}
              className={`h-full w-full text-left px-2 py-2 rounded-lg border text-sm font-mono font-semibold transition-all ${
                portMatched
                  ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                  : portWrong
                    ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                    : portSelected
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-background border-border hover:bg-accent cursor-pointer"
              }`}
            >
              {portMatched ? (
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 shrink-0" />
                  {port}
                </span>
              ) : (
                port
              )}
            </button>

            {nameItem && (
              <button
                onClick={() => onNameClick(nameItem.id)}
                disabled={nameMatched || !selected}
                className={`h-full w-full text-left px-3 py-2 rounded-lg border text-sm transition-all ${
                  nameMatched
                    ? "bg-green-500/10 border-green-500/40 text-green-600 dark:text-green-400 cursor-default"
                    : nameWrong
                      ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
                      : selected
                        ? "bg-background border-border hover:bg-accent cursor-pointer"
                        : "bg-background border-border text-muted-foreground cursor-default"
                }`}
              >
                {nameMatched ? (
                  <span className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 shrink-0 mt-0.5 text-green-600 dark:text-green-400" />
                    <span>
                      <span className="font-medium">{nameItem.name}</span>
                      <span className="ml-1 text-xs opacity-70">({nameItem.protocol})</span>
                      <span className="block text-xs opacity-60">{nameItem.fullName}</span>
                    </span>
                  </span>
                ) : (
                  <>
                    <span className="font-medium">{nameItem.name}</span>
                    <span className="ml-1 text-xs text-muted-foreground">
                      ({nameItem.protocol})
                    </span>
                    <span className="block text-xs text-muted-foreground/60">
                      {nameItem.fullName}
                    </span>
                  </>
                )}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
