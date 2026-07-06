import { m } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { Section, SectionHeader } from "./Section";

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/30">
      <SectionHeader
        eyebrow="Skills"
        title="A stack that ships pixels & products"
        desc="Where code meets craft."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <m.div
            key={group.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="glass card-lift shine-border group rounded-2xl p-6"
          >
            <h3 className="mb-4 font-display text-lg font-semibold transition-colors group-hover:text-primary">
              {group.name}
            </h3>
            <ul className="space-y-4">
              {group.items.map((s, i) => (
                <li key={s.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <m.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
