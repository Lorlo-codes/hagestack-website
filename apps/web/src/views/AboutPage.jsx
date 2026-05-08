'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Client-focused solutions',
      description: 'We build technology that solves real business problems, not just what looks good on paper.',
    },
    {
      icon: Users,
      title: 'Collaborative approach',
      description: 'Your team knows your business best. We work alongside you to create solutions that fit.',
    },
    {
      icon: Award,
      title: 'Quality over speed',
      description: 'We take the time to build systems right the first time, with proper testing and documentation.',
    },
    {
      icon: TrendingUp,
      title: 'Long-term partnerships',
      description: "We're here for ongoing support and improvements, not just the initial project delivery.",
    },
  ];

  const milestones = [
    { year: '2018', event: 'Founded HageStack with a focus on custom software development' },
    { year: '2019', event: 'Expanded into security systems and hardware installation services' },
    { year: '2021', event: 'Reached 1,000 completed projects milestone' },
    { year: '2023', event: 'Opened second office to serve growing client base' },
    { year: '2025', event: 'Launched 24/7 support program for enterprise clients' },
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
                  About HageStack
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're a team of developers, engineers, and IT specialists who believe technology should make business easier, not more complicated.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Our story</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    HageStack started in 2018 when a group of software developers noticed a gap in the market: businesses needed reliable IT partners who could both build custom software and handle the hardware side of technology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We began with web development projects and quickly expanded into security systems, attendance tracking, and comprehensive IT consulting. Today, we serve clients across healthcare, retail, manufacturing, and finance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    What sets us apart is our commitment to understanding your business first, then recommending technology solutions that actually fit your needs and budget.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4">Our mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To deliver technology solutions that are secure, scalable, and actually solve the problems our clients face every day.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Build systems that work reliably for years, not just months</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Provide honest advice, even when it means recommending simpler solutions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">Support our clients with responsive, knowledgeable service</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <h2 className="text-3xl font-bold text-center mb-12">Our values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <value.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-center mb-12">Our journey</h2>
                <div className="max-w-3xl mx-auto">
                  <div className="space-y-8">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 w-20 text-right mr-6">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        </div>
                        <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary -translate-x-[7px]"></div>
                          <p className="text-muted-foreground leading-relaxed">{milestone.event}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Team expertise</h2>
                <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                  Our team brings together specialists in software development, network security, hardware installation, and IT strategy.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">8.2yr</div>
                    <div className="text-sm text-muted-foreground">Average experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">23</div>
                    <div className="text-sm text-muted-foreground">Team members</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">47</div>
                    <div className="text-sm text-muted-foreground">Certifications held</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Industries served</div>
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

export default AboutPage;