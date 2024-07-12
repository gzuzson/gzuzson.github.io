import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function MeshReact(props) {
    const group = useRef();

    const { nodes, materials } = useGLTF('/react.glb');

    useFrame(() => {
        // Rotate the mesh on each frame
        group.current.rotation.x += 0.01;
        group.current.rotation.y += 0.01;
        group.current.rotation.z -= 0.001;
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={materials['Material.001']}
                position={[0, 0.011, -0.188]}
                scale={0.15}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus002.geometry}
                material={materials['Material.001']}
                position={[0, 0.011, -0.185]}
                rotation={[-Math.PI / 2, 1.043, -1.981]}
                scale={0.566}
            />
        </group>
    );
}

useGLTF.preload('/react.glb');