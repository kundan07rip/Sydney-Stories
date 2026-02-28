import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Leaf } from 'lucide-react';
import MenuCard from '../components/ui/MenuCard';
import menuData from '../data/menu.json';
import { cn } from '../utils/cn';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [showVegOnly, setShowVegOnly] = useState(false);

    // Extract all unique categories
    const categories = ['All', ...menuData.map(c => c.category)];

    // Flatten and filter items
    const filteredItems = useMemo(() => {
        let items = menuData.flatMap(c =>
            c.items.map(item => ({ ...item, category: c.category }))
        );

        if (activeCategory !== 'All') {
            items = items.filter(item => item.category === activeCategory);
        }

        if (showVegOnly) {
            items = items.filter(item => item.isVeg);
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            items = items.filter(item =>
                item.name.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q)
            );
        }

        return items;
    }, [activeCategory, searchQuery, showVegOnly]);

    return (
        <div className="min-h-screen bg-brand-charcoal pt-28 pb-20 px-6 md:px-12 relative">
            {/* Background Decorators */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-espresso/80 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Page Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-7xl font-serif text-brand-gold tracking-wider mb-6 text-shadow-gold">
                        The Menu
                    </h1>
                    <p className="text-[#e5e5e5] tracking-[0.2em] uppercase text-sm md:text-base font-light opacity-80">
                        A Curated Culinary Experience
                    </p>
                </motion.div>

                {/* Filter Bar */}
                <div className="relative z-40 bg-brand-charcoal/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4 md:p-6 mb-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col gap-6">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                            <input
                                type="text"
                                placeholder="Search menu..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder-white/40 focus:outline-none focus:border-brand-gold/50 transition-colors"
                            />
                        </div>

                        {/* Veg Toggle */}
                        <button
                            onClick={() => setShowVegOnly(!showVegOnly)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 w-full md:w-auto justify-center",
                                showVegOnly
                                    ? "bg-green-500/10 border-green-500/50 text-green-400"
                                    : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                            )}
                        >
                            <Leaf className="w-4 h-4" />
                            <span className="text-sm tracking-widest uppercase">Pure Veg</span>
                        </button>
                    </div>

                    {/* Categories Scroll */}
                    <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide gap-3 items-center mask-image-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className="relative whitespace-nowrap px-6 py-2.5 rounded-full text-sm tracking-widest uppercase transition-colors"
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className="absolute inset-0 bg-brand-gold rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className={cn(
                                    "relative z-10 transition-colors duration-300",
                                    activeCategory === category ? "text-brand-charcoal font-medium" : "text-white/60 hover:text-brand-gold"
                                )}>
                                    {category}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Area */}
                {filteredItems.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map(item => (
                                <MenuCard key={item.id} item={item} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <p className="text-2xl font-serif text-white/40 mb-4">No items found</p>
                        <p className="text-white/30 text-sm tracking-widest uppercase">Try adjusting your search or filters</p>
                    </motion.div>
                )}

            </div>
        </div>
    );
}
