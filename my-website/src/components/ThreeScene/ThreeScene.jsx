import { OrbitControls } from '@react-three/drei';
import {Canvas} from "@react-three/fiber";

const ThreeScene = () => {
    return (
        <Canvas>
            <OrbitControls/>
            <mesh>
                <boxGeometry/>
                <meshStandardMaterial/>
            </mesh>
        </Canvas>
    );
}

export default ThreeScene;