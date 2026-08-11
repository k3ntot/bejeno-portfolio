import { technicalSkills, softSkills, type SkillLevel } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const levelColors: Record<SkillLevel, string> = {
  Basic: "bg-slate-100 text-slate-600 border-slate-200",
  Familiar: "bg-blue-50 text-blue-700 border-blue-200",
  "Working Knowledge": "bg-indigo-50 text-indigo-700 border-indigo-200",
  Intermediate: "bg-accent/10 text-accent border-accent/20",
};

const levelDots: Record<SkillLevel, number> = {
  Basic: 1,
  Familiar: 2,
  "Working Knowledge": 3,
  Intermediate: 4,
};

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
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} card p-4 flex items-center justify-between group`}
                >
                  <div className="flex items-center gap-3">
                    {/* Dot indicators */}
                    <div className="flex gap-1" aria-hidden="true">
                      {[1, 2, 3, 4].map((dot) => (
                        <span
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            dot <= levelDots[skill.level]
                              ? "bg-accent"
                              : "bg-surface-border"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-ink">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:block text-[11px] text-ink-muted">{skill.category}</span>
                    <span
                      className={`badge border text-[11px] font-medium ${levelColors[skill.level]}`}
                      aria-label={`Proficiency: ${skill.level}`}
                    >
                      {skill.level}
                    </span>
                  </div>
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
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} card p-4 flex items-center gap-3 group`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-ink">{skill}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="reveal mt-6 text-xs text-ink-muted leading-relaxed bg-surface-muted rounded-lg p-4 border border-surface-border">
              Proficiency levels reflect honest self-assessment as a student currently developing these skills through coursework and project work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
