/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MeshJavaScript(props) {
    const { nodes, materials } = useGLTF('/javascript.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve002.geometry}
                material={materials['Material.001']}
                position={[-0.038, -0.018, -0.035]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={100}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve004.geometry}
                material={materials['Material.001']}
                position={[0.056, 0.012, -0.032]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={100}
            />
        </group>
    )
}

useGLTF.preload('/javascript.glb')