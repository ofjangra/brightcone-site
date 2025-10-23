'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 pt-2 sm:pt-4">
      <div className="w-full sm:w-[90%] lg:w-[80%] mx-auto backdrop-blur-xl bg-white/70 dark:bg-black/70 border border-black/5 dark:border-white/10 rounded-[16px] sm:rounded-[20px] shadow-lg">
        <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-6">
          {/* Left - Branding */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group" onClick={closeMobileMenu}>
              <Image
                src="/images/brightcone.svg"
                alt="Brightcone"
                width={180}
                height={60}
                className="h-6 sm:h-8 w-auto"
                title="Clarity. Focus. Impact."
              />
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Solutions */}
            <Link
              href="#features"
              className="text-foreground hover:text-teal transition-colors py-2 font-medium"
            >
              Solutions
            </Link>

            {/* Products */}
            <Link
              href="#products"
              className="text-foreground hover:text-teal transition-colors py-2 font-medium"
            >
              Products
            </Link>

            {/* Why Choose */}
            <Link
              href="#why-choose"
              className="text-foreground hover:text-teal transition-colors py-2 font-medium"
            >
              Why Us
            </Link>

            {/* Proof of Impact */}
            <Link
              href="#proof-of-impact"
              className="text-foreground hover:text-teal transition-colors py-2 font-medium"
            >
              Impact
            </Link>

            {/* Ecosystem */}
            <Link
              href="#ecosystem"
              className="text-foreground hover:text-teal transition-colors py-2 font-medium"
            >
              Ecosystem
            </Link>

            {/* FAQ */}
            <Link
              href="#faq"
              className="text-foreground hover:text-teal transition-colors py-2 font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Right - Mobile Menu Button & CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* CTA Button - Hidden on smallest screens */}
            <a
              href="https://calendly.com/naresh-vemparala-brightcone/30min?back=1&month=2025-10"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 lg:px-6 py-2 lg:py-2.5 text-xs sm:text-sm font-semibold rounded-[12px] text-white bg-gradient-to-br from-teal to-electric-blue shadow-lg shadow-teal/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal/40"
            >
              Book Demo
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-[10px] text-foreground hover:bg-foreground/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-foreground/10 py-4 px-3 sm:px-6 space-y-1">
            <Link
              href="#features"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-[12px] text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 hover:text-teal transition-all font-medium"
            >
              Solutions
            </Link>
            <Link
              href="#products"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-[12px] text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 hover:text-teal transition-all font-medium"
            >
              Products
            </Link>
            <Link
              href="#why-choose"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-[12px] text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 hover:text-teal transition-all font-medium"
            >
              Why Us
            </Link>
            <Link
              href="#proof-of-impact"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-[12px] text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 hover:text-teal transition-all font-medium"
            >
              Impact
            </Link>
            <Link
              href="#ecosystem"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-[12px] text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 hover:text-teal transition-all font-medium"
            >
              Ecosystem
            </Link>
            <Link
              href="#faq"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-[12px] text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 hover:text-teal transition-all font-medium"
            >
              FAQ
            </Link>

            {/* Mobile CTA */}
            <a
              href="https://calendly.com/naresh-vemparala-brightcone/30min?back=1&month=2025-10"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="block px-4 py-3 mt-2 text-center font-semibold rounded-[12px] text-white bg-gradient-to-br from-teal to-electric-blue shadow-lg shadow-teal/30"
            >
              Book a Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
