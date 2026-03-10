import { render, screen } from '@testing-library/react';
import BlogPostPage from '@/app/blog/[slug]/page';
import { generateMetadata, generateStaticParams } from '@/app/blog/[slug]/page';
import { blogPosts } from '@/lib/blogPosts';

const mockNotFound = jest.fn();
jest.mock('next/navigation', () => ({
  notFound: (...args: unknown[]) => {
    mockNotFound(...args);
    throw new Error('NEXT_NOT_FOUND');
  },
}));

beforeEach(() => {
  mockNotFound.mockClear();
});

describe('Blog Post Page', () => {
  it('renders the first blog post with title and date', () => {
    const post = blogPosts[0];
    render(<BlogPostPage params={{ slug: post.slug }} />);

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.date)).toBeInTheDocument();
  });

  it('renders content paragraphs from the blog post', () => {
    const post = blogPosts[0];
    render(<BlogPostPage params={{ slug: post.slug }} />);

    const firstParagraph = post.content.split('\n\n')[0];
    expect(screen.getByText(firstParagraph)).toBeInTheDocument();
  });

  it('renders h2 headings from content', () => {
    const post = blogPosts[0];
    render(<BlogPostPage params={{ slug: post.slug }} />);

    const h2Match = post.content.match(/^## (.+)$/m);
    if (h2Match) {
      expect(screen.getByText(h2Match[1])).toBeInTheDocument();
    }
  });

  it('renders all blog posts without errors', () => {
    blogPosts.forEach((post) => {
      const { unmount } = render(<BlogPostPage params={{ slug: post.slug }} />);
      expect(screen.getByText(post.title)).toBeInTheDocument();
      unmount();
    });
  });

  it('calls notFound for invalid slug', () => {
    expect(() => {
      render(<BlogPostPage params={{ slug: 'nonexistent-post' }} />);
    }).toThrow();
    expect(mockNotFound).toHaveBeenCalled();
  });

  it('has a back to blog link', () => {
    const post = blogPosts[0];
    render(<BlogPostPage params={{ slug: post.slug }} />);

    const backLinks = screen.getAllByText(/Back to journal/);
    expect(backLinks.length).toBeGreaterThan(0);
    expect(backLinks[0].closest('a')).toHaveAttribute('href', '/blog');
  });
});

describe('Blog Post generateStaticParams', () => {
  it('returns params for all blog posts', async () => {
    const params = await generateStaticParams();
    expect(params).toHaveLength(blogPosts.length);
    params.forEach((param, i) => {
      expect(param.slug).toBe(blogPosts[i].slug);
    });
  });
});

describe('Blog Post generateMetadata', () => {
  it('returns correct metadata for valid slug', async () => {
    const post = blogPosts[0];
    const metadata = await generateMetadata({ params: { slug: post.slug } });

    expect(metadata.title).toContain(post.title);
    expect(metadata.description).toBe(post.description);
    expect(metadata.openGraph?.title).toBe(post.title);
  });

  it('returns empty object for invalid slug', async () => {
    const metadata = await generateMetadata({ params: { slug: 'nonexistent' } });
    expect(metadata).toEqual({});
  });
});
