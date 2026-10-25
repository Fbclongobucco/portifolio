import { FaEnvelope, FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";
import { profile } from "@/src/data/profile";
import { SectionTitle } from "@/src/components/section-title";

const channels = [
  { icon: FaWhatsapp, label: "WhatsApp", value: profile.whatsapp.label, href: profile.whatsapp.href, external: true },
  { icon: FaPhone, label: "Telefone", value: profile.phone.label, href: profile.phone.href, external: false },
  { icon: FaEnvelope, label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { icon: FaGithub, label: "GitHub", value: `github.com/${profile.githubHandle}`, href: profile.github, external: true },
];

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <SectionTitle index="03" title="Contato" />
      <div className="reveal mt-10 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 text-center sm:p-12">
        <h3 className="text-2xl font-bold text-white sm:text-3xl">Vamos conversar?</h3>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Aberto a oportunidades como desenvolvedor full stack.
        </p>
        <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-gray-950/60 p-4 transition hover:-translate-y-0.5 hover:border-emerald-400"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition group-hover:bg-emerald-500 group-hover:text-gray-950">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-gray-500">{channel.label}</span>
                    <span className="block truncate font-medium text-white">{channel.value}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
