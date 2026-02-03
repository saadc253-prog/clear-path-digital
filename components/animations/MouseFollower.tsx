'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MouseFollower() {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Check if element under cursor is interactive
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.getAttribute('role') === 'button';

            setIsHovered(!!isInteractive);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Background Glow - The "Aura" */}
            <motion.div
                style={{
                    translateX: x,
                    translateY: y,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    backgroundColor: isHovered ? 'var(--accent)' : 'var(--primary)',
                }}
                className="pointer-events-none fixed left-0 top-0 z-30 h-96 w-96 rounded-full opacity-20 blur-[120px] hidden md:block"
            />

            {/* Interactive Outer Ring */}
            <motion.div
                style={{
                    translateX: x,
                    translateY: y,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    width: isHovered ? 80 : 40,
                    height: isHovered ? 80 : 40,
                    borderColor: isHovered ? 'var(--accent)' : 'var(--primary)',
                    opacity: 0.5,
                }}
                className="pointer-events-none fixed left-0 top-0 z-50 rounded-full border border-primary hidden md:block mixed-blend-difference"
            />

            {/* Central 3D-ish Orb */}
            <motion.div
                style={{
                    translateX: x,
                    translateY: y,
                    x: '-50%',
                    y: '-50%',
                }}
                animate={{
                    width: isHovered ? 12 : 6,
                    height: isHovered ? 12 : 6,
                    backgroundColor: isHovered ? '#fff' : 'var(--primary)',
                    boxShadow: isHovered
                        ? '0 0 20px 5px rgba(6, 182, 212, 0.8)'
                        : '0 0 10px 2px rgba(139, 92, 246, 0.5)',
                }}
                className="pointer-events-none fixed left-0 top-0 z-50 rounded-full hidden md:block"
            />
        </>
    );
}
