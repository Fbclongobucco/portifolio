import { Header } from "@/src/components/header";
import { Hero } from "@/src/components/hero";
import { About } from "@/src/components/about";
import { Skills } from "@/src/components/skills";
import { Contact } from "@/src/components/contact";
import { Footer } from "@/src/components/footer";
import { practices, profile, stack } from "@/src/data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.headline,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.photo}`,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github],
  knowsAbout: [...stack.flatMap((group) => group.items.map((tech) => tech.name)), ...practices],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Estácio de Sá",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
