import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';

const projects = [
    {
        name: "HyperChainX",
        category: "Platform",
        status: "Live",
        image: "/assets/gaming/game_cyber_arena.png", // Using existing asset as placeholder for HPX
        stats: "10K+ Holders",
        desc: "The world's first community-driven gaming platform and launchpad."
    },
    {
        name: "Project 2",
        category: "Tactic",
        status: "Q2 2025",
        image: "/assets/gaming/game_neon_district.png",
        stats: "Incubating",
        desc: "Next-gen tactical shooter utilizing Unreal Engine 5."
    },
    {
        name: "Project 3",
        category: "MMORPG",
        status: "Q3 2025",
        image: "/assets/gaming/game_phantom_galaxies.png",
        stats: "Seed Round",
        desc: "Open world space exploration and conquest MMO."
    },
];

export default function Ecosystem() {
    return (
        <section className="py-24 px-6 relative bg-bg-secondary">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title={<>Our <span className="text-accent">Portfolio</span></>}
                    subtitle="One portfolio. Multiple games. Shared success."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-bg border border-white/10 hover:border-accent/50 cursor-pointer shadow-2xl transition-all duration-300"
                        >
                            {/* Image with Zoom Effect */}
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest ${project.status === 'Live' ? 'bg-green-500 text-black shadow-[0_0_10px_rgba(34,197,94,0.5)]' :
                                            'bg-white/20 text-white backdrop-blur-md'
                                        }`}>
                                        {project.status}
                                    </span>
                                    <span className="text-accent text-xs font-bold uppercase tracking-widest border border-accent/30 px-2 py-1 rounded bg-black/50 backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-black mb-2 font-gaming text-white drop-shadow-md group-hover:text-accent transition-colors">{project.name}</h3>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.desc}</p>

                                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">{project.stats}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 bg-transparent border border-accent text-accent font-gaming font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-all duration-300 rounded-none -skew-x-10">
                        <span className="skew-x-10 inline-block">Apply for Incubation</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
