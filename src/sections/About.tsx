import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section id="story" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-brand-espresso text-[#e5e5e5] relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-xl"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-gold mb-8 leading-tight">
                        A Legacy of <br /><span className="italic text-white/90 font-light">Craftsmanship</span>
                    </h2>
                    <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
                        <p>
                            Born from a passion for the perfect pour, Sydney Stories is more than a café—it’s an intimate urban refuge. We believe that every cup holds a narrative, sourced from the finest estates and crafted with meticulous precision.
                        </p>
                        <p>
                            Located in the heart of MTM High Street, our space blends modern heritage with contemporary luxury. The deep espresso woods, warm amber lighting, and cinematic atmosphere are designed to elevate your everyday rituals into memorable experiences.
                        </p>
                    </div>

                    <motion.div
                        className="mt-12 flex items-center gap-4 cursor-pointer magnetic w-max group"
                        whileHover={{ x: 10 }}
                    >
                        <span className="text-brand-gold text-sm tracking-[0.2em] uppercase">Discover Our Origins</span>
                        <div className="w-12 h-[1px] bg-brand-gold group-hover:w-20 transition-all duration-300"></div>
                    </motion.div>
                </motion.div>

                <div className="relative h-[500px] md:h-[700px] w-full mt-12 lg:mt-0">
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute top-0 right-0 md:right-10 w-full md:w-4/5 h-[350px] md:h-[500px] rounded-sm overflow-hidden z-10"
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
                            alt="Cafe Atmosphere"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7 }}
                        />
                    </motion.div>

                    <motion.div
                        style={{ y: y2 }}
                        className="absolute bottom-0 left-0 w-3/4 md:w-1/2 h-[250px] md:h-[400px] rounded-sm overflow-hidden shadow-2xl z-20 border border-white/5"
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop"
                            alt="Craft Coffee"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7 }}
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
