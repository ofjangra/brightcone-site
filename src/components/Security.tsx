'use client';

// Icon Components
const ShieldCheckIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-shield-sec" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="url(#grad-shield-sec)" />
  </svg>
);

const LockClosedIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-lock" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="url(#grad-lock)" />
  </svg>
);

const DocumentCheckIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-doc-check" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="url(#grad-doc-check)" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-server" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" stroke="url(#grad-server)" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-check-sec" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" stroke="url(#grad-check-sec)" />
  </svg>
);

const Security = () => {
  const securityFeatures = [
    {
      icon: <ShieldCheckIcon />,
      title: 'Role-Aware Access Control',
      description: 'Enterprise-grade authentication and authorization built for compliance.',
      features: [
        'Role-Based Access Control (RBAC) with granular permissions',
        'Single Sign-On (SSO) integration with Okta, Azure AD, and more',
        'SCIM provisioning for automated user lifecycle management',
        'Multi-tenant isolation with strict data boundaries',
      ],
    },
    {
      icon: <LockClosedIcon />,
      title: 'Data Privacy & Protection',
      description: 'Your data stays secure, private, and under your control.',
      features: [
        'Automatic PII/PHI detection and redaction',
        'End-to-end encryption for data in transit and at rest',
        'Memory encryption to protect sensitive context',
        'Data residency controls - your data never leaves your environment',
      ],
    },
    {
      icon: <DocumentCheckIcon />,
      title: 'Compliance & Governance',
      description: 'Built to meet the strictest regulatory requirements.',
      features: [
        'HIPAA-aligned security controls for healthcare',
        'SOC 2 Type II framework adherence',
        'Comprehensive audit logging and observability',
        'Compliance reporting and certification support',
      ],
    },
    {
      icon: <ServerIcon />,
      title: 'Flexible Deployment Options',
      description: 'Deploy Brightcone where your security policies require.',
      features: [
        'SaaS - Fully managed cloud deployment',
        'VPC - Isolated deployment in your cloud environment',
        'On-Premises - Complete control within your data center',
        'Hybrid configurations to meet specific compliance needs',
      ],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-foreground/5 to-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-bold uppercase tracking-wide text-foreground">
              For CIOs & CISOs
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Security & Compliance
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Enterprise Trust Built Into Every Layer
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Brightcone is designed with security, privacy, and compliance at its core - giving IT leaders the
            confidence to deploy AI at scale without compromising on governance.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20"
            >
              {/* Icon */}
              <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-teal transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 mb-6">
                {feature.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-br from-teal/5 to-electric-blue/5 backdrop-blur-md border border-foreground/10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Built for the Most Regulated Industries
            </h3>
            <p className="text-foreground/80 mb-6">
              From healthcare to financial services, transportation to government, Brightcone is trusted by
              organizations with the strictest security and compliance requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full">
                <span className="text-sm font-semibold text-foreground">HIPAA Aligned</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full">
                <span className="text-sm font-semibold text-foreground">SOC 2 Type II</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full">
                <span className="text-sm font-semibold text-foreground">Zero Trust Architecture</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full">
                <span className="text-sm font-semibold text-foreground">Data Residency Controls</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
