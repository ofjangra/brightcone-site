'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Placeholder logos - replace with actual client logos
  const trustedLogos = [
    { name: 'Company 1', placeholder: true },
    { name: 'Company 2', placeholder: true },
    { name: 'Company 3', placeholder: true },
    { name: 'Company 4', placeholder: true },
    { name: 'Company 5', placeholder: true },
    { name: 'Company 6', placeholder: true },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden hero bg-gradient-to-br from-background via-teal/5 to-electric-blue/5">
      {/* Animated Background Gradient - iOS style */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(20, 184, 166, 0.12), transparent 50%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.12), transparent 50%)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
        backgroundSize: '100% 100%',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-6 sm:pb-8 text-center flex-1 flex flex-col justify-center">
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <span className="block">From AI Complexity to</span>
          <span className="block bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent animate-gradient">
            Clarity. Focus. Impact.
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 mb-8 sm:mb-12 leading-relaxed px-4">
          Most AI projects stall at the pilot stage - too complex, too generic, too risky to scale.
          <span className="block mt-2 sm:mt-4">
            <strong className="text-foreground">Brightcone.ai</strong> helps enterprises move beyond experiments to impact.
            Our secure, role-aware AI platforms and tailored services are designed to integrate seamlessly
            into your ecosystem and deliver measurable ROI across healthcare, transportation, and enterprise operations.
          </span>
        </p>

        {/* CTAs - iOS style */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link
            href="/book-demo"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-br from-teal to-electric-blue rounded-[14px] overflow-hidden shadow-lg shadow-teal/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal/40"
          >
            <span className="relative z-10">Book a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-dark to-electric-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/talk-to-expert"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-foreground backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-[14px] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/80 dark:hover:bg-white/20 hover:shadow-lg"
          >
            <span className="relative z-10">Talk to an Expert</span>
          </Link>
        </div>

        {/* Proof Bar */}
        {/* <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl">
            <div className="group text-center transition-transform duration-300 hover:scale-110">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm sm:text-base text-foreground/70 group-hover:text-foreground transition-colors">
                Client Satisfaction
              </div>
            </div>

            <div className="group text-center transition-transform duration-300 hover:scale-110">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-electric-blue to-teal bg-clip-text text-transparent mb-2">
                TBD
              </div>
              <div className="text-sm sm:text-base text-foreground/70 group-hover:text-foreground transition-colors">
                End Users Reached
              </div>
            </div>

            <div className="group text-center transition-transform duration-300 hover:scale-110">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent mb-2">
                30+
              </div>
              <div className="text-sm sm:text-base text-foreground/70 group-hover:text-foreground transition-colors">
                Enterprise Clients
              </div>
            </div>

            <div className="group text-center transition-transform duration-300 hover:scale-110">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-electric-blue to-teal bg-clip-text text-transparent mb-2">
                50%
              </div>
              <div className="text-sm sm:text-base text-foreground/70 group-hover:text-foreground transition-colors">
                Faster Time-to-Impact
              </div>
            </div>
          </div>
        </div> */}

      </div>

      {/* Trusted By Section - Pinned to Bottom - iOS style */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-foreground/40 mb-4 sm:mb-8 font-medium text-center">
          Trusted By Industry Leaders
        </h3>

        {/* Logo Carousel - iOS frosted glass cards */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Duplicate logos for seamless loop */}
            {[...trustedLogos, ...trustedLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 mx-2 sm:mx-3 md:mx-4 flex items-center justify-center"
              >
                {/* iOS-style frosted glass card */}
                <div className="w-full h-full backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[12px] sm:rounded-[14px] md:rounded-[16px] flex items-center justify-center text-foreground/30 hover:bg-white/60 dark:hover:bg-white/10 hover:border-teal/20 transition-all duration-300 shadow-sm hover:shadow-md">
                  <span className="text-xs sm:text-sm font-medium">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
