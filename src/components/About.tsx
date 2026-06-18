const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "250+", label: "Contractors Managed" },
  { value: "12", label: "Automation Modules Built" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-violet-500 mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
            <p>
              I&apos;m a Data & Process Automation Specialist based in Latin
              America, with over 6 years of experience helping companies work
              smarter — not harder.
            </p>
            <p>
              My work sits at the intersection of data analysis, business
              process improvement, and automation engineering. I&apos;ve built
              systems that eliminate manual bottlenecks, reduce error rates to
              near zero, and free up teams to focus on what matters.
            </p>
            <p>
              From designing end-to-end AP automation systems for multi-team
              payroll cycles to building decision-oriented BI dashboards, I
              translate complex operational pain points into clean, automated
              solutions.
            </p>
            <p>
              I work with tools like Python, SQL, Google Apps Script, Power BI,
              and Tableau — and I communicate results clearly in both Spanish and
              English.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-center gap-6"
              >
                <span className="text-4xl font-bold text-violet-400 tabular-nums shrink-0">
                  {stat.value}
                </span>
                <span className="text-gray-300 text-base font-medium">
                  {stat.label}
                </span>
              </div>
            ))}

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-sm text-violet-400 font-semibold uppercase tracking-widest mb-3">
                Languages
              </p>
              <div className="flex gap-3">
                <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                  Spanish — Native
                </span>
                <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1.5 rounded-full">
                  English — Full Professional
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
