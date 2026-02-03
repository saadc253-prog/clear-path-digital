'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';

const NeuralNetworkBackground = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x8b5cf6, // Violet
                    backgroundColor: 0x0f172a, // Deep Midnight Blue
                    points: 12.0,
                    maxDistance: 22.0,
                    spacing: 16.0,
                    showDots: true,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            ref={vantaRef}
            className="absolute inset-0 -z-20 opacity-40 transition-opacity duration-1000"
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default NeuralNetworkBackground;
