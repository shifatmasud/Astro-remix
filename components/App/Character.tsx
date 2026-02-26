import React, { useRef } from 'react';
import { Box, Capsule } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Character = ({ characterState, onColorChange }: { characterState: { x: number; y: number; jump: boolean; color: string }, onColorChange: (color: string) => void }) => {
  const characterRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const backpackRef = useRef<THREE.Group>(null);
  const flameRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    const flame = flameRef.current;
    if (!flame) return;

    gsap.killTweensOf(flame.scale);

    if (characterState.jump) {
      gsap.timeline()
        .to(flame.scale, { x: 1, y: 1, z: 1, duration: 0.2, ease: 'power2.out' })
        .to(flame.scale, { y: 1.2, duration: 0.5, repeat: -1, yoyo: true, ease: 'sine.inOut' }, ">");
    } else {
      gsap.to(flame.scale, { x: 0, y: 0, z: 0, duration: 0.2, ease: 'power2.in' });
    }
  }, [characterState.jump]);
  
  const pos = useRef({ x: 0, y: 0, z: 0 });
  const velocity = useRef({ x: 0, y: 0, z: 0 });

  useFrame((state, delta) => {
    const { x, y, jump } = characterState;

    const angle = Math.atan2(x, -y);
    const speed = Math.sqrt(x ** 2 + y ** 2);

    if (speed > 0.01) {
      velocity.current.x = Math.sin(angle) * 2 * speed;
      velocity.current.z = Math.cos(angle) * 2 * speed;
      if (characterRef.current) {
        characterRef.current.rotation.y = THREE.MathUtils.lerp(characterRef.current.rotation.y, angle, 0.1);
      }
    } else {
      velocity.current.x *= 0.9;
      velocity.current.z *= 0.9;
    }

    pos.current.x += velocity.current.x * delta;
    pos.current.z += velocity.current.z * delta;

    if (jump) {
      velocity.current.y += 0.02;
    }

    if (pos.current.y > 0) {
      velocity.current.y -= 0.01;
    }

    pos.current.y += velocity.current.y;

    if (pos.current.y < 0) {
      pos.current.y = 0;
      velocity.current.y = 0;
    }

    if (characterRef.current) {
      characterRef.current.position.set(pos.current.x, pos.current.y, pos.current.z);
    }

    

    if (speed > 0.01) {
      const time = state.clock.getElapsedTime();
      const legRotation = Math.sin(time * 10) * 0.5;
      if (leftLegRef.current) {
        leftLegRef.current.rotation.x = legRotation;
      }
      if (rightLegRef.current) {
        rightLegRef.current.rotation.x = -legRotation;
      }
      if (bodyRef.current) {
        bodyRef.current.position.y = 0.8 + Math.sin(time * 10) * 0.05;
      }
    } else {
      if (leftLegRef.current) {
        leftLegRef.current.rotation.x = THREE.MathUtils.lerp(leftLegRef.current.rotation.x, 0, 0.1);
      }
      if (rightLegRef.current) {
        rightLegRef.current.rotation.x = THREE.MathUtils.lerp(rightLegRef.current.rotation.x, 0, 0.1);
      }
      if (bodyRef.current) {
        bodyRef.current.position.y = THREE.MathUtils.lerp(bodyRef.current.position.y, 0.8, 0.1);
      }
    }

    
  });

  const bodyColor = "#ef4444"; // Red
  const visorColor = "#7dd3fc"; // Light blue

  return (
    <group>
      <group ref={characterRef} rotation={[0, Math.PI / 2, 0]}>
        {/* Main Body Group */}
        <group ref={bodyRef} position={[0, 0.8, 0]}>
            {/* Body Capsule */}
            <Capsule args={[0.35, 0.6, 4, 8]}>
            <meshStandardMaterial color={bodyColor} />
            </Capsule>
            
            {/* Backpack */}
            <group ref={backpackRef}>
                <Box args={[0.3, 0.5, 0.25]} position={[0, 0.1, -0.3]}>
                  <meshStandardMaterial color={bodyColor} />
                </Box>
                {/* Jetpack Flame */}
                <group 
                  ref={flameRef} 
                  position={[0, -0.2, -0.3]} 
                  scale={0} // Start scaled down
                >
                    <Box args={[0.15, 0.3, 0.15]} position={[0, -0.15, 0]}>
                        <meshBasicMaterial color="#fbbf24" />
                    </Box>
                    <Box args={[0.1, 0.2, 0.1]} position={[0, -0.25, 0]}>
                        <meshBasicMaterial color="#ef4444" />
                    </Box>
                </group>
            </group>

            {/* Visor */}
            <Box args={[0.4, 0.25, 0.15]} position={[0, 0.2, 0.3]}>
            <meshStandardMaterial color={visorColor} roughness={0.2} metalness={0.8} />
            </Box>
        </group>
        
        {/* Legs */}
        <group position={[0, 0.3, 0]}>
            <group ref={leftLegRef} position={[-0.15, 0, 0]}>
                <Capsule args={[0.12, 0.3, 4, 8]} position={[0, -0.15, 0]}>
                    <meshStandardMaterial color={bodyColor} />
                </Capsule>
            </group>
            <group ref={rightLegRef} position={[0.15, 0, 0]}>
                <Capsule args={[0.12, 0.3, 4, 8]} position={[0, -0.15, 0]}>
                    <meshStandardMaterial color={bodyColor} />
                </Capsule>
            </group>
        </group>
      </group>
    </group>
  );
};
