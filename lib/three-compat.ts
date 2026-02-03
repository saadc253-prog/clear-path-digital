import * as THREE from 'three';

// Patch THREE for Vanta.js compatibility
// Vanta.js 0.5.24 expects VertexColors, which was removed in newer THREE versions.
if ((THREE as any).VertexColors === undefined) {
    (THREE as any).VertexColors = 2; // In older Three.js, VertexColors = 2
}

export * from 'three';
export default THREE;
