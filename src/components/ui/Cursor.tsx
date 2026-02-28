import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('magnetic') ||
                target.closest('.magnetic')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className={cn(
                    "hidden md:block fixed top-0 left-0 w-3 h-3 bg-brand-gold rounded-full pointer-events-none z-[100] mix-blend-difference",
                    "transition-opacity duration-300"
                )}
                style={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: 1
                }}
            />
            <motion.div
                className={cn(
                    "hidden md:flex fixed top-0 left-0 w-12 h-12 border border-brand-gold/50 rounded-full pointer-events-none z-[99] items-center justify-center bg-brand-gold/5 backdrop-blur-[1px]"
                )}
                style={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0)",
                    borderColor: isHovering ? "rgba(212, 175, 55, 0.8)" : "rgba(212, 175, 55, 0.3)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5
                }}
            />
        </>
    );
}
