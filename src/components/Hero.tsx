import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Scissors, Star } from "lucide-react";
import { IMG } from "../data";
import { EASE, Reveal } from "./ui";

const AVATARS = ["RM", "DF", "TA", "HS"];

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 lg:pb-28">
      {/* Fundo ambiente em camadas */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(52% 44% at 74% 12%, rgba(201,162,92,0.16), transparent 70%), radial-gradient(40% 38% at 8% 82%, rgba(40,73,58,0.35), transparent 70%), radial-gradient(30% 26% at 90% 80%, rgba(192,111,60,0.12), transparent 70%)",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(201,162,92,0.7) 18%, transparent 42%, rgba(192,111,60,0.5) 68%, transparent 88%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Coluna de texto */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 bg-gold-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              Agenda aberta — hoje até 20h
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-7 font-display text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-balance text-porcelain sm:text-6xl lg:text-[4.6rem]">
              Precisão de
              <br className="hidden sm:block" /> especialista.{" "}
              <em className="text-gold-grad not-italic">
                Conforto
              </em>{" "}
              <em className="font-light italic text-porcelain/85">de clube.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-porcelain/70">
              Atendimento e conforto com os <strong className="font-semibold text-porcelain">melhores especialistas do mercado</strong>.
              Dos 10 aos 60 anos, todo homem tem um lugar na DeVCluB: corte sob medida,
              barboterapia com toalha quente e um lounge feito para você desacelerar.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5511988112216"
                target="_blank"
                rel="noreferrer"
                className="btn-sheen group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-7 py-4 text-base font-semibold text-pine-950 shadow-[0_18px_50px_-12px_rgba(201,162,92,0.65)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Agendar meu horário
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#planos"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-base font-medium text-porcelain/85 transition-all duration-300 hover:border-gold-400/50 hover:bg-white/5 hover:text-gold-200"
              >
                Serviços &amp; preços
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex -space-x-3">
                {AVATARS.map((a, i) => (
                  <span
                    key={a}
                    className="grid h-10 w-10 place-items-center rounded-full border-2 border-pine-950 text-[11px] font-bold text-pine-950"
                    style={{
                      background: `linear-gradient(135deg, ${["#f4e2b8", "#dcbc79", "#e6a878", "#c9a25c"][i]}, ${["#dcbc79", "#ab8247", "#c06f3c", "#8b6639"][i]})`,
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
              <div className="text-sm leading-snug">
                <p className="flex items-center gap-1.5 font-semibold text-porcelain">
                  <span className="flex" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </span>
                  4,9 no Google
                </p>
                <p className="text-porcelain/60">2.400+ avaliações verificadas</p>
              </div>
              <span className="hidden h-9 w-px bg-white/12 sm:block" aria-hidden="true" />
              <p className="text-sm text-porcelain/60">
                <span className="font-display text-lg font-semibold text-gold-300">98%</span>{" "}
                dos clientes voltam no mês seguinte
              </p>
            </div>
          </Reveal>
        </div>

        {/* Composição visual */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto h-[540px] max-w-md sm:h-[620px] lg:max-w-none">
            {/* Poste de barbeiro animado */}
            <div className="absolute bottom-6 left-0 top-10 z-20 w-8 sm:w-9" aria-hidden="true">
              <div className="absolute -top-2 left-1/2 h-3 w-11 -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-300 to-gold-600 shadow-lg" />
              <div className="pole h-full w-full rounded-full border border-gold-500/30 shadow-[0_0_40px_rgba(201,162,92,0.25)]" />
              <div className="absolute -bottom-2 left-1/2 h-3 w-11 -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-300 to-gold-600 shadow-lg" />
            </div>

            {/* Imagem em arco */}
            <motion.figure
              className="absolute inset-y-0 left-14 right-0 overflow-hidden rounded-t-[13rem] rounded-b-[1.8rem] border border-gold-500/25 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] sm:left-16"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
            >
              <img
                src={IMG.hero}
                alt="Especialista DeVCluB finalizando corte masculino com precisão"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-transparent to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-xs text-porcelain/80">
                <span>Cadeira 03 · ritual da navalha</span>
                <span className="rounded-full border border-white/15 bg-pine-950/50 px-2.5 py-1 backdrop-blur">
                  Unidade Moema
                </span>
              </figcaption>
            </motion.figure>

            {/* Selo circular giratório */}
            <motion.div
              className="absolute -top-7 right-2 z-30 grid h-28 w-28 place-items-center rounded-full border border-gold-500/30 bg-pine-950/70 backdrop-blur-md sm:right-6"
              initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.7 }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                    fill="none"
                  />
                </defs>
                <text className="fill-gold-300" style={{ fontSize: "8.4px", letterSpacing: "2.6px" }}>
                  <textPath href="#circlePath">BARBEARIA DEVCLUB • DESDE 2016 •</textPath>
                </text>
              </svg>
              <Scissors className="h-6 w-6 text-gold-400" />
            </motion.div>

            {/* Card de avaliação */}
            <motion.div
              className="glass float-y absolute left-0 top-24 z-30 w-44 rounded-2xl p-4 shadow-2xl sm:-left-4"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.85 }}
            >
              <div className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="mt-2 font-display text-2xl font-bold text-porcelain">4,9/5</p>
              <p className="text-[11px] leading-tight text-porcelain/60">
                nota média em 2.400+ avaliações do Google
              </p>
            </motion.div>

            {/* Card de próximo horário */}
            <motion.div
              className="glass float-y-late absolute bottom-10 right-0 z-30 w-56 rounded-2xl p-4 shadow-2xl sm:-right-3"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 1 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300">
                Próximo horário livre
              </p>
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="rounded-full border border-gold-500/35 bg-gold-500/10 px-3 py-1.5 text-sm font-semibold text-gold-200">
                  hoje · 17h40
                </span>
                <a
                  href="https://wa.me/5511988112216"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-porcelain/75 underline decoration-gold-400/60 underline-offset-4 transition-colors hover:text-gold-200"
                >
                  reservar →
                </a>
              </div>
              <p className="mt-2.5 flex items-center gap-1.5 text-[11px] text-porcelain/55">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                3 especialistas disponíveis agora
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#experiencia"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] uppercase tracking-[0.3em] text-porcelain/40 transition-colors hover:text-gold-300 lg:flex"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Rolar para a seção de experiência"
      >
        role para explorar
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
