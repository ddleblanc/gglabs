import { motion } from 'framer-motion';
import { Gamepad2, Coins, Code, FileCode, Megaphone, Users, HelpingHand, TrendingUp } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

const services = [
    { title: "Game Design", description: "Crafting immersive gameplay loops and economies.", icon: Gamepad2 },
    { title: "Tokenomics", description: "Sustainable economy design and modeling.", icon: Coins },
    { title: "Development", description: "Full-stack web3 and game development capability.", icon: Code },
    { title: "Smart Contracts", description: "Audited, secure, and gas-efficient contracts.", icon: FileCode },
    { title: "Marketing", description: "Go-to-market strategies and influencer campaigns.", icon: Megaphone },
    { title: "Community", description: "Building and engaging loyal player bases.", icon: Users },
    { title: "Partnerships", description: "Access to our network of 500+ industry partners.", icon: HelpingHand },
    { title: "Listings", description: "Exchange listing support for T1 and T2 CEXs.", icon: TrendingUp },
];

export default function Services() {
    return (
        <section className="py-24 px-6 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title={<>Full-Service <span className="text-accent">Incubation</span></>}
                    subtitle="We provide end-to-end support to ensure your game succeeds in the competitive web3 market."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-bg-secondary border border-white/5 hover:border-accent/40 hover:bg-white/5 transition-all group"
                        >
                            <div className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(35,255,202,0.1)]">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-gaming text-white mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                            <p className="text-text-dim text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
