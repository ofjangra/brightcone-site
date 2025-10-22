'use client';

import Link from 'next/link';

// Icon Components
const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-check-product" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" stroke="url(#grad-check-product)" />
  </svg>
);

const CubeIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-cube-product" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="url(#grad-cube-product)" />
  </svg>
);

const BotIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-bot-product" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="url(#grad-bot-product)" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-doc-product" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="url(#grad-doc-product)" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-phone-product" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="url(#grad-phone-product)" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-users-product" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" stroke="url(#grad-users-product)" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-calendar-product" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="url(#grad-calendar-product)" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-clipboard-product" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="url(#grad-clipboard-product)" />
  </svg>
);

const Products = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-transparent to-foreground/5">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-blue/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-foreground/80 leading-relaxed">
            At <strong className="text-foreground">Brightcone.ai</strong>, we don&apos;t just advise - we deliver enterprise-ready
            AI platforms and solutions that scale with your business. Our flagship <strong>Brightcone Platform</strong> provides
            the secure, governed AI foundation enterprises need, while our product suite addresses specific business
            challenges across industries.
          </p>
        </div>

        {/* Flagship Product - Brightcone Platform */}
        <div className="mb-20">
          <div className=" flagship-product  relative bg-gradient-to-br from-teal/5 to-electric-blue/5 backdrop-blur-md border-2 border-foreground/10 rounded-3xl p-8 md:p-12 hover:border-teal/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal/20">
            {/* Featured Badge */}
            
            <div className="absolute -top-4 left-8 px-6 py-2 bg-gradient-to-r from-teal to-electric-blue rounded-full">
              <span className="text-white text-sm font-bold uppercase tracking-wide">Flagship Product</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal/20 to-electric-blue/20 rounded-2xl">
                  <CubeIcon />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
                  Brightcone Platform
                </h3>

                {/* Description */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  The Brightcone Platform is a secure, role-aware AI assistant platform built for modern enterprises.
                  It combines the ease of ChatGPT with the governance, integrations, and security your IT, compliance,
                  and business teams demand.
                </p>
              </div>

              <div>
                {/* Features List */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 p-1 bg-teal/10 rounded-full">
                      <CheckIcon />
                    </div>
                    <div>
                      <strong className="text-foreground">Grounded in your data</strong>
                      <p className="text-sm text-foreground/60">Contextual answers powered by your knowledge bases.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 p-1 bg-teal/10 rounded-full">
                      <CheckIcon />
                    </div>
                    <div>
                      <strong className="text-foreground">Role-aware</strong>
                      <p className="text-sm text-foreground/60">Tailored responses for HR, IT, Finance, and beyond.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 p-1 bg-teal/10 rounded-full">
                      <CheckIcon />
                    </div>
                    <div>
                      <strong className="text-foreground">Governed & secure</strong>
                      <p className="text-sm text-foreground/60">Audit logs, encryption, PII/PHI redaction.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 p-1 bg-teal/10 rounded-full">
                      <CheckIcon />
                    </div>
                    <div>
                      <strong className="text-foreground">Integration-ready</strong>
                      <p className="text-sm text-foreground/60">Connects with Jira, Outlook, ServiceNow, Salesforce, and more.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 p-1 bg-teal/10 rounded-full">
                      <CheckIcon />
                    </div>
                    <div>
                      <strong className="text-foreground">Flexible deployment</strong>
                      <p className="text-sm text-foreground/60">SaaS, private cloud, VPC, or on-prem.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 p-1 bg-teal/10 rounded-full">
                      <CheckIcon />
                    </div>
                    <div>
                      <strong className="text-foreground">Memory aware agentic platform</strong>
                      <p className="text-sm text-foreground/60">Intelligent automation with context retention.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Outcome */}
            <div className="mt-8 pt-8 border-t border-foreground/10">
              <p className="text-sm font-semibold text-foreground/50 mb-2">OUTCOME</p>
              <p className="text-lg text-foreground/90 italic mb-6">
                Move from questions to actions through secure, intelligent, and agentic automation.
              </p>

              {/* CTA */}
              <Link
                href="/brightcone-platform"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-teal to-electric-blue rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal/40"
              >
                See Brightcone in Action
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Suite Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Brightcone Product Suite</h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Purpose-built AI solutions designed to solve specific business challenges across your organization.
          </p>
        </div>

        {/* Product Suite Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Bright Bot */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 hover:border-teal/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1">
            <div className="mb-4 inline-block p-3 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform">
              <BotIcon />
            </div>
            <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-teal transition-colors">
              Bright Bot
            </h4>
            <p className="text-sm text-foreground/50 mb-4 font-semibold">AI-Powered Help Desk</p>
            <p className="text-foreground/70 mb-4">
              An advanced AI-powered help desk assistant that delivers instant responses, automated reports, and integrated workflows.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Seamlessly connects to ITSM systems</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Reduces response times</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Boosts customer and employee satisfaction</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-foreground/10">
              <p className="text-xs font-semibold text-foreground/50 mb-1">OUTCOME</p>
              <p className="text-sm text-foreground/80 italic">Faster resolution, lower support costs, happier users.</p>
            </div>
          </div>

          {/* Bright Insights */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-electric-blue/10 hover:-translate-y-1">
            <div className="mb-4 inline-block p-3 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform">
              <DocumentIcon />
            </div>
            <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-electric-blue transition-colors">
              Bright Insights
            </h4>
            <p className="text-sm text-foreground/50 mb-4 font-semibold">Document Intelligence</p>
            <p className="text-foreground/70 mb-4">
              AI-powered document summarization and predictive insights.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Summarizes research, SOPs, and reports in seconds</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Extracts key insights and generates department-specific LLMs</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Adds predictive forecasting to anticipate future trends</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-foreground/10">
              <p className="text-xs font-semibold text-foreground/50 mb-1">OUTCOME</p>
              <p className="text-sm text-foreground/80 italic">Smarter, faster decisions for every department.</p>
            </div>
          </div>

          {/* Bright Connect */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 hover:border-teal/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1">
            <div className="mb-4 inline-block p-3 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform">
              <PhoneIcon />
            </div>
            <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-teal transition-colors">
              Bright Connect
            </h4>
            <p className="text-sm text-foreground/50 mb-4 font-semibold">Omnichannel AI Contact Center</p>
            <p className="text-foreground/70 mb-4">
              An AI-powered contact center for employee, customer, and patient engagement.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Handles queries across voice, chat, and email</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Multilingual support, 24/7 availability</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Resolves requests faster with higher accuracy</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-foreground/10">
              <p className="text-xs font-semibold text-foreground/50 mb-1">OUTCOME</p>
              <p className="text-sm text-foreground/80 italic">Lower wait times, reduced agent load, improved satisfaction.</p>
            </div>
          </div>

          {/* Bright Predict */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-electric-blue/10 hover:-translate-y-1">
            <div className="mb-4 inline-block p-3 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform">
              <UsersIcon />
            </div>
            <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-electric-blue transition-colors">
              Bright Predict
            </h4>
            <p className="text-sm text-foreground/50 mb-4 font-semibold">Workforce Forecasting</p>
            <p className="text-foreground/70 mb-4">
              An AI solution to anticipate workforce needs with precision.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Forecasts attrition, shrinkage, and hiring demand</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Helps organizations right-size staffing levels</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Improves efficiency, retention, and planning</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-foreground/10">
              <p className="text-xs font-semibold text-foreground/50 mb-1">OUTCOME</p>
              <p className="text-sm text-foreground/80 italic">Optimize workforce management, reduce costs, and improve employee experience.</p>
            </div>
          </div>

          {/* Bright Schedule */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 hover:border-teal/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1">
            <div className="mb-4 inline-block p-3 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform">
              <CalendarIcon />
            </div>
            <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-teal transition-colors">
              Bright Schedule
            </h4>
            <p className="text-sm text-foreground/50 mb-4 font-semibold">AI-Driven Scheduling</p>
            <p className="text-foreground/70 mb-4">
              A smart AI-driven scheduling system that ensures resources are used optimally.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Creates optimized schedules for teams and departments</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Reduces no-shows and administrative burden</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Improves quality of service delivery</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-foreground/10">
              <p className="text-xs font-semibold text-foreground/50 mb-1">OUTCOME</p>
              <p className="text-sm text-foreground/80 italic">Higher efficiency, lower operational strain, better employee and customer experience.</p>
            </div>
          </div>

          {/* Bright Notes */}
          <div className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-electric-blue/10 hover:-translate-y-1">
            <div className="mb-4 inline-block p-3 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform">
              <ClipboardIcon />
            </div>
            <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-electric-blue transition-colors">
              Bright Notes
            </h4>
            <p className="text-sm text-foreground/50 mb-4 font-semibold">Clinical Documentation Assistant</p>
            <p className="text-foreground/70 mb-4">
              An AI assistant designed for clinicians and healthcare teams.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Automatically generates physician notes, dictation, and summaries</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Reduces administrative burden and documentation errors</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckIcon />
                <span>Helps healthcare workers focus more on patient care</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-foreground/10">
              <p className="text-xs font-semibold text-foreground/50 mb-1">OUTCOME</p>
              <p className="text-sm text-foreground/80 italic">Improve clinician productivity and patient outcomes while reducing burnout.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 md:p-12 bg-gradient-to-br from-teal/5 to-electric-blue/5 backdrop-blur-md border border-foreground/10 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Unlock the Power of AI - Safely, Intelligently, and at Enterprise Scale.
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              From workforce automation to clinical insights, Brightcone&apos;s platform and product suite enable enterprises to adopt AI responsibly and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal to-electric-blue rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal/50"
              >
                Book a Demo
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/talk-to-expert"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground border-2 border-foreground/20 rounded-xl transition-all duration-300 hover:scale-105 hover:border-teal hover:text-teal"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
