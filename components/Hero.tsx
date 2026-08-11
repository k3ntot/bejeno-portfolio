"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on mouse move (desktop only)
  useEffect(() => {
    const el = visualRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Content */}
          <div>
            {/* Eyebrow */}
            <div className="reveal mb-6 flex items-center gap-3">
              <span className="section-label">{siteConfig.role}</span>
            </div>

            {/* Heading */}
            <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-[3.25rem] font-semibold leading-[1.15] text-ink mb-5 text-balance">
              Hi, I&apos;m{" "}
              <span className="text-accent">John Kenneth</span>{" "}
              Bejeno.
            </h1>

            {/* Subheading */}
            <p className="reveal reveal-delay-2 text-xl text-ink-secondary font-light leading-relaxed mb-6">
              Aspiring IT Professional focused on QA, automation, and AI-assisted development.
            </p>

            {/* Description */}
            <p className="reveal reveal-delay-3 text-base text-ink-secondary leading-relaxed mb-10 max-w-lg">
              A highly motivated fourth-year Information Technology student seeking an
              On-the-Job Training (OJT) opportunity to apply my skills in quality assurance,
              idea proposal, and AI-assisted programming. Eager to gain hands-on industry
              experience, contribute to real projects, and grow under the guidance of
              experienced professionals.
            </p>

            {/* CTAs */}
            <div className="reveal reveal-delay-4 flex flex-wrap gap-3 items-center">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline"
              >
                Contact Me
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="btn-ghost"
                aria-label="Download resume (PDF)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right — Technical visual */}
          <div
            ref={visualRef}
            className="reveal reveal-delay-2 hidden md:flex items-center justify-center transition-transform duration-200 ease-out"
            aria-hidden="true"
          >
            <TechVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechVisual() {
  return (
    <div className="relative w-[380px] h-[380px]">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-2xl border border-surface-border bg-surface-muted overflow-hidden">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow */}
        <div
          className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
        />

        {/* Terminal block */}
        <div className="absolute top-6 left-6 right-6 bg-navy-950 rounded-xl border border-navy-800 p-4 font-mono text-xs leading-relaxed shadow-lg">
          <div className="flex gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="space-y-1">
            <div>
              <span className="text-accent-light">const</span>
              <span className="text-white"> profile </span>
              <span className="text-ink-light">= {"{"}</span>
            </div>
            <div className="pl-4">
              <span className="text-green-400">name</span>
              <span className="text-ink-light">: </span>
              <span className="text-yellow-300">&quot;John Kenneth&quot;</span>
              <span className="text-ink-light">,</span>
            </div>
            <div className="pl-4">
              <span className="text-green-400">role</span>
              <span className="text-ink-light">: </span>
              <span className="text-yellow-300">&quot;IT Student&quot;</span>
              <span className="text-ink-light">,</span>
            </div>
            <div className="pl-4">
              <span className="text-green-400">focus</span>
              <span className="text-ink-light">: [</span>
              <span className="text-yellow-300">&quot;QA&quot;</span>
              <span className="text-ink-light">, </span>
              <span className="text-yellow-300">&quot;AI&quot;</span>
              <span className="text-ink-light">],</span>
            </div>
            <div className="pl-4">
              <span className="text-green-400">status</span>
              <span className="text-ink-light">: </span>
              <span className="text-yellow-300">&quot;Open to OJT&quot;</span>
            </div>
            <div className="text-ink-light">{"};"}</div>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-accent-light">$</span>
            <span className="text-ink-muted">ready to contribute</span>
            <span className="inline-block w-1.5 h-3.5 bg-accent-light/80 animate-pulse ml-0.5" />
          </div>
        </div>

        {/* Floating badges */}
        <FloatingBadge
          label="Quality Assurance"
          className="absolute bottom-[110px] left-5"
          color="blue"
        />
        <FloatingBadge
          label="AI-Assisted Dev"
          className="absolute bottom-[75px] right-5"
          color="purple"
        />
        <FloatingBadge
          label="Process Improvement"
          className="absolute bottom-[42px] left-1/2 -translate-x-1/2"
          color="green"
        />

        {/* Status indicator */}
        <div className="absolute bottom-5 right-5 flex items-center gap-1.5 bg-white rounded-full px-3 py-1 shadow-card border border-surface-border">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[11px] font-medium text-ink-secondary whitespace-nowrap">
            Open to OJT
          </span>
        </div>
      </div>
    </div>
  );
}

function FloatingBadge({
  label,
  className,
  color,
}: {
  label: string;
  className?: string;
  color: "blue" | "purple" | "green";
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };
  return (
    <span
      className={`badge border font-mono text-[10px] shadow-sm ${colors[color]} ${className}`}
    >
      {label}
    </span>
  );
}
