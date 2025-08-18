import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Scott Semtner",
  initials: "S",
  url: "https://scottsemtner.com",
  description: "Software Engineer and Student",
  summary:
    "I'm a Computer Science student at UC San Diego pursuing a 4-year BS/MS program with a focus on systems programming and full-stack development. I'm passionate about building scalable software solutions and have experience working on everything from embedded systems to distributed infrastructure. Currently seeking summer 2025 internship opportunities in backend and systems engineering.",
  skills: [
    "Python",
    "Go",
    "Rust",
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Linux",
    "Git",
    "AWS",
    "SystemVerilog",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "scottsemtner@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://go.scottsemtner.com/gh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://go.scottsemtner.com/linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:scottsemtner@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Vivid-Hosting",
      href: "https://vivid-hosting.net",
      badges: [],
      location: "Los Angeles, CA (Hybrid)",
      title: "Software Engineer Intern",
      logoUrl: "/vh.svg",
      start: "May 2023",
      end: "Present",
      description:
        "Developing backend systems and infrastructure for various cybersecurity solutions. Built radio configuration tools for FIRST Robotics competitions serving 83,000+ students and migrated legacy infrastructure to Kubernetes. Working with Go, Python, React, and embedded systems for mission-critical applications.",
    },
    {
      company: "ACM AI at UC San Diego",
      href: "https://acmucsd.com",
      badges: ["Leadership", "AI/ML"],
      location: "San Diego, CA",
      title: "Director of Development",
      logoUrl: "/acm.png",
      start: "May 2024",
      end: "Present",
      description:
        "Leading a team of 5 developers building platform infrastructure for UC San Diego's largest computing organization. Built AI competition platforms supporting 200+ participants and coordinate with leadership to design engaging technical challenges using modern ML techniques.",
    },
    {
      company: "FIRST Robotics Team 1538",
      href: "https://team1538.com",
      badges: ["Robotics", "C++"],
      location: "San Diego, CA",
      title: "Software Lead",
      logoUrl: "/theholycows.png",
      start: "Sep 2020",
      end: "Jun 2023",
      description:
        "Led software development for competitive robotics team that ranked 16th globally out of 3,000+ teams. Developed autonomous navigation systems, swerve drive kinematics, and real-time motion control in C++. Team won Quality Award at World Championship and multiple engineering awards.",
    },
  ],
  education: [
    {
      school: "University of California San Diego",
      href: "https://cse.ucsd.edu",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/ucsd.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "UCSD Course Evaluation Analytics",
      href: "https://ucsd-student-evals.vercel.app",
      dates: "Dec 2024 - Mar 2025",
      active: true,
      description:
        "Full-stack platform for analyzing course evaluations and professor ratings. Built high-performance web scraper in Rust, optimized PostgreSQL database with complex queries, and created responsive analytics dashboard. Helps students make data-driven course selection decisions.",
      technologies: [
        "Rust",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Live Site",
          href: "https://ucsd-student-evals.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "API Source",
          href: "https://github.com/ssemtner/ucsd-student-evals",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Frontend Source",
          href: "https://github.com/ssemtner/ucsd-student-evals-site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://pub-b460243fb04d4901a11b65f9f5c04bb6.r2.dev/ucsd-student-evals.png",
      video: "",
    },
    {
      title: "Custom RISC Processor Design",
      href: "javascript:void(0)",
      dates: "Apr 2025 - Jun 2025",
      active: true,
      description:
        "Designed and implemented a custom instruction set architecture (ISA) optimized for floating-point operations within hardware constraints. Built complete processor in SystemVerilog with FPGA synthesis and comprehensive testing suite.",
      technologies: [
        "SystemVerilog",
        "Computer Architecture",
        "FPGA",
        "Quartus Prime",
        "ModelSim",
      ],
      links: [
        {
          type: "Contact for Details",
          href: "mailto:scottsemtner@gmail.com",
          icon: <Icons.email className="size-3" />,
        },
      ],
      image: "https://pub-b460243fb04d4901a11b65f9f5c04bb6.r2.dev/crisp.png",
      video: "",
    },
    {
      title: "Video Sharing Platform",
      href: "https://github.com/ssemtner/slice_django",
      dates: "Aug 2023",
      active: false,
      description:
        "Full-stack video platform with client-side editing capabilities. Implemented WebAssembly-based video processing, cloud storage integration, and social media embedding. Features drag-and-drop uploads and optimized streaming.",
      technologies: [
        "Django",
        "Python",
        "WebAssembly",
        "Oracle Cloud",
        "JavaScript",
        "HTML/CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ssemtner/slice_django",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/slice.png",
      video: "",
    },
    {
      title: "FIRST Robotics Competition Software",
      href: "https://www.thebluealliance.com/team/1538/2023",
      dates: "Sep 2020 - Jun 2023",
      active: false,
      description:
        "Autonomous navigation and control systems for competitive robotics. Implemented swerve drive kinematics, computer vision, and real-time motion control. Team achieved top global rankings and engineering awards.",
      technologies: ["C++", "WPILib", "Computer Vision", "Control Systems"],
      links: [
        {
          type: "Team Website",
          href: "https://team1538.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "2023 Code",
          href: "https://github.com/theholycows/1538_2023",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-b460243fb04d4901a11b65f9f5c04bb6.r2.dev/frc.mp4",
    },
  ],
  hackathons: [],
} as const;
