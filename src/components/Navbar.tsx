'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Icon Components
const LightbulbIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-lightbulb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="url(#grad-lightbulb)" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-code" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="url(#grad-code)" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-building" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="url(#grad-building)" />
  </svg>
);

const CubeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-cube" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="url(#grad-cube)" />
  </svg>
);

const BotIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-bot" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="url(#grad-bot)" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-chart" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="url(#grad-chart)" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-link" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke="url(#grad-link)" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-brain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="url(#grad-brain)" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-calendar" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="url(#grad-calendar)" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-document" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="url(#grad-document)" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-heart" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="url(#grad-heart)" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-truck" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" stroke="url(#grad-truck)" />
  </svg>
);

const OfficeBuildingIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-office" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="url(#grad-office)" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-users" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" stroke="url(#grad-users)" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-briefcase" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="url(#grad-briefcase)" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-mail" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="url(#grad-mail)" />
  </svg>
);

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="w-[80%] mx-auto bg-background/70 backdrop-blur-lg border border-foreground/10 rounded-2xl shadow-lg px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Branding */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/brightcone.svg"
                alt="Brightcone"
                width={150}
                height={40}
                className="h-8 w-auto"
                title="Clarity. Focus. Impact."
              />
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Solutions */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-foreground hover:text-teal transition-colors py-2 font-medium">
                Solutions
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-background/80 backdrop-blur-lg border border-foreground/10 rounded-xl shadow-xl py-2">
                  <Link
                    href="/advisory-strategy"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <LightbulbIcon />
                    <span className="group-hover:text-teal">Advisory & Strategy</span>
                  </Link>
                  <Link
                    href="/ai-engineering"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <CodeIcon />
                    <span className="group-hover:text-teal">AI Engineering</span>
                  </Link>
                  <Link
                    href="/industry-specific"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <BuildingIcon />
                    <span className="group-hover:text-teal">Industry-Specific Services</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-foreground hover:text-teal transition-colors py-2 font-medium">
                Products
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-background/80 backdrop-blur-lg border border-foreground/10 rounded-xl shadow-xl py-2">
                  <Link
                    href="/brightcone-platform"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <CubeIcon />
                    <span className="group-hover:text-teal">Brightcone Platform</span>
                  </Link>
                  <Link
                    href="/bright-bot"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <BotIcon />
                    <span className="group-hover:text-teal">Bright Bot</span>
                  </Link>
                  <Link
                    href="/bright-insights"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <ChartIcon />
                    <span className="group-hover:text-teal">Bright Insights</span>
                  </Link>
                  <Link
                    href="/bright-connect"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <LinkIcon />
                    <span className="group-hover:text-teal">Bright Connect</span>
                  </Link>
                  <Link
                    href="/bright-predict"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <BrainIcon />
                    <span className="group-hover:text-teal">Bright Predict</span>
                  </Link>
                  <Link
                    href="/bright-schedule"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <CalendarIcon />
                    <span className="group-hover:text-teal">Bright Schedule</span>
                  </Link>
                  <Link
                    href="/bright-notes"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <DocumentIcon />
                    <span className="group-hover:text-teal">Bright Notes</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Industries */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-foreground hover:text-teal transition-colors py-2 font-medium">
                Industries
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-background/80 backdrop-blur-lg border border-foreground/10 rounded-xl shadow-xl py-2">
                  <Link
                    href="/healthcare"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <HeartIcon />
                    <span className="group-hover:text-teal">Healthcare</span>
                  </Link>
                  <Link
                    href="/transportation"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <TruckIcon />
                    <span className="group-hover:text-teal">Transportation</span>
                  </Link>
                  <Link
                    href="/enterprise-ops"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <OfficeBuildingIcon />
                    <span className="group-hover:text-teal">Enterprise Ops</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Case Studies */}
            <Link
              href="/case-studies"
              className="text-foreground hover:text-teal transition-colors py-2 font-medium"
            >
              Case Studies
            </Link>

            {/* Ecosystem */}
            <Link
              href="/ecosystem"
              className="text-foreground hover:text-teal transition-colors py-2 font-medium"
            >
              Ecosystem
            </Link>

            {/* About Us */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-foreground hover:text-teal transition-colors py-2 font-medium">
                About Us
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-background/80 backdrop-blur-lg border border-foreground/10 rounded-xl shadow-xl py-2">
                  <Link
                    href="/leadership"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <UsersIcon />
                    <span className="group-hover:text-teal">Leadership</span>
                  </Link>
                  <Link
                    href="/careers"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <BriefcaseIcon />
                    <span className="group-hover:text-teal">Careers</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all group"
                  >
                    <MailIcon />
                    <span className="group-hover:text-teal">Contact</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right - CTA Button */}
          <div className="flex-shrink-0">
            <Link
              href="/book-demo"
              className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-teal to-electric-blue hover:from-teal-dark hover:to-electric-blue-dark transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
