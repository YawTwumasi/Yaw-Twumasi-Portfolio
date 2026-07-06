import { m } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/data/portfolio";
import { Section, SectionHeader } from "./Section";

type Item = {
  role?: string;
  degree?: string;
  company?: string;
  school?: string;
  period: string;
  points: string[];
};

function Timeline({ items, icon: Icon }: { items: Item[]; icon: typeof Briefcase }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-3 top-1 bottom-1 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
      {items.map((it, i) => (
        <m.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative mb-8"
        >
          <div className="absolute -left-8 top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)]">
            <Icon className="h-3 w-3" />
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              {it.period}
            </div>
            <div className="font-display text-lg font-semibold">{it.role ?? it.degree}</div>
            <div className="text-sm text-accent">{it.company ?? it.school}</div>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              {it.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        </m.div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Journey"
        title="Experience & education"
        desc="Where I've been learning and building."
      />
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-display text-xl font-semibold">Experience</h3>
          <Timeline items={experience} icon={Briefcase} />
        </div>
        <div>
          <h3 className="mb-4 font-display text-xl font-semibold">Education</h3>
          <Timeline items={education} icon={GraduationCap} />
        </div>
      </div>
    </Section>
  );
}
