import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { to: "/study",     label: "Study" },
  { to: "/ports",     label: "Port Matching" },
  { to: "/acronyms",  label: "Acronyms" },
  { to: "/raid",      label: "RAID" },
  { to: "/pbq",       label: "PBQ" },
  { to: "/pcbuilder", label: "PC Builder" },
];

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-lg"
          onClick={() => setOpen(false)}
        >
          <BookOpen className="h-6 w-6 text-primary" />
          <span>CompTIA Core 1</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-4">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                pathname === to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggle} />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-medium border-b last:border-0 transition-colors ${
                  pathname === to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
