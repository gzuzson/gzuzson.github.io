import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const CSSMesh = () => {
    const svgPath = `
        M6 28 L4 3 H28 L26 28 L16 31 L6 28 Z
        M26 5 H16 V29.5 L24 27 L26 5 Z
        M19.5 17.5 H9.5 L9 14 L17 11.5 H9 L8.5 8.5 H24 L23.5 12 L17 14.5 H23 L22 24 L16 26 L10 24 L9.5 19 H12.5 L13 21.5 L16 22.5 L19 21.5 L19.5 17.5 Z
    `;

    const loader = new SVGLoader();
    const shapes = loader.parse(svgPath).paths;

    const shapeGeometries = shapes.map(shape => new THREE.ShapeGeometry(shape));

    const materials = [
        new THREE.MeshBasicMaterial({ color: 0x1172B8 }),  // Blue
        new THREE.MeshBasicMaterial({ color: 0x33AADD }),  // Light Blue
        new THREE.MeshBasicMaterial({ color: 0xffffff })   // White
    ];

    const meshes = shapeGeometries.map((geometry, index) => {
        const material = materials[index];
        return new THREE.Mesh(geometry, material);
    });

    return meshes;
};

export default CSSMesh;
