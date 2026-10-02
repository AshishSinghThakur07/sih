import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080b0d, 0.02);

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Particle Cloud (Orange & Green Nodes)
    const particleCount = 160;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorOrange = new THREE.Color(0xf58220);
    const colorGreen = new THREE.Color(0x2e9e45);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const rand = Math.random();
      let c = colorOrange;
      if (rand > 0.6) c = colorGreen;
      else if (rand > 0.4) c = colorWhite;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    group.add(particles);

    // 2. Central Floating Geometric Nodes (SIH Wireframes)
    const mainGeo = new THREE.IcosahedronGeometry(6, 1);
    const mainMat = new THREE.MeshStandardMaterial({
      color: 0x101820,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const mainMesh = new THREE.Mesh(mainGeo, mainMat);
    group.add(mainMesh);

    // Secondary Inner Glow Mesh
    const innerGeo = new THREE.OctahedronGeometry(3.5, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xf58220,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Tertiary Outer Ring Mesh
    const torusGeo = new THREE.TorusGeometry(9, 0.05, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x2e9e45,
      transparent: true,
      opacity: 0.3,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 3;
    group.add(torusMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const orangeLight = new THREE.PointLight(0xf58220, 3, 40);
    orangeLight.position.set(-15, 10, 10);
    scene.add(orangeLight);

    const greenLight = new THREE.PointLight(0x2e9e45, 3, 40);
    greenLight.position.set(15, -10, 10);
    scene.add(greenLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        // Rotate objects smoothly
        mainMesh.rotation.x += 0.002;
        mainMesh.rotation.y += 0.003;

        innerMesh.rotation.x -= 0.004;
        innerMesh.rotation.y -= 0.002;

        torusMesh.rotation.z += 0.001;
        particles.rotation.y += 0.0005;

        // Smooth Mouse Parallax Lerp
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        group.rotation.y = targetX * 0.5;
        group.rotation.x = targetY * 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize Listener
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      mainGeo.dispose();
      mainMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div ref={mountRef} className="w-full h-full opacity-70" />
      {/* Radial Gradient Overlays for Soft Depth */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F58220]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#2E9E45]/12 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
