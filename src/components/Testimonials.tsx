import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { Marquee, Reveal, SectionHead } from "./ui";

const GRADS = [
  ["#f4e2b8", "#dcbc79"],
  ["#e6a878", "#c06f3c"],
  ["#dcbc79", "#ab8247"],
  ["#c9a25c", "#8b6639"],
];

function TestimonialCard({
  t,
  i,
}: {
  t: (typeof TESTIMONIALS)[number];
  i: number;
}) {
  const initials = t.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  const [g1, g2] = GRADS[i % GRADS.length];

  return (
    <figure className="mx-3 w-[320px] shrink-0 rounded-3xl border border-pine-900/10 bg-white p-6 shadow-[0_24px_60px_-34px_rgba(10,19,14,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-600/40 hover:shadow-[0_34px_70px_-30px_rgba(139,102,57,0.45)] sm:w-[400px]">
      <div className="flex items-center justify-between">
        <span className="flex gap-0.5" aria-label="Avaliação: 5 de 5 estrelas">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" aria-hidden="true" />
          ))}
        </span>
        <Quote className="h-5 w-5 text-gold-600/30" aria-hidden="true" />
      </div>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-pine-800">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3.5 border-t border-pine-900/8 pt-5">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-xs font-bold text-pine-950"
          style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
          aria-hidden="true"
        >
          {initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-pine-900">{t.name}</p>
          <p className="text-xs text-pine-700/70">{t.age}</p>
        </div>
        <span className="ml-auto shrink-0 rounded-full border border-gold-600/30 bg-gold-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-700">
          {t.tag}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const rowA = TESTIMONIALS.slice(0, 4);
  const rowB = TESTIMONIALS.slice(4);

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-mist py-24 text-pine-900 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(40% 30% at 8% 6%, rgba(201,162,92,0.14), transparent 70%), radial-gradient(36% 30% at 96% 90%, rgba(192,111,60,0.1), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          tone="light"
          align="center"
          kicker="Depoimentos"
          title={
            <>
              Quem senta na cadeira,{" "}
              <em className="text-gold-grad not-italic">não troca</em>
            </>
          }
          desc="Histórias reais de clientes dos 10 aos 60 anos — porque excelência não tem idade, tem método."
        />

        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pine-900/12 bg-white px-5 py-2.5 text-sm font-semibold text-pine-900 shadow-sm">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
              ))}
            </span>
            4,9/5 · 2.400+ avaliações no Google
          </span>
        </Reveal>
      </div>

      <div className="relative mt-14 space-y-6">
        <Marquee duration={52} label="Depoimentos de clientes da DeVCluB, primeira parte">
          {rowA.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </Marquee>
        <Marquee duration={58} reverse label="Depoimentos de clientes da DeVCluB, segunda parte">
          {rowB.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i + 2} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
