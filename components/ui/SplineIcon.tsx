'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-primary/5 animate-pulse rounded-full" />
});

interface SplineIconProps {
    scene: string;
    className?: string;
}

const SplineIcon = ({ scene, className = "w-full h-full" }: SplineIconProps) => {
    return (
        <div className={className}>
            <Suspense fallback={<div className="w-full h-full bg-primary/5 animate-pulse rounded-full" />}>
                <Spline scene={scene} />
            </Suspense>
        </div>
    );
};

export default SplineIcon;
