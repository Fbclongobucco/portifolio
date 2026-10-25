import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/src/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const title = `${profile.name} | ${profile.role} Java, Spring, Node.js e React`;
const description =
  "Portfólio de Fabrício Longo Bucco, desenvolvedor full stack Java, Spring Framework, Node.js/NestJS, React e Next.js. APIs RESTful, microsserviços, Docker, RabbitMQ e PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Fabrício Longo Bucco",
    "desenvolvedor full stack",
    "desenvolvedor backend",
    "desenvolvedor Java",
    "Spring Framework",
    "Node.js",
    "NestJS",
    "microsserviços",
    "APIs RESTful",
    "Docker",
    "RabbitMQ",
    "PostgreSQL",
    "React",
    "Next.js",
    "portfólio desenvolvedor",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "/",
    siteName: profile.name,
    title,
    description,
    firstName: "Fabrício",
    lastName: "Longo Bucco",
    images: [{ url: profile.photo, alt: `Foto de ${profile.name}` }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [profile.photo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-gray-950 font-sans text-gray-100 antialiased">{children}</body>
    </html>
  );
}
