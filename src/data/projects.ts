export type ProjectStatus = "Live & Active" | "Coming Soon" | "Completed";

export type Project = {
  title: string;
  description: string;
  results?: string[];
  status: ProjectStatus;
  stack: string[];
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "AP Automation System",
    description:
      "Designed and built a full accounts payable automation system managing 250+ contractors at Prediktive. 12 automation modules covering the end-to-end monthly payment cycle across 3 teams.",
    results: [
      "~0 invoice errors/month (vs 4 error types before)",
      "100% monthly cycle automated",
      "0 manual calendar updates",
      "3 teams served automatically",
    ],
    status: "Live & Active",
    stack: ["Google Apps Script", "Python", "Google Sheets"],
  },
  {
    title: "BI Dashboards & Reporting",
    description:
      "Design and development of decision-oriented dashboards for operational and financial monitoring across multiple business units.",
    status: "Completed",
    stack: ["Power BI", "Tableau", "Looker Studio", "SQL"],
  },
  {
    title: "Process Automation Scripts",
    description:
      "Custom scripts to automate repetitive tasks, email workflows, data transformations, and reporting — reducing manual effort and improving data accuracy.",
    status: "Completed",
    stack: ["Google Apps Script", "Python", "Excel Macros"],
  },
  {
    title: "Contractor Portal",
    description:
      "Full-stack web platform for contractor self-service: invoicing, timesheets, and approvals. Streamlining contractor management end-to-end.",
    status: "Coming Soon",
    stack: ["Supabase", "Vercel", "Next.js"],
    comingSoon: true,
  },
];
