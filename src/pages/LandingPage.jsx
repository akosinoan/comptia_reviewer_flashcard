import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  HardDrive,
  Terminal,
  Layers,
  Network,
  Cpu,
  ClipboardList,
  Calculator,
  FileText,
  ArrowRight,
} from "lucide-react";
import { useExam } from "@/context/ExamContext";
import ExamToggle from "@/components/ExamToggle";

const EXAM_LABEL = {
  core1:   "Core 1 (220-1201)",
  core2:   "Core 2 (220-1202)",
  netplus: "Network+ (N10-009)",
};

const EXAM_HEADLINE = {
  core1:   "Core 1 Exam",
  core2:   "Core 2 Exam",
  netplus: "Network+ Exam",
};

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Flashcards",
    description:
      "Flip-card study mode with category filtering, shuffle, and dual-view for quick review passes.",
    to: "/study",
  },
  {
    icon: <Network className="h-6 w-6 text-primary" />,
    title: "Port Matching",
    description:
      "Click-to-match and fill-in-the-blank quiz modes with real-time accuracy tracking.",
    to: "/ports",
  },
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Acronyms",
    description:
      "Searchable, categorized acronym reference with quiz mode and collapsible subcategories.",
    to: "/acronyms",
  },
  {
    icon: <HardDrive className="h-6 w-6 text-primary" />,
    title: "RAID Simulator",
    description:
      "Drag-and-drop drive placement across real-world RAID scenarios with instant configuration validation.",
    to: "/raid",
  },
  {
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
    title: "PBQ Exercises",
    description:
      "Performance-based questions in three interactive formats: drag-to-bucket, click-to-match, and drag-to-order.",
    to: "/pbq",
  },
  {
    icon: <Cpu className="h-6 w-6 text-primary" />,
    title: "PC Builder",
    description:
      "Scenario-based hardware selection challenges with component scoring and detailed explanations.",
    to: "/pcbuilder",
  },
  {
    icon: <Terminal className="h-6 w-6 text-primary" />,
    title: "CLI Commands",
    description:
      "Searchable Windows and Linux command reference organized by category with examples.",
    to: "/commands",
  },
  {
    icon: <Calculator className="h-6 w-6 text-primary" />,
    title: "Subnetting",
    description:
      "IPv4 practice with three difficulty levels, six question types, and step-by-step binary walkthroughs.",
    to: "/subnet",
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "OSI Model Drills",
    description:
      "Nine interactive exercises covering protocols, PDUs, devices, security controls, and troubleshooting by layer.",
    to: "/osi",
  },
];

const stats = [
  { value: "9",   label: "Study Tools" },
  { value: "3",   label: "Exams Covered" },
  { value: "300+", label: "Practice Questions" },
];

export default function LandingPage() {
  const { exam } = useExam();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <ExamToggle />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <BookOpen className="h-4 w-4" />
            CompTIA {EXAM_LABEL[exam]}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ace Your CompTIA
            <span className="text-primary block">{EXAM_HEADLINE[exam]}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Nine interactive study tools — flashcards, drag-and-drop simulators, PBQ
            exercises, subnetting practice, and more — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/study">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Start Studying <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#tools">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse Tools
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/40 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section id="tools" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Every Tool You Need</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            From flip cards to drag-and-drop simulators — built to match how the real exam tests you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <Link
                key={f.to}
                to={f.to}
                className="group rounded-xl border bg-card p-6 hover:shadow-md hover:border-primary/40 transition-all"
              >
                <div className="mb-4 rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-semibold mb-2 flex items-center justify-between">
                  {f.title}
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Pass?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Pick a tool and start drilling. Every section adapts to your selected exam mode.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/study">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Open Flashcards
              </Button>
            </Link>
            <Link to="/pbq">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Try a PBQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          CompTIA Reviewer — 220-1201 · 220-1202 · N10-009 · Built for study purposes.
        </div>
      </footer>
    </div>
  );
}
