import { motion } from 'framer-motion';

const projects = [
    { name: "Cyber Arena", category: "Action RPG", status: "Live", image: "/assets/gaming/1.jpg" },
    { name: "Neon District", category: "Tactic", status: "Upcoming IDO", image: "/assets/gaming/2.jpg" },
    { name: "Phantom Galaxies", category: "Shooter", status: "Incubating", image: "/assets/gaming/3.jpg" },
];

export default function Ecosystem() {
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Drops</span></h2>
                        <p className="text-text-dim text-lg">Discover the next generation of web3 gaming.</p>
                    </motion.div>

                    <button className="hidden md:flex items-center gap-2 text-accent hover:text-white transition-colors mt-6 md:mt-0">
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
                            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-bg-secondary border border-white/5 cursor-pointer"
                        >
                            {/* Image Placeholder if actual image missing */}
                            <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700">
                                {/* Ideally we would use <img> here but for now just a colored block if asset missing */}
                                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                                        project.status === 'Upcoming IDO' ? 'bg-accent/20 text-accent' :
                                            'bg-white/10 text-white'
                                    }`}>
                                    {project.status}
                                </span>
                                <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                                <p className="text-text-dim text-sm">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <button className="md:hidden w-full mt-8 py-4 rounded-xl border border-white/10 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                    View All Projects
                </button>
            </div>
        </section>
    );
}
