import { m } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Creative" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.href.slice(1));
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`glass-strong flex items-center justify-between rounded-2xl px-4 py-3 ${scrolled ? "shadow-[var(--shadow-elegant)]" : ""}`}
        >
          <a href="#home" className="group flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-500 group-hover:rotate-[360deg]">
              Y
            </span>
            <span className="hidden sm:inline">
              Yaw<span className="text-gradient">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(l.href);
                  if (target) {
                    const offset = 80;
                    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: "smooth",
                    });
                    setActive(l.href.slice(1));
                  }
                }}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === l.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <m.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg border border-border/70 transition-all duration-300 hover:bg-muted hover:border-primary/60 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border/70"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <m.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 flex flex-col rounded-2xl p-2 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const target = document.querySelector(l.href);
                  if (target) {
                    const offset = 80;
                    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: "smooth",
                    });
                    setActive(l.href.slice(1));
                  }
                }}
                className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
          </m.nav>
        )}
      </div>
    </m.header>
  );
}
