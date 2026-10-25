import { about, highlights } from "@/src/data/profile";
import { SectionTitle } from "@/src/components/section-title";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <SectionTitle index="02" title="Sobre mim" />
      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <div className="reveal space-y-4 text-lg leading-relaxed text-gray-300">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="reveal rounded-lg border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-500/50"
            >
              <h3 className="font-semibold text-emerald-400">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
