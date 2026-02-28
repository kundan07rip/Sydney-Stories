import { motion, type Variants } from 'framer-motion';
import bgVideo from '../assets/videos/Cinematic_Drone_Shot_Generated.mp4';

const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const letter: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: [0.2, 0.65, 0.3, 0.9] as any, duration: 1.2 },
    },
};

export default function Hero() {
    const title = "Sydney Stories";

    return (
        <section className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-brand-charcoal">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-brand-charcoal/40 to-brand-espresso/90 z-10" />
                <motion.video
                    src={bgVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                />
            </div>

            <div className="relative z-20 flex flex-col items-center text-center px-4 mt-20">
                <motion.h1
                    className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-brand-gold tracking-tight leading-none mb-6 text-shadow-gold"
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {title.split("").map((char, index) => (
                        <motion.span key={char + "-" + index} variants={letter} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className="text-base md:text-xl lg:text-2xl font-light tracking-[0.2em] text-[#e5e5e5] uppercase mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                >
                    Where Every Sip Tells a Story.
                </motion.p>

                <motion.button
                    className="magnetic relative overflow-hidden px-8 py-4 border border-brand-gold/50 rounded-full text-brand-gold tracking-[0.15em] text-sm uppercase group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
                >
                    <span className="relative z-10 group-hover:text-brand-charcoal transition-colors duration-500">Explore the Menu</span>
                    <div className="absolute inset-0 h-full w-full bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.button>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <span className="text-[10px] tracking-widest text-brand-gold uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
                    <motion.div
                        className="w-full h-1/2 bg-brand-gold"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
