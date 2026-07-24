import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP } from "../data";
import { EASE, Logo } from "./ui";
import { cn } from "../utils/cn";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barra de progresso de leitura */}
      <motion.div
        className="origin-left bg-gradient-to-r from-gold-600 via-gold-400 to-copper-400"
        style={{ scaleX: progress, height: 3 }}
        aria-hidden="true"
      />

      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-500 sm:px-8",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 -z-10 border-b transition-all duration-500",
            scrolled
              ? "border-white/8 bg-pine-950/75 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
          aria-hidden="true"
        />

        <Logo />

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-porcelain/75 transition-colors duration-300 hover:text-porcelain"
            >
              {l.label}
              <span
                className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-gold-400 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/5511988112216`}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 w-10 place-items-center rounded-full border border-white/12 text-porcelain/80 transition-all duration-300 hover:border-gold-400/60 hover:text-gold-300 sm:grid"
            aria-label={`Chamar no WhatsApp ${WHATSAPP}`}
          >
            <MessageCircle className="h-4.5 w-4.5" />
          </a>
          <a
            href="https://sistema-de-agendamento-devclub.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="btn-sheen hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-5 py-2.5 text-sm font-semibold text-pine-950 shadow-[0_10px_30px_-10px_rgba(201,162,92,0.8)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Agendar horário
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-porcelain transition-colors hover:border-gold-400/60 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="glass-strong fixed inset-0 top-[68px] z-40 flex flex-col justify-between overflow-y-auto px-6 pb-10 pt-8 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 rounded-2xl px-3 py-4 font-display text-3xl font-semibold text-porcelain transition-colors hover:text-gold-300"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: EASE }}
                >
                  <span className="text-xs font-sans font-semibold tracking-widest text-gold-500">
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="mt-10 space-y-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
            >
              <a
                href="https://sistema-de-agendamento-devclub.vercel.app"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-sheen block rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-6 py-4 text-center text-base font-semibold text-pine-950"
              >
                Agendar horário
              </a>
              <p className="text-center text-sm text-porcelain/60">
                WhatsApp {WHATSAPP} · Ter–Sáb
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
