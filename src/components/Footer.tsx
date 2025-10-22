'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const navigation = {
    column1: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Products', href: '/products' },
    ],
    column2: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Ecosystem', href: '/ecosystem' },
      { name: 'Insights', href: '/insights' },
    ],
    column3: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const social = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/brightcone',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/brightcone',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@brightcone',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/brightcone',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-foreground/5 to-foreground/10 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row - Quick Navigation */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground/50 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.column1.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-teal transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground/50 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.column2.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-teal transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground/50 mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {navigation.column3.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-teal transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle - Legal Links */}
        <div className="py-6 border-y border-foreground/10">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {legal.map((item, index) => (
              <div key={item.name} className="flex items-center gap-4">
                <Link
                  href={item.href}
                  className="text-foreground/60 hover:text-teal transition-colors duration-200"
                >
                  {item.name}
                </Link>
                {index < legal.length - 1 && (
                  <span className="text-foreground/30">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Brand, Contact, Socials */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - Logo & Tagline */}
            <div className="text-center md:text-left">
              <Link href="/" className="inline-block mb-2">
                <Image
                  src="/images/brightcone.svg"
                  alt="Brightcone"
                  width={150}
                  height={40}
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-sm text-foreground/50 italic">Clarity. Focus. Impact.</p>
            </div>

            {/* Center - Contact Info */}
            <div className="text-center text-sm text-foreground/70 space-y-1">
              <p>
                <a
                  href="mailto:hello@brightcone.ai"
                  className="hover:text-teal transition-colors duration-200"
                >
                  hello@brightcone.ai
                </a>
              </p>
              <p className="text-foreground/50">San Francisco, CA</p>
            </div>

            {/* Right - Social Icons */}
            <div className="flex justify-center md:justify-end gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-teal transition-all duration-200 hover:scale-110"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bar - Copyright */}
        <div className="py-6 border-t border-foreground/10">
          <p className="text-center text-xs text-foreground/50">
            © 2025 Brightcone.ai. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
