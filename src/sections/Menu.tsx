import { motion } from 'framer-motion';

const menuCategories = [
    {
        title: 'Artisan Coffees',
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop',
        items: ['Single Origin Espresso', 'Pour Over V60', 'Smoked Vanilla Latte'],
        span: 'md:col-span-2 md:row-span-2',
    },
    {
        title: 'Signature Burgers',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
        items: ['Truffle Mushroom Swiss', 'Classic Wagyu', 'Crispy Chicken Brioche'],
        span: 'md:col-span-1 md:row-span-2',
    },
    {
        title: 'Gourmet Fast Food',
        image: 'https://images.unsplash.com/photo-1569698134101-f16c7ccb8d80?q=80&w=800&auto=format&fit=crop',
        items: ['Parmesan Truffle Fries', 'Spicy Artisan Wings', 'Lobster Mac & Cheese'],
        span: 'md:col-span-3 md:row-span-1',
    }
];

export default function Menu() {
    return (
        <section id="menu" className="py-32 px-6 md:px-12 bg-brand-charcoal relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-brand-gold mb-4">Signature <span className="italic text-white/90 font-light">Curations</span></h2>
                    <p className="text-white/60 font-light tracking-widest uppercase text-sm">Flavors Crafted for the Connoisseur</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {menuCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            className={`relative rounded-sm overflow-hidden group cursor-pointer border border-white/5 bg-brand-ink magnetic-card ${category.span}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 * idx, duration: 0.8 }}
                            whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(212,175,55,0.15)" }}
                        >
                            <div className="absolute inset-0 bg-brand-charcoal/40 group-hover:bg-brand-charcoal/70 transition-colors duration-500 z-10 backdrop-blur-[2px] group-hover:backdrop-blur-sm"></div>
                            <motion.img
                                src={category.image}
                                alt={category.title}
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
                            />

                            <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                                <h3 className="text-3xl font-serif text-brand-gold mb-0 group-hover:-translate-y-4 transition-transform duration-500">{category.title}</h3>

                                <div className="space-y-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 absolute bottom-8 left-8 md:left-12 right-8 pointer-events-none">
                                    {category.items.map(item => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                                            <span className="text-white/90 font-light text-sm tracking-wide">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/30 z-30 transition-colors duration-500 rounded-sm pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
