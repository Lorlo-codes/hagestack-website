import { useState } from 'react';
import { motion } from 'framer-motion';

export default function InfraCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden border border-border bg-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-56 lg:h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Scan line */}
        {hovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="scan-line absolute left-0 right-0 h-px bg-primary/60 shadow-[0_0_20px_4px_rgba(0,255,65,0.3)]" />
          </div>
        )}

        {/* Code label */}
        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] text-primary/70">
          {item.code}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-3">
          <item.icon className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-light text-foreground tracking-tight">
            {item.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {item.description}
        </p>

        <ul className="space-y-2">
          {item.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}