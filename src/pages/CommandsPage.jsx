import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronRight, Monitor, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMMANDS_CORE2, COMMAND_CATEGORIES } from "@/data/commandsCore2";

export default function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState(
    () => new Set(COMMAND_CATEGORIES)
  );

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return COMMANDS_CORE2;
    return COMMANDS_CORE2.filter(
      (c) =>
        c.windows.cmd.toLowerCase().includes(q) ||
        c.windows.description.toLowerCase().includes(q) ||
        c.windows.example.toLowerCase().includes(q) ||
        c.linux.cmd.toLowerCase().includes(q) ||
        c.linux.description.toLowerCase().includes(q) ||
        c.linux.example.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const cmd of filtered) {
      if (!map.has(cmd.category)) map.set(cmd.category, []);
      map.get(cmd.category).push(cmd);
    }
    return map;
  }, [filtered]);

  const toggleCategory = (cat) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const allExpanded = expandedCategories.size === grouped.size;
  const toggleAll = () => {
    if (allExpanded) setExpandedCategories(new Set());
    else setExpandedCategories(new Set(grouped.keys()));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">CLI Commands</h1>
        <p className="text-muted-foreground text-sm">
          CompTIA A+ Core 2 (220-1202) — Windows &amp; Linux command-line reference
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search commands, descriptions, examples..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant="outline" size="sm" onClick={toggleAll} className="shrink-0">
          {allExpanded ? "Collapse All" : "Expand All"}
        </Button>
      </div>

      {/* Stats */}
      <p className="text-xs text-muted-foreground mb-4">
        {filtered.length} command{filtered.length !== 1 ? "s" : ""} across{" "}
        {grouped.size} categor{grouped.size !== 1 ? "ies" : "y"}
      </p>

      {/* Category sections */}
      {grouped.size === 0 ? (
        <p className="text-muted-foreground text-center py-16">No commands match your search.</p>
      ) : (
        <div className="space-y-4">
          {[...grouped.entries()].map(([category, cmds]) => {
            const open = expandedCategories.has(category);
            return (
              <div key={category} className="border rounded-lg overflow-hidden">
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-muted/40 hover:bg-muted/60 transition-colors text-left"
                >
                  <span className="font-semibold text-sm">{category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {cmds.length} command{cmds.length !== 1 ? "s" : ""}
                    </span>
                    {open ? (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Table */}
                {open && (
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
                          <tr
                            key={i}
                            className="border-b last:border-0 align-top hover:bg-muted/10 transition-colors"
                          >
                            {/* Windows column */}
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
                            {/* Linux column */}
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
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
