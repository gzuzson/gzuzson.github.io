import { OrbitControls } from '@react-three/drei';
import {MeshReact} from "./meshes/MeshReact";
import {MeshTailwind} from "./meshes/MeshTailwind";
import {MeshTypeScript} from "./meshes/MeshTypeScript";


const ThreeScene = () => {
    return (
        <>
            <OrbitControls/>
            <MeshReact />
            <MeshTailwind />
            <MeshTypeScript />
        </>
    );
}

export default ThreeScene;