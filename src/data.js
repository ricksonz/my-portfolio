import topDeveloperImg from './assets/top-performer.jpg';
import profileImg from './assets/profile.jpg';

export const profile = {
  name: 'Mark Rickson Plateros',
  firstName: 'Mark Rickson',
  image: profileImg,
  initials: 'MRK',
  role: 'A web developer based in Lapu-Lapu City, Cebu, Philippines',
  intro:
    'I have 5+ years of experience, growing from front-end specialist into full-stack. I ship platform features, turn designs into pixel-perfect interfaces, and use AI-assisted, spec-driven workflows to build faster and cleaner.',
  email: 'markricksonplateros09@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/ricksonz' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mark-rickson-plateros-631b05241/' },
  ],
}

export const experience = [
  {
    company: 'Forty Degrees Celsius Inc.',
    period: 'Feb 2023 – Nov 2026',
    status: 'Recent',
    summary:
      'Maintain NativeCamp project, an online multi-platform English-teaching service',
    roles: [
      {
        title: 'AI-Assisted Web Developer',
        period: 'Aug 2026 – Nov 2026',
        points: [
          'Maintained backend APIs with AI assistance and deliver features end to end.',
          'Helped migrate front-end pages from legacy CakePHP 2 to Laravel 12 Blade templates using AI-assisted workflows.',
          'Plan, generate, and review code using structured specs and tailored prompts across VS Code, GitHub Copilot, and Claude.',
        ],
      },
      {
        title: 'Front-End Developer',
        period: 'Feb 2023 – Jul 2026',
        points: [
          'Built and maintained front-end pages on the legacy CakePHP 2 codebase.',
          'Translated Figma and Adobe XD designs into responsive, pixel-perfect pages.',
          'Raised Lighthouse performance and SEO scores with cleaner markup and technical SEO fixes.',
        ],
      },
    ],
  },
  {
    company: 'Proweaver Inc.',
    period: 'Jun 2021 – Feb 2023',
    status: 'Previous',
    summary: 'Developed and maintained custom, responsive WordPress websites tailored to diverse client specifications from design prototypes.',
    roles: [
      {
        title: 'Front-End Developer',
        period: 'Jun 2021 – Feb 2023',
        points: [
          'Translated high-fidelity Xara design files into pixel-perfect, responsive WordPress themes using standard builders like Divi and Elementor alongside custom CSS/HTML.',
          'Interpreted complex client requirements to implement accurate functional revisions and custom features under tight production deadlines.',
          'Diagnosed and resolved cross-browser compatibility bugs and layout inconsistencies to ensure seamless multi-device user experiences.',
          'Optimized website performance to improve Google Lighthouse core web vitals and engineered semantic markup to ensure successful indexing on Google and Bing.',
        ],
      },
    ],
    awards: [
      {
        title: 'Top Developer of the Month',
        date: 'July 2022',
        image: topDeveloperImg,
        href: 'https://www.facebook.com/photo/?fbid=1058671505022398&set=a.995147658041450',
      },
    ],
  },
]

export const skills = [
  { group: 'Languages', items: ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'PHP', 'MySQL'] },
  {
    group: 'Frameworks',
    items: ['React', 'Vue', 'Node.js', 'Laravel', 'CakePHP', 'WordPress', 'Shopify', 'jQuery', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    group: 'AI workflow',
    items: ['Cursor', 'Spec-driven development', 'Prompt engineering', 'LLMs'],
  },
  {
    group: 'Engineering',
    items: ['REST APIs', 'Responsive design', 'Technical SEO', 'Core Web Vitals'],
  },
  {
    group: 'Testing',
    items: ['AI-assisted unit tests', 'Manual test cases', 'Playwright', 'Cross-browser testing'],
  },
  { group: 'Tools', items: ['Git', 'GitHub', 'Jira', 'Figma', 'Adobe XD', 'Lighthouse', 'FileZilla'] },
]

export const education = {
  degree: 'BS in Information Technology',
  school: 'University of Cebu Lapu-Lapu and Mandaue',
  period: '2015 – 2020 (Graduated)',
}

export const projects = [
  {
    name: 'Project name',
    status: 'In progress',
    description: 'One or two sentences on what it does and who it is for.',
    stack: 'React, Tailwind CSS',
    href: '#', // live site URL
    github: 'https://github.com/your-username/project-name',
  }
]
