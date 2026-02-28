import { motion } from 'framer-motion';
import { Leaf, Plus } from 'lucide-react';

interface MenuCardProps {
    item: {
        id: string;
        name: string;
        price: number;
        description: string;
        isVeg: boolean;
        image: string;
    };
}

export default function MenuCard({ item }: MenuCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-brand-charcoal/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-brand-gold/30 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col h-full"
        >
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent pointer-events-none" />

                {item.isVeg && (
                    <div className="absolute top-4 left-4 bg-green-500/20 backdrop-blur-md border border-green-500/30 p-1.5 rounded-full text-green-400">
                        <Leaf className="w-3.5 h-3.5" />
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="font-serif text-xl text-[#e5e5e5] group-hover:text-brand-gold transition-colors duration-300">
                        {item.name}
                    </h3>
                    <span className="font-sans text-brand-gold text-lg tracking-wider shrink-0">
                        ₹{item.price}
                    </span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                </p>

                <button className="magnetic w-full py-3 rounded-full border border-brand-gold/30 text-brand-gold flex items-center justify-center gap-2 text-sm tracking-widest uppercase hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 relative overflow-hidden group/btn">
                    <span className="relative z-10 flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Add
                    </span>
                </button>
            </div>
        </motion.div>
    );
}
