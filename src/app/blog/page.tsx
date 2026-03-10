import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';

export const metadata: Metadata = {
  title: 'Journal — App Mog Labs',
  description: 'Deep dives into AI-native building, Ethereum security, multi-agent workflows, and crypto tool development.',
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen">
      <div className="h-12 lg:h-[66px]" />

      {/* Hero */}
      <section className="border-b border-border px-6 lg:px-8 py-16 lg:py-28">
        <h1 className="font-display text-[2.5rem] lg:text-[6rem] font-bold leading-[0.9] tracking-[-0.04em]">
          Journal
        </h1>
        <p className="text-white/60 text-lg mt-6">
          Technical insights from the frontier.
        </p>
      </section>

      {/* Posts */}
      <section>
        {blogPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block blog-card group px-6 lg:px-8 py-6 lg:py-8"
          >
            <div className="flex items-baseline gap-6 lg:gap-10">
              <span className="font-display text-[0.8rem] text-white/30 font-medium w-6 flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-base lg:text-xl font-bold group-hover:text-accent transition-colors duration-300 truncate">
                  {post.title}
                </h2>
                <p className="text-[0.75rem] text-white/40 mt-1 hidden md:block">{post.description}</p>
              </div>
              <span className="text-[0.7rem] text-white/30 flex-shrink-0 hidden md:block">{post.date}</span>
              <span className="hover-slide text-white/30 group-hover:text-accent transition-colors flex-shrink-0">&rarr;</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
