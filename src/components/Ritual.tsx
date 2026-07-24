import { Check, Coffee, Flame, ScanFace, Scissors } from "lucide-react";
import { IMG } from "../data";
import { Reveal, SectionHead, Stagger, SItem } from "./ui";

const STEPS = [
  {
    n: "01",
    icon: Coffee,
    title: "Recepção de clube",
    text: "Você é recebido pelo nome e escolhe entre espresso, chopp artesanal ou água com gás. Nada de fila: sua cadeira já está pronta e o seu barbeiro, avisado.",
  },
  {
    n: "02",
    icon: ScanFace,
    title: "Diagnóstico de estilo",
    text: "Antes do primeiro corte de tesoura, o especialista avalia formato do rosto, tipo de fio, rotina e o que você quer projetar. O corte é desenhado em você — não em um modelo.",
  },
  {
    n: "03",
    icon: Scissors,
    title: "Corte & acabamento na navalha",
    text: "Máquina e tesoura em precisão milimétrica, contornos na navalha e sobrancelha no ponto certo. Cada movimento explicado, nenhum detalhe no improviso.",
  },
  {
    n: "04",
    icon: Flame,
    title: "Ritual da toalha quente",
    text: "Toalha quente, hidratação, balm e finalização com a linha DeVCluB Care. Você sai alinhado, perfumado e pronto para qualquer ocasião — do trabalho ao casamento.",
  },
];

const PERKS = [
  "Hora marcada é hora cumprida — com lembrete no WhatsApp",
  "Café espresso ou chopp de cortesia em toda visita",
  "Produtos premium inclusos em cada serviço",
  "Ambiente climatizado, trilha certa e videogame na espera",
];

export default function Ritual() {
  return (
    <section id="ritual" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 40% at 100% 0%, rgba(201,162,92,0.12), transparent 70%), radial-gradient(44% 36% at 0% 100%, rgba(40,73,58,0.32), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        {/* Coluna fixa */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHead
              kicker="Benefícios & o ritual"
              title={
                <>
                  Mais que uma barbearia.{" "}
                  <em className="text-gold-grad not-italic">Um clube.</em>
                </>
              }
              desc="Do café de boas-vindas à toalha quente, cada etapa foi desenhada para que a sua visita seja o melhor momento do seu dia — não mais uma tarefa na agenda."
            />

            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3.5">
                {PERKS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] text-porcelain/75">
                    <span
                      className="mt-0.5 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full border border-gold-500/40 bg-gold-500/10"
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3 text-gold-300" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <figure className="relative mt-10 hidden overflow-hidden rounded-t-[9rem] rounded-b-3xl border border-gold-500/25 lg:block">
                <img
                  src={IMG.razor}
                  alt="Cliente relaxando durante o barbear com navalha na DeVCluB"
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="glass-strong absolute inset-x-4 bottom-4 rounded-2xl px-4 py-3 text-xs text-porcelain/80">
                  “A toalha quente deveria ser obrigatória por lei.” — cliente da cadeira 07
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Passos do ritual */}
        <div className="lg:col-span-7">
          <Stagger className="relative space-y-5" gap={0.14}>
            <span
              className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent sm:block"
              aria-hidden="true"
            />
            {STEPS.map((s) => (
              <SItem key={s.n}>
                <div className="group relative flex gap-5 rounded-[1.6rem] border border-white/8 bg-pine-850/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/35 hover:bg-pine-850 sm:gap-7 sm:p-8">
                  <div className="relative hidden shrink-0 sm:block" aria-hidden="true">
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-gold-500/35 bg-pine-950 text-gold-300 shadow-[0_0_30px_-8px_rgba(201,162,92,0.5)] transition-transform duration-500 group-hover:scale-110">
                      <s.icon className="h-5.5 w-5.5" />
                    </span>
                  </div>
                  <div>
                    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gold-400">
                      <span className="font-display text-lg italic tracking-normal">{s.n}</span>
                      <span className="h-px w-8 bg-gold-400/40" aria-hidden="true" />
                      passo
                    </p>
                    <h3 className="mt-2.5 flex items-center gap-2.5 font-display text-2xl font-semibold text-porcelain">
                      <s.icon className="h-5 w-5 text-gold-400 sm:hidden" aria-hidden="true" />
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-porcelain/65">{s.text}</p>
                  </div>
                </div>
              </SItem>
            ))}
          </Stagger>

          <Reveal delay={0.2} className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-5 rounded-[1.6rem] border border-gold-500/25 bg-gradient-to-r from-gold-500/12 via-gold-500/6 to-transparent p-6 sm:p-7">
              <p className="max-w-md font-display text-xl font-semibold text-porcelain">
                O ritual completo sai por{" "}
                <span className="text-gold-grad">R$ 149</span> — e membros do Clube não pagam
                nada a mais por ele.
              </p>
              <a
                href="#planos"
                className="btn-sheen inline-flex items-center rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-6 py-3.5 text-sm font-semibold text-pine-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Conhecer o Clube
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
