export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Data & Analysis",
    skills: ["Python", "SQL", "Google Sheets", "Microsoft Excel"],
  },
  {
    category: "Visualization",
    skills: ["Power BI", "Tableau", "Looker Studio"],
  },
  {
    category: "Automation",
    skills: ["Google Apps Script", "Excel Macros", "UiPath"],
  },
  {
    category: "Process",
    skills: [
      "Process Mining",
      "Business Process Improvement",
      "Jira",
      "Confluence",
    ],
  },
  {
    category: "Languages",
    skills: ["Spanish (Native)", "English (Full Professional)"],
  },
];
