import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
import StatusBadge from '@/components/StatusBadge';
import ASCIILogo from '@/components/ASCIILogo';

describe('StatusBadge', () => {
  it('renders LIVE status', () => {
    render(<StatusBadge status="LIVE" />);
    expect(screen.getByText('LIVE')).toBeInTheDocument();
  });

  it('renders READY status', () => {
    render(<StatusBadge status="READY" />);
    expect(screen.getByText('READY')).toBeInTheDocument();
  });

  it('renders PENDING status', () => {
    render(<StatusBadge status="PENDING" />);
    expect(screen.getByText('PENDING')).toBeInTheDocument();
  });
});

describe('ProductCard', () => {
  const defaultProps = {
    name: 'TestProduct',
    slug: 'test-product',
    status: 'LIVE' as const,
    description: 'A test product description',
    category: 'Web3',
    index: 1,
    gradient: 'bg-gradient-to-br from-emerald-900/60 via-black to-black',
  };

  it('renders product name', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('TestProduct')).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('A test product description')).toBeInTheDocument();
  });

  it('links to correct product page', () => {
    render(<ProductCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/products/test-product');
  });

  it('renders zero-padded index number', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('renders category', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('Web3')).toBeInTheDocument();
  });
});

describe('ASCIILogo', () => {
  it('renders without crashing', () => {
    render(<ASCIILogo />);
    expect(screen.getByText('AI-NATIVE DEVELOPMENT STUDIO')).toBeInTheDocument();
  });
});
