import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-32 px-6 bg-erika-dark text-white text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto flex flex-col items-center"
            >
                <h2 className="font-serif text-5xl md:text-7xl mb-8">Let's Create Beauty.</h2>
                <p className="font-sans text-lg text-white/60 mb-12 max-w-lg leading-relaxed">
                    Available for bookings, collaborations, and masterclasses worldwide.
                    Reach out to discuss your next project.
                </p>

                <a
                    href="mailto:hello@erikafilkova.com"
                    className="group flex items-center gap-4 bg-white text-erika-dark px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
                >
                    Book Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-24 flex gap-8">
                    {['Instagram', 'TikTok', 'YouTube'].map((social) => (
                        <a
                            key={social}
                            href="#"
                            className="font-sans text-sm uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300"
                        >
                            {social}
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
