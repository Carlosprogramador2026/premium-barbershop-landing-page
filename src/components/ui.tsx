import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------- Reveal: fade + rise + blur on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Stagger: parent/child choreography ---------- */
export function Stagger({
  children,
  className,
  gap = 0.1,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function SItem({
  children,
  className,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.9, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- CountUp: animated number ---------- */
export function CountUp({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
  className,
}: {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(end * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toFixed(decimals).replace(".", ",")}
      {suffix}
    </span>
  );
}

/* ---------- Marquee: infinite strip, pauses on hover ---------- */
export function Marquee({
  children,
  duration = 36,
  reverse = false,
  className,
  label,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn("marquee", reverse && "marquee-rev", className)}
      style={{ "--dur": `${duration}s` } as CSSProperties}
      {...(label ? { role: "region", "aria-label": label } : { "aria-hidden": true })}
    >
      <div className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------- SectionHead: kicker + display title ---------- */
export function SectionHead({
  kicker,
  title,
  desc,
  tone = "dark",
  align = "left",
  className,
}: {
  kicker: string;
  title: ReactNode;
  desc?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const light = tone === "light";
  const centered = align === "center";
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <Reveal>
        <p
          className={cn(
            "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em]",
            light ? "text-gold-700" : "text-gold-400",
            centered && "justify-center"
          )}
        >
          <span
            className={cn("h-px w-8", light ? "bg-gold-700/60" : "bg-gold-400/60")}
            aria-hidden="true"
          />
          {kicker}
          {centered && (
            <span
              className={cn("h-px w-8", light ? "bg-gold-700/60" : "bg-gold-400/60")}
              aria-hidden="true"
            />
          )}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]",
            light ? "text-pine-900" : "text-porcelain"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              light ? "text-pine-700/85" : "text-porcelain/65"
            )}
          >
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Logo ---------- */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#topo"
      className="group flex items-center gap-3 rounded-lg"
      aria-label="Barbearia DeVCluB — voltar ao topo"
    >
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-[0_8px_24px_-6px_rgba(201,162,92,0.55)] transition-transform duration-500 group-hover:rotate-[-8deg]">
        <svg
          viewBox="0 0 24 24"
          className="h-5.5 w-5.5 text-pine-950"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M20 4 8.12 15.88" />
          <path d="M14.47 14.48 20 20" />
          <path d="M8.12 8.12 12 12" />
        </svg>
        <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[9px] font-semibold uppercase tracking-[0.42em] text-gold-400">
            Barbearia
          </span>
          <span className="mt-1 block font-display text-xl font-bold tracking-tight text-porcelain">
            DeVCluB
          </span>
        </span>
      )}
    </a>
  );
}
