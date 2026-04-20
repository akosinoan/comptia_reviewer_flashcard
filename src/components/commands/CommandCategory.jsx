import { ChevronDown, ChevronRight, Monitor, Terminal } from "lucide-react";

function CommandRow({ cmd }) {
  return (
    <tr className="border-b last:border-0 align-top hover:bg-muted/10 transition-colors">
      <td className="px-4 py-3">
        <code className="block font-mono font-bold text-primary text-sm mb-1">
          {cmd.windows.cmd}
        </code>
        <p className="text-muted-foreground text-xs leading-relaxed mb-1.5">
          {cmd.windows.description}
        </p>
        <div className="bg-muted/50 rounded px-2 py-1">
          <code className="text-xs font-mono text-foreground/80 whitespace-pre-wrap">
            {cmd.windows.example}
          </code>
        </div>
      </td>
      <td className="px-4 py-3 border-l">
        <code className="block font-mono font-bold text-green-600 dark:text-green-400 text-sm mb-1">
          {cmd.linux.cmd}
        </code>
        <p className="text-muted-foreground text-xs leading-relaxed mb-1.5">
          {cmd.linux.description}
        </p>
        <div className="bg-muted/50 rounded px-2 py-1">
          <code className="text-xs font-mono text-foreground/80 whitespace-pre-wrap">
            {cmd.linux.example}
          </code>
        </div>
      </td>
    </tr>
  );
}

export default function CommandCategory({ category, cmds, isOpen, onToggle }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-muted/40 hover:bg-muted/60 transition-colors text-left"
      >
        <span className="font-semibold text-sm">{category}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {cmds.length} command{cmds.length !== 1 ? "s" : ""}
          </span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/20">
                <th className="w-1/2 px-4 py-2 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    <Monitor className="h-3.5 w-3.5" />
                    Windows (CMD / PowerShell)
                  </div>
                </th>
                <th className="w-1/2 px-4 py-2 text-left border-l">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    <Terminal className="h-3.5 w-3.5" />
                    Linux (Bash / Terminal)
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {cmds.map((cmd, i) => (
                <CommandRow key={i} cmd={cmd} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
