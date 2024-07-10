import { OrbitControls } from '@react-three/drei';
import {MeshReact} from "./meshes/MeshReact";
import {MeshTailwind} from "./meshes/MeshTailwind";
import {MeshTypeScript} from "./meshes/MeshTypeScript";
import {FloatingObjects} from "./FloatingObjects";
import {MeshJavaScript} from "./meshes/MeshJavaScript";

const scatterObjects = (count) => {
    const objects = [];
    const meshes = [MeshReact, MeshTypeScript, MeshJavaScript]; // Array of your mesh components

    for (let i = 0; i < count; i++) {
        const position = [
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 80
        ];

        const speed = 0.1 + Math.random() * 0.5; // Random speed for shooting stars
        const velocity = {
            x: (Math.random() - 0.5) * speed,
            y: (Math.random() - 0.5) * speed,
            z: (Math.random() - 0.5) * speed
        };

        const MeshComponent = meshes[Math.floor(Math.random() * meshes.length)];
        objects.push(<MeshComponent key={i} position={position} userData={{ velocity }} />);
    }



    return objects;
};

const ThreeScene = () => {
    return (
        <>
            <FloatingObjects >
                {scatterObjects(75)} {/* adjust the number of objects as needed */}
            </FloatingObjects>
        </>
    );
}

export default ThreeScene;