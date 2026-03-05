"use client";

import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* --- Theme: Deep Space Dark + Teal (logo color) & Cyan --- */
const COLORS = {
  orbLeft: new THREE.Color('#14b8a6'),   // Logo teal
  orbRight: new THREE.Color('#22d3ee'),  // Cyan accent
  particle: new THREE.Color('#5eead4'),  // Soft teal
  particleCyan: new THREE.Color('#67e8f9'),
};

const PARTICLE_COUNT = 2500;
const START_DELAY = 0.55; // hero shows first, then shades enter
const PHASE1_DURATION = 1.6;
const PHASE2_DURATION = 1.2;
const PHASE3_DURATION = 0.6;
const PHASE4_MORPH_DURATION = 4;

/** Phase 1: Two glowing orbs move from left/right to center */
function GlowOrbs({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const leftRef = useRef<THREE.Mesh>(null);
  const rightRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const raw = progressRef.current;
    if (raw < START_DELAY) {
      if (leftRef.current) leftRef.current.visible = false;
      if (rightRef.current) rightRef.current.visible = false;
      return;
    }
    const progress = raw - START_DELAY;
    if (!leftRef.current || !rightRef.current) return;
    if (progress >= PHASE1_DURATION) {
      leftRef.current.visible = false;
      rightRef.current.visible = false;
      return;
    }
    leftRef.current.visible = true;
    rightRef.current.visible = true;
    const t = Math.min(progress / PHASE1_DURATION, 1);
    const ease = 1 - Math.pow(1 - t, 2);
    leftRef.current.position.x = THREE.MathUtils.lerp(-4, 0, ease);
    rightRef.current.position.x = THREE.MathUtils.lerp(4, 0, ease);
    const scale = 0.8 + 0.4 * Math.sin(progress * 2);
    leftRef.current.scale.setScalar(scale);
    rightRef.current.scale.setScalar(scale);
  });

  return (
    <>
      <mesh ref={leftRef} position={[-4, 0, -2]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color={COLORS.orbLeft} transparent opacity={0.6} />
      </mesh>
      <mesh ref={rightRef} position={[4, 0, -2]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color={COLORS.orbRight} transparent opacity={0.5} />
      </mesh>
    </>
  );
}

/** Phase 2–4: Particle system — explosion then morphing wireframe shapes */
function ParticleField({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { positions, explosionTargets, shapePositions, jitter } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const explosionTargets = new Float32Array(PARTICLE_COUNT * 3);
    const shapePositions: Float32Array[] = [];
    const jitter = new Float32Array(PARTICLE_COUNT * 3);

    // Explosion: random positions in a sphere
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 2;
      explosionTargets[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      explosionTargets[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      explosionTargets[i * 3 + 2] = r * Math.cos(phi) - 2;

      jitter[i * 3] = (Math.random() - 0.5) * 0.35;
      jitter[i * 3 + 1] = (Math.random() - 0.5) * 0.35;
      jitter[i * 3 + 2] = (Math.random() - 0.5) * 0.35;
    }

    // Shape 0: Circle (ring in XY)
    const circle = new Float32Array(PARTICLE_COUNT * 3);
    const radius = 2.2;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = (i / PARTICLE_COUNT) * Math.PI * 2;
      // thick “band” (not a thin line)
      const rr = radius + (Math.random() - 0.5) * 0.35;
      circle[i * 3] = rr * Math.cos(t);
      circle[i * 3 + 1] = rr * Math.sin(t);
      circle[i * 3 + 2] = -2 + (Math.random() - 0.5) * 0.5;
    }
    shapePositions.push(circle);

    // Shape 1: Triangle (wireframe edges)
    const triangle = new Float32Array(PARTICLE_COUNT * 3);
    const v0 = new THREE.Vector3(0, 2.2, -2);
    const v1 = new THREE.Vector3(-2, -1.5, -2);
    const v2 = new THREE.Vector3(2, -1.5, -2);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = (i / PARTICLE_COUNT) * 3;
      const edge = Math.floor(t) % 3;
      const localT = t - Math.floor(t);
      const a = [v0, v1, v2][edge];
      const b = [v1, v2, v0][edge];
      triangle[i * 3] = THREE.MathUtils.lerp(a.x, b.x, localT);
      triangle[i * 3 + 1] = THREE.MathUtils.lerp(a.y, b.y, localT);
      triangle[i * 3 + 2] = THREE.MathUtils.lerp(a.z, b.z, localT);
      // add thickness so it looks like “formation” not a line
      triangle[i * 3] += (Math.random() - 0.5) * 0.25;
      triangle[i * 3 + 1] += (Math.random() - 0.5) * 0.25;
      triangle[i * 3 + 2] += (Math.random() - 0.5) * 0.25;
    }
    shapePositions.push(triangle);

    // Shape 2: DNA double helix
    const dna = new Float32Array(PARTICLE_COUNT * 3);
    const half = Math.floor(PARTICLE_COUNT / 2);
    const helixRadius = 1.2;
    const helixPitch = 1.5;
    for (let i = 0; i < half; i++) {
      const t = (i / half) * Math.PI * 4;
      dna[i * 3] = helixRadius * Math.cos(t);
      dna[i * 3 + 1] = helixRadius * Math.sin(t);
      dna[i * 3 + 2] = t * helixPitch * 0.3 - 2;
    }
    for (let i = half; i < PARTICLE_COUNT; i++) {
      const t = ((i - half) / (PARTICLE_COUNT - half)) * Math.PI * 4;
      dna[i * 3] = helixRadius * Math.cos(t + Math.PI);
      dna[i * 3 + 1] = helixRadius * Math.sin(t + Math.PI);
      dna[i * 3 + 2] = t * helixPitch * 0.3 - 2;
    }
    shapePositions.push(dna);

    return { positions, explosionTargets, shapePositions, jitter };
  }, []);

  const posAttrRef = useRef<THREE.BufferAttribute | null>(null);
  const currentShapeRef = useRef(0);
  const morphProgressRef = useRef(0);
  const phase2StartRef = useRef(PHASE1_DURATION);

  useLayoutEffect(() => {
    if (!pointsRef.current) return;
    const geom = pointsRef.current.geometry;
    const attr = geom.getAttribute('position') as THREE.BufferAttribute;
    posAttrRef.current = attr;
  }, []);

  useFrame((_, delta) => {
    const raw = progressRef.current;
    const progress = Math.max(raw - START_DELAY, 0);
    const phase =
      progress < PHASE1_DURATION
        ? 1
        : progress < PHASE1_DURATION + PHASE2_DURATION
          ? 2
          : progress < PHASE1_DURATION + PHASE2_DURATION + PHASE3_DURATION
            ? 3
            : 4;
    if (phase < 2 || !pointsRef.current || !posAttrRef.current) return;
    const attr = posAttrRef.current;
    const arr = attr.array as Float32Array;

    if (phase === 2) {
      const t = Math.min((progress - phase2StartRef.current) / PHASE2_DURATION, 1);
      const ease = 1 - Math.pow(1 - t, 1.5);
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        arr[i * 3] = THREE.MathUtils.lerp(0, explosionTargets[i * 3], ease);
        arr[i * 3 + 1] = THREE.MathUtils.lerp(0, explosionTargets[i * 3 + 1], ease);
        arr[i * 3 + 2] = THREE.MathUtils.lerp(-2, explosionTargets[i * 3 + 2], ease);
      }
    } else if (phase === 4) {
      // Keep particles scattered; shapes “emerge” within the scatter (no thin wireframe lines)
      morphProgressRef.current += delta / PHASE4_MORPH_DURATION;
      let morphT = morphProgressRef.current;
      if (morphT >= 1) {
        morphProgressRef.current = 0;
        currentShapeRef.current = (currentShapeRef.current + 1) % shapePositions.length;
        morphT = 0;
      }

      const smoothT = morphT * morphT * (3 - 2 * morphT);
      const shape = shapePositions[currentShapeRef.current];
      const influence = 0.4 + 0.4 * smoothT; // never full 1, so cloud stays “bikhra”

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const idx = i * 3;
        const baseX = explosionTargets[idx];
        const baseY = explosionTargets[idx + 1];
        const baseZ = explosionTargets[idx + 2];

        const targetX = shape[idx] + jitter[idx];
        const targetY = shape[idx + 1] + jitter[idx + 1];
        const targetZ = shape[idx + 2] + jitter[idx + 2];

        arr[idx] = THREE.MathUtils.lerp(baseX, targetX, influence);
        arr[idx + 1] = THREE.MathUtils.lerp(baseY, targetY, influence);
        arr[idx + 2] = THREE.MathUtils.lerp(baseZ, targetZ, influence);
      }
    }
    attr.needsUpdate = true;
  });

  useFrame((_, delta) => {
    const raw = progressRef.current;
    const progress = Math.max(raw - START_DELAY, 0);
    const phase =
      progress < PHASE1_DURATION
        ? 1
        : progress < PHASE1_DURATION + PHASE2_DURATION
          ? 2
          : progress < PHASE1_DURATION + PHASE2_DURATION + PHASE3_DURATION
            ? 3
            : 4;
    if (phase === 4 && pointsRef.current) pointsRef.current.rotation.y += delta * 0.15;
  });

  useFrame(() => {
    const raw = progressRef.current;
    const progress = Math.max(raw - START_DELAY, 0);
    const phase =
      progress < PHASE1_DURATION
        ? 1
        : progress < PHASE1_DURATION + PHASE2_DURATION
          ? 2
          : progress < PHASE1_DURATION + PHASE2_DURATION + PHASE3_DURATION
            ? 3
            : 4;
    if (pointsRef.current) pointsRef.current.visible = phase >= 2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors={false}
        color={COLORS.particle}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  const progressRef = useRef(0);

  useFrame((_, delta) => {
    progressRef.current += delta;
  });

  return (
    <>
      <GlowOrbs progressRef={progressRef} />
      <ParticleField progressRef={progressRef} />
    </>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#050508]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
