import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ position, color, speed, distort, radius, args }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.cos(t / 4) / 2;
      mesh.current.rotation.y = Math.sin(t / 4) / 2;
      mesh.current.rotation.z = Math.sin(t / 4) / 2;
      mesh.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position} ref={mesh}>
        {args ? <RoundedBox args={args} radius={0.1} /> : <Sphere args={[radius, 32, 32]} />}
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
};

const FloatingShapes = () => {
  const shapes = useMemo(() => [
    { position: [-6, 2, -5], color: '#90CAF9', speed: 1.2, distort: 0.4, radius: 1.2 }, // Blue
    { position: [6, -2, -6], color: '#EF9A9A', speed: 1.5, distort: 0.5, radius: 1.5 }, // Coral
    { position: [8, 4, -8], color: '#FFF59D', speed: 1.1, distort: 0.3, radius: 1 },    // Yellow
    { position: [-7, -3, -7], color: '#A5D6A7', speed: 1.4, distort: 0.6, radius: 1.3 }, // Mint
    { position: [2, 5, -10], color: '#90CAF9', speed: 1.8, distort: 0.2, radius: 0.8 },  // Blue Small
    { position: [-3, -6, -12], color: '#EF9A9A', speed: 1.6, distort: 0.4, radius: 2 },  // Coral Large
  ], []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        {shapes.map((props, i) => (
          <Shape key={i} {...props} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
