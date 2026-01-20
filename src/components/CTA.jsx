import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-32 px-6 bg-gradient-to-b from-black to-bg-secondary relative overflow-hidden">
            {/* Background Stripes */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #23ffca 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black font-gaming text-white mb-6 uppercase">
                        Ready to <span className="text-stroke-accent text-transparent" style={{ WebkitTextStroke: '2px #23ffca' }}>Level Up?</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Investors */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition-all flex flex-col items-start justify-between h-[300px] group">
                        <div>
                            <h3 className="text-2xl font-black font-gaming text-white mb-2">INVESTORS</h3>
                            <p className="text-text-dim">Get access to our pitch deck and private sale rounds.</p>
                        </div>
                        <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest group-hover:gap-5 transition-all">
                            Request Deck <ArrowRight className="text-accent" />
                        </button>
                    </div>

                    {/* Card 2: Founders */}
                    <div className="p-8 rounded-3xl bg-accent text-black border border-accent hover:scale-105 transition-all flex flex-col items-start justify-between h-[300px] shadow-neon z-10">
                        <div>
                            <h3 className="text-2xl font-black font-gaming text-black mb-2">FOUNDERS</h3>
                            <p className="text-black/80 font-medium">Have a game-changing idea? Let's build it together.</p>
                        </div>
                        <button className="w-full py-4 bg-black text-white font-black font-gaming uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-colors">
                            Apply for Incubation
                        </button>
                    </div>

                    {/* Card 3: Community */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all flex flex-col items-start justify-between h-[300px] group">
                        <div>
                            <h3 className="text-2xl font-black font-gaming text-neon-purple mb-2">COMMUNITY</h3>
                            <p className="text-text-dim">Join the DAO and start earning rewards today.</p>
                        </div>
                        <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest group-hover:gap-5 transition-all">
                            Join Discord <ArrowRight className="text-neon-purple" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
