'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PricingCard from '@/components/PricingCard.jsx';

const PricingPage = () => {
  const pricingTiers = [
    {
      tier: 'Basic website',
      price: '$1,000',
      description: 'A clean, professional website package for businesses that need a strong online presence.',
      features: [
        'Up to 5 pages',
        'Mobile-responsive design',
        'Contact form setup',
        'Basic on-page SEO',
        'SSL setup support',
        'Launch assistance',
      ],
    },
    {
      tier: 'Advanced website',
      price: '$1,500',
      description: 'A more robust website package for businesses that need advanced functionality and polish.',
      features: [
        'Up to 10 pages',
        'Custom design sections and interactions',
        'Advanced performance optimization',
        'Blog or CMS-ready structure',
        'Third-party integrations',
        'Enhanced SEO setup',
        'Post-launch support',
      ],
      highlighted: true,
      popular: true,
    },
    {
      tier: 'Systems (Enterprise)',
      price: 'Custom',
      description: 'Fully custom systems for organizations that need enterprise-grade workflows and integrations.',
      features: [
        'Custom system architecture and development',
        'Complex workflow automation',
        'Internal tools, CRM, or ERP-style builds',
        'API and database integrations',
        'Role-based access and security planning',
        'Scalable infrastructure guidance',
        'Dedicated project planning',
        'Custom support and maintenance options',
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h1
                  className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Simple, transparent pricing
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Choose a package that fits your goals, or contact us for a custom enterprise systems quote.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PricingCard {...tier} />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
              >
                <h2 className="text-2xl font-bold mb-6 text-center">What's included in all plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium mb-1">No hidden fees</p>
                      <p className="text-sm text-muted-foreground">Transparent pricing with no surprise charges</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium mb-1">Flexible contracts</p>
                      <p className="text-sm text-muted-foreground">Month-to-month or annual billing options</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium mb-1">Source code ownership</p>
                      <p className="text-sm text-muted-foreground">You own all custom code we write for you</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium mb-1">Documentation included</p>
                      <p className="text-sm text-muted-foreground">Complete technical documentation for all projects</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Need a custom solution?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Every business is different. If our standard packages don't quite fit, we'll create a custom proposal tailored to your specific requirements and budget.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-muted rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-4">Frequently asked questions</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-2">Can I upgrade or downgrade my plan?</p>
                    <p className="text-sm text-muted-foreground">Yes, you can change your plan at any time. We'll prorate the difference for the current billing period.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">What payment methods do you accept?</p>
                    <p className="text-sm text-muted-foreground">We accept bank transfers, credit cards, and can set up invoicing for enterprise clients.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Is there a setup fee?</p>
                    <p className="text-sm text-muted-foreground">Basic and Advanced website packages are fixed-price. Enterprise systems are quoted based on scope and complexity.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">What happens if I need more hours than my plan includes?</p>
                    <p className="text-sm text-muted-foreground">We scope additional work separately. Enterprise support and maintenance are defined in a custom agreement.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;