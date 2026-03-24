import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import StatusBadge from '../../../components/StatusBadge';

interface ProductPageProps {
  params: { slug: string };
}

interface Product {
  name: string;
  status: 'LIVE' | 'READY' | 'PENDING';
  category: string;
  headline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  cta: string;
  legalLinks?: {
    privacy: string;
    terms: string;
  };
}

const products: Record<string, Product> = {
  contractscan: {
    name: 'ContractScan',
    status: 'LIVE',
    category: 'Web3',
    headline: "You Don't Read Solidity. ContractScan Does.",
    description: "ContractScan translates smart contracts into plain English. Paste an address, get a human-readable explanation of every function, every risk, every mechanic. No computer science degree required.",
    metaTitle: 'Smart Contract Explainer - Understand Ethereum Contracts | ContractScan',
    metaDescription: "Can't read smart contracts? ContractScan explains what Ethereum contracts do in plain English. Understand before you invest. Risk assessment included.",
    features: [
      'Contract functions explained in plain English',
      'Ownership & permissions analysis',
      'Tokenomics breakdown',
      'Multi-EVM support (Ethereum, Base, Arbitrum, Polygon)',
      'Export reports (PDF, Markdown)',
    ],
    cta: 'https://contractscan.dev',
  },
  walletintel: {
    name: 'WalletIntel',
    status: 'LIVE',
    category: 'Web3',
    headline: 'Whales Move. You React. Or You Could Move First.',
    description: 'WalletIntel tracks Ethereum wallet activity in real-time. Follow smart money wallets, get alerts when they move, see token flows before price action. Stop following trends — front-run them.',
    metaTitle: 'Ethereum Wallet Tracker - Track Whale Movements | WalletIntel',
    metaDescription: 'Track Ethereum whales with WalletIntel. Real-time wallet analytics, whale alerts, token flow tracking. See what smart money does before markets move.',
    features: [
      'Real-time whale movement alerts',
      'Portfolio breakdown for any Ethereum address',
      'Token flow analysis across wallets',
      'Multi-wallet clustering detection',
      'Multi-EVM support (Ethereum, Base, Arbitrum, Polygon, Optimism)',
      'API access for custom dashboards',
    ],
    cta: 'https://walletintel.appmog.studio',
  },
  vestingwatch: {
    name: 'VestingWatch',
    status: 'LIVE',
    category: 'Web3',
    headline: 'Token Unlocks = Dump Events. Unless You See Them Coming.',
    description: 'Track vesting schedules for 1000+ Ethereum tokens. See cliffs, linear unlocks, team allocations. Get alerts before the dump. Exit early or buy the dip — your choice.',
    metaTitle: 'Token Vesting Tracker - Ethereum Unlock Calendar | VestingWatch',
    metaDescription: 'Track token vesting schedules and unlock events for Ethereum tokens. Get alerts before cliffs and linear unlocks. Never get caught in unlock dumps.',
    features: [
      'Cliff event tracking with dump risk scoring',
      'Linear vesting schedule visualization',
      'Team & investor allocation breakdown',
      'Historical unlock impact analysis',
      'Multi-EVM support (Ethereum, Base, Arbitrum, Polygon)',
      'Custom alerts via Telegram, email, webhook',
    ],
    cta: 'https://vestingwatch.appmog.studio',
  },
  'photo-blitz': {
    name: 'Photo Blitz: Cleanup',
    status: 'LIVE',
    category: 'Mobile',
    headline: 'Your Camera Roll Is a Warzone. Time to Fight Back.',
    description: 'PhotoBlitz turns photo cleanup into Space Invaders. Duplicates, screenshots, and blurry shots scroll down like alien ships. Tap to destroy. Score points. Clear space. Cleanup stopped being a chore.',
    metaTitle: 'iPhone Photo Cleanup Game - Gamified Duplicate Remover | PhotoBlitz',
    metaDescription: 'Delete duplicate photos, screenshots, and blurry shots with Space Invaders-style gameplay. Free 10GB on your iPhone in minutes. Cleanup is fun now.',
    features: [
      'Arcade-style photo cleanup gameplay',
      'Smart detection: dupes, screenshots, blur, bursts',
      'Campaign mode with progressive difficulty',
      'Game Center leaderboards & achievements',
      'Apple Intelligence integration for categorization',
      '100% on-device processing — zero cloud uploads',
    ],
    cta: 'https://apps.apple.com/app/photoblitz',
    legalLinks: {
      privacy: '/privacy/photo-blitz',
      terms: '/terms/photo-blitz',
    },
  },
  agentwatch: {
    name: 'AgentWatch',
    status: 'READY',
    category: 'AI Infrastructure',
    headline: 'Your Agents Are Running. Are They Working?',
    description: 'AgentWatch gives you real-time visibility into your AI agent swarm. Track performance, costs, uptime, and success rates. Optimize before budgets explode.',
    metaTitle: 'AI Agent Monitor - Performance & Cost Tracking | AgentWatch',
    metaDescription: 'Monitor AI agent performance, track costs, and optimize multi-agent workflows. Real-time dashboard for autonomous agents. Essential for AI teams.',
    features: [
      'Real-time performance metrics & error logs',
      'Token-level cost breakdown per agent & task',
      'Workflow visualization with dependency mapping',
      'Model performance comparison (Claude, GPT-4, local)',
      'Prometheus integration & custom metrics',
      'Role-based access (dev sees errors, finance sees costs)',
    ],
    cta: 'https://agentwatch.appmog.studio',
  },
  speaksmart: {
    name: 'SpeakSmart',
    status: 'PENDING',
    category: 'Productivity',
    headline: "Your Hands Are Full. Your Brain Isn't. Speak Instead.",
    description: 'SpeakSmart listens live. You speak commands, get instant actions. "Email John the report" — draft sent. "Remind me to review the PR at 3pm" — calendar event created. Never leave flow state again.',
    metaTitle: 'Voice to Action AI - Real-Time Commands | SpeakSmart',
    metaDescription: 'Speak commands, get instant actions. SpeakSmart turns voice into todos, emails, code snippets. Hands-free productivity for flow state work.',
    features: [
      'Instant task execution from voice commands',
      'Context-aware multi-turn conversations',
      '50+ integrations (Gmail, Slack, Todoist, GitHub)',
      'Custom voice macros & chained actions',
      'Local-first with E2E encryption option',
      'Cross-platform: web, macOS, Windows, Linux',
    ],
    cta: 'https://speaksmart.appmog.studio',
    legalLinks: {
      privacy: '/privacy/speaksmart',
      terms: '/terms/speaksmart',
    },
  },
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products[params.slug];
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    openGraph: {
      title: product.name,
      description: product.metaDescription,
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="h-12 lg:h-[66px]" />

      {/* Hero */}
      <section className="border-b border-border px-6 lg:px-8 py-12 lg:py-20">
        <div className="mb-6">
          <Link href="/" className="text-[0.8rem] text-white/40 hover:text-fg transition-colors">
            &larr; Back to work
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <StatusBadge status={product.status} />
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">{product.category}</span>
        </div>

        <h1 className="font-display text-[2.5rem] lg:text-[5rem] font-bold leading-[0.95] tracking-[-0.03em] mb-6">
          {product.name}
        </h1>
        <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
          {product.headline}
        </p>
      </section>

      {/* Description + Features */}
      <section className="border-b border-border">
        <div className="grid md:grid-cols-2">
          <div className="p-6 lg:p-12 border-b md:border-b-0 md:border-r border-border">
            <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40 mb-6">About</h2>
            <p className="text-white/80 text-base lg:text-lg leading-relaxed">{product.description}</p>
          </div>
          <div className="p-6 lg:p-12">
            <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40 mb-6">Features</h2>
            <ul className="space-y-4">
              {product.features.map((feature) => (
                <li key={`${product.name}-${feature}`} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                  <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`px-6 lg:px-8 py-12 lg:py-20 ${product.legalLinks ? 'border-b border-border' : ''}`}>
        <a
          href={product.cta}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 px-8 py-3 font-display text-[0.8rem] font-bold tracking-wider uppercase transition-all duration-300 rounded-full ${
            product.status === 'LIVE'
              ? 'bg-accent text-bg hover:bg-fg'
              : 'bg-surface text-white/40 border border-border cursor-default'
          }`}
        >
          {product.status === 'LIVE' ? 'LAUNCH APP' : 'COMING SOON'}
          {product.status === 'LIVE' && <span>&rarr;</span>}
        </a>
      </section>

      {/* Legal Links */}
      {product.legalLinks && (
        <section className="px-6 lg:px-8 py-8">
          <h2 className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40 mb-4">Legal</h2>
          <div className="flex items-center gap-6">
            <Link href={product.legalLinks.privacy} className="text-sm text-white/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <Link href={product.legalLinks.terms} className="text-sm text-white/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
