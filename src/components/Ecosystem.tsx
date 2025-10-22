'use client';

// Icon Components
const CloudIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-cloud" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" stroke="url(#grad-cloud)" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-shield" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="url(#grad-shield)" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-eye" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="url(#grad-eye)" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="url(#grad-eye)" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-briefcase-eco" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="url(#grad-briefcase-eco)" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-chat" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="url(#grad-chat)" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-cpu" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" stroke="url(#grad-cpu)" />
  </svg>
);

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-teal/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Partner & Ecosystem
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Brightcone works across your enterprise stack - securely, flexibly, and without rip-and-replace.
          </p>
          <p className="max-w-4xl mx-auto text-lg text-foreground/80 leading-relaxed">
            Brightcone integrates seamlessly with the tools and platforms your teams already rely on. From cloud to
            collaboration, identity to observability, and multiple LLMs, Brightcone ensures your AI ecosystem is
            secure, grounded, and enterprise-ready.
          </p>
        </div>

        {/* Ecosystem Pillars Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Cloud Infrastructure */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20 hover:-translate-y-2">
            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <CloudIcon />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-teal transition-colors">
              Cloud Infrastructure
            </h3>

            {/* Partners */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                AWS
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Azure
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Google Cloud
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/70 text-sm">
              Deploy Brightcone in your cloud of choice for maximum flexibility.
            </p>
          </div>

          {/* Identity & Security */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/20 hover:-translate-y-2">
            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <ShieldIcon />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-electric-blue transition-colors">
              Identity & Security
            </h3>

            {/* Partners */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Okta
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Azure AD
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Ping Identity
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/70 text-sm">
              Enterprise-grade access control aligned with your IAM policies. One login.
            </p>
          </div>

          {/* AI Governance & Observability */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20 hover:-translate-y-2">
            {/* Strategic Partner Badge */}
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-teal to-electric-blue rounded-full">
              <span className="text-white text-xs font-bold uppercase tracking-wide">Strategic Partner</span>
            </div>

            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <EyeIcon />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-teal transition-colors">
              AI Governance & Observability
            </h3>

            {/* Partners */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Polygraf
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/70 text-sm">
              AI trust, security, and observability built in — ensuring responsible, compliant AI adoption.
            </p>
          </div>

          {/* Enterprise Applications & Workflows */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/20 hover:-translate-y-2">
            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <BriefcaseIcon />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-electric-blue transition-colors">
              Enterprise Applications & Workflows
            </h3>

            {/* Partners */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                ServiceNow
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Salesforce
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Jira
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Confluence
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/70 text-sm">
              Pre-built connectors streamline IT, CRM, and knowledge management workflows.
            </p>
          </div>

          {/* Collaboration Tools */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20 hover:-translate-y-2">
            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <ChatIcon />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-teal transition-colors">
              Collaboration Tools
            </h3>

            {/* Partners */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Outlook
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Microsoft Teams
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Slack
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/70 text-sm">
              Bring AI directly into the tools where your workforce already collaborates.
            </p>
          </div>

          {/* Multi-Model AI Support */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/20 hover:-translate-y-2">
            {/* Icon */}
            <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <CpuIcon />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-electric-blue transition-colors">
              Multi-Model AI Support
            </h3>

            {/* Partners */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                OpenAI (GPT)
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Anthropic (Claude)
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Google (Gemini)
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Mistral
              </span>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-sm font-semibold text-foreground">
                Azure OpenAI
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground/70 text-sm">
              Choose the right LLM for the task, with model routing and BYO options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
