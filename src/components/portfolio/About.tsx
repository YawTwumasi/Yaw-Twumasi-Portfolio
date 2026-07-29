import { m, useInView, useMotionValue, animate } from "framer-motion";
import { Code2, Palette, Rocket, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "./Section";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, mv, to]);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Reusable, typed React components with meaningful structure.",
  },
  { icon: Palette, title: "Design Eye", desc: "UI/UX thinking with a sharp eye for clean, intuitive interfaces." },
  { icon: Rocket, title: "Ships Fast", desc: "From wireframe to deployed product with care." },
  {
    icon: Target,
    title: "Goal-driven",
    desc: "Building toward a global frontend engineering career.",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About Me"
        title="Developer + designer, in one person"
        desc="I turn ideas into functional, visually engaging digital products."
      />

      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm <span className="font-semibold text-foreground">Yaw Twumasi</span>, a Level 400
            Information Technology student at Central University in Ghana with a strong passion for
            frontend development and UI/UX design. I specialize in building
            responsive, interactive web apps using React, TypeScript, and Tailwind CSS.
          </p>
          <p>
            I've worked as a Data Entry Intern and Software Developer at Tema Oil Refinery, where I
            sharpened my attention to detail and problem-solving. My goal is to grow into a highly
            skilled frontend engineer and UI/UX designer building impactful products with global
            teams — or my own.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { n: 6, s: "+", l: "Skills" },
              { n: 3, s: "+", l: "Projects" },
              { n: 4, s: "yrs", l: "Studying IT" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-4">
                <div className="font-display text-3xl font-bold text-gradient">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </m.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <m.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <h.icon className="h-5 w-5" />
              </div>
              <div className="font-display font-semibold">{h.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{h.desc}</div>
            </m.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
