import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-display text-xs font-bold text-primary-foreground">
            Y
          </span>
          <span>
            © {new Date().getFullYear()} {profile.name}. Crafted with React &amp; TypeScript.
          </span>
        </div>
        <div>Built with care in Accra, Ghana.</div>
      </div>
    </footer>
  );
}
