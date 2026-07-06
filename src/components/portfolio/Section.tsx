import { m } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </m.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
