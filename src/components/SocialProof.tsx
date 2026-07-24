import { Award, BadgeCheck, Scissors, Star } from "lucide-react";
import { STATS, TICKER } from "../data";
import { CountUp, Marquee, Reveal, Stagger, SItem } from "./ui";

export default function SocialProof() {
  return (
    <section className="relative" aria-label="Prova social">
      {/* Ticker de serviços */}
      <div className="relative -rotate-1 border-y border-gold-600/40 bg-gradient-to-r from-gold-600 via-gold-500 to-copper-400 py-3.5 shadow-[0_20px_60px_-20px_rgba(201,162,92,0.45)]">
        <Marquee duration={26} label="Serviços oferecidos pela DeVCluB">
          {TICKER.map((item) => (
            <span
              key={item}
              className="flex items-center gap-5 pr-5 text-sm font-bold uppercase tracking-[0.26em] text-pine-950"
            >
              {item}
              <Scissors className="h-4 w-4 opacity-70" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Números da casa */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4" gap={0.12}>
          {STATS.map((s) => (
            <SItem key={s.label} className="relative border-l border-white/10 pl-6">
              <p className="font-display text-5xl font-semibold tracking-tight text-porcelain sm:text-6xl">
                <CountUp end={s.end} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm leading-snug text-porcelain/55">{s.label}</p>
              <span
                className="absolute -left-px top-0 h-8 w-px bg-gold-400"
                aria-hidden="true"
              />
            </SItem>
          ))}
        </Stagger>

        {/* Selos de credibilidade */}
        <Reveal delay={0.15} className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-semibold text-porcelain/75">
            <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" aria-hidden="true" />
            4,9/5 · avaliações verificadas no Google
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-semibold text-porcelain/75">
            <Award className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
            Prêmio Navalha de Ouro 2025 — melhor atendimento SP
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-semibold text-porcelain/75">
            <BadgeCheck className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
            9 em cada 10 clientes indicam a DeVCluB
          </span>
        </Reveal>
      </div>
    </section>
  );
}
