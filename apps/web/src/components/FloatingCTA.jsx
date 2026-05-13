'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-xs tracking-wider shadow-[0_0_30px_rgba(0,255,65,0.2)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            CONSULT
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}