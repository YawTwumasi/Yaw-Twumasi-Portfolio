import { m } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { useTypingCycle } from "@/hooks/use-typing-cycle";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/hero-portrait.jpg";
import { FloatingBackground } from "./FloatingBackground";

const roles = ["Frontend Developer", "UI/UX Designer", "Graphic Designer"];

export function Hero() {
  const typed = useTypingCycle(roles);
  const name = "Yaw Twumasi".split("");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-16 hero-bg">
      <FloatingBackground />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[1.2fr_1fr]">
        <div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="grid h-2 w-2 place-items-center">
              <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
              <span className="absolute h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance & full-time
          </m.div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            {name.map((c, i) => (
              <m.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.15 + i * 0.04, type: "spring", stiffness: 200, damping: 18 }}
                className="inline-block"
              >
                {c === " " ? "\u00A0" : c}
              </m.span>
            ))}
          </h1>

          <div className="mt-4 flex min-h-[2.5rem] items-center text-2xl font-semibold sm:text-3xl">
            <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block h-8 w-[3px] animate-caret bg-accent align-middle" />
          </div>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <m.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </m.a>
            <m.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </m.a>
            <m.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/yaw-twumasi-cv.pdf"
              download="Yaw_Twumasi_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border/70 px-5 py-3 text-sm font-semibold hover:bg-muted"
            >
              <Download className="h-4 w-4" /> CV
            </m.a>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-4 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> Accra, Ghana
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>IT Student · Central University</span>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl" />
          <div className="glass-strong relative overflow-hidden rounded-3xl p-2 animate-float">
            <img
              src={portrait}
              alt="Yaw Twumasi portrait illustration"
              width={1024}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-2xl"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>
        </m.div>
      </div>
    </section>
  );
}
