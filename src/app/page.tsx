import Image from "next/image";

function TerminalPrompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-sm text-text-secondary mb-8">
      <span className="text-accent">{">"}</span>{" "}
      <span className="text-secondary">{children}</span>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: "Live" | "In Development" | "Coming Soon";
}) {
  const styles = {
    Live: "bg-accent/15 text-accent border-accent/30",
    "In Development": "bg-secondary/15 text-secondary border-secondary/30",
    "Coming Soon": "bg-tertiary/15 text-tertiary border-tertiary/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${styles[status]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {status}
    </span>
  );
}

function ProjectCard({
  name,
  description,
  status,
  accentColor,
  icon,
  link,
}: {
  name: string;
  description: string;
  status: "Live" | "In Development" | "Coming Soon";
  accentColor: "accent" | "secondary" | "tertiary";
  icon: string;
  link?: string;
}) {
  const glowClass = {
    accent: "glow-green",
    secondary: "glow-cyan",
    tertiary: "glow-pink",
  }[accentColor];

  const borderClass = {
    accent: "border-accent/20 hover:border-accent/40",
    secondary: "border-secondary/20 hover:border-secondary/40",
    tertiary: "border-tertiary/20 hover:border-tertiary/40",
  }[accentColor];

  const iconBgClass = {
    accent: "bg-accent/10 text-accent",
    secondary: "bg-secondary/10 text-secondary",
    tertiary: "bg-tertiary/10 text-tertiary",
  }[accentColor];

  const Card = link ? "a" : "div";

  return (
    <Card
      {...(link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`block bg-bg-secondary rounded-2xl p-6 border transition-all duration-300 ${borderClass} hover:${glowClass} group`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`w-14 h-14 rounded-xl ${iconBgClass} flex items-center justify-center text-2xl shrink-0`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h3 className="font-mono text-lg font-bold text-text-primary">
              {name}
            </h3>
            <StatusBadge status={status} />
          </div>
          <p className="text-text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {link && (
        <div className="font-mono text-xs text-text-secondary group-hover:text-accent transition-colors">
          {">"} open{" "}
          <span className="animate-blink inline-block w-2 h-3.5 bg-current align-middle ml-0.5" />
        </div>
      )}
    </Card>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-secondary border border-white/5 text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200 text-sm font-mono"
    >
      {icon}
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Subtle background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(57, 255, 20, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative max-w-3xl mx-auto px-6 py-16 sm:py-24">
        {/* ===== HERO ===== */}
        <section className="mb-24">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/app-mog-logo-terminal.svg"
              alt="App Mog logo"
              width={80}
              height={80}
              className="rounded-2xl"
              priority
            />
          </div>

          {/* Wordmark */}
          <h1 className="font-mono text-4xl sm:text-5xl font-bold text-text-primary mb-3 tracking-tight">
            App Mog
          </h1>

          {/* Tagline */}
          <p className="font-mono text-accent text-lg sm:text-xl text-glow-green mb-6">
            brute force vibe coding
          </p>

          {/* Intro */}
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            One human, many agents. Building in public. Follow along as I ship
            real apps.
          </p>

          {/* CTA + Social */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent/10 border border-accent/30 text-accent font-mono text-sm font-semibold hover:bg-accent/20 transition-all duration-200"
            >
              <span className="text-accent/60">{">"}</span> ls projects/
            </a>
            <SocialLink
              href="https://x.com/AppMogLabs"
              label="X"
              icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
            />
            <SocialLink
              href="https://github.com/AppMogLabs"
              label="GitHub"
              icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              }
            />
            <SocialLink
              href="https://www.instagram.com/appmoglabs/"
              label="Instagram"
              icon={
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              }
            />
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" className="mb-24">
          <TerminalPrompt>ls projects/</TerminalPrompt>

          <div className="grid gap-4">
            <ProjectCard
              name="Photo Blitz"
              description="Fast, fun photo challenges. Snap, create, and share in timed rounds. Built for spontaneous creativity."
              status="Live"
              accentColor="accent"
              icon="📸"
              link="https://apps.apple.com/app/photo-blitz"
            />
            <ProjectCard
              name="Thronglet"
              description="A virtual creature that lives on your phone. Feed it, raise it, see what happens. Inspired by Tamagotchi meets Black Mirror."
              status="In Development"
              accentColor="secondary"
              icon="👾"
            />
          </div>
        </section>

        {/* ===== ABOUT / BUILD IN PUBLIC ===== */}
        <section className="mb-24">
          <TerminalPrompt>cat about.md</TerminalPrompt>

          <div className="bg-bg-secondary rounded-2xl p-6 sm:p-8 border border-white/5">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-tertiary/80" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-secondary/60" />
              <span className="ml-2 font-mono text-xs text-text-secondary">
                ~/about
              </span>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a solo iOS developer building AI-powered apps and shipping them
                for real. No team. No funding. Just ideas, code, and a
                determination to get things out the door.
              </p>
              <p>
                Building in public — every app gets documented as it happens. The wins, the
                fails, the weird bugs at 2am. If you&apos;re into watching how indie apps
                actually get made (or want to build your own), follow
                along.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="font-mono text-xs text-text-secondary mb-4">
                <span className="text-accent">{">"}</span> find me online
              </div>
              <div className="flex flex-wrap gap-3">
                <SocialLink
                  href="https://x.com/AppMogLabs"
                  label="Follow on X"
                  icon={
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  }
                />
                <SocialLink
                  href="https://youtube.com/@appmog"
                  label="YouTube"
                  icon={
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  }
                />
                <SocialLink
                  href="https://github.com/AppMogLabs"
                  label="GitHub"
                  icon={
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  }
                />
                <SocialLink
                  href="https://www.instagram.com/appmoglabs/"
                  label="Instagram"
                  icon={
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-secondary text-sm">
            <div className="font-mono text-xs">
              &copy; {new Date().getFullYear()} App Mog
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/AppMogLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                X
              </a>
              <a
                href="https://github.com/AppMogLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://youtube.com/@appmog"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/appmoglabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="mt-4 text-center font-mono text-xs text-text-secondary/40">
            Built with Claude Code
          </div>
        </footer>
      </main>
    </div>
  );
}
