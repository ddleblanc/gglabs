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
                        The <span className="text-accent">GG</span> Ecosystem
                    </motion.h2>
                    <p className="text-lg text-text-dim max-w-2xl">
                        A complete suite of tools designed to accelerate crypto gaming projects from concept to launch.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[800px]">
                    {/* Feature 1 - Large Left */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-2 row-span-2 bg-glass rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/5 hover:border-accent/30 transition-all duration-500"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">Launchpad</h3>
                                <p className="text-text-dim text-lg">Premium access to the hottest IDOs in gaming. Stake GG tokens to get guaranteed allocation.</p>
                            </div>
                            <button className="w-fit mt-8 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2 group-hover:gap-4">
                                Explore Launchpad <span>→</span>
                            </button>
                        </div>
                        {/* Abstract graphic */}
                        <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-contain bg-no-repeat bg-right-bottom opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundImage: 'url(/assets/gaming/abstract-shape.png)' }} />
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full" />
                    </motion.div>

                    {/* Feature 2 - Top Right */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-glass rounded-3xl p-8 relative overflow-hidden group border border-white/5 hover:border-accent/30 transition-all duration-500"
                    >
                        <h3 className="text-2xl font-bold mb-3">Staking V2</h3>
                        <p className="text-text-dim text-sm">Earn up to 45% APY on your GG holdings while unlocking platform tier benefits.</p>
                        <div className="absolute bottom-4 right-4 text-accent">
                            <span className="text-4xl font-bold">45%</span> <span className="text-sm">APY</span>
                        </div>
                    </motion.div>

                    {/* Feature 3 - Bottom Right */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-glass rounded-3xl p-8 relative overflow-hidden group border border-white/5 hover:border-accent/30 transition-all duration-500 flex flex-col justify-end"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-2xl font-bold mb-3 relative z-10">Governance</h3>
                        <p className="text-text-dim text-sm relative z-10">Vote on future incubated projects and platform updates.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
