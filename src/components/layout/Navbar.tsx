import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const location = useLocation();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Menu', href: '/menu' },
    ];

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12",
                    isScrolled ? "py-4 bg-brand-charcoal/80 backdrop-blur-md border-b border-white/5" : "py-6 md:py-8 bg-transparent"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between relative">
                    <Link to="/" className="magnetic flex items-center justify-center absolute -top-2 md:-top-6 left-0 z-50">
                        <img src="/logo.png" alt="Sydney Stories Logo" className="h-20 md:h-28 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                    </Link>

                    {/* Add an empty div to maintain flex spacing since logo is now absolute */}
                    <div className="w-20 md:w-28"></div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={cn(
                                    "magnetic text-sm uppercase tracking-widest hover:text-brand-gold transition-colors duration-300 relative group",
                                    location.pathname === link.href ? "text-brand-gold" : "text-[#e5e5e5]"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-2 left-1/2 h-[1px] bg-brand-gold transition-all duration-300",
                                    location.pathname === link.href ? "w-full left-0" : "w-0 group-hover:w-full group-hover:left-0"
                                )}></span>
                            </Link>
                        ))}
                    </nav>

                    <button className="hidden md:block magnetic px-6 py-2.5 border border-brand-gold/30 rounded-full text-brand-gold text-sm tracking-widest hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                        RESERVE
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-brand-gold magnetic"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-brand-ink/95 backdrop-blur-lg flex flex-col justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button
                            className="absolute top-6 right-6 text-brand-gold p-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        "text-4xl font-serif transition-colors",
                                        location.pathname === link.href ? "text-brand-gold" : "text-[#e5e5e5] hover:text-brand-gold"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <motion.span
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            ))}
                            <motion.button
                                className="mt-8 px-8 py-3 border border-brand-gold rounded-full text-brand-gold tracking-widest"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                RESERVE A TABLE
                            </motion.button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
