import { OrbitControls } from '@react-three/drei';
import {MeshReact} from "./meshes/MeshReact";
import {MeshTailwind} from "./meshes/MeshTailwind";
import {MeshTypeScript} from "./meshes/MeshTypeScript";
import {FloatingObjects} from "./FloatingObjects";
import {MeshJavaScript} from "./meshes/MeshJavaScript";
import {MeshGit} from "./meshes/MeshGit";
import {MeshPHP} from "./meshes/MeshPHP";
import {MeshJava} from "./meshes/MeshJava";
import {MeshPython} from "./meshes/MeshPython";

const scatterObjects = (count) => {
    const objects = [];
    const meshes = [MeshReact, MeshTypeScript, MeshJavaScript, MeshGit, MeshPHP, MeshJava, MeshPython]; // Array of your mesh components

    for (let i = 0; i < count; i++) {
        const position = [
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 40
        ];

        const speed = 0.1 + Math.random() * 0.5; // Random speed
        const velocity = {
            x: (Math.random() - 0.5) * speed,
            y: (Math.random() - 0.5) * speed,
            z: 0
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
                {scatterObjects(40)} {/* adjust the number of objects as needed */}
            </FloatingObjects>
        </>
    );
}

export default ThreeScene;