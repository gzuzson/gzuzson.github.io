import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function FloatingObjects({ children }) {
    const groupRef = useRef();

    useFrame((state, delta) => {
        // Iterate over children (meshes) and update their positions
        if (groupRef.current) {
            groupRef.current.children.forEach((mesh) => {
                // Update position based on velocity
                mesh.position.x += mesh.userData.velocity.x * delta;
                mesh.position.y += mesh.userData.velocity.y * delta;
                mesh.position.z += mesh.userData.velocity.z * delta;
            });
        }
    });


    return <group ref={groupRef}>{children}</group>;
}