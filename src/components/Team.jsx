import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
    {
        name: "Boy Dennis Hilling",
        role: "Co-Founder & CEO",
        bio: "Serial entrepreneur with 10+ years in digital strategy and startups.",
        image: "/assets/team_ceo.jpg", // Placeholder
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Joshua Breurs",
        role: "Co-Founder & CTO",
        bio: "Full-stack architect. 12+ years experience. Built systems for 1M+ users.",
        image: "/assets/team_cto.jpg", // Placeholder
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Inphantry",
        role: "Development Partner",
        bio: "Award-winning studio. Clients: Nike, Nintendo, HBO, Google.",
        image: "/assets/team_partner.jpg", // Placeholder
        isPartner: true,
        socials: { website: "#" }
    }
];

export default function Team() {
    return (
        <section className="py-24 px-6 bg-black relative">
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title={<>The <span className="text-accent">Squad</span></>}
                    subtitle="Built by veterans. Backed by industry leaders."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`group relative overflow-hidden rounded-3xl bg-bg-secondary border ${member.isPartner ? 'border-accent/50 shadow-neon' : 'border-white/10'} hover:border-accent/50 transition-colors`}
                        >
                            {/* Image Placeholder or Actual Image */}
                            <div className="h-80 w-full bg-gray-900 overflow-hidden relative">
                                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10`} />
                                {/* Using a generic avatar/placeholder if images aren't real yet */}
                                <div className="w-full h-full flex items-center justify-center text-white/20 font-black text-6xl uppercase tracking-tighter">
                                    {member.name.split(' ')[0][0]}{member.name.split(' ')[1] ? member.name.split(' ')[1][0] : ''}
                                </div>
                            </div>

                            <div className="p-8 relative z-20 -mt-20">
                                <div className="inline-block px-3 py-1 bg-accent text-black text-xs font-black uppercase tracking-widest rounded mb-3">
                                    {member.role}
                                </div>
                                <h3 className="text-2xl font-black font-gaming text-white mb-2">{member.name}</h3>
                                <p className="text-text-dim text-sm mb-6 line-clamp-3">{member.bio}</p>

                                <div className="flex gap-4">
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} className="text-white hover:text-accent transition-colors"><Twitter size={20} /></a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} className="text-white hover:text-accent transition-colors"><Linkedin size={20} /></a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
