import { FiMonitor, FiFacebook, FiGithub, FiDatabase, FiServer } from "react-icons/fi";

export const AppConfig = {
  name: "Nhat Khanh Tu",
  username: "aiempie", // should be GitHub username
  avatar: "https://i.ibb.co/Jjj5sK0/IMG-2275.jpg",
  verticalAvatar: "https://i.ibb.co/Jjj5sK0/IMG-2275.jpg",
  introduction:
    `1+ years experience in software development.\n` +
    `Working in scalable and high-performance technology systems.\n` +
    `Backend Development, Frontend Development & more.`,
  subscriptions: [
    {
      name: "Hire Me",
      price: "At any price",
      preferred: true,
    },
    {
      name: "Freelance",
      price: "From $10",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/aiempie",
      icon: FiGithub,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/piepie1203",
      icon: FiFacebook,
    },
  ],
  expertises: [
    {
      name: "Frontend Development",
      icon: FiMonitor,
      description: "HTML/CSS, JavaScript, Bootstrap, React, Next.js, etc.",
    },
    {
      name: "Backend Development",
      icon: FiServer,
      description: "Java/Spring, C#/ASP.Net, Express, Nest.js, OutSystems, Docker, etc.",
    },
    {
      name: "Data Base",
      icon: FiDatabase,
      description: "Postgres, MySQL, MongoDB, etc.",
    },
  ],
  analytics: {
    gaId: "G-NF39CSC1T1",
  },
  giscusEnabled: true,
};
