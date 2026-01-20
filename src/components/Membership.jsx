import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

{
    name: "Bronze",
        price: "0.1 ETH",
            supply: "5,000",
                features: ["Discord Access", "Weekly Newsletter", "Public AMAs"],
                    color: "border-white/10",
                        glow: "shadow-none"
},
{
    name: "Silver",
        price: "0.3 ETH",
            supply: "2,000",
                features: ["Everything in Bronze", "1x Launchpad Allocation", "Research Reports", "Governance Voting"],
                    color: "border-white/20",
                        glow: "shadow-white/5"
},
{
    name: "Gold",
        price: "1 ETH",
            supply: "500",
                popular: true,
                    features: ["Everything in Silver", "3x Launchpad Allocation", "Private AMAs", "+10% Revenue Share"],
                        color: "border-accent",
                            glow: "shadow-neon"
},
{
    name: "Diamond",
        price: "5 ETH",
            supply: "50",
                features: ["Everything in Gold", "10x Launchpad Allocation", "1:1 Advisory Call", "Advisory Board Seat"],
                    color: "border-metallic",
                        glow: "shadow-lg shadow-metallic/20"
}
];

export default function Membership() {
    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Background glow for Gold tier */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title={<>NFT <span className="text-accent">Membership</span></>}
                    subtitle="Unlock exclusive benefits, guaranteed allocations, and revenue share."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-3xl bg-bg-secondary border ${tier.color} ${tier.glow} hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full ${tier.popular ? 'scale-105 z-10 ring-1 ring-accent/50' : 'opacity-90 hover:opacity-100'}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black font-black font-gaming text-xs px-4 py-1 rounded-none uppercase tracking-widest shadow-neon skew-x-[-10deg]">
                                    <span className="inline-block skew-x-[10deg]">Most Popular</span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-black font-gaming text-white uppercase mb-2">{tier.name}</h3>
                                <div className="text-3xl font-bold text-accent mb-1">{tier.price}</div>
                                <div className="text-xs font-bold text-text-dim uppercase tracking-widest">Supply: {tier.supply}</div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check size={16} className="text-accent mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold font-gaming uppercase tracking-wider transition-all ${tier.popular
                                ? 'bg-accent text-black hover:bg-white hover:scale-105 shadow-neon'
                                : 'bg-white/10 text-white hover:bg-white hover:text-black border border-white/5'
                                }`}>
                                Mint Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
