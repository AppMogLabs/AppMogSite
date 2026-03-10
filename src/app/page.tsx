import ProductCard from '../components/ProductCard';

export default function Home() {
  const products = [
    {
      name: 'ContractScan',
      slug: 'contractscan',
      status: 'LIVE' as const,
      description: 'Translates smart contracts into plain English. Security analysis included.',
      category: 'Web3',
      gradient: 'linear-gradient(to bottom right, rgba(6,78,59,0.8), rgba(6,46,34,0.4), #000)',
    },
    {
      name: 'WalletIntel',
      slug: 'walletintel',
      status: 'LIVE' as const,
      description: 'Track whale wallets. Real-time alerts. Token flow analysis.',
      category: 'Web3',
      gradient: 'linear-gradient(to bottom right, rgba(30,58,138,0.8), rgba(23,37,84,0.4), #000)',
    },
    {
      name: 'Photo Blitz: Cleanup',
      slug: 'photo-blitz',
      status: 'LIVE' as const,
      description: 'Gamified photo cleanup for iPhone. Space Invaders meets storage.',
      category: 'Mobile',
      gradient: 'linear-gradient(to bottom right, rgba(76,29,149,0.8), rgba(46,16,100,0.4), #000)',
    },
    {
      name: 'SoundSmart',
      slug: 'soundsmart',
      status: 'LIVE' as const,
      description: 'Voice memos to structured notes. AI transcription + summaries.',
      category: 'Productivity',
      gradient: 'linear-gradient(to bottom right, rgba(120,53,15,0.8), rgba(69,26,3,0.4), #000)',
    },
    {
      name: 'VestingWatch',
      slug: 'vestingwatch',
      status: 'LIVE' as const,
      description: 'Token unlock tracker. Cliff events. Dump risk scoring.',
      category: 'Web3',
      gradient: 'linear-gradient(to bottom right, rgba(127,29,29,0.8), rgba(69,10,10,0.4), #000)',
    },
    {
      name: 'AgentWatch',
      slug: 'agentwatch',
      status: 'READY' as const,
      description: 'Monitor AI agent performance. Track costs. Optimize workflows.',
      category: 'AI Infra',
      gradient: 'linear-gradient(to bottom right, rgba(22,78,99,0.8), rgba(8,51,68,0.4), #000)',
    },
    {
      name: 'SpeakSmart',
      slug: 'speaksmart',
      status: 'PENDING' as const,
      description: 'Voice-to-action. Speak commands, get instant execution.',
      category: 'Productivity',
      gradient: 'linear-gradient(to bottom right, rgba(112,26,117,0.8), rgba(74,4,78,0.4), #000)',
    },
  ];

  const featured = products.slice(0, 4);
  const rest = products.slice(4);

  return (
    <div className="min-h-screen grain">
      {/* Nav spacer */}
      <div className="h-12 lg:h-[66px]" />

      {/* ===== FEATURED 2×2 GRID ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {featured.map((product, i) => (
          <div
            key={product.slug}
            className={`h-[50vh] md:h-[calc((100vh-66px)/2)] border-white/10 ${
              i % 2 === 0 ? 'md:border-r' : ''
            } ${i < 2 ? 'border-b' : ''}`}
          >
            <ProductCard index={i + 1} {...product} />
          </div>
        ))}
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="border-y border-white/10 py-4 marquee bg-black relative z-10">
        <div className="marquee-content font-display text-[0.65rem] tracking-[0.35em] uppercase text-white/30 font-medium">
          {'APP MOG LABS '}
          <span className="sep-dot" />
          {'AI-NATIVE DEVELOPMENT STUDIO '}
          <span className="sep-dot" />
          {'BUILT BY HUMANS AND AGENTS '}
          <span className="sep-dot" />
          {'SEVEN PRODUCTS SHIPPED '}
          <span className="sep-dot" />
          {'APP MOG LABS '}
          <span className="sep-dot" />
          {'AI-NATIVE DEVELOPMENT STUDIO '}
          <span className="sep-dot" />
          {'BUILT BY HUMANS AND AGENTS '}
          <span className="sep-dot" />
          {'SEVEN PRODUCTS SHIPPED '}
          <span className="sep-dot" />
          {'APP MOG LABS '}
          <span className="sep-dot" />
          {'AI-NATIVE DEVELOPMENT STUDIO '}
          <span className="sep-dot" />
          {'BUILT BY HUMANS AND AGENTS '}
          <span className="sep-dot" />
          {'SEVEN PRODUCTS SHIPPED '}
          <span className="sep-dot" />
        </div>
      </section>

      {/* ===== REMAINING 3 PRODUCTS ===== */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {rest.map((product, i) => (
          <div
            key={product.slug}
            className={`h-[45vh] md:h-[50vh] border-white/10 ${
              i < rest.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
            }`}
          >
            <ProductCard index={featured.length + i + 1} {...product} />
          </div>
        ))}
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/10">
        <div className="grid grid-cols-3 items-center px-6 lg:px-10 py-5">
          <div className="flex items-center gap-2.5">
            <span className="w-[7px] h-[7px] bg-accent rounded-full" />
            <span className="font-display text-[0.7rem] font-bold tracking-[0.15em] uppercase">App Mog Labs</span>
          </div>
          <div className="flex justify-center gap-6 text-[0.65rem] text-white/30 tracking-wide font-display uppercase">
            <a href="https://x.com/appmoglabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              X / Twitter
            </a>
            <a href="mailto:info@appmog.app" className="hover:text-white transition-colors">info@appmog.app</a>
          </div>
          <div className="text-right text-[0.65rem] text-white/25 font-display tracking-wider uppercase">
            Built by humans and agents
          </div>
        </div>
      </footer>
    </div>
  );
}
