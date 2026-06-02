"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeroParticles from "./HeroParticles";

export default function Hero3DCanvas() {
  return (
    <Canvas
      className="pointer-events-none absolute inset-0 h-full w-full touch-none"
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true }}
      onCreated={({ gl, scene }) => {
        scene.background = null;
        gl.setClearColor("#020205", 0);
      }}
    >
      <Suspense fallback={null}>
        <HeroParticles />
      </Suspense>
    </Canvas>
  );
}
