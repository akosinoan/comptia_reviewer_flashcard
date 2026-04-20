import ExamToggle from "@/components/ExamToggle";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold mb-1">{title}</h1>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>
      <ExamToggle />
    </div>
  );
}
