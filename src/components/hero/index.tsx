import Image from "next/image";
import { featuredStack, profile, stack } from "@/src/data/profile";

const orbit = stack
  .flatMap((group) => group.items)
  .filter((tech) => featuredStack.includes(tech.name));

export function Hero() {
  return (
    <section id="inicio" className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-4 py-20 md:flex-row md:py-32">
      <div className="flex-1">
        <p className="animate-fade-up font-mono text-sm text-emerald-400">
          Olá, eu sou<span className="animate-blink">_</span>
        </p>
        <h1 className="mt-3 animate-fade-up text-4xl font-bold tracking-tight text-white [animation-delay:150ms] sm:text-6xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 animate-fade-up bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-2xl font-semibold text-transparent [animation-delay:300ms] sm:text-3xl">
          {profile.role}
        </h2>
        <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-gray-300 [animation-delay:450ms]">
          {profile.headline}
        </p>
        <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:600ms]">
          <a
            href="#stack"
            className="rounded-md bg-emerald-500 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Ver stack
          </a>
          <a
            href="#contato"
            className="rounded-md border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-400"
          >
            Entrar em contato
          </a>
        </div>
      </div>

      <div className="relative h-72 w-72 shrink-0 animate-fade-up [animation-delay:300ms] sm:h-96 sm:w-96">
        <div className="absolute inset-12 animate-glow rounded-full bg-emerald-500/30 blur-3xl" aria-hidden />
        <div className="absolute inset-0 rounded-full border border-dashed border-white/10" aria-hidden />

        <ul className="absolute inset-0 animate-orbit" aria-label="Principais tecnologias">
          {orbit.map((tech, i) => {
            const angle = (i / orbit.length) * 2 * Math.PI;
            const Icon = tech.icon;
            return (
              <li
                key={tech.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${(50 + 50 * Math.cos(angle)).toFixed(2)}%`,
                  top: `${(50 + 50 * Math.sin(angle)).toFixed(2)}%`,
                }}
              >
                <div className="animate-orbit-reverse">
                  <span
                    title={tech.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gray-900 shadow-lg sm:h-14 sm:w-14"
                  >
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: tech.color }} aria-label={tech.name} />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <Image
          src="/images/foto-perfil.jpg"
          alt={`Foto de ${profile.name}`}
          width={260}
          height={260}
          preload
          className="absolute inset-0 m-auto h-44 w-44 animate-float rounded-full border-4 border-emerald-500 object-cover sm:h-60 sm:w-60"
        />
      </div>
    </section>
  );
}
