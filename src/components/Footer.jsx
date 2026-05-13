'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative py-16 lg:py-24 border-t border-border">
      <div className="absolute inset-0 grid-overlay opacity-5" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary pulse-glow" />
              <span className="font-mono text-sm font-semibold tracking-wider text-foreground">
                HAGESTACK
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Professional IT solutions for modern businesses. Building secure, scalable systems since day one.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.3em] text-primary mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {['Website Development', 'Custom Systems', 'Security Cameras', 'Attendance Systems', 'Entry Pass Systems', 'Hardware Supplies', 'IT Consulting'].map(s => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.3em] text-primary mb-6">CONTACT</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">info@hagestack.com</li>
              <li className="text-sm text-muted-foreground">Schedule a free consultation</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block font-mono text-xs tracking-wider px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}