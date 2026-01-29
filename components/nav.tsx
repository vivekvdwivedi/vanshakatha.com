"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import { LangSwitcher } from "@/components/lang-switcher";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Nav() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-card-border shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/logo.svg" alt="VanshaKatha" className="h-8 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LangSwitcher />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {mounted ? (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : <Moon className="h-4 w-4" />}
            </button>
            <Button size="sm" variant="accent">Get Started</Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {mounted ? (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : <Moon className="h-4 w-4" />}
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-start">
                    <img src="/logo.svg" alt="VanshaKatha" className="h-8 w-auto" />
                  </SheetTitle>
                  <SheetDescription className="sr-only">Navigation menu</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-card-border"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="mt-4">
                    <LangSwitcher />
                  </div>
                  <Button variant="accent" className="mt-2 w-full">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
