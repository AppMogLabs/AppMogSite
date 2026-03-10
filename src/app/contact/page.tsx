import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — App Mog Labs',
  description: 'Get in touch with App Mog Labs. Partnerships, press, or custom AI development.',
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="h-12 lg:h-[66px]" />

      {/* Hero */}
      <section className="border-b border-border px-6 lg:px-8 py-16 lg:py-28">
        <h1 className="font-display text-[2.5rem] lg:text-[6rem] font-bold leading-[0.9] tracking-[-0.04em]">
          Get in touch
        </h1>
        <p className="text-white/60 text-lg mt-6">
          Partnerships, press, or custom development.
        </p>
      </section>

      {/* Contact rows */}
      <section>
        <a
          href="https://x.com/appmoglabs"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-6 lg:px-8 py-8 lg:py-10 border-b border-border group hover:bg-surface transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 lg:gap-10">
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40 w-16">Social</span>
              <span className="font-display text-lg lg:text-2xl font-bold group-hover:text-accent transition-colors">
                @appmoglabs on X
              </span>
            </div>
            <span className="hover-slide text-white/30 group-hover:text-accent transition-colors">&nearr;</span>
          </div>
        </a>

        <div className="px-6 lg:px-8 py-8 lg:py-10 border-b border-border">
          <div className="flex items-center gap-6 lg:gap-10">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40 w-16">Email</span>
            <span className="font-display text-lg lg:text-2xl font-bold">
              info@appmog.app
            </span>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="px-6 lg:px-8 py-12">
        <p className="text-[0.7rem] text-white/30">Built by humans and agents</p>
      </section>
    </div>
  );
}
