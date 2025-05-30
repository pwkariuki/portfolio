import experienceData from "@/data/experience.json";
import { ExperienceType } from "@/data/types";
import { useState } from "react";

export const ExperienceSection = () => {
  const [experience, setExperience] = useState<ExperienceType>(
    experienceData[0],
  );

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-10 border-t">
      <h2 className="text-2xl font-code font-bold mb-8">Experience</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible">
            <div className="flex lg:block border-b lg:border-b-0 lg:border-l-2 border-muted">
              {experienceData.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setExperience(exp)}
                  className={`px-4 py-3 hover:cursor-pointer text-left whitespace-nowrap lg:whitespace-normal w-full border-b-2 lg:border-b-0 lg:border-l-2 transition-all duration-200 ${
                    experience.company === exp.company
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <div className="font-code font-medium">{exp.company}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Job details */}
        <div className="lg:w-2/3">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold font-code">
                {experience.role}{" "}
                <span className="text-primary font-code">@ {experience.company}</span>
              </h3>
              <p className="text-muted-foreground font-code text-sm mt-1">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>

            <div className="space-y-4">
              {experience.achievements.filter(achievement => achievement.trim()).map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1.5 text-2xl">▸</span>
                  <p className="text-muted-foreground font-code leading-relaxed">
                    {achievement.trim()}{achievement.endsWith('.') ? '' : '.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};