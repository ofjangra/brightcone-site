'use client';

import Link from 'next/link';

// Icon Components
const DocumentTextIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <defs>
      <linearGradient id="grad-doc-insights" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="url(#grad-doc-insights)" />
  </svg>
);

const Insights = () => {
  const blogPosts = [
    {
      title: 'From Pilots to Production: The 90-Day AI Playbook',
      excerpt: 'Learn how enterprises move from AI experiments to measurable impact in just 90 days with our proven methodology.',
      category: 'Best Practices',
      readTime: '8 min read',
      link: '/blog/pilots-to-production',
    },
    {
      title: 'RAG Without Hallucinations: How to Build Trustworthy AI',
      excerpt: 'Discover the techniques and governance frameworks that ensure your RAG systems deliver accurate, reliable results.',
      category: 'Technical',
      readTime: '10 min read',
      link: '/blog/rag-without-hallucinations',
    },
    {
      title: 'AI Governance That Works: Compliance for CIOs and CISOs',
      excerpt: 'A practical guide to implementing enterprise-grade AI governance that satisfies security, compliance, and business requirements.',
      category: 'Security & Compliance',
      readTime: '12 min read',
      link: '/blog/ai-governance-compliance',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-foreground/5 to-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal to-electric-blue bg-clip-text text-transparent">
            Insights & Thought Leadership
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Expert insights on AI adoption, governance, and best practices for enterprise success.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.link}
              className="group relative bg-background/50 backdrop-blur-md border border-foreground/10 rounded-2xl p-6 hover:border-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/20 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-4 inline-block p-3 bg-gradient-to-br from-teal/10 to-electric-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <DocumentTextIcon />
              </div>

              {/* Category & Read Time */}
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal/20 to-electric-blue/20 rounded-full text-xs font-semibold text-foreground">
                  {post.category}
                </span>
                <span className="text-xs text-foreground/50">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-teal transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More */}
              <div className="flex items-center text-sm font-semibold text-teal group-hover:gap-2 transition-all">
                <span>Read More</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/insights"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground border-2 border-foreground/20 rounded-xl transition-all duration-300 hover:scale-105 hover:border-teal hover:text-teal"
          >
            Subscribe to Insights
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
