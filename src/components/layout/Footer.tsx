import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="location" className="bg-brand-espresso text-[#e5e5e5] py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-ink/50 mix-blend-multiply pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1 border-l pl-6 border-brand-gold/20">
                        <img src="/logo.png" alt="Sydney Stories Logo" className="h-12 w-auto object-contain mb-6 drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
                        <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
                            A premium dining experience blending modern heritage with intimate urban luxury. Where every sip tells a story.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="magnetic w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-charcoal transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] text-white/70">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="magnetic w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-charcoal transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] text-white/70">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-sans text-xs tracking-[0.2em] text-brand-gold uppercase mb-8">Visit Us</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 text-white/70 hover:text-white transition-colors">
                                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                                <p className="text-sm leading-relaxed">
                                    MTM High Street<br />
                                    Bhilwara, Rajasthan<br />
                                    India
                                </p>
                            </div>
                            <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                                <p className="text-sm">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-sans text-xs tracking-[0.2em] text-brand-gold uppercase mb-8">Hours</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 text-white/70">
                                <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                <div className="text-sm space-y-2">
                                    <p><span className="text-white block mb-1">Mon - Fri:</span> 8:00 AM - 11:00 PM</p>
                                    <p><span className="text-white block mb-1">Sat - Sun:</span> 9:00 AM - 12:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="lg:col-span-1 rounded-sm overflow-hidden border border-white/5 h-48 md:h-auto bg-[#1a1a1a]">
                        {/* Dark Styled Google Maps iframe using filter trick */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114614.86989445842!2d74.55160359726563!3d25.344485500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2368dc27083%3A0x60b09312c1143828!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) sepia(20%) saturate(80%)' }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/40 tracking-wider">
                        &copy; {new Date().getFullYear()} Sydney Stories. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-white/40 tracking-wider">
                        <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
                        <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
