import { motion } from 'framer-motion';

const partners = [
    "Ubisoft", "Animoca Brands", "Binance Labs", "Polygon", "Immutable X", "Solana Ventures", "Delphi Digital", "Pantera"
];

export default function Partners() {
    return (
        <section className="py-16 bg-bg-secondary overflow-hidden">
            <div className="text-center mb-10">
                <p className="text-sm uppercase tracking-[0.2em] text-text-dim">Trusted by Industry Leaders</p>
            </div>

            <div className="relative flex w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 w-12 md:w-32 h-full bg-gradient-to-r from-bg-secondary to-transparent z-10" />
                <div className="absolute right-0 top-0 w-12 md:w-32 h-full bg-gradient-to-l from-bg-secondary to-transparent z-10" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="mx-8 md:mx-16 flex items-center opacity-40 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-2xl md:text-3xl font-bold font-display text-white">{partner}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
