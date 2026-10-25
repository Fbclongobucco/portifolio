import type { CSSProperties } from "react";
import { practices, stack } from "@/src/data/profile";
import { SectionTitle } from "@/src/components/section-title";

const allTechs = stack.flatMap((group) => group.items);

function Marquee() {
  return (
    <div className="group relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
        {[...allTechs, ...allTechs].map((tech, i) => {
          const Icon = tech.icon;
          return (
            <li key={`${tech.name}-${i}`} className="flex items-center gap-3 text-gray-400" aria-hidden={i >= allTechs.length}>
              <Icon className="h-7 w-7" style={{ color: tech.color }} />
              <span className="font-mono text-sm whitespace-nowrap">{tech.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-20 py-20">
      <Marquee />

      <div className="mx-auto mt-20 max-w-6xl px-4">
        <SectionTitle index="01" title="Stack" />
        <p className="reveal mt-4 max-w-2xl text-gray-400">
          Tecnologias que uso no dia a dia para construir APIs, microsserviços e interfaces web.
        </p>

        <div className="mt-12 space-y-12">
          {stack.map((group) => (
            <div key={group.group} className="reveal">
              <h3 className="font-mono text-sm uppercase tracking-wider text-emerald-400">
                {group.group}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {group.items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <li
                      key={tech.name}
                      style={{ "--brand": tech.color } as CSSProperties}
                      className="group flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-8 transition duration-300 hover:-translate-y-1.5 hover:border-(--brand) hover:bg-white/[0.08] hover:shadow-[0_10px_40px_-10px_var(--brand)]"
                    >
                      <Icon
                        className="h-14 w-14 transition duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{ color: tech.color }}
                        aria-hidden
                      />
                      <span className="text-center font-medium text-gray-200">{tech.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="reveal">
            <h3 className="font-mono text-sm uppercase tracking-wider text-emerald-400">
              Arquitetura e práticas
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {practices.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 transition hover:bg-emerald-500/20"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
