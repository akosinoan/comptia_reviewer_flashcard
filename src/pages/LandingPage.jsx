import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Layers, Monitor } from "lucide-react";
import { useExam } from "@/context/ExamContext";
import ExamToggle from "@/components/ExamToggle";

const features = [
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "Flip Flashcards",
    description:
      "Interactive cards that flip to reveal answers, just like real flashcards.",
  },
  {
    icon: <Monitor className="h-6 w-6 text-primary" />,
    title: "Both Sides Mode",
    description:
      "View question and answer simultaneously for a quick review pass.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Detailed Explanations",
    description:
      "Every answer includes a thorough explanation to deepen your understanding.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Filter by Category",
    description:
      "Focus on specific domains like Networking, Hardware, or Mobile Devices.",
  },
];

export default function LandingPage() {
  const { exam } = useExam();
  const isCore2 = exam === "core2";

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
            {isCore2 ? "CompTIA A+ Core 2 (220-1202)" : "CompTIA A+ Core 1 (220-1201)"}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ace Your CompTIA
            <span className="text-primary block">{isCore2 ? "Core 2 Exam" : "Core 1 Exam"}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Study smarter with interactive flashcards covering all exam domains.
            Flip cards, read explanations, and track your progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/study">
              <Button size="lg" className="w-full sm:w-auto">
                Start Studying
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/40 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">40+</p>
              <p className="text-sm text-muted-foreground">Flashcards</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Domains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Designed for focused, effective studying on any device.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Study?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Start with flashcards and work your way through all the exam topics.
          </p>
          <Link to="/study">
            <Button size="lg" variant="secondary">
              Open Flashcards
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          CompTIA A+ Reviewer (220-1201 / 220-1202) — Built for study purposes.
        </div>
      </footer>
    </div>
  );
}
