'use client';

import Link from 'next/link';

// Icon Components
const SearchIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-search" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="url(#grad-search)" />
  </svg>
);

const CogIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-cog" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="url(#grad-cog)" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="url(#grad-cog)" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-rocket-delivery" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" stroke="url(#grad-rocket-delivery)" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-check-delivery" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" stroke="url(#grad-check-delivery)" />
  </svg>
);

const DeliveryApproach = () => {
  const phases = [
    {
      phase: 'Discovery',
      weeks: 'Weeks 0–2',
      icon: <SearchIcon />,
      items: [
        'Conduct data scans and system assessments.',
        'Score and prioritize AI use cases with ROI models.',
        'Establish governance, compliance, and security guardrails.',
      ],
      outcome: 'A clear roadmap aligned with business goals and IT requirements.',
    },
    {
      phase: 'MVP',
      weeks: 'Weeks 3–6',
      icon: <CogIcon />,
      items: [
        'Deploy a pilot assistant with role-aware access controls.',
        'Test workflows with real users and defined success criteria.',
        'Build confidence with audit logs, redaction, and observability baked in.',
      ],
      outcome: 'A validated proof of impact with minimized risk.',
    },
    {
      phase: 'Scale',
      weeks: 'Weeks 7–12',
      icon: <RocketIcon />,
      items: [
        'Roll out production-ready deployment across teams or departments.',
        'Enable observability dashboards for quality, usage, and ROI tracking.',
        'Train end users and ensure adoption with playbooks and support.',
      ],
      outcome: 'Enterprise-wide deployment delivering measurable ROI within 90 days.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Delivery Approach - 90 Days to Impact
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold mb-6 text-foreground">
            From Idea to Enterprise-Scale AI in 90 Days
          </p>
          <p className="max-w-4xl mx-auto text-lg text-foreground/80 leading-relaxed">
            Brightcone takes the guesswork out of AI adoption. Our proven 3-phase methodology ensures your
            organization moves from exploration to measurable impact - securely, responsibly, and fast.
          </p>
        </div>

        {/* Brightcone Framework Badge */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-teal to-electric-blue rounded-full">
            <span className="text-white text-sm font-bold uppercase tracking-wide">
              Brightcone Framework — Proven Path to Impact
            </span>
          </div>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-teal via-electric-blue to-teal opacity-30" />

            {/* Timeline Items */}
            <div className="grid grid-cols-3 gap-8 relative">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal to-electric-blue rounded-full z-10 ring-4 ring-background" />

                  {/* Card */}
                  <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20 hover:-translate-y-2">
                    {/* Icon */}
                    <div className="mb-4 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {phase.icon}
                    </div>

                    {/* Phase Title */}
                    <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
                      {phase.phase}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4 font-semibold">{phase.weeks}</p>

                    {/* Items */}
                    <ul className="space-y-3 mb-6">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="mt-0.5">
                            <CheckIcon />
                          </div>
                          <span className="text-sm text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Outcome */}
                    <div className="pt-4 border-t border-foreground/10">
                      <p className="text-xs font-semibold text-foreground/50 mb-2">OUTCOME</p>
                      <p className="text-sm text-foreground/90 font-semibold">{phase.outcome}</p>
                    </div>

                    {/* Arrow (except last) */}
                    {index < phases.length - 1 && (
                      <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden xl:block">
                        <svg className="w-8 h-8 text-teal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden mb-16 space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < phases.length - 1 && (
                <div className="absolute left-[31px] top-full w-0.5 h-8 bg-gradient-to-b from-teal to-electric-blue opacity-30 z-0" />
              )}

              <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {phase.icon}
                  </div>

                  <div className="flex-1">
                    {/* Phase Title */}
                    <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
                      {phase.phase}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4 font-semibold">{phase.weeks}</p>

                    {/* Items */}
                    <ul className="space-y-3 mb-6">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="mt-0.5">
                            <CheckIcon />
                          </div>
                          <span className="text-sm text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Outcome */}
                    <div className="pt-4 border-t border-foreground/10">
                      <p className="text-xs font-semibold text-foreground/50 mb-2">OUTCOME</p>
                      <p className="text-sm text-foreground/90 font-semibold">{phase.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://calendly.com/naresh-vemparala-brightcone/30min?back=1&month=2025-10"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal to-electric-blue rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal/50"
          >
            Start Your 90-Day AI Journey → Book a Demo
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliveryApproach;
