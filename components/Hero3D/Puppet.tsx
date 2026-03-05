"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

type StarFieldProps = {
  position: [number, number, number];
  scale: number;
  color: string;
};

function StarField({ position, scale, color }: StarFieldProps) {
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

export default function SwingingPuppet() {
  const groupRef = useRef<THREE.Group>(null);

  // Apni image ka path yahan rakhein. Image aesi ho jisme chain upar tak ja rahi ho.
  const texture = useTexture('/images/puppet.png');

  // Viewport se hum exact screen ka size nikalenge taaki puppet massive lage
  const { viewport } = useThree();

  // Puppet ko massive banane ka math:
  // Height screen se thodi badi (1.2x) taaki top se chain aati hui dikhe
  const planeHeight = viewport.height * 1.2;
  // Width ko image ki aspect ratio ke hisaab se set karenge taaki image stretch na ho
  const texImage = (texture as THREE.Texture).image as
    | { width: number; height: number }
    | undefined;
  const aspect =
    texImage && texImage.width && texImage.height
      ? texImage.width / texImage.height
      : 1;
  const planeWidth = planeHeight * aspect;

  useFrame((state) => {
    if (!groupRef.current) return;

    // EXACT PENDULUM SWING + mouse interaction
    const time = state.clock.getElapsedTime();
    const swingZ = Math.sin(time * 1.5) * 0.12;
    const swingX = Math.cos(time * 1.2) * 0.04;

    const mouseX = state.pointer.x * Math.PI * 0.05;
    const mouseY = state.pointer.y * Math.PI * 0.05;

    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      swingZ - mouseX,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      swingX + mouseY,
      0.05
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseX * 2,
      0.05
    );
  });

  return (
    <>
      {/* Background star field: space-style moving particles */}
      <StarField position={[0, 0, -6]} scale={1.2} color="#e5f9ff" />

      {/* Pivot Point: Ise exactly top screen par rakha hai (viewport.height / 2) */}
      <group ref={groupRef} position={[0, viewport.height / 2, 0]}>
        {/* Mesh: Isko niche shift kiya hai (-planeHeight / 2) taaki ye top se latke */}
        <mesh position={[0, -planeHeight / 2, 0]}>
          <planeGeometry args={[planeWidth, planeHeight]} />
          <meshBasicMaterial
            map={texture}
            transparent
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      </group>
    </>
  );
}