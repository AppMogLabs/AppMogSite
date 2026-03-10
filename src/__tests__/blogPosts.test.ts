import { blogPosts, type BlogPost } from '@/lib/blogPosts';

describe('Blog Posts Data', () => {
  it('has at least one blog post', () => {
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it('every post has required fields', () => {
    blogPosts.forEach((post: BlogPost) => {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.description).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.content).toBeTruthy();
      expect(post.keywords.length).toBeGreaterThan(0);
    });
  });

  it('every post has a URL-safe slug (no spaces or special chars)', () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    });
  });

  it('every post has non-placeholder content', () => {
    blogPosts.forEach((post) => {
      expect(post.content).not.toContain('Your content here');
      expect(post.content).not.toContain('Add other posts');
      expect(post.content.length).toBeGreaterThan(100);
    });
  });

  it('every post has a valid date format (YYYY-MM-DD)', () => {
    blogPosts.forEach((post) => {
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(new Date(post.date).toString()).not.toBe('Invalid Date');
    });
  });

  it('has unique slugs', () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
