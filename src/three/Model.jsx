import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';

const Model = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.08;
    }
  });

  // --- CHANGE THE COLOR PROPERTY HERE ---
  const accentColorHex = "#FF0099"; // Neon Pink

  return (
    <Icosahedron ref={meshRef} args={[1, 1]} scale={1.5}>
      <meshStandardMaterial 
        color={accentColorHex} 
        wireframe={true}
        emissive={accentColorHex} // Change emissive light color
        emissiveIntensity={0.1}
        transparent
        opacity={0.8}
      />
    </Icosahedron>
  );
};

export default Model;