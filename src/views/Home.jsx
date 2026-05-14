'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';

const codeLines = [
  'const deploy = async (config) => {',
  '  await validateSecurity(config);',
  '  const cluster = initCluster({',
  '    nodes: config.replicas,',
  '    encryption: "AES-256",',
  '    monitoring: true,',
  '  });',
  '  return cluster.deploy();',
  '};',
  '',
  'export async function scale() {',
  '  const metrics = await getMetrics();',
  '  if (metrics.load > threshold) {',
  '    await addNodes(metrics.needed);',
  '    notify("scaled-up");',
  '  }',
  '}',
  '',
  'class SecurityLayer {',
  '  constructor(level) {',
  '    this.encryption = "AES-256";',
  '    this.firewall = initWAF();',
  '    this.ids = new IntrusionDetect();',
  '  }',
  '  async scan(traffic) {',
  '    return this.ids.analyze(traffic);',
  '  }',
  '}',
];

const HERO_IMAGE = 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/50bbc2fd7_generated_d9d1ee1b.png';
const CIRCUIT_IMAGE = 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/6cdf393de_generated_image.png';

const highlights = [
  { code: 'SVC_01', label: 'Website Development', desc: 'Modern, responsive web applications.' },
  { code: 'SVC_02', label: 'Custom Systems', desc: 'Bespoke CRMs, ERPs, and automation.' },
  { code: 'SVC_03', label: 'Security Cameras', desc: 'HD/4K IP camera installation.' },
  { code: 'SVC_04', label: 'IT Consulting', desc: 'Strategy, security, and transformation.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden opacity-[0.07] hidden lg:block">
          <div className="code-stream font-mono text-xs leading-6 text-foreground whitespace-pre p-12">
            {[...codeLines, ...codeLines, ...codeLines].map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img src={HERO_IMAGE} alt="Server infrastructure" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-0">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <div className="font-mono text-xs tracking-[0.3em] text-primary mb-8">
                <span className="inline-block w-8 h-px bg-primary mr-3 align-middle" />
                PROFESSIONAL IT SOLUTIONS
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Build.<br /><span className="text-primary font-medium">Secure.</span><br />Scale.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10"
            >
              We build secure, scalable software systems and provide expert IT consulting to help your business thrive in the digital age.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="font-mono text-xs tracking-wider px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-3"
              >
                START A PROJECT
                <span className="w-2 h-2 rounded-full bg-primary-foreground pulse-glow" />
              </Link>
              <Link
                href="/services"
                className="font-mono text-xs tracking-wider px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                EXPLORE SERVICES
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* Service highlights */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-14">
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">
              <span className="inline-block w-8 h-px bg-primary mr-3 align-middle" />
              CORE CAPABILITIES
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">What We Do</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {highlights.map((h, i) => (
              <motion.div
                key={h.code}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-card p-8 group hover:bg-muted transition-colors duration-300"
              >
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary/60 mb-4">{h.code}</div>
                <h3 className="text-base font-light text-foreground mb-2">{h.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <Link href="/services" className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-primary hover:gap-4 transition-all">
              VIEW ALL SERVICES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* About teaser */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10" />
          <img src={CIRCUIT_IMAGE} alt="Circuit board" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-lg">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">
                <span className="inline-block w-8 h-px bg-primary mr-3 align-middle" />
                WHO WE ARE
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight mb-6">
                Technology That Works.<br />Infrastructure That Lasts.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                HageStack combines deep software engineering with hands-on hardware expertise. From custom-built web platforms to physical security systems, we deliver complete IT solutions that keep your business moving.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-primary hover:gap-4 transition-all">
                LEARN ABOUT US <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-6">
              <span className="inline-block w-8 h-px bg-primary mr-3 align-middle" />
              READY TO DEPLOY?
            </div>
            <h2 className="text-3xl lg:text-5xl font-light text-foreground tracking-tight mb-6">
              Let's Build Something<br /><span className="text-primary">Exceptional.</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
              Schedule a free consultation and let our team architect the right solution for your business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 font-mono text-xs tracking-wider px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              SCHEDULE FREE CONSULTATION
              <span className="w-2 h-2 rounded-full bg-primary-foreground pulse-glow" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}