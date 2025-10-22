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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.15), rgba(59, 130, 246, 0.15), transparent)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">From AI Complexity to</span>
          <span className="block bg-gradient-to-r from-teal via-electric-blue to-teal bg-clip-text text-transparent animate-gradient">
            Clarity. Focus. Impact.
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-4xl mx-auto text-lg sm:text-xl text-foreground/80 mb-12 leading-relaxed">
          Most AI projects stall at the pilot stage - too complex, too generic, too risky to scale.
          <span className="block mt-4">
            <strong className="text-foreground">Brightcone.ai</strong> helps enterprises move beyond experiments to impact.
            Our secure, role-aware AI platforms and tailored services are designed to integrate seamlessly
            into your ecosystem and deliver measurable ROI across healthcare, transportation, and enterprise operations.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/book-demo"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal to-electric-blue rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal/50"
          >
            <span className="relative z-10">Book a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-dark to-electric-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/talk-to-expert"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground border-2 border-foreground/20 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-teal hover:text-teal"
          >
            <span className="relative z-10">Talk to an Expert</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal/10 to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Proof Bar */}
        <div className="max-w-5xl mx-auto mb-16">
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
        </div>

        {/* Trusted By Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm uppercase tracking-wider text-foreground/50 mb-8 font-semibold">
            Trusted By Industry Leaders
          </h3>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* Duplicate logos for seamless loop */}
              {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center"
                >
                  {/* Placeholder for actual logos */}
                  <div className="w-full h-full bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-xl flex items-center justify-center text-foreground/30 hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 hover:border-teal/30 transition-all duration-300">
                    <span className="text-sm font-medium">{logo.name}</span>
                  </div>
                </div>
              ))}
            </div>
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
