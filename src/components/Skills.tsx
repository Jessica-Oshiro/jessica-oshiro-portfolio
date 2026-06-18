import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Skills
        </h2>
        <div className="w-16 h-1 bg-violet-500 mb-4" />
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Tools and technologies I use to build data pipelines, automation
          systems, and business intelligence solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ category, skills }) => (
            <div key={category}>
              <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 border border-gray-700 text-gray-300 text-sm px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
