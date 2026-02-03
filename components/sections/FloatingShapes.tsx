'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ position, color, type }: { position: [number, number, number], color: string, type: 'box' | 'sphere' | 'torus' }) => {
    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            {type === 'box' && (
                <Box args={[1, 1, 1]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.3} transparent opacity={0.6} />
                </Box>
            )}
            {type === 'sphere' && (
                <Sphere args={[0.7, 32, 32]} position={position}>
                    <MeshDistortMaterial color={color} speed={3} distort={0.4} transparent opacity={0.6} />
                </Sphere>
            )}
            {type === 'torus' && (
                <Torus args={[0.6, 0.2, 16, 100]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.3} transparent opacity={0.6} />
                </Torus>
            )}
        </Float>
    );
};

const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

                <Shape position={[-3, 2, 0]} color="#8b5cf6" type="box" />      {/* Violet Cube */}
                <Shape position={[3, -2, -1]} color="#06b6d4" type="sphere" />   {/* Cyan Sphere */}
                <Shape position={[2, 2, -2]} color="#8b5cf6" type="torus" />     {/* Violet Torus */}
                <Shape position={[-4, -3, -1]} color="#06b6d4" type="box" />    {/* Cyan Cube */}
            </Canvas>
        </div>
    );
};

export default FloatingShapes;
