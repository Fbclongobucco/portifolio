import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiArchlinux,
  SiDebian,
  SiDocker,
  SiGit,
  SiIntellijidea,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpensuse,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedhat,
  SiSpring,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";

export const profile = {
  name: "Fabrício Longo Bucco",
  role: "Desenvolvedor Backend",
  headline:
    "Desenvolvo APIs e microsserviços com Java, Spring Framework e Node.js/NestJS, com Docker, RabbitMQ e bancos relacionais.",
  email: "longobuccodev@gmail.com",
  github: "https://github.com/Fbclongobucco",
  githubHandle: "Fbclongobucco",
  siteUrl: "https://fabriciolongobuccodev.com.br",
  photo: "/images/foto-perfil.jpg",
  whatsapp: { label: "(21) 96978-9088", href: "https://wa.me/5521969789088" },
  phone: { label: "(11) 98641-7613", href: "tel:+5511986417613" },
};

export const about = [
  "Desenvolvedor com fluência em Java e experiência no desenvolvimento de APIs utilizando Spring Framework e Node.js/NestJS.",
  "Atuação em aplicações backend com arquitetura em microsserviços e monólitos modulares, orquestração com Docker e Docker Compose, integração com bancos de dados relacionais e não relacionais, e mensageria com RabbitMQ.",
  "No front-end, trabalho com HTML, CSS, JavaScript/TypeScript, React.js e Next.js. Familiaridade com GNU/Linux em desktops e servidores.",
];

export const highlights = [
  {
    title: "APIs RESTful",
    description: "Criação e consumo de APIs com Spring Framework e NestJS.",
  },
  {
    title: "Arquitetura",
    description: "Microsserviços, Clean Architecture e monólitos modulares.",
  },
  {
    title: "Infraestrutura",
    description: "Conteinerização com Docker e Docker Compose em ambientes Linux.",
  },
  {
    title: "Mensageria",
    description: "Comunicação assíncrona entre serviços com RabbitMQ.",
  },
];

export type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

export const stack: { group: string; items: Tech[] }[] = [
  {
    group: "Backend",
    items: [
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "Spring", icon: SiSpring, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Python", icon: SiPython, color: "#FFD43B" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    group: "Infra e mensageria",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Docker Compose", icon: SiDocker, color: "#2496ED" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
    ],
  },
  {
    group: "Banco de dados",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    group: "Linux",
    items: [
      { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
      { name: "Arch", icon: SiArchlinux, color: "#1793D1" },
      { name: "openSUSE", icon: SiOpensuse, color: "#73BA25" },
      { name: "Debian", icon: SiDebian, color: "#D70A53" },
      { name: "RHEL", icon: SiRedhat, color: "#EE0000" },
    ],
  },
  {
    group: "Ferramentas",
    items: [
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#FE315D" },
      { name: "VS Code", icon: VscVscode, color: "#23A9F2" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];

export const featuredStack = ["Java", "Spring", "NestJS", "Docker", "RabbitMQ", "PostgreSQL", "React", "Next.js"];

export const practices = [
  "APIs RESTful",
  "Microsserviços",
  "Clean Architecture",
  "Monólitos modulares",
  "Montagem e upgrade de hardware",
];
