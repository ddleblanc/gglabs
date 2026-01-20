import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Ecosystem', value: 30, color: '#23ffca' }, // accent
    { name: 'Public Sale', value: 20, color: '#3b82f6' }, // neon-blue
    { name: 'Treasury', value: 20, color: '#c084fc' }, // neon-purple
    { name: 'Team', value: 15, color: '#ffffff' }, // white
    { name: 'Liquidity', value: 10, color: '#9ca3af' }, // gray
    { name: 'Strategic', value: 5, color: '#4b5563' }, // dark gray
];

const utilities = [
    { title: "Governance", desc: "Vote on incubated projects and platform updates." },
    { title: "Staking", desc: "Earn elevated yield and platform revenue share." },
    { title: "Access", desc: "Guaranteed allocation in incubation IDOs." },
    { title: "Boosts", desc: "Power up your NFT membership multipliers." },
];

export default function Tokenomics() {
    return (
        <section className="py-24 px-6 bg-white/[0.02] relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title={<>$GG <span className="text-accent">Tokenomics</span></>}
                    subtitle="The fuel of the GG Labs ecosystem. Designed for sustainability."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Chart Side */}
                    <div className="relative h-[400px] w-full flex flex-col items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={140}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '10px' }}
                                    itemStyle={{ color: '#fff', fontFamily: 'Orbitron' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Center Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-4xl font-black font-gaming text-white">100M</span>
                            <span className="text-sm font-bold text-text-dim uppercase tracking-widest">Total Supply</span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="grid grid-cols-2 gap-4 mb-12">
                            {data.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold font-gaming">{item.value}%</span>
                                        <span className="text-xs text-text-dim uppercase tracking-wider">{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-black font-gaming text-white mb-6 border-b border-white/10 pb-4">TOKEN UTILITY</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {utilities.map((util, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="group"
                                >
                                    <h4 className="text-accent font-bold font-gaming mb-1 group-hover:text-white transition-colors">{util.title}</h4>
                                    <p className="text-text-dim text-sm">{util.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
