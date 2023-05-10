import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import galaxy from "../../../assets/galaxy.png";

const GalaxyBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // create a scene, camera, renderer, and controls
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.minPolarAngle = Math.PI / 2; // set the minimum polar angle to 90 degrees (horizontal)
    controls.maxPolarAngle = Math.PI / 2; // set the maximum polar angle to 90 degrees (horizontal)
    controls.enableZoom = true; // enable zooming in and out
    controls.enableDamping = true; // enable damping for touchpad zooming

    // create a sphere geometry and material
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(galaxy, function (texture) {
        controls.minDistance = 100; // set a smaller value for minDistance
        controls.maxDistance = 500; // set a smaller value for minDistance
        texture.encoding = THREE.sRGBEncoding; // set the texture encoding to sRGB
      }),
      side: THREE.BackSide,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // position the camera inside the sphere
    camera.position.set(0, 0, 0.1);

    // set up a rotation animation for the sphere
    function animate() {
      requestAnimationFrame(animate);
      controls.update(); // update the controls for damping
      renderer.render(scene, camera);
    }
    animate();

    // handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    // clean up
    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default GalaxyBackground;
