import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';

export default function Opportunity() {
    return (
        <section className="py-24 px-6 bg-bg-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-black font-gaming text-text mb-8 border-l-4 border-red-500 pl-4 uppercase">
                            The Challenge
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "90% of gaming projects fail due to lack of support.",
                                "Unsustainable tokenomics and economy design.",
                                "Generic incubators don't understand gamers.",
                                "Fragmented communities and lack of user retention."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-red-500 font-bold font-gaming">✕</span>
                                    <p className="text-text-dim text-lg">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* The Opportunity */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/40 p-8 rounded-3xl border border-accent/20 backdrop-blur-sm relative"
                    >
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 blur-xl rounded-full" />

                        <h3 className="text-2xl font-black font-gaming text-white mb-8 border-l-4 border-accent pl-4 uppercase">
                            The Opportunity
                        </h3>
                        <div className="mb-8">
                            <span className="text-6xl md:text-7xl font-black font-gaming text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                                $44B
                            </span>
                            <p className="text-xl text-white font-bold font-gaming mt-2">Market Size by 2034</p>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "Gaming NFT market exploding with 25% CAGR.",
                                "2.5 Billion gamers ready for ownership.",
                                "The search for the next Axie Infinity is on.",
                                "GG Labs provides the infrastructure for success."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-accent font-bold font-gaming">✓</span>
                                    <p className="text-white text-lg">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
