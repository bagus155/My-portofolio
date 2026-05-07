// ─────────────────────────────────────────────────────────
// siteData.js — Single source of truth for all content
// Edit only this file to update the entire site.
// ─────────────────────────────────────────────────────────

export const site = {
  // ── Identity ──────────────────────────────────────────
  name:      'Bagzz',
  handle:    'Vilitryx',
  role:      'Newbie Back-end Developer',
  email:     'bagzz@gmail.com',
  github:    'https://github.com/bagus155',
  instagram: 'https://instagram.com/alezonyth4',

  // ── Navigation ────────────────────────────────────────
  navLinks: [
    { label: 'About',     href: '#about'     },
    { label: 'Skills',    href: '#expertise' },
    { label: 'Process',   href: '#dataflow'  },
    { label: 'Projects',  href: '#projects'  },
    { label: 'Contact',   href: '#contact'   },
  ],

  // ── Hero ──────────────────────────────────────────────
  hero: {
    eyebrow:   'Newbie Back-end Developer · Node.js · Supabase',
    headline:  ['Hi! I\'m Bagzz.', 'A Newbie Back-end Developer'],
    sub:       `I'm still early in my journey, but I'm passionate about
                building back-end systems — learning one endpoint at a time.`,
    cta:       { label: 'See my work',  href: '#projects' },
    ctaSec:    { label: 'Get in touch', href: '#contact'  },
  },

  // ── About ─────────────────────────────────────────────
  about: {
    statusLabel: 'Available for collaboration',
    paragraphs: [
      `I'm a student currently learning back-end development with
       Node.js, Express, and Supabase. I'm still figuring things out,
       but I try my best to write clean code and build things that
       actually work, even if it takes me a few extra tries.`,
      `I believe the best way to learn is by building real things.
       That's why I jump into projects, break stuff, fix it,
       and learn something new every single time.`,
    ],
    stack: [
      'Node.js', 'Express', 'Supabase', 'PostgreSQL',
      'REST API', 'JWT Auth', 'Git',
    ],
    terminalLines: [
      '$ node server.js',
      '→ Listening on :3000',
      '→ DB connected',
      '→ Auth ready',
    ],
    logLines: [
      'GET  /api/users      200',
      'POST /api/auth/login 200',
      'GET  /api/posts      200',
      'PUT  /api/posts/:id  204',
    ],
  },

  // ── Expertise ─────────────────────────────────────────
  expertise: {
    eyebrow: '002 — What I\'m Learning',
    title:   'Skills I\'m building.',
    cards: [
      {
        icon: '⬡', bg: '#EDE7F6',
        title: 'API Design & Architecture',
        desc:  `Learning how to design RESTful APIs that make sense —
                clear routes, proper status codes, and responses
                that are easy to work with.`,
        mono:  'REST · Express · Routing',
      },
      {
        icon: '◈', bg: '#E8F5E9',
        title: 'Database & Data Modelling',
        desc:  `Getting comfortable with PostgreSQL and Supabase —
                learning how to design tables, write queries,
                and structure data properly.`,
        mono:  'Supabase · PostgreSQL · SQL',
      },
      {
        icon: '◎', bg: '#FFF3E0',
        title: 'Auth & Security',
        desc:  `Exploring authentication with JWT and Supabase Auth —
                learning how to protect routes and keep user data safe.
                Still lots to learn here!`,
        mono:  'JWT · Supabase Auth · Middleware',
      },
      {
        icon: '▣', bg: '#FCE4EC',
        title: 'Error Handling & Debugging',
        desc:  `Learning to handle errors properly, debug issues patiently,
                and write code that doesn't crash unexpectedly.
                console.log is still my best friend.`,
        mono:  'Try-Catch · Logging · Debugging',
      },
      {
        icon: '◆', bg: '#E3F2FD',
        title: 'Git & Workflow',
        desc:  `Using Git for version control, keeping my commits clean (mostly),
                and learning how to collaborate on code with others.`,
        mono:  'Git · GitHub · VS Code',
      },
    ],
  },

  // ── Data Flow / Process ───────────────────────────────
  dataflow: {
    eyebrow: '003 — How I Learn',
    title:   'My approach to building things.',
    steps: [
      {
        n: '01', bg: '#EDE7F6', color: '#7E57C2',
        title: 'Understand the problem',
        desc:  `Before writing any code, I try to understand what the app
                needs to do. What data is involved? What should happen?`,
      },
      {
        n: '02', bg: '#E8F5E9', color: '#388E3C',
        title: 'Plan the structure',
        desc:  `I sketch out the database tables and API routes first.
                It saves me from rewriting everything later (learned that the hard way).`,
      },
      {
        n: '03', bg: '#FFF3E0', color: '#F57C00',
        title: 'Build step by step',
        desc:  `I build one feature at a time, test it, and move on.
                Trying to keep my code organized in controllers and routes.`,
      },
      {
        n: '04', bg: '#FCE4EC', color: '#C2185B',
        title: 'Test and fix bugs',
        desc:  `I test things manually, check for errors, and try to handle
                edge cases. Every bug I fix teaches me something new.`,
      },
      {
        n: '05', bg: '#E3F2FD', color: '#1565C0',
        title: 'Deploy and learn',
        desc:  `Push to GitHub, deploy to Vercel, and see what happens.
                Each deployment is a learning experience.`,
      },
    ],
  },

  // ── Projects ──────────────────────────────────────────
  projects: {
    eyebrow: '004 — My Project',
    title:   "Things I'm building.",
    items: [
      {
        type:    'Online Shop',
        accent:  'linear-gradient(to right, #D1C4E9, #C8E6C9)',
        title:   'KaryaNusa',
        desc:    `My first real full-stack project! A marketplace for local artisan
                  products with login, product listing, cart, and checkout and many more.
                  Built with Node.js, Express & Supabase. I learned so much from this!`,
        tags:    ['Node.js', 'Express', 'Supabase', 'REST API'],
        link:    'https://karyanusa-frontend.vercel.app',// Update with actual URL
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────
  contact: {
    eyebrow: '005 — Say Hi',
    title:   'Let\'s connect!',
    body:    `I'm always happy to meet new people, collaborate on projects,
              or just chat about coding. I'm still learning, but I'm eager
              to grow — feel free to reach out!`,
  },

  // ── Footer ────────────────────────────────────────────
  footer: '© 2025 · Node.js runs the back-end, this page does not.',
};