'use client';

import Link from 'next/link';

// Icon Components
const HeartIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-heart-proof" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="url(#grad-heart-proof)" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-truck-proof" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" stroke="url(#grad-truck-proof)" />
  </svg>
);

const OfficeBuildingIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-office-proof" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="url(#grad-office-proof)" />
  </svg>
);

const ProofOfImpact = () => {
  const caseStudies = [
    {
      icon: <HeartIcon />,
      industry: 'Healthcare',
      challenge: 'Lengthy research turnaround times impacting clinical decision-making',
      solution: 'Deployed Bright Insights for AI-powered research summarization and clinical documentation',
      impact: '40% reduction in research turnaround time',
      color: 'teal',
    },
    {
      icon: <TruckIcon />,
      industry: 'Transportation',
      challenge: 'Inefficient scheduling leading to operational delays and resource waste',
      solution: 'Implemented Bright Schedule with predictive AI for optimal resource allocation',
      impact: '30% improvement in scheduling efficiency',
      color: 'electric-blue',
    },
    {
      icon: <OfficeBuildingIcon />,
      industry: 'Enterprise Operations',
      challenge: 'Overwhelming volume of repetitive IT and HR support requests',
      solution: 'Rolled out Bright Bot across IT service desk and HR operations',
      impact: '60% of IT/HR requests automated',
      color: 'teal',
    },
  ];

  // Placeholder client logos
  const clientLogos = [
    { name: 'BART', industry: 'Transportation' },
    { name: 'InpharmD', industry: 'Healthcare' },
    { name: 'AT&T', industry: 'Enterprise' },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent to-foreground/5">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Proof of Impact
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Real results from enterprises that trusted Brightcone to transform their AI adoption journey.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-${study.color}/50 transition-all duration-300 hover:shadow-2xl hover:shadow-${study.color}/20 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {study.icon}
              </div>

              {/* Industry Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                  {study.industry}
                </span>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wide text-foreground/50 mb-2">Challenge</h4>
                <p className="text-sm text-foreground/80">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wide text-foreground/50 mb-2">Solution</h4>
                <p className="text-sm text-foreground/80">{study.solution}</p>
              </div>

              {/* Impact */}
              <div className="pt-4 border-t border-foreground/10">
                <h4 className="text-xs font-bold uppercase tracking-wide text-foreground/50 mb-2">Impact</h4>
                <p className="text-xl font-bold bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
                  {study.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-teal/5 to-electric-blue/5 backdrop-blur-md border border-foreground/10 rounded-3xl">
            <div className="text-center mb-8">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl sm:text-2xl text-foreground/90 italic mb-6">
                &quot;Brightcone delivered faster results than we thought possible and measurable ROI within months.&quot;
              </blockquote>
              <p className="text-foreground/60 font-semibold">
                Director, Fortune 500 Healthcare Provider
              </p>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-12">
          <h3 className="text-center text-sm uppercase tracking-wider text-foreground/50 mb-8 font-semibold">
            Trusted By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-xl hover:border-teal/30 hover:bg-gradient-to-r hover:from-teal/10 hover:to-electric-blue/10 transition-all duration-300"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground mb-1">{client.name}</p>
                  <p className="text-xs text-foreground/50">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground border-2 border-foreground/20 rounded-xl transition-all duration-300 hover:scale-105 hover:border-teal hover:text-teal"
          >
            Explore Full Case Studies
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProofOfImpact;
