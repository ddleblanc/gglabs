import { motion } from 'framer-motion';

const projects = [
    { name: "Cyber Arena", category: "Action RPG", status: "Live", image: "/assets/gaming/game_cyber_arena.png" },
    { name: "Neon District", category: "Tactic", status: "Upcoming IDO", image: "/assets/gaming/game_neon_district.png" },
    { name: "Phantom Galaxies", category: "Shooter", status: "Incubating", image: "/assets/gaming/game_phantom_galaxies.png" },
];

export default function Ecosystem() {
    return (
        <section className="py-24 px-6 relative bg-bg">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-4 font-gaming tracking-tighter uppercase drop-shadow-md">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon-purple drop-shadow-neon">Drops</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-gaming tracking-wide">Discover the next generation of web3 gaming.</p>
                    </motion.div>

                    <button className="hidden md:flex items-center gap-2 text-accent hover:text-white transition-colors mt-6 md:mt-0 font-gaming font-bold tracking-wider uppercase">
                        View All Projects <span>→</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-bg-secondary border border-white/10 hover:border-accent/50 cursor-pointer shadow-2xl transition-all duration-300"
                        >
                            {/* Image with Zoom Effect */}
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                <span className={`inline-block px-4 py-1 rounded-none -skew-x-10 text-xs font-black uppercase tracking-widest mb-4 ${project.status === 'Live' ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.6)]' :
                                    project.status === 'Upcoming IDO' ? 'bg-accent text-black shadow-neon' :
                                        'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.6)]'
                                    }`}>
                                    <span className="skew-x-10 inline-block">{project.status}</span>
                                </span>
                                <h3 className="text-3xl font-black mb-2 font-gaming text-white drop-shadow-md group-hover:text-accent transition-colors">{project.name}</h3>
                                <p className="text-gray-300 text-sm font-gaming tracking-wider uppercase border-l-2 border-accent pl-2">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <button className="md:hidden w-full mt-8 py-4 rounded-xl border border-white/10 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors font-gaming">
                    View All Projects
                </button>
            </div>
        </section>
    );
}
