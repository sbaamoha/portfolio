import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sba Mohamed",
  initials: "DV",
  url: "https://sbaamoha.com",
  location: "Algeria",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  summary:
    "Results-driven software developer with 2+ years of experience in front-end and back-end development. Known for delivering efficient, high-quality solutions with speed and precision. Skilled at tackling complex challenges and building innovative, scalable applications.",
  description:
    "a professional software developer with a knack for creating elegant solutions in the least amount of time. With over two years of experience in software development, I am a dedicated professional known for crafting efficient solutions with precision and speed. I thrive on tackling complex challenges and excel in creating innovative solutions. My expertise spans across front-end and back-end development, allowing me to approach every project with a holistic perspective.",
  avatarUrl: "/me.jpeg",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Postgres", "Docker"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mohamed@sbaamoha.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sbaamoha",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sba-mohamed-a14370217",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "InHouse",
      href: "#",
      logoUrl: "/inhouse.png",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      start: "Sep 2023",
      end: "Present",
      description:
        "Integrated the dashboard of a manufacturing system with backend APIs. Enhanced dashboard performance and responsiveness. Developed the mobile app for a dropshipping website. Transformed the dashboard into a progressive web app, enabling workers to integrate with the system. Created CI/CD pipelines to improve deployment on a VPS server.",
    },
    {
      company: "Maroc4ps",
      href: "#",
      logoUrl: "/maroc4products-logo.png",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      start: "Mar 2023",
      end: "Sep 2023",
      description:
        "Developed backend services using Node.js and Medusa.js. Integrated the backend with various merchant centers including Meta, Google, Bing, Tiktok, and Twitter. Created a custom Medusa.js plugin and integrated it into the main project. Improved SEO rankings by implementing best practices with Next.js.",
    },
    {
      company: "Freelance",
      href: "#",
      logoUrl: "/mostaql.png",

      badges: [],
      location: "Remote",
      title: "Software Developer",
      start: "Dec 2022",
      end: "Mar 2023",
      description:
        "Fullstack developer for a gaming platform managing Esports arenas worldwide. Developed the gaming web app’s dashboard, backend integration, and statistics pages. Integrated the app with Google services like Google Analytics and Google AdSense.",
    },
  ],
  education: [
    {
      school: "Zain Achour",
      href: "#",
      degree: "s3",
      logoUrl: "/zain-achour.png",
      start: "2023",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
