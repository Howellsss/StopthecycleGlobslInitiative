import { forwardRef, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

const easeCurve = [0.16, 1, 0.3, 1] as const;

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ ease: easeCurve, duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export const StaggerGroup = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(function StaggerGroup(
  { children, className },
  ref
) {
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  );
});

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      transition={{ ease: easeCurve, duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
