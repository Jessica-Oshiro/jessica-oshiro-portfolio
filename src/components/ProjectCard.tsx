import { Project } from "@/data/projects";

const statusStyles: Record<string, string> = {
  "Live & Active": "bg-green-900/50 text-green-400 border border-green-800/50",
  "Coming Soon": "bg-violet-900/50 text-violet-400 border border-violet-800/50",
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, results, status, stack, comingSoon } = project;

  return (
    <div
      className={`relative rounded-2xl bg-gray-900 border border-gray-800 hover:border-violet-500/50 transition-all duration-300 p-6 flex flex-col gap-4 ${
        comingSoon ? "opacity-80" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-semibold text-lg leading-snug">
          {title}
        </h3>
        {statusStyles[status] && (
          <span
            className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[status]}`}
          >
            {status}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      {/* Results */}
      {results && results.length > 0 && (
        <ul className="space-y-1.5">
          {results.map((result) => (
            <li
              key={result}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <span className="text-violet-400 mt-0.5 shrink-0">✓</span>
              {result}
            </li>
          ))}
        </ul>
      )}

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-gray-800">
        {stack.map((tool) => (
          <span
            key={tool}
            className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-md"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
