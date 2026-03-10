import { render, screen } from '@testing-library/react';
import ProductPage, { generateMetadata } from '@/app/products/[slug]/page';

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

const validSlugs = [
  'contractscan',
  'walletintel',
  'soundsmart',
  'vestingwatch',
  'photo-blitz',
  'agentwatch',
  'speaksmart',
];

describe('Product Page Routing', () => {
  it.each(validSlugs)('renders product page for slug: %s', (slug) => {
    render(<ProductPage params={{ slug }} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
  });

  it('calls notFound for invalid slug', () => {
    expect(() => {
      render(<ProductPage params={{ slug: 'nonexistent-product' }} />);
    }).toThrow();
    expect(mockNotFound).toHaveBeenCalled();
  });

  it('calls notFound for slug with spaces', () => {
    expect(() => {
      render(<ProductPage params={{ slug: 'speaks mart' }} />);
    }).toThrow();
    expect(mockNotFound).toHaveBeenCalled();
  });
});

describe('Product Page Content', () => {
  it('renders product name as h1', () => {
    render(<ProductPage params={{ slug: 'contractscan' }} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ContractScan');
  });

  it('renders product headline', () => {
    render(<ProductPage params={{ slug: 'contractscan' }} />);
    expect(screen.getByText(/You Don't Read Solidity/)).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<ProductPage params={{ slug: 'contractscan' }} />);
    expect(screen.getByText(/translates smart contracts into plain English/)).toBeInTheDocument();
  });

  it('renders all features for a product', () => {
    render(<ProductPage params={{ slug: 'contractscan' }} />);
    expect(screen.getByText('Contract functions explained in plain English')).toBeInTheDocument();
    expect(screen.getByText('Export reports (PDF, Markdown)')).toBeInTheDocument();
  });

  it('shows "LAUNCH APP" for LIVE products', () => {
    render(<ProductPage params={{ slug: 'contractscan' }} />);
    expect(screen.getByText(/LAUNCH APP/)).toBeInTheDocument();
  });

  it('shows "COMING SOON" for non-LIVE products', () => {
    render(<ProductPage params={{ slug: 'speaksmart' }} />);
    expect(screen.getByText('COMING SOON')).toBeInTheDocument();
  });

  it('CTA link has noopener noreferrer', () => {
    render(<ProductPage params={{ slug: 'contractscan' }} />);
    const link = screen.getByText(/LAUNCH APP/).closest('a');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('target', '_blank');
  });
});

describe('Product Page SEO Metadata', () => {
  it.each(validSlugs)('generates metadata for slug: %s', async (slug) => {
    const metadata = await generateMetadata({ params: { slug } });
    expect(metadata.title).toBeTruthy();
    expect(metadata.description).toBeTruthy();
    expect(metadata.openGraph?.title).toBeTruthy();
    expect(metadata.openGraph?.description).toBeTruthy();
  });

  it('returns empty metadata for invalid slug', async () => {
    const metadata = await generateMetadata({ params: { slug: 'nonexistent' } });
    expect(metadata).toEqual({});
  });

  it('metadata title contains product name', async () => {
    const metadata = await generateMetadata({ params: { slug: 'contractscan' } });
    expect(metadata.title).toContain('ContractScan');
  });

  it('metadata description is under 160 characters', async () => {
    for (const slug of validSlugs) {
      const metadata = await generateMetadata({ params: { slug } });
      const desc = metadata.description as string;
      expect(desc.length).toBeLessThanOrEqual(160);
    }
  });
});
