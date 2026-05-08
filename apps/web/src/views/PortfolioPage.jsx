'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Meridian Labs inventory system',
      industry: 'Healthcare',
      description: 'Custom inventory management system for medical equipment tracking across multiple facilities with real-time stock monitoring.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      outcome: 'Reduced inventory discrepancies by 87% and improved order fulfillment time by 43%',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    },
    {
      title: 'Coastal Roasters e-commerce platform',
      industry: 'Retail',
      description: 'Full-featured online store with subscription management, inventory sync, and integrated payment processing.',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
      outcome: 'Processed $2.4M in online sales within first year, 94% customer satisfaction',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e',
    },
    {
      title: 'Elm & Oak security infrastructure',
      industry: 'Manufacturing',
      description: 'Comprehensive security camera system with 48 IP cameras, facial recognition, and automated access control.',
      technologies: ['IP Cameras', 'Biometric Systems', 'Cloud Storage'],
      outcome: 'Zero security incidents in 18 months, 99.8% system uptime',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9',
    },
    {
      title: 'TechBridge attendance portal',
      industry: 'Technology',
      description: 'Biometric attendance system integrated with payroll software for 300+ employees across 4 locations.',
      technologies: ['Fingerprint Scanners', 'React', 'Express', 'MySQL'],
      outcome: 'Eliminated time theft, saved 12 hours/week in payroll processing',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    },
    {
      title: 'Greenfield Logistics dashboard',
      industry: 'Logistics',
      description: 'Real-time fleet tracking and route optimization system with predictive maintenance alerts.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Google Maps API'],
      outcome: 'Reduced fuel costs by 23%, improved on-time delivery to 96.4%',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    },
    {
      title: 'Apex Financial CRM',
      industry: 'Finance',
      description: 'Custom client relationship management system with document management and compliance tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
      outcome: 'Improved client onboarding speed by 58%, enhanced compliance reporting',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    },
    {
      title: 'Horizon Education LMS',
      industry: 'Education',
      description: 'Learning management system with video streaming, assignment tracking, and automated grading.',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS CloudFront'],
      outcome: 'Served 12,000+ students, 97% platform satisfaction rating',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    },
    {
      title: 'Silverline Hospitality booking system',
      industry: 'Hospitality',
      description: 'Multi-property reservation system with channel management and dynamic pricing engine.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Stripe'],
      outcome: 'Increased direct bookings by 67%, reduced OTA commission costs by $180K/year',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
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
                  Our work
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Real projects, real results. See how we've helped businesses across industries implement technology solutions that drive growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PortfolioCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Your project could be next
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  We're always looking for new challenges. Let's discuss how we can help you achieve similar results.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;