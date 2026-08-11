import { siteConfig } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal">
            <SectionHeader
              label="Contact"
              heading="Let's connect."
              subheading="I am currently seeking an OJT opportunity where I can apply my technical skills, contribute to real projects, and learn from experienced professionals."
              centered
              id="contact-heading"
            />
          </div>

          {/* Contact cards */}
          <div className="reveal reveal-delay-1 mt-12 grid sm:grid-cols-2 gap-4">
            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="card p-6 flex flex-col items-center gap-3 group hover:border-accent/30 text-center"
              aria-label={`Send email to ${siteConfig.email}`}
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <EmailIcon />
              </div>
              <div>
                <p className="text-xs text-ink-muted uppercase tracking-wider font-medium mb-1">Email</p>
                <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors break-all">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex flex-col items-center gap-3 group hover:border-accent/30 text-center"
              aria-label="View GitHub profile"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <GitHubIcon />
              </div>
              <div>
                <p className="text-xs text-ink-muted uppercase tracking-wider font-medium mb-1">GitHub</p>
                <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                  View Profile
                </p>
              </div>
            </a>
          </div>

          {/* CTA buttons */}
          <div className="reveal reveal-delay-2 mt-8 flex flex-wrap gap-3 justify-center">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary">
              <EmailIcon />
              Send an Email
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <GitHubIcon />
              View GitHub
            </a>
          </div>

          {/* Availability note */}
          <div className="reveal reveal-delay-3 mt-12 p-5 rounded-xl bg-surface-muted border border-surface-border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-green-700">{siteConfig.statusText}</span>
            </div>
            <p className="text-sm text-ink-secondary">
              Currently a fourth-year student at {siteConfig.university}, actively looking for OJT placement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
