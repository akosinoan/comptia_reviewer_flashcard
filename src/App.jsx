import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import StudyPage from "./pages/StudyPage";
import PortMatchingPage from "./pages/PortMatchingPage";
import AcronymsPage from "./pages/AcronymsPage";
import RAIDPage from "./pages/RAIDPage";
import PBQPage from "./pages/PBQPage";
import PCBuilderPage from "./pages/PCBuilderPage";
import CommandsPage from "./pages/CommandsPage";
import { ExamProvider } from "./context/ExamContext";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ExamProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar theme={theme} onToggle={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/study" element={<StudyPage />} />
            <Route path="/ports" element={<PortMatchingPage />} />
            <Route path="/acronyms" element={<AcronymsPage />} />
            <Route path="/raid" element={<RAIDPage />} />
            <Route path="/pbq" element={<PBQPage />} />
            <Route path="/pcbuilder" element={<PCBuilderPage />} />
            <Route path="/commands" element={<CommandsPage />} />
          </Routes>
        </main>
      </div>
      </ExamProvider>
    </BrowserRouter>
  );
}
