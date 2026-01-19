import { motion } from 'framer-motion';
import { Sparkles, Camera, PenTool, Users } from 'lucide-react';

const services = [
    { title: "Brand Campaigns", description: "Creative direction and makeup artistry for beauty and fashion campaigns.", icon: Camera },
    { title: "Editorial", description: "High-fashion makeup for magazine spreads and digital features.", icon: PenTool },
    { title: "Red Carpet", description: "Flawless, long-lasting looks for celebrity appearances and events.", icon: Sparkles },
    { title: "Masterclasses", description: "Educational sessions sharing techniques and industry insights.", icon: Users },
];

export default function Services() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white text-erika-dark">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1">
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">Expertise</h2>
                        <div className="w-12 h-px bg-erika-dark/30 mb-6"></div>
                        <p className="font-sans text-lg opacity-70 leading-relaxed">
                            With over a decade of experience, Erika brings a refined touch and creative vision to every project, blending modern trends with timeless beauty.
                        </p>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col"
                            >
                                <service.icon strokeWidth={1} className="w-8 h-8 mb-6 opacity-60" />
                                <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                                <p className="font-sans text-sm opacity-60 leading-relaxed max-w-sm">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
