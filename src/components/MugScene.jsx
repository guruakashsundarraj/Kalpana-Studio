// MugScene.jsx
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Environment, ContactShadows } from "@react-three/drei";
import MugModel from "./MugModel";

export default function MugScene({ image, colors }) {
  const lightRef = useRef();

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 40 }}>
      <ambientLight intensity={0.6} />
      <directionalLight ref={lightRef} position={[5, 5, 5]} castShadow intensity={1} />
      
      <Suspense fallback={<Html>Loading...</Html>}>
        <MugModel image={image} colors={colors} />
        <Environment preset="studio" />
      </Suspense>

      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.4}
        scale={10}
        blur={1.5}
        far={5}
      />

      <OrbitControls enablePan={false} enableZoom={false} autoRotate />
    </Canvas>
  );
}
