'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Lock, Layers, Users } from 'lucide-react';

const CIRCUIT_IMAGE = 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/6cdf393de_generated_image.png';
const NETWORK_IMAGE = 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/445c5d29e_generated_image.png';

const values = [
  { icon: Lock, code: 'VAL_01', title: 'Security-First', desc: 'Every solution is architected with security as a non-negotiable foundation, not an afterthought.' },
  { icon: Zap, code: 'VAL_02', title: 'Performance', desc: 'We engineer for speed, reliability, and scale — systems that perform under any load.' },
  { icon: Layers, code: 'VAL_03', title: 'Scalability', desc: 'Infrastructure that grows with your business, from startup to enterprise.' },
  { icon: Users, code: 'VAL_04', title: 'Partnership', desc: 'We are an extension of your team, invested in your long-term success.' },
];

const stats = [
  { value: '50+', label: 'Projects Deployed' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '24/7', label: 'Support Coverage' },
  { value: '5+', label: 'Years Experience' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20 lg:py-28 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10" />
          <img src={CIRCUIT_IMAGE} alt="Circuit" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl">
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">
              <span className="inline-block w-8 h-px bg-primary mr-3 align-middle" />
              ABOUT HAGESTACK
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-foreground tracking-tight mb-6">
              Experts in Software, Hardware, and Everything Between
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              HageStack is a professional IT solutions company built for modern businesses. We combine deep software engineering expertise with hands-on physical infrastructure know-how — delivering complete, reliable technology that just works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="p-10 lg:p-12 text-center"
              >
                <div className="text-4xl lg:text-5xl font-light text-primary mb-2 font-mono">{stat.value}</div>
                <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">OUR MISSION</div>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight mb-6">
                Built to Solve Real Business Problems
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe great technology should be reliable, secure, and easy to use. Our mission is to build systems that genuinely improve how your business operates — from day one and long into the future.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's a custom CRM that automates your sales pipeline or a multi-site camera network monitored from a single app — we deliver practical, complete solutions that work.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative">
              <img src={NETWORK_IMAGE} alt="Network" className="w-full border border-border opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* Values */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-14">
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-3">CORE PRINCIPLES</div>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map((v, i) => (
              <motion.div
                key={v.code}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-card p-8"
              >
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary/60 mb-4">{v.code}</div>
                <v.icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="text-base font-light text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-24">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6">Ready to Partner with HageStack?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-3 font-mono text-xs tracking-wider px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                SCHEDULE CONSULTATION <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-3 font-mono text-xs tracking-wider px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all">
                VIEW PORTFOLIO
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}