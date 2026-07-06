import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import { gallery, type GalleryItem } from "@/data/portfolio";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Section, SectionHeader } from "./Section";

const cats = ["All", "Posters", "Flyers", "Logos"] as const;

export function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const items = gallery.filter((g) => (cat === "All" ? g.featured : g.category === cat));

  return (
    <Section id="gallery" className="bg-muted/30">
      <SectionHeader
        eyebrow="Creative Works"
        title="Design gallery"
        desc="Posters, brand marks and social media assets."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ${
              cat === c
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] -translate-y-0.5"
                : "glass text-muted-foreground hover:text-foreground hover:-translate-y-0.5"
            }`}
          >
            {c === "All" ? "Featured Designs" : c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((g, i) => (
            <m.button
              key={g.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setOpen(g)}
              className="group shine-border relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-shadow duration-300 hover:shadow-[var(--shadow-elegant)]"
            >
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="text-xs uppercase tracking-widest opacity-80">{g.category}</div>
                  <div className="font-display font-semibold">{g.title}</div>
                </div>
              </div>
            </m.button>
          ))}
        </AnimatePresence>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl bg-transparent border-0 shadow-none p-0">
          {open && (
            <m.img
              key={open.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={open.image}
              alt={open.title}
              className="w-full rounded-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
