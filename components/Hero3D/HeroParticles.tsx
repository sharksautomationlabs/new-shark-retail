"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function StarField({
  position,
  scale,
  color,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 2600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const r = 10 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[idx] = r * Math.sin(phi) * Math.cos(theta);
      arr[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[idx + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.02;
    pointsRef.current.rotation.z = Math.sin(time * 0.1) * 0.03;
  });

  return (
    <points ref={pointsRef} position={position} scale={[scale, scale, scale]}>
      <bufferGeometry
        attach="geometry"
        attributes={{ position: new THREE.Float32BufferAttribute(positions, 3) }}
      />
      <pointsMaterial
        size={0.06}
        color={color}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroParticles() {
  return <StarField position={[0, 0, -6]} scale={1.2} color="#e5f9ff" />;
}
