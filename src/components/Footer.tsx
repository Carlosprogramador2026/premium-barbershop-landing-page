import { Check, MapPin, MessageCircle, Phone } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
import { useState, type FormEvent } from "react";
import { HOURS, NAV_LINKS, WHATSAPP } from "../data";
import { Logo, Reveal } from "./ui";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-pine-950">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(46% 40% at 50% 110%, rgba(201,162,92,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        {/* Lista VIP */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-gold-500/25 bg-gradient-to-r from-pine-850 via-pine-850/70 to-pine-900 p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-lg">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                Lista VIP DeVCluB
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-porcelain sm:text-3xl">
                Cortesias, pré-lançamentos da linha e horários exclusivos
              </h3>
              <p className="mt-2 text-sm text-porcelain/60">
                Uma mensagem por mês, no máximo. Direto no seu e-mail, sem spam.
              </p>
            </div>
            {subscribed ? (
              <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 text-sm font-semibold text-emerald-300" role="status">
                <Check className="h-4.5 w-4.5" aria-hidden="true" />
                Você está na lista. Bem-vindo ao clube!
              </p>
            ) : (
              <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="vip-email" className="sr-only">
                  Seu melhor e-mail
                </label>
                <input
                  id="vip-email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full flex-1 rounded-full border border-white/12 bg-pine-950/80 px-5 py-3.5 text-sm text-porcelain placeholder:text-porcelain/35 transition-all duration-300 focus:border-gold-400/70 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
                />
                <button
                  type="submit"
                  className="btn-sheen shrink-0 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-6 py-3.5 text-sm font-bold text-pine-950 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Entrar na lista
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* Colunas */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-porcelain/55">
              Atendimento e conforto com os melhores especialistas do mercado. Precisão de
              especialista, conforto de clube — dos 10 aos 60 anos.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: InstagramIcon, label: "Instagram da DeVCluB", href: "#topo" },
                { icon: MessageCircle, label: `WhatsApp ${WHATSAPP}`, href: "https://wa.me/5511988112216" },
                { icon: YoutubeIcon, label: "Canal da DeVCluB no YouTube", href: "#topo" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-porcelain/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
                  aria-label={label}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Links do rodapé" className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-400">
              Navegue
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-porcelain/60 transition-colors duration-300 hover:text-gold-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-400">
              Horários
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {HOURS.map((h) => (
                <li key={h.d} className="flex items-baseline gap-3">
                  <span className="text-porcelain/60">{h.d}</span>
                  <span className="leader" aria-hidden="true" />
                  <span className="font-semibold text-porcelain">{h.h}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-2 text-sm text-porcelain/55">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              Rua Gaivota, 1216 — Moema, São Paulo/SP
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-400">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5511988112216"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-porcelain/60 transition-colors hover:text-gold-200"
                >
                  <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
                  {WHATSAPP}
                </a>
              </li>
              <li className="text-porcelain/60">clube@devclub.com.br</li>
              <li className="text-porcelain/60">Estacionamento conveniado ao lado</li>
              <li className="text-porcelain/60">Bicicletário coberto na entrada</li>
            </ul>
          </div>
        </div>

        {/* Marca d'água */}
        <p
          className="text-stroke-gold pointer-events-none select-none text-center font-display text-[22vw] font-bold leading-[0.78] tracking-tight lg:text-[17rem]"
          aria-hidden="true"
        >
          DeVCluB
        </p>
      </div>

      <div className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-porcelain/40 sm:flex-row sm:px-8">
          <p>© 2026 Barbearia DeVCluB · Todos os direitos reservados</p>
          <p>Feito com navalha, precisão e um bom café.</p>
          <div className="flex gap-5">
            <a href="#topo" className="transition-colors hover:text-gold-300">
              Privacidade
            </a>
            <a href="#topo" className="transition-colors hover:text-gold-300">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
