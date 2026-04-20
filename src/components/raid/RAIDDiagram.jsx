const diagrams = {
  "RAID 0": {
    rows: [
      { label: "Drive 1", cells: ["A1", "A3", "A5", "A7"] },
      { label: "Drive 2", cells: ["A2", "A4", "A6", "A8"] },
    ],
    note: "Blocks alternate between drives — both drives read/write simultaneously for maximum throughput",
  },
  "RAID 1": {
    rows: [
      { label: "Drive 1 (Primary)", cells: ["A1", "A2", "A3", "A4"] },
      { label: "Drive 2 (Mirror)",  cells: ["A1", "A2", "A3", "A4"] },
    ],
    note: "Identical data written to both drives at all times — either drive can serve reads",
  },
  "RAID 5": {
    rows: [
      { label: "Drive 1", cells: ["A1", "A2", "P"]  },
      { label: "Drive 2", cells: ["A3", "P",  "A4"] },
      { label: "Drive 3", cells: ["P",  "A5", "A6"] },
    ],
    note: "Parity (P) rotates across all drives — any one drive can be rebuilt from the remaining two",
  },
  "RAID 6": {
    rows: [
      { label: "Drive 1", cells: ["A1", "P1", "P2"] },
      { label: "Drive 2", cells: ["P1", "A2", "P2"] },
      { label: "Drive 3", cells: ["P2", "P1", "A3"] },
      { label: "Drive 4", cells: ["A4", "A5", "A6"] },
    ],
    note: "Two independent parity sets (P1, P2) per stripe — any two simultaneous drive failures are survived",
  },
  "RAID 10": {
    rows: [
      { label: "Drive 1 (Pair A · Primary)", cells: ["A1", "A3", "A5"] },
      { label: "Drive 2 (Pair A · Mirror)",  cells: ["A1", "A3", "A5"] },
      { label: "Drive 3 (Pair B · Primary)", cells: ["A2", "A4", "A6"] },
      { label: "Drive 4 (Pair B · Mirror)",  cells: ["A2", "A4", "A6"] },
    ],
    note: "Pairs A & B each mirror internally (RAID 1); data is striped across both pairs (RAID 0)",
  },
};

export default function RAIDDiagram({ raidLevel }) {
  const d = diagrams[raidLevel];
  if (!d) return null;

  return (
    <div className="mt-3">
      <div className="overflow-x-auto">
        <table className="text-xs border-collapse">
          <tbody>
            {d.rows.map((row, ri) => (
              <tr key={ri}>
                <td className="pr-3 py-0.5 text-muted-foreground whitespace-nowrap text-right">
                  {row.label}
                </td>
                {row.cells.map((cell, ci) => (
                  <td key={ci} className="px-0.5 py-0.5">
                    <div className={`px-2 py-1 rounded font-mono font-semibold text-center border ${
                      cell.startsWith("P")
                        ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/40"
                        : "bg-primary/10 text-primary border-primary/20"
                    }`}>
                      {cell}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-2 italic">{d.note}</p>
    </div>
  );
}
