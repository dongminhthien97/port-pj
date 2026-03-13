import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 via-amber-300 to-sky-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-[#cbbfa8] text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
