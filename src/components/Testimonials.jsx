import { motion } from 'framer-motion';

const testimonials = [
    { quote: "Erika's artistry transformed our campaign. Her attention to detail and ability to understand the brand voice is unmatched.", author: "Sarah Jenkins", role: "Creative Director, Vogue" },
    { quote: "The most professional and talented MUA I've worked with. She brings a calm energy and executed the vision perfectly.", author: "Elena Rossi", role: "Model" },
    { quote: "An absolute visionary. Her masterclass changed the way I approach makeup.", author: "Michelle K.", role: "Student" }
];

export default function Testimonials() {
    return (
        <section className="py-32 px-6 md:px-12 bg-erika-light text-erika-dark overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white p-8 md:p-12 shadow-[0_2px_40px_rgba(0,0,0,0.04)]"
                        >
                            <div className="text-4xl font-serif text-erika-accent mb-6">"</div>
                            <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-8">
                                {item.quote}
                            </p>
                            <div>
                                <h4 className="font-sans font-medium text-sm tracking-wide uppercase">{item.author}</h4>
                                <p className="font-sans text-xs text-erika-accent mt-1">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
