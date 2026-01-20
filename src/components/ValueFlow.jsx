import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { Rocket, Coins, ArrowRightLeft, Users } from 'lucide-react';

const steps = [
    { title: "Incubate", desc: "We select and fund high-potential projects.", icon: '01' },
    { title: "Launch", desc: "IDO/IGO launch on our platform.", icon: '02' },
    { title: "Collect", desc: "Revenue generated from fees and allocations.", icon: '03' },
    { title: "Distribute", desc: "Value flows back to GG stakers.", icon: '04' },
];

const revenues = [
    { title: "Token Allocations", value: "5-10%", desc: "From every incubated project", icon: Rocket },
    { title: "Platform Fees", value: "$$$", desc: "Trading & Marketplace fees", icon: ArrowRightLeft },
    { title: "Launchpad Fees", value: "%", desc: "IDO & financing fees", icon: Coins },
    { title: "NFT Memberships", value: "ETH", desc: "Recurring access sales", icon: Users },
];

export default function ValueFlow() {
    return (
        <section className="py-24 px-6 bg-bg relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title={<>Value <span className="text-accent">Flow</span></>}
                    subtitle="How value is created, captured, and shared with our ecosystem."
                />

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-24 relative">
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -z-10" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-bg-secondary p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-black border border-accent/20 rounded-full flex items-center justify-center text-xl font-black font-gaming text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(35,255,202,0.15)]">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 font-gaming">{step.title}</h3>
                            <p className="text-text-dim text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Revenue Streams */}
                <div className="bg-gradient-to-b from-bg-secondary to-black p-8 md:p-12 rounded-3xl border border-white/10">
                    <h3 className="text-3xl font-black font-gaming text-center mb-12">REVENUE STREAMS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {revenues.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-accent/50 transition-all cursor-default"
                            >
                                <div className="text-accent mb-4">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-lg font-bold font-gaming text-white mb-1">{item.title}</h4>
                                <div className="text-3xl font-black text-white mb-2">{item.value}</div>
                                <p className="text-sm text-text-dim">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
