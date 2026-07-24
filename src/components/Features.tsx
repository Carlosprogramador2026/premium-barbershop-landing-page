import { ArrowUpRight, CalendarCheck, Flame, Gamepad2, Scissors, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { IMG } from "../data";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

type CardProps = {
  className?: string;
  children: ReactNode;
};

function BentoCard({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-pine-850 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/35 hover:shadow-[0_30px_70px_-30px_rgba(201,162,92,0.35)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardIndex({ n }: { n: string }) {
  return (
    <span className="font-display text-sm font-semibold italic text-gold-500/80" aria-hidden="true">
      {n}
    </span>
  );
}

export default function Features() {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-pine-900 py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(46% 34% at 12% 0%, rgba(201,162,92,0.1), transparent 70%), radial-gradient(40% 30% at 92% 100%, rgba(40,73,58,0.3), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            kicker="A experiência DeVCluB"
            title={
              <>
                Cada detalhe pensado para{" "}
                <em className="text-gold-grad not-italic">você voltar</em>
              </>
            }
            desc="Não é só cortar cabelo. É um padrão de atendimento que junta técnica de especialista, conforto de clube e o cuidado de quem sabe o valor de uma boa primeira impressão."
          />
          <Reveal delay={0.2} className="shrink-0">
            <a
              href="https://wa.me/5511988112216"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-6 py-3.5 text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-500/10"
            >
              Reservar uma cadeira
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Precisão milimétrica — card alto com imagem */}
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <BentoCard className="flex h-full min-h-[480px] flex-col justify-end">
              <img
                src={IMG.precision}
                alt="Acabamento de corte masculino na máquina, em close"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/55 to-pine-950/10"
                aria-hidden="true"
              />
              <div className="relative p-8 sm:p-10">
                <CardIndex n="01" />
                <h3 className="mt-3 font-display text-3xl font-semibold text-porcelain sm:text-4xl">
                  Precisão milimétrica, do contorno ao topo
                </h3>
                <p className="mt-4 max-w-lg text-porcelain/70">
                  Degradê alinhado, tesoura no ponto certo e acabamento na navalha. Cada corte
                  começa com um diagnóstico de formato de rosto e tipo de fio — porque o mesmo
                  corte não serve para todo mundo.
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
                  <Scissors className="h-4 w-4" aria-hidden="true" />
                  Especialistas com formação internacional
                </p>
              </div>
            </BentoCard>
          </Reveal>

          {/* Barboterapia */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <BentoCard className="flex min-h-[230px] flex-col justify-between p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                  <Flame className="h-5 w-5" aria-hidden="true" />
                </span>
                <CardIndex n="02" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-porcelain">
                  Barboterapia com toalha quente
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-porcelain/65">
                  Toalha quente, navalha afiada e balm calmante: o ritual que transforma a barba
                  em assinatura — e o atendimento em pausa de spa.
                </p>
              </div>
            </BentoCard>
          </Reveal>

          {/* Especialistas */}
          <Reveal delay={0.14} className="lg:col-span-5">
            <BentoCard className="relative flex min-h-[230px] flex-col justify-between overflow-hidden p-8">
              <img
                src={IMG.beard}
                alt=""
                aria-hidden="true"
                className="absolute -right-16 -top-10 h-56 w-56 rounded-full object-cover opacity-15 blur-[2px] transition-all duration-700 group-hover:opacity-25"
                loading="lazy"
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <CardIndex n="03" />
              </div>
              <div className="relative">
                <h3 className="font-display text-2xl font-semibold text-porcelain">
                  15 especialistas certificados
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-porcelain/65">
                  Time premiado na Barber Week e em formação contínua. Você escolhe o seu
                  barbeiro — e ele conhece seu histórico de corte.
                </p>
              </div>
            </BentoCard>
          </Reveal>

          {/* Dos 10 aos 60 */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <BentoCard className="flex min-h-[250px] items-stretch">
              <div className="relative w-2/5 overflow-hidden">
                <img
                  src={IMG.kids}
                  alt="Especialista cortando o cabelo de um jovem cliente"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-pine-850"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-7">
                <CardIndex n="04" />
                <h3 className="mt-2 font-display text-2xl font-semibold text-porcelain">
                  Dos 10 aos 60, todo mundo tem cadeira
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-porcelain/65">
                  Corte juvenil com paciência e estilo — e o clássico bem executado para quem já
                  viu algumas décadas passarem.
                </p>
              </div>
            </BentoCard>
          </Reveal>

          {/* Lounge */}
          <Reveal delay={0.16} className="lg:col-span-7">
            <BentoCard className="flex min-h-[250px] flex-col justify-end">
              <img
                src={IMG.lounge}
                alt="Lounge da DeVCluB com cadeiras de couro e iluminação quente"
                className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/60 to-pine-950/10"
                aria-hidden="true"
              />
              <div className="relative p-8">
                <div className="flex items-start justify-between gap-4">
                  <CardIndex n="05" />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-pine-950/60 px-3 py-1 text-[11px] font-semibold text-porcelain/75 backdrop-blur">
                    <Gamepad2 className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
                    videogame na espera
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-porcelain sm:text-3xl">
                  Lounge DeVCluB: café, chopp e boas conversas
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-porcelain/70">
                  Espera não existe aqui: espresso tirado na hora, chopp artesanal gelado e um
                  ambiente pensado para você chegar antes e sair depois, sem pressa.
                </p>
              </div>
            </BentoCard>
          </Reveal>

          {/* Pontualidade — faixa */}
          <Reveal delay={0.1} className="lg:col-span-12">
            <BentoCard className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div className="flex items-start gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-porcelain">
                    Hora marcada é hora cumprida
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-porcelain/65">
                    Agendamento digital com lembrete no WhatsApp, fila zero e tolerância de
                    cortesia. Seu tempo vale tanto quanto o seu corte.
                  </p>
                </div>
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
