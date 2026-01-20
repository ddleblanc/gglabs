import { motion } from 'framer-motion';

export default function Features() {
    return (
        <section className="py-24 bg-bg relative px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        SPAWN <span className="text-accent">POINT</span>
                    </motion.h2>
                    <p className="text-lg text-text-dim max-w-2xl">
                        A complete suite of tools designed to accelerate crypto gaming projects from concept to launch.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[800px]">
                    {/* Feature 1 - Large Left - Launchpad */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 row-span-2 rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/10 hover:border-accent/50 transition-colors duration-500 shadow-2xl"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/assets/gaming/card_launchpad.png)' }} />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" /> {/* Dark Overlay */}

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-4xl font-black mb-4 font-gaming text-white drop-shadow-lg">LAUNCHPAD</h3>
                                <p className="text-gray-200 text-xl font-gaming tracking-wide drop-shadow-md max-w-md">Premium access to the hottest IDOs in gaming. Stake GG tokens to get guaranteed allocation.</p>
                            </div>
                            <button className="w-fit mt-8 px-8 py-4 rounded-none -skew-x-10 bg-text text-black font-black font-gaming border-2 border-transparent hover:bg-white hover:border-accent transition-all flex items-center gap-2 group-hover:gap-4 uppercase tracking-wider shadow-neon">
                                <span className="skew-x-10 inline-block">Explore Launchpad</span> <span className="skew-x-10 inline-block">→</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Feature 2 - Top Right - Staking */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-3xl p-8 relative overflow-hidden group border border-white/10 hover:border-neon-purple/50 transition-colors duration-500 shadow-xl"
                    >
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/assets/gaming/card_staking.png)' }} />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-black mb-3 font-gaming text-white drop-shadow-lg">STAKING V2</h3>
                                <p className="text-gray-300 text-sm font-gaming tracking-wider">Earn up to 45% APY on your GG holdings.</p>
                            </div>
                            <div className="self-end mt-4">
                                <span className="text-5xl font-black text-neon-purple font-gaming drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">45%</span> <span className="text-sm font-bold text-white">APY</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 3 - Bottom Right - Governance */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="rounded-3xl p-8 relative overflow-hidden group border border-white/10 hover:border-neon-blue/50 transition-colors duration-500 shadow-xl flex flex-col justify-end"
                    >
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/assets/gaming/card_governance.png)' }} />
                        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-3 font-gaming text-white drop-shadow-lg">GOVERNANCE</h3>
                            <p className="text-gray-300 text-sm font-gaming tracking-wider">Vote on future incubated projects and platform updates.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
