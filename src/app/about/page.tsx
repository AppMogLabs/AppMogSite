import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio — App Mog Labs',
  description: 'App Mog Studio builds crypto and AI tools using autonomous multi-agent workflows. AI-native from the first line of code.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="h-12 lg:h-[66px]" />

      {/* Hero */}
      <section className="border-b border-border px-6 lg:px-8 py-16 lg:py-28">
        <h1 className="font-display text-[2.5rem] lg:text-[6rem] font-bold leading-[0.9] tracking-[-0.04em]">
          The Studio
        </h1>
        <p className="text-white/60 text-lg mt-6 max-w-xl leading-relaxed">
          AI-native from the first line of code. No retrofitting LLMs into legacy stacks.
        </p>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border">
        <div className="grid md:grid-cols-2">
          <div className="p-6 lg:p-12 border-b md:border-b-0 md:border-r border-border">
            <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40 mb-6">Philosophy</h2>
            <p className="font-display text-[1.5rem] lg:text-[2.5rem] font-bold leading-[1.1]">
              Agents over<br />architects.
            </p>
          </div>
          <div className="p-6 lg:p-12 flex flex-col justify-end">
            <p className="text-white/60 text-base leading-relaxed">
              Humans set the vision; agents execute with precision. One human founder.
              Specialized AI agents. Building production apps at startup speed.
              Every decision point, every user interaction is powered by intelligence — not inertia.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow — 2x2 grid like projects */}
      <section className="border-b border-border">
        <div className="px-6 lg:px-8 py-8">
          <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">The Multi-Agent Workflow</h2>
        </div>
        <div className="grid md:grid-cols-2">
          {[
            { label: 'Orchestration', color: 'bg-emerald-900/20', text: 'Argos scopes tasks, assigns to specialists, unblocks issues. Budget allocation, priority conflicts, Definition of Done validation.' },
            { label: 'Execution', color: 'bg-blue-900/20', text: 'Agents spawn sub-agents for parallelism. Codie writes code (TDD). Claude Code handles complex architecture. Codex handles volume.' },
            { label: 'Verification', color: 'bg-amber-900/20', text: 'No agent claims "done" without running verification commands. Evidence before assertions. Always.' },
            { label: 'Delivery', color: 'bg-purple-900/20', text: 'Seven products shipped. ContractScan, WalletIntel, VestingWatch, SoundSmart, SpeakSmart, PhotoBlitz, AgentWatch.' },
          ].map((item, i) => (
            <div key={item.label} className={`relative p-6 lg:p-10 border-t border-border ${i % 2 === 0 ? 'md:border-r' : ''}`}>
              <div className={`absolute inset-0 ${item.color}`} />
              <div className="stripe-overlay" />
              <div className="relative z-[5]">
                <span className="text-accent text-[0.7rem] font-bold uppercase tracking-[0.2em]">{item.label}</span>
                <p className="text-white/60 mt-4 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="px-6 lg:px-8 py-12 lg:py-20">
        <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40 mb-6">Founder</h2>
        <p className="text-white/60 text-sm">Indie dev. iOS + web3. Building in public.</p>
      </section>
    </div>
  );
}
