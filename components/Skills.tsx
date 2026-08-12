import { technicalSkills, softSkills } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-14">
          <SectionHeader
            label="Skills"
            heading="Tools, technologies, and strengths."
            id="skills-heading"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="reveal text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
              Technical Skills
            </h3>
            <div className="space-y-3">
              {technicalSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} card p-4 flex items-center justify-between`}
                >
                  <span className="text-sm font-medium text-ink">{skill.name}</span>
                  <span className="text-[11px] text-ink-muted font-medium">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="reveal text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, i) => (
                <div
                  key={skill}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} card p-4 flex items-center gap-3`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-ink">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
