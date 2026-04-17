export interface Project {
  name: string;
  description: string;
  tech: string;
  tags: string[];
  url: string;
  stars?: number;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    name: 'intelligent-document-summarizer',
    description:
      'A web app that uses AI to generate clear, accurate summaries of legal and financial documents.',
    tech: 'TypeScript',
    tags: ['AI', 'Web App', 'TypeScript'],
    url: 'https://github.com/syednawazali01/intelligent-document-summarizer',
    highlight: true,
  },
  {
    name: 'pc-build-advisor-web',
    description:
      'Web-based PC Build Advisor that suggests optimal PC builds by budget and use case, featuring an interactive UI and Python backend.',
    tech: 'Python',
    tags: ['Web App', 'Python', 'Hardware'],
    url: 'https://github.com/syednawazali01/pc-build-advisor-web',
    highlight: true,
  },
  {
    name: 'pc-build-advisor',
    description:
      'A Python tool that recommends PC builds based on budget and use case.',
    tech: 'Python',
    tags: ['CLI', 'Python', 'Hardware'],
    url: 'https://github.com/syednawazali01/pc-build-advisor',
    stars: 1,
  },
  {
    name: 'Creator-Tools-Suite',
    description:
      'A CLI-based tool to automate the ranking and organization of short-form video content.',
    tech: 'JavaScript',
    tags: ['CLI', 'JavaScript', 'Automation'],
    url: 'https://github.com/syednawazali01/Creator-Tools-Suite',
  },
  {
    name: 'java-small-Projects',
    description:
      'A collection of small Java projects covering core concepts, data structures, and problem-solving exercises.',
    tech: 'Java',
    tags: ['Java', 'Practice'],
    url: 'https://github.com/syednawazali01/java-small-Projects',
  },
  {
    name: 'Local-java-practice',
    description:
      'Local Java practice repository for experimenting with language features and building foundational skills.',
    tech: 'Java',
    tags: ['Java', 'Practice'],
    url: 'https://github.com/syednawazali01/Local-java-practice',
  },
];
