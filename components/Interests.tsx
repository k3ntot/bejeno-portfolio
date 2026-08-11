import { interests } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Interests() {
  return (
    <section
      id="interests"
      aria-labelledby="interests-heading"
      className="py-24 bg-surface-muted"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-14">
          <SectionHeader
            label="Interests"
            heading="What I enjoy exploring."
            id="interests-heading"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((interest, i) => (
            <article
              key={interest.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} card p-6 group`}
              aria-label={interest.title}
            >
              <div className="text-2xl mb-4" role="img" aria-label={interest.title}>
                {interest.icon}
              </div>
              <h3 className="text-sm font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                {interest.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {interest.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
