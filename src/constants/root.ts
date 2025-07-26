import {
  Clock,
  Wrench,
  Code,
  Database,
  Zap,
  Shield,
  Globe,
  Rocket,
  Settings,
  Users,
} from "lucide-react";

export const Nav = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "FAQs",
    href: "#faqs",
  },
] as const;

export const Stats = [
  {
    title: "5min",
    subtitle: "Setup Time",
  },
  {
    title: "50+",
    subtitle: "Pre-built Components",
  },
  {
    title: "Zero",
    subtitle: "Configuration Needed",
  },
] as const;

export const ProblemsSolved = [
  {
    icon: Clock,
    iconBg: "bg-blue",
    iconColor: "text-blue",
    title: "Hours of Setup Time",
    description:
      "Skip the tedious configuration and environment setup that usually takes days to get right.",
  },
  {
    icon: Wrench,
    iconBg: "bg-green",
    iconColor: "text-green",
    title: "Complex Integrations",
    description:
      "No more wrestling with authentication, database connections, or deployment configurations.",
  },
  {
    icon: Zap,
    iconBg: "bg-purple",
    iconColor: "text-purple",
    title: "Development Friction",
    description:
      "Eliminate the frustration of starting from scratch and focus on building your unique features.",
  },
] as const;

export const FooterLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Documentation", href: "#docs" },
    { name: "Examples", href: "#examples" },
    { name: "Changelog", href: "#changelog" },
    { name: "Roadmap", href: "#roadmap" },
  ],
  resources: [
    { name: "Getting Started", href: "#getting-started" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "API Reference", href: "#api" },
    { name: "Community", href: "#community" },
    { name: "Blog", href: "#blog" },
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Bug Reports", href: "#bugs" },
    { name: "Feature Requests", href: "#requests" },
    { name: "Status", href: "#status" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "License", href: "#license" },
  ],
} as const;

export const FeatureList = [
  {
    icon: Code,
    iconBg: "bg-blue",
    iconColor: "text-blue",
    title: "Frontend Development",
    description:
      "Modern React components with TypeScript, Tailwind CSS, and responsive design patterns built-in.",
  },
  {
    icon: Database,
    iconBg: "bg-green-100",
    iconColor: "text-green",
    title: "Backend Architecture",
    description:
      "Scalable Node.js/Express setup with database integration, API routes, and authentication ready.",
  },
  {
    icon: Shield,
    iconBg: "bg-purple",
    iconColor: "text-purple",
    title: "Security & Auth",
    description:
      "Enterprise-grade authentication, authorization, and security best practices implemented out of the box.",
  },
  {
    icon: Zap,
    iconBg: "bg-yellow",
    iconColor: "text-yellow",
    title: "Performance Optimization",
    description:
      "Pre-configured caching, lazy loading, and performance monitoring to keep your app lightning fast.",
  },
  {
    icon: Globe,
    iconBg: "bg-purple",
    iconColor: "text-purple",
    title: "API Integration",
    description:
      "RESTful APIs, GraphQL support, and third-party service integrations with proper error handling.",
  },
  {
    icon: Rocket,
    iconBg: "bg-red",
    iconColor: "text-red",
    title: "Deployment Ready",
    description:
      "One-click deployment configurations for Vercel, Netlify, AWS, and other major hosting platforms.",
  },
  {
    icon: Settings,
    iconBg: "bg-gray",
    iconColor: "text-gray",
    title: "Development Tools",
    description:
      "ESLint, Prettier, testing setup, and development workflows configured for maximum productivity.",
  },
  {
    icon: Users,
    iconBg: "bg-orange",
    iconColor: "text-orange",
    title: "Team Collaboration",
    description:
      "Git workflows, documentation templates, and team development best practices included.",
  },
] as const;

export const FAQs = [
  {
    question: "What exactly is QSoftX?",
    answer:
      "QSoftX is a comprehensive full stack development template that provides pre-configured frontend (React/TypeScript), backend (Node.js/Express), authentication, database integration, and deployment setups. It's designed to eliminate the initial setup phase so you can start building your application immediately.",
  },
  {
    question: "What technologies are included in the template?",
    answer:
      "The template includes React with TypeScript, Tailwind CSS for styling, Node.js with Express for the backend, database integration (PostgreSQL/MongoDB), authentication system, API structure, testing setup (Jest/Cypress), and deployment configurations for major platforms like Vercel, Netlify, and AWS.",
  },
  {
    question: "How do I get started with QSoftX?",
    answer:
      "Simply download the template, run the installation command, and follow the setup guide. The entire process takes less than 5 minutes. You'll have a fully functional full stack application ready for development with all the boilerplate code already configured.",
  },
  {
    question: "Can I customize the template for my specific needs?",
    answer:
      "Absolutely! QSoftX is designed to be highly customizable. You can modify any part of the codebase, add or remove features, change the styling, integrate different databases, or adapt the authentication system to your requirements. It's your foundation to build upon.",
  },
  {
    question: "Is QSoftX suitable for production applications?",
    answer:
      "Yes, QSoftX is built with production-grade best practices including security configurations, performance optimizations, error handling, logging, and scalable architecture patterns. Many developers have successfully launched production applications using QSoftX as their foundation.",
  },
  {
    question: "Do I need to be an experienced developer to use QSoftX?",
    answer:
      "While some full stack knowledge is helpful, QSoftX is designed to be beginner-friendly. The template includes comprehensive documentation, code comments, and examples. It's actually a great learning tool for developers wanting to understand full stack architecture and best practices.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide detailed documentation, video tutorials, and a community forum where developers can ask questions and share solutions. For enterprise users, we also offer priority support and custom implementation assistance.",
  },
  {
    question: "How often is the template updated?",
    answer:
      "We regularly update QSoftX to include the latest versions of dependencies, security patches, and new features. Updates are released monthly, and we maintain backward compatibility while providing migration guides for major changes.",
  },
  {
    question: "Can I use QSoftX for client projects?",
    answer:
      "Yes, you can use QSoftX for both personal and commercial projects, including client work. The template is designed to help agencies and freelancers deliver projects faster while maintaining high quality standards.",
  },
] as const;

export const Benefits = [
  {
    title: "Ship Faster",
    description:
      "Launch your MVP weeks earlier by skipping the boilerplate setup phase entirely.",
  },
  {
    title: "Reduce Complexity",
    description:
      "Start with proven patterns and best practices instead of making architectural decisions from scratch.",
  },
  {
    title: "Focus on Value",
    description:
      "Spend your time building features that matter to your users, not configuring build tools.",
  },
  {
    title: "Scale Confidently",
    description:
      "Built on enterprise-grade foundations that grow with your application needs.",
  },
  {
    title: "Team Productivity",
    description:
      "Consistent structure and documentation means faster onboarding for new team members.",
  },
  {
    title: "Proven Reliability",
    description:
      "Battle-tested configurations and patterns used by thousands of successful projects.",
  },
] as const;