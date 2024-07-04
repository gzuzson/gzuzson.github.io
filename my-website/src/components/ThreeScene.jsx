import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

const svgPaths = [
    '../assets/background-icons/css.svg',
    '../assets/background-icons/git.svg',
    '../assets/background-icons/java.svg',
    '../assets/background-icons/javascript.svg',
    '../assets/background-icons/mongodb.svg',
    '../assets/background-icons/php.svg',
    '../assets/background-icons/react.svg',
    '../assets/background-icons/sql.svg',
    '../assets/background-icons/typescript.svg',
]

const ThreeScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const light = new THREE.DirectionalLight( 0xffffff );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    document.body.appendChild( renderer.domElement );

    camera.position.set(0, 0, 4);
    light.position.set( 0.5, -0.5,  0.5 );
    scene.add(light);

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    function animate() {

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
};

export default ThreeScene;