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
  eyebrow: 'Computer Science · Networks · AIML',
  title: 'Curious about how networks connect our world.',
  description:
    'I am a third-year CSE student specializing in AIML. I enjoy learning how computer networks work and exploring AI, machine learning, and cybersecurity through hands-on projects.',
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
  eyebrow: 'Network basics',
  title: 'Every connection has a story.',
  description:
    'Exploring how devices find each other, share data, and make the internet work.',
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
  title: 'Learning by building, exploring, and staying curious.',
  summary:
    'I am building my foundation as an engineer by working on projects, improving my technical understanding, and learning how to apply concepts beyond the classroom.',
  northStarLabel: 'North Star',
  northStarText:
    'Keep learning consistently and grow into an engineer with strong skills in AIML, networking, and cybersecurity.',
};

export const skillsSection = {
  eyebrow: 'Skills',
  title: 'Networking fundamentals I am learning and exploring.',
  skills: [
    'TCP/IP and OSI model fundamentals',
    'IP addressing and subnetting basics',
    'Routing and switching concepts',
    'DNS, DHCP, and client-server communication',
    'Network security and intrusion detection',
    'Network traffic classification through my NIDS project',
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
