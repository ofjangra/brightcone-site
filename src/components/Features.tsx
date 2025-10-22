'use client';

import Link from 'next/link';

// Icon Components
const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-check" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="url(#grad-check)" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-feature-lightbulb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="url(#grad-feature-lightbulb)" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-feature-code" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="url(#grad-feature-code)" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-feature-building" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="url(#grad-feature-building)" />
  </svg>
);

const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Solutions
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-foreground/80 leading-relaxed">
            Most enterprises know they should be using AI, but many are stuck in endless pilots that never scale.{' '}
            <strong className="text-foreground">Brightcone's solutions</strong> are designed to cut through the noise,
            reduce risk, and deliver measurable business impact in <strong>weeks, not years</strong>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-16">
          {/* Advisory & Strategy */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20 hover:-translate-y-2">
            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <LightbulbIcon />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-teal transition-colors">
              Advisory & Strategy
            </h3>

            {/* Description */}
            <p className="text-foreground/70 mb-6">
              We guide enterprises from curiosity to clarity with structured adoption roadmaps.
            </p>

            {/* List Items */}
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <div>
                  <strong className="text-foreground block">Use Case Discovery & ROI Modeling</strong>
                  <span className="text-sm text-foreground/60">Prioritize high-value opportunities with clear business cases.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <div>
                  <strong className="text-foreground block">MVP Roadmaps</strong>
                  <span className="text-sm text-foreground/60">Move from ideas to working pilots with defined success criteria.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <div>
                  <strong className="text-foreground block">De-Risked Adoption</strong>
                  <span className="text-sm text-foreground/60">Address governance, compliance, and change management from day one.</span>
                </div>
              </li>
            </ul>

            {/* Outcome */}
            <div className="pt-6 border-t border-foreground/10">
              <p className="text-sm font-semibold text-foreground/50 mb-2">OUTCOME</p>
              <p className="text-foreground/80 italic">
                Clear, executable AI adoption plans that business and IT leaders trust.
              </p>
            </div>
          </div>

          {/* AI Engineering */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/20 hover:-translate-y-2">
            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <CodeIcon />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-electric-blue transition-colors">
              AI Engineering
            </h3>

            {/* Description */}
            <p className="text-foreground/70 mb-6">
              Building the technical foundation for reliable, scalable AI.
            </p>

            {/* List Items */}
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <span className="text-foreground">Agentic Platform</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <span className="text-foreground">Voice Based Agents</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <span className="text-foreground">Predictive AI</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <span className="text-foreground">Agentic RAG</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <span className="text-foreground">Custom LLMs</span>
              </li>
            </ul>

            {/* Outcome */}
            <div className="pt-6 border-t border-foreground/10">
              <p className="text-sm font-semibold text-foreground/50 mb-2">OUTCOME</p>
              <p className="text-foreground/80 italic">
                Production-ready AI systems that are secure, scalable, and measurable.
              </p>
            </div>
          </div>

          {/* Industry-Specific Services */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20 hover:-translate-y-2">
            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <BuildingIcon />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-teal transition-colors">
              Industry-Specific Services
            </h3>

            {/* Description */}
            <p className="text-foreground/70 mb-6">
              Deep expertise in regulated and operationally complex domains.
            </p>

            {/* List Items */}
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <div>
                  <strong className="text-foreground block">Healthcare & Life Sciences</strong>
                  <span className="text-sm text-foreground/60">Clinical insights, claims automation, prior auth support.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <div>
                  <strong className="text-foreground block">Transportation & Logistics</strong>
                  <span className="text-sm text-foreground/60">Predictive scheduling, incident response copilots.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircleIcon />
                </div>
                <div>
                  <strong className="text-foreground block">Enterprise Operations</strong>
                  <span className="text-sm text-foreground/60">Knowledge copilots, HR/IT automation, compliance documentation.</span>
                </div>
              </li>
            </ul>

            {/* Outcome */}
            <div className="pt-6 border-t border-foreground/10">
              <p className="text-sm font-semibold text-foreground/50 mb-2">OUTCOME</p>
              <p className="text-foreground/80 italic">
                Tailored AI that understands your industry's challenges and delivers ROI fast.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-foreground/70 mb-6">
            See how Brightcone solutions fit your enterprise
          </p>
          <Link
            href="/book-demo"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal to-electric-blue rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal/50"
          >
            <span className="relative z-10">Book a Demo</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
