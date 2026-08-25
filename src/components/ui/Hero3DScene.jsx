import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function Hero3DScene({ className = "" }) {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene setup
    let scene, camera, renderer, animationFrameId;
    let particles, nodesGroup;
    const width = mountRef.current.clientWidth || 400;
    const height = mountRef.current.clientHeight || 350;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 18;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      nodesGroup = new THREE.Group();
      scene.add(nodesGroup);

      // Node coordinates (conceptual system network)
      const nodeData = [
        { name: "PYTHON", pos: [-5, 3.5, 0], color: 0x1b2cc1 },
        { name: "REACT", pos: [5, 3.5, 0], color: 0x7692ff },
        { name: "API", pos: [0, 0.5, 1], color: 0x78b3ce },
        { name: "DATABASE", pos: [-4.5, -3.5, 0], color: 0x84b179 },
        { name: "ML", pos: [4.5, -3.5, 0], color: 0xa2cb8b },
        { name: "GIT", pos: [0, -4.5, -1], color: 0xf96e2a },
      ];

      const nodeMeshes = [];
      nodeData.forEach((item) => {
        const geometry = new THREE.SphereGeometry(0.55, 16, 16);
        const material = new THREE.MeshBasicMaterial({
          color: item.color,
          wireframe: false,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(...item.pos);
        nodesGroup.add(mesh);
        nodeMeshes.push(mesh);
      });

      // Connections between nodes
      const connections = [
        [0, 2], // Python -> API
        [1, 2], // React -> API
        [2, 3], // API -> Database
        [2, 4], // API -> ML
        [0, 4], // Python -> ML
        [3, 5], // Database -> Git
        [4, 5], // ML -> Git
      ];

      connections.forEach(([fromIdx, toIdx]) => {
        const fromPos = new THREE.Vector3(...nodeData[fromIdx].pos);
        const toPos = new THREE.Vector3(...nodeData[toIdx].pos);
        const points = [fromPos, toPos];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x78b3ce,
          transparent: true,
          opacity: 0.35,
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        nodesGroup.add(line);
      });

      // Subtle traveling data particles
      const particleCount = 28;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const particleProgress = new Float32Array(particleCount);
      const particlePathIndices = new Uint8Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        particleProgress[i] = Math.random();
        particlePathIndices[i] = Math.floor(Math.random() * connections.length);
      }

      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x7692ff,
        size: 0.45,
        transparent: true,
        opacity: 0.85,
      });

      particles = new THREE.Points(particleGeo, particleMat);
      nodesGroup.add(particles);

      // Mouse Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e) => {
        if (prefersReducedMotion) return;
        const rect = mountRef.current.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
        mouseY = -((e.clientY - rect.top) / height - 0.5) * 2;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Resize Handler
      const handleResize = () => {
        if (!mountRef.current) return;
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener("resize", handleResize);

      // Render Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          targetX += (mouseX * 1.5 - targetX) * 0.05;
          targetY += (mouseY * 1.5 - targetY) * 0.05;

          nodesGroup.rotation.y = targetX * 0.35 + Math.sin(elapsedTime * 0.25) * 0.08;
          nodesGroup.rotation.x = -targetY * 0.35 + Math.cos(elapsedTime * 0.25) * 0.05;

          // Pulse nodes subtly
          nodeMeshes.forEach((mesh, idx) => {
            const scale = 1 + Math.sin(elapsedTime * 2 + idx) * 0.08;
            mesh.scale.set(scale, scale, scale);
          });

          // Move particles along connection lines
          const posAttr = particles.geometry.attributes.position;
          for (let i = 0; i < particleCount; i++) {
            particleProgress[i] = (particleProgress[i] + delta * 0.22) % 1;
            const pathIdx = particlePathIndices[i];
            const [fromIdx, toIdx] = connections[pathIdx];
            const from = new THREE.Vector3(...nodeData[fromIdx].pos);
            const to = new THREE.Vector3(...nodeData[toIdx].pos);
            const currentPos = from.clone().lerp(to, particleProgress[i]);

            posAttr.setXYZ(i, currentPos.x, currentPos.y, currentPos.z);
          }
          posAttr.needsUpdate = true;
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (err) {
      console.warn("WebGL disabled or unavailable, switching to SVG fallback", err);
      setHasWebGL(false);
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] overflow-hidden select-none ${className}`}
    />
  );
}

export default Hero3DScene;
