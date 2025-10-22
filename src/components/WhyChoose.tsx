'use client';

import { useState } from 'react';

// Icon Components
const ShieldCheckIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-shield-check" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="url(#grad-shield-check)" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-trending" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="url(#grad-trending)" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-target" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" stroke="url(#grad-target)" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-cloud-why" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" stroke="url(#grad-cloud-why)" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-star" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" stroke="url(#grad-star)" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-check-why" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" stroke="url(#grad-check-why)" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

interface AccordionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  collapsedView: string;
  expandedContent: {
    items: string[];
    quote?: {
      text: string;
      author: string;
    };
  };
}

const WhyChoose = () => {
  const [openItem, setOpenItem] = useState<string | null>('security');

  const accordionItems: AccordionItem[] = [
    {
      id: 'security',
      icon: <ShieldCheckIcon />,
      title: 'Enterprise-Grade Security & Compliance',
      collapsedView: 'Secure, governed, and compliant by design.',
      expandedContent: {
        items: [
          'Role-Based Access Control (RBAC) with tenant isolation.',
          'Built-in PII/PHI redaction and encrypted memory.',
          'Audit logging and observability aligned with HIPAA/SOC frameworks.',
          'Data never leaves your environment unless you choose.',
        ],
      },
    },
    {
      id: 'roi',
      icon: <TrendingUpIcon />,
      title: 'ROI in 90 Days',
      collapsedView: 'From pilots to measurable impact in weeks, not years.',
      expandedContent: {
        items: [
          'Healthcare client reduced research turnaround by 40%.',
          'Transportation partner improved scheduling efficiency by 30%.',
          'Fortune 500 enterprise automated 60% of HR/IT requests.',
          'Brightcone delivers MVPs in weeks and scales to enterprise results in under 90 days.',
        ],
      },
    },
    {
      id: 'methodology',
      icon: <TargetIcon />,
      title: 'Outcome-Oriented Methodology',
      collapsedView: 'A clear, repeatable path from pilots to production.',
      expandedContent: {
        items: [
          'Discover → Identify high-value use cases with ROI models.',
          'Pilot → Launch governed MVPs with success criteria.',
          'Scale → Enterprise-ready rollouts with observability, security, and adoption playbooks.',
          'Each phase is designed to reduce risk and ensure business alignment.',
        ],
      },
    },
    {
      id: 'deployment',
      icon: <CloudIcon />,
      title: 'Flexible Deployments',
      collapsedView: 'Built for any model, any cloud, any environment.',
      expandedContent: {
        items: [
          'SaaS, VPC, or on-prem deployment options.',
          'Multi-model support → GPT, Claude, Gemini, Mistral, or bring your own.',
          'Model routing and fallback to avoid vendor lock-in.',
          'Future-proof adoption with full enterprise flexibility.',
        ],
      },
    },
    {
      id: 'trusted',
      icon: <StarIcon />,
      title: 'Trusted by Fortune 500s & Innovators',
      collapsedView: 'Proven results across healthcare, transportation, and enterprise ops.',
      expandedContent: {
        items: [
          'Powering AI adoption at BART, InpharmD, and AT&T.',
          'Delivering impact across regulated industries and mission-critical operations.',
        ],
        quote: {
          text: 'Brightcone delivered faster results than we thought possible and measurable ROI within months.',
          author: 'Director, Fortune 500 Healthcare Provider',
        },
      },
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-foreground/5 to-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Why Choose Brightcone
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Enterprise AI adoption that&apos;s secure, scalable, and delivers measurable results from day one.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {accordionItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className={`group relative bg-background/50 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-teal/50 shadow-2xl shadow-teal/20'
                    : 'border-foreground/10 hover:border-foreground/20'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-br from-teal/20 to-electric-blue/20 scale-110'
                          : 'bg-gradient-to-br from-teal/10 to-electric-blue/10'
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Title and Collapsed View */}
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                          isOpen ? 'text-teal' : 'text-foreground'
                        }`}
                      >
                        {item.title}
                      </h3>
                      {!isOpen && (
                        <p className="text-sm text-foreground/60">{item.collapsedView}</p>
                      )}
                    </div>
                  </div>

                  {/* Chevron */}
                  <div
                    className={`text-foreground/60 ${
                      isOpen ? 'rotate-180 text-teal' : ''
                    }`}
                  >
                    <ChevronDownIcon />
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-[88px]">
                    {/* Items List */}
                    <ul className="space-y-3 mb-4">
                      {item.expandedContent.items.map((content, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <CheckIcon />
                          </div>
                          <span className="text-foreground/80">{content}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Quote (if exists) */}
                    {item.expandedContent.quote && (
                      <div className="mt-6 p-4 bg-gradient-to-br from-teal/5 to-electric-blue/5 border border-foreground/10 rounded-xl">
                        <p className="text-foreground/90 italic mb-2">
                          &quot;{item.expandedContent.quote.text}&quot;
                        </p>
                        <p className="text-sm text-foreground/60 font-semibold">
                          — {item.expandedContent.quote.author}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
