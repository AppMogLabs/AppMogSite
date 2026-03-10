'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Work' },
  { href: '/about', label: 'Studio' },
  { href: '/blog', label: 'Journal' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-[12px] border-b border-white/10">
      <div className="w-full h-12 lg:h-[66px] grid grid-cols-3 items-center px-6 lg:px-10">
        {/* Left — Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-[7px] h-[7px] bg-accent rounded-full group-hover:scale-150 transition-transform duration-300" />
            <span className="font-display text-[0.75rem] font-bold tracking-[0.15em] uppercase text-white">
              App Mog
            </span>
          </Link>
        </div>

        {/* Center — Nav Links */}
        <div className="hidden lg:flex items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-hover text-[0.75rem] tracking-[0.08em] font-medium uppercase transition-colors duration-200 ${
                isActive(link.href) ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — Contact Button */}
        <div className="hidden lg:flex items-center justify-end">
          <Link
            href="/contact"
            className="text-[0.7rem] font-display font-bold tracking-[0.12em] uppercase border border-white/25 rounded-full px-6 py-2 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="col-span-2 flex justify-end lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 7h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          {[...navLinks, { href: '/contact', label: 'Contact' }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-4 text-[0.8rem] tracking-[0.08em] uppercase border-b border-white/10 transition-colors ${
                isActive(link.href) ? 'text-white bg-white/5' : 'text-white/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
