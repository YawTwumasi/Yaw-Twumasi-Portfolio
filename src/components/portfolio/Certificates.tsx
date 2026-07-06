import { m } from "framer-motion";
import { Eye, Lock } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Section, SectionHeader } from "./Section";

type Cert = { id: string; title: string; issuer: string; url?: string; type?: "image" | "pdf" };

const seed: Cert[] = [
  { id: "cu-dit", title: "Diploma in Information Technology", issuer: "Central University, Ghana" },
];

export function Certificates() {
  const [certs] = useState<Cert[]>(seed);
  const [view, setView] = useState<Cert | null>(null);

  return (
    <Section id="certificates" className="bg-muted/30">
      <SectionHeader
        eyebrow="Certificates"
        title="Credentials — view only"
        desc="Protected viewer. Downloads are disabled."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <m.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass card-lift shine-border group relative overflow-hidden rounded-2xl p-5"
          >
            <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
              <Lock className="h-3 w-3" /> Protected
            </div>
            <div className="mb-4 h-40 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="text-center transition-transform duration-500 group-hover:-translate-y-1">
                <div className="font-display text-4xl font-bold text-gradient">CU</div>
                <div className="text-xs text-muted-foreground">Diploma</div>
              </div>
            </div>

            <div className="font-display font-semibold">{c.title}</div>
            <div className="text-sm text-muted-foreground">{c.issuer}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                disabled={!c.url}
                onClick={() => c.url && setView(c)}
                className="btn-shine inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm text-primary-foreground disabled:opacity-40 disabled:pointer-events-none"
              >
                <Eye className="h-4 w-4" /> View
              </button>
            </div>
          </m.div>
        ))}
      </div>

      <Dialog open={!!view} onOpenChange={(v) => !v && setView(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-display">
              <Lock className="h-4 w-4" /> {view?.title} — view only
            </DialogTitle>
          </DialogHeader>
          {view?.url && (
            <div onContextMenu={(e) => e.preventDefault()} className="select-none">
              {view.type === "pdf" ? (
                <iframe
                  src={`${view.url}#toolbar=0&navpanes=0`}
                  className="h-[70vh] w-full rounded-xl"
                  title={view.title}
                />
              ) : (
                <img
                  src={view.url}
                  alt={view.title}
                  className="w-full rounded-xl"
                  draggable={false}
                />
              )}
              <p className="mt-3 text-center text-xs text-muted-foreground">
                <Lock className="mr-1 inline h-3 w-3" /> Download & right-click are disabled on this
                certificate.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
