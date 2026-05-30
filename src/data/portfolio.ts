export const personalInfo = {
  name: "Bassem Ahmed",
  title: "Software Engineer & Full Stack Developer",
  tagline: "I engineer scalable solutions and build exceptional web experiences.",
  description:
    "As a software engineer, I architect robust systems and craft high-performance web applications. From complex algorithms to elegant user interfaces, I engineer solutions that scale.",
  email: "bassemahmed238@gmail.com",
  phone: "+201069789256",
  location: "",
  availability: "Available for Projects",
  social: {
    github: "https://github.com/bassemahmed",
    linkedin: "https://linkedin.com/in/bassemahmed",
    instagram: "https://instagram.com/bassemahmed",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
  { label: "Library", href: "#library" },
  { label: "Contact", href: "#contact" },
];

export const aboutContent = {
  label: "About Me",
  heading: "Full Stack Developer Passionate About Crafting Digital Excellence",
  paragraph1:
    "Bassem Ahmed is an experienced full stack developer with 4+ years of experience building high-performance websites and web applications. With expertise in React, Next.js, Node.js, and modern UI/UX design, I bridge the gap between stunning design and robust engineering.",
  paragraph2:
    "My goal is to build websites and web applications that not only solve real problems but leave a lasting impression. Every project is an opportunity to push the boundaries of what's possible on the web.",
  stats: [
    { value: "4+", label: "Years Exp." },
    { value: "47+", label: "Projects" },
    { value: "27+", label: "Happy Clients" },
  ],
};

export const services = [
  {
    title: "High-Converting Websites",
    description:
      "Websites built for one goal: turning visitors into paying customers. Fast, mobile-first, SEO-optimized, and designed to outperform any WordPress template out there.",
  },
  {
    title: "Scalable Backend Systems",
    description:
      "Your product needs to handle growth without breaking. I build rock-solid APIs, databases, and cloud infrastructure that scale with your business — no bottlenecks, no surprises.",
  },
  {
    title: "Interfaces That Sell",
    description:
      "A beautiful product people enjoy using. I design UX flows and interfaces that reduce friction, build trust, and keep users coming back — because great design is your best salesperson.",
  },
];

export const projects = [
  {
    num: "01",
    title: "Cloy AI",
    category: "AI / SaaS",
    description:
      "Advanced AI-powered platform for content generation and automation. Built with cutting-edge machine learning models and a sleek, intuitive interface.",
    url: "https://cloyai.com",
  },
  {
    num: "02",
    title: "SeenGCC",
    category: "Platform / Business",
    description:
      "A comprehensive business platform serving the GCC region. Features robust functionality, modern design, and seamless user experience.",
    url: "https://seengcc.com",
  },
  {
    num: "03",
    title: "Fares Toson",
    category: "Education / Courses",
    description:
      "A modern course platform for online learning. Features course management, student dashboards, and an engaging educational experience.",
    url: "https://farestoson.com",
  },
  {
    num: "04",
    title: "Platvo",
    category: "Business / Platform",
    description:
      "A modern business platform designed for seamless operations, clean architecture, and a polished user experience built for growth.",
    url: "https://www.platvo.com/",
  },
  {
    num: "05",
    title: "Nezam",
    category: "Management System",
    description:
      "A comprehensive management system with clean architecture, powerful organizational tools, and streamlined workflows for efficient operations.",
    url: "https://nezam.vip",
  },
];

export const plans = {
  projects: [
    {
      name: "Landing Page",
      desc: "A high-converting single page built to turn visitors into customers.",
      payment: {
        cash: { total: "$999", save: "$151", label: "Pay upfront & save $151" },
        s3: { total: "$1,050", monthly: "$350", label: "3-Month Plan" },
        s6: { total: "$1,150", monthly: "$192", label: "6-Month Plan" },
      },
      features: [
        "1-Page Custom Design",
        "Responsive & Mobile-First",
        "Speed Optimization (Ads-Ready)",
        "Contact Form & WhatsApp CTA",
        "SEO Setup & Meta Tags",
        "2 Weeks of Priority Support",
      ],
      cta: "Start Landing Page",
    },
    {
      name: "Business Website",
      desc: "A full website that sets you apart — built, not templated.",
      badge: "Best Value for Growth",
      recommended: true,
      payment: {
        cash: { total: "$2,500", save: "$500", label: "Pay upfront & save $500" },
        s3: { total: "$2,700", monthly: "$900", label: "3-Month Plan" },
        s6: { total: "$2,900", monthly: "$484", label: "6-Month Plan" },
      },
      features: [
        "Up to 7 Pages, Custom Design",
        "3D Animations & Micro-interactions",
        "CMS / Blog Integration",
        "Full SEO Optimization",
        "Speed & Performance Tuning",
        "1 Month of Priority Support",
      ],
      cta: "Start Business Site",
    },
    {
      name: "Web Application",
      desc: "SaaS platforms, dashboards, and complex systems — built to scale.",
      payment: null,
      features: [
        "Free 30-Min Consultation Call",
        "User Auth & Admin Dashboard",
        "Custom Backend & Database",
        "API & Third-Party Integrations",
        "Scalable Cloud Deployment",
        "Ongoing Maintenance Available",
      ],
      cta: "Book Free Consultation",
    },
  ],
  care: [
    {
      name: "Basic Care",
      price: "$79",
      period: "/month",
      desc: "Keep your site healthy, secure, and always online.",
      billingNote: "Automatic Monthly Billing · Cancel Anytime",
      features: [
        "Hosting & SSL Certificate (Included)",
        "Daily Automated Backups",
        "Uptime Monitoring (24/7)",
        "Monthly Security Scan",
        "Email Support",
      ],
      cta: "Get Basic Care",
    },
    {
      name: "Pro Care",
      price: "$149",
      period: "/month",
      desc: "Hands-on updates and reporting, every single month.",
      billingNote: "Automatic Monthly Billing · Cancel Anytime",
      badge: "Most Stable Choice",
      recommended: true,
      features: [
        "Everything in Basic Care",
        "4 Content Updates / Month (up to 2hrs each)",
        "Performance Optimization",
        "Google Analytics Report",
        "Priority Email & Chat Support",
      ],
      cta: "Get Pro Care",
    },
    {
      name: "Elite Care",
      price: "$299",
      period: "/month",
      desc: "Your website — fully managed, zero worries.",
      billingNote: "Automatic Monthly Billing · Cancel Anytime",
      features: [
        "Everything in Pro Care",
        "Unlimited Content Updates",
        "Monthly SEO Improvements",
        "Speed & Core Web Vitals Audit",
        "Dedicated WhatsApp / Slack Channel",
      ],
      cta: "Get Elite Care",
    },
  ],
};

export const faqs = [
  { q: "Is hosting included in the project price?", a: "One-time project packages don't include hosting — but once your site is live, you can join a Care Plan starting at $79/mo which covers hosting, SSL, daily backups, and ongoing support. No need to deal with servers yourself.", tag: "Pricing" },
  { q: "How long does it take to build a website?", a: "A Landing Page typically takes 5–7 business days. A Business Website takes 2–3 weeks. Web Applications vary by scope — we'll define a clear milestone timeline in our free consultation call before anything starts.", tag: "Timeline" },
  { q: "Can I pay in installments?", a: "Yes, flexible 6 or 12-month payment plans are available to fit your budget — at a fixed total with no hidden fees. You can also pay upfront and save.", tag: "Pricing" },
  { q: "Do you work with clients outside Egypt?", a: "Absolutely! I work with clients globally, using professional tools for communication and project management. Payments accepted internationally with no friction.", tag: "General" },
  { q: "What if I need changes after the project is delivered?", a: "Every package includes a post-launch support window. After that, a Care Plan keeps things running with monthly updates, or you can request one-off revisions at any time. I don't disappear after delivery.", tag: "Support" },
  { q: "Will my website work on mobile and load fast?", a: "Always. Every site I build is mobile-first and optimized for Core Web Vitals. Speed is non-negotiable — especially if you're running paid ads, where a slow site directly kills your return on ad spend.", tag: "Technical" },
  { q: "Do you sign NDAs or contracts?", a: "Yes. I can sign an NDA before we discuss your idea, and every project starts with a clear written agreement covering scope, timeline, deliverables, and pricing — so both sides are protected.", tag: "Legal" },
  { q: "How do I get started?", a: 'Click "Get My Instant Estimate", fill in 4 quick steps about your project, and I\'ll receive your brief on WhatsApp instantly. I typically respond within a few hours and we can start the same week.', tag: "General" },
];

export const faqTagColors: Record<string, { bg: string; border: string; text: string }> = {
  Pricing: { bg: "#eff6ff", border: "#bfdbfe", text: "#4f46e5" },
  Timeline: { bg: "#f0fdf4", border: "#bbf7d0", text: "#16a34a" },
  General: { bg: "#f5f3ff", border: "#ddd6fe", text: "#7c3aed" },
  Support: { bg: "#fffbeb", border: "#fde68a", text: "#d97706" },
  Technical: { bg: "#fdf2f8", border: "#f9a8d4", text: "#db2777" },
  Legal: { bg: "#f0fdfa", border: "#99f6e4", text: "#0d9488" },
};

export const libraryItems = [
  {
    title: "UI Components",
    category: "React",
    description: "Reusable UI components built with React and Tailwind CSS.",
    items: ["Button", "Card", "Modal", "DataTable"],
  },
  {
    title: "API Templates",
    category: "Backend",
    description: "Starter templates for REST and GraphQL APIs.",
    items: ["Express", "Next.js API Routes", "Prisma"],
  },
];

export const footerNav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
