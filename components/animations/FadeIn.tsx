'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
};

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    className = '',
    direction = 'up',
    fullWidth = false,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const getVariants = () => {
        switch (direction) {
            case 'up':
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                };
            case 'down':
                return {
                    hidden: { opacity: 0, y: -40 },
                    visible: { opacity: 1, y: 0 },
                };
            case 'left':
                return {
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'right':
                return {
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'none':
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={getVariants()}
            transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
            style={{ width: fullWidth ? '100%' : 'auto' }}
        >
            {children}
        </motion.div>
    );
}
