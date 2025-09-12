// MugModel.jsx
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export default function MugModel({ image, colors }) {
  const mugRef = useRef();
  const texture = image ? useTexture(image) : null;

  // Auto-rotate
  useFrame(() => {
    if (mugRef.current) {
      mugRef.current.rotation.y += 0.005;
    }
  });

  const { viewport } = useThree();

  return (
    <>
      {/* Plate/Base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]}>
        <cylinderGeometry args={[2, 2, 0.1, 64]} />
        <meshStandardMaterial color="#ccc" />
      </mesh>

      {/* Mug */}
      <group ref={mugRef} position={[0, -0.25, 0]}>
        {/* Outer Cylinder */}
        <mesh>
          <cylinderGeometry args={[1.2, 1.2, 1.5, 64, 1, true]} />
          <meshStandardMaterial
            side={THREE.FrontSide}
            color={colors.body}
            map={texture}
          />
        </mesh>

        {/* Inner Cylinder */}
        <mesh position={[0, 0.01, 0]}>
          <cylinderGeometry args={[1.1, 1.1, 1.45, 64, 1, true]} />
          <meshStandardMaterial
            side={THREE.BackSide}
            color={colors.inner}
          />
        </mesh>

        {/* Rim */}
        <mesh position={[0, 0.75, 0]}>
          <torusGeometry args={[1.15, 0.05, 16, 100]} />
          <meshStandardMaterial color={colors.rim} />
        </mesh>

        {/* Handle */}
        <mesh position={[1.3, 0, 0]}>
          <torusGeometry args={[0.45, 0.1, 16, 100, Math.PI]} />
          <meshStandardMaterial color={colors.handle} />
        </mesh>
      </group>

      {/* Ground shadow */}
      <ContactShadows
        position={[0, -0.9, 0]}
        opacity={0.4}
        scale={10}
        blur={1.5}
        far={2}
      />
    </>
  );
}
