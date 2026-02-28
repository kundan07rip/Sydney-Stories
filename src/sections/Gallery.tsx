import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472201-411db1e2fec4?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-32 px-6 md:px-12 bg-brand-espresso relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none z-10"></div>

            <div className="max-w-7xl mx-auto relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif text-brand-gold mb-4">The <span className="italic text-white/90 font-light">Atmosphere</span></h2>
                        <p className="text-white/60 font-light tracking-widest uppercase text-sm">Curated Moments in Time</p>
                    </div>
                    <button className="magnetic text-brand-gold text-xs tracking-[0.2em] uppercase hover:text-white transition-colors flex items-center gap-4 group">
                        View Instagram
                        <div className="w-8 h-[1px] bg-brand-gold group-hover:w-12 transition-all duration-300 group-hover:bg-white"></div>
                    </button>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, idx) => (
                        <motion.div
                            key={src + idx}
                            className="relative break-inside-avoid overflow-hidden rounded-sm cursor-pointer group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: (idx % 3) * 0.1, duration: 0.8 }}
                        >
                            <div className="absolute inset-0 bg-brand-amber/20 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            <motion.img
                                src={src}
                                alt="Atmosphere"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[0.33,1,0.68,1] filter sepia-[0.3] contrast-[1.1] brightness-90 group-hover:sepia-0 group-hover:brightness-100"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
