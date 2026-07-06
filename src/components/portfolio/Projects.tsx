import { m } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section, SectionHeader } from "./Section";

export function Projects() {
  const visible = projects.filter((p) => p.category === "Web App");

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Projects · Web App"
        title="Selected work"
        desc="Real products built with real users in mind."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p, i) => (
          <m.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group card-lift shine-border relative overflow-hidden rounded-3xl border border-border/60 bg-card ${
              p.featured ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              {p.featured && (
                <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Sparkles className="h-3.5 w-3.5" /> Featured
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-transform duration-500 group-hover:-translate-y-1">
                <div className="text-xs uppercase tracking-widest opacity-80">{p.category}</div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
                <p className="mt-1 max-w-lg text-sm opacity-90">{p.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 p-5">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="chip-hover rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shine inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                  Go Live{" "}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </m.article>
        ))}
      </div>
    </Section>
  );
}
