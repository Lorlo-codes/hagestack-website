'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const IMAGES = {
  hardware: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/a8d14c4c3_generated_02f4f9a5.png',
  camera: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/02a65482c_generated_1d0780ed.png',
  biometric: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/b2db472c8_generated_62e59c07.png',
  cloud: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/d3c09f03d_generated_4defdca0.png',
  circuit: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/6cdf393de_generated_image.png',
  network: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/445c5d29e_generated_image.png',
};

const categories = ['ALL', 'SOFTWARE', 'SECURITY', 'HARDWARE', 'CONSULTING'];

const projects = [
  { id: 1, code: 'PRJ_001', title: 'Enterprise CRM Platform', category: 'SOFTWARE', tag: 'Custom Systems', image: IMAGES.cloud, desc: 'A fully bespoke CRM built for a logistics company — automating lead tracking, contract management, and multi-team reporting dashboards.', tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'] },
  { id: 2, code: 'PRJ_002', title: 'Multi-Site Camera Network', category: 'SECURITY', tag: 'Security Cameras', image: IMAGES.camera, desc: '48-camera IP surveillance system deployed across 4 warehouse locations with centralized mobile monitoring and motion-triggered alerts.', tech: ['IP Cameras', 'NVR', 'Mobile App', '4G LTE'] },
  { id: 3, code: 'PRJ_003', title: 'Biometric Attendance System', category: 'HARDWARE', tag: 'Attendance Systems', image: IMAGES.biometric, desc: 'Fingerprint and facial recognition attendance system integrated with the client\'s existing payroll software across 3 office branches.', tech: ['Biometrics', 'REST API', 'Payroll Integration'] },
  { id: 4, code: 'PRJ_004', title: 'E-Commerce Web Platform', category: 'SOFTWARE', tag: 'Website Development', image: IMAGES.network, desc: 'A high-performance e-commerce platform with custom inventory management, payment gateways, and SEO-optimized product catalog.', tech: ['React', 'Next.js', 'Stripe', 'Sanity CMS'] },
  { id: 5, code: 'PRJ_005', title: 'IT Infrastructure Overhaul', category: 'CONSULTING', tag: 'IT Consulting', image: IMAGES.circuit, desc: 'Complete infrastructure audit and transformation for a 200-person company — migrating to cloud, upgrading networking, and implementing zero-trust security.', tech: ['Azure', 'Cisco', 'Zero Trust', 'Compliance'] },
  { id: 6, code: 'PRJ_006', title: 'RFID Access Control Network', category: 'SECURITY', tag: 'Entry Pass Systems', image: IMAGES.hardware, desc: 'Building-wide RFID access control deployed in a corporate headquarters with visitor management, time-based access rules, and full audit logging.', tech: ['RFID', 'Biometrics', 'Active Directory', 'Audit Logs'] },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selected, setSelected] = useState(null);

  const filtered = activeFilter === 'ALL' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20 lg:py-28 border-b border-border">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">
              <span className="inline-block w-8 h-px bg-primary mr-3 align-middle" />
              DEPLOYMENT ARCHIVE
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-foreground tracking-tight mb-4">Portfolio</h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              A selection of systems we have architected, deployed, and secured for businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs tracking-wider px-5 py-2 border transition-all duration-300 ${
                activeFilter === cat
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:border-muted-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="relative py-12 lg:py-16">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group bg-card cursor-pointer hover:bg-muted transition-colors duration-300"
                  onClick={() => setSelected(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105 transform transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] text-primary/70">{project.code}</div>
                    <div className="absolute top-4 right-4 font-mono text-[10px] tracking-wider px-2 py-1 border border-primary/30 text-primary/70">
                      {project.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-light text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="font-mono text-[10px] tracking-wider px-2 py-1 bg-muted text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* Project modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="max-w-2xl w-full bg-card border border-border"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 font-mono text-xs text-muted-foreground hover:text-primary border border-border px-3 py-1">CLOSE</button>
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] text-primary/70">{selected.code}</div>
              </div>
              <div className="p-8">
                <div className="font-mono text-xs tracking-wider text-primary/60 mb-2">{selected.tag}</div>
                <h2 className="text-2xl font-light text-foreground mb-4">{selected.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{selected.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map(t => (
                    <span key={t} className="font-mono text-xs tracking-wider px-3 py-1.5 border border-border text-muted-foreground">{t}</span>
                  ))}
                </div>
                <Link href="/contact" onClick={() => setSelected(null)} className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                  DISCUSS SIMILAR PROJECT <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="relative py-20 lg:py-24">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-4">Your Project Could Be Next</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Let's discuss what we can build together.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 font-mono text-xs tracking-wider px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              START A PROJECT <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}