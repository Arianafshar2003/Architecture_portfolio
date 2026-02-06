import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

interface ArchitectureSpiritProps {
  activeSection: number;
}

export function ArchitectureSpirit({ activeSection }: ArchitectureSpiritProps) {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const gridRotate = useTransform(smoothProgress, [0, 1], [0, 10]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);

  const structures = [
    <g key="h">
      <motion.path
        d="M50 95 V5 M40 95 V25 M60 95 V25"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
      />
    </g>,
    <g key="f">
      <motion.rect
        x="15"
        y="15"
        width="70"
        height="70"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
      />
    </g>,
    <g key="c">
      <motion.path
        d="M10 95 H90 M25 95 V40 M50 95 V15"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
      />
    </g>,
    <g key="o">
      <motion.path
        d="M30 30 L70 20 L90 50 L50 60 Z"
        strokeWidth="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
      />
    </g>,
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* 1. Static Drafting Grid */}
      <motion.div
        style={{
          rotate: gridRotate,
          scale: bgScale,
          backgroundImage: `
            radial-gradient(circle at center, transparent 0%, hsl(var(--background)) 95%),
            radial-gradient(circle, hsl(var(--primary) / 0.2) 1px, transparent 0),
            linear-gradient(to right, hsl(var(--primary) / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px, 60px 60px",
        }}
        className="absolute inset-[-25%] opacity-90"
      />

      {/* 2. Simplified Metadata (Static Side Legend) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-24 text-[9px] font-mono text-primary/40 uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
        <span>ENGINEERING DESISNER SINCE 1375</span>
        <span className="h-32 border-l border-primary/20" />
      </div>

      {/* 3. Blueprints (Increased Contrast) */}
      <AnimatePresence mode="wait">
        <motion.svg
          key={activeSection}
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 0.6, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 1.1, x: -20 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute right-[2%] bottom-[2%] w-[50vw] h-[60vh] text-primary"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            strokeWidth="0.1"
            strokeDasharray="3 3"
          />
          {structures[activeSection] || structures[0]}
        </motion.svg>
      </AnimatePresence>
    </div>
  );
}
