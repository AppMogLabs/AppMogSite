import Link from 'next/link';

interface ProductCardProps {
  name: string;
  slug: string;
  status: 'LIVE' | 'READY' | 'PENDING';
  description: string;
  category: string;
  index: number;
  gradient: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, slug, status, description, category, index, gradient }) => {
  return (
    <Link href={`/products/${slug}`} className="block project-card group relative h-full">
      {/* Background gradient */}
      <div className="card-gradient" style={{ background: gradient }} />

      {/* Stripe overlay — always visible */}
      <div className="stripe-overlay" />

      {/* Grid overlay — appears on hover */}
      <div className="grid-overlay" />

      {/* Corner markers */}
      <div className="corner-marker corner-tl" />
      <div className="corner-marker corner-tr" />
      <div className="corner-marker corner-bl" />
      <div className="corner-marker corner-br" />

      {/* Content layer */}
      <div className="project-card-inner relative z-[5] flex flex-col justify-between p-6 lg:p-8 h-full">
        {/* Top row: large number + category + status */}
        <div className="flex justify-between items-start">
          <span className="card-number font-display text-[2rem] lg:text-[3rem] font-extrabold leading-none text-white/15">
            {String(index).padStart(2, '0')}
          </span>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[0.6rem] uppercase tracking-[0.25em] text-white/35 font-medium font-display">
              {category}
            </span>
            <span className={`w-[6px] h-[6px] rounded-full ${
              status === 'LIVE' ? 'bg-accent shadow-[0_0_8px_#a5e71c]' :
              status === 'READY' ? 'bg-yellow-400' : 'bg-white/20'
            }`} />
          </div>
        </div>

        {/* Bottom: title + description */}
        <div>
          <h3 className="font-display text-[1.4rem] lg:text-[2.2rem] font-bold leading-[1.05] tracking-[-0.02em] mb-3">
            <span className="card-title">{name}</span>
          </h3>
          <p className="text-[0.7rem] lg:text-[0.75rem] text-white/45 leading-relaxed max-w-[85%] font-body">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
