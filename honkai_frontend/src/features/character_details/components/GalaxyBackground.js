import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import galaxy from "../../../assets/galaxy.png";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Korone from "../../../assets/korone.glb";
import Seele from "../../../assets/pekora.glb";

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
    controls.minPolarAngle = Math.PI / 2; // removes vertical movement for camera
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = true; // enable zooming in and out
    controls.enableDamping = true; // enable damping for touchpad zooming
    controls.dampingFactor = 0.1;

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

    // create a disk geometry and material for the bottom portion
    const diskGeometry = new THREE.CircleGeometry(1000, 32);
    const diskMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a33 }); // Darker blue-gray color

    const disk = new THREE.Mesh(diskGeometry, diskMaterial);
    // const disk2 = new THREE.Mesh(diskGeometry, diskMaterial);

    disk.rotation.x = -Math.PI / 2; // rotate the disk to face upwards
    disk.position.set(0, -180, 0); // set the position of the disk

    scene.add(disk);

    // Add directional lights in three corners
    const light1 = new THREE.DirectionalLight(0xffffff, 2.0);
    light1.position.set(-1, 1, 1);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 2.0);
    light2.position.set(0, 1, -1);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 2.0);
    light3.position.set(1, -1, -1);
    scene.add(light3);

    const sunlight = new THREE.DirectionalLight(0xffffff, 4.0);
    sunlight.position.set(0, 1, 1);
    scene.add(sunlight);

    // Configure shadow settings for the disk
    disk.receiveShadow = true;

    // position the camera inside the sphere
    camera.position.set(0, 0, 5);
    // set up a rotation animation for the sphere

    // Add lighting to the scene
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Load the glTF scene
    const loader = new GLTFLoader();

    loader.load(Korone, function (gltf) {
      // Handle successful loading
      const loadedData = gltf.scene;
      loadedData.scale.set(80, 80, 80);
      loadedData.position.y = -180; // Adjust the value as needed
      loadedData.position.z = 80; // Adjust the value as needed

      scene.add(loadedData);

      // ...
    });

    function animate() {
      requestAnimationFrame(animate);
      controls.update(); // smooths movement for user movement
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

  return (
    <div className="galaxy-background">
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default GalaxyBackground;
