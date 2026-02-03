'use client';

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const MetricGlobe = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        let globe: any = null;

        if (!canvasRef.current) return;

        try {
            globe = createGlobe(canvasRef.current, {
                devicePixelRatio: 2,
                width: 600 * 2,
                height: 600 * 2,
                phi: 0,
                theta: 0,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: [0.06, 0.09, 0.165], // #0F172A (Deep Midnight Blue)
                markerColor: [0.545, 0.36, 0.965], // #8B5CF6 (Vivid Violet)
                glowColor: [0.024, 0.714, 0.831], // #06B6D4 (Electric Cyan)
                markers: [
                    // Glowing connection points
                    { location: [37.7595, -122.4367], size: 0.05 }, // San Francisco
                    { location: [40.7128, -74.006], size: 0.05 },  // New York
                    { location: [51.5074, -0.1278], size: 0.05 },  // London
                    { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
                    { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
                    { location: [24.7136, 46.6753], size: 0.05 },  // Riyadh
                    { location: [1.3521, 103.8198], size: 0.05 },  // Singapore
                ],
                onRender: (state) => {
                    state.phi = phi;
                    phi += 0.003;
                },
            });
        } catch (error) {
            console.error('Globe initialization failed:', error);
        }

        return () => {
            if (globe) globe.destroy();
        };
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            />
        </div>
    );
};

export default MetricGlobe;
