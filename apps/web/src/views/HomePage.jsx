'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Shield, Cpu, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HighlightCard from '@/components/HighlightCard.jsx';

const HomePage = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Website development',
      description: 'Custom web applications built with modern frameworks and best practices for performance and scalability.',
    },
    {
      icon: Cpu,
      title: 'Custom systems',
      description: 'Tailored software solutions designed to streamline your business operations and boost productivity.',
    },
    {
      icon: Shield,
      title: 'Security solutions',
      description: 'Comprehensive security camera systems and access control to protect your business assets.',
    },
    {
      icon: Headphones,
      title: 'IT consulting',
      description: 'Expert guidance on technology strategy, infrastructure planning, and digital transformation.',
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[78dvh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=3200&q=90)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/96 via-background/88 to-background/92"></div>
            </div>
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top,hsl(42_98%_55%_/_0.35),transparent_45%),radial-gradient(circle_at_bottom_right,hsl(280_65%_42%_/_0.45),transparent_50%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto rounded-3xl border border-white/30 bg-transparent backdrop-blur-2xl px-6 py-8 md:px-10 md:py-12 shadow-[0_14px_70px_-24px_rgba(0,0,0,0.85)]"
              >
                <p className="inline-flex items-center rounded-full border border-white/40 bg-black/30 px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-white mb-5">
                  Trusted technology partner
                </p>
                <h1
                  className="text-3xl md:text-5xl lg:text-[3.5rem] font-semibold leading-tight mb-5 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Professional IT solutions for modern businesses
                </h1>
                <p className="text-base md:text-lg text-white/90 leading-relaxed mb-7 max-w-2xl mx-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]">
                  We build secure, scalable software systems and provide expert IT consulting to help your business thrive in the digital age.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/25">
                      Start your project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="transition-all duration-200 active:scale-[0.98] border-white/40 text-white bg-black/20 hover:bg-black/35 backdrop-blur-sm"
                    >
                      View services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-muted/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What we do best</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  From custom software development to comprehensive IT support, we deliver solutions that drive business growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <HighlightCard {...highlight} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Building technology that works for you
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Since 2018, we've helped businesses across industries implement reliable IT solutions. Our team combines technical expertise with a deep understanding of business needs to deliver systems that actually solve problems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Whether you need a custom web application, security infrastructure, or ongoing IT support, we're here to help you make the right technology decisions.
                  </p>
                  <Link href="/about">
                    <Button variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                      Learn about us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-2 gap-6"
                >
                  <div className="rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-md p-6 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.85)]">
                    <div className="text-4xl font-bold text-primary mb-2">2,847</div>
                    <div className="text-sm text-muted-foreground">Projects completed</div>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-md p-6 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.85)]">
                    <div className="text-4xl font-bold text-primary mb-2">94.7%</div>
                    <div className="text-sm text-muted-foreground">Client satisfaction</div>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-md p-6 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.85)]">
                    <div className="text-4xl font-bold text-primary mb-2">8.2yr</div>
                    <div className="text-sm text-muted-foreground">Average experience</div>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-md p-6 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.85)]">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support available</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-primary text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to transform your business with technology?
                </h2>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  Let's discuss how we can help you build better systems, improve security, and streamline operations.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="transition-all duration-200 active:scale-[0.98]"
                  >
                    Get in touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;