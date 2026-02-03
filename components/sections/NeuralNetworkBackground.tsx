'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from '@/lib/three-compat';

const NeuralNetworkBackground = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaInstance = useRef<any>(null);

    useEffect(() => {
        let isMounted = true;

        const initVanta = async () => {
            try {
                // @ts-ignore - Vanta is a Legacy library with unconventional exports
                const vantaModule = await import('vanta/dist/vanta.net.min');
                const NET = vantaModule.default || vantaModule;

                if (isMounted && vantaRef.current && !vantaInstance.current && typeof NET === 'function') {
                    vantaInstance.current = NET({
                        el: vantaRef.current,
                        THREE: THREE,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        scale: 1.0,
                        scaleMobile: 1.0,
                        color: 0x8b5cf6, // Vivid Violet
                        backgroundColor: 0x0f172a, // Deep Midnight Blue
                        points: 12.0,
                        maxDistance: 22.0,
                        spacing: 16.0,
                        showDots: true,
                    });
                }
            } catch (error) {
                console.warn('Vanta.js initialization deferred or failed:', error);
            }
        };

        // Delay initialization slightly to ensure canvas readiness and avoid hydration flickers
        const timer = setTimeout(initVanta, 100);

        return () => {
            isMounted = false;
            clearTimeout(timer);
            if (vantaInstance.current) {
                vantaInstance.current.destroy();
                vantaInstance.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="absolute inset-0 -z-20 opacity-40 transition-opacity duration-1000"
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default NeuralNetworkBackground;
