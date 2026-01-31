'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type StaggerContainerProps = {
    children: React.ReactNode;
    delay?: number;
    staggerChildren?: number;
    className?: string;
};

export default function StaggerContainer({
    children,
    delay = 0,
    staggerChildren = 0.1,
    className = '',
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                visible: {
                    transition: {
                        delayChildren: delay,
                        staggerChildren,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
