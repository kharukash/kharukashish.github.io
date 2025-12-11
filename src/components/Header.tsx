import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {!isMenuOpen && (
            <a href="#home" className="text-2xl font-heading font-bold text-foreground hover:text-accent transition-colors">
              A
            </a>
          )}
          {isMenuOpen && <div />}

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile Full Page Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center animate-fade-in">
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-2xl font-heading text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="mt-4 p-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
