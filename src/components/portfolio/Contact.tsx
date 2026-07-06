import { m } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Section, SectionHeader } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something"
        desc="Open to freelance, collaborations and full-time roles."
      />
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
        {[
          { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
          { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
          { icon: MapPin, label: "Location", value: profile.location },
        ].map((c, i) => (
          <m.a
            key={c.label}
            href={c.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group glass card-lift shine-border flex flex-col items-center gap-3 rounded-2xl p-6 text-center"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[var(--shadow-glow)]">
              <c.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{c.label}</div>
              <div className="mt-1 font-medium break-words transition-colors group-hover:text-primary">
                {c.value}
              </div>
            </div>
          </m.a>
        ))}
      </div>

      <m.a
        href={`https://wa.me/${profile.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, rotate: -6 }}
        className="group fixed bottom-6 left-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-glow)] transition-shadow hover:shadow-[0_0_0_10px_rgba(37,211,102,0.15),var(--shadow-glow)]"
      >
        <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      </m.a>
    </Section>
  );
}
