export interface NavLink {
  href: string;
  label: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ContactLink {
  href: string;
  label: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const heroContent = {
  eyebrow: 'Personal Portfolio',
  title:
    'A 3rd year CSE AIML student building skills through projects and hands-on learning.',
  description:
    'I am currently in my 6th semester of CSE with a specialization in AIML. I am interested in AI and ML, computer networks, and cybersecurity, and I use projects to keep learning and improving as a student engineer.',
  primaryAction: {
    href: '#projects',
    label: 'View my work',
  },
  secondaryAction: {
    href: '#contact',
    label: "Let's connect",
  },
};

export const focusCard = {
  eyebrow: 'Current Focus',
  title: 'Learning core technical skills through steady hands-on work.',
  description:
    'This portfolio is a simple introduction to my background, interests, and the projects I am using to improve as a student.',
  stats: [
    {
      label: 'Academic path',
      value: '3rd year CSE student with AIML specialization',
    },
    {
      label: 'Main interests',
      value: 'AI and ML, computer networks, cybersecurity',
    },
    {
      label: 'Build mindset',
      value: 'Simple code, practical learning, clear structure',
    },
  ] satisfies StatItem[],
};

export const aboutContent = {
  eyebrow: 'About',
  title: 'A student portfolio focused on learning, growth, and real projects.',
  summary:
    'I am building my foundation as an engineer by working on projects, improving my technical understanding, and learning how to apply concepts beyond the classroom.',
  northStarLabel: 'North Star',
  northStarText:
    'Keep learning consistently and grow into an engineer with strong skills in AIML, networking, and cybersecurity.',
};

export const skillsSection = {
  eyebrow: 'Skills',
  title: 'Areas I am studying and improving through practice.',
  skills: [
    'CSE with AIML specialization',
    'AI and machine learning fundamentals',
    'Computer networks',
    'Cybersecurity interest',
    'Project-based learning',
    'Problem solving and continuous improvement',
  ],
  journeyLabel: 'Journey Log',
  journey: [
    'I am currently a 3rd year student in the 6th semester of CSE with AIML specialization.',
    'I enjoy learning by building projects and understanding how different technologies work in practice.',
    'My main interests are AI and ML, computer networks, and cybersecurity, and I want to keep growing step by step in these areas.',
  ],
};

export const contactSection = {
  eyebrow: 'Contact',
  title: "Let's connect and grow through learning and opportunities.",
  description:
    'I am always open to connecting about student projects, learning opportunities, AIML, computer networks, and cybersecurity.',
  links: [
    {
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=syedWSD1985@gmail.com',
      label: 'syedWSD1985@gmail.com',
      external: true,
    },
    {
      href: 'https://github.com/syednawazali01',
      label: 'GitHub',
      external: true,
    },
  ] satisfies ContactLink[],
};
