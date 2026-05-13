'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, Cpu, Shield, Camera, Fingerprint, KeyRound, Server, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import InfraCard from '../components/InfraCard';

const IMAGES = {
  camera: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/02a65482c_generated_1d0780ed.png',
  biometric: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/b2db472c8_generated_62e59c07.png',
  access: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/ccad05713_generated_bda22027.png',
  hardware: 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/a8d14c4c3_generated_02f4f9a5.png',
};

const digitalServices = [
  {
    code: 'SVC_001',
    title: 'Website Development',
    icon: Globe,
    description: 'Custom web applications built with modern frameworks like React, Vue, and Node.js. Responsive, fast, and user-friendly websites tailored to your business needs.',
    features: ['Responsive design for all devices', 'SEO optimization and performance tuning', 'Content management systems', 'E-commerce solutions', 'Progressive web applications'],
  },
  {
    code: 'SVC_002',
    title: 'Custom Systems',
    icon: Cpu,
    description: 'Bespoke software solutions designed to automate workflows, manage data, and integrate with your existing tools.',
    features: ['Business process automation', 'Custom CRM and ERP systems', 'API development and integration', 'Cloud-based solutions'],
  },
  {
    code: 'SVC_003',
    title: 'IT Consulting',
    icon: Shield,
    description: 'Strategic technology guidance to help you make informed decisions about infrastructure, security, and digital transformation.',
    features: ['Technology strategy and planning', 'Infrastructure assessment', 'Security audits and compliance', 'Digital transformation roadmaps', 'Vendor selection and management'],
  },
];

const physicalServices = [
  { code: 'UNIT_001', title: 'Security Camera Installation', icon: Camera, image: IMAGES.camera, description: 'Professional installation and configuration of IP camera systems with remote monitoring capabilities.', features: ['HD and 4K camera systems', 'Remote viewing via mobile apps', 'Motion detection and alerts', 'Cloud and local storage options'] },
  { code: 'UNIT_002', title: 'Attendance Systems', icon: Fingerprint, image: IMAGES.biometric, description: 'Biometric and RFID-based attendance tracking for accurate employee time management.', features: ['Fingerprint and facial recognition', 'Real-time attendance reports', 'Integration with payroll systems', 'Multi-location support'] },
  { code: 'UNIT_003', title: 'Entry Pass Systems', icon: KeyRound, image: IMAGES.access, description: 'Access control solutions including card readers, biometric scanners, and automated gate systems.', features: ['RFID and biometric access control', 'Visitor management systems', 'Integration with security cameras', 'Audit trails and reporting'] },
  { code: 'UNIT_004', title: 'Hardware Supplies', icon: Server, image: IMAGES.hardware, description: 'Quality IT hardware procurement and installation services for servers, networking, and workstations.', features: ['Server and storage solutions', 'Networking equipment', 'Workstation setup and configuration', 'Warranty and support services'] },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="relative py-20 lg:py-28 border-b border-border">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">
              <span className="inline-block w-8 h-px bg-primary mr-3 align-middle" />
              SERVICE CATALOG
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-foreground tracking-tight mb-4">
              All Services
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              From software development to hardware installation, we provide comprehensive IT solutions to help your business operate efficiently and securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-12">
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-3">THE LOGIC FORGE</div>
            <h2 className="text-2xl lg:text-3xl font-light text-foreground">Software & Digital Solutions</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {digitalServices.map((s, i) => <ServiceCard key={s.code} service={s} index={i} />)}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* Physical Services */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-12">
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-3">PERIMETER & CORE</div>
            <h2 className="text-2xl lg:text-3xl font-light text-foreground">Physical Security & Hardware</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {physicalServices.map((s, i) => <InfraCard key={s.code} item={s} index={i} />)}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-24">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border border-border p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-primary/60 mb-3">NOT SURE WHERE TO START?</div>
              <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-2">Schedule a Free Consultation</h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">Our team can help you identify the right solutions for your business.</p>
            </div>
            <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-3 font-mono text-xs tracking-wider px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              GET STARTED <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}