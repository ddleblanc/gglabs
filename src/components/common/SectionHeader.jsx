import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, align = 'center', className = '' }) {
    return (
        <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black mb-6 font-gaming uppercase tracking-tighter"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-text-dim text-lg md:text-xl font-gaming max-w-3xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
