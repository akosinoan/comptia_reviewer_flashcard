import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, onToggle }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <BookOpen className="h-6 w-6 text-primary" />
          <span>CompTIA Core 1</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/study"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Study
          </Link>
          <Link
            to="/ports"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Port Matching
          </Link>
          <ThemeToggle theme={theme} onToggle={onToggle} />
        </div>
      </div>
    </nav>
  );
}
