import { HardDrive } from "lucide-react";
import { getIfaceStyle } from "./raidUtils";

export default function DriveCard({ drive, draggable: isDraggable, onDragStart, onClick, driveState, faded }) {
  return (
    <div
      draggable={isDraggable}
      onDragStart={onDragStart}
      onClick={onClick}
      className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg border text-center select-none transition-colors
        ${isDraggable ? "cursor-grab active:cursor-grabbing hover:bg-accent" : ""}
        ${faded ? "opacity-40 cursor-not-allowed" : ""}
        ${driveState === "wrong"   ? "border-red-500/60 bg-red-500/10" :
          driveState === "correct" ? "border-green-500/60 bg-green-500/10" :
          "bg-background border-border"}
      `}
    >
      <HardDrive className={`h-6 w-6 ${
        driveState === "wrong"   ? "text-red-500" :
        driveState === "correct" ? "text-green-500" :
        "text-primary"
      }`} />
      <span className="text-xs font-mono font-bold mt-0.5">{drive.capacity}</span>
      <span className={`text-xs font-semibold ${getIfaceStyle(drive.iface)}`}>{drive.iface}</span>
    </div>
  );
}
