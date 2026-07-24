import { Crown, Sparkles } from "lucide-react";
import { SERVICES } from "../data";
import { Reveal, SectionHead } from "./ui";

const CLUB_PERKS = [
  "2 cortes + 2 barboterapias por mês",
  "Prioridade de agenda e fila zero",
  "Café ou chopp de cortesia em toda visita",
  "15% off em toda a linha DeVCluB Care",
  "Barba cortesia no mês do seu aniversário",
];

const CLUB_YOUNG_PERKS = [
  "2 cortes juvenis + sobrancelha por mês",
  "Espaço teen com videogame na espera",
  "Desconto especial em férias escolares",
];

export default function Pricing() {
  return (
    <section id="planos" className="relative overflow-hidden bg-pine-900 py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(48% 38% at 86% 12%, rgba(201,162,92,0.14), transparent 70%), radial-gradient(40% 34% at 4% 96%, rgba(40,73,58,0.34), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          align="center"
          kicker="Serviços & Clube"
          title={
            <>
              Preço justo,{" "}
              <em className="text-gold-grad not-italic">padrão de clube</em>
            </>
          }
          desc="Serviços avulsos quando você quiser — ou o Clube DeVCluB para quem levou o próprio visual a sério de vez."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Tabela da casa */}
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-[2rem] border border-white/8 bg-pine-850/80 p-8 sm:p-10">
              <div className="flex items-baseline justify-between gap-4 border-b border-gold-500/25 pb-5">
                <h3 className="font-display text-2xl font-semibold text-porcelain">
                  Tabela da casa
                </h3>
                <p className="text-xs uppercase tracking-[0.24em] text-porcelain/45">
                  serviços avulsos
                </p>
              </div>
              <ul className="mt-4 divide-y divide-white/6">
                {SERVICES.map((s) => (
                  <li
                    key={s.name}
                    className="group flex flex-wrap items-baseline gap-x-2 gap-y-1 rounded-xl px-2 py-4 transition-colors duration-300 hover:bg-white/4 sm:flex-nowrap"
                  >
                    <div className="min-w-0">
                      <p className="flex items-center gap-2.5 font-semibold text-porcelain">
                        {s.name}
                        {s.hot && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold-500 to-copper-400 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-pine-950">
                            <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
                            mais pedido
                          </span>
                        )}
                      </p>
                      <p className="mt-0.5 text-sm text-porcelain/55">{s.desc}</p>
                    </div>
                    <span className="leader" aria-hidden="true" />
                    <span className="shrink-0 font-display text-2xl font-semibold text-gold-300 transition-transform duration-300 group-hover:scale-110">
                      {s.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-porcelain/45">
                Pagamento via Pix, dinheiro ou cartão. Agendamento com prioridade pelo WhatsApp.
              </p>
            </div>
          </Reveal>

          {/* Planos do clube */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-gold-500/45 bg-gradient-to-b from-pine-800 via-pine-850 to-pine-900 p-8 shadow-[0_40px_90px_-40px_rgba(201,162,92,0.45)] sm:p-9">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl"
                  aria-hidden="true"
                />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-pine-950">
                  <Crown className="h-3 w-3" aria-hidden="true" />
                  Mais vantajoso
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold text-porcelain">
                  Clube DeVCluB
                </h3>
                <p className="mt-2 text-sm text-porcelain/60">
                  Para quem quer estar sempre impecável, sem pensar em agenda.
                </p>
                <p className="mt-6 flex items-end gap-3">
                  <span className="text-sm text-porcelain/45 line-through">R$ 236</span>
                  <span className="font-display text-6xl font-bold tracking-tight text-gold-grad">
                    R$ 189
                  </span>
                  <span className="pb-2 text-sm text-porcelain/55">/mês</span>
                </p>
                <ul className="mt-7 space-y-3">
                  {CLUB_PERKS.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-porcelain/80">
                      <span
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/20 text-[10px] font-bold text-gold-300"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://sistema-de-agendamento-devclub.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sheen mt-8 block rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-6 py-4 text-center text-sm font-bold text-pine-950 shadow-[0_16px_40px_-12px_rgba(201,162,92,0.7)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Entrar para o Clube
                </a>
                <p className="mt-3.5 text-center text-[11px] text-porcelain/45">
                  Sem fidelidade · cancele quando quiser, em um clique
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-[2rem] border border-white/10 bg-pine-850/70 p-8 transition-colors duration-500 hover:border-gold-500/30">
                <h3 className="font-display text-2xl font-semibold text-porcelain">
                  Clube Jovem{" "}
                  <span className="text-base font-sans font-medium text-gold-400">10–17 anos</span>
                </h3>
                <p className="mt-2 text-sm text-porcelain/60">
                  O primeiro clube de estilo de quem está começando.
                </p>
                <p className="mt-5 flex items-end gap-2">
                  <span className="font-display text-5xl font-bold tracking-tight text-porcelain">
                    R$ 119
                  </span>
                  <span className="pb-1.5 text-sm text-porcelain/55">/mês</span>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {CLUB_YOUNG_PERKS.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-porcelain/75">
                      <span
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/15 text-[10px] font-bold text-gold-300"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://sistema-de-agendamento-devclub.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 block rounded-full border border-gold-500/40 px-6 py-3.5 text-center text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-500/10"
                >
                  Assinar o Clube Jovem
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
