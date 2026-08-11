import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 bg-surface-muted"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-14">
          <SectionHeader
            label="Selected Projects"
            heading="Projects and ideas I&apos;ve worked on."
            subheading="A collection of academic and personal projects. Project details will be expanded as my portfolio grows."
            id="projects-heading"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <p className="reveal mt-10 text-sm text-ink-muted text-center">
          More projects coming soon — this section will be updated as I complete additional work.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const delay = Math.min(index + 1, 4);

  return (
    <article
      className={`reveal reveal-delay-${delay} card flex flex-col overflow-hidden group`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image / Placeholder */}
      <div className="relative h-44 bg-gradient-to-br from-navy-950 to-navy-800 overflow-hidden flex-shrink-0">
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Project number */}
        <div className="absolute top-4 left-4 font-mono text-5xl font-bold text-white/10 select-none" aria-hidden="true">
          {project.number}
        </div>
        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="badge bg-white/10 text-white/80 border border-white/10 font-medium text-[11px]">
            {project.category}
          </span>
        </div>
        {/* Placeholder label */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white/40 font-mono text-xs">
            [ Project image coming soon ]
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-base font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-ink-secondary leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="badge bg-surface-muted text-ink-secondary border border-surface-border text-[11px] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-surface-border">
          {project.githubUrl && project.githubUrl !== "#" ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitHubIcon />
              GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-ink-muted cursor-default">
              <GitHubIcon />
              GitHub
            </span>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
