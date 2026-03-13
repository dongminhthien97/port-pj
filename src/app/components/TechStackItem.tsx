import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface TechStackItemProps {
  name: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

export function TechStackItem({ name, icon: Icon, color, delay = 0 }: TechStackItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
    >
      <div className={`p-4 rounded-lg bg-gradient-to-br ${color} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <span className="text-gray-300 font-medium">{name}</span>
    </motion.div>
  );
}
