import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  sections: string[];
  activeSection: number;
  onSectionClick: (index: number) => void;
}

export function ScrollIndicator({ sections, activeSection, onSectionClick }: ScrollIndicatorProps) {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => onSectionClick(index)}
          className="group relative flex items-center"
          aria-label={`رفتن به بخش ${section}`}
        >
          <motion.div
            className={`section-dot ${activeSection === index ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
          <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground whitespace-nowrap bg-background/80 px-2 py-1 rounded">
            {section}
          </span>
        </button>
      ))}
    </div>
  );
}
