'use client';

import { useState } from 'react';
import Link from 'next/link';

const ChevronDownIcon = () => (
  <svg className="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-check-faq" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" stroke="url(#grad-check-faq)" />
  </svg>
);

interface FAQItem {
  question: string;
  answer: string | { text?: string; list?: string[] }[];
}

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'Can Brightcone deploy in our VPC or on-prem?',
      answer: 'Yes. Brightcone supports multiple deployment options - SaaS, private cloud, VPC, or fully on-premise - including GovCloud-ready environments. This ensures data residency, sovereignty, and compliance with your IT policies.',
    },
    {
      question: 'How do you handle sensitive data (PII/PHI)?',
      answer: [
        { text: 'Brightcone is secure by design:' },
        {
          list: [
            'Built-in PII/PHI redaction before model access.',
            'Role-Based Access Control (RBAC) to segment knowledge by team or department.',
            'Tenant isolation with encrypted memory for every client.',
            'Audit logs capturing every user, query, and response for compliance.',
          ],
        },
      ],
    },
    {
      question: 'What if models change (e.g., GPT, Claude, Gemini)?',
      answer: 'Brightcone is model-agnostic. We support OpenAI GPT, Anthropic Claude, Google Gemini, Mistral, Azure OpenAI and BYO models. Our model routing and fallback system ensures continuity, resilience, and cost optimization even if a vendor changes.',
    },
    {
      question: 'How do you measure ROI?',
      answer: [
        { text: 'ROI is built into every engagement:' },
        {
          list: [
            'Baselines defined during Discovery (manual time, costs, error rates).',
            'Dashboards tracking time saved, resolution rates, adoption metrics, and cost reduction.',
            'Regular impact reviews with stakeholders to ensure AI is driving measurable value.',
          ],
        },
      ],
    },
    {
      question: 'What systems does Brightcone integrate with?',
      answer: 'Brightcone plugs into your existing stack - no rip-and-replace. Pre-built connectors include ServiceNow, Jira, Salesforce, Outlook, Teams, Slack, Confluence, and EHR/HL7/FHIR systems, plus APIs for custom tools.',
    },
    {
      question: 'How does Brightcone support compliance (HIPAA, SOC2)?',
      answer: [
        { text: 'Brightcone aligns with enterprise-grade security and compliance frameworks:' },
        {
          list: [
            'HIPAA-style controls for healthcare clients.',
            'SOC2-style audit logging and encryption for enterprise IT.',
          ],
        },
        { text: 'We inherit your IAM, encryption, and logging policies to ensure compliance from day one.' },
      ],
    },
    {
      question: 'How quickly can we see results?',
      answer: [
        { text: 'Most clients see impact in under 90 days.' },
        {
          list: [
            'Weeks 0–2: Discovery and governance setup.',
            'Weeks 3–6: Pilot assistant live with success criteria.',
            'Weeks 7–12: Scale to production with ROI dashboards.',
          ],
        },
      ],
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const renderAnswer = (answer: string | { text?: string; list?: string[] }[]) => {
    if (typeof answer === 'string') {
      return <p className="text-foreground/80">{answer}</p>;
    }

    return (
      <div className="space-y-4">
        {answer.map((section, idx) => (
          <div key={idx}>
            {section.text && <p className="text-foreground/80">{section.text}</p>}
            {section.list && (
              <ul className="space-y-3 mt-3">
                {section.list.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-teal/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/80">
            Get answers to common questions about Brightcone's platform, security, and implementation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqItems.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div
                key={index}
                className={`group relative bg-background/50 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-teal/50 shadow-2xl shadow-teal/20'
                    : 'border-foreground/10 hover:border-foreground/20'
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left transition-all duration-300"
                >
                  <h3
                    className={`text-lg font-bold pr-8 transition-colors duration-300 ${
                      isOpen ? 'text-teal' : 'text-foreground'
                    }`}
                  >
                    {item.question}
                  </h3>

                  {/* Chevron */}
                  <div
                    className={`flex-shrink-0 text-foreground/60 ${
                      isOpen ? 'rotate-180 text-teal' : ''
                    }`}
                  >
                    <ChevronDownIcon />
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    {renderAnswer(item.answer)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-teal/5 to-electric-blue/5 backdrop-blur-md border border-foreground/10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Still have questions?</h3>
            <p className="text-foreground/70 mb-6">
              Our team is here to help you understand how Brightcone can transform your AI adoption.
            </p>
            <Link
              href="/talk-to-expert"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal to-electric-blue rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal/50"
            >
              Talk to an Expert
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
