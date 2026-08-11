"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Intersection observer for active nav link
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-surface-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
            className="text-sm font-semibold text-ink tracking-tight hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-label="John Kenneth Bejeno – go to top"
          >
            John Kenneth Bejeno
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive
                      ? "text-accent font-medium"
                      : "text-ink-secondary hover:text-ink"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              className="ml-3 btn-primary text-xs px-4 py-2"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-ink-secondary hover:text-ink hover:bg-surface-muted transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Open"} menu</span>
            <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span
                className={`block h-0.5 bg-current transition-all duration-200 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <div className="bg-white/98 backdrop-blur-md border-t border-surface-border px-4 pb-4 pt-2 space-y-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  tabIndex={mobileOpen ? 0 : -1}
                  className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "text-accent font-medium bg-accent/5"
                      : "text-ink-secondary hover:text-ink hover:bg-surface-muted"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
                tabIndex={mobileOpen ? 0 : -1}
                className="btn-primary w-full justify-center text-sm"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay to close menu on outside tap */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
