import { certifications } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const categoryColors: Record<string, string> = {
  "Safety & Compliance": "bg-orange-50 text-orange-700 border-orange-200",
  "Technology & Cybersecurity": "bg-blue-50 text-blue-700 border-blue-200",
  "Cybersecurity": "bg-red-50 text-red-700 border-red-200",
  "Software Development": "bg-violet-50 text-violet-700 border-violet-200",
  "Ethics & Law": "bg-teal-50 text-teal-700 border-teal-200",
};

function getCategoryColor(category: string): string {
  return categoryColors[category] ?? "bg-slate-50 text-slate-700 border-slate-200";
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certs-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-14">
          <SectionHeader
            label="Training & Certifications"
            heading="Continuous learning beyond the classroom."
            subheading="Seminars, workshops, and training programs completed as part of my professional development."
            id="certs-heading"
          />
        </div>

        <div className="relative">
          {/* Timeline line — desktop */}
          <div
            className="hidden md:block absolute left-[168px] top-0 bottom-0 w-px bg-surface-border"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {certifications.map((cert, i) => (
              <CertificationCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[number];
  index: number;
}) {
  const delay = Math.min(index + 1, 4);

  return (
    <article
      className={`reveal reveal-delay-${delay} flex flex-col md:flex-row gap-4 md:gap-8`}
      aria-label={cert.title}
    >
      {/* Year — desktop */}
      <div className="hidden md:flex flex-col items-end w-40 flex-shrink-0 pt-5">
        <span className="text-sm font-semibold text-ink-secondary font-mono">{cert.year}</span>
        <span className="text-xs text-ink-muted mt-0.5">{cert.organization}</span>
      </div>

      {/* Timeline dot — desktop */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-5" aria-hidden="true">
        <div className="w-3 h-3 rounded-full bg-accent border-2 border-white ring-2 ring-accent/30" />
      </div>

      {/* Card */}
      <div className="card flex-1 p-5 md:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1 min-w-0">
          {/* Mobile: year + org */}
          <div className="flex items-center gap-2 mb-2 md:hidden">
            <span className="text-xs font-mono font-semibold text-ink-secondary">{cert.year}</span>
            <span className="text-ink-muted text-xs">·</span>
            <span className="text-xs text-ink-muted truncate">{cert.organization}</span>
          </div>

          <h3 className="text-sm font-semibold text-ink leading-snug mb-2">
            {cert.title}
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            <span className={`badge border text-[11px] ${getCategoryColor(cert.category)}`}>
              {cert.category}
            </span>
          </div>
        </div>

        {/* Certificate button */}
        <div className="flex-shrink-0">
          {cert.certificateUrl ? (
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs px-4 py-2 whitespace-nowrap"
              aria-label={`View certificate for ${cert.title}`}
            >
              <CertIcon />
              View Certificate
            </a>
          ) : (
            <div className="flex flex-col items-end gap-1">
              <button
                disabled
                className="btn-outline text-xs px-4 py-2 opacity-50 cursor-not-allowed whitespace-nowrap"
                aria-label={`Certificate for ${cert.title} coming soon`}
              >
                <CertIcon />
                View Certificate
              </button>
              <span className="text-[10px] text-ink-muted">Coming soon</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function CertIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}
