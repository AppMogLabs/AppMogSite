import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders all 7 product cards', () => {
    render(<Home />);
    // Each product card renders an arrow →
    const links = screen.getAllByRole('link');
    const productLinks = links.filter((link) =>
      link.getAttribute('href')?.startsWith('/products/')
    );
    expect(productLinks).toHaveLength(7);
  });

  it('renders product names', () => {
    render(<Home />);
    expect(screen.getByText('ContractScan')).toBeInTheDocument();
    expect(screen.getByText('WalletIntel')).toBeInTheDocument();
    expect(screen.getByText('SoundSmart')).toBeInTheDocument();
    expect(screen.getByText('VestingWatch')).toBeInTheDocument();
    expect(screen.getByText('Photo Blitz: Cleanup')).toBeInTheDocument();
    expect(screen.getByText('AgentWatch')).toBeInTheDocument();
    expect(screen.getByText('SpeakSmart')).toBeInTheDocument();
  });

  it('displays project count in marquee', () => {
    render(<Home />);
    expect(screen.getByText(/SEVEN PRODUCTS SHIPPED/)).toBeInTheDocument();
  });

  it('all product slugs are URL-safe (no spaces)', () => {
    render(<Home />);
    const links = screen.getAllByRole('link');
    const productLinks = links.filter((link) =>
      link.getAttribute('href')?.startsWith('/products/')
    );

    productLinks.forEach((link) => {
      const href = link.getAttribute('href')!;
      expect(href).not.toContain(' ');
      expect(href).toMatch(/^\/products\/[a-z0-9-]+$/);
    });
  });

  it('renders the footer', () => {
    render(<Home />);
    expect(screen.getByText('Built by humans and agents')).toBeInTheDocument();
  });
});
