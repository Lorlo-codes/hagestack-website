'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Clock } from 'lucide-react';

const CLOUD_IMAGE = 'https://media.base44.com/images/public/6a048caa917d3fa3444ae735/d3c09f03d_generated_4defdca0.png';

const needsOptions = [
  'Security Assessment',
  'Infrastructure Scaling',
  'Process Automation',
  'Web Development',
  'Hardware Installation',
  'Digital Transformation',
  'IT Consulting',
  'Camera Systems',
];

export default function Contact() {
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (submitted) {
      setRefId(Math.random().toString(36).substring(2, 10).toUpperCase());
    }
  }, [submitted]);

  const toggleNeed = (need) => {
    setSelectedNeeds(prev => prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-20 lg:py-28 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10" />
          <img src={CLOUD_IMAGE} alt="Cloud" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl">
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">
              <span className="inline-block w-8 h-px bg-primary mr-3 align-middle" />
              INITIATE CONTACT
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-foreground tracking-tight mb-4">
              Schedule a Consultation
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Tell us about your requirements and our team will get back to you within 24 hours with a tailored assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Info column */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-10">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary/60 mb-4">CONTACT INFO</div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-muted-foreground mb-1">EMAIL</div>
                      <p className="text-sm text-foreground">info@hagestack.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-muted-foreground mb-1">RESPONSE TIME</div>
                      <p className="text-sm text-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-muted-foreground mb-1">SERVICE AREA</div>
                      <p className="text-sm text-foreground">Nationwide + Remote</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary/60 mb-4">SELECT YOUR NEEDS</div>
                <div className="flex flex-wrap gap-2">
                  {needsOptions.map((need) => (
                    <button
                      key={need}
                      onClick={() => toggleNeed(need)}
                      className={`font-mono text-xs tracking-wider px-3 py-1.5 border transition-all duration-300 ${
                        selectedNeeds.includes(need)
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border text-muted-foreground hover:border-muted-foreground'
                      }`}
                    >
                      {need}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <CheckCircle className="w-14 h-14 text-primary mb-6" />
                  <h3 className="text-2xl font-light text-foreground mb-3">Assessment Received</h3>
                  <p className="font-mono text-sm text-muted-foreground max-w-sm">
                    Our team will analyze your requirements and contact you within 24 hours with a tailored proposal.
                  </p>
                  <div className="mt-8 font-mono text-xs text-primary/60 tracking-wider">
                    SYS_STATUS: REQUEST_QUEUED — REF#{refId || '…'}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-primary/60 mb-6">
                    DIAGNOSTIC_FORM_v2.1
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-muted-foreground mb-2">NAME *</label>
                      <input
                        type="text" required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs tracking-wider text-muted-foreground mb-2">EMAIL *</label>
                      <input
                        type="email" required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-wider text-muted-foreground mb-2">COMPANY</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-wider text-muted-foreground mb-2">MESSAGE</label>
                    <textarea
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Describe your project or requirements in detail..."
                    />
                  </div>

                  {selectedNeeds.length > 0 && (
                    <div className="p-4 border border-border bg-muted/30">
                      <div className="font-mono text-[10px] tracking-wider text-primary/60 mb-2">SELECTED REQUIREMENTS:</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedNeeds.map(n => (
                          <span key={n} className="font-mono text-[10px] px-2 py-1 border border-primary/30 text-primary/80">{n}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full font-mono text-xs tracking-wider px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send className="w-4 h-4" />
                    SUBMIT ASSESSMENT
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}