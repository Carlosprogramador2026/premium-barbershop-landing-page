import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { useState } from "react";
import { FAQS, WHATSAPP } from "../data";
import { EASE, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-porcelain py-24 text-pine-900 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(40% 30% at 92% 4%, rgba(201,162,92,0.15), transparent 70%), radial-gradient(36% 28% at 2% 98%, rgba(40,73,58,0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHead
              tone="light"
              kicker="Perguntas frequentes"
              title={
                <>
                  Ficou alguma{" "}
                  <em className="text-gold-grad not-italic">dúvida?</em>
                </>
              }
              desc="Separamos o que mais ouvimos no balcão. Se a sua pergunta não estiver aqui, a resposta chega em minutos pelo WhatsApp."
            />

            <Reveal delay={0.2}>
              <div className="mt-9 overflow-hidden rounded-[1.6rem] border border-pine-900/10 bg-pine-950 p-7 text-porcelain shadow-[0_30px_70px_-40px_rgba(10,19,14,0.8)]">
                <MessageCircle className="h-7 w-7 text-gold-400" aria-hidden="true" />
                <p className="mt-4 font-display text-xl font-semibold">
                  Resposta humana, em até 5 minutos
                </p>
                <p className="mt-2 text-sm text-porcelain/60">
                  Horário comercial e aos sábados. Sem robô, sem espera: quem responde é o
                  time da recepção.
                </p>
                <a
                  href="https://wa.me/5511988112216"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-sheen mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-5 py-3 text-sm font-semibold text-pine-950 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Chamar no WhatsApp {WHATSAPP}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-4">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div
                    className={cn(
                      "rounded-3xl border bg-white transition-all duration-500",
                      isOpen
                        ? "border-gold-600/45 shadow-[0_24px_60px_-30px_rgba(139,102,57,0.45)]"
                        : "border-pine-900/10 hover:border-gold-600/30"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-5 rounded-3xl px-6 py-5 text-left sm:px-8"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="hidden font-display text-sm font-semibold italic text-gold-700 sm:inline">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg font-semibold text-pine-900 sm:text-xl">
                          {f.q}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                          isOpen
                            ? "rotate-45 border-gold-600 bg-gold-500/15 text-gold-700"
                            : "border-pine-900/15 text-pine-700"
                        )}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-[15px] leading-relaxed text-pine-700/85 sm:px-8 sm:pl-[4.25rem]">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
