import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Lights to illuminate the model */}
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={2} 
        // --- CHANGE THIS COLOR PROPERTY ---
        color="#FF0099" // Spotlight color changed to Neon Pink
      />
      
      {/* 3D Content */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;