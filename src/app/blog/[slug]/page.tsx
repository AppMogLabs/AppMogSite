import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogPosts';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | App Mog Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="h-12 lg:h-[66px]" />

      {/* Header */}
      <section className="border-b border-border px-6 lg:px-8 py-12 lg:py-20 max-w-4xl mx-auto">
        <Link href="/blog" className="text-[0.8rem] text-white/40 hover:text-fg transition-colors">
          &larr; Back to journal
        </Link>
        <div className="mt-8">
          <span className="text-[0.7rem] text-white/30 uppercase tracking-[0.2em]">{post.date}</span>
          <h1 className="font-display text-[1.75rem] lg:text-[3rem] font-bold leading-[1.05] tracking-[-0.02em] mt-4">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16 space-y-6">
        {post.content.split('\n\n').map((paragraph) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={paragraph.slice(0, 40)} className="font-display text-xl lg:text-2xl font-bold text-fg mt-16 mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={paragraph.slice(0, 40)} className="font-display text-lg font-bold text-fg mt-10 mb-3">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }
          return (
            <p key={paragraph.slice(0, 40)} className="text-white/60 leading-[1.8]">
              {paragraph}
            </p>
          );
        })}
      </article>

      {/* Back */}
      <div className="border-t border-border max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <Link href="/blog" className="text-[0.8rem] text-white/40 hover:text-fg transition-colors">
          &larr; Back to journal
        </Link>
      </div>
    </div>
  );
}
