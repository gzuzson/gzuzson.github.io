/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MeshTailwind(props) {
    const { nodes, materials } = useGLTF('/tailwind.glb')
    return (
        <group {...props} dispose={null}>
            <group scale={0.75}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube020.geometry}
                    material={materials['Material.021']}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve007.geometry}
                    material={materials['Material.049']}
                    position={[0, 0, 0.095]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={5.573}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/tailwind.glb')