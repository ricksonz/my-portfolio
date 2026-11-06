import topDeveloperImg from './assets/top-performer.jpg';
import profileImg from './assets/profile.jpg';

export const profile = {
  name: 'Mark Rickson Plateros',
  firstName: 'Mark Rickson',
  image: profileImg,
  initials: 'MRK',
  role: 'A web developer based in Lapu-Lapu City, Cebu, Philippines',
  intro:
  'Web Developer with 5+ years of experience building responsive web applications and delivering end-to-end features. Experienced in front-end and back-end development, API integration, and AI-assisted, spec-driven workflows for efficient software development.',
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
      'Maintained NativeCamp, a multi-platform online English-teaching service.',
    roles: [
      {
        title: 'Web Developer (Full-Stack)',
        period: '5mos.',
        points: [
          'Deliver feature tickets across the front end and backend code of the CakePHP codebase, using AI assistance.',
          'Contribute to the ongoing migration of front-end pages from legacy CakePHP 2 to Laravel 12 Blade templates using AI-assisted workflows.',
          'Plan, generate, and review code with structured specs and tailored prompts across Claude and other AI models, working in Cursor and VS Code.',
          'Write AI-assisted unit tests and Playwright tests, plus manual test cases, to verify features before release.'
        ],
      },
      {
        title: 'Front End Developer',
        period: '3yrs. & 4mos.',
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
    highlight: 'WordPress',
    period: 'June 2021 – Feb 2023',
    status: 'Previous',
    summary: 'Developed and maintained custom, responsive WordPress websites tailored to diverse client specifications from design prototypes.',
    roles: [
      {
        title: 'Front End Developer',
        period: 'June 2021 – Feb 2023',
        points: [
          'On the maintenance team, customized WordPress themes and modified Divi and Elementor pages on released and in-development client sites, covering multiple B2B industries such as home care, logistics, consulting, staffing, and real estate.',
          'Interpreted complex client requirements to implement accurate functional revisions and custom features under tight production deadlines.',
          'Diagnosed and resolved cross-browser bugs, layout inconsistencies, and design issues.',
          'Optimized site performance to improve Google Lighthouse Core Web Vitals and built semantic markup for indexing on Google and Bing.',
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
  { group: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'] },
  {
    group: 'Frameworks & CMS',
    items: ['CakePHP', 'WordPress (Divi, Elementor)', 'jQuery', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    group: 'Tools',
    items: [
      'Git', 'GitHub', 'Jira', 'Figma', 'Adobe XD', 'Lighthouse', 'FileZilla',
      'VS Code', 'Cursor', 'GitHub Copilot', 'Claude', 'Playwright',
    ],
  },
  {
    group: 'Practices',
    items: [
      'AI-assisted development',
      'Spec-driven development',
      'Prompt engineering',
      'AI-assisted unit testing',
      'Manual test cases',
      'REST APIs',
      'Responsive design',
      'Technical SEO',
      'Core Web Vitals',
      'Cross-browser testing',
    ],
  },
  {
    group: 'Familiar with',
    items: ['Sass/SCSS', 'TypeScript', 'React', 'Vue', 'Node.js', 'Laravel', 'WooCommerce', 'Shopify', 'Next.js'],
  },
]

export const education = {
  degree: 'BS in Information Technology',
  school: 'University of Cebu Lapu-Lapu and Mandaue',
  period: '2015 – 2020',
  status: 'Graduated',
}

export const projects = [
  {
    company: 'Forty Degrees Celsius Inc.',
    items: [
      {
        name: 'NativeCamp',
        featured: true, // spans the full width
        status: 'Live',
        description:
          'An online English-conversation platform with over a million users. I was part of the team that maintained and extended its large existing codebase, moving from front-end into full-stack work.',
        href: 'https://nativecamp.net/',
        // image: nativecampImg,
      },
      {
        name: 'Textbook pages',
        status: 'Live',
        description:
          "Static textbook pages in NativeCamp's lesson library. Most of our team's work revolves around them, and I modify and update the pages.",
        href: 'https://nativecamp.net/textbook',
      },
      {
        name: 'Study Abroad',
        status: 'Live',
        description:
          "NativeCamp's study-abroad service pages. I was part of the front-end development, including the sub-pages, built before our AI-assisted workflow.",
        href: 'https://nativecamp.net/study_abroad',
      },
    ],
  },
  {
    company: 'Proweaver Inc.',
    items: [
      {
        name: 'Client websites',
        featured: true,
        status: 'Live',
        description:
          "Proweaver's showcase of client work. I was assigned across many client sites wherever a build or maintenance was needed, working on responsive custom WordPress sites in Divi and Elementor.",
        stack: ['WordPress', 'Divi', 'Elementor'],
        href: 'https://www.proweaver.com/our-work',
      },
    ],
  },
]
