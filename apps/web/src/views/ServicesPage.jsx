'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Database, Camera, Fingerprint, KeyRound, HardDrive, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Website development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Node.js. We create responsive, fast, and user-friendly websites tailored to your business needs.',
      features: [
        'Responsive design for all devices',
        'SEO optimization and performance tuning',
        'Content management systems',
        'E-commerce solutions',
        'Progressive web applications',
      ],
      variant: 'large',
    },
    {
      icon: Database,
      title: 'Custom systems',
      description: 'Bespoke software solutions designed to automate workflows, manage data, and integrate with your existing tools.',
      features: [
        'Business process automation',
        'Custom CRM and ERP systems',
        'API development and integration',
        'Cloud-based solutions',
      ],
    },
    {
      icon: Camera,
      title: 'Security camera installation',
      description: 'Professional installation and configuration of IP camera systems with remote monitoring capabilities.',
      features: [
        'HD and 4K camera systems',
        'Remote viewing via mobile apps',
        'Motion detection and alerts',
        'Cloud and local storage options',
      ],
    },
    {
      icon: Fingerprint,
      title: 'Attendance systems',
      description: 'Biometric and RFID-based attendance tracking systems for accurate employee time management.',
      features: [
        'Fingerprint and facial recognition',
        'Real-time attendance reports',
        'Integration with payroll systems',
        'Multi-location support',
      ],
    },
    {
      icon: KeyRound,
      title: 'Entry pass systems',
      description: 'Access control solutions including card readers, biometric scanners, and automated gate systems.',
      features: [
        'RFID and biometric access control',
        'Visitor management systems',
        'Integration with security cameras',
        'Audit trails and reporting',
      ],
    },
    {
      icon: HardDrive,
      title: 'Hardware supplies',
      description: 'Quality IT hardware procurement and installation services for servers, networking equipment, and workstations.',
      features: [
        'Server and storage solutions',
        'Networking equipment',
        'Workstation setup and configuration',
        'Warranty and support services',
      ],
    },
    {
      icon: Headphones,
      title: 'IT consulting',
      description: 'Strategic technology guidance to help you make informed decisions about infrastructure, security, and digital transformation.',
      features: [
        'Technology strategy and planning',
        'Infrastructure assessment',
        'Security audits and compliance',
        'Digital transformation roadmaps',
        'Vendor selection and management',
      ],
      variant: 'large',
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
                  Services we offer
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From software development to hardware installation, we provide comprehensive IT solutions to help your business operate efficiently and securely.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={service.variant === 'large' ? 'md:col-span-2' : ''}
                  >
                    <ServiceCard {...service} />
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
                  Not sure which service you need?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Our team can help you identify the right solutions for your business. Schedule a free consultation to discuss your requirements.
                </p>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button className="transition-all duration-200 active:scale-[0.98]">
                      Schedule Consultation
                    </Button>
                  </Link>
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

export default ServicesPage;