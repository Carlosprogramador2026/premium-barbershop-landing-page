import { AnimatePresence, motion } from "framer-motion";
import { Check, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { PRODUCTS } from "../data";
import { Reveal, SectionHead, Stagger, SItem } from "./ui";

export default function Products() {
  const [bag, setBag] = useState<string[]>([]);
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    if (added[id]) return;
    setBag((b) => [...b, id]);
    setAdded((a) => ({ ...a, [id]: true }));
    window.setTimeout(() => setAdded((a) => ({ ...a, [id]: false })), 1800);
  };

  return (
    <section id="produtos" className="relative overflow-hidden bg-porcelain py-24 text-pine-900 lg:py-32">
      {/* brilhos ambientes sutis */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(42% 32% at 88% 8%, rgba(201,162,92,0.16), transparent 70%), radial-gradient(36% 30% at 0% 96%, rgba(192,111,60,0.1), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            tone="light"
            kicker="Linha DeVCluB Care"
            title={
              <>
                O acabamento do ritual,{" "}
                <em className="text-gold-grad not-italic">levado para casa</em>
              </>
            }
            desc="Fórmulas veganas, testadas dermatologicamente e aprovadas nas cadeiras da DeVCluB antes de chegarem à prateleira. Para manter o padrão entre uma visita e outra."
          />
          <Reveal delay={0.2} className="shrink-0">
            <span className="relative inline-flex items-center gap-2.5 rounded-full border border-pine-900/15 bg-white px-5 py-3 text-sm font-semibold text-pine-900 shadow-sm">
              <ShoppingBag className="h-4 w-4 text-gold-700" aria-hidden="true" />
              Sua sacola
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={bag.length}
                  className="grid h-6 min-w-6 place-items-center rounded-full bg-gradient-to-r from-gold-500 to-copper-400 px-1.5 text-xs font-bold text-white"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 22 }}
                >
                  {bag.length}
                </motion.span>
              </AnimatePresence>
            </span>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {PRODUCTS.map((p) => (
            <SItem key={p.id} className="h-full">
              <article className="group flex h-full flex-col rounded-[1.6rem] border border-pine-900/8 bg-white p-4 shadow-[0_20px_50px_-30px_rgba(10,19,14,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-gold-600/35 hover:shadow-[0_34px_70px_-30px_rgba(139,102,57,0.4)]">
                <div className="relative overflow-hidden rounded-t-[1.2rem] rounded-b-3xl">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-107 group-hover:-rotate-1"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-pine-950/75 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300 backdrop-blur">
                    DeVCluB Care
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                    {p.tag}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-pine-900">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-pine-700/75">{p.desc}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-bold text-pine-900">{p.price}</span>
                    <button
                      type="button"
                      onClick={() => toggle(p.id)}
                      className={
                        added[p.id]
                          ? "inline-flex items-center gap-1.5 rounded-full bg-pine-800 px-4 py-2.5 text-xs font-bold text-gold-200 transition-all duration-300"
                          : "btn-sheen inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-copper-400 px-4 py-2.5 text-xs font-bold text-white shadow-[0_10px_24px_-10px_rgba(171,130,71,0.8)] transition-all duration-300 hover:-translate-y-0.5"
                      }
                      aria-live="polite"
                    >
                      {added[p.id] ? (
                        <>
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          Na sacola
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                          Adicionar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            </SItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10 text-center text-sm text-pine-700/70">
          Retire na unidade ou peça junto com o seu próximo agendamento —{" "}
          <strong className="font-semibold text-pine-900">membros do Clube têm 15% off</strong> em toda a linha.
        </Reveal>
      </div>
    </section>
  );
}
