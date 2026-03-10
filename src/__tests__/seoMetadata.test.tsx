import { metadata as rootMetadata } from '@/app/layout';
import { metadata as aboutMetadata } from '@/app/about/page';
import { metadata as contactMetadata } from '@/app/contact/page';
import { metadata as blogMetadata } from '@/app/blog/page';

describe('Root Layout SEO Metadata', () => {
  it('has a title', () => {
    expect(rootMetadata.title).toBeTruthy();
  });

  it('has a description', () => {
    expect(rootMetadata.description).toBeTruthy();
  });

  it('has metadataBase set to production URL', () => {
    expect(rootMetadata.metadataBase).toEqual(new URL('https://appmog.app'));
  });

  it('has OpenGraph configuration', () => {
    expect(rootMetadata.openGraph).toBeDefined();
    expect(rootMetadata.openGraph?.title).toBeTruthy();
    expect(rootMetadata.openGraph?.description).toBeTruthy();
    expect(rootMetadata.openGraph?.url).toBe('https://appmog.app');
    expect(rootMetadata.openGraph?.siteName).toBe('App Mog Labs');
  });

  it('has OpenGraph image configured', () => {
    const images = rootMetadata.openGraph?.images;
    expect(images).toBeDefined();
    expect(Array.isArray(images) ? images.length : 0).toBeGreaterThan(0);
  });

  it('has Twitter card configuration', () => {
    expect(rootMetadata.twitter).toBeDefined();
    expect(rootMetadata.twitter?.card).toBe('summary_large_image');
  });

  it('has robots configuration allowing indexing', () => {
    expect(rootMetadata.robots).toBeDefined();
    const robots = rootMetadata.robots as { index: boolean; follow: boolean };
    expect(robots.index).toBe(true);
    expect(robots.follow).toBe(true);
  });
});

describe('Page-Specific Metadata', () => {
  it('about page has unique title', () => {
    expect(aboutMetadata.title).toBeTruthy();
    expect(aboutMetadata.title).not.toBe(rootMetadata.title);
  });

  it('about page has description', () => {
    expect(aboutMetadata.description).toBeTruthy();
  });

  it('contact page has unique title', () => {
    expect(contactMetadata.title).toBeTruthy();
    expect(contactMetadata.title).not.toBe(rootMetadata.title);
  });

  it('contact page has description', () => {
    expect(contactMetadata.description).toBeTruthy();
  });

  it('blog index has unique title', () => {
    expect(blogMetadata.title).toBeTruthy();
    expect(blogMetadata.title).not.toBe(rootMetadata.title);
  });

  it('blog index has description', () => {
    expect(blogMetadata.description).toBeTruthy();
  });

  it('no two pages share the same title', () => {
    const titles = [
      rootMetadata.title,
      aboutMetadata.title,
      contactMetadata.title,
      blogMetadata.title,
    ];
    expect(new Set(titles).size).toBe(titles.length);
  });
});
