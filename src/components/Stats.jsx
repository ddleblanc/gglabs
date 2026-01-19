import { motion } from 'framer-motion';

const stats = [
    { label: "Projects Incubated", value: "25+" },
    { label: "Total Raised", value: "$40M+" },
    { label: "Community", value: "250K+" },
    { label: "Market Cap", value: "$120M" },
];

export default function Stats() {
    return (
        <section className="py-12 bg-black border-y border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="text-center relative group"
                        >
                            <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 group-hover:text-accent transition-colors duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-xs md:text-sm uppercase tracking-widest text-text-dim mt-2 group-hover:text-white transition-colors duration-300">
                                {stat.label}
                            </p>

                            {/* Mobile divider */}
                            {index % 2 === 0 && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 md:hidden" />
                            )}
                            {/* Desktop divider */}
                            {index < 3 && (
                                <div className="hidden md:block absolute right-[-1rem] top-1/2 -translate-y-1/2 w-[1px] h-16 bg-white/10" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
