import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sba Mohamed",
  initials: "DV",
  url: "https://sbaamoha.com",
  location: "Algeria",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software frontend developer with expertise in crafting aesthetically pleasing and highly functional websites and applications. Proficient in HTML, CSS, JavaScript, TypeScript, React, and Node.js.",
  summary:
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
      title: "Software Developer Contributor",
      href: "https://plane.so/",
      dates: "Ongoing",
      active: true,
      description:
        "Contributing to the development and improvement of open-source projects. Engaging in collaborative coding sessions, code reviews, and discussions to enhance project quality and functionality. Implementing new features and fixing bugs to ensure project stability and performance.",
      technologies: ["JavaScript", "TypeScript", "Git", "Open Source"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/makeplane/plane",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://plane.so/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/plane.png",
      video: "",
    },
    {
      title: "Moroccan Products Store",
      href: "https://maroc4ps.com/",
      dates: "Ongoing",
      active: true,
      description:
        "Worked as a backend developer with Node.js and Medusa.js. Integrated the backend with various merchant centers including Meta, Google, Bing, TikTok, and Twitter. Created a custom Medusa.js plugin and integrated it with the main project. Improved SEO rankings using Next.js with recommended best practices.",
      technologies: [
        "Node.js",
        "Medusa.js",
        "Next.js",
        "JavaScript",
        "SEO",
        "Backend",
      ],
      links: [
        {
          type: "Website",
          href: "https://maroc4ps.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/maroc4ps.png",
      video: "",
    },
    {
      title: "ERP Manufacturing System Dashboard",
      href: "#", // Replace with the live URL if available
      dates: "Ongoing",
      active: true,
      description:
        "Integrated the dashboard of the manufacturing system with backend APIs. Enhanced the dashboard performance and responsiveness. Created a mobile app for the dropshipping website. Converted the dashboard into a progressive web app (PWA) for workers to integrate with the system. Set up CI/CD pipelines for improved deployment in VPS servers.",
      technologies: ["React", "Node.js", "PWA", "CI/CD", "Backend", "Frontend"],
      links: [],
      image: "/assets/inhouse.png",
      video: "",
    },
  ],
} as const;
