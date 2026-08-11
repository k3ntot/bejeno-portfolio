import { about, siteConfig } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-surface-muted"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — Text */}
          <div>
            <div className="reveal">
              <SectionHeader
                label="About Me"
                heading={about.heading}
                id="about-heading"
              />
            </div>
            <div className="reveal reveal-delay-1 mt-6 space-y-4">
              {about.paragraphs.map((para, i) => (
                <p key={i} className="text-ink-secondary leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right — Info card */}
          <div className="reveal reveal-delay-2">
            <div className="card p-7 space-y-5">
              <h3 className="text-sm font-semibold text-ink-secondary uppercase tracking-widest">
                Student Profile
              </h3>

              <InfoRow
                icon={<GraduationCapIcon />}
                label="Education"
                value={siteConfig.university}
              />
              <InfoRow
                icon={<BookIcon />}
                label="Program"
                value={siteConfig.program}
              />
              <InfoRow
                icon={<CalendarIcon />}
                label="Year Level"
                value={siteConfig.yearLevel}
              />
              <InfoRow
                icon={<TargetIcon />}
                label="Focus"
                value={siteConfig.focus}
              />

              <div className="pt-2 border-t border-surface-border">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-sm text-green-700 font-medium">
                    {siteConfig.statusText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
        {icon}
      </div>
      <div>
        <p className="text-xs text-ink-muted font-medium uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-sm text-ink font-medium">{value}</p>
      </div>
    </div>
  );
}

function GraduationCapIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
