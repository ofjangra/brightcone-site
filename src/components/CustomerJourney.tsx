'use client';

import Link from 'next/link';

// Icon Components
const CompassIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-compass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" stroke="url(#grad-compass)" />
  </svg>
);

const BeakerIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-beaker" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L7 4z" stroke="url(#grad-beaker)" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-rocket" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" stroke="url(#grad-rocket)" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-check-journey" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" stroke="url(#grad-check-journey)" />
  </svg>
);

const CustomerJourney = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-electric-blue/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Customer Journey
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Wherever You Are in Your AI Journey, Brightcone Meets You There
          </p>
          <p className="max-w-4xl mx-auto text-lg text-foreground/80 leading-relaxed">
            AI adoption isn&apos;t one-size-fits-all. Whether you&apos;re exploring opportunities, testing pilots, or ready to
            scale, Brightcone provides the framework, governance, and outcomes to move forward with confidence.
          </p>
        </div>

        {/* Journey Funnel */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Brightcone Framework Label */}
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-teal to-electric-blue rounded-full">
              <span className="text-white text-sm font-bold uppercase tracking-wide">Brightcone Framework</span>
            </div>
            <div className="mt-4 text-sm text-foreground/60">Guiding your AI journey from discovery to scale</div>
          </div>

          {/* Stage 1: Explorers */}
          <div className="relative mb-8">
            {/* Connecting Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-teal to-electric-blue opacity-30" />

            <div className="group relative bg-gradient-to-br from-teal/10 to-electric-blue/10 backdrop-blur-md border-2 border-teal/30 rounded-3xl p-8 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-teal/20 to-electric-blue/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <CompassIcon />
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
                    Explorers - Discovering Opportunities
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5"><CheckIcon /></div>
                      <span className="text-foreground/80">AI workshops, discovery sessions, and advisory.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5"><CheckIcon /></div>
                      <span className="text-foreground/80">Identify high-value, low-risk use cases with ROI models.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5"><CheckIcon /></div>
                      <span className="text-foreground/80">Build alignment across business, IT, and compliance stakeholders.</span>
                    </li>
                  </ul>

                  {/* Outcome */}
                  <div className="pt-4 border-t border-foreground/10">
                    <p className="text-xs font-semibold text-foreground/50 mb-1">OUTCOME</p>
                    <p className="text-foreground/90 font-semibold">Clarity on where AI can create the most impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2: Pilots */}
          <div className="relative mb-8 mx-8">
            {/* Connecting Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-teal to-electric-blue opacity-30" />

            <div className="group relative bg-gradient-to-br from-teal/10 to-electric-blue/10 backdrop-blur-md border-2 border-electric-blue/30 rounded-3xl p-8 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/20 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-teal/20 to-electric-blue/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <BeakerIcon />
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
                    Pilots - Testing & Learning
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5"><CheckIcon /></div>
                      <span className="text-foreground/80">Launch MVP assistants with clear success criteria.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5"><CheckIcon /></div>
                      <span className="text-foreground/80">De-risk adoption with governance guardrails (RBAC, audit logs, redaction).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5"><CheckIcon /></div>
                      <span className="text-foreground/80">Prove business value within weeks, not years.</span>
                    </li>
                  </ul>

                  {/* Outcome */}
                  <div className="pt-4 border-t border-foreground/10">
                    <p className="text-xs font-semibold text-foreground/50 mb-1">OUTCOME</p>
                    <p className="text-foreground/90 font-semibold">Proof of impact with minimized risk.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3: Scalers */}
          <div className="relative mx-16">
            <div className="group relative bg-gradient-to-br from-teal/10 to-electric-blue/10 backdrop-blur-md border-2 border-teal/30 rounded-3xl p-8 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-teal/20 to-electric-blue/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <RocketIcon />
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
                    Scalers - Expanding Across the Enterprise
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5"><CheckIcon /></div>
                      <span className="text-foreground/80">Move from pilots to production with full rollout playbooks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5"><CheckIcon /></div>
                      <span className="text-foreground/80">Ensure adoption with observability, monitoring, and training.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5"><CheckIcon /></div>
                      <span className="text-foreground/80">Scale across teams, geographies, and business units - securely.</span>
                    </li>
                  </ul>

                  {/* Outcome */}
                  <div className="pt-4 border-t border-foreground/10">
                    <p className="text-xs font-semibold text-foreground/50 mb-1">OUTCOME</p>
                    <p className="text-foreground/90 font-semibold">Enterprise-wide impact, measurable ROI, and sustainable adoption.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/discovery-session"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal to-electric-blue rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal/50"
          >
            See Where You Fit - Book a Discovery Session
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;
