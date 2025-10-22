'use client';

import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent to-foreground/5">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-teal/10 to-electric-blue/10 backdrop-blur-lg border-2 border-foreground/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-blue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
              Let's Turn AI Into Impact.
            </h2>

            {/* Copy */}
            <p className="text-xl sm:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Brightcone partners with enterprises to deliver clarity, focus, and outcomes — moving beyond pilots to scale with confidence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book-demo"
                className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-teal to-electric-blue rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal/50"
              >
                Book a Demo
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-foreground border-2 border-foreground/20 rounded-xl transition-all duration-300 hover:scale-105 hover:border-teal hover:text-teal hover:bg-teal/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
