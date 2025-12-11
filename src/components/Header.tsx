import { Moon, Sun, User, Briefcase, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-2xl font-heading font-bold text-foreground hover:text-accent transition-colors">
          A
        </a>
        
        <nav className="flex items-center gap-6">
          <button
            onClick={() => scrollTo("about")}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="About"
          >
            <User size={20} />
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Experience"
          >
            <Briefcase size={20} />
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Projects"
          >
            <FolderOpen size={20} />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
